const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let Schema = mongoose.Schema;
const CompanySchema = new Schema({
  company_name: {
    type: String,
    required: true,
  },
  company_details: {
    type: String,
  },
});

module.exports = company = mongoose.model('company', CompanySchema);
