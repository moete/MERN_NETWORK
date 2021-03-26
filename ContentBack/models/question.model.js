var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    views :{ type: Number },
    votes : { type: String},
    answered : { type: Boolean, default: false },
    verified : { type: String },
    title : { type: String, required: true },
    contentText : { type: String, required: true },
    tags : { type: String, required: true },
    question_date : { type: Date } ,
    updated_at: { type: Date } ,
    owner : { type: String },
    answeres : { type: Array }

});
module.exports = mongoose.model('question',QuestionSchema);