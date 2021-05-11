const express = require('express');
const {
  getAllJobs,
  getJobById,
  createJob,
  updateJobById,
  deleteJob,
  getJobStat,
} = require('../controllers/job.controller');

const router = new express.Router();

router.post('/create', createJob);
router.get('/showJob', getAllJobs);
router.get('/stat', getJobStat);
router.get('/showbyId', getJobById);
router.patch('/updateJob/:id', updateJobById);
router.delete('/deleteJob/:id', deleteJob);

module.exports = router;
