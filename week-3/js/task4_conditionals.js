/**
 * ============================================================================
 * Task 4: Conditional Statements in JavaScript
 * ============================================================================
 * Assignment : Week 3 - JavaScript Fundamentals (Part 1)
 * Topics     : if, if...else, else if, Nested if, Comparison Conditions,
 *              Logical Conditions
 * Problems   :
 *   1. Checking positive, negative, or zero
 *   2. Checking even or odd number
 *   3. Checking eligibility based on age (voting & driving)
 *   4. Finding the greater of two or three numbers
 *   5. Assigning grades based on marks
 * ============================================================================
 */

console.log("==========================================");
console.log("    TASK 4: CONDITIONAL STATEMENTS        ");
console.log("==========================================");

// ==========================================
// 1. CHECKING POSITIVE, NEGATIVE, OR ZERO
// ==========================================

/*
  Concept: Using 'if...else if...else' chain with relational operators (> 0, < 0).
*/

console.log("\n--- Problem 1: Positive, Negative, or Zero Check ---");

let testNumber = -12;

console.log(`Input Number: ${testNumber}`);

if (testNumber > 0) {
    console.log(`Result: ${testNumber} is a POSITIVE number.`);
} else if (testNumber < 0) {
    console.log(`Result: ${testNumber} is a NEGATIVE number.`);
} else {
    console.log(`Result: The number is ZERO.`);
}

// Additional test case: Zero
let zeroTest = 0;
if (zeroTest > 0) {
    console.log(`Result: ${zeroTest} is positive.`);
} else if (zeroTest < 0) {
    console.log(`Result: ${zeroTest} is negative.`);
} else {
    console.log(`Result: ${zeroTest} is verified as ZERO.`);
}

// ==========================================
// 2. CHECKING EVEN OR ODD NUMBER
// ==========================================

/*
  Concept: A number is even if it is divisible by 2 with remainder 0 (num % 2 === 0).
*/

console.log("\n--- Problem 2: Even or Odd Number Check ---");

let candidateNum = 27;

console.log(`Input Number: ${candidateNum}`);

if (candidateNum % 2 === 0) {
    console.log(`Result: ${candidateNum} is an EVEN number.`);
} else {
    console.log(`Result: ${candidateNum} is an ODD number.`);
}

// Testing with an even number
let evenTest = 48;
if (evenTest % 2 === 0) {
    console.log(`Result: ${evenTest} is an EVEN number.`);
} else {
    console.log(`Result: ${evenTest} is an ODD number.`);
}

// ==========================================
// 3. CHECKING ELIGIBILITY BASED ON AGE
// ==========================================

/*
  Concept: Demonstrating simple 'if...else' and 'Nested if' structures.
  - Voting eligibility: age >= 18
  - Driving License: Requires age >= 18 AND passing driving test (Nested if)
*/

console.log("\n--- Problem 3: Age-based Eligibility (Voting & Driving) ---");

let citizenAge = 20;
let hasVoterId = true;
let hasPassedDrivingTest = true;

console.log(`Person Details -> Age: ${citizenAge}, Has Voter ID: ${hasVoterId}, Passed Driving Test: ${hasPassedDrivingTest}`);

// Part A: Voting Eligibility (Logical condition with &&)
if (citizenAge >= 18 && hasVoterId) {
    console.log("Voting Status: ELIGIBLE to vote in general elections.");
} else if (citizenAge >= 18 && !hasVoterId) {
    console.log("Voting Status: Age eligible, but requires Voter ID registration.");
} else {
    let yearsLeft = 18 - citizenAge;
    console.log(`Voting Status: NOT eligible to vote. Wait ${yearsLeft} more year(s).`);
}

// Part B: Driving License Evaluation using NESTED IF
console.log("\n* Driving License Evaluation (Nested If):");
if (citizenAge >= 18) {
    console.log("Age check passed (18+). Checking practical test qualification...");
    if (hasPassedDrivingTest) {
        console.log("-> Approved: Congratulations! Driving license issued.");
    } else {
        console.log("-> Pending: Age requirement met, but must pass driving test.");
    }
} else {
    console.log("-> Rejected: Minimum age requirement (18) not satisfied.");
}

// ==========================================
// 4. FINDING THE GREATER OF TWO OR THREE NUMBERS
// ==========================================

console.log("\n--- Problem 4: Finding Greater Numbers ---");

// Part A: Greater of Two Numbers
let valX = 45;
let valY = 72;

console.log(`Comparing two numbers: valX = ${valX}, valY = ${valY}`);

if (valX > valY) {
    console.log(`Result: valX (${valX}) is greater than valY (${valY}).`);
} else if (valY > valX) {
    console.log(`Result: valY (${valY}) is greater than valX (${valX}).`);
} else {
    console.log(`Result: Both numbers are EQUAL (${valX}).`);
}

// Part B: Greater of Three Numbers (Using Logical AND)
let numA = 85;
let numB = 92;
let numC = 78;

console.log(`\nComparing three numbers: numA = ${numA}, numB = ${numB}, numC = ${numC}`);

if (numA >= numB && numA >= numC) {
    console.log(`Result: numA (${numA}) is the greatest among the three.`);
} else if (numB >= numA && numB >= numC) {
    console.log(`Result: numB (${numB}) is the greatest among the three.`);
} else {
    console.log(`Result: numC (${numC}) is the greatest among the three.`);
}

// ==========================================
// 5. ASSIGNING GRADES BASED ON MARKS
// ==========================================

/*
  Concept: Multi-branch 'else if' ladder with range comparisons.
  Grading Scale:
    90 - 100 : Grade A+ (Outstanding)
    80 - 89  : Grade A  (Excellent)
    70 - 79  : Grade B  (Good)
    60 - 69  : Grade C  (Fair)
    50 - 59  : Grade D  (Pass)
    Below 50 : Grade F  (Fail)
*/

console.log("\n--- Problem 5: Student Grading System ---");

let studentMarks = 88;
let assignedGrade = "";
let remark = "";

console.log(`Student Marks: ${studentMarks}/100`);

if (studentMarks < 0 || studentMarks > 100) {
    console.log("Error: Invalid marks entered! Marks must be between 0 and 100.");
} else if (studentMarks >= 90) {
    assignedGrade = "A+";
    remark = "Outstanding Performance";
} else if (studentMarks >= 80) {
    assignedGrade = "A";
    remark = "Excellent Performance";
} else if (studentMarks >= 70) {
    assignedGrade = "B";
    remark = "Good Performance";
} else if (studentMarks >= 60) {
    assignedGrade = "C";
    remark = "Fair / Satisfactory Performance";
} else if (studentMarks >= 50) {
    assignedGrade = "D";
    remark = "Passed";
} else {
    assignedGrade = "F";
    remark = "Failed - Needs Improvement";
}

if (studentMarks >= 0 && studentMarks <= 100) {
    console.log(`Assigned Grade : ${assignedGrade}`);
    console.log(`Faculty Remark : ${remark}`);
}

console.log("\nTask 4 completed successfully!\n");
