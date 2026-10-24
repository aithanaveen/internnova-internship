/**
 * ============================================================================
 * Task 3: Operators in JavaScript
 * ============================================================================
 * Assignment : Week 3 - JavaScript Fundamentals (Part 1)
 * Topics     : Arithmetic Operators, Assignment Operators, Comparison Operators,
 *              Logical Operators, Increment Operator, Decrement Operator
 * ============================================================================
 */

console.log("==========================================");
console.log("      TASK 3: JAVASCRIPT OPERATORS        ");
console.log("==========================================");

// ==========================================
// 1. ARITHMETIC OPERATORS
// ==========================================

/*
  Used to perform mathematical calculations:
  +  : Addition (also used for string concatenation)
  -  : Subtraction
  *  : Multiplication
  /  : Division
  %  : Modulus (Remainder)
  ** : Exponentiation (Power)
*/

console.log("\n--- 1. Arithmetic Operators ---");

let num1 = 20;
let num2 = 6;

console.log(`Operands: num1 = ${num1}, num2 = ${num2}`);
console.log(`Addition (num1 + num2)       : ${num1 + num2}`);       // 26
console.log(`Subtraction (num1 - num2)    : ${num1 - num2}`);       // 14
console.log(`Multiplication (num1 * num2) : ${num1 * num2}`);       // 120
console.log(`Division (num1 / num2)       : ${num1 / num2}`);       // 3.3333333333333335
console.log(`Modulus / Remainder (num1 % num2) : ${num1 % num2}`);  // 2
console.log(`Exponentiation (num2 ** 3)   : ${num2 ** 3}`);         // 6 ^ 3 = 216

// String Concatenation with '+'
let greeting = "Hello " + "Internnova!";
console.log("String Concatenation (+):", greeting);

// ==========================================
// 2. ASSIGNMENT OPERATORS
// ==========================================

/*
  Used to assign and update variable values:
  =   : Simple Assignment
  +=  : Add and Assign (x += y is x = x + y)
  -=  : Subtract and Assign (x -= y is x = x - y)
  *=  : Multiply and Assign (x *= y is x = x * y)
  /=  : Divide and Assign (x /= y is x = x / y)
  %=  : Modulus and Assign (x %= y is x = x % y)
  **= : Exponent and Assign (x **= y is x = x ** y)
*/

console.log("\n--- 2. Assignment Operators ---");

let balance = 100;
console.log("Initial balance =", balance);

balance += 50; // balance = balance + 50
console.log("After balance += 50 :", balance); // 150

balance -= 30; // balance = balance - 30
console.log("After balance -= 30 :", balance); // 120

balance *= 2;  // balance = balance * 2
console.log("After balance *= 2  :", balance); // 240

balance /= 4;  // balance = balance / 4
console.log("After balance /= 4  :", balance); // 60

balance %= 7;  // balance = balance % 7
console.log("After balance %= 7  :", balance); // 4

balance **= 3; // balance = balance ** 3 (4 ** 3)
console.log("After balance **= 3 :", balance); // 64

// ==========================================
// 3. COMPARISON OPERATORS
// ==========================================

/*
  Used to compare two values and return a boolean (true / false):
  ==  : Loose equality (compares values with type coercion)
  === : Strict equality (compares both value AND data type) - Best Practice!
  !=  : Loose inequality
  !== : Strict inequality
  >   : Greater than
  <   : Less than
  >=  : Greater than or equal to
  <=  : Less than or equal to
*/

console.log("\n--- 3. Comparison Operators ---");

let valA = 10;
let valB = "10";
let valC = 15;

console.log(`valA = ${valA} (number), valB = "${valB}" (string), valC = ${valC} (number)`);

// Loose Equality vs Strict Equality
console.log(`Loose Equality  (valA == valB)  : ${valA == valB}  (type coerced)`);
console.log(`Strict Equality (valA === valB) : ${valA === valB} (strictly checks type)`);

// Loose Inequality vs Strict Inequality
console.log(`Loose Inequality  (valA != valB)  : ${valA != valB}`);
console.log(`Strict Inequality (valA !== valB) : ${valA !== valB}`);

// Relational comparisons
console.log(`Greater than (valC > valA)        : ${valC > valA}`);  // true
console.log(`Less than (valA < valC)           : ${valA < valC}`);  // true
console.log(`Greater than or equal (10 >= 10)  : ${valA >= 10}`);   // true
console.log(`Less than or equal (valC <= 14)   : ${valC <= 14}`);   // false

// ==========================================
// 4. LOGICAL OPERATORS
// ==========================================

/*
  Used to determine logic between variables or expressions:
  && : Logical AND (returns true if ALL conditions are true)
  || : Logical OR  (returns true if AT LEAST ONE condition is true)
  !  : Logical NOT (inverts the boolean truth value)
*/

console.log("\n--- 4. Logical Operators ---");

let hasHighSchoolDiploma = true;
let hasCollegeDegree = false;
let workExperienceYears = 3;

// Logical AND (&&)
let eligibleForSeniorRole = hasCollegeDegree && (workExperienceYears >= 5);
console.log(`Logical AND (Degree && Exp >= 5) : ${eligibleForSeniorRole}`); // false

// Logical OR (||)
let eligibleForInternship = hasHighSchoolDiploma || hasCollegeDegree;
console.log(`Logical OR  (Diploma || Degree)   : ${eligibleForInternship}`); // true

// Logical NOT (!)
console.log(`Logical NOT (!hasCollegeDegree)    : ${!hasCollegeDegree}`);   // true
console.log(`Logical NOT (!hasHighSchoolDiploma): ${!hasHighSchoolDiploma}`);// false

// Combined logical expression
let isQualified = (workExperienceYears > 2 && hasHighSchoolDiploma) || hasCollegeDegree;
console.log(`Complex condition evaluation       : ${isQualified}`);          // true

// ==========================================
// 5. INCREMENT & DECREMENT OPERATORS
// ==========================================

/*
  Used to increase or decrease a numeric value by 1:
  Pre-Increment  (++x) : Increments first, then returns the new value.
  Post-Increment (x++) : Returns original value first, then increments.
  Pre-Decrement  (--y) : Decrements first, then returns the new value.
  Post-Decrement (y--) : Returns original value first, then decrements.
*/

console.log("\n--- 5. Increment Operator (Pre vs Post) ---");

let postInc = 5;
console.log("Initial postInc value:", postInc);
console.log("Evaluated in console.log(postInc++):", postInc++); // prints 5
console.log("Value after post-increment:", postInc);             // now 6

let preInc = 5;
console.log("\nInitial preInc value:", preInc);
console.log("Evaluated in console.log(++preInc):", ++preInc);   // increments to 6, then prints 6
console.log("Value after pre-increment:", preInc);              // 6

console.log("\n--- 6. Decrement Operator (Pre vs Post) ---");

let postDec = 10;
console.log("Initial postDec value:", postDec);
console.log("Evaluated in console.log(postDec--):", postDec--); // prints 10
console.log("Value after post-decrement:", postDec);            // now 9

let preDec = 10;
console.log("\nInitial preDec value:", preDec);
console.log("Evaluated in console.log(--preDec):", --preDec);   // decrements to 9, then prints 9
console.log("Value after pre-decrement:", preDec);              // 9

console.log("\nTask 3 completed successfully!\n");
