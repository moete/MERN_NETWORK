const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let Schema = mongoose.Schema;
const JobtypeSchema = new Schema({
  type_name: {
    type: String,
    required: true,
  },
  type_description: {
    type: String,
  },
});

module.exports = jobtype = mongoose.model('jobtype', JobtypeSchema);
