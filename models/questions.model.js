var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    _id: String,
    views : String,
    votes : String,
    answered : Boolean,
    votes : Array,
    verified : Boolean,
    title : String,
    contentText : String,
    tags : String,
    question_date : Date ,
    owner : String,
    answeres : Array

});
module.exports = mongoose.model('question',QuestionSchema);