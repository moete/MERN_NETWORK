var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CourseSchema = new Schema({
   title : { type: String , require : true },
   technologies : { type: Array },
   image : { type: String},
   description : { type: String , require : true},
   creation_date : { type: Date } ,
   updated_at : { type: Date } ,
   requirments : { type: Array},
   chapters : { type: Array },
   
   
    

});
module.exports = mongoose.model('course',CourseSchema);