var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MembershipSchema = new Schema({
    username: {type: String, required: true},
    desiredgroup: {type: String, required: true},
    question_and_condition: {type: Boolean, default: false},
    accepted : {type: Boolean, default:'false'},

});
module.exports = mongoose.model('membership',MembershipSchema);