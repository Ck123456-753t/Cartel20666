require("dotenv").config();

const mongoose = require("mongoose");
const Course = require("../src/models/Course");

const courses = [
  {
    title: "Introduction to PrimeTask Academy",
    slug: "introduction-to-primetask",
    category: "transcription",
    level: "beginner",
    description: "Learn how PrimeTask Academy works, how to study, complete practice activities, and prepare for professional tasks.",
    lessons: [
      {
        title: "Welcome to PrimeTask Academy",
        order: 1,
        content: "Welcome to PrimeTask Academy. This lesson introduces the learning platform, courses, practice activities, assessments, and progress tracking."
      },
      {
        title: "Learning and Professional Standards",
        order: 2,
        content: "Study carefully, follow instructions, respect client confidentiality, meet deadlines, and submit work you have checked for accuracy."
      }
    ]
  },
  {
    title: "Professional Transcription",
    slug: "professional-transcription",
    category: "transcription",
    level: "beginner",
    description: "Learn transcription conventions, verbatim styles, speaker labels, timestamps, punctuation, grammar, and quality assurance.",
    lessons: [
      {
        title: "Introduction to Transcription",
        order: 1,
        content: "Transcription is the process of converting recorded speech into written text. Accuracy, consistency, and careful listening are essential."
      },
      {
        title: "Verbatim and Clean Verbatim",
        order: 2,
        content: "Verbatim aims to preserve spoken language according to the client's rules. Clean verbatim removes selected disfluencies when instructed. Always follow the requested style guide."
      },
      {
        title: "Speaker Labels and Timestamps",
        order: 3,
        content: "Use consistent speaker labels and accurate timestamps when required. Never invent words or timestamps you cannot verify."
      },
      {
        title: "Proofreading and Quality Control",
        order: 4,
        content: "Review the recording while reading your transcript. Check names, punctuation, omissions, speaker changes, and formatting."
      }
    ]
  },
  {
    title: "Academic Writing and Research",
    slug: "academic-writing",
    category: "academic-writing",
    level: "beginner",
    description: "Learn academic structure, research methods, paragraph development, citations, referencing, and proofreading.",
    lessons: [
      {
        title: "Foundations of Academic Writing",
        order: 1,
        content: "Academic writing communicates ideas clearly using evidence, logical structure, formal language, and appropriate citations."
      },
      {
        title: "Research and Source Evaluation",
        order: 2,
        content: "Assess the authority, relevance, accuracy, and currency of sources. Keep records of sources as you research."
      },
      {
        title: "Citations and Referencing",
        order: 3,
        content: "Use the citation style required by the assignment. Verify author names, dates, titles, and publication details."
      }
    ]
  },
  {
    title: "Data Entry and Data Quality",
    slug: "data-entry",
    category: "data-entry",
    level: "beginner",
    description: "Develop accurate data entry, spreadsheet organization, validation, consistency, and confidentiality skills.",
    lessons: [
      {
        title: "Data Entry Fundamentals",
        order: 1,
        content: "Enter information accurately and consistently. Follow the required field formats and instructions."
      },
      {
        title: "Validation and Error Checking",
        order: 2,
        content: "Check missing values, duplicate records, inconsistent formats, and typing errors before submitting data."
      }
    ]
  },
  {
    title: "Programming Fundamentals",
    slug: "programming-fundamentals",
    category: "programming",
    level: "beginner",
    description: "Learn programming logic, variables, conditions, functions, debugging, and basic JavaScript.",
    lessons: [
      {
        title: "Introduction to Programming",
        order: 1,
        content: "Programming means writing instructions that a computer can execute. Begin by understanding inputs, processing, and outputs."
      },
      {
        title: "Variables and Data Types",
        order: 2,
        content: "Variables store values. JavaScript supports strings, numbers, booleans, arrays, objects, and other data types."
      },
      {
        title: "Conditions and Functions",
        order: 3,
        content: "Conditions let programs make decisions. Functions package reusable instructions into named blocks of code."
      }
    ]
  },
  {
    title: "Web Design Fundamentals",
    slug: "web-design-fundamentals",
    category: "web-design",
    level: "beginner",
    description: "Learn HTML page structure, CSS styling, responsive layouts, accessibility, and introductory JavaScript.",
    lessons: [
      {
        title: "HTML Page Structure",
        order: 1,
        content: "HTML defines the structure and meaning of webpage content using elements such as headings, paragraphs, links, and forms."
      },
      {
        title: "CSS and Responsive Design",
        order: 2,
        content: "CSS controls presentation, spacing, typography, colors, and layout. Responsive design adapts the page to different screen sizes."
      },
      {
        title: "JavaScript and Interaction",
        order: 3,
        content: "JavaScript adds behavior to webpages, including form validation, event handling, and dynamic interface updates."
      }
    ]
  }
];

async function seedCourses() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing from .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    let created = 0;
    let updated = 0;

    for (const courseData of courses) {
      const existing = await Course.findOne({
        slug: courseData.slug
      });

      if (existing) {
        console.log(`Already exists, unchanged: ${courseData.title}`);
        continue;
      }

      await Course.create({
        ...courseData,
        published: true
      });

      console.log(`Created: ${courseData.title}`);
      created++;
    }

    console.log(`Finished. Created: ${created}; already present: ${courses.length - created - updated}.`);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedCourses();
