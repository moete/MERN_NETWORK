var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
<<<<<<< HEAD
    views :{ type: Number, default: 0 },
    votes : { type: Number, default: 0},
    answered : { type: Boolean, default: false },
    confirm : { type: String , default: "false"},
=======
    views :{ type: Number },
    votes : { type: String},
    answered : { type: Boolean, default: false },
    confirm : { type: String, default: "false" },
>>>>>>> origin/content
    title : { type: String, required: true },
    contentText : { type: String, required: true },
    tags : { type: String, required: true },
    question_date : { type: Date } ,
    updated_at: { type: Date } ,
    owner : { type: String },
<<<<<<< HEAD
    answers : { type: Array }
=======
    answeres : { type: Array }
>>>>>>> origin/content

});
module.exports = mongoose.model('question',QuestionSchema);