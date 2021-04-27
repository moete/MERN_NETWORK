// routes/api/questions.js
const auth = require('../../middleware/auth');

const express = require('express');
const router = express.Router();
const multer = require('multer');
const User = require('../../models/User');

const Question = require('../../models/question.model');
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './client/public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, 'Screenshot-Post--' + file.originalname);
  },
});

var upload = multer({ storage: storage });

// Load questions model

// @route GET api/question
// @description Get all questions
// @access Public
router.get('/', (req, res) => {
  Question.find()
    .then((questions) => res.json(questions))
    .catch((err) =>
      res.status(404).json({ noquestionsfound: 'No questions found' })
    );
});
router.get('/today', (req, res) => {
  Question.find()
    .where({
      question_date: new Date(Date.now()).toLocaleDateString(),
    })
    .then((questions) => res.json(questions))
    .catch((err) =>
      res.status(404).json({ noquestionsfound: 'No questions found' })
    );
});
router.get('/mari', function (req, res, next) {
  res.send('date ' + new Date(Date.now()).toLocaleDateString());
});
// @route GET api/question/add
// @description Get all questions
// @access Public
router.post('/add', auth, upload.single('image'), async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const newQuestion = new Question({
      title: req.body.title,
      question_date: new Date(),
      contentText: req.body.contentText,
      tags: req.body.tags,
      image: req.body.image,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    });
    const question = await newQuestion.save();
    res.json(question);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

  /* newQuestion
    .save()
    .then(() => res.json('Question added!'))
    .catch((err) => res.status(400).json('Error: ' + err));*/
});

// @route GET api/question/:id
// @description Get single question by id
// @access Public

router.get('/:id', (req, res) => {
  Question.findById(req.params.id)
    .then((questions) => res.json(questions))
    .catch((err) =>
      res.status(404).json({ noquestionsfound: 'No questions found' })
    );
});

// @route GET api/question/:id
// @description Delete question by id
// @access Public
router.delete('/:id', (req, res) => {
  Question.findByIdAndRemove(req.params.id, req.body)
    .then((questions) =>
      res.json({ mgs: 'questions entry deleted successfully' })
    )
    .catch((err) => res.status(404).json({ error: 'No such a questions' }));
});
// @route POST api/question/:id
// @description Update question by id
// @access Public

router.post('/update/:id', upload.single('image'), (req, res) => {
  Question.findById(req.params.id)
    .then((qst) => {
      qst.title = req.body.title;
      qst.updated_at = new Date();
      qst.contentText = req.body.contentText;
      qst.tags = req.body.tags;
      qst.image = req.file.originalname;

      qst
        .save()
        .then(() => res.json('Question updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});
router.route('/verified/:id').post((req, res) => {
  Question.findById(req.params.id)
    .then((qst) => {
      qst.confirm = 'true';

      qst
        .save()
        .then(() => res.json('Question verified!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

// add comment

router.route('/addComments/:id').post((req, res) => {
  Question.findById(req.params.id)
    .then((qst) => {
      qst.answers.push({
        answer: req.body.answer,
        user: req.body.user,
      });
      qst
        .save()
        .then(() => res.json('comment added !'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});
module.exports = router;
