const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const ScheduleSchema = new Schema({
  date: {
    type: Date,
    Default: Date.now,
  },
  User_id: {
    type: String,
  },
  job_id: {
    type: Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
});

module.exports = Schedule = mongoose.model('schedule', ScheduleSchema);
