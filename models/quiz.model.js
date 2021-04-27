// This file describes the attributes within the QUIZ model.

const mongoose = require("mongoose");
const quizSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  questions: {
    type: [
      { _id: mongoose.Types.ObjectId,
        question: String,
        answers: [String],
        rightAnswer: String,
        duration: Number,
        index : {type : Number, required : true}
      },
    ],
    required: true,
    allowNull: false,
  },
});

module.exports = mongoose.model("quiz", quizSchema);
