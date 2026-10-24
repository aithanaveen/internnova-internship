/**
 * ============================================================================
 * Task 2: Variables & Data Types
 * ============================================================================
 * Assignment : Week 3 - JavaScript Fundamentals (Part 1)
 * Topics     : let, const, Variable Declaration, Variable Assignment,
 *              String, Number, Boolean, undefined, null, typeof operator
 * ============================================================================
 */

console.log("==========================================");
console.log("  TASK 2: VARIABLES & DATA TYPES IN JS    ");
console.log("==========================================");

// ==========================================
// 1. VARIABLE DECLARATION AND ASSIGNMENT
// ==========================================

/*
  - Variable Declaration : Telling the engine to allocate memory for an identifier.
  - Variable Assignment  : Storing a specific value inside that allocated memory.
  - Initialization       : Declaring and assigning a value at the same time.
*/

console.log("\n--- 1. Variable Declaration & Assignment ---");

// Step 1: Declaration without assignment
let candidateName;
console.log("Value after declaration but before assignment:", candidateName); // undefined

// Step 2: Assignment
candidateName = "Aitha Venkata Naveen";
console.log("Value after assignment:", candidateName);

// Step 3: Combined Declaration & Assignment (Initialization)
let candidateRole = "Web Development Intern";
console.log("Initialized variable:", candidateRole);

// ==========================================
// 2. 'let' vs 'const' KEYWORDS
// ==========================================

/*
  - 'let'   : Allows reassignment. Useful when variable values change over time.
  - 'const' : Short for constant. Value CANNOT be reassigned after initialization.
              Must be initialized during declaration.
*/

console.log("\n--- 2. 'let' vs 'const' Demonstration ---");

// Using 'let' - Value can change
let currentScore = 85;
console.log("Initial Score (let):", currentScore);
currentScore = 95; // Reassignment is permitted
console.log("Updated Score (let):", currentScore);

// Using 'const' - Value remains constant
const MAXIMUM_MARKS = 100;
const BATCH_CODE = "INTERNNOVA-WD-2026";
console.log("Maximum Marks (const):", MAXIMUM_MARKS);
console.log("Batch Code (const):", BATCH_CODE);

// Attempting to reassign a const will throw a TypeError:
// MAXIMUM_MARKS = 105; // Uncaught TypeError: Assignment to constant variable.
console.log("Note: Reassigning a 'const' variable throws a TypeError.");

// ==========================================
// 3. JAVASCRIPT PRIMITIVE DATA TYPES
// ==========================================

console.log("\n--- 3. JavaScript Data Types ---");

// A. String: Sequence of characters enclosed in quotes ('', "", or ``)
let courseTitle = "JavaScript Fundamentals"; // Double quotes
let mentorName = 'Rahul Sharma';             // Single quotes
let welcomeGreeting = `Hello, ${mentorName}! Welcome to ${courseTitle}.`; // Template literal

console.log("String Example 1:", courseTitle);
console.log("String Example 2:", mentorName);
console.log("String Template Literal:", welcomeGreeting);

// B. Number: Represents both integers and floating-point numbers
let userAge = 22;               // Integer
let assignmentPercentage = 94.5; // Floating-point decimal
let temperatureCelsius = -5;    // Negative number
let notANumber = 0 / 0;         // NaN (Not-a-Number, invalid math operation)
let infiniteValue = 10 / 0;     // Infinity

console.log("Number (Integer):", userAge);
console.log("Number (Float):", assignmentPercentage);
console.log("Number (Negative):", temperatureCelsius);
console.log("Number (NaN):", notANumber);
console.log("Number (Infinity):", infiniteValue);

// C. Boolean: Logical entity representing true or false
let isAssignmentSubmitted = true;
let isPaymentPending = false;

console.log("Boolean (true):", isAssignmentSubmitted);
console.log("Boolean (false):", isPaymentPending);

// D. Undefined: Variable declared but not assigned a value
let projectSubmissionDate;
console.log("Undefined Variable:", projectSubmissionDate);

// E. Null: Represents intentional absence of any object or value
let certificateId = null; // No certificate assigned yet
console.log("Null Variable (empty/intentional absence):", certificateId);

// ==========================================
// 4. CHECKING DATA TYPES USING 'typeof'
// ==========================================

/*
  The 'typeof' operator returns a string indicating the type
  of the unevaluated operand.
*/

console.log("\n--- 4. Checking Data Types with 'typeof' ---");

console.log("typeof candidateName        :", typeof candidateName);        // "string"
console.log("typeof currentScore         :", typeof currentScore);         // "number"
console.log("typeof assignmentPercentage :", typeof assignmentPercentage); // "number"
console.log("typeof isAssignmentSubmitted:", typeof isAssignmentSubmitted);// "boolean"
console.log("typeof projectSubmissionDate:", typeof projectSubmissionDate);// "undefined"
console.log("typeof certificateId        :", typeof certificateId);        // "object" (Known JS quirk)

console.log("\n* Note on 'typeof null': In JavaScript, 'typeof null' returns 'object'.");
console.log("  This is a well-known legacy quirk/bug from the initial release of JavaScript,");
console.log("  kept for backwards compatibility. 'null' is indeed a primitive type.");

// ==========================================
// 5. REAL-WORLD STUDENT PROFILE EXAMPLE
// ==========================================

console.log("\n--- 5. Real-World Student Record Example ---");

const studentId = 1042;
let fullName = "Aitha Venkata Naveen";
let age = 21;
let gpa = 8.85;
let isEnrolled = true;
let graduationYear; // undefined
let scholarshipDetails = null; // null (not awarded)

console.log("--- Student Card Summary ---");
console.log(`ID         : ${studentId} (Type: ${typeof studentId})`);
console.log(`Name       : ${fullName} (Type: ${typeof fullName})`);
console.log(`Age        : ${age} (Type: ${typeof age})`);
console.log(`GPA        : ${gpa} (Type: ${typeof gpa})`);
console.log(`Enrolled   : ${isEnrolled} (Type: ${typeof isEnrolled})`);
console.log(`Grad Year  : ${graduationYear} (Type: ${typeof graduationYear})`);
console.log(`Scholarship: ${scholarshipDetails} (Type: ${typeof scholarshipDetails})`);
console.log("\nTask 2 completed successfully!\n");
