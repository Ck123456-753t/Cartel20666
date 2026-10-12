require("dotenv").config();

const mongoose = require("mongoose");
const Course = require("../src/models/Course");

const newLessons = [
  {
    title: "05. The Complete Transcription Workflow",
    content: `
LEARNING OBJECTIVES
By the end of this lesson, you should be able to explain the complete professional transcription workflow and why each stage matters.

1. RECEIVE THE ASSIGNMENT
Read the client's instructions before opening the audio. Identify the required transcription style, output format, deadline, timestamp rules, speaker-label format, spelling conventions and any special terminology requirements.

2. CHECK THE FILES
Confirm that the audio file opens and plays. Check the file name, duration, format and whether all expected files are present. Report corrupted, incomplete or inaccessible recordings instead of pretending they work.

3. REVIEW THE INSTRUCTIONS
Identify whether the task requires strict verbatim, clean verbatim, intelligent verbatim or another specified convention. Never choose a style solely because it is easier.

4. PREPARE YOUR WORKSPACE
Use headphones where possible. Set a comfortable listening volume, remove unnecessary distractions and create a correctly named working document. Preserve the original recording.

5. LISTEN TO THE RECORDING
Listen to the beginning before transcribing. Identify the number of speakers, subject matter, accents, recording quality and any recurring names or technical terms.

6. PRODUCE THE FIRST DRAFT
Work in manageable sections. Listen, type, replay and compare. Use the required speaker labels and timestamps. Mark uncertain passages for later review instead of guessing.

7. REVIEW UNCERTAIN SECTIONS
Replay difficult passages at a slower speed if needed. Listen to the surrounding context. Use client-approved reference materials for names and terminology. Context can guide listening, but it cannot justify inventing speech.

8. EDIT THE TRANSCRIPT
Check punctuation, capitalization, paragraphing, spelling, number formatting and consistency with the requested style. Editing must not change the speaker's meaning or violate verbatim requirements.

9. PERFORM QUALITY ASSURANCE
Listen to the entire recording again while reading the transcript. Pay special attention to omissions, repeated words, speaker changes, names, numbers, negations and the ending.

10. FORMAT AND DELIVER
Use the requested file format and naming convention. Remove internal drafting notes that do not belong in the final transcript. Confirm that the file opens and the content is complete before submitting.

11. HANDLE FEEDBACK PROFESSIONALLY
If a client requests corrections, compare the feedback with the recording and assignment instructions. Correct verified errors, maintain confidentiality and learn from recurring mistakes.

WORKFLOW SUMMARY
Instructions → File check → Initial listening → Draft → Resolve uncertainties → Edit → Quality assurance → Format → Deliver.

COMMON MISTAKES
- Starting work without reading the instructions.
- Guessing unfamiliar words.
- Skipping the final portion of the recording.
- Delivering the wrong file type.
- Rewriting spoken words without permission.
- Failing to save work safely.

PRACTICE ACTIVITY
Write a checklist of at least eight steps you would complete before submitting a ten-minute interview transcript.

ASSESSMENT
Explain why the first draft should not automatically be treated as the final transcript.
`
  },
  {
    title: "06. Strict Verbatim Transcription",
    content: `
LEARNING OBJECTIVES
Understand strict verbatim and apply the client's conventions consistently.

DEFINITION
Strict verbatim attempts to represent the speech as actually spoken, including repetitions, false starts, filler words, stutters and relevant non-speech vocalizations according to the assignment's rules.

WHAT MAY NEED TO BE PRESERVED
- Filler words such as "um," "uh" and "er."
- Repeated words and phrases.
- False starts and abandoned sentences.
- Stutters and partial words when the required convention includes them.
- Grammar mistakes made by the speaker.
- Meaningful pauses or vocalizations when the guide requires them.
- Speaker changes and interruptions.

EXAMPLE
Audio: "I, I think we should, um, start again."

Strict-verbatim illustration: "I, I think we should, um, start again."

This example preserves the repetition and filler. Follow the actual client's punctuation and notation rules.

FALSE START EXAMPLE
Audio: "We need to sub- submit the form today."

Possible strict-verbatim rendering: "We need to sub- submit the form today."

The hyphen is illustrative. Different clients may require another convention for cut-off words.

GRAMMAR
Do not silently correct a speaker's grammar merely because the sentence sounds awkward. Spoken language is not always grammatically polished.

PUNCTUATION
Punctuation is an editorial representation of speech. Use it to communicate the speaker's likely sentence structure without changing the words or meaning.

IMPORTANT DISTINCTION
Strict verbatim does not mean that every breath, microphone click or background noise must be described. Include non-speech events according to the assignment instructions and the relevance of the sound.

WHEN TO USE IT
Strict verbatim may be required for legal proceedings, linguistic research, qualitative interviews, investigations or assignments where speech patterns matter. The client determines the actual standard.

QUALITY CHECK
Compare every repetition, filler, false start and incomplete word against the audio. Do not insert disfluencies simply because strict verbatim normally includes them.

PRACTICE
Audio: "Well, I, I wasn't, um, ready when they called."

Produce a strict-verbatim version and identify the repeated word and filler.

SELF-CHECK
Would removing "I, I" preserve every feature required by a strict-verbatim assignment? Usually not. Always apply the specified conventions.
`
  },
  {
    title: "07. Clean Verbatim and Intelligent Verbatim",
    content: `
LEARNING OBJECTIVES
Distinguish clean verbatim from strict verbatim and intelligent verbatim.

CLEAN VERBATIM
Clean verbatim generally removes selected non-meaningful fillers, unnecessary repetitions and abandoned false starts while preserving the speaker's meaning and wording as much as possible. Exact rules vary by client.

INTELLIGENT VERBATIM
Intelligent verbatim, sometimes called edited or non-verbatim transcription, may allow more substantial editing for readability. Depending on the assignment, this can include removing redundant speech, repairing sentence fragments or lightly reorganizing wording. It must not misrepresent the speaker.

ILLUSTRATIVE EXAMPLE
Audio: "Um, I, I think we should, you know, check the report again."

Strict verbatim:
"Um, I, I think we should, you know, check the report again."

Possible clean verbatim:
"I think we should check the report again."

Possible intelligent-verbatim rendering:
"I think we should review the report again."

The final example changes "check" to "review" and is therefore appropriate only if the client's editing rules permit that kind of rewriting. It is not a faithful word-for-word transcript.

COMPARISON
Strict verbatim: preserves disfluencies and repetitions according to the guide.
Clean verbatim: removes specified disfluencies while retaining the speaker's intended wording and meaning.
Intelligent verbatim: prioritizes readable communication and may permit broader edits when authorized.

WHAT MUST NEVER CHANGE
- The central meaning of a statement.
- A denial into an affirmation.
- A possibility into a certainty.
- A speaker's position or intention.
- A material number, name, date or factual claim.
- The identity of the person making a statement.

NEGATION EXAMPLE
Audio: "I did not approve the payment."

Never edit this to "I approved the payment." Removing or overlooking one small word can reverse the entire meaning.

CLIENT INSTRUCTIONS TAKE PRIORITY
These labels are not applied identically by every organization. Read the specific style guide before deciding what to remove or edit.

PRACTICE
Audio: "Well, um, we, we could probably finish it tomorrow."

Write:
1. A strict-verbatim version.
2. A clean-verbatim version.
3. An intelligent-verbatim version, making only edits authorized by your chosen instructions.

Explain every change.
`
  },
  {
    title: "08. Audio Preparation and Listening Techniques",
    content: `
LEARNING OBJECTIVES
Prepare audio for accurate transcription and use playback tools responsibly.

BEFORE LISTENING
- Confirm that the correct file has been supplied.
- Check that the recording plays from beginning to end.
- Use headphones when available.
- Set a comfortable volume.
- Minimize distractions.
- Note the duration and number of apparent speakers.
- Review any supplied glossary, names list or subject-specific instructions.

ACTIVE LISTENING
Listen for complete phrases rather than isolated sounds. Speech contains connected words, reductions, accents and changes in pace. Use the surrounding sentence to guide interpretation, not to manufacture words that cannot be heard.

A PRACTICAL METHOD
1. Listen to a short section without typing.
2. Identify the phrase and speaker.
3. Replay the section.
4. Type what is audible.
5. Replay while reading your draft.
6. Mark unresolved words.
7. Continue and return to difficult passages during review.

PLAYBACK SPEED
Slowing playback may help identify speech sounds. Excessive slowing can distort rhythm and pronunciation. Compare the original speed with the slower version before finalizing uncertain words.

REPLAY CONTROL
Use short loops for difficult sections. Include enough surrounding audio to understand the sentence. Avoid repeatedly listening to a tiny fragment until expectation causes you to hear a word that is not there.

AUDIO QUALITY PROBLEMS
Background noise, echo, clipping, low volume, overlapping voices and microphone distance can reduce intelligibility. Document a genuine limitation using the client's required notation.

ACCENTS
Do not treat an unfamiliar accent as incorrect speech. Listen carefully to vowel and consonant differences, connected speech and word stress. Use context and authorized reference materials while preserving the actual words.

SPEECH RECOGNITION TOOLS
Automatic speech recognition may assist when permitted, but its output must be checked against the recording. Names, numbers, accents, technical vocabulary, negations and overlapping speech are frequent sources of error.

CONFIDENTIALITY
Use only tools and services authorized by the client. Do not upload confidential recordings to unapproved transcription websites or public AI services.

PRACTICE
Listen to a short recording three times:
- First, identify speakers and topic.
- Second, create a draft.
- Third, check the draft against the audio.

Record which words were initially uncertain and how you verified them.
`
  },
  {
    title: "09. Speaker Identification and Dialogue Formatting",
    content: `
LEARNING OBJECTIVES
Identify speakers consistently and format dialogue so readers can follow the conversation.

SPEAKER LABELS
Use the labels required by the client. Common examples include:
Speaker 1:
Speaker 2:
Interviewer:
Participant:
Male Speaker:
Female Speaker:

Gendered labels should only be used where requested and reasonably supported. Do not infer a person's identity, title or name without evidence.

CONSISTENCY
If the first speaker is labeled Speaker 1, keep that label throughout the recording. Do not switch labels halfway through because a different voice sounds similar.

IDENTIFYING SPEAKERS
Use voice characteristics, turn-taking and context. If the identity cannot be determined confidently, use the client's unknown-speaker convention rather than guessing.

NEW SPEAKER
Start a new paragraph when the speaker changes, subject to the client's format. Clear speaker separation improves readability and helps prevent attribution errors.

OVERLAPPING SPEECH
When two people speak simultaneously, follow the required notation. Preserve intelligible speech from each speaker when possible. Never attribute one speaker's words to another merely to make the transcript cleaner.

INTERRUPTIONS
Use the prescribed dash or interruption notation when one speaker cuts another off. Distinguish an interrupted sentence from a sentence that simply ends.

EXAMPLE
Interviewer: Could you explain what happened when you—
Participant: I heard the alarm first.

This is an illustrative format. Use the client's exact interruption convention.

UNIDENTIFIED SPEAKERS
If a voice cannot be identified, use the specified label such as Unknown Speaker or Speaker 3. Do not create an identity from speculation.

MULTIPLE SPEAKERS
For meetings, panels and court recordings, keep a separate speaker list if permitted. Verify each participant's name and role from authorized information.

PRACTICE
Format a conversation between two speakers:
Speaker 1 asks whether the report is ready.
Speaker 2 says it is nearly complete.
Speaker 1 interrupts to ask for the deadline.
Speaker 2 answers that it is due Friday.

Use consistent labels and indicate the interruption clearly.
`
  },
  {
    title: "10. Timestamps and Time-Coded Transcripts",
    content: `
LEARNING OBJECTIVES
Create accurate timestamps when required and distinguish time codes from transcript content.

WHAT IS A TIMESTAMP?
A timestamp identifies a point or interval in the recording. Clients may require timestamps at fixed intervals, at speaker changes, at every utterance, or only at selected events.

COMMON FORMATS
[00:01:24]
[00:01:24 - 00:01:38]
[00:01:24 --> 00:01:38]

These are examples, not universal standards. Use the format specified by the client.

TIME FORMAT
For recordings under one hour, HH:MM:SS or MM:SS may be requested. Longer recordings often require hours. Do not mix formats within one deliverable.

ACCURACY
Use the media player's actual elapsed time. A timestamp must point to the corresponding audio location. Do not estimate timestamps from memory or invent them to fill a gap.

INTERVAL TIMESTAMPS
If a task requires intervals, verify the beginning and ending points. Ensure the transcript segment corresponds to the stated interval.

SPEAKER TIMESTAMPS
If timestamps are required at speaker changes, place them consistently at the start of the relevant speech or according to the client's convention.

SUBTITLE AND CAPTION FORMATS
Some tasks use SRT or WebVTT. These formats have structural requirements, including time ranges and, in SRT, numbered cues. Follow the requested format rather than delivering an ordinary document with timestamps pasted into it.

EXAMPLE OF A SIMPLE TIME-CODED TRANSCRIPT
Speaker 1:
[00:00:05 --> 00:00:12]
Good morning. We will begin the meeting now.

Speaker 2:
[00:00:13 --> 00:00:18]
Thank you. I have the report ready.

The times are illustrative only and do not refer to a real recording.

QUALITY CHECKS
- Verify the first and last timestamp.
- Confirm that time ranges are chronological.
- Check for accidental duplicated or skipped segments.
- Confirm that each segment matches the audio.
- Use the required precision.
- Do not confuse a recording's time code with the calendar date.

PRACTICE
Create three time-coded segments from a practice recording. Replay each start and end point to verify accuracy.
`
  },
  {
    title: "11. Punctuation, Capitalization and Spoken Grammar",
    content: `
LEARNING OBJECTIVES
Represent speech clearly without changing the words or intended meaning.

PUNCTUATION
Speech does not arrive with written punctuation. The transcriber uses syntax, pauses, intonation and context to choose punctuation carefully.

PERIODS
Use a period when a complete statement ends, unless the required format specifies another convention.

COMMAs
Use commas to clarify sentence structure, lists and introductory expressions. Do not insert a comma after every audible pause.

QUESTION MARKS
Use a question mark for a question. A rising voice alone does not always make a sentence a question, so consider its grammatical structure and meaning.

ELLIPSES
Use ellipses only where the client permits them and where they accurately represent trailing off or omitted material. Do not use them as a universal symbol for every pause.

DASHES
A dash may represent an interruption or abrupt change in speech when required. Apply the same convention consistently.

CAPITALIZATION
Capitalize sentence beginnings and verified proper nouns. Follow the client's style for titles, acronyms and headings.

GRAMMAR
Do not silently repair spoken grammar in a verbatim assignment. A speaker may use fragments, incorrect agreement or unusual sentence structure. Preserve it according to the requested transcription style.

REPEATED WORDS
A repeated word may be a meaningful emphasis, hesitation or accidental repetition. Preserve or remove it according to the client's instructions, not personal preference.

NUMBERS
Follow the required style for numbers, dates, times, currencies, measurements and percentages. Accuracy takes priority over aesthetic consistency.

EXAMPLE
Spoken: "We need three things paper pens and folders."

Possible edited punctuation: "We need three things: paper, pens, and folders."

The punctuation clarifies the list without changing the words.

AMBIGUITY
When punctuation could change the meaning, replay the audio and consider the sentence structure. Avoid adding punctuation that asserts a meaning unsupported by the recording.

PRACTICE
Punctuate this spoken sentence:
"She said we should leave now but I wanted to wait"

Provide two possible punctuations if context makes the meaning ambiguous, and explain what additional context would help.
`
  },
  {
    title: "12. Numbers, Names, Acronyms and Technical Terms",
    content: `
LEARNING OBJECTIVES
Transcribe names, figures and specialist vocabulary accurately.

NAMES
Listen carefully to personal names, organizations, places and product names. Use a client-provided glossary or authorized reference source when available. Never invent a spelling.

NUMBERS
Numbers can be easy to mishear. Distinguish thirteen from thirty, fifteen from fifty and similar-sounding values. Replay important numbers in context.

DATES
Check the order and format required for dates. For international assignments, be aware that numeric dates can be ambiguous.

CURRENCY
Preserve the amount and currency actually spoken. Do not convert currencies or alter a financial figure unless explicitly instructed.

MEASUREMENTS
Check units such as kilograms, kilometres, milligrams and degrees. A unit error can materially change meaning.

PHONE NUMBERS AND IDENTIFIERS
Verify every digit. Use the client's required grouping and punctuation. Do not assume a partially audible digit.

ACRONYMS
Follow the client style guide for capitalization and whether an acronym should be expanded. Do not invent an expansion because the letters look familiar.

TECHNICAL VOCABULARY
Build an authorized glossary for repeated terminology. Confirm specialist terms using reliable references where permitted. Do not substitute a familiar word merely because the spoken term is unfamiliar.

HOMOPHONES
Words such as their, there and they're sound alike in many contexts. Use sentence structure and context to determine the intended word while ensuring that the audio supports it.

PROPER NOUNS
Capitalization does not prove identity. Confirm names using supplied materials or authorized sources.

PRIORITY REVIEW
Give special attention to:
- Names and titles.
- Dates and deadlines.
- Monetary amounts.
- Negations.
- Dosages and measurements.
- Case numbers and legal references.
- Account and identification numbers.

CONFIDENTIALITY
Never search for or disclose private information beyond what is authorized for the assignment. Use supplied reference materials responsibly.

PRACTICE
Create a checklist for verifying a transcript containing a person's name, a date, a monetary amount, a telephone number and an acronym.
`
  },
  {
    title: "13. Unclear Speech, Inaudible Audio and Non-Speech Events",
    content: `
LEARNING OBJECTIVES
Handle uncertain speech transparently without guessing or hiding genuine audio limitations.

UNCLEAR WORDS
Replay the phrase, listen to surrounding context and use authorized reference material. If the word remains uncertain, follow the client's uncertainty convention.

INAUDIBLE SPEECH
Use the exact notation required by the client, such as [inaudible] or [unintelligible]. Some clients require timestamps with these labels.

IMPORTANT DISTINCTION
Unintelligible means speech is present but cannot be understood. Silence means no speech is audible. Do not label silence as unintelligible speech.

PARTIALLY UNDERSTOOD PHRASES
Transcribe the words that can be confidently heard and mark the genuinely unclear portion according to the style guide. Do not replace an entire sentence with an uncertainty label when only one word is unclear.

GUESSING
Context is useful but is not proof. A sentence may strongly suggest a particular word, yet the recording may contain another word. Never convert a guess into a verified transcript.

BACKGROUND SOUNDS
Include sound descriptions only when required or materially relevant. Examples may include [door closes], [laughter] or [alarm sounds]. Use neutral descriptions.

VOCALIZATIONS
Laughter, crying, coughing and gasping may be relevant to some assignments. Follow the client's convention and avoid overinterpreting emotion.

SILENCE AND PAUSES
Do not annotate every pause unless required. If pauses are important to the assignment, use the prescribed notation.

OVERLAPPING SPEECH
Attempt to distinguish each voice. Mark unresolved overlapping speech according to the style guide and preserve any words that remain intelligible.

REDACTIONS
If the assignment requires redaction, follow the client's approved procedure. Do not independently remove information because it seems sensitive or inconvenient. Escalate unclear instructions.

EXAMPLE
Audio: "Please send the [unclear word] by Friday."

This is a teaching example. Replace the bracketed note with the client's exact uncertainty convention in real work.

PRACTICE
A recording contains a clear sentence with one unintelligible word and a door slam. Explain how you would transcribe it under:
1. A strict-verbatim assignment.
2. A clean-verbatim assignment.
3. An assignment that excludes non-speech sounds.

The client's rules determine the correct final format.
`
  },
  {
    title: "14. Paragraphing, Document Formatting and Transcript Templates",
    content: `
LEARNING OBJECTIVES
Deliver readable, consistent transcripts that match the requested format.

FOLLOW THE SPECIFICATION
The client may require DOCX, PDF, TXT, SRT, VTT or another format. Use the exact requested format and confirm that the file opens correctly.

COMMON HEADER FIELDS
A transcript may include:
- Transcript title.
- Client or project identifier.
- Company or organization.
- Transcriber field, where required.
- Recording duration.
- Recording date or transcript date, as specified.
- Other required metadata.

Do not invent missing metadata. Use a blank field or the client's approved placeholder when information is unavailable.

PARAGRAPHING
Start new paragraphs at appropriate speaker changes or shifts in thought. Very long blocks are difficult to review. Excessive line breaks can also disrupt readability.

SPEAKER LABELS
Use consistent capitalization and punctuation. Follow the required layout for labels and speech.

FONT AND SPACING
Apply the client's specifications. If none are supplied, choose a clear, readable format and use it consistently.

FOOTERS
Some organizations require a completion marker, copyright notice or confidentiality statement. Include only authorized text.

FILE NAMING
Use the required naming convention. Avoid ambiguous names such as final-final-new2. Ensure the file name identifies the assignment without exposing unnecessary personal information.

FINAL DOCUMENT CHECK
- Correct file type.
- Correct file name.
- Required metadata present.
- Speaker labels consistent.
- Timestamps formatted consistently.
- No drafting notes accidentally included.
- No missing ending.
- No blank or duplicate pages.
- No broken characters or corrupted text.

ACCESSIBILITY
Use readable fonts, logical headings and clear speaker separation. Ensure formatting does not make the content harder to use.

SAMPLE HEADER
Transcript Title: Project Interview
Client ID: [Client-provided ID]
Company: [Company name]
Transcriber: [Required name or identifier]
Duration: [Verified duration]
Date: [Required date]

The placeholders above are examples. Use actual authorized metadata in real assignments.

PRACTICE
Format a one-page transcript using the template required by your training instructor. Check the header, speaker labels, paragraphing and file name before submitting.
`
  },
  {
    title: "15. Legal, Interview, Lecture and Meeting Transcription",
    content: `
LEARNING OBJECTIVES
Recognize how the purpose of a recording affects transcription decisions.

LEGAL TRANSCRIPTION
Legal recordings may include hearings, witness interviews, depositions, court proceedings or lawyer-client material. Accuracy, speaker attribution and preservation of wording can be especially important.

Do not present yourself as a court reporter or certified legal professional unless appropriately qualified. Follow the client's legal transcription standards and any applicable confidentiality obligations.

LEGAL DETAILS TO CHECK
- Speaker names and roles supplied by the client.
- Case numbers and dates.
- Legal terminology.
- Objections and interruptions.
- Questions and answers.
- Unclear passages.
- Required timestamps and formatting.

Do not invent missing words in a legal statement or silently improve a speaker's grammar when verbatim rules apply.

INTERVIEW TRANSCRIPTION
Interviews often contain questions, answers, pauses, repetitions and overlapping speech. Keep interviewer and participant labels consistent. Preserve meaningful wording and follow the requested verbatim style.

RESEARCH INTERVIEWS
Research data may contain sensitive personal information. Follow consent, data protection, anonymization and storage requirements supplied by the responsible organization. Do not independently publish or share participant information.

LECTURE TRANSCRIPTION
Lectures may contain technical terms, quotations, slides and references. Use authorized course materials or glossaries to verify terminology. Distinguish what the speaker says from any notes added by the transcriber.

MEETING TRANSCRIPTION
Meetings may contain multiple speakers, interruptions, acronyms and action items. A verbatim transcript records speech according to its style guide. Meeting minutes are a different product that summarizes decisions and actions.

MEDICAL OR TECHNICAL RECORDINGS
Specialist terminology requires extra care. Follow the client-approved terminology and confidentiality rules. Do not guess unfamiliar terms or offer professional advice while transcribing.

SPECIALIST QUALITY CONTROL
Create a checklist of high-risk details specific to the recording. Verify names, figures, technical expressions, negations and speaker attribution against the audio.

PRACTICE
A court recording contains an interruption, an unclear case number and two speakers talking at once. Explain what you would preserve, what you would verify and what you would flag for review.
`
  },
  {
    title: "16. Proofreading and Professional Quality Assurance",
    content: `
LEARNING OBJECTIVES
Develop a repeatable review process that improves accuracy and consistency.

WHY QUALITY ASSURANCE MATTERS
A transcript can look polished while containing missing words, incorrect figures or misattributed statements. Grammar alone cannot prove that a transcript matches the audio.

THE TWO-PASS METHOD
PASS ONE: CONTENT
Listen to the recording while following the transcript. Check every sentence for omissions, additions, repetitions, speaker changes, names and numbers.

PASS TWO: PRESENTATION
Review punctuation, capitalization, paragraphing, labels, timestamps, spelling and compliance with the requested template.

HIGH-RISK ITEMS
Prioritize:
- Negations such as not and never.
- Names and titles.
- Numbers, dates and money.
- Technical vocabulary.
- Speaker changes.
- Overlapping speech.
- The first and final portions of the recording.
- Every section previously marked uncertain.

COMMON ERROR CATEGORIES
Omission: audible speech missing from the transcript.
Insertion: words included that were not spoken.
Substitution: a different word appears in place of the spoken word.
Attribution error: words assigned to the wrong speaker.
Formatting error: the content violates the required template.
Timing error: a timestamp does not match the recording.
Convention error: the transcript fails to follow the requested style.

ERROR LOG
Maintain a private training log that records the error type, its cause and the corrective action. Do not store confidential client recordings in an unauthorized log.

QUALITY METRICS
Where an objective measure is required, follow the client's definition. Word Error Rate is commonly calculated as:

WER = (Substitutions + Deletions + Insertions) / Number of words in the reference transcript.

A reference transcript must be established for this calculation. WER is useful but does not capture every issue, such as speaker attribution, timing or formatting.

FINAL SUBMISSION CHECKLIST
[ ] Correct recording and assignment.
[ ] Correct transcription style.
[ ] No known omissions.
[ ] Names and numbers verified.
[ ] Speaker labels consistent.
[ ] Timestamps checked where required.
[ ] Unclear passages handled transparently.
[ ] Formatting and file type correct.
[ ] Confidentiality requirements followed.
[ ] Final file opens and is complete.

PRACTICE
Review a short practice transcript against its recording. Record each verified error and explain how you corrected it.
`
  },
  {
    title: "17. Confidentiality, Ethics and Client Communication",
    content: `
LEARNING OBJECTIVES
Protect client information and communicate professionally throughout an assignment.

CONFIDENTIALITY
Audio may contain personal, business, legal, financial, educational or health-related information. Access only the information needed for the assignment and follow the client's security instructions.

SAFE FILE HANDLING
- Use authorized storage and transfer methods.
- Keep files away from public shared devices where possible.
- Do not share recordings through personal or public links without authorization.
- Do not upload client files to unapproved third-party services.
- Use strong account security and lock your device.
- Remove local copies only according to the agreed retention policy.

PRIVACY
Do not use client recordings as public portfolio examples without explicit authorization. Remove or anonymize identifying details only when instructed and in accordance with the applicable rules.

ACCURACY AND HONESTY
Never claim that a recording has been fully checked if it has not. Never fabricate speech to fill gaps. Tell the appropriate contact when audio quality or missing information prevents reliable completion.

DEADLINES
Estimate time realistically. If a delay or technical issue threatens the deadline, notify the responsible contact as early as possible.

CLARIFYING INSTRUCTIONS
Ask concise, specific questions when style requirements conflict or essential information is missing. Do not make risky assumptions simply to avoid asking for clarification.

CLIENT DISAGREEMENTS
Respond professionally. Compare the requested correction with the audio and style guide. Escalate unresolved factual or contractual disputes through the agreed process.

CONFLICTS OF INTEREST
Follow the client's policies for restricted material, competing assignments and unauthorized disclosure.

ETHICAL RULE
The transcriber is responsible for faithfully representing the recording within the agreed style. Personal opinions must not alter the transcript.

PRACTICE
A colleague asks you to forward a client's recording to a personal email account so they can help you finish faster. Explain the professional response and the safer alternative.
`
  },
  {
    title: "18. Transcription Tools, File Types and Troubleshooting",
    content: `
LEARNING OBJECTIVES
Choose appropriate tools and solve common technical problems without compromising the source recording.

COMMON TOOLS
- Audio player with pause, seek and speed controls.
- Headphones.
- Text editor or word processor.
- Foot pedal, where available and useful.
- Approved timestamping or transcription software.
- Authorized glossary and terminology references.

TOOL SELECTION
Use tools that match the assignment, your device and the client's security requirements. A sophisticated tool cannot compensate for inaccurate listening or poor quality control.

COMMON AUDIO FORMATS
MP3 and AAC are common compressed audio formats. WAV is commonly used for uncompressed audio. Other formats may also be supplied. Do not convert files unless necessary and permitted.

DOCUMENT FORMATS
DOCX is useful for editable documents. TXT is plain text. PDF is often used for fixed-layout delivery. SRT and WebVTT are used for subtitles or captions and require specific structures.

FILE WON'T OPEN
Check the file extension, file size, download completion and compatibility with the player. Request a replacement if the file is corrupted or unsupported.

NO SOUND
Check volume, mute settings, output device and whether the correct track is selected. Confirm that the recording itself contains audible sound.

PLAYBACK STUTTERS
Close unnecessary applications, allow the file to finish downloading, or use an approved compatible player. Do not assume a playback glitch is part of the recording.

DOCUMENT CORRUPTION
Keep a safe working copy and save regularly. If a document becomes corrupted, recover from a legitimate backup rather than silently replacing it with an incomplete file.

AUTOMATIC TRANSCRIPTION
Use automatic speech recognition only where permitted. Verify its output against the original recording and correct the errors. Never assume a high confidence score means the text is accurate.

BACKUPS
Use approved storage and versioning methods. Keep the original recording unchanged unless instructed otherwise.

PRACTICE
Prepare a troubleshooting checklist for an audio file that opens but produces no sound. Include at least five checks and identify when you would contact the client.
`
  },
  {
    title: "19. Worked Examples and Practical Transcription Lab",
    content: `
PURPOSE
This lesson provides written practice. These are constructed examples, not extracts from real recordings. In a real assignment, always use the supplied audio as the source of truth.

EXERCISE A: REPETITION
Audio: "I, I sent the file yesterday."

Strict-verbatim illustration:
"I, I sent the file yesterday."

Possible clean-verbatim illustration:
"I sent the file yesterday."

Question: What was removed, and under which instructions would removal be acceptable?

EXERCISE B: FILLERS
Audio: "Um, the meeting starts at, uh, nine."

Possible strict-verbatim rendering:
"Um, the meeting starts at, uh, nine."

Possible clean-verbatim rendering:
"The meeting starts at nine."

Question: Why should the transcriber verify the style before removing fillers?

EXERCISE C: SPEAKER CHANGE
Speaker 1: "Have you finished the report?"
Speaker 2: "Not yet. I will finish it this afternoon."

Task: Format the exchange with consistent speaker labels and punctuation.

EXERCISE D: UNCLEAR WORD
Audio: "Please place the document beside the [unclear word]."

Task: Explain how you would replay the audio, use authorized context and apply the client's uncertainty convention. Do not invent the missing word.

EXERCISE E: NUMBERS
Audio: "The total was fifteen thousand and thirty shillings."

Task: Identify the amount carefully and format it only according to the client's rules. Replay the number to verify that it was not fifteen thousand and thirteen.

EXERCISE F: INTERRUPTIONS
Speaker 1: "I thought we could finish the—"
Speaker 2: "The deadline is today."

Task: Use the specified interruption convention and preserve the order of speech.

EXERCISE G: TIMESTAMPS
A hypothetical recording contains:
00:00:04 - Speaker 1 begins.
00:00:11 - Speaker 2 replies.
00:00:19 - Speaker 1 asks a follow-up.

Task: Produce a timestamped transcript using the required client format. These event times are exercise data, not verified audio timestamps.

EXERCISE H: FINAL QUALITY CONTROL
Imagine you have completed a ten-minute recording. Your draft contains one uncertain name, a possible omitted sentence and inconsistent speaker labels.

Task:
1. Replay the uncertain name.
2. Check the possible omission against the audio.
3. standardize speaker labels.
4. Listen to the full recording while reading the transcript.
5. Confirm the final format and file name.

PRACTICAL SUBMISSION
Choose an authorized practice recording. Produce the requested transcript, state which style you used, mark uncertainty according to the guide, and complete the quality-control checklist.

SELF-REVIEW
Record three things you did well, three errors you corrected and one skill you need to improve.
`
  },
  {
    title: "20. Final Assessment and Professional Readiness",
    content: `
INSTRUCTIONS
Answer the questions using the course lessons. Follow the instructor's assessment rules. For practical questions, use an authorized practice recording and its required style guide.

PART A: KNOWLEDGE QUESTIONS

1. Define transcription.
2. Explain the difference between strict verbatim and clean verbatim.
3. What is intelligent verbatim, and why must the client's instructions control editing?
4. Why should a transcriber never guess an unclear word?
5. Name four high-risk items that require careful verification.
6. Explain the purpose of speaker labels.
7. What is a timestamp?
8. Explain the difference between unintelligible speech and silence.
9. Why is a first draft not automatically a final transcript?
10. Give three examples of information that may require special confidentiality protections.

PART B: SCENARIO QUESTIONS

11. A client requests strict verbatim, but you remove every filler word. What is the problem?
12. Two speakers talk simultaneously. What should you do?
13. A financial amount is unclear. What is the correct procedure?
14. A recording contains a word you cannot identify despite replaying it. How should you represent it?
15. The audio file is corrupted and only half the recording plays. Should you submit the partial transcript as complete? Explain.
16. A transcript is accurate but uses the wrong file format. Is it ready for delivery?
17. An automatic transcript contains a plausible sentence that you cannot hear in the audio. What should you do?
18. A client asks for an unauthorized public upload of confidential audio. What is the professional response?

PART C: PRACTICAL TASK

Using an authorized practice recording:
1. Read the assignment instructions.
2. Identify the required transcription style.
3. Create the transcript using the specified labels and timestamps.
4. Mark uncertain speech correctly.
5. Check names, numbers and specialist terms.
6. Review the transcript against the entire recording.
7. Submit in the required file format.

PART D: SELF-ASSESSMENT

Evaluate your performance in:
- Word accuracy.
- Speaker identification.
- Timestamp accuracy.
- Style-guide compliance.
- Punctuation and formatting.
- Handling of uncertain speech.
- Confidentiality.
- Meeting the deadline.

SUGGESTED KNOWLEDGE SCORING
Award one point per correctly answered knowledge question in Part A. Use instructor judgment for scenario and practical work. A suggested pass threshold is 80 percent, but this is not an official certificate standard unless the Academy administrator adopts it.

PROFESSIONAL READINESS
Completion of a lesson or quiz does not automatically establish professional competence. Demonstrate consistent accuracy on practice recordings, follow client instructions and seek feedback before accepting work beyond your skill level.

END OF COURSE
You have studied the transcription process from assignment instructions through final delivery. Continue practicing with authorized audio, review your errors and apply the exact conventions required for every task.
`
  }
];

async function expandTranscriptionCourse() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing from backend/.env");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB.");

  const course = await Course.findOne({
    slug: "professional-transcription"
  });

  if (!course) {
    throw new Error(
      'Course "professional-transcription" was not found. No course was created or modified.'
    );
  }

  const existingTitles = new Set(
    course.lessons.map(lesson => lesson.title.trim().toLowerCase())
  );

  let nextOrder = course.lessons.reduce(
    (highest, lesson) => Math.max(highest, Number(lesson.order) || 0),
    0
  ) + 1;

  let added = 0;
  let skipped = 0;

  for (const lessonData of newLessons) {
    const normalizedTitle = lessonData.title.trim().toLowerCase();

    if (existingTitles.has(normalizedTitle)) {
      console.log("Already exists, skipped:", lessonData.title);
      skipped++;
      continue;
    }

    course.lessons.push({
      title: lessonData.title,
      content: lessonData.content.trim(),
      order: nextOrder++,
      resources: []
    });

    existingTitles.add(normalizedTitle);
    added++;
    console.log("Added:", lessonData.title);
  }

  if (added > 0) {
    await course.save();
  }

  console.log("\n===== TRANSCRIPTION COURSE EXPANSION =====");
  console.log("Course:", course.title);
  console.log("Slug:", course.slug);
  console.log("New lessons added:", added);
  console.log("Existing lessons skipped:", skipped);
  console.log("Total lessons now:", course.lessons.length);
  console.log("Course description and publication status were not changed.");
  console.log("Other courses were not modified.");
}

expandTranscriptionCourse()
  .catch(error => {
    console.error("Course expansion failed:", error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
  });
