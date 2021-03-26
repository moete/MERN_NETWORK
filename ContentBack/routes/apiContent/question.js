// routes/api/questions.js

const express = require('express');
const router = express.Router();

// Load questions model
const Question = require('../../models/question.model');

// @route GET api/questions
// @description Get all questions
// @access Public
router.get('/', (req, res) => {
    Question.find()
      .then(questions => res.json(questions))
      .catch(err => res.status(404).json({ noquestionsfound: 'No questions found' }));
  });

  // @route GET api/questions/:id
// @description Get single question by id
// @access Public
router.get('/:question_id', (req, res) => {
  Question.findById(req.params.id)
    .then(questions => res.json(questions))
    .catch(err => res.status(404).json({ noquestionsfound: 'No questions found' }));
});

// @route GET api/questions/:id
// @description Delete question by id
// @access Public
router.delete('/:question_id', (req, res) => {
  Question.findByIdAndRemove(req.params.id, req.body)
    .then(questions => res.json({ mgs: 'questions entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a questions' }));
});
// add
router.route('/add').post((req, res) => {
    const title = req.body.title;
    const question_date = new Date ();
    const contentText = req.body.contentText;
    const tags = req.body.tags;
  
    const newQuestion = new Question({
        title,
        contentText,
        tags,
        question_date,
    });
  
    newQuestion.save()
    .then(() => res.json('Question added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  //update
  router.route('/update/:question_id').post((req, res) => {
    Question.findById(req.params.id)
      .then(qst => {
        qst.title = req.body.title;
        qst.updated_at = new Date ();
        qst.contentText = req.body.contentText;
        qst.tags = req.body.tags;
  
    
  
        qst.save()
          .then(() => res.json('Question updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  module.exports = router;