// models/question.js

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  answers: {
    type: Array,
    required: true,
  },
  correctAnswerIndex: {
    type: Number,
    required: true,
  },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
