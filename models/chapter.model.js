
const mongoose = require('mongoose');
const Quiz = require('./quiz.model')

const chapterSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: { type: String, required: true, allowNull: false },
    creation_date: { type: Date, required: true, allowNull: false },
    update_date: { type: Date, required: false},
    release_date: { type: Date, required: false},
    deadline_date: { type: Date, required: false},
    quiz: {type: Quiz.schema},
    source : { type: Array ,required : true},

});

module.exports = mongoose.model('chapter', chapterSchema);