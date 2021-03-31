var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    views :{ type: Number, default: 0 },
    votes : { type: Number, default: 0},
    answered : { type: Boolean, default: false },
    confirm : { type: String , default: "false"},
    title : { type: String, required: true },
    contentText : { type: String, required: true },
    tags : { type: String, required: true },
    question_date : { type: Date } ,
    updated_at: { type: Date } ,
    owner : { type: String },
    answers : { type: Array }

});
module.exports = mongoose.model('question',QuestionSchema);