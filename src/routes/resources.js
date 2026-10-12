const mongoose = require("mongoose");
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

const Course = require("../models/Course");
const requireAdmin = require("../middleware/requireAdmin");
const requireUser = require("../middleware/requireUser");

const router = express.Router();

const uploadDir = path.join(__dirname, "../../uploads/course-resources");
fs.mkdirSync(uploadDir, { recursive: true });

const allowedExtensions = new Set([
  ".pdf", ".doc", ".docx", ".xls", ".xlsx",
  ".ppt", ".pptx", ".txt", ".csv",
  ".mp3", ".wav", ".m4a", ".ogg", ".webm"
]);

const allowedMimeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "text/plain",
  "text/csv",
  "application/csv",
  "audio/mpeg",
  "audio/wav",
  "audio/x-wav",
  "audio/mp4",
  "audio/x-m4a",
  "audio/ogg",
  "audio/webm",
  "video/webm"
]);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();
    cb(null, `${crypto.randomUUID()}${extension}`);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 20 * 1024 * 1024,
    files: 1
  },
  fileFilter: (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();

    if (
      !allowedExtensions.has(extension) ||
      !allowedMimeTypes.has(file.mimetype)
    ) {
      return cb(new Error(
        "Unsupported file type. Upload a permitted document, spreadsheet, presentation, text file, or audio file."
      ));
    }

    cb(null, true);
  }
});



// Download resources attached to published courses.
router.get(
  "/download/:courseId/:lessonId/:resourceId",
  async (req, res) => {
    try {
      const { courseId, lessonId, resourceId } = req.params;

      if (
        !mongoose.isValidObjectId(courseId) ||
        !mongoose.isValidObjectId(lessonId) ||
        !mongoose.isValidObjectId(resourceId)
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid resource reference."
        });
      }

      const course = await Course.findOne({
        _id: courseId,
        published: true
      });

      if (!course) {
        return res.status(404).json({
          success: false,
          message: "Published course not found."
        });
      }

      const lesson = course.lessons.id(lessonId);
      if (!lesson) {
        return res.status(404).json({
          success: false,
          message: "Lesson not found."
        });
      }

      const resource = lesson.resources.id(resourceId);
      if (!resource) {
        return res.status(404).json({
          success: false,
          message: "Resource not found."
        });
      }

      const filename = path.basename(resource.url);
      const filePath = path.join(uploadDir, filename);

      if (!fs.existsSync(filePath)) {
        return res.status(404).json({
          success: false,
          message: "The resource file is missing from storage."
        });
      }

      return res.download(filePath, path.basename(resource.originalName));
    } catch (error) {
      console.error("Resource download error:", error.message);
      return res.status(500).json({
        success: false,
        message: "Could not download the resource."
      });
    }
  }
);

// Upload one resource to a lesson.
router.post(
  "/courses/:courseId/lessons/:lessonId",
  requireAdmin,
  (req, res, next) => upload.single("file")(req, res, error => {
    if (error) {
      const status = error instanceof multer.MulterError ? 400 : 415;
      return res.status(status).json({
        success: false,
        message: error.code === "LIMIT_FILE_SIZE"
          ? "Files must be 20 MB or smaller."
          : error.message || "File upload failed."
      });
    }
    next();
  }),
  async (req, res) => {
    try {
      const { courseId, lessonId } = req.params;
      const title = String(req.body.title || "").trim();

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Choose a file to upload."
        });
      }

      if (!title || title.length > 180) {
        fs.unlinkSync(req.file.path);
        return res.status(400).json({
          success: false,
          message: "A resource title of 1 to 180 characters is required."
        });
      }

      const course = await Course.findById(courseId);

      if (!course) {
        fs.unlinkSync(req.file.path);
        return res.status(404).json({
          success: false,
          message: "Course not found."
        });
      }

      const lesson = course.lessons.id(lessonId);

      if (!lesson) {
        fs.unlinkSync(req.file.path);
        return res.status(404).json({
          success: false,
          message: "Lesson not found in this course."
        });
      }

      const resource = {
        title,
        url: `/uploads/course-resources/${req.file.filename}`,
        originalName: path.basename(req.file.originalname),
        mimeType: req.file.mimetype,
        size: req.file.size,
        uploadedAt: new Date()
      };

      lesson.resources.push(resource);
      await course.save();

      return res.status(201).json({
        success: true,
        message: "Lesson resource uploaded.",
        resource: lesson.resources[lesson.resources.length - 1]
      });
    } catch (error) {
      if (req.file && fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }

      console.error("Resource upload error:", error.message);
      return res.status(500).json({
        success: false,
        message: "Could not save the uploaded resource."
      });
    }
  }
);

// Delete a resource from a lesson.
router.delete(
  "/courses/:courseId/lessons/:lessonId/:resourceId",
  requireAdmin,
  async (req, res) => {
    try {
      const { courseId, lessonId, resourceId } = req.params;
      const course = await Course.findById(courseId);

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

      const resource = lesson.resources.id(resourceId);

      if (!resource) {
        return res.status(404).json({
          success: false,
          message: "Resource not found."
        });
      }

      const filename = path.basename(resource.url);
      lesson.resources.pull({ _id: resourceId });
      await course.save();

      const filePath = path.join(uploadDir, filename);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      return res.json({
        success: true,
        message: "Resource deleted."
      });
    } catch (error) {
      console.error("Resource deletion error:", error.message);
      return res.status(500).json({
        success: false,
        message: "Could not delete the resource."
      });
    }
  }
);

module.exports = router;
