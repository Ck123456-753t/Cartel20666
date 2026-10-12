const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  selectedAnswer: {
    type: Number,
    required: true,
    min: -1
  },
  correct: {
    type: Boolean,
    required: true
  },
  pointsAwarded: {
    type: Number,
    required: true,
    min: 0
  }
}, { _id: false });

const quizAttemptSchema = new mongoose.Schema({
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
    required: true,
    index: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },
  answers: {
    type: [answerSchema],
    default: []
  },
  score: {
    type: Number,
    required: true,
    min: 0
  },
  totalPoints: {
    type: Number,
    required: true,
    min: 0
  },
  percentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  passed: {
    type: Boolean,
    required: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

quizAttemptSchema.index({ student: 1, quiz: 1, submittedAt: -1 });

module.exports = mongoose.model("QuizAttempt", quizAttemptSchema);
