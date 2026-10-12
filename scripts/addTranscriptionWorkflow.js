require("dotenv").config();

const mongoose = require("mongoose");
const Course = require("../src/models/Course");

const lesson = {
  title: "Supplementary Module: The Complete Transcription Workflow",
  order: 21,
  resources: [],
  content: `
THE COMPLETE TRANSCRIPTION WORKFLOW

INTRODUCTION

Transcription is a structured process of converting recorded speech into written text. Professional transcription requires more than listening and typing. The transcriber must understand the assignment, examine the recording, identify speakers, represent speech accurately, apply the required formatting, and review the finished document.

LEARNING OBJECTIVES

By the end of this module, learners should be able to:
1. Explain the stages of a professional transcription assignment.
2. Prepare an audio file before beginning.
3. Produce an accurate first draft.
4. Handle unclear speech responsibly.
5. proofread and quality-check a transcript.
6. Submit the finished work professionally.

STAGE 1: RECEIVE AND REVIEW THE ASSIGNMENT

Before playing the audio, review the instructions supplied by the client or supervisor.

Confirm:
- The required transcription type: strict verbatim, clean verbatim, or another specified style.
- The required file format, such as DOCX, TXT, or VTT.
- Whether timestamps are required.
- The speaker-label format.
- The spelling of supplied names, organizations, and technical terms.
- The deadline and submission procedure.
- Any confidentiality or file-handling requirements.

Do not assume that every client uses the same rules. Follow the assignment instructions when they are consistent with the applicable professional and legal requirements.

STAGE 2: ORGANIZE THE FILES

1. Save the audio in the approved working location.
2. Use the supplied file name or an agreed naming convention.
3. Check the file extension and confirm that the audio opens.
4. Read any reference documents provided by the client.
5. Keep client files private and avoid unnecessary copies.

Never upload confidential recordings to an unapproved transcription service.

STAGE 3: LISTEN TO THE RECORDING

Listen to a short opening section before typing. Identify the subject, number of speakers, recording quality, accents, background noise, and general speaking speed.

If necessary, listen to the entire recording once before drafting. This helps establish context and makes it easier to recognize recurring names and terminology.

STAGE 4: CREATE THE FIRST DRAFT

Work in manageable sections. Listen to a phrase or sentence, type what is audible, and replay the section when uncertain.

Apply the required transcription style:
- Strict verbatim preserves speech features according to the assignment rules.
- Clean verbatim removes specified disfluencies without changing meaning.
- Intelligent verbatim may reorganize wording more substantially when explicitly requested.

Do not invent words to make a sentence sound complete. Do not silently replace an unclear statement with a guess.

STAGE 5: IDENTIFY SPEAKERS

Use the requested speaker-label convention consistently.

For example:

Interviewer: Could you explain what happened?

Participant: I arrived at the office at nine.

When speakers cannot be confidently identified, follow the project's uncertainty convention rather than guessing their identities.

STAGE 6: INSERT TIMESTAMPS

If timestamps are required, use the specified interval or event-based rule.

Example:

[00:00:12 - 00:00:18]
Speaker 1: We began the meeting shortly after nine.

Ensure that the timestamps correspond to the recording. Do not estimate timecodes carelessly or change the required format midway through the document.

STAGE 7: HANDLE UNCLEAR SPEECH

Replay unclear sections at a suitable speed. Use headphones when available and consult authorized reference material where appropriate.

If the words remain unclear, use the client's required notation, such as [inaudible 00:02:14], when permitted.

Distinguish between speech that is genuinely inaudible and speech that is audible but difficult to understand. Never fabricate missing dialogue.

STAGE 8: FORMAT THE DOCUMENT

Apply the required document structure, including:
- Transcript title.
- Client or project identifier, where required.
- Company or project name, where authorized.
- Transcriber field, if required.
- Date and audio duration, where requested.
- Consistent speaker labels.
- Required timestamps and paragraph breaks.
- Appropriate file name and output format.

Do not include private information that the client did not authorize for the document.

STAGE 9: PROOFREAD AND QUALITY-CHECK

Perform at least two focused reviews where time permits.

FIRST REVIEW: CONTENT
- Compare the transcript against the audio.
- Check omitted words, repeated phrases, and incorrect speaker changes.
- Replay uncertain names, numbers, dates, and technical terms.
- Verify timestamps against the recording.

SECOND REVIEW: PRESENTATION
- Check spelling, capitalization, punctuation, and paragraphing.
- Confirm that the required transcription style has been followed.
- Check formatting, file type, and naming conventions.
- Remove accidental duplicate text and drafting notes.

Grammar and punctuation should make the transcript readable, but they must not alter the speaker's meaning or violate the requested transcription style.

STAGE 10: SAVE AND SUBMIT

1. Save the final document in the requested format.
2. Reopen the saved file to confirm that it is readable.
3. Verify that the correct file is attached or uploaded.
4. Submit through the approved channel before the deadline.
5. Follow the client's rules for retaining or deleting working files.

A professional submission is accurate, complete, correctly formatted, and delivered securely.

WORKFLOW FLOWCHART

Receive instructions
        |
        v
Review style and requirements
        |
        v
Prepare and inspect audio
        |
        v
Listen and draft the transcript
        |
        v
Identify speakers and add timestamps
        |
        v
Resolve unclear sections responsibly
        |
        v
Proofread against the audio
        |
        v
Check formatting and file requirements
        |
        v
Save and submit securely

PRACTICAL EXERCISE

A client sends a twelve-minute interview and requests clean verbatim transcription, speaker labels, timestamps every thirty seconds, and a DOCX file.

Answer the following:
1. What should you check before beginning?
2. How should you handle a name you cannot confidently identify?
3. What should you do if a sentence remains inaudible after replaying it?
4. What are the two main purposes of the final reviews?
5. What must you verify before submitting the file?

MODEL ANSWERS

1. Confirm the transcription style, timestamp interval, speaker-label convention, output format, deadline, and any reference material.
2. Consult authorized references or replay the relevant section. Do not invent a name.
3. Use the required uncertainty notation and timestamp if applicable.
4. The content review checks fidelity to the recording; the presentation review checks readability, consistency, and formatting.
5. Confirm accuracy, completeness, correct file format, file name, and secure submission.

KNOWLEDGE CHECK

1. Why should a transcriber review assignment instructions before typing?
2. Why is it unsafe to guess missing words?
3. What is the difference between a content review and a presentation review?
4. Why should a submitted file be reopened before delivery?
5. Why must confidential audio be handled through approved channels?

KEY TAKEAWAY

A reliable transcription workflow follows a repeatable sequence: understand the instructions, prepare the audio, draft accurately, resolve uncertainty responsibly, proofread, format, and submit securely.
`
};

async function main() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing from backend/.env");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB.");

  const course = await Course.findOne({
    slug: "professional-transcription"
  });

  if (!course) {
    throw new Error("Professional Transcription course was not found.");
  }

  const exists = course.lessons.some(
    item => item.title === lesson.title
  );

  if (exists) {
    console.log("Supplementary workflow lesson already exists. No changes made.");
  } else {
    const maxOrder = course.lessons.reduce(
      (max, item) => Math.max(max, Number(item.order) || 0),
      0
    );

    lesson.order = Math.max(21, maxOrder + 1);
    course.lessons.push(lesson);
    await course.save();

    console.log("Added:", lesson.title);
    console.log("Lesson order:", lesson.order);
    console.log("Total lessons:", course.lessons.length);
  }

  await mongoose.disconnect();
}

main().catch(async error => {
  console.error("Failed:", error.message);
  await mongoose.disconnect().catch(() => {});
  process.exitCode = 1;
});
