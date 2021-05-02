var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var InvitationSchema = new Schema({
  from_user: { type: String, required: true },
  to_user: { type: String, required: true },
  role: { type: Array, required: true },
  groupname: { type: String, required: true },
  accepted: { type: Boolean, default: false },
});
module.exports = mongoose.model("invitation", InvitationSchema);
