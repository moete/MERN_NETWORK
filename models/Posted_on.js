const mongoose = require('mongoose');
let Schema = mongoose.Schema ;
mongoose.Promise = global.Promise ;

const PostedOnSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  user_id: {
    type: Schema.Types.ObjectId,
   required: true
  },
  job_id: {
    type: Schema.Types.ObjectId,
    ref: 'Job',
    required: true
 }
});

module.exports = postedon = mongoose.model('postedOn', PostedOnSchema);