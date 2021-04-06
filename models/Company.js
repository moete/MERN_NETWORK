const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true
  },
  company_details: {
   type: String
  }
});
/*
CompanySchema.virtual('companyid', {
    ref: 'Job', //The Model to use
    localField: '_id', //Find in Model, where localField 
    foreignField: 'company_id', // is equal to foreignField
 });
 
 // Set Object and Json property to true. Default is set to false
 CompanySchema.set('toObject', { virtuals: true });
 CompanySchema.set('toJSON', { virtuals: true });
*/
module.exports = Company = mongoose.model('company', CompanySchema);