
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groupSchema = new Schema({
    name: {type: String, required: true},
    theme: {type: Array, required: true},
    privacy: {type: String , default:"public"},
    coverphoto: {type: String, required: true},
    superadmin : {type: String, required: true},
    members : { type: Array},
    admins : { type: Array},
   
    

});
module.exports = mongoose.model('group',groupSchema);