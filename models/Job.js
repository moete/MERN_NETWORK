const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  job_type_id: {
    type: Schema.Types.ObjectId,
    ref: 'Job_type',
    required: true
 },
  posted_date: {
    type: Date,
    default: Date.now
  },
  start_date: {
    type: Date,
    required: true
  },
  employees_needed: {
    type: Number
  },
  description: {
    type: String
  },
  company_id: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: true
 },
  date_process_started: {
    type: Date,
   
  }
});

JobSchema.virtual('jobposted_on', {
  ref: 'Posted_on', //The Model to use
  localField: '_id', //Find in Model, where localField 
  foreignField: 'job_id', // is equal to foreignField
});

// Set Object and Json property to true. Default is set to false
JobSchema.set('toObject', { virtuals: true });
JobSchema.set('toJSON', { virtuals: true });

module.exports = Job = mongoose.model('job', JobSchema);