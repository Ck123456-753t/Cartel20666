const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Course = require("../models/Course");
const User = require("../models/User");

const router = express.Router();

async function requireUser(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ")
      ? header.slice(7)
      : null;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please log in to continue."
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: "Your account is unavailable."
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired login session."
    });
  }
}

// List all published courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find({ published: true })
      .select("title slug description category level lessons");

    res.json({
      success: true,
      courses: courses.map(course => ({
        id: course._id,
        title: course.title,
        slug: course.slug,
        description: course.description,
        category: course.category,
        level: course.level,
        lessonCount: course.lessons.length
      }))
    });
  } catch (error) {
    console.error("List courses error:", error.message);
    res.status(500).json({
      success: false,
      message: "Could not load courses."
    });
  }
});

// IMPORTANT: specific routes must come before /:slug
router.get("/student/enrolled", requireUser, async (req, res) => {
  try {
    const courses = await Course.find({
      _id: { $in: req.user.enrolledCourses },
      published: true
    }).select("title slug description category level");

    res.json({
      success: true,
      courses
    });
  } catch (error) {
    console.error("Load enrolled courses error:", error.message);
    res.status(500).json({
      success: false,
      message: "Could not load enrolled courses."
    });
  }
});

// Get a student's enrolled course IDs
router.get("/student/enrollment-ids", requireUser, async (req, res) => {
  res.json({
    success: true,
    courseIds: req.user.enrolledCourses.map(id => id.toString())
  });
});

// Enroll the logged-in student
router.post("/:id/enroll", requireUser, async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid course ID."
      });
    }

    const course = await Course.findOne({
      _id: req.params.id,
      published: true
    });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Published course not found."
      });
    }

    const alreadyEnrolled = req.user.enrolledCourses.some(
      id => id.toString() === course._id.toString()
    );

    if (!alreadyEnrolled) {
      req.user.enrolledCourses.push(course._id);
      await req.user.save();
    }

    res.json({
      success: true,
      message: alreadyEnrolled
        ? "You are already enrolled."
        : "Enrollment successful.",
      course: {
        id: course._id,
        title: course.title,
        slug: course.slug
      }
    });
  } catch (error) {
    console.error("Enrollment error:", error.message);
    res.status(500).json({
      success: false,
      message: "Could not enroll in this course."
    });
  }
});

// Get one published course and its lessons
router.get("/:slug", async (req, res) => {
  try {
    const course = await Course.findOne({
      slug: req.params.slug,
      published: true
    });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found."
      });
    }

    res.json({
      success: true,
      course: {
        id: course._id,
        title: course.title,
        slug: course.slug,
        description: course.description,
        category: course.category,
        level: course.level,
        lessons: course.lessons.sort((a, b) => a.order - b.order)
      }
    });
  } catch (error) {
    console.error("Load course error:", error.message);
    res.status(500).json({
      success: false,
      message: "Could not load course."
    });
  }
});

module.exports = router;
