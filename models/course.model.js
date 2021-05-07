var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CourseSchema = new Schema({
  title: { type: String, required: true, allowNull: false },
  description: { type: String, required: true, allowNull: false },
  creation_date: { type: Date, required: true, allowNull: false },
  update_date: { type: Date, required: false },
  image: { type: String, required: true, allowNull: false },
  requirements: { type: [String], required: true, allowNull: false },
  language: { type: String, required: true, allowNull: false },
  technologies: { type: [String], required: true, allowNull: false },
  chapters: {
   type:Array
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
module.exports = mongoose.model("course", CourseSchema);
