const mongoose = require('mongoose');

const JobtypeSchema = new mongoose.Schema({
  type_name: {
    type: String,
    required: true
  },
  type_description: {
   type: String
  }
});
JobtypeSchema.virtual('job_type', {
    ref: 'Job', //The Model to use
    localField: '_id', //Find in Model, where localField 
    foreignField: 'job_type_id', // is equal to foreignField
 });
 
 // Set Object and Json property to true. Default is set to false
 JobtypeSchema.set('toObject', { virtuals: true });
 JobtypeSchema.set('toJSON', { virtuals: true });
 

module.exports = Jobtype = mongoose.model('jobtype', JobtypeSchema);