require("dotenv").config();

const mongoose = require("mongoose");
const Course = require("../src/models/Course");

const modules = [
{
title: "03. Introduction to Professional Data Entry",
content: `
DATA ENTRY AND DATA QUALITY
MODULE 03 | INTRODUCTION TO PROFESSIONAL DATA ENTRY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. MODULE OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Data entry is the process of transferring, recording, organizing, or updating information in a digital system.

Information may come from paper forms, scanned documents, questionnaires, audio records, emails, spreadsheets, or online forms.

Professional data entry is not simply typing quickly. It requires accuracy, consistency, confidentiality, and adherence to the client's instructions.

LEARNING OBJECTIVES

By the end of this lesson, you should be able to:
• Explain the purpose of data entry.
• Identify common data entry tasks.
• Describe the responsibilities of a data entry operator.
• Recognize the importance of accuracy and confidentiality.
• Prepare for a data entry assignment.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. COMMON DATA ENTRY TASKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FORM TRANSCRIPTION
Transferring information from completed forms into a digital system.

SPREADSHEET ENTRY
Recording and organizing information in rows and columns.

CUSTOMER RECORD ENTRY
Entering authorized customer details into a database or customer management system.

SURVEY DATA ENTRY
Recording responses from questionnaires or research instruments.

INVENTORY ENTRY
Recording product descriptions, quantities, stock movements, and identifiers.

DOCUMENT DIGITIZATION
Converting information contained in paper records or scanned documents into structured digital data.

DATA CLEANING
Identifying and correcting errors, inconsistencies, missing values, and duplicates according to approved rules.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. THE RESPONSIBILITIES OF A DATA ENTRY OPERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A professional operator should:
1. Read the task instructions.
2. Understand the required fields and formats.
3. Enter information faithfully.
4. Avoid inventing missing values.
5. Flag illegible or conflicting information.
6. Protect confidential records.
7. Save work in the approved location.
8. Review entries before submission.
9. Report technical problems promptly.
10. Follow the client's quality standards.

Speed is useful only when the resulting data remains reliable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. DATA ENTRY WORKFLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Receive instructions
        |
        v
Review source documents
        |
        v
Identify required fields
        |
        v
Enter information
        |
        v
Validate formats and values
        |
        v
Check errors and duplicates
        |
        v
Save and review the file
        |
        v
Submit through the approved channel

If information is unclear, follow the project procedure instead of guessing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. ACCURACY VERSUS SPEED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Accuracy measures how faithfully the entered data represents the source.

Speed measures how quickly work is completed.

Both matter, but speed should never be improved by skipping required checks.

For example, entering 150 records quickly is not a successful result if many telephone numbers, dates, or names are incorrect.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. PRACTICAL EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A client supplies 50 registration forms. Three forms have unclear names, two contain incomplete telephone numbers, and one appears to be a duplicate.

Answer:
1. Should you guess the unclear names?
2. How should incomplete telephone numbers be handled?
3. What should happen to the suspected duplicate?
4. What should you do before submitting the completed records?

MODEL ANSWERS

1. No. Follow the approved clarification or uncertainty procedure.
2. Preserve the available information and flag the missing portion according to the project rules.
3. Check the applicable unique identifiers and flag it for review rather than deleting it without authorization.
4. Validate the fields, review the records, save the correct file, and confirm that the required checks are complete.

KEY TAKEAWAY

Professional data entry transforms information into usable records while preserving its accuracy, meaning, and confidentiality.
`
},
{
title: "04. Understanding Data Types and Field Formats",
content: `
DATA ENTRY AND DATA QUALITY
MODULE 04 | DATA TYPES AND FIELD FORMATS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. WHY DATA TYPES MATTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A data type describes the kind of information a field is intended to contain.

Choosing the correct type helps prevent errors, supports validation, and makes information easier to search and analyze.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. COMMON DATA TYPES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEXT
Names, addresses, descriptions, and comments.

INTEGER
Whole-number quantities such as the number of items in stock.

DECIMAL
Values that can contain a fractional component, such as a measured weight.

DATE
A calendar date recorded in the required format.

TIME
A time of day or duration, depending on the field definition.

BOOLEAN
A value representing two states, such as Yes/No or True/False.

IDENTIFIER
A code used to identify a record, such as a customer number or membership code.

Identifiers should not automatically be treated as quantities. A code such as 00127 may need to retain its leading zeros.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. FORMATTING DATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dates can be ambiguous when different formats are used.

For example:
04/05/2026

This may mean 4 May or April 5, depending on the convention.

Use the format specified by the client or system. Where ambiguity exists, confirm the intended convention rather than assuming.

An unambiguous format such as 2026-05-04 may be appropriate where the project specifies ISO-style dates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. TELEPHONE NUMBERS AND IDENTIFIERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Telephone numbers are usually identifiers, not numbers for arithmetic.

They may contain:
• A country code.
• Leading zeros.
• Spaces or separators.
• A plus sign.

Do not remove meaningful characters unless the data specification requires normalization.

The same principle applies to postal codes, account references, and product codes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. NUMERIC VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A numeric field should contain a value of the expected type and within the permitted range.

Example:
Quantity: 12

If negative quantities are not permitted for the particular field, a value of -12 should be flagged.

However, negative values may be valid in other contexts, such as adjustments or financial balances. Validation rules depend on the meaning of the field.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. FIELD SPECIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A field specification defines:
• Field name.
• Expected data type.
• Required or optional status.
• Accepted format.
• Permitted values or range.
• Validation rules.
• Handling of missing information.

Example:

Field: Registration Date
Type: Date
Required: Yes
Format: YYYY-MM-DD
Validation: Must represent a valid calendar date.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PRACTICAL EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Classify each field:

1. Full name.
2. Number of products.
3. Customer code 00081.
4. Registration date.
5. Active membership: Yes/No.
6. Weight: 5.75 kg.

MODEL ANSWERS

1. Text.
2. Integer, if only whole units are allowed.
3. Identifier stored in a format that preserves leading zeros.
4. Date.
5. Boolean or controlled text, depending on the system.
6. Decimal measurement.

KEY TAKEAWAY

The correct data type and format protect information from accidental alteration and make records more useful.
`
},
{
title: "05. Spreadsheet Skills for Data Entry",
content: `
DATA ENTRY AND DATA QUALITY
MODULE 05 | SPREADSHEET SKILLS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. INTRODUCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Spreadsheets organize information into rows, columns, and cells.

Applications such as Microsoft Excel and Google Sheets are commonly used for entering, organizing, validating, and reviewing structured records.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. UNDERSTANDING THE WORKSHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ROW
A horizontal sequence of cells.

COLUMN
A vertical sequence of cells.

CELL
The intersection of a row and column.

HEADER
A label describing the information stored in a column.

RECORD
A collection of related fields describing one item, person, transaction, or event.

FIELD
A single attribute within a record.

Example:

CustomerID | FullName | City | Active
C001       | Amina Ali | Busia | Yes
C002       | David Otieno | Kisumu | No

Each row represents a record, and each column represents a field.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. GOOD SPREADSHEET PRACTICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Use clear and unique column headings.
• Keep one type of information in each field.
• Avoid merging cells in a structured data table.
• Use consistent date and number formats.
• Preserve leading zeros in identifiers.
• Avoid unnecessary blank rows within the dataset.
• Keep source records and cleaned records distinguishable.
• Save files using the approved naming convention.

Do not combine a person's full name, telephone number, and address in one cell when the system requires separate fields.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. SORTING AND FILTERING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SORTING changes the order of records according to a selected field.

FILTERING displays records that match specified conditions.

Examples:
• Sort customers alphabetically by surname.
• Filter records with a status of Pending.
• Display products with quantities below a specified threshold.

Before sorting, select the complete data range and ensure the spreadsheet recognizes the headers. Sorting only one column can separate values from their associated records.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. BASIC SPREADSHEET FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUM
Adds values in a range.

Example:
=SUM(B2:B10)

COUNTA
Counts non-empty cells.

Example:
=COUNTA(A2:A100)

COUNT
Counts numeric values.

Example:
=COUNT(B2:B100)

IF
Returns a result according to a condition.

Example:
=IF(B2<0,"Check value","OK")

Formula behavior depends on the application's locale and settings. Some installations use semicolons rather than commas between function arguments.

Always test formulas against known examples before applying them to a full dataset.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. DATA VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Spreadsheet validation can restrict the values entered into a field.

Examples:
• Allow only dates within a specified range.
• Provide a dropdown list of approved categories.
• Require quantities to be non-negative.
• Restrict a status field to Pending, Approved, or Rejected.

Validation reduces certain errors but cannot guarantee that every entered value is factually correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PRACTICAL EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a table with these headings:

RecordID | FullName | DateReceived | Category | Status

Tasks:
1. Enter five fictional records.
2. Preserve any leading zeros in RecordID.
3. Apply a consistent date format.
4. Create a dropdown list for Status.
5. Filter records by Status.
6. Review the sheet for blank required fields.

Use fictional information for practice. Do not place real customer details into an unapproved training file.

KEY TAKEAWAY

A well-designed spreadsheet supports accurate entry, efficient review, and reliable reporting.
`
},
{
title: "06. Data Validation and Error Prevention",
content: `
DATA ENTRY AND DATA QUALITY
MODULE 06 | DATA VALIDATION AND ERROR PREVENTION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. WHAT IS DATA VALIDATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Data validation checks whether a value satisfies predefined rules.

It can identify invalid formats, missing required fields, impossible dates, unexpected categories, and values outside an allowed range.

Validation checks structure and rules. It does not always establish that a value is factually true.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. COMMON VALIDATION RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REQUIRED-FIELD CHECK
A field must not be empty when information is mandatory.

TYPE CHECK
A date field must contain a valid date, not arbitrary text.

RANGE CHECK
A value must fall within an approved minimum and maximum.

FORMAT CHECK
A value must follow the required structure.

LOOKUP CHECK
A code must exist in an approved list.

CROSS-FIELD CHECK
Two or more fields must be logically consistent.

DUPLICATE CHECK
A value or combination of values may need to be unique.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. EXAMPLES OF VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1:
A quantity field permits whole numbers from 0 to 500.

A value of 12 passes the range and type checks.
A value of -4 fails the permitted range.

Example 2:
A status field allows:
Pending
Approved
Rejected

The entry "Approvd" should be flagged because it is not an approved category.

Example 3:
A record shows an end date earlier than its start date.

This may indicate an error, although exceptions depend on the business rules. Flag it for review rather than silently changing the dates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. PREVENTING ERRORS AT ENTRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Use a clear field specification.
2. Use dropdowns for controlled categories.
3. Apply date and number validation.
4. Use required-field checks.
5. Provide examples of correct entries.
6. Train operators on common mistakes.
7. Test the form or spreadsheet before use.
8. Review exceptions rather than ignoring warnings.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. VALIDATION VERSUS VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VALIDATION asks:
Does this value meet the defined rules?

VERIFICATION asks:
Does this value agree with the original source or an authoritative record?

A telephone number may have the correct number of digits but still belong to the wrong person. It passes a format check but may fail verification.

Both checks may be necessary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. HANDLING VALIDATION FAILURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When a record fails validation:
• Identify the affected field.
• Compare it with the original source.
• Correct it only when the correct value can be established.
• Record or flag unresolved discrepancies.
• Follow the escalation procedure when clarification is required.
• Recheck the record after correction.

Never change a value merely to make a validation warning disappear.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PRACTICAL EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A dataset has these problems:
• A required name field is blank.
• A date contains 32/14/2026.
• A status field contains "Approveed".
• A quantity field contains -9, although negative values are prohibited.
• A telephone number has the correct format but does not match the source form.

For each problem, identify the relevant check and explain the next action.

MODEL ANSWERS

1. Required-field check; retrieve the missing information or flag the record.
2. Type or calendar-validity check; compare with the source and correct only when confirmed.
3. Controlled-value check; verify the intended status before correcting.
4. Range check; investigate the source and business rules.
5. Verification check; correct the number only after confirming the source value.

KEY TAKEAWAY

Validation prevents many errors, while verification establishes whether information matches the source or an authoritative record.
`
},
{
title: "07. Data Cleaning, Duplicates and Missing Values",
content: `
DATA ENTRY AND DATA QUALITY
MODULE 07 | DATA CLEANING

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. WHAT IS DATA CLEANING?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Data cleaning identifies and resolves problems that reduce the reliability or usability of a dataset.

Common issues include:
• Duplicate records.
• Missing values.
• Inconsistent formats.
• Spelling variations.
• Invalid entries.
• Extra spaces.
• Conflicting information.
• Incorrect category labels.

Cleaning should follow documented rules so that records are not changed arbitrarily.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. HANDLING DUPLICATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two records may look similar without representing the same person or event.

Before removing a suspected duplicate:
1. Identify the field or combination of fields used for comparison.
2. Compare unique identifiers where available.
3. Review relevant details.
4. Check the client's duplicate-handling rules.
5. Flag uncertain cases for authorized review.
6. Document the action taken when required.

Do not automatically delete records because two people share the same name. Similarity is a signal to investigate, not proof of duplication.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. HANDLING MISSING VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A blank field may mean:
• The information was not supplied.
• The information is unknown.
• The field does not apply.
• The information was accidentally omitted.
• The value has not yet been verified.

These situations are not always equivalent.

Use the approved representation for missing information. Do not substitute zero, "N/A," or another value unless the data specification defines that treatment.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. STANDARDIZING DATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Standardization makes equivalent values consistent.

Examples:
• Removing accidental leading or trailing spaces.
• Applying a required date format.
• Using approved category labels.
• Applying a consistent capitalization rule where appropriate.
• Formatting telephone numbers according to the specification.

Standardization must preserve meaning. Do not alter official names or identifiers merely to make them look uniform.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. BEFORE-AND-AFTER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Original entries:

Status
approved
Approved
APPROVED
Approvd

The first three entries may represent the same approved category, depending on the rules. The fourth contains a likely spelling error.

A documented cleaning process could standardize capitalization and flag the misspelling for confirmation.

Do not assume that every similar-looking category has identical meaning. Confirm the approved values first.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. KEEPING AN AUDIT TRAIL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For important cleaning tasks, record:
• The original value.
• The proposed corrected value.
• The reason for the change.
• The rule or source supporting the correction.
• The date and authorized person, where required.

Keep a protected original copy when the project requires traceability.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PRACTICAL EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A customer dataset contains:
1. Two records with the same customer ID.
2. Two different IDs with the same customer name.
3. A missing registration date.
4. Mixed date formats.
5. A status value not included in the approved list.

Explain how each issue should be handled.

MODEL ANSWERS

1. Investigate the repeated identifier and follow the duplicate-resolution procedure.
2. Do not merge records on name alone. Compare authorized identifiers and other relevant fields.
3. Check the original source or flag the field as missing.
4. Standardize according to the approved format after resolving ambiguity.
5. Check the source and approved category list before correcting or escalating.

KEY TAKEAWAY

Good data cleaning improves consistency while preserving the original meaning and traceability of records.
`
},
{
title: "08. Quality Assurance and Accuracy Measurement",
content: `
DATA ENTRY AND DATA QUALITY
MODULE 08 | QUALITY ASSURANCE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. WHAT IS DATA QUALITY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Data quality describes how suitable information is for its intended use.

Important dimensions include:

ACCURACY
Does the record correctly represent the real-world value or source?

COMPLETENESS
Are all required fields present?

CONSISTENCY
Do values agree across related records and systems?

VALIDITY
Do values follow the required rules and formats?

UNIQUENESS
Are unintended duplicate records absent?

TIMELINESS
Is the information sufficiently current for its purpose?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. ENTRY ACCURACY RATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A project may measure entry accuracy by comparing entered fields with verified source fields.

One possible formula is:

Field accuracy rate =
Correctly entered fields / Total fields checked × 100

EXAMPLE

A reviewer checks 500 fields and finds 485 correct.

Accuracy rate:
485 / 500 × 100 = 97%

The remaining 15 fields contain errors under the review criteria.

This calculation describes the checked fields. It does not automatically guarantee that every unchecked field is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. ERROR RATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Using the same example:

Errors found = 15
Fields checked = 500

Error rate:
15 / 500 × 100 = 3%

Under this simple counting method, accuracy rate plus error rate equals 100%.

Projects may use different definitions, especially where one record can contain multiple errors. Always understand the measurement rule before comparing results.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. QUALITY-CONTROL METHODS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SOURCE COMPARISON
Compare entered values directly against original documents.

SECOND-PERSON REVIEW
A qualified reviewer checks selected records or all records where required.

AUTOMATED CHECKS
Use formulas, validation rules, and scripts to identify unusual or invalid values.

SAMPLE INSPECTION
Review a defined sample of records.

RISK-BASED REVIEW
Give extra attention to high-impact fields such as amounts, dates, identifiers, or regulated information.

A sample can reveal problems but cannot prove that every unchecked record is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. BUILDING A QUALITY CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before submitting:
□ Required fields are present.
□ Values match the source.
□ Date and number formats are consistent.
□ Suspected duplicates have been reviewed.
□ Invalid values have been resolved or flagged.
□ Formulas and filters have been checked.
□ The file opens correctly.
□ Confidential information is stored and shared appropriately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. ERROR CORRECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When an error is found:
1. Identify the incorrect field.
2. Trace it to the source.
3. Establish the correct value.
4. Make the authorized correction.
5. Recheck the affected record.
6. Determine whether similar records may have the same problem.
7. Document the correction where required.

Fixing one error may reveal a repeated process problem. Investigate the cause rather than treating every error as an isolated event.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PRACTICAL EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A team checks 800 fields and finds 12 errors.

Tasks:
1. Calculate the number of correct fields.
2. Calculate the accuracy rate.
3. Calculate the error rate.
4. Explain one limitation of these metrics.

MODEL ANSWERS

Correct fields = 800 - 12 = 788.

Accuracy rate:
788 / 800 × 100 = 98.5%.

Error rate:
12 / 800 × 100 = 1.5%.

Limitation:
These metrics describe the checked fields under the chosen counting method. They do not establish the correctness of every unchecked field or the seriousness of each error.

KEY TAKEAWAY

Quality assurance combines clear standards, appropriate checks, accurate measurement, and documented correction.
`
},
{
title: "09. Confidentiality, Data Protection and Professional Ethics",
content: `
DATA ENTRY AND DATA QUALITY
MODULE 09 | CONFIDENTIALITY AND PROFESSIONAL ETHICS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. WHY DATA PROTECTION MATTERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Data entry operators may handle personal, financial, educational, commercial, or otherwise confidential information.

Improper disclosure or alteration can harm individuals and organizations.

Professional work requires confidentiality, authorized access, secure handling, and compliance with applicable laws and client policies.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. THE PRINCIPLE OF AUTHORIZED ACCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Access information only when it is necessary for the assigned task.

Do not:
• Browse records out of curiosity.
• Share client data with unauthorized people.
• Publish screenshots containing private information.
• Copy records to personal accounts without authorization.
• Use confidential data in demonstrations or training examples.
• Keep copies after the approved retention period.

Use fictional or properly anonymized data for practice.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. SAFE FILE HANDLING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Use approved devices and storage locations.
2. Follow account and password policies.
3. Avoid sharing login credentials.
4. Check recipients before sending files.
5. Use approved transfer methods.
6. Keep software and devices appropriately protected.
7. Report suspected data exposure promptly.
8. Follow instructions for retaining and deleting files.

Do not bypass organizational security controls to save time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. ETHICAL DATA HANDLING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Accuracy is an ethical responsibility.

A worker should not:
• Invent missing information.
• Change records to conceal errors.
• Falsify completion reports.
• Delete records without authorization.
• Misrepresent the amount of work completed.
• Ignore known errors to meet a deadline.

If instructions conflict with privacy, security, or applicable legal requirements, stop and seek clarification through the proper channel.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. DATA PROTECTION IN KENYA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Kenya has a Data Protection Act, 2019, and an Office of the Data Protection Commissioner.

The exact obligations depend on the role, organization, type of information, and circumstances.

Workers should follow applicable law, their organization's procedures, and authorized instructions. This module provides general training, not legal advice.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. HANDLING A SUSPECTED DATA INCIDENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If information is accidentally sent to the wrong recipient or exposed:

1. Stop further unauthorized sharing.
2. Preserve relevant details needed for investigation.
3. Notify the designated supervisor or security contact promptly.
4. Follow the organization's incident-response procedure.
5. Do not conceal the incident or make unauthorized public disclosures.
6. Cooperate with the authorized response process.

Do not assume that deleting a message alone resolves a data incident.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PRACTICAL EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A colleague asks you to send a customer spreadsheet to a personal email address because their work account is unavailable.

Questions:
1. Should you send the file automatically?
2. What should you check first?
3. What is the safer next step?

MODEL ANSWER

Do not send confidential data automatically. Check the approved access and transfer procedures and contact the authorized supervisor or IT team for a permitted solution.

KEY TAKEAWAY

Professional data handling protects the information entrusted to you. Confidentiality and accuracy are part of the work, not optional extras.
`
},
{
title: "10. Data Entry Tools, File Formats and Troubleshooting",
content: `
DATA ENTRY AND DATA QUALITY
MODULE 10 | TOOLS AND TROUBLESHOOTING

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. COMMON DATA ENTRY TOOLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SPREADSHEETS
Useful for structured records, simple validation, sorting, filtering, and calculations.

DATABASE SYSTEMS
Useful for storing related records, enforcing rules, searching, and managing larger datasets.

ONLINE FORMS
Collect information through structured fields and may apply validation before submission.

DOCUMENT EDITORS
Useful for reviewing source information and preparing reports.

OCR SOFTWARE
Optical character recognition converts text in images or scanned documents into machine-readable text.

AUTOMATION TOOLS
May support repetitive operations, imports, validation, and reporting when properly tested and authorized.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. FILE FORMATS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CSV
Stores tabular data as text with fields separated by delimiters. CSV files do not preserve all spreadsheet formatting or formulas.

XLSX
An Excel workbook format that can preserve worksheets, formulas, and formatting.

ODS
An OpenDocument spreadsheet format.

TXT
Plain text, useful for simple text records.

PDF
Useful for sharing fixed-layout documents, but not always convenient for direct data manipulation.

DOCX
A word-processing format for structured documents and reports.

Choose the format required by the receiving system. A file that looks correct on screen may still import incorrectly if delimiters, encodings, or field formats are wrong.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. OCR AND SCANNED DOCUMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OCR can reduce manual typing, but recognition errors are common with:
• Poor scan quality.
• Handwriting.
• Unusual fonts.
• Tables and columns.
• Similar-looking characters.
• Faint or damaged documents.

Always compare OCR output with the source, especially for names, identifiers, dates, amounts, and other high-impact fields.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. COMMON TECHNICAL PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROBLEM: A CSV opens with all data in one column.

Possible cause:
The delimiter or regional settings do not match the file.

Action:
Check the import settings and identify the correct delimiter.

PROBLEM: Leading zeros disappear.

Possible cause:
The application interpreted an identifier as a number.

Action:
Import or format the field as text where required.

PROBLEM: Special characters appear incorrectly.

Possible cause:
A text-encoding mismatch.

Action:
Check the file encoding and import options.

PROBLEM: Spreadsheet formulas show errors.

Possible cause:
Incorrect cell references, unsupported function names, invalid values, or locale differences.

Action:
Inspect the formula, test it on a small example, and verify the expected inputs.

PROBLEM: Changes disappear.

Possible cause:
The file was not saved, the wrong copy was edited, or changes were not synchronized.

Action:
Confirm the file location, save status, and approved version-control procedure.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. SAFE TROUBLESHOOTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Record the problem and any error message.
2. Check the file type and import settings.
3. Test with a small, non-confidential sample.
4. Compare results with the source.
5. Save a protected copy before substantial changes.
6. Ask an authorized technical contact when the problem persists.

Do not experiment on the only copy of a client's original data.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. PRACTICAL EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A CSV file contains product codes such as 00045 and 00046. After opening it in a spreadsheet, the codes appear as 45 and 46.

Questions:
1. What caused the problem?
2. Why could it be serious?
3. How should the file be imported or corrected?

MODEL ANSWER

The spreadsheet likely interpreted the codes as numbers and removed leading zeros.

This can cause identifiers to stop matching records in another system.

Import the column as text or restore the codes using the authoritative source and the documented format. Verify the result before submission.

KEY TAKEAWAY

Tools improve efficiency when their behavior is understood, their output is verified, and original data is protected.
`
},
{
title: "11. Client Instructions, Record Management and Delivery",
content: `
DATA ENTRY AND DATA QUALITY
MODULE 11 | CLIENT REQUIREMENTS AND DELIVERY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. UNDERSTAND THE ASSIGNMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before beginning a data entry job, establish:
• The purpose of the task.
• The source documents.
• The required fields.
• The expected record count, where specified.
• Formatting and validation rules.
• Treatment of missing or conflicting values.
• The output format.
• The deadline.
• The submission method.
• Confidentiality and retention requirements.

Do not rely on assumptions when an instruction materially affects the result.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. CREATE A TASK PLAN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Divide the assignment into manageable stages.

Example:
1. Inspect the source files.
2. Confirm the field definitions.
3. Create or prepare the target template.
4. Enter a small test batch.
5. Validate the test batch.
6. Continue with the remaining records.
7. Run quality checks.
8. Save and submit the final file.

A small test batch can reveal formatting problems before they affect the entire dataset.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. TRACK PROGRESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A simple progress log may include:
• Task identifier.
• Total records expected.
• Records entered.
• Records reviewed.
• Records requiring clarification.
• Known issues.
• Last saved version.
• Completion status.

Progress figures should be honest and consistent with the project's counting rules.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. FILE NAMING AND VERSION CONTROL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use the naming convention required by the client.

If no convention is provided, request one or use an agreed format that identifies the project, content, and version without exposing unnecessary personal information.

Avoid confusing names such as:
final.xlsx
final-new.xlsx
final-really-final.xlsx

Keep drafts and final submissions distinguishable. Follow the client's policy for backups and retention.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. PROFESSIONAL COMMUNICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Report issues clearly and early.

A useful issue report states:
• The field or record affected.
• The nature of the problem.
• What has been checked.
• What clarification is required.
• Whether the issue affects the deadline or other records.

Avoid sending unnecessary confidential data in a message. Use approved channels and identifiers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. FINAL DELIVERY CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

□ The requested fields are present.
□ The required records have been processed.
□ Validation and quality checks are complete.
□ Unresolved issues are documented.
□ The output format is correct.
□ The file name follows the instructions.
□ The saved file opens correctly.
□ The correct version is being submitted.
□ The delivery channel is authorized.
□ Any required completion report is accurate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PRACTICAL EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A client requests 300 records in XLSX format by Friday. You discover 12 records with conflicting dates on Thursday afternoon.

Explain:
1. What should you do with the conflicting records?
2. How should you communicate the issue?
3. What checks should be completed before delivery?
4. Why should you not silently choose one date?

MODEL ANSWERS

1. Compare the source documents and follow the clarification procedure. Do not invent a resolution.
2. Report the affected records, the conflict, the checks completed, and the clarification needed through the approved channel.
3. Check completeness, accuracy, formats, duplicates, file integrity, and the delivery requirements.
4. A guessed date could corrupt the record and create downstream errors.

KEY TAKEAWAY

Reliable delivery combines accurate records, documented decisions, clear communication, and compliance with client requirements.
`
},
{
title: "12. Data Entry Practical Lab and Final Assessment",
content: `
DATA ENTRY AND DATA QUALITY
MODULE 12 | PRACTICAL LAB AND FINAL ASSESSMENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART A: PRACTICAL LAB
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCENARIO

A small shop provides a fictional inventory list that must be organized into a spreadsheet.

Create these columns:

ProductID
ProductName
Category
Quantity
UnitPrice
LastUpdated
Status

Use fictional practice records only.

TASK 1: CREATE THE DATASET

Enter at least ten records.

Ensure that:
• Each record has a product identifier.
• Each field contains the appropriate type of information.
• Dates follow one agreed format.
• Quantities follow the defined rules.
• Product identifiers retain leading zeros where applicable.

TASK 2: APPLY VALIDATION

Create rules for:
• Required product identifiers.
• Non-negative whole-number quantities.
• Non-negative unit prices, where that matches the business rules.
• Valid dates.
• An approved list of product statuses.

TASK 3: CHECK DATA QUALITY

Review the dataset for:
• Missing required values.
• Duplicate identifiers.
• Inconsistent category names.
• Invalid quantities.
• Incorrect date formats.
• Unintended spaces or spelling differences.

Do not delete suspected duplicates without checking the applicable rules.

TASK 4: USE SPREADSHEET FUNCTIONS

Calculate the total quantity of products using a suitable formula.

Count the number of populated product identifiers.

Filter the dataset to display products with a selected status.

Check the formulas against a small sample before relying on the results.

TASK 5: PREPARE THE FINAL FILE

Save the workbook in the requested location and format.

Reopen it and verify that the data, formulas, and formatting are intact.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART B: KNOWLEDGE ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QUESTION 1
What is the main purpose of data validation?

A. To guarantee every fact is true.
B. To check whether values satisfy defined rules.
C. To make every file confidential automatically.
D. To replace source documents.

QUESTION 2
Why should product codes with leading zeros sometimes be stored as text?

A. Text is always faster.
B. The zeros may be part of the identifier.
C. Text eliminates every error.
D. Identifiers should always be alphabetical.

QUESTION 3
What should you do when a source value is unclear?

A. Guess the most likely answer.
B. Delete the entire record.
C. Follow the approved clarification procedure.
D. Replace it with zero.

QUESTION 4
Which statement about duplicate records is correct?

A. Identical names always mean duplicate people.
B. Suspected duplicates should be reviewed using appropriate identifiers and rules.
C. Every duplicate-looking record must be deleted.
D. Duplicate checking is unnecessary.

QUESTION 5
What does a 98% field accuracy rate mean under a simple field-counting method?

A. Every record is guaranteed to be 98% correct.
B. 98% of the checked fields were correct under the measurement criteria.
C. The file contains no errors.
D. The data is automatically complete.

QUESTION 6
Which is an example of verification?

A. Checking whether a field contains a date.
B. Checking whether a value matches the original source.
C. Changing every blank to zero.
D. Sorting names alphabetically.

QUESTION 7
What should you do before sending confidential client data to a personal email address?

A. Send it if the deadline is close.
B. Check the approved transfer and access procedures.
C. Share the password separately.
D. Upload it to any available service.

QUESTION 8
Why should an original source file be protected before substantial cleaning?

A. To make the task slower.
B. To preserve the ability to compare and recover original information.
C. To prevent all future mistakes.
D. To avoid keeping records of changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART C: MODEL ANSWERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. B — Validation checks values against defined rules.
2. B — Leading zeros can be meaningful parts of identifiers.
3. C — Uncertainty must be handled through the approved process.
4. B — Duplicate resolution requires suitable comparison and review.
5. B — The metric applies to the fields checked under the defined method.
6. B — Verification compares a value with a source or authoritative record.
7. B — Confidential information must use authorized access and transfer methods.
8. B — Protecting the source preserves traceability and recovery options.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART D: SUGGESTED PRACTICAL RUBRIC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Data structure and field formats: 20%
Accuracy and completeness: 25%
Validation and duplicate handling: 20%
Spreadsheet use and formulas: 15%
Confidentiality and record management: 10%
Final presentation and delivery: 10%

TOTAL: 100%

This is a suggested training rubric, not an official institutional grading policy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COURSE COMPLETION STANDARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A learner should be able to:
• Enter structured information accurately.
• Select appropriate field formats.
• Use spreadsheet tools responsibly.
• Apply validation and verification checks.
• Handle missing values and suspected duplicates.
• Measure and improve data quality.
• Protect confidential information.
• Prepare and submit a reliable final dataset.

FINAL MESSAGE

Professional data entry is the disciplined handling of information from source to final delivery.

The objective is not simply to fill cells. It is to produce accurate, consistent, traceable, and secure records that people can rely on.
`
}
];

async function main() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing from backend/.env");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB.");

  const course = await Course.findOne({ slug: "data-entry" });

  if (!course) {
    throw new Error("Course data-entry was not found. No changes made.");
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

  console.log("\n===== DATA ENTRY COURSE EXPANSION =====");
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
