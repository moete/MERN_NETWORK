// routes/api/questions.js

const express = require('express');
const router = express.Router();

// Load questions model
const Question = require('../../models/questions.model');

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
router.get('/:id', (req, res) => {
  Question.findById(req.params.id)
    .then(questions => res.json(questions))
    .catch(err => res.status(404).json({ noquestionsfound: 'No questions found' }));
});



// @route GET api/questions
// @description add/save questions
// @access Public
router.post('/', (req, res) => {
  Question.create(req.body)
    .then(questions => res.json({ msg: 'question added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this questions' }));
});

// @route GET api/questions/:id
// @description Delete question by id
// @access Public
router.delete('/:id', (req, res) => {
  Question.findByIdAndRemove(req.params.id, req.body)
    .then(questions => res.json({ mgs: 'questions entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a questions' }));
});
  module.exports = router;