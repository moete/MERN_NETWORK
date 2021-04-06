const mongoose = require('mongoose');

const PostedOnSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  job_id: {
    type: Schema.Types.ObjectId,
    ref: 'Job',
    required: true
 }
});

module.exports = Company = mongoose.model('postedOn', PostedOnSchema);