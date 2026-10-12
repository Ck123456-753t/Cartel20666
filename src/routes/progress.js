const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/User");
const Course = require("../models/Course");

const router = express.Router();

async function requireUser(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    const [scheme, token] = header.split(" ");

    if (scheme !== "Bearer" || !token) {
      return res.status(401).json({
        success: false,
        message: "Please log in to access learning progress."
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.isActive === false) {
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
      message: "Invalid or expired session."
    });
  }
}

// Return a consistent progress response for the dashboard and profile.
router.get("/", requireUser, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate({
        path: "enrolledCourses",
        select: "title slug description category level published lessons"
      })
      .lean();

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User account not found."
      });
    }

    const completedLessons = (user.completedLessons || []).map(
      id => String(id)
    );

    const enrolledCourses = user.enrolledCourses || [];

    let totalLessons = 0;
    let completedEnrolledLessons = 0;

    for (const course of enrolledCourses) {
      const lessons = course.lessons || [];
      totalLessons += lessons.length;

      for (const lesson of lessons) {
        if (completedLessons.includes(String(lesson._id))) {
          completedEnrolledLessons++;
        }
      }
    }

    res.json({
      success: true,
      user: {
        id: String(user._id),
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt
      },
      enrolledCourses,
      completedLessons,
      completedLessonIds: completedLessons,
      stats: {
        enrolledCourses: enrolledCourses.length,
        totalLessons,
        completedLessons: completedEnrolledLessons,
        progressPercent: totalLessons
          ? Math.round(completedEnrolledLessons / totalLessons * 100)
          : 0
      }
    });
  } catch (error) {
    console.error("Load progress error:", error.message);

    res.status(500).json({
      success: false,
      message: "Could not load learning progress."
    });
  }
});

// Save a lesson completion record.
router.post("/complete", requireUser, async (req, res) => {
  try {
    const { courseId, lessonId } = req.body;

    if (
      !mongoose.isValidObjectId(courseId) ||
      !mongoose.isValidObjectId(lessonId)
    ) {
      return res.status(400).json({
        success: false,
        message: "Valid course and lesson IDs are required."
      });
    }

    const isEnrolled = req.user.enrolledCourses.some(
      id => String(id) === String(courseId)
    );

    if (!isEnrolled) {
      return res.status(403).json({
        success: false,
        message: "Enroll in this course before completing its lessons."
      });
    }

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found."
      });
    }

    const lessonExists = course.lessons.some(
      lesson => String(lesson._id) === String(lessonId)
    );

    if (!lessonExists) {
      return res.status(404).json({
        success: false,
        message: "This lesson does not belong to the selected course."
      });
    }

    await User.updateOne(
      { _id: req.user._id },
      { $addToSet: { completedLessons: lessonId } }
    );

    const updatedUser = await User.findById(req.user._id)
      .select("completedLessons")
      .lean();

    const completedLessons = (updatedUser.completedLessons || []).map(
      id => String(id)
    );

    res.json({
      success: true,
      message: "Lesson completion saved.",
      completedLessons,
      completedLessonIds: completedLessons
    });
  } catch (error) {
    console.error("Save progress error:", error.message);

    res.status(500).json({
      success: false,
      message: "Could not save lesson completion."
    });
  }
});

module.exports = router;
