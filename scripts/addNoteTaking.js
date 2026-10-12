require("dotenv").config();

const mongoose = require("mongoose");
const Course = require("../src/models/Course");

const course = {
  title: "Professional Note-Taking",
  slug: "professional-note-taking",
  category: "note-taking",
  level: "beginner",
  description:
    "Learn professional note-taking for meetings, lectures, interviews, training sessions, and workplace discussions. Develop skills in summarizing, organizing information, recording decisions, and tracking action items.",
  published: true,
  lessons: [
    {
      title: "Introduction to Professional Note-Taking",
      order: 1,
      content: `Note-taking is the process of recording important information from spoken or written material in a clear, organized, and useful form.

Professional note-takers listen actively, identify key points, distinguish facts from opinions, and organize information so another person can understand it later.

Note-taking is not the same as verbatim transcription. Transcription aims to reproduce spoken words according to a specified style. Note-taking focuses on capturing the essential information while preserving the original meaning.

Common applications include business meetings, lectures, interviews, workshops, research sessions, and project discussions.

Core principles:
1. Accuracy: Never change the meaning of the information.
2. Relevance: Capture information that matters to the purpose.
3. Clarity: Use readable language and consistent headings.
4. Organization: Group related ideas together.
5. Completeness: Record important decisions, deadlines, and responsibilities.
6. Confidentiality: Handle private information according to the client's instructions.`
    },
    {
      title: "Note-Taking Methods and Structures",
      order: 2,
      content: `Different situations require different note-taking methods.

CORNELL METHOD
Divide the page into a main notes section, a narrow cue or question column, and a summary section. Record details in the main section, add key terms or questions in the cue column, and summarize the main ideas afterward.

OUTLINE METHOD
Organize information using headings, subheadings, and indented points. This is useful when the speaker presents information in a logical sequence.

BULLET-POINT METHOD
Record individual ideas as short, clear bullet points. Use this for fast-paced discussions and meetings.

MIND-MAPPING METHOD
Place the central topic in the middle and connect related ideas using branches. This works well when exploring connected concepts.

CHRONOLOGICAL NOTES
Record events or discussion points in the order they occur. This is particularly useful when sequence matters.

Choose a method based on the task, the pace of the speaker, and the client's required format. You may combine methods when appropriate.`
    },
    {
      title: "Active Listening and Identifying Key Information",
      order: 3,
      content: `Effective note-taking starts with active listening.

Before the session:
- Understand the purpose of the meeting or lecture.
- Review the agenda or topic if available.
- Prepare a document with suitable headings.

During the session, listen for:
- Main arguments and supporting points.
- Definitions and explanations.
- Important facts, figures, and examples.
- Decisions and agreements.
- Assigned tasks and responsible persons.
- Deadlines, dates, and follow-up actions.
- Questions that remain unanswered.

Use abbreviations only when their meaning is clear. Mark uncertain information for verification instead of guessing.

A useful note answers the relevant questions: What happened? What was decided? Who is responsible? What happens next? When is it due?

Do not turn an uncertain statement into a confirmed fact. Preserve qualifications and distinguish proposals from final decisions.`
    },
    {
      title: "Meeting Minutes and Action Items",
      order: 4,
      content: `Meeting minutes provide an organized record of a meeting. They are not necessarily a word-for-word transcript.

A professional meeting-notes template may include:

Meeting title:
Date and time:
Location or platform:
Attendees:
Purpose or agenda:

Discussion summary:
Record the main issues discussed and important supporting details.

Decisions made:
State what was agreed or approved. Do not describe a proposal as a decision unless it was actually agreed.

Action items:
- Task:
- Responsible person:
- Deadline:
- Status:

Outstanding questions:
Record issues that require further discussion or clarification.

Next meeting:
Include the agreed date or planned follow-up when available.

Keep the notes neutral and factual. Avoid inserting personal opinions. Check names, figures, dates, responsibilities, and deadlines before submission.

If the client supplies a template, use that template instead of inventing a different format.`
    },
    {
      title: "Summarizing, Proofreading, and Final Submission",
      order: 5,
      content: `A useful summary captures the main message without introducing new information or removing important qualifications.

To summarize:
1. Identify the central topic.
2. Select the most important supporting points.
3. Remove repetition that does not affect meaning.
4. Preserve relevant names, numbers, dates, and decisions.
5. Use clear sentences and descriptive headings.
6. Compare your notes with the source material whenever it is available.

FINAL QUALITY CHECK
- Are the notes accurate and understandable?
- Have important decisions and action items been included?
- Are names, dates, figures, and deadlines correct?
- Are abbreviations clear and consistent?
- Have assumptions been presented as facts?
- Does the document follow the required template?
- Have spelling, grammar, and punctuation been checked?
- Have confidentiality and submission instructions been followed?

If information is unclear, flag it for review. Never invent missing details.

Practice activity:
Attend a short meeting, lecture, or recorded discussion. Produce organized notes with a summary, key points, decisions, and action items where applicable. Review the notes for accuracy before submission.`
    }
  ]
};

async function main() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing from .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const existing = await Course.findOne({ slug: course.slug });

    if (existing) {
      console.log("Professional Note-Taking already exists. No changes made.");
      return;
    }

    await Course.create(course);

    console.log("Professional Note-Taking course created successfully.");
    console.log("Lessons added: 5");
    console.log("Category: note-taking");
    console.log("Status: published");
  } catch (error) {
    console.error("Could not add course:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

main();
