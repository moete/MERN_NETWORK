const express = require('express');
const router = express.Router();

const Job = require('../models/Job');
const company = require('../models/Company');


// @route GET api/Job/showJobs
// @description Get all Jobs
// @access Public
const getAllJobs = async (req, res) => {
  let rech = {};
  req.query.location ? rech.location = req.query.location : null;
  req.query.job_type ? rech.job_type = req.query.job_type : null;
  req.query.title ? rech.title = req.query.title : null;

  Job.find(rech)
    .populate("company_id", { company_name: 1 })
    .then(Jobs => res.json(Jobs))
    .catch(err => res.status(404).json({ noJobsfound: 'No Jobs found' }));
};


const getJobStat = async (req, res) => {
  const result = [];
  let fullTime = 0;
  let partTime = 0;
  let remote = 0;
  Job.find()
    .then(Jobs => {
      Jobs.forEach((job) => {
        if (job.job_type === "Full Time") fullTime++
        if (job.job_type === "Part Time") partTime++
        if (job.job_type === "Remote") remote++
      })
      result.push({ label: "Full Time", value: fullTime })
      result.push({ label: "Part Time", value: partTime })
      result.push({ label: "Remote", value: remote })
      res.json(result)
    })
    .catch(err => res.status(404).json({ noJobsfound: 'No Jobs found' }));
};



// @route GET pi/Job/:id
// @description Get single book by id
// @access Public
const getJobById = async (req, res) => {
  Job.findById(req.params.id)
    .then(Jobs => res.json(Jobs))
    .catch(err => res.status(404).json({ noJobsfound: 'No Jobs found' }));
};


// @route GET api/Job
// @description api/Job/addcomp
// @access Public
const createJob = async (req, res) => {
  Job.create(req.body)
    .then(Jobs => res.json({ msg: 'Job added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Job' }));
};

// @route GET api/books/:id
// @description Update book
// @access Public
const updateJobById = async (req, res) => {
  Job.findByIdAndUpdate(req.params.id, req.body)
    .then(Jobs => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
};

// @route GET api/books/:id
// @description Delete book by id
// @access Public
const deleteJob = async (req, res) => {
  Job.findByIdAndRemove(req.params.id, req.body)
    .then(Jobs => res.json({ mgs: 'Job entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a book' }));
};

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  deleteJob,
  updateJobById,
  getJobStat
};