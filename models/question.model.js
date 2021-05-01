var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  views: { type: Number, default: 0 },
  votes: { type: Number, default: 0 },
  answered: { type: Boolean, default: false },
  confirm: { type: String, default: "false" },
  title: { type: String, required: true },
  contentText: { type: String, required: true },
  tags: { type: String, required: true },
  question_date: { type: Date },
  updated_at: { type: Date },
  answers: {
   type:Array
  },
  image: {
    type: String,
    required: true,
  },
  owner: {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
});
module.exports = mongoose.model("question", QuestionSchema);
