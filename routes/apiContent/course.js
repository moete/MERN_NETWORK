const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const { check, validationResult } = require('express-validator/check');
const { validateFile } = require('../../middleware/validator');

const Course = require('../../models/course.model');
const Chapter = require('../../models/chapter.model');
const { route } = require('./question');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './client/public/uploads/courses/Logo/');
  },
  filename: (req, file, cb) => {
    cb(null, 'Course--' + file.originalname);
  },
});

var upload = multer({ storage: storage });

//multiple files
var Filesstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './client/public/uploads/courses/chapters/');
  },
  filename: (req, file, cb) => {
    cb(null, '--' + file.originalname);
  },
});

var MultipuleUpload = multer({ storage: Filesstorage });
var files = MultipuleUpload.fields([
  {
    name: 'field1',
  },
  {
    name: 'field2',
    maxCount: 3,
  },
]);

// @route GET api/course
// @description Get all courses
// @access Public
router.get('/', (req, res) => {
  Course.find()
    .then((courses) => res.json(courses))
    .catch((err) =>
      res.status(404).json({ nocoursesfound: 'No courses found' })
    );
});
router.get('/find3', (req, res) => {
  Course.find()
    .sort({ date: -1 })
    .limit(3)
    .then((courses) => res.json(courses))
    .catch((err) =>
      res.status(404).json({ nocoursesfound: 'No courses found' })
    );
});

// @route GET api/course/add
// @description Get all courses
// @access Public

router.post(
  '/add',
  upload.single('image'),
  validateFile,
  [
    check('title', 'title is required').not().isEmpty(),
    check('description', 'description is required').not().isEmpty(),
    check('description', 'description must have 6+ characters long').isLength({
      min: 6,
    }),
    check('requirments', 'requirments is required').not().isEmpty(),
    check('chapters', 'chapters is required').not().isEmpty(),
    check('technologies', 'technologies is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const newCourse = new Course({
      title: req.body.title,
      creation_date: new Date(),
      description: req.body.description,
      requirments: req.body.requirments,
      chapters: req.body.chapters,
      technologies: req.body.technologies,
      image: req.file.originalname,
    });

    newCourse
      .save()
      .then(() => res.json('Course added!'))
      .catch((err) => res.status(400).json('Error: ' + err));
  }
);

router.post('/addCourse', upload.single('image'), (req, res, next) => {
  var newCourse = new Course({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    creation_date: new Date(),
    image: req.file.originalname,
    requirements: req.body.requirements,
    language: req.body.language,
    field: req.body.field,
    technologies: req.body.technologies,
  });
  newCourse
    .save()
    .then(() => res.json({ mesage: 'Successfully created a new Course' }))
    .catch((err) => {
      return res.status(400).json({ message: err });
    });
});
// add a chapter
router.post('/addChapter/:id', files, (req, res, next) => {
  var newChapter = new Chapter({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    creation_date: new Date(),
    update_date: new Date(),
    release_date: new Date(),
    deadline_date: new Date(),
    // source : req.files.originalname
  });
  Course.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { chapters: newChapter } }
  )
    .then((result) => {
      return res
        .status(200)
        .json({ mesage: 'successfully created a new chapter' });
    })
    .catch((err) => {
      return res.status(400).json({ message: err });
    });
  /*    courseModel
         .findByIdAndUpdate({ _id: req.body.id }, { $push: { chapters: newChapter } })
         .then((result) => {
             return res
                 .status(200)
                 .json({ mesage: "successfully created a new chapter" });
         })
         .catch((err) => {
             return res.status(400).json({ message: err });
         }); */
});
// @route GET api/couse/:id
// @description Get single couse by id
// @access Public
router.get('/:id', (req, res) => {
  Course.findById(req.params.id)
    .then((courses) => res.json(courses))
    .catch((err) =>
      res.status(404).json({ nocoursesfound: 'No courses found' })
    );
});

// @route GET api/course/:id
// @description Delete course by id
// @access Public
router.delete('/:id', (req, res) => {
  Course.findByIdAndRemove(req.params.id, req.body)
    .then((courses) => res.json({ mgs: 'courses entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a questions' }));
});

// @route POST api/course/:id
// @description Update course by id
// @access Public

router.post('/update/:id', upload.single('image'), (req, res) => {
  Course.findById(req.params.id)
    .then((course) => {
      course.title = req.body.title;
      course.updated_at = new Date();
      course.description = req.body.description;
      course.requirments = req.body.requirments;
      course.chapters = req.body.chapters;
      course.technologies = req.body.technologies;
      course.image = req.file.originalname;

      course
        .save()
        .then(() => res.json('Course updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});
module.exports = router;
