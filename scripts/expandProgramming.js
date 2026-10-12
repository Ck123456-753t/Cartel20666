require("dotenv").config();

const mongoose = require("mongoose");
const Course = require("../src/models/Course");

const modules = [
{
  title: "04. Introduction to Programming and Computational Thinking",
  content: `
INTRODUCTION TO PROGRAMMING AND COMPUTATIONAL THINKING

LEARNING OBJECTIVES
- Explain what programming is.
- Understand how programs solve problems.
- Identify the stages of software development.
- Break large problems into manageable steps.
- Recognize the difference between source code and program output.

1. WHAT IS PROGRAMMING?

Programming is the process of writing instructions that a computer can execute to perform a task.

Programs can calculate values, process information, display websites, manage accounts, control machines and automate repetitive work.

A computer follows the instructions provided by a program. It does not automatically understand what the programmer intended. Instructions must therefore be expressed clearly and logically.

2. WHAT IS AN ALGORITHM?

An algorithm is a finite sequence of steps for solving a problem or completing a task.

Example: Calculate the total price of three items.

Step 1: Obtain the price of item A.
Step 2: Obtain the price of item B.
Step 3: Obtain the price of item C.
Step 4: Add the three prices.
Step 5: Display the total.

The algorithm describes the solution without requiring a particular programming language.

3. COMPUTATIONAL THINKING

Computational thinking involves breaking a problem into smaller parts and designing a logical solution.

Decomposition:
Divide a large problem into manageable tasks.

Pattern recognition:
Identify similarities that may allow the same solution to be reused.

Abstraction:
Focus on relevant details while temporarily ignoring unnecessary information.

Algorithm design:
Arrange instructions in a logical order.

Example: A registration system can be divided into input validation, account creation, password handling, database storage and confirmation messages.

4. THE PROGRAMMING WORKFLOW

A practical workflow is:

1. Define the problem.
2. Identify the required inputs.
3. Determine the expected outputs.
4. Design the algorithm.
5. Write pseudocode or a flowchart.
6. Implement the solution in code.
7. Test normal and unusual cases.
8. Debug errors.
9. Document the solution.
10. Maintain and improve the program.

Skipping problem definition often leads to code that works technically but solves the wrong problem.

5. INPUT, PROCESSING AND OUTPUT

Input: Information supplied to a program.

Processing: Operations performed on the information.

Output: Results produced by the program.

Example: Calculate the area of a rectangle.

Inputs: Length and width.
Processing: Area = length × width.
Output: The calculated area.

6. SOURCE CODE AND EXECUTION

Source code is the human-readable program written in a programming language.

A runtime or execution environment runs the code. Depending on the language, code may be interpreted, compiled or processed using a combination of approaches.

JavaScript can run in a web browser and in environments such as Node.js.

7. PRACTICAL EXERCISE

Design an algorithm that calculates the average of three examination scores.

MODEL ANSWER

1. Receive score A, score B and score C.
2. Add all three scores.
3. Divide the sum by three.
4. Display the average.

Formula:
Average = (A + B + C) / 3

Before calculating, a real application should validate that the scores are valid numbers and fall within the permitted range.

8. REVIEW QUESTIONS

1. What is programming?
2. What is an algorithm?
3. Explain decomposition and abstraction.
4. Identify the input, processing and output in a simple calculator.
5. Why should a programmer define a problem before coding?

KEY TAKEAWAY

Good programming begins with understanding the problem. Code is the implementation of a solution, not a replacement for logical thinking.
`
},
{
  title: "05. Algorithms, Pseudocode and Flowcharts",
  content: `
ALGORITHMS, PSEUDOCODE AND FLOWCHARTS

LEARNING OBJECTIVES
- Write a simple algorithm.
- Use pseudocode to describe program logic.
- Recognize common flowchart symbols.
- Represent decisions and repeated operations.
- Trace a solution before implementing it.

1. ALGORITHMS

An algorithm is a sequence of instructions designed to produce a result.

A good algorithm should be understandable, logically ordered and sufficiently precise to solve the intended problem.

Example: Determine whether a number is even.

1. Receive a number.
2. Divide the number by two and calculate the remainder.
3. If the remainder is zero, report "Even".
4. Otherwise, report "Odd".

2. PSEUDOCODE

Pseudocode describes program logic in a readable, structured format without requiring the exact syntax of a particular language.

Example:

START
  INPUT number
  IF number MOD 2 = 0 THEN
    DISPLAY "Even"
  ELSE
    DISPLAY "Odd"
  END IF
END

MOD represents the remainder operation in this example.

Pseudocode is useful for discussing a solution before worrying about language-specific punctuation.

3. COMMON FLOWCHART SYMBOLS

Oval:
Start or end.

Rectangle:
A process or operation.

Parallelogram:
Input or output.

Diamond:
A decision, usually with different branches.

Arrow:
The direction of the workflow.

Connector:
Links different parts of a flowchart when needed.

Use symbols consistently so another person can understand the diagram.

4. EXAMPLE FLOWCHART LOGIC

Problem: Determine whether a learner passed an assessment with a pass mark of 50.

START
  |
INPUT score
  |
Is score >= 50?
  | YES             | NO
DISPLAY "Pass"     DISPLAY "Fail"
  |                  |
  +------- END ------+

A real application should also validate that the score is numeric and within the permitted range.

5. DECISION LOGIC

Decisions allow a program to choose between alternative actions.

Example:
IF accountBalance >= purchasePrice
  allow purchase
ELSE
  reject purchase

The condition must be evaluated before the program chooses a branch.

6. REPETITION

Loops repeat a set of instructions.

Example pseudocode:

SET counter = 1
WHILE counter <= 5
  DISPLAY counter
  SET counter = counter + 1
END WHILE

Expected output:
1
2
3
4
5

If the counter is never updated, a loop may run indefinitely. This is called an infinite loop.

7. TRACE TABLES

A trace table records how variables change while an algorithm runs.

For the counter example:

Iteration 1: counter = 1, display 1
Iteration 2: counter = 2, display 2
Iteration 3: counter = 3, display 3
Iteration 4: counter = 4, display 4
Iteration 5: counter = 5, display 5
Next check: counter = 6, condition false, stop

Tracing helps identify logic errors before or during coding.

8. PRACTICAL EXERCISE

Write pseudocode that receives two numbers and displays the larger number. If the numbers are equal, display "Equal".

MODEL ANSWER

START
  INPUT firstNumber
  INPUT secondNumber

  IF firstNumber > secondNumber THEN
    DISPLAY firstNumber
  ELSE IF secondNumber > firstNumber THEN
    DISPLAY secondNumber
  ELSE
    DISPLAY "Equal"
  END IF
END

9. REVIEW QUESTIONS

1. What is pseudocode?
2. Which flowchart symbol represents a decision?
3. What does an arrow show?
4. What is a trace table used for?
5. Why must loop conditions eventually become false when termination is intended?

KEY TAKEAWAY

Plan the logic, represent it clearly and test it with sample values before turning it into source code.
`
},
{
  title: "06. Variables, Constants and Data Types",
  content: `
VARIABLES, CONSTANTS AND DATA TYPES

LEARNING OBJECTIVES
- Explain variables and constants.
- Identify common data types.
- Choose meaningful variable names.
- Recognize type conversion.
- Avoid common data-handling mistakes.

1. WHAT IS A VARIABLE?

A variable is a named place in a program where a value can be stored and accessed.

JavaScript example:

let learnerName = "Amina";
let score = 82;
let isRegistered = true;

The variable name helps explain what the value represents.

2. DECLARING VARIABLES IN JAVASCRIPT

let:
Declares a variable whose value can be reassigned.

const:
Declares a binding that cannot be reassigned.

var:
An older declaration keyword with different scoping behavior. Modern JavaScript usually favors let and const.

Examples:

let balance = 500;
balance = 750;

const courseName = "Programming Fundamentals";

A const variable cannot be reassigned. If it contains an object or array, its contents may still be mutable unless additional protections are used.

3. COMMON DATA TYPES

String:
Text, such as "PrimeTask".

Number:
Numeric values, such as 25 or 19.5.

Boolean:
true or false.

Undefined:
A variable that has been declared but has not been assigned a value.

Null:
An intentional absence of a value.

Array:
An ordered collection of values.

Object:
A collection of related properties.

Examples:

const name = "Brian";
const age = 20;
const active = true;
const scores = [70, 85, 91];
const learner = { name: "Brian", active: true };

4. MEANINGFUL NAMES

Good names communicate purpose.

Prefer:
totalPrice
learnerEmail
minutesAvailable
isApproved

Avoid unclear names such as:
x1
thing
abc

Short names can be suitable for small mathematical examples, but meaningful names improve larger programs.

JavaScript identifiers cannot contain spaces and cannot begin with a digit. Names are case-sensitive, so totalPrice and totalprice are different identifiers.

5. CONSTANTS AND CONFIGURATION

Use const for values that should not be reassigned during execution.

Example:

const passMark = 50;
const courseTitle = "Programming Fundamentals";

A fixed configuration value should be clearly named. Avoid scattering unexplained numbers throughout a program.

6. TYPE CONVERSION

Values from HTML input fields are commonly received as strings.

Example:

const firstValue = "10";
const secondValue = "5";

console.log(firstValue + secondValue);

Output:
"105"

The plus operator joins the strings instead of adding their numeric values.

Correct approach:

const firstNumber = Number(firstValue);
const secondNumber = Number(secondValue);

console.log(firstNumber + secondNumber);

Output:
15

Validate the converted values before relying on them.

7. CHECKING TYPES

JavaScript provides typeof for checking many value types.

Examples:

typeof "hello"  // "string"
typeof 25       // "number"
typeof true     // "boolean"

One unusual detail: typeof null returns "object" in JavaScript for historical reasons. Use explicit null checks when necessary.

8. COMMON MISTAKES

- Using a variable before it has the intended value.
- Accidentally reassigning a value that should remain fixed.
- Treating numeric text as a number without conversion.
- Using unclear variable names.
- Assuming all values from user input are valid.
- Confusing null with the number zero or an empty string.

9. PRACTICAL EXERCISE

Create variables for:
- A learner's name.
- The learner's score.
- Whether the learner passed.
- A list of three subject scores.

MODEL ANSWER

const learnerName = "Amina";
const score = 76;
const passed = score >= 50;
const subjectScores = [76, 81, 69];

console.log(learnerName);
console.log(score);
console.log(passed);
console.log(subjectScores);

10. REVIEW QUESTIONS

1. What is a variable?
2. How do let and const differ?
3. Name four JavaScript data types.
4. Why should input strings be converted before mathematical operations?
5. Why are meaningful variable names important?

KEY TAKEAWAY

Choose appropriate data types, use descriptive names and validate values before using them in calculations or decisions.
`
},
{
  title: "07. Operators and Expressions",
  content: `
OPERATORS AND EXPRESSIONS

LEARNING OBJECTIVES
- Use arithmetic operators.
- Compare values.
- Combine logical conditions.
- Understand assignment operators.
- Avoid common operator mistakes.

1. WHAT IS AN OPERATOR?

An operator performs an operation on one or more values.

An expression combines values, variables and operators to produce a result.

Example:

const total = 20 + 30;

The expression 20 + 30 evaluates to 50.

2. ARITHMETIC OPERATORS

Addition: +
Subtraction: -
Multiplication: *
Division: /
Remainder: %
Exponentiation: **

Examples:

10 + 5  // 15
10 - 5  // 5
10 * 5  // 50
10 / 5  // 2
10 % 3  // 1
2 ** 3  // 8

The remainder operator is useful for determining whether an integer is even or odd.

3. ASSIGNMENT OPERATORS

The assignment operator = assigns a value.

let score = 70;
score = 80;

Compound assignments include:

score += 5;  // adds 5
score -= 5;  // subtracts 5
score *= 2;  // multiplies by 2

Assignment is not the same as equality comparison.

4. COMPARISON OPERATORS

Greater than: >
Less than: <
Greater than or equal to: >=
Less than or equal to: <=
Strict equality: ===
Strict inequality: !==

Examples:

10 > 5      // true
10 <= 5     // false
10 === 10   // true
10 !== 5    // true

JavaScript's strict equality operator === compares values without performing the type coercion used by loose equality ==. Prefer strict equality unless a specific reason justifies otherwise.

5. LOGICAL OPERATORS

AND: &&
OR: ||
NOT: !

Example:

const age = 20;
const hasPermission = true;

const canEnter = age >= 18 && hasPermission;

Both conditions must be true for canEnter to be true.

OR is true when at least one condition is true. NOT reverses a Boolean value.

6. OPERATOR PRECEDENCE

Operators do not all execute in the same order.

Example:

const result = 2 + 3 * 4;

The result is 14 because multiplication takes precedence over addition.

Parentheses make the intended order explicit:

const result = (2 + 3) * 4;

The result is 20.

Use parentheses when they improve readability, even when the language's precedence rules are already known.

7. COMMON MISTAKES

- Using = when a comparison is intended.
- Comparing a string with a number without considering conversion.
- Forgetting operator precedence.
- Dividing by zero in calculations.
- Assuming user-supplied values are valid.
- Using overly complicated expressions that are difficult to test.

8. PRACTICAL EXERCISE

A learner needs a score of at least 50 and must have submitted the assignment to pass.

Write JavaScript that checks both conditions.

MODEL ANSWER

const score = 68;
const assignmentSubmitted = true;

const passed = score >= 50 && assignmentSubmitted;

console.log(passed); // true

If either condition is false, the result is false.

9. REVIEW QUESTIONS

1. What is the difference between = and ===?
2. What does the remainder operator do?
3. When should && be used?
4. Why are parentheses useful?
5. What is the result of 4 + 2 * 3?

KEY TAKEAWAY

Operators determine how program values are calculated and compared. Use them deliberately and test the resulting expressions.
`
},
{
  title: "08. Conditional Statements and Decision-Making",
  content: `
CONDITIONAL STATEMENTS AND DECISION-MAKING

LEARNING OBJECTIVES
- Use if and else.
- Build multiple decision branches.
- Use logical conditions safely.
- Understand switch statements.
- Test boundary values.

1. WHAT ARE CONDITIONALS?

Conditional statements allow a program to choose which instructions to execute based on a condition.

Example:

const score = 72;

if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

The program checks the condition and executes the appropriate branch.

2. IF, ELSE IF AND ELSE

Use if for the first condition, else if for additional conditions, and else for the remaining case.

Example:

const score = 82;

if (score >= 80) {
  console.log("Excellent");
} else if (score >= 65) {
  console.log("Good");
} else if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Needs improvement");
}

The order matters. The first matching branch executes.

3. BOUNDARY VALUES

Boundary values sit at the edges of a rule.

If the pass mark is 50, test:
49, 50 and 51.

Expected results:
49: Fail
50: Pass
51: Pass

Testing only ordinary values can miss errors at the boundary.

4. VALIDATION BEFORE DECISIONS

A score should be checked before it is classified.

Example:

const score = 75;

if (typeof score !== "number" ||
    !Number.isFinite(score) ||
    score < 0 ||
    score > 100) {
  console.log("Invalid score");
} else if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

This example checks that the value is a finite number between 0 and 100.

A real form should also handle missing input and conversion errors.

5. LOGICAL CONDITIONS

Example:

const age = 20;
const accountActive = true;

if (age >= 18 && accountActive) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

Both conditions must be true.

When conditions become complicated, split them into named Boolean variables so the logic is easier to understand.

6. SWITCH STATEMENTS

A switch statement is useful when a single value is compared with several specific cases.

Example:

const role = "learner";

switch (role) {
  case "admin":
    console.log("Administration area");
    break;
  case "learner":
    console.log("Learning area");
    break;
  default:
    console.log("Unknown role");
}

The break statement prevents execution from continuing into the next case in ordinary switch usage.

7. TERNARY OPERATOR

A ternary expression is a compact way to choose between two values.

const score = 64;
const result = score >= 50 ? "Pass" : "Fail";

Use it for simple choices. For complicated decision trees, regular if/else statements are clearer.

8. PRACTICAL EXERCISE

Create a program that:
- Rejects scores below 0 or above 100.
- Displays "Distinction" for scores of 80 or above.
- Displays "Pass" for scores of 50 to 79.
- Displays "Fail" for scores below 50.

MODEL ANSWER

const score = 85;

if (typeof score !== "number" ||
    !Number.isFinite(score) ||
    score < 0 ||
    score > 100) {
  console.log("Invalid score");
} else if (score >= 80) {
  console.log("Distinction");
} else if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

9. REVIEW QUESTIONS

1. What does an if statement do?
2. Why does the order of conditions matter?
3. What is a boundary value?
4. When is switch useful?
5. Why should input be validated before a decision is made?

KEY TAKEAWAY

Conditional logic makes programs responsive to different situations. Correct conditions and boundary tests prevent many avoidable bugs.
`
},
{
  title: "09. Loops and Repetition",
  content: `
LOOPS AND REPETITION

LEARNING OBJECTIVES
- Explain why loops are used.
- Apply for, while and do...while loops.
- Understand counters and accumulators.
- Recognize infinite loops.
- Process collections using iteration.

1. WHAT IS A LOOP?

A loop repeats instructions while a condition or iteration rule permits it.

Loops are useful for processing lists, repeating calculations, displaying records and automating tasks.

Without loops, a programmer might need to write the same instruction many times.

2. FOR LOOP

A for loop is useful when the iteration structure is known.

Example:

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

Output:
1
2
3
4
5

The initialization sets the counter, the condition controls continuation, and the update changes the counter.

3. WHILE LOOP

A while loop repeats while its condition is true.

let count = 1;

while (count <= 3) {
  console.log(count);
  count++;
}

Output:
1
2
3

If count++ is removed, the condition remains true and the loop may continue indefinitely.

4. DO...WHILE LOOP

A do...while loop runs the body at least once before checking the condition.

let number = 1;

do {
  console.log(number);
  number++;
} while (number <= 3);

Use this structure when the task requires an initial execution before the condition is checked.

5. COUNTERS AND ACCUMULATORS

A counter tracks how many times something happens.

An accumulator collects a running total.

Example:

const scores = [60, 70, 80];
let total = 0;

for (let i = 0; i < scores.length; i++) {
  total += scores[i];
}

console.log(total); // 210

The accumulator starts at zero and adds each score.

6. ITERATING OVER ARRAYS

Modern JavaScript offers convenient array methods.

const names = ["Amina", "Brian", "Grace"];

for (const name of names) {
  console.log(name);
}

This reads each value in the array without manually managing an index.

Other methods, such as forEach, map and filter, are useful for particular tasks. Learn the purpose of each before choosing it.

7. BREAK AND CONTINUE

break exits a loop.

continue skips the remaining statements in the current iteration and proceeds to the next one.

Use these controls carefully. Complicated loop control can make a program difficult to follow.

8. AVOIDING INFINITE LOOPS

Check that:
- The loop condition can eventually become false.
- The relevant counter or state changes.
- The condition is based on the correct variable.
- Unexpected input cannot keep the loop running forever.

For systems that process large or untrusted collections, consider performance and limits as well.

9. PRACTICAL EXERCISE

Calculate the total of the numbers from 1 to 10.

MODEL ANSWER

let total = 0;

for (let number = 1; number <= 10; number++) {
  total += number;
}

console.log(total); // 55

10. EXTRA EXERCISE

Given this array:

const scores = [45, 67, 81, 39, 90];

Write a loop that counts how many scores are at least 50.

MODEL ANSWER

const scores = [45, 67, 81, 39, 90];
let passCount = 0;

for (const score of scores) {
  if (score >= 50) {
    passCount++;
  }
}

console.log(passCount); // 3

11. REVIEW QUESTIONS

1. What is a loop?
2. How do for and while loops differ?
3. What is an accumulator?
4. What causes an infinite loop?
5. What does break do?

KEY TAKEAWAY

Loops reduce repetition and make collection processing efficient. Always understand the loop's stopping condition before running it.
`
},
{
  title: "10. Functions, Parameters and Return Values",
  content: `
FUNCTIONS, PARAMETERS AND RETURN VALUES

LEARNING OBJECTIVES
- Explain functions.
- Declare and call functions.
- Use parameters and arguments.
- Return results from a function.
- Understand local scope and reusable logic.

1. WHAT IS A FUNCTION?

A function is a reusable block of code designed to perform a particular task.

Functions help organize programs, reduce duplicated logic and make testing easier.

2. DECLARING A FUNCTION

Example:

function greetLearner(name) {
  console.log("Welcome, " + name);
}

greetLearner("Amina");
greetLearner("Brian");

The function is declared once and called whenever it is needed.

3. PARAMETERS AND ARGUMENTS

A parameter is a variable listed in the function definition.

An argument is the value supplied when the function is called.

Example:

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

const result = add(10, 5);

console.log(result); // 15

firstNumber and secondNumber are parameters. The values 10 and 5 are arguments.

4. RETURN VALUES

The return statement sends a result back to the code that called the function.

Example:

function calculateArea(length, width) {
  return length * width;
}

const area = calculateArea(8, 4);

console.log(area); // 32

Returning a value is different from merely displaying it. A returned result can be stored, tested or used in another calculation.

5. ARROW FUNCTIONS

JavaScript supports arrow functions.

const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(4, 3)); // 12

A short arrow function can also be written:

const square = number => number * number;

Use a style that fits the project and remains readable.

6. SCOPE

Scope determines where a variable can be accessed.

Variables declared with let and const inside a function are local to that function or the relevant block.

Example:

function calculateTotal() {
  const price = 100;
  const quantity = 3;
  return price * quantity;
}

console.log(calculateTotal()); // 300

The local variable price is not directly available outside the function.

Avoid unnecessary global variables because they can make programs harder to maintain and debug.

7. DEFAULT PARAMETERS

A default parameter supplies a value when an argument is omitted or undefined.

function greet(name = "Learner") {
  return "Welcome, " + name;
}

console.log(greet()); // Welcome, Learner

Choose defaults that make sense for the task. Do not use defaults to hide missing required information.

8. VALIDATION IN FUNCTIONS

A function can validate its inputs before calculating.

Example:

function calculateAverage(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    throw new Error("Provide a non-empty array of scores.");
  }

  if (!scores.every(
    score => typeof score === "number" &&
             Number.isFinite(score)
  )) {
    throw new Error("Every score must be a finite number.");
  }

  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

console.log(calculateAverage([70, 80, 90])); // 80

In a real application, the allowed score range should also be checked if the task requires it.

9. PRACTICAL EXERCISE

Write a function called isAdult that receives an age and returns true when the age is at least 18.

MODEL ANSWER

function isAdult(age) {
  return typeof age === "number" &&
         Number.isFinite(age) &&
         age >= 18;
}

console.log(isAdult(20)); // true
console.log(isAdult(16)); // false

10. REVIEW QUESTIONS

1. What is a function?
2. How does a parameter differ from an argument?
3. What does return do?
4. Why is reusable code useful?
5. What is variable scope?

KEY TAKEAWAY

Functions give programs structure. A good function performs a clear task, accepts understandable inputs and produces a predictable result.
`
},
{
  title: "11. Debugging, Testing and Error Handling",
  content: `
DEBUGGING, TESTING AND ERROR HANDLING

LEARNING OBJECTIVES
- Distinguish syntax, runtime and logic errors.
- Test expected and unexpected cases.
- Use console tools to investigate problems.
- Read error messages systematically.
- Handle failures without hiding important information.

1. WHAT IS DEBUGGING?

Debugging is the process of locating, understanding and correcting defects in a program.

A program that runs without crashing is not necessarily correct. It may still produce the wrong answer.

2. COMMON ERROR TYPES

Syntax error:
The code violates the language's syntax rules.

Example:
if (score > 50 {
  console.log("Pass");
}

A closing parenthesis is missing.

Runtime error:
An error occurs while the program is executing.

Example:
Calling a method on a value that does not support that method.

Logic error:
The program runs but produces an incorrect result.

Example:
Using addition instead of multiplication to calculate a rectangle's area.

3. READ ERROR MESSAGES

When an error occurs:
1. Read the message carefully.
2. Identify the file and line number.
3. Inspect the surrounding code.
4. Check the values involved.
5. Reproduce the issue.
6. Make one focused change.
7. Run the test again.

The first line shown in an error report is not always the original cause. Follow the evidence instead of randomly editing code.

4. USE CONSOLE OUTPUT

Example:

const price = 120;
const quantity = 3;

console.log("Price:", price);
console.log("Quantity:", quantity);

const total = price * quantity;

console.log("Total:", total);

Expected total:
360

Temporary diagnostic output can reveal unexpected values. Remove unnecessary debugging output before final delivery.

5. TEST DIFFERENT CASES

Normal case:
A typical valid input.

Boundary case:
A value at the edge of an allowed range.

Invalid case:
An input that should be rejected.

Empty case:
No value or an empty collection.

Unexpected case:
A value that the programmer did not initially anticipate.

For a score validator, test 75, 50, 49, 0, 100, -1, 101 and non-numeric input.

6. TESTABLE FUNCTIONS

A predictable function is easier to test.

function isPassingScore(score) {
  return typeof score === "number" &&
         Number.isFinite(score) &&
         score >= 50 &&
         score <= 100;
}

console.assert(isPassingScore(75) === true);
console.assert(isPassingScore(49) === false);
console.assert(isPassingScore(50) === true);
console.assert(isPassingScore(101) === false);

These checks help expose incorrect assumptions. For larger projects, use a proper automated testing framework.

7. ERROR HANDLING

Use clear validation and handle expected failures appropriately.

Example:

function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both inputs must be numbers.");
  }

  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return a / b;
}

Callers should handle errors where they can respond meaningfully.

Do not catch every error and silently ignore it. Hiding failures makes problems harder to diagnose.

8. DEBUGGING A LOGIC ERROR

Incorrect code:

function calculateArea(length, width) {
  return length + width;
}

Correct code:

function calculateArea(length, width) {
  return length * width;
}

The incorrect version may execute without any error, but it does not implement the required formula.

A test such as calculateArea(4, 3) should produce 12. If it produces 7, the test reveals the defect.

9. PRACTICAL EXERCISE

Find the problems in this function:

function calculateAverage(a, b, c) {
  return (a + b + c) / 2;
}

MODEL ANSWER

The function adds three numbers but divides by two.

Correct version:

function calculateAverage(a, b, c) {
  return (a + b + c) / 3;
}

A more robust version should also validate the input values.

10. REVIEW QUESTIONS

1. What is a syntax error?
2. Why are logic errors difficult to notice?
3. What is a boundary test?
4. Why should errors not be silently ignored?
5. How can console output help debugging?

KEY TAKEAWAY

Test the program's behavior, not merely whether it runs. Good debugging is a controlled investigation, not random code changes.
`
},
{
  title: "12. Programming Project: Build and Test a Score Calculator",
  content: `
PRACTICAL PROJECT: BUILD AND TEST A SCORE CALCULATOR

PROJECT OBJECTIVE

Build a small JavaScript program that receives assessment scores, validates them, calculates an average and assigns a result category.

The project combines:
- Variables and data types.
- Operators.
- Conditional statements.
- Functions.
- Loops and arrays.
- Validation.
- Testing and debugging.

1. REQUIREMENTS

The program must:
1. Accept a list of scores.
2. Require every score to be a number from 0 to 100.
3. Reject an empty list.
4. Calculate the average.
5. Assign a category.
6. Display the total number of scores and the average.
7. Handle invalid data with a clear error message.

Category rules:
80-100: Distinction
50-79.99: Pass
0-49.99: Fail

These are project-specific training rules, not a universal grading policy.

2. PLAN THE ALGORITHM

Step 1: Receive the scores.
Step 2: Check that the list is an array and is not empty.
Step 3: Check each score.
Step 4: Calculate the total.
Step 5: Divide the total by the number of scores.
Step 6: Determine the category.
Step 7: Display the results.

3. COMPLETE JAVASCRIPT EXAMPLE

function validateScores(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    throw new Error("Enter at least one score.");
  }

  for (const score of scores) {
    if (
      typeof score !== "number" ||
      !Number.isFinite(score) ||
      score < 0 ||
      score > 100
    ) {
      throw new Error(
        "Every score must be a number from 0 to 100."
      );
    }
  }
}

function calculateAverage(scores) {
  validateScores(scores);

  let total = 0;

  for (const score of scores) {
    total += score;
  }

  return total / scores.length;
}

function getCategory(average) {
  if (average >= 80) {
    return "Distinction";
  } else if (average >= 50) {
    return "Pass";
  }

  return "Fail";
}

function createReport(scores) {
  const average = calculateAverage(scores);
  const category = getCategory(average);

  return {
    numberOfScores: scores.length,
    average: Number(average.toFixed(2)),
    category
  };
}

try {
  const scores = [78, 85, 92, 65];
  const report = createReport(scores);

  console.log("Assessment Report");
  console.log("-----------------");
  console.log("Number of scores:", report.numberOfScores);
  console.log("Average:", report.average);
  console.log("Category:", report.category);
} catch (error) {
  console.error("Could not create report:", error.message);
}

4. EXPECTED OUTPUT

Assessment Report
-----------------
Number of scores: 4
Average: 80
Category: Distinction

The scores total 320. Dividing by four gives an average of 80.

5. TEST THE PROGRAM

Test A:
[80, 80, 80]
Expected average: 80
Expected category: Distinction

Test B:
[50, 50, 50]
Expected average: 50
Expected category: Pass

Test C:
[0, 20, 30]
Expected average: 16.67
Expected category: Fail

Test D:
[]
Expected: Clear validation error.

Test E:
[70, -5, 80]
Expected: Clear validation error.

Test F:
[70, 105, 80]
Expected: Clear validation error.

Test G:
[70, "80", 90]
Expected: Clear validation error because the second value is a string.

6. PROJECT IMPROVEMENTS

After the basic version works, consider:
- Accepting input from an HTML form.
- Displaying the report on a webpage.
- Saving results in a database with appropriate authorization.
- Adding individual learner names where appropriate.
- Creating automated tests.
- Exporting the report to a file.

Do not add database storage or personal information collection without a clear requirement and suitable security controls.

7. PROJECT SUBMISSION

Submit:
1. The source code.
2. A short explanation of the algorithm.
3. The test cases and their results.
4. A list of errors discovered and corrected.
5. A brief description of possible improvements.

8. FINAL ASSESSMENT: 100 MARKS

Problem understanding and algorithm: 15 marks
Correct use of variables and data types: 10 marks
Functions and program structure: 15 marks
Correct calculations and decisions: 20 marks
Input validation: 15 marks
Testing and debugging: 15 marks
Code readability and explanation: 10 marks

TOTAL: 100 MARKS

SUGGESTED PERFORMANCE GUIDANCE

80-100: Strong understanding; solution is reliable and well tested.
65-79: Good progress; some improvements are needed.
50-64: Basic understanding; further practice is recommended.
Below 50: Revisit the lessons and rebuild the project step by step.

9. FINAL REFLECTION

Answer these questions:
- Which part of the program was easiest to implement?
- Which test revealed a problem or assumption?
- Why should input validation happen before calculations?
- How would you make the program easier for a beginner to use?
- What would you test before deploying the program?

COURSE COMPLETION

Programming is a cycle of understanding, designing, implementing, testing and improving.

A reliable programmer explains the problem clearly, writes understandable code, verifies behavior and corrects defects based on evidence.
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
    slug: "programming-fundamentals"
  });

  if (!course) {
    throw new Error(
      "Course programming-fundamentals was not found. No lessons were added."
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

  console.log("\n===== PROGRAMMING COURSE EXPANSION =====");
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
