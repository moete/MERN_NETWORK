
const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const Course = require ('../../../models/course.model');
=======
const Course = require ('../../models/course.model');
>>>>>>> origin/content

// @route GET api/course
// @description Get all courses
// @access Public
router.get('/', (req, res) => {
    Course.find()
      .then(courses => res.json(courses))
      .catch(err => res.status(404).json({ nocoursesfound: 'No courses found' }));
  });

  // @route GET api/course/add
// @description Get all courses
// @access Public
router.route('/add').post((req, res) => {
    const title = req.body.title;
    const creation_date = new Date ();
    const description = req.body.description;
    const requirments = req.body.requirments;
    const chapters = req.body.chapters;
    const technologies = req.body.technologies;
    const image = req.body.image;
  
    const newCourse = new Course({
        title,
        creation_date,
        description,
        requirments,
        chapters,
        technologies,
        image
    });
  
    newCourse.save()
    .then(() => res.json('Course added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  // @route GET api/couse/:id
// @description Get single couse by id
// @access Public

router.get('/:id', (req, res) => {
    Course.findById(req.params.id)
      .then(courses => res.json(courses))
      .catch(err => res.status(404).json({ nocoursesfound: 'No courses found' }));
  });

  // @route GET api/course/:id
// @description Delete course by id
// @access Public
router.delete('/:id', (req, res) => {
    Course.findByIdAndRemove(req.params.id, req.body)
      .then(courses => res.json({ mgs: 'courses entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a questions' }));
  });

  // @route POST api/course/:id
// @description Update course by id
// @access Public

router.route('/update/:id').post((req, res) => {
    Course.findById(req.params.id)
      .then(course => {
        course.title = req.body.title;
        course.updated_at = new Date ();
        course.description = req.body.description;
        course.requirments = req.body.requirments;
        course.chapters = req.body.chapters;
        course.technologies = req.body.technologies;
        course.image = req.body.image;
  
        course.save()
          .then(() => res.json('Course updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router