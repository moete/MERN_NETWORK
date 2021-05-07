const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const { check, validationResult } = require("express-validator/check");
const { validateFile } = require("../../middleware/validator");

const Course = require("../../models/course.model");
const { route } = require("./question");
const auth = require("../../middleware/auth");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/public/uploads/courses/Logo/");
  },
  filename: (req, file, cb) => {
    cb(null, "Course--" + file.originalname);
  },
});

var upload = multer({ storage: storage });

//multiple files
var Filesstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/public/uploads/courses/chapters/");
  },
  filename: (req, file, cb) => {
    cb(null, "Chapter--" + file.originalname);
  },
});

var MultipuleUpload = multer({ storage: Filesstorage });
var files = MultipuleUpload.fields([
  {
    name: "field1",
  },
  {
    name: "field2",
    maxCount: 3,
  },
]);

// @route GET api/course
// @description Get all courses
// @access Public
router.get("/", (req, res) => {
  Course.find()
    .then((courses) => res.json(courses))
    .catch((err) =>
      res.status(404).json({ nocoursesfound: "No courses found" })
    );
});
router.get("/find3", (req, res) => {
  Course.find()
    .sort({ date: -1 })
    .limit(3)
    .then((courses) => res.json(courses))
    .catch((err) =>
      res.status(404).json({ nocoursesfound: "No courses found" })
    );
});

// @route GET api/course/add
// @description Get all courses
// @access Public

router.post(
  "/add",
  upload.single("image"),
  validateFile,
  auth,

  [
    check("title", "title is required").not().isEmpty(),
    check("description", "description is required").not().isEmpty(),
    check("description", "description must have 6+ characters long").isLength({
      min: 6,
    }),
    check("requirements", "requirements is required").not().isEmpty(),
    check("technologies", "technologies is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id);
      const newCourse = new Course({
        title: req.body.title,
        creation_date: new Date(),
        description: req.body.description,
        requirements: req.body.requirements,
        language: req.body.language,
        technologies: req.body.technologies,
        image: req.file.originalname,
        owner: { user: req.user.id, name: user.name, avatar: user.avatar },
      });
      const course = await newCourse.save();
      res.json(course);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// add a chapter
router.post(
  "/addChapter/:id",
  MultipuleUpload.single("source"),
  (req, res, next) => {
    Course.findByIdAndUpdate(req.params.id, req.body).then((course) => {
      course.chapters.push({
        ChapterTitle: req.body.ChapterTitle,
        source: req.file,
        creation_date: new Date(),
      });

      course
        .save()
        .then(() => res.json('chapter added !'))
        .catch((err) => res.status(400).json('Error: ' + err));
    });
  }
);
// @route GET api/couse/:id
// @description Get single couse by id
// @access Public
router.get("/:id", (req, res) => {
  Course.findById(req.params.id)
    .then((courses) => res.json(courses))
    .catch((err) =>
      res.status(404).json({ nocoursesfound: "No courses found" })
    );
});

// @route GET api/course/:id
// @description Delete course by id
// @access Public
router.delete("/:id", (req, res) => {
  Course.findByIdAndRemove(req.params.id, req.body)
    .then((courses) => res.json({ mgs: "courses entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a questions" }));
});

// @route POST api/course/:id
// @description Update course by id
// @access Public

router.post("/update/:id", upload.single("image"), (req, res) => {
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
        .then(() => res.json("Course updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
