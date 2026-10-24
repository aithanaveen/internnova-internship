/**
 * ============================================================================
 * Task 1: JavaScript Basics
 * ============================================================================
 * Assignment : Week 3 - JavaScript Fundamentals (Part 1)
 * Topics     : JavaScript Syntax, console.log(), Single-line & Multi-line
 *              Comments, Linking JS with HTML, Basic JavaScript Statements
 * ============================================================================
 */

// ==========================================
// 1. COMMENTS IN JAVASCRIPT
// ==========================================

// This is a single-line comment in JavaScript.
// Single-line comments start with two forward slashes (//).
// Any text after // on the same line is ignored by the JavaScript engine.

/*
  This is a multi-line comment in JavaScript.
  Multi-line comments start with /* and end with * /.
  They are useful for providing detailed explanations,
  documenting complex logic, or temporarily disabling blocks of code.
*/

console.log("==========================================");
console.log("  TASK 1: JAVASCRIPT BASICS DEMONSTRATION ");
console.log("==========================================");

// ==========================================
// 2. JAVASCRIPT SYNTAX & BASIC STATEMENTS
// ==========================================

/*
  JavaScript Syntax Rules:
  - JavaScript is case-sensitive (e.g., 'myVariable' is different from 'myvariable').
  - Statements are individual instructions executed by the browser/engine.
  - Semicolons (;) are used to terminate statements (recommended best practice).
  - Code is executed sequentially from top to bottom.
*/

// Basic statements: variable declarations and value assignments
var welcomeMessage; // Statement 1: Declaration
welcomeMessage = "Welcome to JavaScript Fundamentals!"; // Statement 2: Assignment

// Displaying message in the console
console.log(welcomeMessage);

// ==========================================
// 3. USING console.log() FOR OUTPUT
// ==========================================

/*
  The console.log() method is used to print messages, variable values,
  or debug information directly to the developer console.
*/

// Printing simple strings
console.log("\n--- console.log() Examples ---");
console.log("Hello, World! JavaScript is running successfully.");

// Printing numbers and mathematical evaluations
console.log("Number output:", 100);
console.log("Math evaluation (25 + 75):", 25 + 75);

// Printing multiple values separated by commas
var studentName = "Aitha Venkata Naveen";
var internshipWeek = 3;
var totalMarks = 100;
console.log("Student:", studentName, "| Week:", internshipWeek, "| Target Marks:", totalMarks);

// String interpolation / formatted output using template literals
console.log(`Formatted Output: ${studentName} is completing Week ${internshipWeek} tasks.`);

// ==========================================
// 4. LINKING JAVASCRIPT WITH AN HTML FILE
// ==========================================

/*
  How JavaScript is linked with an HTML document:
  1. Inline Script   : Placed directly within an HTML tag (e.g., onclick="alert('Hi')") - Not recommended.
  2. Internal Script : Placed inside <script>...</script> tags within the HTML <head> or <body>.
  3. External Script : Stored in a separate .js file and linked using the <script src="path.js"></script> tag.
  
  Example HTML linking syntax:
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>JS Linking Demo</title>
      <!-- External script linked in head or bottom of body -->
      <script src="js/task1_basics.js" defer></script>
  </head>
  <body>
      <h1>JavaScript Basics</h1>
  </body>
  </html>
*/

console.log("\n--- HTML Linking Information ---");
console.log("JavaScript successfully executed from external file: 'js/task1_basics.js'");
console.log("Linked via HTML <script src=\"js/task1_basics.js\"></script> tag.");

// ==========================================
// 5. DEMONSTRATION OF STATEMENT EXECUTION ORDER
// ==========================================

console.log("\n--- Sequential Statement Execution ---");
console.log("Step 1: Application initialization");
console.log("Step 2: Processing data");
console.log("Step 3: Generating output");
console.log("Step 4: Task 1 completed successfully!\n");
