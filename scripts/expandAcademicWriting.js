require("dotenv").config();

const mongoose = require("mongoose");
const Course = require("../src/models/Course");

const newLessons = [
{
title: "04. The Complete Academic Writing Workflow",
content: `
ACADEMIC WRITING AND RESEARCH
MODULE 04 | THE COMPLETE ACADEMIC WRITING WORKFLOW

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. MODULE OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Academic writing is a structured process of investigating a question, developing an argument, supporting claims with reliable evidence, and communicating findings clearly.

A strong paper is rarely produced in one sitting. Professional academic work involves planning, research, drafting, citation, revision, and final quality checks.

LEARNING OBJECTIVES

By the end of this lesson, you should be able to:
• Explain the stages of academic writing.
• Convert an assignment brief into a practical plan.
• Organize research before drafting.
• Revise and proofread a paper systematically.
• Check whether a submission meets its requirements.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. THE SEVEN-STAGE WORKFLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STAGE 1: UNDERSTAND THE ASSIGNMENT

Read the instructions carefully.

Identify:
• The topic and central question.
• The command words, such as analyse, compare, evaluate, discuss, or explain.
• The required length.
• The referencing style.
• The submission format and deadline.
• Any required sources, sections, or learning outcomes.

Command words matter. "Describe" generally asks what something is, while "evaluate" requires a reasoned judgement supported by evidence.

STAGE 2: DEFINE THE SCOPE

Narrow a broad topic into a manageable question.

Broad topic:
The effect of technology on education.

More focused question:
How has access to online learning affected university students' study habits?

A focused question gives the paper a clear direction.

STAGE 3: RESEARCH THE TOPIC

Locate credible sources such as scholarly journal articles, academic books, official statistics, and reputable institutional reports.

Record bibliographic details while researching:
• Author or organization.
• Publication year.
• Title.
• Journal, publisher, or website.
• DOI or URL where applicable.

Recording these details immediately reduces the risk of missing references later.

STAGE 4: PLAN THE ARGUMENT

Write a provisional thesis statement and arrange the main points in a logical order.

Each major point should contribute to answering the assignment question.

STAGE 5: DRAFT THE PAPER

Write the introduction, body, and conclusion according to the required structure.

Support claims with evidence. Explain why the evidence matters instead of merely inserting quotations.

STAGE 6: REVISE AND PROOFREAD

Revision examines the quality of the argument, organization, evidence, and reasoning.

Proofreading focuses on errors in grammar, spelling, punctuation, formatting, and references.

STAGE 7: COMPLETE THE FINAL CHECK

Confirm that the paper answers the question, meets the word limit, follows the required style, cites borrowed ideas, and is saved in the correct format.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. WORKFLOW FLOWCHART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Read assignment instructions
          |
          v
Define the research question
          |
          v
Find and evaluate sources
          |
          v
Develop thesis and outline
          |
          v
Draft the paper
          |
          v
Revise argument and structure
          |
          v
Proofread citations and formatting
          |
          v
Final submission check

If a stage reveals a major problem, return to the relevant earlier stage. Writing is iterative, not a magical conveyor belt.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. PRACTICAL EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ASSIGNMENT:
Discuss the importance of digital literacy among university students.

POSSIBLE RESEARCH QUESTION:
How does digital literacy influence university students' ability to evaluate online information?

POSSIBLE THESIS:
Digital literacy supports effective university learning by helping students evaluate online sources, use research tools responsibly, and communicate information appropriately.

POSSIBLE OUTLINE:
1. Introduction and definition of digital literacy.
2. Evaluating the credibility of online information.
3. Using digital research tools.
4. Ethical use of digital information.
5. Challenges and recommendations.
6. Conclusion.

This is a planning example, not a claim that the thesis has already been proven. Research must establish whether the evidence supports it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Starting to write before understanding the question.
• Researching without recording source details.
• Collecting information that does not support the argument.
• Leaving citations until the final hour.
• Treating proofreading as a substitute for substantive revision.
• Submitting without checking the assignment requirements.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. PRACTICE EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine that you have been asked to evaluate the benefits and challenges of online learning in universities.

Tasks:
1. Write a focused research question.
2. Identify three types of credible sources to investigate.
3. Draft a provisional thesis.
4. Create a five-section outline.
5. List four checks you would perform before submission.

MODEL ANSWER GUIDE

A suitable question could examine how online learning affects accessibility, student engagement, and learning outcomes in a defined university context.

Useful sources may include peer-reviewed research, official education statistics, and university reports.

A strong thesis should make a specific, debatable claim rather than simply announce the topic.

The outline should move logically from introduction and context to evidence-based analysis and conclusion.

Final checks should include argument quality, source accuracy, citation consistency, and compliance with submission instructions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KEY TAKEAWAY

Successful academic writing follows a repeatable process: understand, investigate, plan, draft, revise, verify, and submit.
`
},
{
title: "05. Research Questions, Topics and Thesis Statements",
content: `
ACADEMIC WRITING AND RESEARCH
MODULE 05 | QUESTIONS, TOPICS AND THESIS STATEMENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. UNDERSTANDING THE THREE CONCEPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TOPIC
The broad subject that a paper examines.

RESEARCH QUESTION
The specific question the research aims to answer.

THESIS STATEMENT
The central claim or position that the paper will defend using reasoning and evidence.

EXAMPLE

Topic:
Mobile banking among university students.

Research question:
What factors influence the use of mobile banking among university students?

Thesis statement:
Convenience, transaction costs, and confidence in digital security are important factors to investigate when explaining mobile banking use among university students.

The thesis is provisional until research supports the claim.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. HOW TO NARROW A TOPIC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Begin with a broad subject, then narrow it by population, place, period, relationship, or problem.

Broad:
Environmental conservation.

Narrower:
Plastic waste management in urban communities.

More focused:
What barriers affect household participation in plastic waste separation in a selected urban community?

A manageable question identifies what will be investigated without trying to explain everything about a subject.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. CHARACTERISTICS OF A GOOD RESEARCH QUESTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A useful question is:

• Clear: readers can understand what is being asked.
• Focused: it addresses a manageable problem.
• Researchable: evidence can reasonably be collected or examined.
• Relevant: it contributes to understanding the topic.
• Appropriate: it fits the assignment, available resources, and ethical requirements.

Avoid questions that are too broad, purely rhetorical, or impossible to investigate with the available evidence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. BUILDING A THESIS STATEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A thesis should:
1. Address the assignment question.
2. State a specific central position.
3. Indicate the main reasoning or themes.
4. Be supported by credible evidence.
5. Remain open to revision as research develops.

WEAK THESIS:
Technology has many effects on education.

WHY IT IS WEAK:
It is vague and does not identify a clear argument.

MORE FOCUSED THESIS:
When supported by reliable connectivity and suitable teaching methods, digital learning platforms can widen access to university materials, although unequal internet access may limit their benefits.

WHY IT IS STRONGER:
It identifies a position and acknowledges a relevant limitation that can be examined through evidence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. TESTING YOUR THESIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ask yourself:
• Does it answer the research question?
• Is it specific enough for the required word count?
• Can I support it with evidence?
• Does it make an argument rather than state an obvious fact?
• Does the paper actually develop the points promised by the thesis?

If the evidence contradicts your initial position, revise the thesis. Research is not supposed to be a hunt for evidence that agrees with you.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. PRACTICAL EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Broad topic:
Youth unemployment.

Tasks:
1. Narrow the topic to a defined population or location.
2. Write one research question.
3. Draft a thesis statement.
4. Identify two types of evidence that could help evaluate the thesis.

MODEL ANSWER

Possible focused question:
What barriers do recent university graduates face when seeking formal employment in a selected region?

Possible provisional thesis:
Limited work experience, gaps between training and employer requirements, and restricted access to professional networks may contribute to employment difficulties among recent graduates.

This thesis must be tested against relevant research rather than accepted automatically.

KEY TAKEAWAY

A clear research question gives the investigation direction, while a defensible thesis gives the paper its central argument.
`
},
{
title: "06. Structure of Essays and Research Papers",
content: `
ACADEMIC WRITING AND RESEARCH
MODULE 06 | STRUCTURE OF ESSAYS AND RESEARCH PAPERS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. WHY STRUCTURE MATTERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Structure helps readers understand the purpose of a paper, follow its reasoning, and distinguish evidence from conclusions.

The required structure depends on the assignment, discipline, and institution. Always follow the supplied instructions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. THE INTRODUCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A strong introduction normally:
• Establishes the topic and relevant context.
• Defines important terms where necessary.
• Identifies the problem or issue.
• Establishes the scope of the discussion.
• States the thesis or purpose.
• Briefly indicates the organization when useful.

Avoid beginning with unsupported sweeping claims such as "Since the beginning of time, education has always been important."

EXAMPLE

Topic: Digital literacy in higher education.

A focused introduction could explain the increasing use of digital information in university learning, identify the challenge of evaluating online sources, and state the paper's central argument about the importance of digital literacy.

The introduction should lead naturally to the question being examined.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. THE BODY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The body develops the paper's main points.

Each section should have a clear purpose and contribute to the central argument.

A useful paragraph pattern is:

POINT
State the paragraph's central idea.

EVIDENCE
Provide relevant research, examples, data, or authoritative sources.

EXPLANATION
Interpret the evidence and explain how it supports the point.

LINK
Connect the point to the thesis or the next part of the argument.

Example:

Point: Access to reliable digital resources can support independent learning.

Evidence: Present a relevant finding from a credible study or institutional report.

Explanation: Explain what the finding demonstrates, the population it concerns, and any limitations.

Link: Relate the evidence to the wider argument about learning opportunities.

Do not invent statistics or cite a study you have not verified.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. THE CONCLUSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A conclusion should:
• Return to the research question.
• Synthesize the most important findings.
• Explain the overall significance of the argument.
• State appropriate implications or recommendations where required.

A conclusion should not introduce a major new argument that the paper has not developed.

It should synthesize rather than simply repeat the introduction word for word.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. THE STRUCTURE OF A RESEARCH REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Depending on the discipline and instructions, a research report may contain:

1. Title page.
2. Abstract.
3. Introduction.
4. Literature review.
5. Methodology.
6. Results or findings.
7. Discussion.
8. Conclusion and recommendations.
9. References.
10. Appendices, where necessary.

Not every essay requires all these sections.

INTRODUCTION:
Explains the research problem, purpose, and questions.

LITERATURE REVIEW:
Examines relevant existing research, identifies patterns and disagreements, and establishes the context for the study.

METHODOLOGY:
Explains how the research was designed and conducted.

RESULTS:
Reports findings clearly.

DISCUSSION:
Interprets findings in relation to the research question and existing literature.

CONCLUSION:
Summarizes the answer to the research question and its significance.

REFERENCES:
Lists the sources cited in the paper according to the required style.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. OUTLINING BEFORE DRAFTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before writing full paragraphs, create an outline.

Example:

Title: Digital Literacy and University Learning

I. Introduction
   A. Background
   B. Research problem
   C. Thesis

II. Evaluating Online Sources
   A. Credibility indicators
   B. Verification techniques

III. Responsible Digital Research
   A. Source attribution
   B. Ethical use of information

IV. Challenges
   A. Connectivity
   B. Unequal access to resources

V. Conclusion
   A. Synthesis
   B. Recommendations

An outline exposes gaps and repetition before they become expensive to repair.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PRACTICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Assignment:
Discuss the role of public libraries in supporting lifelong learning.

Tasks:
1. Draft a possible thesis.
2. Create an introduction outline.
3. Identify three body sections.
4. Explain what the conclusion should accomplish.

MODEL ANSWER GUIDE

A thesis might argue that public libraries support lifelong learning through access to information, learning resources, and community educational services, while acknowledging differences in funding and accessibility.

Possible body sections:
• Access to books and digital information.
• Educational programs and community support.
• Barriers to access and service provision.

The conclusion should synthesize the evidence and directly answer the assignment question.

KEY TAKEAWAY

Every section must serve a purpose. Strong structure makes the reasoning visible and the argument easier to evaluate.
`
},
{
title: "07. Paragraph Development and Academic Argument",
content: `
ACADEMIC WRITING AND RESEARCH
MODULE 07 | PARAGRAPHS AND ARGUMENTATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. WHAT MAKES A STRONG PARAGRAPH?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A paragraph develops one main idea. It may contain several related sentences, but they should work together toward a clear purpose.

A paragraph should normally have:
• A controlling idea.
• Relevant supporting evidence.
• Explanation and analysis.
• A logical connection to the wider discussion.

Not every paragraph needs a rigid formula, but every paragraph should have a clear function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. THE POINT-EVIDENCE-EXPLANATION METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

POINT:
State the idea being developed.

EVIDENCE:
Provide relevant facts, examples, or findings from credible sources.

EXPLANATION:
Interpret the evidence and show why it matters.

CONNECTION:
Link the paragraph to the argument or transition to the next point.

EXAMPLE STRUCTURE

Point:
Access to reliable learning materials can help students study independently.

Evidence:
Introduce a verified finding from an appropriate study about access to learning resources.

Explanation:
Discuss what the finding suggests, the conditions under which it applies, and any limitations.

Connection:
Explain how access to resources relates to the paper's wider argument about educational opportunity.

The example describes a structure. It does not substitute for an actual cited study.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. CLAIMS REQUIRE SUPPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A claim is an assertion that requires justification.

UNSUPPORTED CLAIM:
Online learning is always better than classroom learning.

PROBLEM:
The statement is absolute and ignores differences in students, subjects, infrastructure, and teaching methods.

MORE DEFENSIBLE CLAIM:
Online learning can improve flexibility for some students, although its effectiveness depends on course design, connectivity, student needs, and the learning objectives.

A good academic argument recognizes relevant qualifications and limitations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. USING EVIDENCE EFFECTIVELY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evidence may include:
• Peer-reviewed research.
• Official statistical data.
• Scholarly books.
• Primary documents.
• Carefully selected case studies.
• Other authoritative sources appropriate to the discipline.

After introducing evidence, explain its relevance. A quotation or statistic cannot do the thinking for the writer.

Check whether the evidence is current enough, relevant to the question, and appropriate for the claim being made.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. COUNTERARGUMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A counterargument presents a reasonable alternative view or limitation.

An effective response:
1. Represents the alternative position fairly.
2. Presents the reasoning or evidence behind it.
3. Evaluates its strengths and limitations.
4. Explains how it affects the main argument.

Example:

Main position:
Digital learning can widen access to educational materials.

Counterargument:
Learners without reliable internet access may be excluded.

Evaluation:
The counterargument identifies an important limitation. The final argument should consider connectivity, offline materials, affordability, and institutional support.

Ignoring credible objections can make a paper appear one-sided.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. COHERENCE AND TRANSITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Transitions show relationships between ideas.

Addition:
Furthermore, in addition, similarly.

Contrast:
However, in contrast, nevertheless.

Cause and effect:
Consequently, therefore, as a result.

Qualification:
Although, to some extent, under these conditions.

Use transitions because the relationship between ideas requires them, not as decorative words at the start of every paragraph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. COMMON PARAGRAPH PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Several unrelated ideas in one paragraph.
• Evidence without explanation.
• Repeating the same point in different words.
• Claims that are broader than the evidence permits.
• Paragraphs that do not support the thesis.
• Excessive quotations with little original analysis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. PRACTICE EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Topic:
The value of public transport in urban areas.

Write one paragraph that:
1. Makes a clear point.
2. Identifies evidence you would need.
3. Explains how that evidence supports your point.
4. Acknowledges one possible limitation.

MODEL ANSWER GUIDE

A paragraph could argue that public transport may reduce dependence on private vehicles when services are reliable, accessible, and convenient.

Appropriate evidence might include verified transport-use data, travel-time comparisons, or research on congestion.

The explanation should connect the evidence to the claim while considering route coverage, service reliability, and local conditions.

KEY TAKEAWAY

Academic argument is not simply a collection of opinions. It is a reasoned position supported, explained, and tested against evidence.
`
},
{
title: "08. Academic Language, Tone and Clarity",
content: `
ACADEMIC WRITING AND RESEARCH
MODULE 08 | LANGUAGE, TONE AND CLARITY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. THE PURPOSE OF ACADEMIC LANGUAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Academic language helps communicate ideas precisely, logically, and fairly.

It does not mean using the longest possible words or making simple ideas unnecessarily complicated.

Effective academic writing is:
• Clear.
• Precise.
• Evidence-based.
• Appropriate to the discipline.
• Respectful and professional.
• Consistent in terminology.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. FORMALITY WITHOUT COMPLICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INFORMAL:
A lot of students get really stressed because the work is too much.

MORE ACADEMIC:
Many students experience stress when academic demands exceed the time or resources available to them.

The revised sentence is more precise. It does not need obscure vocabulary to sound academic.

Avoid slang and conversational filler unless the assignment specifically calls for them.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. PRECISION AND QUALIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Avoid unsupported absolute words such as:
• Always.
• Never.
• Everyone.
• Proves conclusively.
• Completely eliminates.

Academic evidence often supports a narrower conclusion.

Overstated:
Social media destroys every student's academic performance.

More precise:
Heavy or distracting social media use may interfere with study for some students, although the relationship depends on usage patterns and other factors.

Use qualification when the evidence warrants it. Do not weaken a well-supported conclusion unnecessarily.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. ACTIVE AND PASSIVE VOICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ACTIVE:
The researchers surveyed 200 participants.

PASSIVE:
Two hundred participants were surveyed.

Both can be grammatically correct. Active voice often makes responsibility clearer, while passive voice may be useful when the process or result is the focus.

Choose the form that best serves clarity and the conventions of your discipline.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. SENTENCE CLARITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To improve clarity:
1. Put related information together.
2. Remove unnecessary repetition.
3. Avoid excessively long sentences.
4. Make pronoun references clear.
5. Check that modifiers refer to the correct words.
6. Prefer specific terms over vague expressions.

UNCLEAR:
After reviewing the report, it was considered incomplete.

Who considered it incomplete?

CLEARER:
After reviewing the report, the supervisor considered it incomplete.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. PARAGRAPH TONE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Academic writing should distinguish between:
• Established findings.
• The writer's interpretation.
• Possible explanations.
• Recommendations.
• Questions that remain unresolved.

Useful expressions include:
"The findings suggest..."
"The evidence indicates..."
"One possible explanation is..."
"This interpretation is limited by..."
"Further research may be needed to..."

These phrases should reflect the actual strength of the evidence. They are not a substitute for evidence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. GRAMMAR AND EDITING CHECKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Review:
• Subject-verb agreement.
• Consistent verb tense.
• Sentence fragments and run-on sentences.
• Punctuation and capitalization.
• Spelling and word choice.
• Consistent use of technical terms.
• Appropriate paragraph length and transitions.

Follow the spelling conventions required by the institution or client. Do not mix conventions carelessly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. PRACTICE EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Revise this sentence into clear academic language:

"Nowadays, everybody knows that phones are totally bad for students because they make them fail."

MODEL REVISION

"Excessive or distracting phone use may interfere with students' concentration, although its effects on academic performance depend on how the devices are used and the surrounding learning conditions."

Why it is better:
• It avoids an unsupported universal claim.
• It identifies a possible mechanism.
• It acknowledges that outcomes vary.
• It creates a claim that can be investigated using evidence.

KEY TAKEAWAY

Academic language should make reasoning easier to understand, not hide weak reasoning behind complicated vocabulary.
`
},
{
title: "09. Research Sources and Information Evaluation",
content: `
ACADEMIC WRITING AND RESEARCH
MODULE 09 | FINDING AND EVALUATING SOURCES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. WHY SOURCE QUALITY MATTERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Academic arguments depend on the quality of the evidence used to support them.

A source can be relevant but unreliable, reliable but outdated, or authoritative but unsuitable for a particular claim.

Evaluate sources according to the assignment and the kind of information required.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. COMMON SOURCE TYPES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCHOLARLY JOURNAL ARTICLES
Often present original research, theoretical analysis, or reviews of existing studies.

ACADEMIC BOOKS
Can provide detailed explanations, historical context, and established theories.

OFFICIAL REPORTS AND STATISTICS
May provide data from government departments, research institutions, and international organizations.

PRIMARY SOURCES
Original documents, interviews, datasets, laws, records, or other direct evidence, depending on the research question.

NEWS REPORTS
Can help establish recent events or public developments, but should not automatically replace scholarly evidence for theoretical or empirical claims.

WEBSITES AND ONLINE MATERIALS
Must be evaluated individually. A professional-looking website is not proof of accuracy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. THE SOURCE EVALUATION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUTHORITY
Who created the source? What relevant expertise or institutional responsibility do they have?

ACCURACY
Are claims supported by evidence? Can important information be checked against other credible sources?

RELEVANCE
Does the source directly address your research question and population or context?

CURRENCY
Is the publication recent enough for the topic? Older sources may still be important for foundational theories or historical questions.

PURPOSE
Was the source produced to inform, persuade, sell, entertain, or advocate a position?

METHOD
For research studies, examine the sample, methods, limitations, and whether the conclusions follow from the findings.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. SEARCHING EFFECTIVELY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Start with the key concepts in the research question.

Example research question:
How does digital literacy affect university students' evaluation of online information?

Possible search concepts:
• Digital literacy.
• University students.
• Online information evaluation.
• Information credibility.
• Critical evaluation skills.

Combine related terms and use the search options available in scholarly databases or library catalogues.

Keep a record of:
• Search terms used.
• Sources examined.
• Reasons a source was included or excluded.
• Important findings and limitations.
• Full citation details.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. TAKING RESEARCH NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For each source, record:
1. Full bibliographic details.
2. The research question or main purpose.
3. The method or type of evidence.
4. The principal findings or argument.
5. Limitations relevant to your paper.
6. The page number for direct quotations, where available.
7. How the source relates to your own argument.

Clearly distinguish direct quotations from paraphrased notes and your own comments.

Do not copy passages into notes without quotation marks or another clear label. That creates an entirely avoidable plagiarism problem later.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. SYNTHESIZING SOURCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A literature review should connect sources rather than list one summary after another.

Look for:
• Agreement between researchers.
• Differences in findings.
• Changes over time.
• Differences in methods or populations.
• Gaps and unresolved questions.

When sources disagree, investigate why. Differences may result from methods, context, sample size, definitions, or genuine uncertainty.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PRACTICAL EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You find three sources about online learning:
A. A peer-reviewed study published recently.
B. An anonymous social media post.
C. An official education report with documented data.

Tasks:
1. Identify the strengths and limitations of each.
2. Explain which sources may be suitable for an academic argument.
3. Identify what additional checks you would perform.
4. Explain why publication date alone cannot establish reliability.

MODEL ANSWER GUIDE

The peer-reviewed study may provide research evidence, but its methods and limitations still require examination.

The anonymous post may illustrate an individual's experience but is not automatically representative or verifiable.

The official report may provide useful data, but its definitions, methods, date, and institutional purpose should be checked.

The best source depends on the claim being supported. No source should be accepted solely because it looks professional or appears first in a search.

KEY TAKEAWAY

Strong research depends on evaluating evidence critically, recording sources accurately, and explaining how each source contributes to the argument.
`
},
{
title: "10. Paraphrasing, Summarizing and Quoting",
content: `
ACADEMIC WRITING AND RESEARCH
MODULE 10 | USING SOURCE MATERIAL RESPONSIBLY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. THREE WAYS TO USE SOURCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PARAPHRASING
Restating a particular idea from a source in genuinely new wording and sentence structure while preserving its meaning.

SUMMARIZING
Condensing the main ideas of a larger passage, article, or argument into a shorter account.

QUOTING
Reproducing the exact words of a source with the quotation formatting and citation required by the referencing style.

All three methods require attribution when they use another person's ideas or words.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. HOW TO PARAPHRASE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 1: Read the original passage until you understand its meaning.

STEP 2: Identify the key idea rather than individual words to replace.

STEP 3: Put the source aside and express the idea in your own sentence structure.

STEP 4: Compare your version with the original to check accuracy and independence of wording.

STEP 5: Cite the source using the required referencing style.

STEP 6: Include the full source in the reference list when required.

Changing a few words or rearranging the original sentence is not sufficient paraphrasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. ILLUSTRATIVE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Original illustrative sentence:
"Regular feedback can help learners identify weaknesses and improve their performance."

Weak paraphrase:
"Frequent feedback can assist learners in finding weaknesses and improving performance."

Problem:
The wording remains too close to the original structure.

Possible stronger paraphrase:
"Feedback gives students information they can use to recognize areas needing attention and adjust their approach to learning."

In a real assignment, cite the original source even when the paraphrase is entirely your own wording.

This example is instructional. It is not attributed to a real publication.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. HOW TO SUMMARIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A summary presents the central message of a longer source without reproducing every detail.

Procedure:
1. Identify the source's main purpose.
2. Find its central argument or findings.
3. Select only details necessary to explain the main message.
4. Write a concise account in your own words.
5. Cite the source.

A summary should not distort the source by removing qualifications that materially change its meaning.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. HOW TO QUOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use direct quotations when the exact wording matters, such as when analyzing a legal provision, a definition, or a particular statement.

A quotation must reproduce the source accurately and follow the punctuation, quotation-mark, and citation rules of the selected style.

Some styles require a page number or another locator for direct quotations. Requirements vary by style and source type.

Do not use quotations to avoid explaining an idea in your own analysis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. INTEGRATING EVIDENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A useful pattern is:

INTRODUCE:
Explain why the source is relevant.

PRESENT:
Paraphrase, summarize, or quote the material accurately.

CITE:
Attribute the material in the required format.

ANALYSE:
Explain what the evidence contributes to the argument.

CONNECT:
Relate it to the paragraph's point or the paper's thesis.

A citation does not replace analysis. Readers need to understand why the evidence matters.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. COMMON ERRORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Copying source wording without quotation marks.
• Replacing a few words and calling the result a paraphrase.
• Paraphrasing without citing the source.
• Changing the source's meaning.
• Quoting too much and analyzing too little.
• Listing sources in the references that were never used, when the required style expects only cited sources.
• Using secondary summaries when the original source is available and needed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. PRACTICE EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Read this original illustrative sentence:

"Clear instructions reduce uncertainty by helping participants understand what is expected of them."

Tasks:
1. Write a paraphrase with a different sentence structure.
2. Explain how a summary would differ from a paraphrase.
3. Explain when a direct quotation may be preferable.
4. State what attribution is needed when using the idea.

MODEL ANSWER GUIDE

A paraphrase might state that participants are less uncertain when expectations are communicated clearly.

A summary condenses the main point of a longer work, while a paraphrase restates a specific idea.

A direct quotation may be preferable when the exact wording is important to the analysis.

The source must be cited according to the required style even when the wording is changed.

KEY TAKEAWAY

Use source material to strengthen your reasoning. Represent it accurately, attribute it properly, and explain its relevance.
`
},
{
title: "11. APA 7th Edition: In-Text Citations and References",
content: `
ACADEMIC WRITING AND RESEARCH
MODULE 11 | APA 7TH EDITION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. INTRODUCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

APA 7th edition is a referencing and paper-formatting system published by the American Psychological Association.

It is widely used in psychology, education, and other disciplines, but the required style depends on the institution or assignment.

APA distinguishes in-text citations from reference-list entries.

IN-TEXT CITATION:
Identifies the source at the point where its information or ideas are used.

REFERENCE LIST:
Provides the publication details needed to identify and retrieve the cited source.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. AUTHOR-DATE CITATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a typical work by one author, APA uses the author's surname and publication year.

Parenthetical form:
(Author, 2024)

Narrative form:
Author (2024) explains that ...

These are templates. Replace the placeholder author and year with verified details from the real source.

For two authors, cite both surnames in each in-text citation according to APA conventions.

For works with three or more authors, APA generally uses the first author's surname followed by "et al." in in-text citations, subject to the applicable rules and exceptions.

For an organization as author, use its name and follow APA guidance for abbreviations where relevant.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. DIRECT QUOTATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Direct quotations require the appropriate locator under APA rules, normally a page number for paginated sources.

Example template:
(Author, 2024, p. 15)

For sources without page numbers, use an appropriate alternative locator when available, such as a paragraph number or section heading, following APA guidance.

Short quotations and block quotations have different formatting requirements. Consult the official manual or approved institutional guide for the precise rules.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. REFERENCE-LIST FORMATS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

JOURNAL ARTICLE TEMPLATE

Author, A. A. (Year). Title of article. Title of Journal, volume(issue), page range. https://doi.org/xxxxx

BOOK TEMPLATE

Author, A. A. (Year). Title of book. Publisher.

WEBPAGE TEMPLATE

Author or Organization. (Year, Month Day). Title of webpage. Site Name. URL

These are general templates. Actual formatting depends on the source type and its publication details.

Do not invent authors, dates, page ranges, publishers, or DOI links.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. BASIC APA PRESENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Depending on the assignment, APA papers may require:
• A title page.
• Page numbers.
• Appropriate margins and line spacing.
• A consistent APA-approved font and size.
• A structured heading system.
• In-text citations.
• A reference list.

Student and professional papers can have different title-page requirements. Follow the applicable instructions rather than assuming every APA paper uses the same title page.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. REFERENCE-LIST QUALITY CHECK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Check that:
1. Each cited source has the required reference entry.
2. Author names and dates are accurate.
3. Titles and publication details are correct.
4. DOI links are included where applicable.
5. Entries follow APA punctuation and capitalization rules.
6. The reference list uses the required ordering and hanging indentation.
7. Every source is retrievable using the supplied details.

A citation generator can help, but its output must be checked.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PRACTICAL EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A student uses an article written by Amina Otieno and published in 2024.

Tasks:
1. Create a parenthetical author-date citation template.
2. Create a narrative citation template.
3. Identify the information needed to create a full journal reference.
4. Explain why a real article's DOI must be verified.

MODEL ANSWER

Parenthetical template:
(Otieno, 2024)

Narrative template:
Otieno (2024)

A complete journal reference requires the article title, journal title, volume, issue if applicable, page range or article number where applicable, and DOI when available, along with accurate author and publication details.

The examples use a fictional author and do not represent a verified publication.

KEY TAKEAWAY

APA referencing connects claims to identifiable sources. Accuracy matters more than making a reference merely look convincing.
`
},
{
title: "12. MLA Referencing and Works Cited",
content: `
ACADEMIC WRITING AND RESEARCH
MODULE 12 | MLA REFERENCING

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. WHAT IS MLA?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MLA style is commonly used in language, literature, and related humanities disciplines.

The MLA system generally uses author-page in-text citations where appropriate and a Works Cited list containing the publication details of sources cited in the paper.

Always check which edition and institutional instructions apply.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. IN-TEXT CITATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a source with an identifiable author and page number, a typical parenthetical citation uses the author's surname and page number.

Template:
(Surname 42)

A narrative citation may name the author in the sentence, followed by the relevant page number where appropriate.

If the author's name is already included in the sentence, avoid unnecessarily repeating it in the parenthetical citation.

Many online sources have no page numbers. Do not invent page numbers. Follow MLA guidance for the source type and the information available.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. WORKS CITED ENTRIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MLA entries commonly organize information using elements such as:
• Author.
• Title of source.
• Title of container.
• Other contributors.
• Version.
• Number.
• Publisher.
• Publication date.
• Location, such as page range or URL.

Not every source uses every element.

BOOK TEMPLATE

Surname, First Name. Title of Book. Publisher, Year.

JOURNAL ARTICLE TEMPLATE

Surname, First Name. "Title of Article." Title of Journal, vol. 12, no. 2, Year, pp. 20-35. DOI or URL.

These are illustrative templates. Confirm the actual source information and apply the rules for the relevant source type.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. THE CONTAINER CONCEPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A source may appear within a larger work or platform called a container.

For example:
• An article appears in a journal.
• A chapter appears in an edited book.
• A webpage appears on a website.
• An episode appears in a series.

Identifying the container helps readers locate the source and understand where it was published.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. WORKS CITED PRESENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Check the applicable MLA requirements for:
• The heading "Works Cited".
• Alphabetical ordering.
• Hanging indentation.
• Double spacing.
• Punctuation and capitalization.
• Accurate URLs or DOI information.
• Consistency between in-text citations and entries.

Do not mix APA author-date conventions with MLA author-page conventions without a specific reason.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. APA AND MLA: A BASIC COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

APA commonly emphasizes author and publication year in text.

MLA commonly emphasizes author and page number in text where page numbers are available and relevant.

Their reference-list terminology, entry structure, formatting, and source-specific rules differ.

Neither style should be selected merely because it appears easier. Use the style required by the institution or assignment.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PRACTICE EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A student quotes page 42 of a fictional book by Daniel Mensah.

Tasks:
1. Create a basic MLA author-page citation.
2. Identify the information needed for a Works Cited entry.
3. Explain what to do if an online source has no page numbers.
4. State why the source's real publication details must be checked.

MODEL ANSWER

A basic citation template is (Mensah 42).

A book entry requires accurate author, title, publisher, and publication-year details, formatted according to the applicable MLA rules.

If the online source has no page numbers, do not invent them. Apply the relevant MLA guidance for that source.

KEY TAKEAWAY

MLA referencing gives readers a route back to the source. Correct identification and consistent formatting are essential.
`
},
{
title: "13. Harvard and Chicago Referencing: An Introduction",
content: `
ACADEMIC WRITING AND RESEARCH
MODULE 13 | HARVARD AND CHICAGO

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. UNDERSTANDING STYLE VARIATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Referencing styles provide conventions for acknowledging sources and helping readers retrieve them.

Harvard commonly uses an author-date approach. Chicago offers two principal systems:
• Notes and bibliography.
• Author-date.

Different institutions may implement local variants. Follow the specific guide required for your assignment.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. HARVARD AUTHOR-DATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Harvard citations generally identify the author and year in the text. A page number may be required for direct quotations under the relevant guide.

Illustrative template:
(Surname, 2023)

Narrative template:
Surname (2023) argues that ...

A reference-list entry may include the author, year, title, publication details, and other information required for the source type.

Harvard is not governed by one universally identical manual across all institutions. Check the exact institutional guide.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. CHICAGO NOTES AND BIBLIOGRAPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This system uses numbered notes to direct readers to source information. Notes may appear as footnotes or endnotes, depending on the document requirements.

A bibliography may list the sources consulted or cited according to the relevant Chicago rules.

The first note for a source often contains fuller details than later shortened notes. Exact formatting depends on the source type and current edition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. CHICAGO AUTHOR-DATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This system uses author-date citations in the text and a reference list.

An illustrative citation template is:
(Surname 2023, 42)

The punctuation and ordering of information differ from APA and other author-date systems.

Do not transfer punctuation mechanically from one style to another.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. HOW TO CHOOSE A STYLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Read the assignment instructions.
2. Confirm the required edition or institutional guide.
3. Identify whether the style uses author-date citations or notes.
4. Apply the same system throughout the paper.
5. Check source-specific reference formats.
6. Review examples from an authoritative guide.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. COMMON REFERENCING ERRORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Combining conventions from multiple styles.
• Omitting dates or publication information.
• Using unverified DOI or URL details.
• Forgetting required page locators.
• Formatting one source type as though it were another.
• Assuming every university's Harvard guide is identical.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PRACTICAL EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your lecturer requests Harvard referencing, but your previous paper used APA.

Tasks:
1. Identify what must be confirmed before formatting.
2. Explain why changing only the in-text citations is insufficient.
3. Identify three parts of the paper that require a referencing review.

MODEL ANSWER

Confirm the required Harvard guide and source-specific rules.

A style conversion also affects reference entries, punctuation, author presentation, dates, ordering, and other formatting details.

Review in-text citations, the reference list, and quotations or other source locators.

KEY TAKEAWAY

A referencing style is a consistent system, not a collection of interchangeable punctuation marks.
`
},
{
title: "14. Plagiarism, Academic Integrity and Responsible Research",
content: `
ACADEMIC WRITING AND RESEARCH
MODULE 14 | ACADEMIC INTEGRITY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. WHAT IS ACADEMIC INTEGRITY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Academic integrity means producing and presenting academic work honestly, acknowledging sources, representing evidence accurately, and following applicable academic rules.

It includes responsible citation, transparent reporting, respect for others' intellectual contributions, and compliance with institutional policies.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. UNDERSTANDING PLAGIARISM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Plagiarism involves presenting another person's words, ideas, or work as one's own without appropriate acknowledgment.

Examples include:
• Copying text without quotation marks or attribution.
• Closely imitating source wording without proper acknowledgment.
• Presenting another person's argument as an original idea.
• Submitting another person's work as one's own.
• Reusing one's previous assessed work without permission where the rules prohibit it.

Specific institutional definitions and procedures vary. Students should consult their academic integrity policy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. CITATION DOES NOT FIX EVERY PROBLEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A citation alone does not make copied wording an acceptable paraphrase.

If exact wording is used, quote and format it as required.

If an idea is paraphrased, express it independently and cite the source.

If a source is summarized, preserve its meaning and provide attribution.

A citation must also identify the correct source. Invented references are not acceptable evidence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. RESPONSIBLE RESEARCH PRACTICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Record sources as you work.
• Separate quotations from personal notes.
• Verify publication details.
• Report findings honestly.
• Acknowledge limitations.
• Follow ethical rules for interviews, surveys, and personal information.
• Protect confidential research material.
• Disclose assistance or tool use when required by institutional policy.
• Never fabricate data, participants, quotations, or research results.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. AI TOOLS AND ACADEMIC WORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rules governing AI assistance differ among institutions, courses, and assignments.

Before using an AI tool:
1. Check the assignment's policy.
2. Confirm which forms of assistance are permitted.
3. Verify factual claims and references independently.
4. Do not present fabricated citations as real sources.
5. Disclose assistance when required.
6. Ensure the final work reflects your own understanding and complies with applicable rules.

An AI-generated reference is not reliable merely because it is formatted neatly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. PREVENTION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before submission:
□ Every borrowed idea is attributed.
□ Direct quotations are clearly marked.
□ Paraphrases use genuinely independent wording.
□ Reference entries match the cited sources.
□ All sources are real and verified.
□ Data and findings have not been fabricated.
□ The work follows the institution's collaboration and tool-use policies.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PRACTICAL EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A student copies two sentences from an online article, changes several words, and includes the website in the reference list.

Questions:
1. Is the passage automatically an acceptable paraphrase?
2. What should the student do?
3. Why is a reference-list entry alone insufficient?

MODEL ANSWER

No. Changing a few words does not necessarily produce an independent paraphrase.

The student should understand the original idea, restate it in genuinely new wording, cite it, and use quotation formatting if retaining exact wording.

The reference list identifies the source, but the text must also clearly acknowledge the source where its material is used.

KEY TAKEAWAY

Academic integrity requires honest representation of ideas, evidence, authorship, and assistance throughout the research process.
`
},
{
title: "15. Editing, Proofreading and Final Academic Quality Assurance",
content: `
ACADEMIC WRITING AND RESEARCH
MODULE 15 | EDITING AND FINAL QUALITY ASSURANCE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. WHY REVIEW IS NECESSARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A paper may contain useful research but still lose clarity through poor organization, unsupported claims, inconsistent terminology, or careless formatting.

Editing and proofreading are separate tasks. Both are important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. STAGE ONE: REVIEW THE ARGUMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ask:
• Does the paper answer the actual question?
• Is the thesis clear and defensible?
• Does each major section support the central argument?
• Are the claims supported by appropriate evidence?
• Have important counterarguments or limitations been considered?
• Does the conclusion follow from the discussion?

Fix major reasoning and structural problems before polishing individual sentences.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. STAGE TWO: REVIEW STRUCTURE AND FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Check:
• The order of sections.
• Paragraph unity.
• Logical transitions.
• Repetition.
• Missing explanations.
• Connections between evidence and claims.
• Consistency between the introduction and conclusion.

Read headings and topic sentences together. They should reveal a coherent line of reasoning.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. STAGE THREE: EDIT SENTENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Check:
• Grammar and sentence structure.
• Unclear wording.
• Repeated or unnecessary expressions.
• Word choice and terminology.
• Consistent verb tense.
• Pronoun references.
• Sentence length and readability.

Prefer meaningful revisions over edits that merely make the language sound more complicated.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. STAGE FOUR: VERIFY SOURCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Confirm that:
• Quotations match the original source.
• Paraphrases preserve meaning.
• Citations appear where required.
• Author names and publication dates are correct.
• Reference entries correspond to cited works.
• DOIs and URLs lead to the intended sources.
• The requested style has been applied consistently.

Reference-management software can assist with organization but cannot guarantee correctness.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. STAGE FIVE: PROOFREAD THE DOCUMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Proofreading focuses on final presentation:
• Spelling.
• Punctuation.
• Capitalization.
• Page numbers.
• Heading consistency.
• Margins and spacing.
• Tables and figures.
• Font and paragraph formatting.
• Required title-page elements.
• File name and output format.

Formatting requirements vary. Use the exact assignment or institutional guide.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. A PRACTICAL REVIEW SEQUENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

First pass: argument and evidence.
Second pass: structure and paragraph flow.
Third pass: sentence clarity and grammar.
Fourth pass: citations and reference list.
Fifth pass: final formatting and submission requirements.

Taking a short break between drafting and reviewing may help reveal errors that become invisible during continuous editing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. FINAL SUBMISSION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

□ I answered the assignment question.
□ My thesis is supported by the paper.
□ My sources are relevant and credible.
□ My quotations and paraphrases are attributed.
□ My citations and references are consistent.
□ My spelling, grammar, and punctuation have been checked.
□ I followed the required formatting instructions.
□ I met the word limit and submission deadline.
□ The saved file opens correctly and is the intended version.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
9. PRACTICAL EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A research paper has a clear thesis but contains repetitive paragraphs, several unverified references, and inconsistent heading formats.

Tasks:
1. Identify the order in which you would address these issues.
2. Explain why proofreading should not be the first and only review.
3. Identify the final checks needed before submission.

MODEL ANSWER

Start by reviewing the argument and structure, remove unnecessary repetition, verify the sources and references, and then complete sentence-level editing and final formatting.

Proofreading alone cannot repair a weak argument or validate false references.

The final check should confirm content accuracy, citation consistency, formatting, file integrity, and compliance with assignment instructions.

KEY TAKEAWAY

Quality assurance is a deliberate review process. Accuracy, reasoning, source integrity, and presentation all contribute to a strong academic paper.
`
},
{
title: "16. Academic Writing Practical Lab and Final Assessment",
content: `
ACADEMIC WRITING AND RESEARCH
MODULE 16 | PRACTICAL LAB AND FINAL ASSESSMENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART A: PRACTICAL RESEARCH LAB
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCENARIO

You have been assigned the following topic:

"Discuss how digital literacy can support university students in academic research."

Your task is to develop a short academic paper plan. You are not expected to invent data or pretend to have consulted sources that you have not read.

TASK 1: DEFINE THE QUESTION

Write a focused research question.

Possible direction:
How does digital literacy help university students identify and evaluate credible online research sources?

TASK 2: DEVELOP A THESIS

Draft a central argument that answers the question and identifies the main points to be examined.

Your thesis should be specific enough to guide the paper but open to revision when evidence requires it.

TASK 3: PLAN THE STRUCTURE

Create an outline containing:
1. Introduction and research focus.
2. Evaluating online source credibility.
3. Using academic search tools.
4. Responsible citation and information use.
5. Challenges and limitations.
6. Conclusion.

TASK 4: PLAN THE EVIDENCE

Identify at least three credible sources you would seek.

For each source, record:
• Author or responsible organization.
• Publication date.
• Title.
• Source type.
• Relevant finding or argument.
• Limitations.
• Full citation details.

Do not fill the table with fictional references. Locate and verify real sources before using them.

TASK 5: DEVELOP ONE PARAGRAPH

Write a paragraph using this structure:
• Main point.
• Supporting evidence from a verified source.
• Explanation.
• Link to the thesis.

TASK 6: CHECK REFERENCING

Choose the style required by your lecturer. Apply its in-text citation and reference-list rules consistently.

TASK 7: REVIEW THE PAPER

Use the quality-assurance checklist from the previous lesson.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART B: KNOWLEDGE ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QUESTION 1
What is the primary purpose of a thesis statement?

A. To list every reference.
B. To state the paper's central argument or position.
C. To replace the conclusion.
D. To increase the word count.

QUESTION 2
Which source is automatically reliable simply because it appears online?

A. Every government webpage.
B. Every scholarly-looking blog.
C. No source is automatically reliable merely because it is online.
D. Every social media post.

QUESTION 3
What is the main difference between paraphrasing and quoting?

A. Paraphrasing requires no citation.
B. Quoting changes the original wording.
C. Paraphrasing restates an idea in new wording; quoting reproduces exact wording.
D. They are identical.

QUESTION 4
Why should research notes include full source details?

A. To avoid reading the sources.
B. To make the paper longer.
C. To support accurate attribution and later verification.
D. To replace in-text citations.

QUESTION 5
What should a writer do when evidence contradicts an initial thesis?

A. Ignore the evidence.
B. Invent supporting results.
C. Reconsider and revise the thesis where necessary.
D. Remove every opposing source.

QUESTION 6
Which activity is primarily proofreading?

A. Developing a research question.
B. Checking spelling, punctuation, and final formatting.
C. Selecting a theoretical framework.
D. Designing a research method.

QUESTION 7
What is the purpose of a counterargument?

A. To distract readers.
B. To present and evaluate a relevant alternative position.
C. To replace all supporting evidence.
D. To avoid reaching a conclusion.

QUESTION 8
What must accompany an academic paraphrase of another person's idea?

A. No attribution if the words have changed.
B. A fabricated publication date.
C. Appropriate citation according to the required style.
D. A direct quotation in every case.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART C: MODEL ANSWERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. B — A thesis states the central argument or position.
2. C — Online availability alone does not establish reliability.
3. C — Paraphrasing restates meaning; quoting reproduces exact wording.
4. C — Accurate notes support attribution and source verification.
5. C — The argument should respond honestly to the evidence.
6. B — Proofreading checks surface-level errors and presentation.
7. B — A counterargument examines a relevant alternative position.
8. C — A paraphrased source still requires appropriate attribution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART D: FINAL PRACTICAL RUBRIC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use this suggested rubric to review the practical paper. An instructor may adapt it to the assignment.

Research question and thesis: 20%
Organization and paragraph development: 20%
Quality and evaluation of evidence: 25%
Academic language and analysis: 15%
Citation and reference accuracy: 15%
Presentation and proofreading: 5%

TOTAL: 100%

This is a suggested training rubric, not an official institutional grading policy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPLETION STANDARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A learner should be able to:
• Define a focused research question.
• Develop a defensible thesis.
• Organize a coherent paper.
• Evaluate sources critically.
• Use quotations and paraphrases responsibly.
• Apply the assigned referencing style.
• Review the paper before submission.

FINAL MESSAGE

Academic writing is a disciplined way of asking questions, evaluating evidence, constructing arguments, and communicating conclusions honestly.

The goal is not merely to produce pages. The goal is to produce work that can be understood, checked, and defended.
`
}
];

async function main() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing from backend/.env");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB.");

  const course = await Course.findOne({
    slug: "academic-writing"
  });

  if (!course) {
    throw new Error(
      "Course academic-writing was not found. No changes made."
    );
  }

  const existingTitles = new Set(
    course.lessons.map(item => item.title)
  );

  let nextOrder = course.lessons.reduce(
    (max, item) => Math.max(max, Number(item.order) || 0),
    0
  ) + 1;

  let added = 0;
  let skipped = 0;

  for (const item of newLessons) {
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

  console.log("\n===== ACADEMIC WRITING EXPANSION =====");
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
