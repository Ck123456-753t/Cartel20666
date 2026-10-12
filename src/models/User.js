const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student"
    },
    enrolledCourses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    }],
    completedLessons: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson"
    }],
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
