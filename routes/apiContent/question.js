// routes/api/questions.js

const express = require("express");
const router = express.Router();
const multer = require("multer");
const { check, validationResult } = require('express-validator/check');
const {validateFile} = require('../../middleware/validator');

const Question = require("../../models/question.model");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, "Screenshot-Post--" + file.originalname);
  },
});

var upload = multer({ storage: storage });

// Load questions model

// @route GET api/question
// @description Get all questions
// @access Public
router.get("/", (req, res) => {
  Question.find()
    .then((questions) => res.json(questions))
    .catch((err) =>
      res.status(404).json({ noquestionsfound: "No questions found" })
    );
});
router.get("/today", (req, res) => {
  Question.find().where({ 
    question_date : new Date (Date.now()).toLocaleDateString()})
    .then((questions) => res.json(questions))
    .catch((err) =>
      res.status(404).json({ noquestionsfound: "No questions found" })
    );
});
router.get('/mari', function(req, res, next) {
 
  res.send( 'date '+ new Date (Date.now()).toLocaleDateString() );
});
// @route GET api/question/add
// @description Get all questions
// @access Public
router.post("/add",
   upload.single("image"), 
   validateFile,

[
  check('title', 'title is required').not().isEmpty(),
  check('contentText', 'contentText is required').not().isEmpty(),
  check('contentText', 'contentText must have 6+ characters long').isLength({ min: 6 }),
  check('tags', 'tags is required').not().isEmpty()
 
 ] , async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const newQuestion = new Question({
    title: req.body.title,
    question_date:new Date(),
    contentText: req.body.contentText,
    tags: req.body.tags,
    image: req.file.originalname,
  });

  newQuestion
    .save()
    .then(() => res.json("Question added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// @route GET api/question/:id
// @description Get single question by id
// @access Public
router.route('/:id').get((req, res) => {
  Question.findById(req.params.id)
  .then(question => res.json(question))
  .catch(err => res.status(400).json('Error: ' +err));
});
// @route GET api/question/:id
// @description Delete question by id
// @access Public
router.delete("/:id", (req, res) => {
  Question.findByIdAndRemove(req.params.id, req.body)
    .then((questions) =>
      res.json({ mgs: "questions entry deleted successfully" })
    )
    .catch((err) => res.status(404).json({ error: "No such a questions" }));
});
// @route POST api/question/:id
// @description Update question by id
// @access Public

router.post("/update/:id", 
upload.single("image"), 
(req, res) => {
  Question.findById(req.params.id)
    .then((qst) => {
      qst.title = req.body.title;
      qst.updated_at = new Date();
      qst.contentText = req.body.contentText;
      qst.tags = req.body.tags;
      qst.image = req.file.originalname;

      qst
        .save()
        .then(() => res.json("Question updated!"))
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/verified/:id").post((req, res) => {
  Question.findById(req.params.id)
    .then((qst) => {
      qst.confirm = "true";

      qst
        .save()
        .then(() => res.json("Question verified!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// add comment

router.route("/addComments/:id").post((req, res) => {
    Question.findById(req.params.id)
      .then((qst) => {
       qst.answers.push({ 
         answer: req.body.answer , 
         user: req.body.user
      });
        qst
          .save()
          .then(() => res.json("comment added !"))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });
module.exports = router;
