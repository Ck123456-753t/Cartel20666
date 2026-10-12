const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Quiz = require("../models/Quiz");
const QuizAttempt = require("../models/QuizAttempt");
const Course = require("../models/Course");
const User = require("../models/User");
const requireAdmin = require("../middleware/requireAdmin");

const router = express.Router();

// Student authentication
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
      message: "Your session is invalid or has expired."
    });
  }
}

function isEnrolled(user, courseId) {
  return (user.enrolledCourses || []).some(
    id => id.toString() === courseId.toString()
  );
}

function publicQuiz(quiz) {
  return {
    id: quiz._id,
    course: quiz.course,
    title: quiz.title,
    description: quiz.description,
    passMark: quiz.passMark,
    timeLimitMinutes: quiz.timeLimitMinutes,
    questions: quiz.questions.map(question => ({
      id: question._id,
      question: question.question,
      options: question.options,
      points: question.points
    }))
  };
}

function validateQuestions(questions) {
  if (!Array.isArray(questions) || questions.length === 0) {
    return "Add at least one question.";
  }

  for (const question of questions) {
    if (!question.question?.trim()) {
      return "Every question needs question text.";
    }

    if (
      !Array.isArray(question.options) ||
      question.options.length < 2 ||
      question.options.length > 6 ||
      question.options.some(
        option => typeof option !== "string" || !option.trim()
      )
    ) {
      return "Each question needs 2 to 6 non-empty options.";
    }

    if (
      !Number.isInteger(question.correctAnswer) ||
      question.correctAnswer < 0 ||
      question.correctAnswer >= question.options.length
    ) {
      return "Each correctAnswer must be a valid option index, starting at 0.";
    }

    if (
      question.points !== undefined &&
      (!Number.isInteger(question.points) || question.points < 1)
    ) {
      return "Question points must be a positive integer.";
    }
  }

  return null;
}

// List published quizzes for a course the student is enrolled in.
router.get("/course/:courseId", requireUser, async (req, res) => {
  try {
    const { courseId } = req.params;

    if (!mongoose.isValidObjectId(courseId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid course ID."
      });
    }

    if (!isEnrolled(req.user, courseId)) {
      return res.status(403).json({
        success: false,
        message: "Enroll in this course to access its quizzes."
      });
    }

    const quizzes = await Quiz.find({
      course: courseId,
      published: true
    })
      .select("-questions.correctAnswer -questions.explanation")
      .sort({ createdAt: -1 })
      .lean();

    res.json({
      success: true,
      quizzes: quizzes.map(quiz => ({
        id: quiz._id,
        title: quiz.title,
        description: quiz.description,
        passMark: quiz.passMark,
        timeLimitMinutes: quiz.timeLimitMinutes,
        questionCount: quiz.questions.length
      }))
    });
  } catch (error) {
    console.error("Quiz listing error:", error.message);
    res.status(500).json({
      success: false,
      message: "Could not load quizzes."
    });
  }
});

// Get one published quiz without exposing the answer key.

// Return the authenticated student's complete quiz history.
router.get("/my-attempts", requireUser, async (req, res) => {
  try {
    const attempts = await QuizAttempt.find({ student: req.user._id })
      .populate("quiz", "title passMark timeLimitMinutes")
      .populate("course", "title slug")
      .sort({ submittedAt: -1 })
      .lean();

    return res.json({
      attempts: attempts.map(attempt => ({
        id: attempt._id,
        quiz: attempt.quiz || null,
        course: attempt.course || null,
        score: attempt.score,
        totalPoints: attempt.totalPoints,
        percentage: attempt.percentage,
        passed: attempt.passed,
        submittedAt: attempt.submittedAt
      }))
    });
  } catch (error) {
    console.error("Student quiz history error:", error);
    return res.status(500).json({
      message: "Could not load your assessment history."
    });
  }
});

router.get("/:quizId", requireUser, async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.quizId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid quiz ID."
      });
    }

    const quiz = await Quiz.findOne({
      _id: req.params.quizId,
      published: true
    });

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found or not published."
      });
    }

    if (!isEnrolled(req.user, quiz.course)) {
      return res.status(403).json({
        success: false,
        message: "Enroll in this course to access its quizzes."
      });
    }

    res.json({
      success: true,
      quiz: publicQuiz(quiz)
    });
  } catch (error) {
    console.error("Quiz retrieval error:", error.message);
    res.status(500).json({
      success: false,
      message: "Could not load this quiz."
    });
  }
});

// Submit answers. The server calculates the score.
router.post("/:quizId/submit", requireUser, async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.quizId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid quiz ID."
      });
    }

    const quiz = await Quiz.findOne({
      _id: req.params.quizId,
      published: true
    });

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found or not published."
      });
    }

    if (!isEnrolled(req.user, quiz.course)) {
      return res.status(403).json({
        success: false,
        message: "You are not enrolled in this course."
      });
    }

    if (!quiz.questions.length) {
      return res.status(400).json({
        success: false,
        message: "This quiz has no questions yet."
      });
    }

    const submittedAnswers = req.body.answers;

    if (!Array.isArray(submittedAnswers)) {
      return res.status(400).json({
        success: false,
        message: "Submit answers as an array of questionId and selectedAnswer."
      });
    }

    const answerMap = new Map();

    for (const answer of submittedAnswers) {
      if (
        !answer ||
        !mongoose.isValidObjectId(answer.questionId) ||
        !Number.isInteger(answer.selectedAnswer)
      ) {
        return res.status(400).json({
          success: false,
          message: "Each answer needs a valid questionId and integer selectedAnswer."
        });
      }

      const questionId = answer.questionId.toString();

      if (answerMap.has(questionId)) {
        return res.status(400).json({
          success: false,
          message: "A question cannot be answered more than once."
        });
      }

      answerMap.set(questionId, answer.selectedAnswer);
    }

    const results = [];
    let score = 0;
    let totalPoints = 0;

    for (const question of quiz.questions) {
      const questionId = question._id.toString();
      const selectedAnswer = answerMap.has(questionId)
        ? answerMap.get(questionId)
        : -1;

      if (
        selectedAnswer < -1 ||
        selectedAnswer >= question.options.length
      ) {
        return res.status(400).json({
          success: false,
          message: "One or more selected options are invalid."
        });
      }

      const correct = selectedAnswer === question.correctAnswer;
      const pointsAwarded = correct ? question.points : 0;

      totalPoints += question.points;
      score += pointsAwarded;

      results.push({
        questionId: question._id,
        selectedAnswer,
        correct,
        pointsAwarded
      });
    }

    const percentage = totalPoints
      ? Math.round((score / totalPoints) * 10000) / 100
      : 0;

    const attempt = await QuizAttempt.create({
      quiz: quiz._id,
      course: quiz.course,
      student: req.user._id,
      answers: results,
      score,
      totalPoints,
      percentage,
      passed: percentage >= quiz.passMark
    });

    res.status(201).json({
      success: true,
      message: attempt.passed
        ? "Assessment passed."
        : "Assessment submitted. Keep practising.",
      result: {
        attemptId: attempt._id,
        quizId: quiz._id,
        title: quiz.title,
        score,
        totalPoints,
        percentage,
        passMark: quiz.passMark,
        passed: attempt.passed,
        answers: results.map(answer => {
          const question = quiz.questions.id(answer.questionId);

          return {
            questionId: answer.questionId,
            selectedAnswer: answer.selectedAnswer,
            correctAnswer: question.correctAnswer,
            correct: answer.correct,
            pointsAwarded: answer.pointsAwarded,
            explanation: question.explanation
          };
        }),
        submittedAt: attempt.submittedAt
      }
    });
  } catch (error) {
    console.error("Quiz submission error:", error.message);
    res.status(500).json({
      success: false,
      message: "Could not submit this assessment."
    });
  }
});

// Student's own quiz history.
router.get("/:quizId/attempts", requireUser, async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.quizId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid quiz ID."
      });
    }

    const attempts = await QuizAttempt.find({
      quiz: req.params.quizId,
      student: req.user._id
    })
      .select("score totalPoints percentage passed submittedAt")
      .sort({ submittedAt: -1 })
      .lean();

    res.json({ success: true, attempts });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not load your attempts."
    });
  }
});

// All routes below this point require an admin.
router.use("/admin", requireAdmin);

// Admin: list quizzes, optionally filtered by course.
router.get("/admin", async (req, res) => {
  try {
    const filter = {};

    if (req.query.courseId) {
      if (!mongoose.isValidObjectId(req.query.courseId)) {
        return res.status(400).json({
          success: false,
          message: "Invalid course ID."
        });
      }

      filter.course = req.query.courseId;
    }

    const quizzes = await Quiz.find(filter)
      .populate("course", "title slug")
      .sort({ createdAt: -1 })
      .lean();

    res.json({ success: true, quizzes });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not load admin quizzes."
    });
  }
});

// Admin: create a quiz.
router.post("/admin", async (req, res) => {
  try {
    const {
      courseId,
      title,
      description = "",
      passMark = 70,
      timeLimitMinutes = 0,
      questions = [],
      published = false
    } = req.body;

    if (
      !mongoose.isValidObjectId(courseId) ||
      !title?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "A valid courseId and quiz title are required."
      });
    }

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found."
      });
    }

    if (
      !Number.isFinite(passMark) ||
      passMark < 0 ||
      passMark > 100 ||
      !Number.isInteger(timeLimitMinutes) ||
      timeLimitMinutes < 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Pass mark must be 0-100 and time limit a non-negative integer."
      });
    }

    const validationError = validateQuestions(questions);

    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError
      });
    }

    const quiz = await Quiz.create({
      course: course._id,
      title: title.trim(),
      description: String(description).trim(),
      passMark,
      timeLimitMinutes,
      questions,
      published: published === true
    });

    res.status(201).json({
      success: true,
      message: "Quiz created.",
      quiz
    });
  } catch (error) {
    console.error("Quiz creation error:", error.message);
    res.status(error.name === "ValidationError" ? 400 : 500).json({
      success: false,
      message: error.name === "ValidationError"
        ? error.message
        : "Could not create quiz."
    });
  }
});

// Admin: update quiz details and questions.
router.patch("/admin/:quizId", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.quizId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid quiz ID."
      });
    }

    const quiz = await Quiz.findById(req.params.quizId);

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found."
      });
    }

    const { title, description, passMark, timeLimitMinutes, questions } = req.body;

    if (title !== undefined) {
      if (typeof title !== "string" || !title.trim()) {
        return res.status(400).json({
          success: false,
          message: "Quiz title cannot be empty."
        });
      }
      quiz.title = title.trim();
    }

    if (description !== undefined) {
      quiz.description = String(description).trim();
    }

    if (passMark !== undefined) {
      if (!Number.isFinite(passMark) || passMark < 0 || passMark > 100) {
        return res.status(400).json({
          success: false,
          message: "Pass mark must be between 0 and 100."
        });
      }
      quiz.passMark = passMark;
    }

    if (timeLimitMinutes !== undefined) {
      if (!Number.isInteger(timeLimitMinutes) || timeLimitMinutes < 0) {
        return res.status(400).json({
          success: false,
          message: "Time limit must be a non-negative integer."
        });
      }
      quiz.timeLimitMinutes = timeLimitMinutes;
    }

    if (questions !== undefined) {
      const validationError = validateQuestions(questions);

      if (validationError) {
        return res.status(400).json({
          success: false,
          message: validationError
        });
      }

      quiz.questions = questions;
    }

    await quiz.save();

    res.json({
      success: true,
      message: "Quiz updated.",
      quiz
    });
  } catch (error) {
    res.status(error.name === "ValidationError" ? 400 : 500).json({
      success: false,
      message: error.name === "ValidationError"
        ? error.message
        : "Could not update quiz."
    });
  }
});

// Admin: publish or unpublish a quiz.
router.patch("/admin/:quizId/publish", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.quizId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid quiz ID."
      });
    }

    if (typeof req.body.published !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "Provide published as true or false."
      });
    }

    const quiz = await Quiz.findByIdAndUpdate(
      req.params.quizId,
      { $set: { published: req.body.published } },
      { new: true, runValidators: true }
    );

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found."
      });
    }

    res.json({
      success: true,
      message: quiz.published ? "Quiz published." : "Quiz unpublished.",
      quiz
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not change quiz publication status."
    });
  }
});

// Admin: delete a quiz and its attempts.
router.delete("/admin/:quizId", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.quizId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid quiz ID."
      });
    }

    const quiz = await Quiz.findByIdAndDelete(req.params.quizId);

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found."
      });
    }

    await QuizAttempt.deleteMany({ quiz: quiz._id });

    res.json({
      success: true,
      message: "Quiz and its attempt history deleted."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not delete quiz."
    });
  }
});

// Admin: inspect student attempts for a quiz.
router.get("/admin/:quizId/attempts", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.quizId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid quiz ID."
      });
    }

    const attempts = await QuizAttempt.find({ quiz: req.params.quizId })
      .populate("student", "name email")
      .sort({ submittedAt: -1 })
      .lean();

    res.json({ success: true, attempts });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not load assessment results."
    });
  }
});

module.exports = router;
