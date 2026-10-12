require("dotenv").config();

const mongoose = require("mongoose");
const Course = require("../src/models/Course");

const lessons = [
  {
    title: "03. Introduction to PrimeTask Workspace",
    content: `INTRODUCTION TO PRIMETASK WORKSPACE

LEARNING OBJECTIVES
By the end of this lesson, you should be able to:
1. Explain what PrimeTask Workspace is.
2. Identify its main services and learning opportunities.
3. Distinguish the company, its services, and its learning division.
4. Explain why quality and professionalism matter.

1. WHAT IS PRIMETASK WORKSPACE?

PrimeTask Workspace is a digital-work and learning initiative designed to connect professional services, skill development, and digital opportunities.

Its service areas may include:
• Professional transcription
• Academic and professional writing support
• Data entry and data organization
• Research-related services
• Web design and development
• Digital skills training through PrimeTask Academy

The services available to members depend on current projects, platform policies, client requirements, and the user's qualifications.

Official website:
https://www.primetaskworkspace.com/

2. THE PURPOSE

PrimeTask aims to help people develop useful skills, complete professional work, and grow through practical experience.

The idea is not simply to register an account and expect results. Members must learn, practise, follow instructions, meet deadlines, and deliver work that satisfies the applicable requirements.

3. THREE IMPORTANT TERMS

PrimeTask Workspace:
The wider business and digital-work environment.

PrimeTask Academy:
The learning and training division that teaches skills through lessons, examples, practice activities, and assessments.

Client work:
A task or project requested by a client and handled according to its instructions, deadline, quality requirements, and agreed terms.

4. THE PROFESSIONAL WORK CYCLE

Learn → Practise → Qualify → Receive an assignment → Complete the work → Submit → Review → Correct if required → Approval → Payment according to applicable terms.

Approval is not automatic. A submission must meet its stated requirements.

5. MEMBER RESPONSIBILITIES

Members are expected to:
• Read instructions before starting.
• Accept work they can reasonably complete.
• Protect client information.
• Submit original work completed according to the assignment rules.
• Communicate delays or problems promptly.
• Correct genuine errors identified during review.
• Keep their account details accurate.
• Never claim skills, experience, or approvals they do not have.

PRACTICE
Write a short paragraph explaining the difference between PrimeTask Workspace and PrimeTask Academy.

MODEL ANSWER
PrimeTask Workspace is the wider digital-work environment and business, while PrimeTask Academy focuses on training learners in practical and professional skills. Academy learning can prepare members for suitable work, but completing a course does not guarantee an assignment.`,
    order: 3,
    resources: [
      "https://www.primetaskworkspace.com/"
    ]
  },
  {
    title: "04. Introduction to PrimeTask Academy",
    content: `INTRODUCTION TO PRIMETASK ACADEMY

LEARNING OBJECTIVES
You should be able to explain the purpose of the Academy, identify its courses, and describe the learning process.

1. WHAT IS PRIMETASK ACADEMY?

PrimeTask Academy is the learning division associated with PrimeTask Workspace. It is intended to provide structured training, practical examples, exercises, and assessments that help learners develop work-related skills.

Academy website:
https://primetask-academy.vercel.app

Academic writing module reference:
https://primetask-academy.vercel.app/modules/academic-writing.html

2. THE COURSE AREAS

The Academy course structure includes:

• Introduction to PrimeTask
  Understand the organization, its working process, responsibilities, and professional expectations.

• Professional Transcription
  Learn audio handling, transcription styles, speaker labels, timestamps, punctuation, formatting, and quality control.

• Academic Writing
  Learn research, outlining, paragraph development, citation, referencing, editing, and academic integrity.

• Data Entry
  Learn structured data capture, spreadsheet skills, validation, cleaning, accuracy checks, and responsible data handling.

• Programming Fundamentals
  Learn programming concepts, variables, conditions, functions, debugging, and practical application development.

• Web Design Fundamentals
  Learn HTML, CSS, responsive layouts, accessibility, JavaScript interaction, and website testing.

• Professional Note-Taking
  Learn how to capture, organize, summarize, and review information accurately.

The published course catalogue may change as the Academy develops.

3. HOW LEARNING SHOULD WORK

Every topic should follow this sequence:

LEARN
Read the explanation and understand the key terms.

EXAMPLE
Study a worked example showing how the skill is applied.

PRACTISE
Complete a task independently.

COMMON MISTAKES
Identify frequent errors and learn how to prevent them.

ASSESSMENT
Demonstrate that you can apply the skill correctly.

4. LEARNING RESPONSIBILITY

Learners should complete activities honestly, use permitted resources, ask for clarification when instructions are unclear, and avoid submitting another person's work as their own.

5. COURSE COMPLETION

Course completion should be based on the Academy's configured requirements, such as lesson completion, practice work, or assessment results.

Do not assume that opening every lesson automatically means a learner has passed an assessment.

PRACTICE
Create a learning plan for one Academy course. Include the topic, the practical skill you want to develop, and how you will demonstrate that you have learned it.

MODEL ANSWER
Course: Professional Transcription.
Skill: Accurate verbatim transcription with speaker labels.
Evidence: A formatted transcript checked against the source audio using the course quality checklist.`,
    order: 4,
    resources: [
      "https://primetask-academy.vercel.app",
      "https://primetask-academy.vercel.app/modules/academic-writing.html"
    ]
  },
  {
    title: "05. Navigating the Academy and Learning Independently",
    content: `NAVIGATING THE ACADEMY

LEARNING OBJECTIVES
Learn to navigate course material, study systematically, and track your own progress.

1. START WITH YOUR ACCOUNT

Use the official Academy address:
https://primetask-academy.vercel.app

Only enter account credentials on a website you have verified is the intended Academy site. Never share passwords or authentication codes with another learner.

2. CHOOSE A COURSE

Open the course catalogue and identify the course relevant to your learning goals. Read the course introduction and follow lessons in their intended order unless the Academy explicitly permits another sequence.

3. STUDY EACH LESSON

For every lesson:
• Read the learning objectives.
• Study the explanation.
• Review the examples.
• Complete the exercise.
• Check your answer against the guidance.
• Record questions or errors that need more practice.

4. KEEP LEARNING NOTES

A useful learning record contains:
• Course and lesson title
• Date studied
• New concepts learned
• Practice completed
• Errors discovered
• Skills requiring further practice
• Next action

5. LEARN INDEPENDENTLY

Independent learning does not mean guessing your way through a task. It means using available guidance, testing your understanding, and taking responsibility for improvement.

6. WHEN SOMETHING DOES NOT WORK

If a page fails to load:
• Check your internet connection.
• Reload the page once.
• Confirm that the URL is correct.
• Record the error message.
• Contact the appropriate support channel if the problem persists.

Do not repeatedly submit a payment or create multiple accounts because a page appears slow.

PRACTICE
Prepare a five-day learning schedule for one course, allowing time for lessons, exercises, revision, and assessment.

MODEL ANSWER
Day 1: Study the first lesson and write notes.
Day 2: Study the second lesson and complete its exercise.
Day 3: Review examples and practise the main skill.
Day 4: Complete a practical task and correct errors.
Day 5: Take the assessment and record areas for improvement.`,
    order: 5,
    resources: [
      "https://primetask-academy.vercel.app"
    ]
  },
  {
    title: "06. The PrimeTask Way of Work",
    content: `THE PRIMETASK WAY OF WORK

LEARNING OBJECTIVES
Understand the basic work cycle and the responsibilities involved at every stage.

1. UNDERSTAND THE ASSIGNMENT

Before starting, identify:
• The requested deliverable
• The required format
• The deadline
• The available source materials
• The quality criteria
• Any confidentiality restrictions
• The submission method

If an essential instruction is missing, request clarification before making assumptions.

2. CONFIRM THAT THE TASK IS SUITABLE

Check that the task matches your skills, access, available time, and applicable membership or project requirements.

Never accept a task merely to appear active if you cannot reasonably complete it.

3. COMPLETE THE WORK

Follow the instructions and use appropriate tools. Keep the original source material safe, save progress where possible, and avoid changing client data without authorization.

4. CHECK BEFORE SUBMISSION

Use a checklist tailored to the task.

For transcription:
Check wording against the audio, speaker labels, timestamps, punctuation, and formatting.

For academic writing:
Check argument structure, source quality, citations, referencing, grammar, and academic integrity.

For data entry:
Check required fields, data types, duplicates, missing values, and accuracy.

For web design:
Check links, layouts, mobile responsiveness, accessibility, functionality, and errors.

5. SUBMIT FOR REVIEW

Submit through the designated process. Include the required files and identify any limitations or unresolved issues honestly.

6. RESPOND TO FEEDBACK

If revisions are requested:
• Read the feedback carefully.
• Identify the exact issue.
• Correct the relevant section.
• Check that the correction has not introduced new errors.
• Resubmit according to instructions.

7. APPROVAL AND PAYMENT

Approval means the reviewer has accepted the submission under the applicable criteria. Payment depends on the relevant project or membership terms and any required processing steps.

Never describe work as approved before the authorized reviewer has approved it.

PRACTICE
A client requests a transcript by 4:00 p.m. You discover that a section of the audio is inaudible. What should you do?

MODEL ANSWER
Follow the transcription guidelines for unclear audio, review the section using permitted tools, mark genuinely unintelligible speech appropriately, and report the issue when required. Do not invent words to make the transcript look complete.`,
    order: 6,
    resources: []
  },
  {
    title: "07. Professional Standards, Integrity and Confidentiality",
    content: `PROFESSIONAL STANDARDS

1. ACCURACY

Accuracy means following the source material and the assignment requirements. It does not mean making the result look polished by inventing information.

2. HONESTY

Members must not:
• Fabricate completed work.
• Falsify timestamps or records.
• Claim another person's work as their own.
• Invent client approval.
• Misrepresent qualifications.
• Alter records to hide mistakes.

3. CONFIDENTIALITY

Client files, recordings, research materials, personal details, passwords, and unpublished documents may be confidential.

Only use approved storage and communication methods. Do not publish client files, share them with friends, or upload them to unapproved tools.

4. ACADEMIC INTEGRITY

Academic writing training should support learning, research, proper attribution, and responsible editing. Follow the client's or institution's rules concerning permitted assistance and disclose assistance when required.

Never invent sources, quotations, research findings, or citations.

5. COMMUNICATION

Professional messages should be clear, respectful, and specific. If a deadline is at risk, communicate early rather than disappearing and reappearing after the deadline with a mysterious internet excuse.

6. CORRECTIONS

Mistakes should be reported and corrected promptly. A correction is an opportunity to improve quality, not a reason to falsify the original record.

PRACTICE
A colleague asks you to send them a client's confidential recording so they can practise. What should you do?

MODEL ANSWER
Do not share the recording without authorization. Use approved training material or obtain the required permission through the proper channel.

REFLECTION
Write three professional standards you will follow in every assignment.`,
    order: 7,
    resources: []
  },
  {
    title: "08. PrimeTask Projects and Live Website References",
    content: `PRIMETASK PROJECTS AND WEBSITE REFERENCES

PURPOSE
This lesson introduces learners to real project URLs associated with the PrimeTask ecosystem. Use them to study navigation, content organization, page structure, branding, and user experience.

PROJECT 1: PRIMETASK WORKSPACE

URL:
https://www.primetaskworkspace.com/

What to study:
• Homepage structure
• Service descriptions
• Navigation and calls to action
• How the Academy is introduced
• Mobile layout and readability
• Trust, privacy, and support information

PROJECT 2: PRIMETASK ACADEMY

URL:
https://primetask-academy.vercel.app

What to study:
• Course organization
• Lesson navigation
• Learning objectives
• Content presentation
• Learner experience

ACADEMIC WRITING MODULE REFERENCE

URL:
https://primetask-academy.vercel.app/modules/academic-writing.html

What to study:
• How an individual learning module is presented
• Whether the page explains its purpose clearly
• Whether content is easy to read on mobile devices

PROJECT 3: PRIMETASK TRANSCRIPTION GUIDE

URL:
https://primetask-transcription-guide.vercel.app

What to study:
• How a focused training guide is organized
• How instructions and examples are displayed
• Whether the user can follow the guide from beginning to end

PROJECT 4: PRIMEPAY

URL:
https://primepay-t44w.onrender.com

What to study:
• The visible interface, if the deployment is available
• Navigation and page organization
• How a payment-related interface communicates actions
• Whether the page provides understandable status messages

IMPORTANT STATUS RULE

A URL is a reference to a project, not proof that every feature works or that the project has passed formal approval.

Record each project using these statuses:
• In progress: work is still being developed.
• Deployed: a version has been published to a reachable URL.
• Under review: a reviewer is checking it against requirements.
• Approved: an authorized reviewer has recorded acceptance.
• Changes required: one or more issues must be fixed.
• Unavailable: the URL cannot currently be accessed.

Only use Approved when the approval has actually been recorded. A screenshot, a successful deployment, or a working homepage alone is not sufficient evidence of complete project approval.

WEBSITE REVIEW CHECKLIST

1. Does the page load?
2. Are navigation links working?
3. Is the content readable?
4. Does the layout work on a phone?
5. Are forms validated appropriately?
6. Are errors communicated clearly?
7. Are privacy and security risks considered?
8. Does the page meet its stated requirements?
9. Have the required tests been completed?
10. Has an authorized reviewer recorded the result?

PRACTICE
Open two project URLs. Record the URL, date checked, pages reviewed, issues discovered, and current observed status. Do not claim approval without evidence.

SUBMISSION FORMAT

Project name:
URL:
Date checked:
Pages reviewed:
Working features:
Issues discovered:
Evidence collected:
Observed status:
Reviewer decision, if available:

This record helps distinguish a working demonstration from a tested and formally approved deliverable.`,
    order: 8,
    resources: [
      "https://www.primetaskworkspace.com/",
      "https://primetask-academy.vercel.app",
      "https://primetask-academy.vercel.app/modules/academic-writing.html",
      "https://primetask-transcription-guide.vercel.app",
      "https://primepay-t44w.onrender.com"
    ]
  },
  {
    title: "09. How Web Builds Are Planned, Tested and Approved",
    content: `THE WEB BUILD WORKFLOW

LEARNING OBJECTIVES
Understand the stages of building a website and how a project moves from a request to a reviewed deliverable.

STAGE 1: REQUIREMENTS

Identify the purpose of the website, intended audience, required pages, features, content, design expectations, accessibility needs, and deadline.

STAGE 2: PLANNING

Prepare a sitemap, content outline, page sketches, and a list of required features. Decide what is essential for the first release.

STAGE 3: DEVELOPMENT

Build the interface and functionality using the required technologies. Keep code organized and avoid exposing passwords, API secrets, or private credentials in frontend files.

STAGE 4: TESTING

Test:
• Page loading
• Navigation
• Forms and buttons
• Mobile responsiveness
• Keyboard navigation
• Readability and contrast
• Error handling
• Broken links
• Basic security considerations

STAGE 5: DEPLOYMENT

Publish the build to the agreed hosting service. Verify that the public URL opens and that the deployed version matches the intended release.

STAGE 6: REVIEW

Compare the build with the original requirements. Record the tests performed, defects found, and evidence.

STAGE 7: APPROVAL OR REVISION

An authorized reviewer records one of the following:
• Approved
• Changes required
• Rejected, with reasons where appropriate

A developer must not approve their own work unless the project's rules explicitly authorize that arrangement.

STAGE 8: HANDOVER

Provide the approved URL, project documentation, required access instructions, known limitations, and any other agreed deliverables. Never send passwords in public notes or source code.

PRACTICAL EXERCISE
Choose a simple website project and prepare:
1. A one-paragraph project brief.
2. A list of required pages.
3. Five acceptance criteria.
4. A testing checklist.
5. A review record template.

MODEL ACCEPTANCE CRITERIA
• The homepage loads at the agreed URL.
• All main navigation links work.
• The layout adapts to mobile screens.
• Required content is present.
• No known critical defect remains unresolved.

These are example criteria. Actual approval must follow the project's own requirements.`,
    order: 9,
    resources: [
      "https://www.primetaskworkspace.com/",
      "https://primetask-academy.vercel.app",
      "https://primetask-transcription-guide.vercel.app"
    ]
  },
  {
    title: "10. Roles, Communication and Support",
    content: `ROLES AND COMMUNICATION

1. LEARNER OR MEMBER

The learner studies the material, completes exercises, follows platform rules, protects confidential information, and requests clarification when necessary.

2. DEVELOPER OR CONTENT CREATOR

The creator builds or prepares the agreed deliverable, tests it, documents known limitations, and submits it for review.

3. REVIEWER

The reviewer compares the submission against the requirements, documents issues, and records the review outcome according to the project's authority and process.

4. ADMINISTRATION

Administration handles platform operations within its assigned permissions, maintains records, communicates policies, and directs unresolved issues to the appropriate person.

5. CLIENT

The client provides requirements, source materials, deadlines, feedback, and acceptance criteria as agreed.

COMMUNICATION RULES

A useful work message should state:
• The project or task reference
• The specific issue or request
• What has already been attempted
• The relevant deadline
• Any evidence needed to understand the issue

Avoid sending passwords, payment credentials, or confidential client files in ordinary messages.

REPORTING A TECHNICAL PROBLEM

Subject: Academy technical issue

Course or page:
URL:
Date and time:
Device or browser:
Steps taken:
Expected result:
Actual result:
Error message:
Screenshot or other permitted evidence:

Use official contact details published on the verified website. Do not assume that an old email address or an unofficial social account is an authorized support channel.

PRACTICE
Write a short support report for a course page that fails to open.

ASSESSMENT CRITERION
The report should identify the page, explain the problem clearly, and include enough information for another person to investigate it without exposing private data.`,
    order: 10,
    resources: [
      "https://www.primetaskworkspace.com/",
      "https://primetask-academy.vercel.app"
    ]
  },
  {
    title: "11. Work Quality, Reviews and Member Progress",
    content: `WORK QUALITY AND PROGRESS

1. QUALITY IS TASK-SPECIFIC

A correct transcript, a properly formatted essay, a clean spreadsheet, and a functional website require different checks.

Use the checklist supplied for the task instead of assuming that one generic checklist can detect every type of error.

2. THE REVIEW PROCESS

A typical review includes:
• Confirming that all required files are present.
• Checking compliance with instructions.
• Testing accuracy and functionality.
• Recording defects or missing items.
• Requesting revisions when necessary.
• Recording the final decision.

3. FEEDBACK

Feedback should identify the problem and explain what needs to change. Members should respond professionally and use feedback to improve future work.

4. PROGRESS RECORDS

A learner may track:
• Lessons completed
• Exercises attempted
• Assessment results
• Skills demonstrated
• Revisions completed
• Outstanding learning goals

Only use real records. Never invent completion percentages, scores, earnings, client reviews, or approval statistics.

5. APPROVAL RECORDS

A reliable approval record should identify the project or task, version reviewed, reviewer, date, criteria used, outcome, and any remaining limitations.

6. CONTINUOUS IMPROVEMENT

After a task is completed, consider:
• What went well?
• Which errors occurred?
• What caused those errors?
• Which process could prevent them next time?
• What skill should be practised next?

PRACTICE
A website works on a laptop but its navigation overlaps on a mobile phone. Should it be marked approved?

MODEL ANSWER
Not if mobile responsiveness is part of the agreed requirements. Record the defect, correct the layout, retest the affected screen sizes, and submit the updated version for review.

REFLECTION
Identify one measurable way to improve your work quality during the next assignment.`,
    order: 11,
    resources: []
  },
  {
    title: "12. Final Assessment: Introduction to PrimeTask",
    content: `FINAL ASSESSMENT: INTRODUCTION TO PRIMETASK

INSTRUCTIONS
Answer the questions independently. Use the lessons and official references where permitted. Your trainer or the configured Academy assessment system should apply the actual passing criteria.

SECTION A: KNOWLEDGE

1. Explain the difference between PrimeTask Workspace and PrimeTask Academy.

2. Name four areas of training or service associated with the PrimeTask ecosystem.

3. List the main stages of a typical assignment from receiving instructions to final approval.

4. Why must confidential client material be protected?

5. What is the difference between a deployed website and an approved website?

6. Give three examples of information that should appear in a useful technical support report.

SECTION B: PRACTICAL TASK

Visit:
https://www.primetaskworkspace.com/

Record:
• The website URL
• The date you checked it
• Two pages or sections you inspected
• Three observations about its content or navigation
• One improvement you would investigate
• The evidence supporting your observations

Then visit one of these project references:
https://primetask-academy.vercel.app
https://primetask-transcription-guide.vercel.app

Record what you can actually verify. If a page is unavailable, report that fact rather than inventing results.

SECTION C: PROFESSIONAL SCENARIO

A member submits a website and says it has been approved. The reviewer finds that the contact form does not work, and the acceptance criteria require a functioning contact form.

Explain the correct next steps.

MODEL ANSWER
The reviewer should record the defect, identify the unmet acceptance criterion, request a correction, and retest the form after the change. The project should not be recorded as approved until the applicable criteria have been met and the authorized reviewer records the decision.

SECTION D: PERSONAL ACTION PLAN

Write a short action plan containing:
1. One course you will study next.
2. One skill you will practise.
3. One practical deliverable you will produce.
4. One quality check you will perform.
5. Evidence you will keep to demonstrate completion.

ASSESSMENT GUIDANCE

A trainer may assess:
• Understanding of PrimeTask and Academy roles
• Knowledge of the work cycle
• Confidentiality and integrity
• Ability to distinguish deployment from approval
• Accuracy of the website review record
• Professional communication

Do not invent a passing score. Use the threshold configured by the Academy administrator or stated in the official assessment instructions.`,
    order: 12,
    resources: [
      "https://www.primetaskworkspace.com/",
      "https://primetask-academy.vercel.app",
      "https://primetask-transcription-guide.vercel.app"
    ]
  }
];

async function main() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing from backend/.env");
  }

  await mongoose.connect(process.env.MONGODB_URI);

  const course = await Course.findOne({
    slug: "introduction-to-primetask"
  });

  if (!course) {
    throw new Error(
      'Course not found: introduction-to-primetask. Check the course slug.'
    );
  }

  if (!Array.isArray(course.lessons)) {
    course.lessons = [];
  }

  const existingTitles = new Set(
    course.lessons.map(lesson => lesson.title)
  );

  let added = 0;

  for (const lesson of lessons) {
    if (existingTitles.has(lesson.title)) {
      console.log("SKIPPED (already exists):", lesson.title);
      continue;
    }

    course.lessons.push({ ...lesson, resources: [] });
    existingTitles.add(lesson.title);
    added++;

    console.log("ADDED:", lesson.title);
  }

  if (added > 0) {
    course.markModified("lessons");
    await course.save();
  }

  console.log("\nCOURSE:", course.title);
  console.log("NEW LESSONS ADDED:", added);
  console.log("TOTAL LESSONS:", course.lessons.length);

  await mongoose.disconnect();
}

main().catch(async error => {
  console.error("\nEXPANSION FAILED:", error.message);

  await mongoose.disconnect().catch(() => {});
  process.exitCode = 1;
});
