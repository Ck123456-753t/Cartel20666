require("dotenv").config();

const mongoose = require("mongoose");
const Course = require("../src/models/Course");

const modules = [
{
title: "04. Introduction to Web Design and How Websites Work",
content: `
INTRODUCTION TO WEB DESIGN AND HOW WEBSITES WORK

LEARNING OBJECTIVES
- Explain web design and web development.
- Understand the relationship between browsers, servers and websites.
- Identify frontend technologies.
- Plan a website before writing code.
- Understand the difference between static and dynamic websites.

1. WHAT IS WEB DESIGN?

Web design is the process of planning and creating the appearance, structure and usability of a website.

A good website should communicate clearly, organize information logically and help visitors complete their intended tasks.

Web design involves:
- Layout and visual hierarchy.
- Typography and readable text.
- Color and contrast.
- Navigation and information structure.
- Responsive layouts.
- Accessibility and usability.
- Consistent presentation.

A visually attractive website can still fail if users cannot find the information they need.

2. WEB DESIGN VERSUS WEB DEVELOPMENT

Web design focuses on presentation, structure and user experience.

Frontend development implements the parts of a website that users interact with in their browsers.

Backend development handles server-side operations such as authentication, business logic, data processing and database access.

These areas overlap. A developer may work across several of them.

3. THE THREE CORE FRONTEND TECHNOLOGIES

HTML:
Defines the structure and meaning of content.

CSS:
Controls presentation, including colors, spacing, typography and layouts.

JavaScript:
Adds behavior and interactivity, such as menu controls, validation and dynamic content.

Example:
HTML creates a button.
CSS styles the button.
JavaScript responds when the button is activated.

4. HOW A WEBSITE LOADS

A simplified process:

1. A visitor enters a website address.
2. The browser requests the relevant resources.
3. A server or hosting platform responds.
4. The browser processes HTML, CSS and JavaScript.
5. The browser renders the page.
6. Additional requests may retrieve images, data or other resources.

A dynamic website may also communicate with an application programming interface (API) and database.

5. STATIC AND DYNAMIC WEBSITES

A static website can serve prepared files without generating personalized content for every request.

A dynamic website can change its content based on user actions, stored information, permissions or server-side logic.

Static sites can still include JavaScript interactions. Dynamic behavior does not automatically require a database.

6. PLAN BEFORE CODING

Before building a website, establish:
- Purpose of the website.
- Intended audience.
- Main information or services.
- Required pages.
- Navigation structure.
- Visual style.
- Mobile requirements.
- Accessibility needs.
- Content and image sources.
- Hosting and deployment requirements.

A simple plan prevents unnecessary rebuilding.

7. FIRST HTML PAGE

Create a file named index.html:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Website</title>
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
  </header>

  <main>
    <p>This is my first web page.</p>
  </main>

  <footer>
    <p>Thank you for visiting.</p>
  </footer>
</body>
</html>

The viewport declaration helps the page use the device's width correctly on mobile screens.

8. PRACTICAL EXERCISE

Plan a small website for a training academy.

List:
- Website purpose.
- Intended visitors.
- Three main pages.
- Main navigation links.
- One primary action visitors should be able to complete.

MODEL ANSWER

Purpose: Provide online training materials.
Audience: Learners and instructors.
Pages: Home, Courses and Contact.
Navigation: Home, Courses, Contact.
Primary action: Open a course and view its lessons.

9. REVIEW QUESTIONS

1. What is web design?
2. What are HTML, CSS and JavaScript used for?
3. How does a browser obtain website resources?
4. What is the difference between static and dynamic websites?
5. Why should a website be planned before coding?

KEY TAKEAWAY

Web design combines structure, presentation and usability. Understand the visitor's needs before choosing colors or writing code.
`
},
{
title: "05. HTML Structure, Semantic Elements and Links",
content: `
HTML STRUCTURE, SEMANTIC ELEMENTS AND LINKS

LEARNING OBJECTIVES
- Explain the role of HTML.
- Create a valid HTML document structure.
- Use headings and semantic elements appropriately.
- Create links and lists.
- Understand attributes and accessible markup.

1. WHAT IS HTML?

HTML stands for HyperText Markup Language. It describes the structure and meaning of webpage content.

HTML is a markup language, not a programming language.

An HTML element commonly consists of an opening tag, content and a closing tag. Some elements, such as img and input, are void elements and do not use closing tags.

2. BASIC DOCUMENT STRUCTURE

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Course Page</title>
</head>
<body>
  <header>
    <h1>Web Design Fundamentals</h1>
  </header>

  <main>
    <p>Learn the foundations of creating websites.</p>
  </main>
</body>
</html>

The head contains document metadata and linked resources. The body contains the page content displayed to visitors.

3. HEADINGS AND PARAGRAPHS

Use headings to represent the document's structure.

<h1>Course Overview</h1>
<h2>Learning Objectives</h2>
<h3>HTML Basics</h3>

Use headings in a logical hierarchy. Do not choose a heading level merely because its default appearance looks attractive.

Use paragraphs for blocks of ordinary text.

4. SEMANTIC HTML

Semantic elements describe the purpose of their content.

<header>: Introductory content.
<nav>: Major navigation links.
<main>: The page's primary content.
<section>: A related thematic section.
<article>: Self-contained content.
<aside>: Supplementary content.
<footer>: Footer information.

Example:

<header>
  <h1>PrimeTask Academy</h1>
</header>

<nav aria-label="Main navigation">
  <a href="index.html">Home</a>
  <a href="courses.html">Courses</a>
</nav>

<main>
  <section>
    <h2>Available Courses</h2>
    <p>Explore practical learning modules.</p>
  </section>
</main>

<footer>
  <p>Academy information</p>
</footer>

Semantic HTML helps browsers, assistive technologies and developers understand the page.

5. LINKS

Use the anchor element to link to another page or resource.

<a href="courses.html">View Courses</a>

An absolute URL identifies a full web address. A relative URL identifies a resource in relation to the current location.

Use meaningful link text. "Read the course requirements" is more informative than "Click here" repeated throughout a page.

6. LISTS

Unordered list:

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

Ordered list:

<ol>
  <li>Plan the page.</li>
  <li>Write the HTML.</li>
  <li>Test the result.</li>
</ol>

Use lists when the information is naturally grouped or ordered.

7. IMAGES AND ALTERNATIVE TEXT

Example:

<img src="images/classroom.jpg" alt="Learners working at computers">

Alternative text communicates the relevant information in an image to people who cannot see it.

Decorative images may use alt="". Do not fill alternative text with irrelevant keywords.

8. ATTRIBUTES

Attributes provide additional information about an element.

Examples:
- href specifies a link destination.
- src specifies an image or resource location.
- alt provides image alternative text.
- id identifies an element.
- class groups elements for styling or scripting.
- lang identifies the language of content.

Attribute values should be appropriate to the element and its purpose.

9. PRACTICAL EXERCISE

Create a webpage containing:
- A page title.
- A header with one h1.
- A navigation area with two links.
- A main section with two paragraphs.
- A three-item list.
- A footer.

MODEL ANSWER

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Learning Page</title>
</head>
<body>
  <header>
    <h1>My Learning Page</h1>
  </header>

  <nav aria-label="Main navigation">
    <a href="index.html">Home</a>
    <a href="courses.html">Courses</a>
  </nav>

  <main>
    <section>
      <h2>About This Page</h2>
      <p>This page introduces my learning project.</p>
      <p>I will use it to practice HTML structure.</p>
      <ul>
        <li>Structure</li>
        <li>Navigation</li>
        <li>Accessibility</li>
      </ul>
    </section>
  </main>

  <footer>
    <p>Learning project</p>
  </footer>
</body>
</html>

10. REVIEW QUESTIONS

1. What does HTML describe?
2. Why are semantic elements useful?
3. What is the purpose of alt text?
4. How does a relative link differ from an absolute URL?
5. Why should headings follow a logical hierarchy?

KEY TAKEAWAY

Good HTML communicates the meaning and structure of a page. Correct markup makes styling, accessibility and maintenance easier.
`
},
{
title: "06. CSS Fundamentals, Selectors and the Box Model",
content: `
CSS FUNDAMENTALS, SELECTORS AND THE BOX MODEL

LEARNING OBJECTIVES
- Explain how CSS styles HTML.
- Apply CSS using selectors.
- Understand the box model.
- Use spacing, typography and colors consistently.
- Recognize specificity and inheritance.

1. WHAT IS CSS?

CSS stands for Cascading Style Sheets. It controls how HTML content is presented.

CSS can define:
- Text styles.
- Colors and backgrounds.
- Borders and shadows.
- Spacing.
- Element dimensions.
- Layouts.
- Responsive behavior.

2. THREE WAYS TO APPLY CSS

Inline CSS:
<p style="color: blue;">Example</p>

Internal CSS:
<style>
  p {
    color: blue;
  }
</style>

External CSS:
<link rel="stylesheet" href="styles.css">

External stylesheets are often easier to maintain across multiple pages.

3. CSS SELECTORS

Element selector:

p {
  line-height: 1.7;
}

Class selector:

.card {
  padding: 20px;
}

ID selector:

#main-title {
  color: navy;
}

Descendant selector:

.card p {
  color: #334155;
}

Classes are useful for reusable styling. IDs should be unique within a document.

4. DECLARATIONS AND PROPERTIES

Example:

h1 {
  color: navy;
  font-size: 2rem;
  margin-bottom: 1rem;
}

The selector identifies the target. Each declaration contains a property and a value.

5. THE BOX MODEL

A typical CSS box contains:
- Content.
- Padding.
- Border.
- Margin.

Content is the element's main content area.
Padding creates space inside the border.
Border surrounds the padding and content.
Margin creates space outside the border.

Example:

.card {
  padding: 20px;
  border: 1px solid #cbd5e1;
  margin: 16px;
}

6. BOX SIZING

A common layout rule is:

*,
*::before,
*::after {
  box-sizing: border-box;
}

With border-box, the declared width includes the content, padding and border. This usually makes dimensions easier to reason about.

7. COLORS AND TYPOGRAPHY

Example:

body {
  font-family: Arial, sans-serif;
  color: #172033;
  background: #f8fafc;
  line-height: 1.6;
}

h1 {
  font-size: 2rem;
  line-height: 1.2;
}

Choose readable fonts and sufficient contrast. Avoid using color as the only way to communicate important information.

8. CASCADING AND SPECIFICITY

When multiple CSS rules apply to the same element, the cascade determines which declaration wins.

Specificity is one factor. Origin, importance, cascade layers and source order can also matter.

Avoid solving every styling conflict by adding increasingly complicated selectors. Clear class names and a consistent stylesheet structure are easier to maintain.

9. PRACTICAL EXERCISE

Create a card with:
- A white background.
- A dark heading.
- Comfortable padding.
- A subtle border.
- Rounded corners.
- A readable paragraph.

MODEL ANSWER

.card {
  background: #ffffff;
  color: #172033;
  padding: 24px;
  border: 1px solid #dbe3ee;
  border-radius: 12px;
  margin: 16px 0;
}

.card h2 {
  color: #0f172a;
  margin-top: 0;
}

.card p {
  line-height: 1.7;
}

10. REVIEW QUESTIONS

1. What does CSS control?
2. How does a class selector differ from an ID selector?
3. Name the four main parts of the box model.
4. Why is border-box useful?
5. What factors influence which CSS rule applies?

KEY TAKEAWAY

A consistent stylesheet makes a website readable and maintainable. Understand selectors, spacing and the box model before adding complicated visual effects.
`
},
{
title: "07. Layout Design with Flexbox and CSS Grid",
content: `
LAYOUT DESIGN WITH FLEXBOX AND CSS GRID

LEARNING OBJECTIVES
- Explain CSS layout.
- Use Flexbox for one-dimensional layouts.
- Use Grid for two-dimensional layouts.
- Control spacing and alignment.
- Build reusable card layouts.

1. WHY LAYOUT MATTERS

Layout determines how content is arranged on a page.

A good layout creates visual hierarchy, groups related information and helps users locate important actions.

Avoid positioning every element with fixed coordinates. Such pages often break when content changes or screens become smaller.

2. FLEXBOX

Flexbox is designed for arranging items along a primary axis.

Example:

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

Important properties:
display: flex
flex-direction
justify-content
align-items
flex-wrap
gap

Use justify-content to distribute items along the main axis and align-items to align them along the cross axis.

3. A RESPONSIVE FLEXBOX ROW

<div class="actions">
  <a href="courses.html">Courses</a>
  <a href="contact.html">Contact</a>
</div>

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

The flex-wrap property allows items to move onto another line when space is limited.

4. CSS GRID

Grid is useful for rows and columns.

Example:

.course-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

This creates three equal-width columns when enough space is available.

5. RESPONSIVE GRID

A layout can automatically fit cards into available space:

.course-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 240px), 1fr)
  );
  gap: 20px;
}

This reduces the need to specify a fixed number of columns for every device width.

6. CENTERING CONTENT

A common page container:

.container {
  width: min(100% - 32px, 1100px);
  margin-inline: auto;
}

This creates horizontal breathing room while limiting the content width on larger screens.

7. BUILD A COURSE CARD

Example HTML:

<article class="course-card">
  <h2>Programming Fundamentals</h2>
  <p>Learn variables, conditions, loops and functions.</p>
  <a href="programming.html">Open course</a>
</article>

Example CSS:

.course-card {
  padding: 20px;
  border: 1px solid #dbe3ee;
  border-radius: 14px;
  background: #ffffff;
}

.course-card h2 {
  margin-top: 0;
}

.course-card a {
  display: inline-block;
  margin-top: 12px;
}

8. FLEXBOX VERSUS GRID

Flexbox:
Best when arranging items primarily along one axis, such as a navigation row or button group.

Grid:
Best when arranging a collection in rows and columns, such as a course catalogue.

They can be used together. A grid can arrange cards while Flexbox organizes the contents of each card.

9. PRACTICAL EXERCISE

Create a responsive course catalogue containing at least three cards.

Each card should contain:
- Course title.
- Short description.
- Link or action.
- Consistent spacing.

MODEL CSS

.container {
  width: min(100% - 32px, 1100px);
  margin-inline: auto;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 250px), 1fr)
  );
  gap: 20px;
}

.course-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #dbe3ee;
  border-radius: 12px;
}

.course-card a {
  align-self: flex-start;
  margin-top: auto;
  padding-top: 16px;
}

10. REVIEW QUESTIONS

1. What is Flexbox commonly used for?
2. What is CSS Grid useful for?
3. Why is gap useful?
4. How does auto-fit help responsive layouts?
5. Why should fixed positioning not be the default for every element?

KEY TAKEAWAY

Use layout tools to adapt content to available space. Flexbox and Grid are usually better foundations than manually positioning every element.
`
},
{
title: "08. Responsive Web Design and Mobile-First Development",
content: `
RESPONSIVE WEB DESIGN AND MOBILE-FIRST DEVELOPMENT

LEARNING OBJECTIVES
- Explain responsive web design.
- Use relative sizing and flexible layouts.
- Apply media queries.
- Handle images and long content.
- Test layouts across different screen sizes.

1. WHAT IS RESPONSIVE WEB DESIGN?

Responsive design allows a website to adapt to different screen sizes and viewing conditions.

A responsive page should remain usable on:
- Small mobile phones.
- Larger phones.
- Tablets.
- Laptops.
- Desktop monitors.

The objective is not to make every screen identical. It is to make the content usable on each screen.

2. MOBILE-FIRST DESIGN

Mobile-first development starts with a layout suitable for small screens and adds enhancements for larger screens.

Example:

.page {
  padding: 16px;
}

@media (min-width: 768px) {
  .page {
    padding: 32px;
  }
}

The base rule works on smaller screens. The media query applies additional spacing at larger widths.

3. RESPONSIVE UNITS

Common CSS units include:
px: A CSS pixel.
%: A percentage of a relevant reference dimension.
rem: Relative to the root font size.
vw: A percentage of viewport width.
fr: A fraction of available Grid space.

Use units according to their purpose. Avoid relying on fixed widths that exceed the available viewport.

4. RESPONSIVE IMAGES

img {
  max-width: 100%;
  height: auto;
  display: block;
}

This helps images remain within their containing element while preserving their natural aspect ratio.

For card images that should share a consistent crop, an explicit container size and object-fit may be more appropriate.

5. MEDIA QUERIES

Example:

.course-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 700px) {
  .course-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1000px) {
  .course-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

Breakpoints should be selected when the content needs them, rather than blindly copying device labels.

6. AVOID HORIZONTAL OVERFLOW

Common causes include:
- Fixed-width elements that exceed the screen.
- Long unbroken strings.
- Oversized images.
- Grid columns with inflexible minimum widths.
- Large tables without a suitable overflow strategy.

Useful rules:

img,
video {
  max-width: 100%;
}

.long-content {
  overflow-wrap: anywhere;
}

Use these rules carefully and test actual content. Some tables or code samples may need their own horizontal scrolling region.

7. TOUCH-FRIENDLY CONTROLS

Buttons and links should be easy to activate on touch screens.

Provide enough space between controls, clear labels and visible focus states. Avoid tiny text links placed directly beside other interactive elements.

8. TEST RESPONSIVENESS

Test:
- The smallest expected screen.
- A medium-width screen.
- A large screen.
- Portrait and landscape where relevant.
- Long headings and paragraphs.
- Large images.
- Navigation wrapping.
- Form controls and buttons.

Use browser developer tools when available, and test on a real mobile device when practical.

9. PRACTICAL EXERCISE

Create a course grid with:
- One column on small screens.
- Two columns on medium screens.
- Three columns on larger screens.
- Flexible cards.
- Responsive images.

MODEL CSS

.course-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.course-card img {
  display: block;
  max-width: 100%;
  height: auto;
}

@media (min-width: 700px) {
  .course-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1000px) {
  .course-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

10. REVIEW QUESTIONS

1. What is responsive design?
2. What is mobile-first development?
3. Why are flexible widths useful?
4. What causes horizontal overflow?
5. How can you test a responsive layout?

KEY TAKEAWAY

Responsive design is a usability requirement. Build flexible layouts and test the real content, not just an empty page.
`
},
{
title: "09. JavaScript Interactivity and DOM Manipulation",
content: `
JAVASCRIPT INTERACTIVITY AND DOM MANIPULATION

LEARNING OBJECTIVES
- Explain the DOM.
- Select HTML elements with JavaScript.
- Respond to user events.
- Update page content safely.
- Understand basic client-side validation.

1. WHAT IS THE DOM?

The Document Object Model (DOM) represents a webpage as objects that JavaScript can inspect and modify.

JavaScript can:
- Change text.
- Update attributes.
- Add or remove classes.
- Respond to clicks.
- Validate user input.
- Show or hide interface elements.

2. SELECTING ELEMENTS

HTML:

<h1 id="page-title">Welcome</h1>
<p class="description">Learn web design.</p>

JavaScript:

const title = document.querySelector("#page-title");
const description = document.querySelector(".description");

The querySelector method returns the first matching element or null when no match exists.

Always consider what should happen if an expected element is missing.

3. RESPONDING TO EVENTS

HTML:

<button id="message-button" type="button">
  Show message
</button>

<p id="message" aria-live="polite"></p>

JavaScript:

const button = document.querySelector("#message-button");
const message = document.querySelector("#message");

if (button && message) {
  button.addEventListener("click", () => {
    message.textContent = "Your button works!";
  });
}

The event listener runs when the user activates the button.

4. SAFE TEXT UPDATES

Use textContent when inserting ordinary text.

Example:

message.textContent = userProvidedText;

Avoid inserting untrusted user input through innerHTML because it may interpret the content as markup and create security risks.

When HTML must be generated dynamically, use a safe, carefully designed approach appropriate to the content.

5. TOGGLING A MENU

HTML:

<button
  id="menu-toggle"
  type="button"
  aria-expanded="false"
  aria-controls="main-menu">
  Toggle menu
</button>

<nav id="main-menu" hidden>
  <a href="index.html">Home</a>
  <a href="courses.html">Courses</a>
</nav>

JavaScript:

const toggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#main-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
  });
}

A production menu should also be tested for keyboard use, focus behavior and the intended mobile layout.

6. BASIC FORM VALIDATION

HTML:

<form id="contact-form">
  <label for="learner-name">Your name</label>
  <input id="learner-name" name="name" required>

  <button type="submit">Submit</button>
</form>

JavaScript:

const form = document.querySelector("#contact-form");

if (form) {
  form.addEventListener("submit", event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      return;
    }

    event.preventDefault();
    console.log("Form passed browser validation.");
  });
}

This example demonstrates client-side validation only. It does not send or store data.

7. CLIENT-SIDE VERSUS SERVER-SIDE VALIDATION

Client-side validation improves usability by giving quick feedback.

Server-side validation is essential when data is sent to a backend. The server must independently validate the submitted values because browser checks can be bypassed.

Do not treat a hidden field or disabled button as a security boundary.

8. COMMON PROBLEMS

- The selector does not match any element.
- The script executes before the required HTML exists.
- An event listener is attached more than once.
- A button unintentionally submits a form.
- A missing variable causes a runtime error.
- Untrusted input is inserted as HTML.
- A visual interaction is inaccessible to keyboard users.

9. PRACTICAL EXERCISE

Create a button that changes a paragraph between two messages.

MODEL ANSWER

<button id="toggle-message" type="button">Change message</button>
<p id="status-message">The page is ready.</p>

<script>
const actionButton = document.querySelector("#toggle-message");
const statusMessage = document.querySelector("#status-message");

if (actionButton && statusMessage) {
  actionButton.addEventListener("click", () => {
    statusMessage.textContent =
      statusMessage.textContent === "The page is ready."
        ? "The button was activated."
        : "The page is ready.";
  });
}
</script>

10. REVIEW QUESTIONS

1. What does the DOM represent?
2. What does addEventListener do?
3. Why is textContent useful?
4. Why is client-side validation not sufficient for security?
5. What should happen if a JavaScript selector returns null?

KEY TAKEAWAY

JavaScript makes a website interactive. Build predictable event behavior, update content safely and validate important information on the server as well.
`
},
{
title: "10. Accessible Design, Forms and Navigation",
content: `
ACCESSIBLE DESIGN, FORMS AND NAVIGATION

LEARNING OBJECTIVES
- Explain web accessibility.
- Use labels and semantic controls.
- Build clear navigation.
- Improve keyboard usability.
- Design readable forms and error messages.

1. WHAT IS WEB ACCESSIBILITY?

Web accessibility means designing websites so that people with different abilities can use them.

Accessibility benefits people who use keyboards, screen readers, magnification, voice control and other assistive technologies. It also improves usability for people using small screens or temporarily limited devices.

2. SEMANTIC CONTROLS

Use a button for an action and a link for navigation.

A button submits a form, opens a menu or performs an action.

A link navigates to another page or resource.

Do not use a non-interactive element as a fake button without implementing the expected keyboard and accessibility behavior.

3. LABEL FORM FIELDS

Example:

<label for="email">Email address</label>
<input
  id="email"
  name="email"
  type="email"
  autocomplete="email"
  required>

The label should clearly identify the field.

Placeholder text is not a substitute for a proper label because it disappears as the user enters information.

4. MAKE NAVIGATION CLEAR

Use descriptive navigation labels and a consistent structure.

Example:

<nav aria-label="Main navigation">
  <a href="index.html">Home</a>
  <a href="courses.html">Courses</a>
  <a href="contact.html">Contact</a>
</nav>

A visitor should be able to understand where each link leads.

5. KEYBOARD ACCESS

Users should be able to navigate interactive elements with a keyboard.

Provide visible focus indicators:

a:focus-visible,
button:focus-visible,
input:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 3px;
}

Do not remove focus outlines unless a clear, equally visible alternative is provided.

6. COLOR AND CONTRAST

Text should have sufficient contrast against its background.

Do not communicate a required state through color alone. Pair colors with labels, icons or explanatory text.

Example:
Instead of displaying only a red field border, provide a clear message such as "Enter a valid email address."

7. FORM ERRORS

Good error messages:
- Explain what went wrong.
- Identify the affected field.
- Explain how to correct the problem.
- Remain available long enough to be read.
- Do not unnecessarily erase valid user input.

Example:
"Enter an email address in the format name@example.com."

Never claim that a form has been submitted successfully unless the application has actually completed the submission.

8. RESPONSIVE FORMS

Forms should fit narrow screens and remain readable.

Example:

.form-group {
  display: grid;
  gap: 6px;
  margin-bottom: 18px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  max-width: 100%;
  padding: 12px;
  font: inherit;
}

Ensure that labels, buttons and error messages are not clipped on small screens.

9. ACCESSIBILITY CHECKLIST

- Meaningful page title.
- Logical heading structure.
- Semantic HTML.
- Labels associated with form controls.
- Descriptive links.
- Keyboard-accessible controls.
- Visible keyboard focus.
- Useful alternative text.
- Sufficient text contrast.
- Clear error messages.
- No essential information conveyed only through color.
- Responsive layout at different screen sizes.

Automated checks can identify some problems, but manual keyboard and screen-reader testing may still be needed.

10. PRACTICAL EXERCISE

Create a contact form with:
- A name field.
- An email field.
- A message field.
- Labels.
- Required-field validation.
- A submit button.
- Clear instructions.

MODEL ANSWER

<form>
  <div class="form-group">
    <label for="contact-name">Name</label>
    <input id="contact-name" name="name" required>
  </div>

  <div class="form-group">
    <label for="contact-email">Email address</label>
    <input
      id="contact-email"
      name="email"
      type="email"
      required>
  </div>

  <div class="form-group">
    <label for="contact-message">Message</label>
    <textarea
      id="contact-message"
      name="message"
      rows="5"
      required></textarea>
  </div>

  <button type="submit">Send message</button>
</form>

This is a form structure example. A real form also needs a working submission handler and appropriate server-side validation.

11. REVIEW QUESTIONS

1. What is web accessibility?
2. Why should form inputs have labels?
3. What is the difference between a button and a link?
4. Why are visible focus indicators important?
5. Why should error messages explain how to correct a problem?

KEY TAKEAWAY

Accessible design is part of professional web design. A page is not complete if some users cannot understand or operate it.
`
},
{
title: "11. Browser Debugging, Website Performance and Security Basics",
content: `
BROWSER DEBUGGING, WEBSITE PERFORMANCE AND SECURITY BASICS

LEARNING OBJECTIVES
- Use browser developer tools.
- Diagnose common HTML, CSS and JavaScript issues.
- Improve basic page performance.
- Understand secure frontend practices.
- Test a website before deployment.

1. BROWSER DEVELOPER TOOLS

Most modern browsers include developer tools.

Useful areas include:
- Elements or Inspector: Examine HTML and computed styles.
- Console: View JavaScript errors and diagnostic output.
- Network: Inspect resource requests and responses.
- Sources or Debugger: Inspect and step through JavaScript.
- Performance: Investigate certain loading and runtime problems.

The exact labels differ between browsers.

2. DEBUGGING CSS

If a style does not appear:
1. Inspect the element.
2. Check whether the intended CSS file loaded.
3. Check the selector.
4. Review computed styles.
5. Look for conflicting rules.
6. Check whether another declaration overrides the property.

Avoid repeatedly adding new rules without understanding the existing cascade.

3. DEBUGGING JAVASCRIPT

When an interaction fails:
1. Check the browser console.
2. Confirm the script loaded.
3. Confirm the element selector matches.
4. Inspect event listener behavior.
5. Check variable values.
6. Test a smaller example.

A useful debugging process changes one thing at a time and verifies the result.

4. NETWORK AND RESOURCE ERRORS

Common issues include:
- Incorrect file paths.
- Missing images.
- A CSS file returning a not-found response.
- A failed API request.
- An incorrect server address.
- Browser restrictions on cross-origin requests.

Inspect the failed request and its response before changing application logic.

5. PERFORMANCE BASICS

Improve loading and responsiveness by:
- Compressing and appropriately sizing images.
- Avoiding unnecessary libraries.
- Removing unused assets.
- Using efficient CSS and JavaScript.
- Loading only the resources needed.
- Avoiding expensive repeated operations.
- Testing on slower devices and connections.

Performance should be measured rather than judged solely by how fast a page feels on one device.

6. IMAGE FORMATS

Choose image formats appropriate to the content and browser support.

Photographs often benefit from modern compressed formats such as WebP or AVIF when supported.

Simple icons and illustrations may be suitable for SVG.

Always provide sensible dimensions and alternative text where appropriate.

7. SECURITY BASICS

Frontend code is visible to users. Never put secret API keys, database credentials or private server tokens in client-side JavaScript.

Other important principles:
- Treat user input as untrusted.
- Avoid unsafe HTML insertion.
- Use HTTPS for production sites.
- Validate sensitive operations on the server.
- Enforce authorization on protected backend routes.
- Avoid exposing confidential information in public files.
- Keep dependencies updated.
- Do not assume that hiding a button protects an endpoint.

8. API REQUESTS

A frontend may request data from a backend.

Example:

async function loadCourses() {
  try {
    const response = await fetch("/api/courses");

    if (!response.ok) {
      throw new Error("The course request failed.");
    }

    const courses = await response.json();
    console.log(courses);
  } catch (error) {
    console.error("Could not load courses:", error.message);
  }
}

The example assumes that the endpoint exists and returns JSON. Adapt the URL and response handling to the actual application.

9. PRE-DEPLOYMENT CHECKLIST

- All intended pages load.
- Navigation links work.
- Images load correctly.
- No unexpected console errors remain.
- Forms behave as intended.
- Responsive layouts have been checked.
- Accessibility basics have been reviewed.
- No secrets are included in public frontend code.
- API URLs point to the correct environment.
- Error states are understandable.
- The site has been tested after the production build or deployment.

10. PRACTICAL EXERCISE

A course page loads without styling, and its JavaScript button does not respond.

Write a debugging sequence.

MODEL ANSWER

1. Open developer tools.
2. Inspect the Network panel for failed CSS and JavaScript requests.
3. Verify the file paths and filenames.
4. Inspect the console for syntax or runtime errors.
5. Confirm the button's selector matches the HTML.
6. Verify that the event listener is registered.
7. Correct one issue at a time.
8. Reload and test again.

11. REVIEW QUESTIONS

1. What can the Network panel reveal?
2. How can computed styles help debug CSS?
3. Why must secret credentials stay out of frontend code?
4. What is server-side authorization?
5. Why should a website be tested after deployment?

KEY TAKEAWAY

Debug using evidence. Build performance, security and testing into the development process rather than treating them as optional final decorations.
`
},
{
title: "12. Website Planning, Content Design and Navigation Structure",
content: `
WEBSITE PLANNING, CONTENT DESIGN AND NAVIGATION STRUCTURE

LEARNING OBJECTIVES
- Identify website goals and audiences.
- Organize content into pages and sections.
- Create a simple sitemap.
- Plan navigation and user journeys.
- Define practical website requirements.

1. START WITH THE PURPOSE

Before designing a website, answer:
- What problem should the website solve?
- Who will use it?
- What information must be available?
- What should visitors be able to do?
- How will success be measured?

A website designed without a clear purpose often becomes a collection of unrelated sections.

2. IDENTIFY THE AUDIENCE

Different audiences have different needs.

A student may want course descriptions, lessons and assessments.

An administrator may need controls for managing course content.

A customer may want service information, pricing and a contact method.

Design the relevant user journey instead of assuming everyone visits for the same reason.

3. CREATE A SITEMAP

A sitemap is a structured outline of website pages.

Example:

Home
├── About
├── Courses
│   ├── Transcription
│   ├── Academic Writing
│   └── Programming
├── Resources
└── Contact

The sitemap helps determine which pages are needed and how users can move between them.

4. CONTENT HIERARCHY

Within a page, arrange information according to importance.

A course page might contain:
1. Course title.
2. Short description.
3. Learning objectives.
4. Course modules.
5. Lesson content.
6. Practice activities.
7. Assessment information.

Visitors should not need to search through unrelated content to find the main purpose of the page.

5. CALLS TO ACTION

A call to action invites the visitor to complete a useful task.

Examples:
- View courses.
- Read the lesson.
- Start assessment.
- Contact support.

Use clear, accurate labels. Do not present a decorative element as a working button if it does nothing.

6. USER JOURNEYS

A user journey describes the steps needed to complete a goal.

Example: Find a course.

1. Open the homepage.
2. Select Courses.
3. Review the course catalogue.
4. Open the chosen course.
5. Select a lesson.
6. Read the content.
7. Complete the practice activity.

Each step should be understandable and should not require unnecessary navigation.

7. CONTENT QUALITY

Website content should be:
- Accurate.
- Relevant.
- Readable.
- Organized.
- Consistent.
- Appropriate for the intended audience.
- Updated when necessary.

Use headings, short paragraphs and descriptive links to support scanning.

8. REQUIREMENTS CHECKLIST

Record:
- Required pages.
- Required features.
- User roles, if any.
- Content sources.
- Design preferences.
- Mobile requirements.
- Accessibility requirements.
- Data and privacy requirements.
- Hosting and deployment needs.
- Testing criteria.

Separate essential requirements from optional improvements.

9. PRACTICAL EXERCISE

Plan a small online training website with three courses.

Produce:
- A sitemap.
- A list of homepage sections.
- A learner journey.
- Three essential features.
- Three tests that would confirm the site works.

MODEL ANSWER

Sitemap:
Home
Courses
  - Course A
  - Course B
  - Course C
Contact

Homepage sections:
- Header and navigation.
- Welcome section.
- Course catalogue preview.
- How learning works.
- Contact information.
- Footer.

Learner journey:
Home → Courses → Select course → Select lesson → Study content.

Essential features:
- Working course links.
- Readable lesson content.
- Responsive navigation.

Tests:
- All course links open the correct pages.
- Lesson content fits mobile screens.
- Navigation can be used with a keyboard.

10. REVIEW QUESTIONS

1. Why define the audience before design?
2. What is a sitemap?
3. What is a user journey?
4. How should essential requirements differ from optional enhancements?
5. Why must calls to action work as advertised?

KEY TAKEAWAY

Plan the information architecture before polishing the interface. A well-organized site is easier to build, use and maintain.
`
},
{
title: "13. Practical Project: Build a Responsive Course Website",
content: `
PRACTICAL PROJECT: BUILD A RESPONSIVE COURSE WEBSITE

PROJECT GOAL

Build a small responsive website that presents a training course and lets visitors navigate its content.

The project combines HTML, CSS, layout, accessibility, JavaScript and testing.

PART 1: REQUIREMENTS

The website must contain:
- A header and navigation.
- A welcome section.
- At least three course cards.
- Clear links or actions.
- A course information section.
- A contact or information footer.
- A mobile-friendly layout.
- One functional JavaScript interaction.

Use original or properly authorized content and images.

PART 2: CREATE THE PROJECT FILES

Create a folder named course-website containing:

index.html
styles.css
script.js

Keep the files together for this exercise.

PART 3: HTML

Place the following in index.html:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta
    name="description"
    content="Explore practical online training courses.">
  <title>Learning Hub</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" defer></script>
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#home">Learning Hub</a>

      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero container" id="home">
      <p class="eyebrow">Practical learning</p>
      <h1>Build skills one lesson at a time.</h1>
      <p>
        Explore structured courses designed to develop useful skills.
      </p>
      <a class="primary-link" href="#courses">Explore courses</a>
    </section>

    <section class="container section" id="courses">
      <h2>Available courses</h2>

      <div class="course-grid">
        <article class="course-card">
          <h3>Transcription</h3>
          <p>Learn to turn audio into accurate written records.</p>
          <a href="#about">Learn more</a>
        </article>

        <article class="course-card">
          <h3>Programming</h3>
          <p>Understand programming logic and core concepts.</p>
          <a href="#about">Learn more</a>
        </article>

        <article class="course-card">
          <h3>Web Design</h3>
          <p>Learn to structure and style responsive websites.</p>
          <a href="#about">Learn more</a>
        </article>
      </div>
    </section>

    <section class="container section" id="about">
      <h2>About the learning hub</h2>
      <p>
        Study core concepts, practice with examples and improve
        through regular exercises.
      </p>

      <button id="tip-button" type="button">
        Show learning tip
      </button>

      <p id="tip-message" aria-live="polite"></p>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>Learning Hub | Practical skills for learners.</p>
    </div>
  </footer>
</body>
</html>

PART 4: CSS

Place the following in styles.css:

:root {
  font-family: Arial, sans-serif;
  color: #172033;
  background: #f8fafc;
  line-height: 1.6;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
}

a {
  color: #1d4ed8;
}

a:focus-visible,
button:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 3px;
}

.container {
  width: min(100% - 32px, 1100px);
  margin-inline: auto;
}

.site-header {
  background: #ffffff;
  border-bottom: 1px solid #dbe3ee;
}

.header-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-block: 18px;
}

.brand {
  color: #0f172a;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

nav a {
  text-decoration: none;
}

.hero {
  padding-block: 64px;
}

.eyebrow {
  color: #1d4ed8;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.hero h1 {
  max-width: 720px;
  font-size: clamp(2rem, 6vw, 3.5rem);
  line-height: 1.1;
  margin-block: 12px;
}

.hero p {
  max-width: 650px;
}

.primary-link {
  display: inline-block;
  margin-top: 16px;
  padding: 12px 18px;
  background: #1d4ed8;
  color: #ffffff;
  border-radius: 8px;
  text-decoration: none;
}

.section {
  padding-block: 36px;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 240px), 1fr)
  );
  gap: 20px;
}

.course-card {
  display: flex;
  flex-direction: column;
  padding: 22px;
  border: 1px solid #dbe3ee;
  border-radius: 14px;
  background: #ffffff;
}

.course-card h3 {
  margin-top: 0;
}

.course-card a {
  align-self: flex-start;
  margin-top: auto;
  padding-top: 12px;
}

button {
  padding: 12px 16px;
  border: 0;
  border-radius: 8px;
  background: #0f172a;
  color: #ffffff;
  font: inherit;
  cursor: pointer;
}

.site-footer {
  margin-top: 48px;
  padding-block: 24px;
  background: #0f172a;
  color: #ffffff;
}

@media (max-width: 480px) {
  .header-inner {
    align-items: flex-start;
    flex-direction: column;
  }

  .hero {
    padding-block: 40px;
  }
}

PART 5: JAVASCRIPT

Place the following in script.js:

const tipButton = document.querySelector("#tip-button");
const tipMessage = document.querySelector("#tip-message");

const learningTips = [
  "Practice a small concept before moving to the next one.",
  "Test your page on a mobile screen as well as a desktop.",
  "Use meaningful HTML and keep your CSS organized.",
  "Read browser error messages before changing code."
];

let currentTip = -1;

if (tipButton && tipMessage) {
  tipButton.addEventListener("click", () => {
    currentTip = (currentTip + 1) % learningTips.length;
    tipMessage.textContent = learningTips[currentTip];
  });
}

PART 6: TESTING

Open index.html in a browser or run it through a local development server.

Check:
1. The page title is correct.
2. Navigation links move to the correct sections.
3. The three course cards are visible.
4. The grid adjusts to narrow screens.
5. The learning-tip button displays a message.
6. Keyboard focus is visible.
7. Text remains readable on a phone.
8. The browser console has no unexpected errors.
9. The CSS and JavaScript files load correctly.

PART 7: IMPROVEMENT TASKS

After the basic site works:
- Add a dedicated page for each course.
- Create a reusable course-card style.
- Add a responsive navigation menu if needed.
- Improve the content and visual hierarchy.
- Add a contact form with appropriate validation.
- Test all links and interactive controls.
- Deploy to a hosting platform.

Do not add a form that appears to submit information if no submission handler exists.

ASSESSMENT RUBRIC: 100 MARKS

HTML structure and semantic markup: 20
CSS styling and layout: 20
Responsive behavior: 15
JavaScript functionality: 15
Accessibility: 10
Testing and debugging: 10
Code organization and explanation: 10

TOTAL: 100 MARKS

COURSE COMPLETION

A web designer must understand structure, visual presentation, responsive behavior, accessibility and testing.

The project is complete when the site works reliably across the expected screens and users can understand and operate its features.
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
    slug: "web-design-fundamentals"
  });

  if (!course) {
    throw new Error(
      "Course web-design-fundamentals was not found. No lessons were added."
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

  console.log("\n===== WEB DESIGN COURSE EXPANSION =====");
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
