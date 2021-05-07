const express = require('express');
const {
  getAllSchedule,
  getScheduleById,
  createSchedule,
  updateScheduleById,
  deleteSchedule,
} = require('../controllers/schedule.controller');

const router = new express.Router();

router.post('/', createSchedule);
router.get('/showschedules', getAllSchedule);
router.get('/showschedule/:id', getScheduleById);
router.patch('/updateschedule/:id', updateScheduleById);
router.delete('/deleteschedule/:id', deleteSchedule);

module.exports = router;
