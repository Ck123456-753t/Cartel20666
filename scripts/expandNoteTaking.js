require("dotenv").config();

const mongoose = require("mongoose");
const Course = require("../src/models/Course");

const modules = [
{
title: "06. Foundations of Professional Note-Taking",
content: `
PROFESSIONAL NOTE-TAKING: FOUNDATIONS

LEARNING OBJECTIVES
By the end of this lesson, a learner should be able to:
1. Define professional note-taking.
2. Explain why notes are created and who may use them.
3. Distinguish notes from transcripts, summaries and minutes.
4. Identify the qualities of useful professional notes.
5. Apply a repeatable note-taking workflow.

1. WHAT IS NOTE-TAKING?

Note-taking is the deliberate process of capturing, organizing and preserving important information from a lecture, meeting, interview, conversation, document or observation.

The objective is not to write down every word. It is to preserve the information that a reader needs to understand what happened, what matters and what should happen next.

Professional note-taking requires active listening, careful judgment, accurate recording, logical organization and a final review.

2. WHY NOTES MATTER

Notes can be used to:
- Support learning and revision.
- Record decisions made during meetings.
- Track assigned responsibilities.
- Preserve interview findings.
- Document instructions and procedures.
- Support research and project planning.
- Record observations for later analysis.
- Help a team remember agreed deadlines.

Poor notes can cause missed instructions, repeated work, confusion and incorrect decisions. Notes are therefore a work product, not random sentences written in a hurry.

3. NOTES, TRANSCRIPTS, SUMMARIES AND MINUTES

Notes: Selected information recorded for later use. They may use abbreviations, headings and bullet points.

Transcripts: Written representations of spoken material. Their required level of detail depends on the transcription specification.

Summaries: Shorter accounts that communicate the main ideas of a source.

Meeting minutes: Structured records of meeting details, key discussions, decisions and action items.

These formats are related but not interchangeable. If a client requests meeting minutes, a page of unorganized personal notes is not a suitable substitute.

4. THE PROFESSIONAL NOTE-TAKING WORKFLOW

Step 1: Identify the purpose.
Determine why the notes are needed and who will read them.

Step 2: Identify the source.
Establish whether the source is a live meeting, recording, lecture, interview, document or another source.

Step 3: Prepare a structure.
Create a title, date, topic headings and any required fields before recording information.

Step 4: Capture key information.
Record main ideas, supporting details, names, figures, decisions and deadlines.

Step 5: Organize the notes.
Group related ideas and distinguish facts, questions, decisions and actions.

Step 6: Verify important details.
Check names, dates, figures, quotations and assigned responsibilities against the source.

Step 7: Review and deliver.
Correct obvious errors, preserve meaning and use the required format.

5. QUALITIES OF GOOD NOTES

Accurate: They reflect the source without invented information.

Relevant: They prioritize information connected to the purpose.

Clear: A reader can understand them without unnecessary guessing.

Organized: Headings, lists and logical sequences make information easy to locate.

Concise: They avoid unnecessary repetition without removing important meaning.

Traceable: Dates, source details and context are available when required.

Complete enough: They include the information needed for their intended use.

Confidential: They are handled according to the applicable privacy and security requirements.

6. FACTS VERSUS INTERPRETATION

A fact is information directly supported by the source. An interpretation is a conclusion drawn from that information.

Example:
Source: The manager says the report is due on Friday.
Fact: The report is due on Friday.
Interpretation: The manager is unhappy with the team.

The second statement cannot be justified from the first alone. Professional notes must not turn assumptions into recorded facts.

7. PRACTICAL EXERCISE

Source statement:
"The customer support team will review the new complaint procedure on Tuesday. Each supervisor must submit two improvement suggestions before the review. The final procedure is expected to be approved by the end of the month."

Create concise notes containing the topic, meeting or review date, required task, responsible people and deadline.

MODEL ANSWER

Topic: Review of the new complaint procedure
Review date: Tuesday
Responsible people: Supervisors
Required task: Each supervisor submits two improvement suggestions
Final approval target: End of the month

The exact calendar date should only be added if it is known from the source.

8. LESSON CHECK

1. What is the main purpose of professional notes?
2. Why should assumptions be separated from facts?
3. Name four qualities of useful notes.
4. Explain the difference between notes and a transcript.
5. What should happen before notes are delivered?

KEY TAKEAWAY

Professional notes transform information into a reliable, organized record that can be understood and used later. Accuracy comes first; presentation makes that accuracy useful.
`
},
{
title: "07. Active Listening and Capturing Key Information",
content: `
ACTIVE LISTENING AND INFORMATION CAPTURE

LEARNING OBJECTIVES
- Explain active listening.
- Identify main ideas and supporting details.
- Recognize important signals in spoken information.
- Record information without falling behind.
- Use clarification and verification appropriately.

1. WHAT IS ACTIVE LISTENING?

Active listening means concentrating on the source, understanding the message and identifying what matters instead of merely hearing words.

A note-taker listens for the subject, purpose, key claims, evidence, decisions, disagreements, responsibilities and next steps.

Multitasking, frequent interruptions and premature conclusions can cause important details to be missed.

2. LISTEN FOR INFORMATION SIGNALS

Pay attention to expressions that introduce important information.

Examples:
- "The main issue is..." often introduces a central problem.
- "For example..." introduces supporting evidence.
- "However..." may introduce a contrast or qualification.
- "The decision is..." introduces a decision.
- "We agreed that..." may identify an agreement.
- "The deadline is..." introduces a time requirement.
- "The next step is..." may introduce an action.

These phrases are clues, not guarantees. Always record what the speaker actually communicates.

3. IDENTIFY THE MAIN IDEA

The main idea expresses the central point of a section. Supporting details explain, prove, qualify or illustrate it.

Example source:
"The new filing system reduced the time needed to retrieve customer records. Staff can now locate most records within two minutes. However, older files still need to be digitized."

Main idea: The new filing system improves record retrieval.
Supporting detail: Most records can be located within two minutes.
Limitation: Older files still need digitization.

A good note preserves the main point and the limitation. Omitting the limitation would create a misleading impression.

4. PRIORITIZE INFORMATION

High-priority information commonly includes:
- Decisions and commitments.
- Names and assigned responsibilities.
- Dates, deadlines and time limits.
- Financial figures and measurements.
- Instructions and procedural requirements.
- Risks, exceptions and unresolved questions.
- Important evidence supporting a conclusion.

Background information may also matter when it explains why a decision was made.

5. LISTENING WITHOUT FALLING BEHIND

Use a simple capture structure:
- Topic or issue
- Main point
- Supporting detail
- Decision or conclusion
- Action required
- Owner and deadline

Do not try to produce polished sentences while the speaker is still delivering a complex point. Capture the essential meaning, then refine the notes during review.

6. ABBREVIATIONS AND SYMBOLS

Abbreviations can increase speed, but only when they remain understandable.

Examples:
- approx. = approximately
- incl. = including
- excl. = excluding
- w/ = with
- w/o = without
- -> = leads to or results in
- ? = question requiring clarification
- ! = important point

Use symbols consistently. Avoid obscure personal shorthand in notes intended for a client or team.

Do not abbreviate names, legal terms, medical terms or technical concepts in ways that could change their meaning.

7. WHEN INFORMATION IS UNCLEAR

If participating in a live discussion, ask for clarification when appropriate and permitted.

If working from a recording, flag uncertainty and revisit the relevant section. Do not invent missing words or assume what the speaker intended.

If clarification is impossible, record the uncertainty according to the required format.

8. PRACTICAL EXERCISE

Source:
"The project will begin on 15 November. Amina will coordinate the research team, while David will manage the budget. The first progress report is due on 30 November. The budget has not yet received final approval."

MODEL NOTES

Project start: 15 November
Research coordination: Amina
Budget management: David
First progress report: 30 November
Outstanding issue: Budget approval pending

Notice that the outstanding approval is retained. Removing it would make the project appear more settled than the source indicates.

9. SELF-ASSESSMENT

1. What is active listening?
2. Identify three signals that may introduce important information.
3. Why should limitations be retained in notes?
4. When is an abbreviation unsuitable?
5. What should a note-taker do when information remains unclear?

KEY TAKEAWAY

Listen for meaning and structure. Capture decisions, responsibilities, dates and qualifications before polishing the wording.
`
},
{
title: "08. Cornell Notes, Outlining and Mind Mapping",
content: `
NOTE-TAKING METHODS: CORNELL, OUTLINE AND MIND MAPS

LEARNING OBJECTIVES
- Explain three common note-taking methods.
- Select a method suited to the source.
- Organize main ideas and supporting details.
- Apply a consistent layout.
- Evaluate the strengths and limitations of each method.

1. WHY USE A METHOD?

A note-taking method provides a repeatable structure. It reduces the chance of recording disconnected facts and makes later review easier.

No single method works best for every situation. A complex lecture, a brainstorming session and a formal meeting have different requirements.

2. THE CORNELL METHOD

The Cornell method divides a page into three areas:
A. Notes column: Main points and supporting details.
B. Cue column: Questions, keywords and prompts.
C. Summary area: A short explanation of the page's central ideas.

Suggested workflow:
1. Write the topic and date.
2. Record the lecture or discussion in the notes column.
3. Add keywords and questions after the session.
4. Write a brief summary.
5. Use the cue column for revision.

EXAMPLE

Topic: Data Quality

NOTES COLUMN
- Validation checks values against defined rules.
- Duplicate detection identifies repeated records.
- Missing values should be investigated.
- Changes must be traceable.

CUE COLUMN
- What is validation?
- Why detect duplicates?
- How should missing values be handled?

SUMMARY
Data quality depends on checking values, investigating duplicates and missing fields, and preserving a traceable record of changes.

Advantages:
- Useful for study and revision.
- Encourages active recall.
- Separates detailed notes from review prompts.

Limitations:
- Requires time to organize.
- May be less suitable for fast-moving discussions with frequent action items.

3. THE OUTLINE METHOD

The outline method arranges information by hierarchy.

Example:

1. Customer Complaints
   1.1 Common causes
       - Delayed delivery
       - Incorrect orders
   1.2 Proposed improvements
       - Clearer order confirmation
       - Faster escalation
   1.3 Responsibilities
       - Support team: revise response template
       - Operations: review delivery delays

Main topics are placed first. Subtopics and details are indented underneath them.

Advantages:
- Shows relationships between topics.
- Works well for structured lectures and reports.
- Makes information easy to scan.

Limitations:
- Fast speakers may move between topics unexpectedly.
- Excessive detail can make the outline difficult to maintain.

4. THE MIND-MAPPING METHOD

A mind map places a central topic in the middle and branches into related ideas.

Example:
Central topic: Community Project
Branches:
- Budget
- Team
- Timeline
- Risks
- Resources
- Evaluation

Each branch can contain smaller branches for supporting details.

Advantages:
- Helps visualize relationships.
- Useful for brainstorming and planning.
- Encourages exploration of connected ideas.

Limitations:
- Relationships may become ambiguous if labels are unclear.
- Large maps can become crowded.
- It may be unsuitable for a strict chronological record.

5. COMPARING THE METHODS

Cornell: Best for learning, revision and question-based review.

Outline: Best for structured material with clear levels and categories.

Mind map: Best for brainstorming, relationships and planning.

Formal minutes: Best when the task requires an official record of decisions and actions.

Chronological notes: Best when the order of events matters.

6. CHOOSING THE RIGHT METHOD

Before choosing, ask:
- Is the source structured or free-flowing?
- Must the order of events be preserved?
- Are decisions and responsibilities the main concern?
- Will the notes be used for revision?
- Does the client require a particular template?
- Will another person need to understand the notes without the original source?

Client instructions take priority over personal preference.

7. PRACTICAL EXERCISE

Source:
"A training session will take place on Monday. The trainer will explain spreadsheet formulas, data validation and duplicate detection. Participants must complete a short exercise after each topic. The course coordinator will distribute the materials before the session."

Task A: Create an outline.
Task B: Create Cornell-style cue questions and a short summary.
Task C: Explain why a mind map might also be useful for planning the session.

MODEL OUTLINE

Training session: Monday
1. Topics
   - Spreadsheet formulas
   - Data validation
   - Duplicate detection
2. Learning activities
   - Short exercise after each topic
3. Preparation
   - Coordinator distributes materials before the session

MODEL CORNELL CUES
- When is the session?
- Which topics are covered?
- What must participants do?
- Who distributes materials?

SUMMARY
The Monday training covers three spreadsheet and data-quality topics, each followed by an exercise. Materials must be distributed beforehand.

8. REVIEW QUESTIONS

1. Name the three parts of Cornell notes.
2. How does an outline show hierarchy?
3. What makes mind mapping useful?
4. Why should a note-taker follow a client's required template?
5. Which method would you select for formal meeting decisions, and why?

KEY TAKEAWAY

Choose the method that supports the purpose of the notes. A clever layout is not useful if it hides decisions or loses important details.
`
},
{
title: "09. Lecture Notes and Academic Note-Taking",
content: `
LECTURE NOTES AND ACADEMIC NOTE-TAKING

LEARNING OBJECTIVES
- Prepare for a lecture.
- Capture arguments, concepts and examples.
- Distinguish a lecturer's claims from a learner's comments.
- Organize notes for revision.
- Use source references responsibly.

1. BEFORE THE LECTURE

Preparation makes note-taking more effective.

Where available:
- Review the lecture title and learning objectives.
- Read assigned material.
- Prepare headings based on the lecture outline.
- Check that your notebook or device is ready.
- Record the date, course and topic.
- List questions that need answers.

Do not assume that lecture slides contain every explanation delivered by the lecturer.

2. DURING THE LECTURE

Listen for:
- Definitions.
- Main arguments.
- Steps in a process.
- Comparisons and contrasts.
- Examples that explain difficult concepts.
- Evidence supporting a claim.
- Questions and answers relevant to the topic.
- Points the lecturer emphasizes.
- Connections to earlier lessons.

Use headings and bullet points to organize information. Capture formulas, dates, names and technical terms carefully.

3. AFTER THE LECTURE

Review the notes as soon as practical.

Actions:
1. Expand abbreviations that may later be confusing.
2. Identify missing explanations.
3. Mark questions for follow-up.
4. Separate the lecturer's statements from your own observations.
5. Add page numbers or source references where available.
6. Write a concise summary.
7. Create revision questions.

Do not fill gaps with invented content. Verify unclear information against reliable course materials or ask the lecturer.

4. CAPTURING ARGUMENTS

An academic argument often contains:
- A claim.
- Supporting reasons.
- Evidence or examples.
- A qualification or limitation.
- A conclusion.

Example:
Claim: Regular practice improves performance.
Reason: Practice allows learners to identify mistakes.
Evidence: The lecturer provides an example from a classroom study.
Limitation: The result may differ depending on the task and learner.

Record the evidence accurately. Do not convert an illustrative example into a universal rule.

5. DEFINITIONS AND TECHNICAL TERMS

Record technical terms accurately. If a definition is important, preserve its essential wording or mark it as a direct quotation when appropriate.

For a quotation, record enough source information to identify where it came from. Follow the required citation style when preparing academic work.

Do not present another person's words as your own. Notes can later become the basis of an assignment, so source attribution matters from the beginning.

6. FORMULAS, FIGURES AND DIAGRAMS

When a lecture contains a formula:
- Copy the formula carefully.
- Define the symbols where possible.
- Preserve units.
- Record any conditions or assumptions.
- Include a worked example when useful.

When copying a diagram, label the parts and explain the relationship it illustrates. A sketch without labels may become useless after a few days.

7. ACADEMIC INTEGRITY

Notes should distinguish:
- Material from the lecturer.
- Information from published sources.
- Your own interpretations.
- Questions that remain unresolved.

Use quotation marks for exact wording when required and record source details. Paraphrasing does not remove the need to acknowledge a source in an assignment.

Follow institutional rules on permitted recording, sharing and use of lecture materials.

8. SAMPLE LECTURE NOTES

Topic: Data Quality

Definition:
Data quality describes how suitable data is for its intended purpose.

Main dimensions:
- Accuracy: Values correctly represent what they are intended to represent.
- Completeness: Required information is present.
- Consistency: Records do not conflict without explanation.
- Validity: Values follow defined rules.
- Uniqueness: Unwanted duplicate records are controlled.

Example:
A customer record may contain a valid email format but still have an incorrect email address. Validity and accuracy are not identical.

Revision question:
Why can a value be valid in format but inaccurate in reality?

9. PRACTICAL EXERCISE

Prepare a one-page note-taking template for a lecture. Include:
- Course and topic.
- Date.
- Learning objectives.
- Main concepts.
- Supporting examples.
- Questions.
- Source references.
- Summary and revision prompts.

SELF-ASSESSMENT
1. What should happen before a lecture?
2. How can you distinguish an argument from an example?
3. Why are source references useful?
4. What should you do when a lecturer's explanation is unclear?
5. Why must technical formulas be copied carefully?

KEY TAKEAWAY

Effective academic notes support understanding and revision while preserving source attribution and the difference between evidence and personal interpretation.
`
},
{
title: "10. Meeting Notes, Minutes and Action Items",
content: `
MEETING NOTES, MINUTES AND ACTION ITEMS

LEARNING OBJECTIVES
- Prepare a meeting-note template.
- Capture discussions, decisions and unresolved questions.
- Write clear action items.
- Distinguish informal notes from formal minutes.
- Review a meeting record before distribution.

1. BEFORE THE MEETING

Collect the information that is available:
- Meeting title.
- Date, time and location or platform.
- Meeting chair or facilitator.
- Participants, where required.
- Agenda.
- Previous action items.
- Required output format.

Do not invent attendee names, meeting times or agenda items. Mark missing details for confirmation.

2. DURING THE MEETING

Record information under clear headings:
- Agenda item.
- Main discussion.
- Decision.
- Action required.
- Person responsible.
- Deadline.
- Outstanding issue.

Do not attempt to reproduce every comment unless a verbatim record has been requested.

3. MEETING NOTES VERSUS FORMAL MINUTES

Informal meeting notes may include working observations and reminders for the note-taker.

Formal minutes are an organized record intended for distribution, approval or official reference. They generally use neutral language and focus on relevant discussion, decisions and actions.

The required level of detail depends on the organization, client and type of meeting.

4. RECORDING DECISIONS

A decision should reflect what was actually agreed.

Distinguish between:
- Proposed: Someone suggested an option.
- Discussed: Participants considered an option.
- Approved: The authorized group or person accepted it.
- Deferred: The decision was postponed.
- Rejected: The proposal was not accepted.
- Unresolved: No final decision was reached.

Never label a proposal as approved merely because it received attention.

5. WRITING ACTION ITEMS

A strong action item contains:
- A specific task.
- An accountable person or role.
- A deadline, if established.
- A status, if known.

Weak: "The website should be improved."

Stronger: "The web team will correct the broken registration link by Friday."

Only use the named team and deadline if the meeting actually established them.

6. HANDLING DISAGREEMENTS

Use neutral language. Summarize relevant differences without adding emotion or assigning motives.

Example:
"Participants expressed different views about the proposed launch date. No final date was agreed."

Avoid unsupported wording such as "The team was lazy" or "The manager was angry."

7. SAMPLE MEETING RECORD

Meeting: Website Improvement Review
Date: 12 October 2026
Purpose: Review registration issues and assign corrective work.

Discussion:
- The registration page was reported to contain a broken link.
- The team discussed testing the page on mobile devices.
- The launch date remains under review.

Decisions:
- The registration link must be tested before release.
- The launch date was not finalized.

Action items:
1. Task: Test the registration link.
   Owner: Web team.
   Deadline: Not specified in the source.
2. Task: Review mobile display.
   Owner: Not assigned in the source.
   Deadline: Not specified in the source.

Outstanding issue:
- Confirm the launch date.

This sample deliberately leaves unknown owners and deadlines unassigned rather than making them up.

8. AFTER THE MEETING

1. Review the notes while the discussion is still fresh.
2. Verify names, dates and numerical details.
3. Confirm that decisions are accurately described.
4. Check each action item.
5. Flag missing owners or deadlines.
6. Apply the organization's required template.
7. Send the record only to authorized recipients.
8. Preserve the final version according to policy.

9. PRACTICAL EXERCISE

Source:
"The operations meeting agreed that the inventory report should be completed by Thursday. Grace will prepare the report. The team discussed purchasing a new scanner but postponed the decision until costs are reviewed. Peter will obtain two supplier quotations by Tuesday."

MODEL ACTION ITEMS
- Grace: Complete the inventory report by Thursday.
- Peter: Obtain two supplier quotations by Tuesday.

DECISIONS
- The inventory report is required by Thursday.
- Scanner purchase decision postponed pending cost review.

10. REVIEW QUESTIONS

1. What information belongs in a meeting header?
2. How does a proposal differ from an approved decision?
3. What are the essential parts of an action item?
4. Why should minutes use neutral language?
5. How should missing deadlines be recorded?

KEY TAKEAWAY

A useful meeting record tells readers what was discussed, what was decided, what remains unresolved and who must do what next.
`
},
{
title: "11. Interview Notes, Research Notes and Observation Records",
content: `
INTERVIEW, RESEARCH AND OBSERVATION NOTES

LEARNING OBJECTIVES
- Prepare for an interview or research session.
- Capture responses without changing their meaning.
- Distinguish observation from interpretation.
- Preserve context and source information.
- Handle sensitive material responsibly.

1. PURPOSE OF INTERVIEW NOTES

Interview notes preserve relevant responses, explanations, examples and follow-up questions.

Depending on the assignment, notes may support:
- Recruitment interviews.
- Customer feedback.
- Research interviews.
- Project consultations.
- Oral histories.
- Needs assessments.

The purpose determines the required detail, format and safeguards.

2. PREPARING AN INTERVIEW TEMPLATE

Useful fields may include:
- Interview reference.
- Date and time.
- Interviewer, if required.
- Participant identifier, if permitted.
- Topic or research question.
- Main responses.
- Important examples.
- Follow-up questions.
- Agreed next steps.

Use anonymous identifiers when required. Do not collect personal details that are unnecessary for the assignment.

3. CAPTURING RESPONSES

Preserve the participant's intended meaning. Avoid rewriting a response to make it more persuasive or more consistent with your expectations.

Separate:
- Direct quotation.
- Paraphrased response.
- Interviewer's observation.
- Follow-up question.
- Researcher's interpretation.

Use quotation marks only when the wording is known to be exact. If a response is paraphrased, do not present it as a verbatim quotation.

4. OBSERVATION NOTES

Observation notes record what was observed in a defined setting.

Example:
Observation: Three customers waited at the service desk for approximately ten minutes.

Interpretation: The service desk may have been understaffed.

The observation does not, by itself, prove the interpretation. Additional evidence may be needed.

5. RESEARCH NOTES AND SOURCE TRACKING

When recording information from a document, article or report, capture:
- Author or responsible organization.
- Title.
- Publication date, if available.
- Page or section.
- Relevant finding.
- Whether the information is quoted or paraphrased.
- A link or identifier, when permitted and useful.

This helps verify information and prevents accidental plagiarism.

6. AVOIDING BIAS

Ask whether your notes fairly represent the source.

Common problems include:
- Recording only responses that support an existing opinion.
- Omitting qualifications.
- Treating one person's experience as universal.
- Confusing an assumption with an observed fact.
- Using judgmental descriptions.
- Removing context that changes meaning.

Use neutral wording and retain important contradictions.

7. CONSENT AND CONFIDENTIALITY

Follow applicable consent, privacy and research requirements. Do not record, disclose or circulate information without the required authorization.

Protect participant identities where required. Store notes securely and share them only with authorized recipients.

Do not promise anonymity or confidentiality beyond what the project can actually provide.

8. SAMPLE INTERVIEW NOTES

Research question: What challenges do customers experience when placing online orders?

Participant code: P-04
Response summary:
- The participant found product selection easy.
- The participant reported difficulty identifying delivery charges.
- The participant requested clearer delivery information before checkout.

Follow-up question:
- At what stage did the delivery charge become visible?

Interpretation requiring further evidence:
- Delivery-charge presentation may affect checkout confidence.

The interpretation is labeled separately because the response alone does not establish how all customers behave.

9. PRACTICAL EXERCISE

Source observation:
"At 10:15 a.m., four customers were waiting at the reception desk. One customer asked how to complete a registration form. A staff member provided assistance at 10:20 a.m."

Write:
A. Two direct observations.
B. One possible interpretation.
C. One question requiring more evidence.

MODEL ANSWER

Observations:
- Four customers were waiting at 10:15 a.m.
- A staff member assisted one customer with a registration form at 10:20 a.m.

Possible interpretation:
- Customers may need clearer registration instructions.

Further question:
- Did other customers experience similar difficulties?

10. REVIEW QUESTIONS

1. Why distinguish quotations from paraphrases?
2. What is the difference between an observation and an interpretation?
3. Which source details support later verification?
4. How can a note-taker reduce bias?
5. Why should participant information be protected?

KEY TAKEAWAY

Record what the source provides, preserve context and keep interpretation visibly separate from evidence.
`
},
{
title: "12. Summarizing, Paraphrasing and Organizing Notes",
content: `
SUMMARIZING, PARAPHRASING AND ORGANIZING NOTES

LEARNING OBJECTIVES
- Distinguish summarizing from paraphrasing.
- Reduce unnecessary repetition without losing meaning.
- Organize notes into logical sections.
- Preserve qualifications and essential details.
- Avoid misleading compression.

1. SUMMARIZING

A summary communicates the main ideas of a longer source in fewer words.

A good summary:
- Identifies the central point.
- Retains essential supporting information.
- Preserves important limitations.
- Avoids unnecessary repetition.
- Does not add unsupported conclusions.

2. PARAPHRASING

Paraphrasing restates a source's meaning in different wording.

It should preserve the original meaning, scope and qualifications. Simply replacing a few words with synonyms may not produce a clear or sufficiently independent paraphrase.

Academic work must acknowledge the original source when required. Changing the wording does not make another person's idea your own.

3. EXAMPLE

Original source:
"The project team completed the initial survey in June. However, the response rate was lower than expected, so the team will conduct additional interviews before making a final recommendation."

Good summary:
"The initial June survey had a lower-than-expected response rate. Additional interviews will precede the final recommendation."

Why it works:
- Preserves the date.
- Retains the limitation.
- Includes the next step.
- Does not claim the recommendation has already been made.

Poor summary:
"The team completed the research and made its recommendation."

Why it fails:
- It removes the low response rate.
- It invents a completed recommendation.

4. ORGANIZING INFORMATION

Useful structures include:
- Chronological: Events in time order.
- Thematic: Information grouped by subject.
- Hierarchical: Main ideas followed by subtopics.
- Problem and solution: Issue, causes, options and next steps.
- Question and answer: Each question followed by relevant information.
- Decision and action: Decisions, owners and deadlines.

Select a structure that matches the task. A timeline is useful for a sequence of events, while action-oriented notes are more useful for a project meeting.

5. REMOVE REPETITION CAREFULLY

Repeated information may be redundant, or it may show emphasis, disagreement or a change in position.

Before removing repetition, ask:
- Does the repeated statement add a new detail?
- Does it change the meaning?
- Does it establish a later decision?
- Is it required by the specification?

Never remove information merely to make the notes shorter if that information changes the meaning.

6. PRESERVE QUALIFICATIONS

Words such as "may", "usually", "approximately", "unless", "except" and "subject to" can materially change a statement.

Example:
Source: "The system may reduce processing time under normal conditions."

Unsafe summary:
"The system reduces processing time."

Better summary:
"The system may reduce processing time under normal conditions."

The second version preserves the uncertainty and limitation.

7. USE HEADINGS AND LABELS

Headings make long notes easier to navigate.

Possible labels:
- Background
- Main points
- Evidence
- Questions
- Decisions
- Action items
- Risks
- Outstanding issues
- Summary

Avoid creating so many headings that the document becomes harder to read.

8. PRACTICAL EXERCISE

Source:
"The company introduced a new customer form in September. Early feedback suggests that the form is easier to complete, but some users still struggle to upload supporting documents. The company plans to test an updated upload process next month."

Write a two-sentence summary.

MODEL ANSWER
"The company introduced a new customer form in September, and early feedback suggests it is easier to complete. Upload difficulties remain, so an updated process is scheduled for testing next month."

9. REVIEW QUESTIONS

1. What is the difference between summarizing and paraphrasing?
2. Why must important limitations be retained?
3. Name four ways to organize notes.
4. When is repeated information worth preserving?
5. Why can a short summary be misleading?

KEY TAKEAWAY

Shorter notes are useful only when they remain faithful to the source. Preserve the meaning, qualifications and next steps.
`
},
{
title: "13. Digital Note-Taking Tools and File Organization",
content: `
DIGITAL NOTE-TAKING TOOLS AND FILE ORGANIZATION

LEARNING OBJECTIVES
- Choose suitable digital tools.
- Organize files using consistent names.
- Maintain readable, accessible notes.
- Manage versions and backups.
- Troubleshoot common formatting problems.

1. SELECTING A TOOL

Possible tools include:
- Word processors for structured documents.
- Spreadsheets for tabular information and trackers.
- Presentation tools for visual lecture notes.
- Digital notebooks for linked notes and revision.
- Mind-mapping applications for relationships between ideas.
- Approved collaboration platforms for shared work.

Tool selection depends on the assignment, client requirements, device compatibility, access controls and delivery format.

2. BUILD A CLEAR FOLDER STRUCTURE

Example:

Project_Notes/
  01_Source_Materials/
  02_Working_Notes/
  03_Reviewed/
  04_Final_Delivery/

Use the structure required by the client when one exists. Avoid scattering final files across unrelated folders.

3. FILE NAMING

A useful naming pattern is:
Project_Topic_Date_Version_Status.ext

Example:
Training_Meeting_2026-10-12_v01_Draft.docx

Another example:
Customer_Interview_2026-10-12_v02_Reviewed.pdf

Use only necessary personal or confidential details in filenames. Do not expose sensitive information in filenames or shared folder paths.

4. FILE FORMATS

DOCX: Useful for editable documents and collaborative review.

PDF: Useful when a stable presentation is required, but editing may be less convenient.

XLSX or CSV: Useful for structured tabular data. CSV files may not preserve formatting, multiple worksheets or all spreadsheet-specific features.

TXT: Useful for simple plain text without complex formatting.

Choose the requested format and verify that the delivered file opens correctly.

5. VERSION CONTROL

A simple version sequence might be:
- v01_Draft
- v02_Reviewed
- v03_Final

Do not label a file FINAL until it has passed the required checks. Avoid ambiguous filenames such as final-final-newest.

When collaboration tools provide version history, use the approved feature rather than creating unnecessary copies.

6. BACKUPS AND SYNCHRONIZATION

Save work regularly. Use approved backups or synchronization tools when permitted.

Check that:
- The latest version is saved.
- Synchronization has completed.
- Shared access is limited appropriately.
- A backup is available when required.
- Conflicting versions are resolved before delivery.

A cloud icon does not automatically prove that every file is safely synchronized.

7. ACCESSIBILITY AND READABILITY

Use meaningful headings, readable font sizes, consistent spacing and logical lists.

For shared documents:
- Avoid relying only on color to communicate meaning.
- Use descriptive headings.
- Add text alternatives to important visuals when required.
- Ensure tables have understandable labels.
- Check that the document works on the intended device.

8. COMMON PROBLEMS

Problem: Formatting changes after opening.
Response: Check the application, fonts, page setup and requested file format.

Problem: A file appears empty.
Response: Check the correct file, save status and whether content was placed in another document.

Problem: Duplicate versions exist.
Response: Compare timestamps and content, identify the authoritative version and preserve the required history.

Problem: A shared file cannot be opened.
Response: Verify the link, permissions and account access with the authorized owner.

Problem: A file will not upload.
Response: Check the file type, size limit, connection and platform requirements.

9. PRACTICAL EXERCISE

Create a folder structure for a project containing:
- Two source documents.
- One set of working notes.
- One reviewed document.
- One final PDF.

Use a consistent naming system and explain which file is the authoritative final version.

10. REVIEW QUESTIONS

1. When is a spreadsheet more suitable than a word processor?
2. Why should filenames be consistent?
3. What is version control?
4. Why must CSV files be checked after export?
5. What should you do when synchronization fails?

KEY TAKEAWAY

Digital organization is part of professional note-taking. Clear names, correct formats, controlled access and reliable versions protect the usefulness of the notes.
`
},
{
title: "14. Accuracy, Editing and Quality Assurance",
content: `
ACCURACY, EDITING AND QUALITY ASSURANCE

LEARNING OBJECTIVES
- Review notes systematically.
- Detect omissions, contradictions and formatting problems.
- Verify names, dates and figures.
- Separate editing from interpretation.
- Apply a quality-control checklist.

1. WHY QUALITY ASSURANCE MATTERS

Notes may be concise and attractive but still be unreliable. A wrong date, missing qualification or incorrect action owner can cause practical problems.

Quality assurance checks whether the notes satisfy the assignment's requirements and accurately represent the source.

2. THE THREE REVIEW PASSES

PASS ONE: CONTENT
- Are all required topics covered?
- Are important decisions present?
- Are names, dates, amounts and deadlines accurate?
- Have important limitations been retained?
- Are unresolved issues identified?

PASS TWO: LANGUAGE
- Are sentences understandable?
- Is punctuation consistent?
- Are abbreviations clear?
- Are grammar and spelling appropriate?
- Has any wording changed the source's meaning?

PASS THREE: PRESENTATION
- Are headings consistent?
- Are lists aligned?
- Is the file named correctly?
- Is the required format used?
- Does the document open and display correctly?

3. SOURCE VERIFICATION

Compare important details with the source whenever possible.

Verify:
- Names and job titles.
- Dates and times.
- Currency and numerical values.
- Measurements and units.
- Technical terms.
- Decisions and action owners.
- Negations such as "not", "never" and "unless".

Small words can reverse meaning. "The request was approved" is not equivalent to "The request was not approved."

4. COMPLETENESS CHECK

Use the assignment requirements as a checklist.

For meeting notes:
- Header.
- Agenda items.
- Relevant discussion.
- Decisions.
- Action owners.
- Deadlines.
- Outstanding issues.

For lecture notes:
- Topic.
- Main concepts.
- Supporting explanations.
- Examples.
- Questions.
- Summary.

For interview notes:
- Source reference.
- Main responses.
- Important quotations or paraphrases.
- Follow-up questions.
- Confidentiality requirements.

5. CONSISTENCY CHECK

Check that the same person, term or topic is labeled consistently throughout the document.

If a speaker or participant identifier is used, apply the same identifier throughout. Do not switch labels without a reason.

Consistency must not override accuracy. If a source correction is required, follow the approved process.

6. ERROR LOG

For complex work, record issues in a simple log:
- Issue reference.
- Description.
- Location.
- Required correction.
- Verification status.

An issue log is especially useful when multiple people review a document or when changes must be traceable.

7. EDITING WITHOUT DISTORTION

Correct obvious spelling, punctuation and formatting issues when the task permits it.

Do not:
- Invent missing details.
- Change a tentative decision into a confirmed one.
- Remove disagreement that matters.
- Replace technical terminology with an inaccurate synonym.
- silently rewrite a quotation.
- Alter the meaning to make the source sound more professional.

When a correction requires interpretation, follow the client's instructions or seek clarification.

8. SAMPLE QUALITY REVIEW

Draft note:
"Meeting on 14 October. The team agreed to review the draft by Friday. Maria will send the final report by Thursday. The report has not yet been approved."

Review questions:
- Is Friday the review deadline or the report delivery deadline?
- Does "final report" conflict with the statement that the report is not approved?
- Are the names and dates verified?
- Is the relationship between review and approval clear?

Possible quality note:
"Confirm whether Thursday is the deadline for circulating the report and Friday is the review date. Confirm whether the report is a draft awaiting approval."

Do not silently resolve ambiguity that the source does not resolve.

9. PRACTICAL EXERCISE

Draft:
"The meeting is on 5 May. John will deliver the report on 3 May. The manager said the budget was approved, but the next paragraph says approval is still pending."

Identify at least three checks required before finalizing the notes.

MODEL ANSWER
- Verify the meeting date and year if required.
- Confirm the report deadline.
- Resolve the conflicting budget-approval statements against the source.
- Do not choose one conflicting statement without evidence.

10. QUALITY CHECKLIST

[ ] Required content is present.
[ ] Names and identifiers are checked.
[ ] Dates, figures and units are checked.
[ ] Decisions are represented accurately.
[ ] Action owners and deadlines are supported by the source.
[ ] Uncertainty is clearly identified.
[ ] Grammar and punctuation are reviewed.
[ ] Formatting is consistent.
[ ] File name and format meet requirements.
[ ] Confidentiality and delivery rules are followed.

KEY TAKEAWAY

Quality assurance is a deliberate process of checking content, language and presentation. Never sacrifice factual accuracy for a cleaner-looking document.
`
},
{
title: "15. Confidentiality, Ethics and Professional Conduct",
content: `
CONFIDENTIALITY, ETHICS AND PROFESSIONAL CONDUCT

LEARNING OBJECTIVES
- Explain the ethical responsibilities of a note-taker.
- Protect confidential information.
- Recognize conflicts of interest.
- Handle errors and sensitive details responsibly.
- Follow client and organizational rules.

1. PROFESSIONAL RESPONSIBILITY

A note-taker may encounter personal, commercial, academic, legal or operational information.

Professional conduct requires accuracy, impartiality, discretion, respect for instructions and responsible handling of records.

Access to information does not automatically authorize sharing it.

2. CONFIDENTIALITY

Follow the relevant confidentiality agreement, organizational policy and applicable law.

Practical safeguards:
- Share notes only with authorized recipients.
- Use approved storage and transfer methods.
- Avoid discussing private content in public places.
- Protect devices and accounts.
- Check recipient addresses before sending files.
- Avoid unnecessary copies.
- Report suspected exposure through the proper channel.

3. DATA MINIMIZATION

Collect and retain only information necessary for the task and permitted by the applicable rules.

Do not add personal information merely because it is available. Remove or anonymize details only when authorized and when doing so will not undermine the record's purpose.

4. IMPARTIALITY

Do not manipulate notes to favor a person, team or outcome.

Record relevant facts and disagreements fairly. Do not invent statements, remove material limitations or present personal opinions as source facts.

5. CONFLICTS OF INTEREST

A conflict may arise when personal interests could affect how information is recorded or handled.

If a conflict could compromise the assignment, follow the relevant disclosure and escalation process.

Do not use confidential information for personal benefit or disclose it to gain an advantage.

6. CORRECTING ERRORS

If an error is discovered:
1. Identify the affected note or record.
2. Compare it with the source.
3. Correct it using the approved process.
4. Preserve an audit trail where required.
5. Notify the responsible person if the error has already been distributed.
6. Avoid concealing a material mistake.

7. RECORD RETENTION

Follow the applicable retention and deletion policy.

Do not keep confidential records indefinitely without authorization. Do not destroy records that must legally or contractually be retained.

If instructions conflict or are unclear, seek guidance from the authorized supervisor or client.

8. SECURITY INCIDENTS

Examples include:
- Sending notes to the wrong recipient.
- Losing a device containing sensitive files.
- Sharing an unrestricted document link.
- Discovering unauthorized access.
- Uploading confidential notes to an unapproved service.

Respond promptly according to the incident-reporting process. Do not attempt to conceal the incident or independently make promises about its consequences.

9. ETHICAL SCENARIOS

Scenario A:
A colleague asks for meeting notes but is not listed as an authorized recipient.

Appropriate response:
Verify access authorization before sharing.

Scenario B:
A client asks you to remove a documented disagreement so the record appears unanimous.

Appropriate response:
Do not falsify the record. Explain the accuracy concern and follow the appropriate escalation process.

Scenario C:
You discover that a deadline was recorded incorrectly.

Appropriate response:
Verify the source, correct the record and notify affected recipients if necessary.

Scenario D:
You want to upload a confidential interview to an unfamiliar online tool.

Appropriate response:
Do not upload it unless the tool and use are authorized under the applicable rules.

10. PRACTICAL EXERCISE

Write a short procedure for receiving, storing, reviewing and delivering confidential meeting notes.

Your procedure should cover:
- Access authorization.
- Approved storage.
- Source verification.
- Secure delivery.
- Error reporting.
- Retention or deletion.

11. REVIEW QUESTIONS

1. Why does access not automatically mean permission to share?
2. What is data minimization?
3. How should a note-taker handle a material error?
4. Why must confidential files use approved tools?
5. What should happen when a client requests a misleading record?

KEY TAKEAWAY

Professional trust depends on accurate records, appropriate access, honest corrections and responsible handling of confidential information.
`
},
{
title: "16. Practical Note-Taking Lab and Final Assessment",
content: `
PRACTICAL NOTE-TAKING LAB AND FINAL ASSESSMENT

PURPOSE

This assessment checks whether the learner can prepare, organize, verify and present useful professional notes.

INSTRUCTIONS
- Read each source carefully.
- Use only information provided.
- Do not invent names, dates, deadlines or decisions.
- Keep observations separate from interpretations.
- Use clear headings and consistent formatting.
- Review the completed work before submission.

PART A: MEETING NOTES

SOURCE

Project Review Meeting

The team met on 12 October 2026 to review the customer registration process. Participants reported that some users were unable to complete registration on mobile devices. The team agreed that the registration page must be tested on three different mobile screen sizes before the next review.

Leah will prepare the test checklist. The checklist is due on 15 October 2026. Brian will review the registration instructions, but no deadline was agreed for that task.

The team discussed launching the updated registration page on 20 October. The launch date was not approved because the mobile testing results are not yet available.

TASK

Prepare meeting notes containing:
1. Meeting title and date.
2. Main issue.
3. Decision.
4. Action items, owners and deadlines.
5. Outstanding issue.

MODEL ANSWER

Meeting: Project Review Meeting
Date: 12 October 2026

Main issue:
Some users are unable to complete registration on mobile devices.

Decision:
The registration page must be tested on three different mobile screen sizes before the next review.

Action items:
- Leah: Prepare the test checklist by 15 October 2026.
- Brian: Review the registration instructions. Deadline not specified.

Outstanding issue:
The proposed 20 October launch date has not been approved. Mobile testing results are pending.

PART B: LECTURE NOTES

SOURCE

A spreadsheet stores information in rows and columns. Each row commonly represents a record, while each column represents a field. Data validation can restrict the values entered into a field. For example, a date field may reject values that do not follow the required date format. Validation can improve consistency, but it cannot guarantee that every value is factually correct.

TASK

Create structured lecture notes with a definition, key concepts, an example and an important limitation.

MODEL ANSWER

Topic: Spreadsheet Structure and Validation

Definition:
A spreadsheet organizes information in rows and columns.

Key concepts:
- Rows commonly represent records.
- Columns commonly represent fields.
- Data validation restricts permitted inputs.

Example:
A date field may reject values that do not follow the required date format.

Important limitation:
Validation improves consistency but does not guarantee factual accuracy.

PART C: INTERVIEW NOTES

SOURCE

A customer stated that the online order process was easy to use until the delivery section. The customer could not immediately find the delivery charge and wanted the amount to be displayed before checkout. The customer did not state whether this problem had caused a failed purchase.

TASK

Write notes that separate the reported experience from any interpretation.

MODEL ANSWER

Topic: Online ordering experience

Reported experience:
- The customer found the order process easy until the delivery section.
- The customer had difficulty locating the delivery charge.
- The customer wanted the charge displayed before checkout.

Unresolved question:
The source does not establish whether the issue caused a failed purchase.

Possible follow-up:
Ask whether the delivery-charge presentation affected completion of the order.

PART D: ERROR DETECTION

Draft notes:
"The budget was approved on Monday. The source also states that the budget remains under review. Samuel will send the final figures. No delivery date was discussed."

Identify the issues.

MODEL ANSWER
1. The approval status is contradictory and must be verified.
2. Samuel's responsibility is stated, but the deadline is not.
3. The phrase "final figures" should not be expanded into a more specific task without evidence.
4. No delivery date should be invented.

PART E: SELECT A NOTE-TAKING METHOD

Choose an appropriate method for each task and explain why.

1. A structured university lecture.
2. A brainstorming session for a new service.
3. A formal meeting with decisions and assigned actions.
4. A personal revision session.

SUGGESTED ANSWERS
1. Cornell or outline notes.
2. Mind mapping.
3. Structured meeting notes or formal minutes.
4. Cornell notes with revision questions.

Other methods may be appropriate when justified by the requirements.

PART F: FINAL QUALITY CHECK

Before submission, confirm:
[ ] The notes match the purpose of the task.
[ ] Important facts and limitations are retained.
[ ] No unsupported details have been introduced.
[ ] Names, dates and figures are checked.
[ ] Decisions are distinguished from proposals.
[ ] Action items show only supported owners and deadlines.
[ ] The notes are logically organized.
[ ] Spelling, punctuation and formatting are reviewed.
[ ] Confidentiality requirements are satisfied.
[ ] The correct file format is used.

ASSESSMENT RUBRIC: 100 MARKS

1. Accuracy and faithfulness to source: 25 marks
2. Completeness of relevant information: 20 marks
3. Organization and structure: 15 marks
4. Clear distinction between facts and interpretations: 15 marks
5. Correct decisions and action items: 10 marks
6. Grammar and readability: 10 marks
7. Professional handling of information: 5 marks

TOTAL: 100 MARKS

SUGGESTED PERFORMANCE BANDS
80-100: Strong professional standard.
65-79: Competent, with some areas to improve.
50-64: Developing; additional practice recommended.
Below 50: Review the core lessons and repeat the practical exercises.

These bands are training guidance, not a substitute for any official institutional grading policy.

FINAL REFLECTION

After completing the assessment, identify:
- One note-taking strength.
- One recurring error to improve.
- One method you will use more consistently.
- One quality-control habit you will apply to future work.

COURSE COMPLETION

Professional note-taking requires listening, selecting relevant information, organizing ideas, preserving meaning and checking the final record.

A professional note-taker does not invent missing information or disguise uncertainty. The goal is a clear and trustworthy record that another person can use.
`
}
];

async function main() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing from backend/.env");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB.");

  const course = await Course.findOne({ slug: "professional-note-taking" });

  if (!course) {
    throw new Error(
      "Course professional-note-taking was not found. No lessons were added."
    );
  }

  const existingTitles = new Set(
    course.lessons.map(lesson => lesson.title)
  );

  let nextOrder = course.lessons.reduce(
    (max, lesson) => Math.max(max, Number(lesson.order) || 0),
    0
  ) + 1;

  let added = 0;
  let skipped = 0;

  for (const item of modules) {
    if (existingTitles.has(item.title)) {
      console.log("Skipped existing:", item.title);
      skipped++;
      continue;
    }

    course.lessons.push({
      title: item.title,
      content: item.content.trim(),
      order: nextOrder++,
      resources: []
    });

    existingTitles.add(item.title);
    console.log("Prepared:", item.title);
    added++;
  }

  if (added > 0) {
    await course.save();
  }

  console.log("\n===== NOTE-TAKING COURSE EXPANSION =====");
  console.log("Course:", course.title);
  console.log("Slug:", course.slug);
  console.log("New lessons added:", added);
  console.log("Existing lessons skipped:", skipped);
  console.log("Total lessons now:", course.lessons.length);
  console.log("Other courses were not modified.");

  await mongoose.disconnect();
}

main().catch(async error => {
  console.error("Expansion failed:", error.message);
  await mongoose.disconnect().catch(() => {});
  process.exitCode = 1;
});
