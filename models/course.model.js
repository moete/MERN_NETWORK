var mongoose = require('mongoose');
const Chapter = require('./chapter.model')

var Schema = mongoose.Schema;

var CourseSchema = new Schema({
  
   _id: mongoose.Types.ObjectId,
   title: { type: String, required: true, allowNull: false },
   description: { type: String, required: true, allowNull: false },
   creation_date: { type: Date, required: true, allowNull: false },
   update_date: { type: Date, required: false},
   image: { type: String, required: true, allowNull: false },
   requirements: { type: [String], required: true, allowNull: false },
  // language: { type: String, required: true, allowNull: false },
   //field: { type: String, required: true, allowNull: false },
   technologies: { type: [String], required: true, allowNull: false },
   chapters: {type: [Chapter.schema], required: false},
   chapters_count : { type: Number ,default : 0}
   
    

});
module.exports = mongoose.model('course',CourseSchema);