const mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const PostedOnSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  job_id: {
    type: Schema.Types.ObjectId,
    ref: 'job',
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = postedon = mongoose.model('postedOn', PostedOnSchema);
