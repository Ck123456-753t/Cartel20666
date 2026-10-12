const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 180
  },
  url: {
    type: String,
    required: true,
    trim: true
  },
  originalName: {
    type: String,
    required: true,
    trim: true
  },
  mimeType: {
    type: String,
    required: true,
    trim: true
  },
  size: {
    type: Number,
    required: true,
    min: 0
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
}, { _id: true });

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    default: ""
  },
  order: {
    type: Number,
    default: 1
  },
  resources: {
    type: [resourceSchema],
    default: []
  }
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: [
      "transcription",
      "academic-writing",
      "data-entry",
      "programming",
      "web-design",
      "note-taking"
    ],
    required: true
  },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    default: "beginner"
  },
  lessons: {
    type: [lessonSchema],
    default: []
  },
  published: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);
