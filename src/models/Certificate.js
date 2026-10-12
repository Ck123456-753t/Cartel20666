const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  certificateNumber: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  },
  studentName: {
    type: String,
    required: true,
    trim: true
  },
  courseTitle: {
    type: String,
    required: true,
    trim: true
  },
  lessonCount: {
    type: Number,
    required: true,
    min: 1
  },
  issuedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

certificateSchema.index(
  { student: 1, course: 1 },
  { unique: true }
);

module.exports = mongoose.model("Certificate", certificateSchema);
