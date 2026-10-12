const express = require("express");
const mongoose = require("mongoose");
const Course = require("../models/Course");
const User = require("../models/User");
const requireAdmin = require("../middleware/requireAdmin");

const router = express.Router();

router.use(requireAdmin);

// Dashboard statistics
router.get("/stats", async (req, res) => {
  try {
    const [
      totalCourses,
      publishedCourses,
      totalStudents,
      enrolledStudents
    ] = await Promise.all([
      Course.countDocuments(),
      Course.countDocuments({ published: true }),
      User.countDocuments({ role: "student" }),
      User.countDocuments({
        role: "student",
        enrolledCourses: { $exists: true, $ne: [] }
      })
    ]);

    res.json({
      success: true,
      stats: {
        totalCourses,
        publishedCourses,
        draftCourses: totalCourses - publishedCourses,
        totalStudents,
        enrolledStudents
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not load dashboard statistics."
    });
  }
});

// List all courses, including unpublished drafts
router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find()
      .sort({ createdAt: -1 })
      .lean();

    res.json({ success: true, courses });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not load courses."
    });
  }
});

// Create a course
router.post("/courses", async (req, res) => {
  try {
    const { title, slug, category, level, description } = req.body;
    const published = req.body.published === true;

    if (
      !title?.trim() ||
      !slug?.trim() ||
      !category ||
      !level ||
      !description?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Title, slug, category, level and description are required."
      });
    }

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      return res.status(400).json({
        success: false,
        message: "Use a lowercase URL slug with words separated by hyphens."
      });
    }

    const course = await Course.create({
      title: title.trim(),
      slug: slug.trim(),
      category,
      level,
      description: description.trim(),
      published,
      lessons: []
    });

    res.status(201).json({
      success: true,
      message: "Course created.",
      course
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "A course with that slug already exists."
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }

    console.error("Course creation error:", error.message);
    res.status(500).json({
      success: false,
      message: "Could not create the course."
    });
  }
});

// Edit basic course information
router.patch("/courses/:id", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid course ID."
      });
    }

    const allowedFields = [
      "title",
      "slug",
      "description",
      "category",
      "level"
    ];

    const updates = {};

    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        updates[field] =
          typeof req.body[field] === "string"
            ? req.body[field].trim()
            : req.body[field];
      }
    }

    if (updates.slug &&
        !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(updates.slug)) {
      return res.status(400).json({
        success: false,
        message: "Invalid course slug."
      });
    }

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found."
      });
    }

    res.json({
      success: true,
      message: "Course updated.",
      course
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "That course slug is already in use."
      });
    }

    res.status(400).json({
      success: false,
      message: error.name === "ValidationError"
        ? error.message
        : "Could not update the course."
    });
  }
});

// Publish or unpublish without deleting course content
router.patch("/courses/:id/publish", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid course ID."
      });
    }

    if (typeof req.body.published !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "Provide published as true or false."
      });
    }

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { $set: { published: req.body.published } },
      { new: true, runValidators: true }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found."
      });
    }

    res.json({
      success: true,
      message: course.published ? "Course published." : "Course unpublished.",
      course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not change publication status."
    });
  }
});

// List students without exposing passwords or authentication secrets
router.get("/users", async (req, res) => {
  try {
    const users = await User.find()
      .select("name email role isActive enrolledCourses createdAt")
      .populate("enrolledCourses", "title slug")
      .sort({ createdAt: -1 })
      .lean();

    res.json({
      success: true,
      users: users.map(user => ({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
        enrolledCourses: user.enrolledCourses || [],
        createdAt: user.createdAt
      }))
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not load student records."
    });
  }
});


// Add a lesson to a course
router.post("/courses/:id/lessons", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid course ID."
      });
    }

    const { title, content } = req.body;

    if (!title?.trim() || !content?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Lesson title and content are required."
      });
    }

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found."
      });
    }

    const highestOrder = course.lessons.reduce(
      (highest, lesson) => Math.max(highest, Number(lesson.order) || 0),
      0
    );

    course.lessons.push({
      title: title.trim(),
      content: content.trim(),
      order: highestOrder + 1
    });

    await course.save();

    const lesson = course.lessons[course.lessons.length - 1];

    res.status(201).json({
      success: true,
      message: "Lesson added successfully.",
      lesson
    });
  } catch (error) {
    console.error("Add lesson error:", error.message);
    res.status(400).json({
      success: false,
      message: error.name === "ValidationError"
        ? error.message
        : "Could not add lesson."
    });
  }
});

// Edit a lesson title, content, or order
router.patch("/courses/:id/lessons/:lessonId", async (req, res) => {
  try {
    const { id, lessonId } = req.params;

    if (
      !mongoose.isValidObjectId(id) ||
      !mongoose.isValidObjectId(lessonId)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid course or lesson ID."
      });
    }

    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found."
      });
    }

    const lesson = course.lessons.id(lessonId);

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: "Lesson not found."
      });
    }

    if (req.body.title !== undefined) {
      if (typeof req.body.title !== "string" || !req.body.title.trim()) {
        return res.status(400).json({
          success: false,
          message: "Lesson title cannot be empty."
        });
      }
      lesson.title = req.body.title.trim();
    }

    if (req.body.content !== undefined) {
      if (typeof req.body.content !== "string" || !req.body.content.trim()) {
        return res.status(400).json({
          success: false,
          message: "Lesson content cannot be empty."
        });
      }
      lesson.content = req.body.content.trim();
    }

    if (req.body.order !== undefined) {
      const order = Number(req.body.order);

      if (!Number.isInteger(order) || order < 1) {
        return res.status(400).json({
          success: false,
          message: "Lesson order must be a positive integer."
        });
      }

      lesson.order = order;
    }

    await course.save();

    res.json({
      success: true,
      message: "Lesson updated successfully.",
      lesson
    });
  } catch (error) {
    console.error("Update lesson error:", error.message);
    res.status(400).json({
      success: false,
      message: error.name === "ValidationError"
        ? error.message
        : "Could not update lesson."
    });
  }
});

// Remove a lesson and its associated completion records
router.delete("/courses/:id/lessons/:lessonId", async (req, res) => {
  try {
    const { id, lessonId } = req.params;

    if (
      !mongoose.isValidObjectId(id) ||
      !mongoose.isValidObjectId(lessonId)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid course or lesson ID."
      });
    }

    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found."
      });
    }

    const lesson = course.lessons.id(lessonId);

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: "Lesson not found."
      });
    }

    course.lessons.pull({ _id: lessonId });
    await course.save();

    await User.updateMany(
      { completedLessons: lessonId },
      { $pull: { completedLessons: lessonId } }
    );

    res.json({
      success: true,
      message: "Lesson removed and related completion records cleared."
    });
  } catch (error) {
    console.error("Delete lesson error:", error.message);
    res.status(500).json({
      success: false,
      message: "Could not remove the lesson."
    });
  }
});


module.exports = router;
