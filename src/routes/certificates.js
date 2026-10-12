const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const crypto = require("crypto");

const User = require("../models/User");
const Course = require("../models/Course");
const Certificate = require("../models/Certificate");
const Quiz = require("../models/Quiz");
const QuizAttempt = require("../models/QuizAttempt");
const requireAdmin = require("../middleware/requireAdmin");

const router = express.Router();

async function requireUser(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    const [scheme, token] = header.split(" ");

    if (scheme !== "Bearer" || !token) {
      return res.status(401).json({
        success: false,
        message: "Please log in to access certificates."
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

// List certificates belonging to the logged-in student.
router.get("/mine", requireUser, async (req, res) => {
  try {
    const certificates = await Certificate.find({
      student: req.user._id
    })
      .populate("course", "title slug category level")
      .sort({ issuedAt: -1 })
      .lean();

    return res.json({
      success: true,
      certificates
    });
  } catch (error) {
    console.error("Certificate history error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Could not load your certificates."
    });
  }
});

// Issue a certificate only after every lesson is completed.
router.post(
  "/course/:courseId/issue",
  requireUser,
  async (req, res) => {
    try {
      const { courseId } = req.params;

      if (!mongoose.isValidObjectId(courseId)) {
        return res.status(400).json({
          success: false,
          message: "A valid course ID is required."
        });
      }

      const course = await Course.findById(courseId).lean();

      if (!course) {
        return res.status(404).json({
          success: false,
          message: "Course not found."
        });
      }

      const enrolled = req.user.enrolledCourses.some(
        id => String(id) === String(course._id)
      );

      if (!enrolled) {
        return res.status(403).json({
          success: false,
          message: "You must be enrolled in this course."
        });
      }

      const lessons = course.lessons || [];

      if (lessons.length === 0) {
        return res.status(400).json({
          success: false,
          message: "This course has no lessons and cannot qualify for a certificate."
        });
      }

      const completedIds = new Set(
        (req.user.completedLessons || []).map(id => String(id))
      );

      const completedCount = lessons.filter(
        lesson => completedIds.has(String(lesson._id))
      ).length;

      if (completedCount !== lessons.length) {
        return res.status(403).json({
          success: false,
          eligible: false,
          completedLessons: completedCount,
          totalLessons: lessons.length,
          progressPercent: Math.round(
            completedCount / lessons.length * 100
          ),
          message: "Complete every lesson before requesting your certificate."
        });
      }

      // Require every published quiz to have a passing attempt.
      const publishedQuizzes = await Quiz.find({
        course: course._id,
        published: true
      }).select("_id title passMark").lean();

      if (publishedQuizzes.length === 0) {
        return res.status(403).json({
          success: false,
          eligible: false,
          message: "No published assessment is available for this course yet. Please contact an administrator."
        });
      }

      const passingAttempts = await QuizAttempt.find({
        student: req.user._id,
        course: course._id,
        quiz: { $in: publishedQuizzes.map(quiz => quiz._id) },
        passed: true
      }).select("quiz").lean();

      const passedQuizIds = new Set(
        passingAttempts.map(attempt => String(attempt.quiz))
      );

      const remainingQuizzes = publishedQuizzes
        .filter(quiz => !passedQuizIds.has(String(quiz._id)))
        .map(quiz => ({
          id: String(quiz._id),
          title: quiz.title,
          passMark: quiz.passMark
        }));

      if (remainingQuizzes.length > 0) {
        return res.status(403).json({
          success: false,
          eligible: false,
          message: "Pass every published assessment before requesting your certificate.",
          remainingQuizzes
        });
      }

      const existing = await Certificate.findOne({
        student: req.user._id,
        course: course._id
      });

      if (existing) {
        return res.json({
          success: true,
          alreadyIssued: true,
          message: "Your certificate has already been issued.",
          certificate: existing
        });
      }

      const year = new Date().getFullYear();
      const certificateNumber =
        `PTA-${year}-${crypto.randomBytes(5).toString("hex").toUpperCase()}`;

      try {
        const certificate = await Certificate.create({
          certificateNumber,
          student: req.user._id,
          course: course._id,
          studentName: req.user.name,
          courseTitle: course.title,
          lessonCount: lessons.length
        });

        return res.status(201).json({
          success: true,
          alreadyIssued: false,
          message: "Certificate issued successfully.",
          certificate
        });
      } catch (createError) {
        // Handles simultaneous requests and the unique student/course index.
        if (createError.code === 11000) {
          const certificate = await Certificate.findOne({
            student: req.user._id,
            course: course._id
          });

          if (certificate) {
            return res.json({
              success: true,
              alreadyIssued: true,
              message: "Your certificate has already been issued.",
              certificate
            });
          }
        }

        throw createError;
      }
    } catch (error) {
      console.error("Issue certificate error:", error.message);

      return res.status(500).json({
        success: false,
        message: "Could not issue the certificate."
      });
    }
  }
);

// Public certificate verification.
router.get("/verify/:certificateNumber", async (req, res) => {
  try {
    const certificateNumber = String(
      req.params.certificateNumber || ""
    ).trim().toUpperCase();

    const certificate = await Certificate.findOne({
      certificateNumber
    }).lean();

    if (!certificate) {
      return res.status(404).json({
        success: false,
        valid: false,
        message: "No matching certificate was found."
      });
    }

    return res.json({
      success: true,
      valid: true,
      certificate: {
        certificateNumber: certificate.certificateNumber,
        studentName: certificate.studentName,
        courseTitle: certificate.courseTitle,
        lessonCount: certificate.lessonCount,
        issuedAt: certificate.issuedAt
      }
    });
  } catch (error) {
    console.error("Certificate verification error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Could not verify this certificate."
    });
  }
});

// Administrator certificate register.
router.get("/admin/all", requireAdmin, async (req, res) => {
  try {
    const certificates = await Certificate.find({})
      .sort({ issuedAt: -1 })
      .lean();

    return res.json({
      success: true,
      count: certificates.length,
      certificates
    });
  } catch (error) {
    console.error("Admin certificate list error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Could not load the certificate register."
    });
  }
});

module.exports = router;
