const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true
  },
  options: {
    type: [String],
    required: true,
    validate: {
      validator: options =>
        Array.isArray(options) &&
        options.length >= 2 &&
        options.length <= 6 &&
        options.every(option =>
          typeof option === "string" && option.trim().length > 0
        ),
      message: "Each question needs 2 to 6 non-empty options."
    }
  },
  correctAnswer: {
    type: Number,
    required: true,
    min: 0
  },
  explanation: {
    type: String,
    default: ""
  },
  points: {
    type: Number,
    default: 1,
    min: 1
  }
});

const quizSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
    index: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ""
  },
  passMark: {
    type: Number,
    default: 70,
    min: 0,
    max: 100
  },
  timeLimitMinutes: {
    type: Number,
    default: 0,
    min: 0
  },
  questions: {
    type: [questionSchema],
    default: []
  },
  published: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

quizSchema.index({ course: 1, published: 1 });

module.exports = mongoose.model("Quiz", quizSchema);
