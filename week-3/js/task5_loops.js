/**
 * ============================================================================
 * Task 5: Loops in JavaScript
 * ============================================================================
 * Assignment : Week 3 - JavaScript Fundamentals (Part 1)
 * Topics     : for loop, while loop, do...while loop, Loop with conditions,
 *              Increment and decrement in loops, break and continue
 * Problems   :
 *   1. Printing numbers from 1 to 10
 *   2. Printing even numbers
 *   3. Printing odd numbers
 *   4. Printing multiplication tables
 *   5. Finding the sum of numbers
 *   6. Printing numbers in reverse order
 * ============================================================================
 */

console.log("==========================================");
console.log("          TASK 5: LOOPS IN JAVASCRIPT     ");
console.log("==========================================");

// ==========================================
// 1. PRINTING NUMBERS FROM 1 TO 10 (FOR LOOP)
// ==========================================

/*
  'for' loop syntax:
  for (initialization; condition; increment/decrement) {
      // code to execute
  }
*/

console.log("\n--- Problem 1: Printing Numbers from 1 to 10 (for loop) ---");

let numbers1to10 = "";
for (let i = 1; i <= 10; i++) {
    numbers1to10 += i + (i < 10 ? ", " : "");
}
console.log("Numbers 1 to 10:", numbers1to10);

// ==========================================
// 2. PRINTING EVEN NUMBERS (WHILE LOOP & STEP INCREMENT)
// ==========================================

/*
  'while' loop syntax:
  while (condition) {
      // code
      // increment/decrement
  }
*/

console.log("\n--- Problem 2: Printing Even Numbers from 1 to 20 ---");

let evenNumbersOutput = "";
let currentEven = 2; // Starting from first positive even number

while (currentEven <= 20) {
    evenNumbersOutput += currentEven + (currentEven < 20 ? ", " : "");
    currentEven += 2; // Step increment by 2
}
console.log("Even numbers (2 to 20):", evenNumbersOutput);

// Alternative demonstration: Using modulo condition inside a loop
console.log("Verification via modulo (i % 2 === 0):");
let verifiedEvens = [];
for (let n = 1; n <= 10; n++) {
    if (n % 2 === 0) {
        verifiedEvens.push(n);
    }
}
console.log("Evens between 1 and 10:", verifiedEvens.join(", "));

// ==========================================
// 3. PRINTING ODD NUMBERS (FOR LOOP WITH CONDITION & CONTINUE)
// ==========================================

console.log("\n--- Problem 3: Printing Odd Numbers from 1 to 20 ---");

let oddNumbersOutput = "";

for (let j = 1; j <= 20; j++) {
    // If the number is even, skip it using 'continue'
    if (j % 2 === 0) {
        continue;
    }
    oddNumbersOutput += j + (j < 19 ? ", " : "");
}
console.log("Odd numbers (1 to 20):", oddNumbersOutput);

// ==========================================
// 4. PRINTING MULTIPLICATION TABLES
// ==========================================

/*
  Displaying the multiplication table of 7 from 1 to 10.
*/

console.log("\n--- Problem 4: Multiplication Table of 7 ---");

let tableNumber = 7;
console.log(`--- Multiplication Table for ${tableNumber} ---`);

for (let multiplier = 1; multiplier <= 10; multiplier++) {
    let product = tableNumber * multiplier;
    console.log(`${tableNumber} x ${multiplier.toString().padStart(2, " ")} = ${product}`);
}

// ==========================================
// 5. FINDING THE SUM OF NUMBERS
// ==========================================

/*
  Problem: Calculate the sum of the first N natural numbers (e.g., 1 to 100).
  Formula check: N * (N + 1) / 2 = 100 * 101 / 2 = 5050.
*/

console.log("\n--- Problem 5: Finding the Sum of Numbers (1 to 100) ---");

let targetN = 100;
let totalSum = 0;
let counter = 1;

while (counter <= targetN) {
    totalSum += counter;
    counter++; // Increment
}

console.log(`Sum of numbers from 1 to ${targetN} = ${totalSum}`);
console.log(`Mathematical formula verification: (${targetN} * ${targetN + 1}) / 2 = ${(targetN * (targetN + 1)) / 2}`);

// ==========================================
// 6. PRINTING NUMBERS IN REVERSE ORDER (DECREMENT)
// ==========================================

/*
  Demonstrating decrement operator (--) in a loop.
  Counting backwards from 10 down to 1.
*/

console.log("\n--- Problem 6: Printing Numbers in Reverse Order (10 to 1) ---");

let countdownOutput = "";
for (let k = 10; k >= 1; k--) {
    countdownOutput += k + (k > 1 ? " -> " : " -> Blastoff!");
}
console.log("Countdown:", countdownOutput);

// ==========================================
// 7. DEMONSTRATION OF 'do...while' LOOP
// ==========================================

/*
  'do...while' loop syntax:
  do {
      // executes AT LEAST ONCE regardless of condition
  } while (condition);
*/

console.log("\n--- 7. Demonstration of do...while Loop ---");

let iteration = 1;
do {
    console.log(`do...while executed iteration #${iteration} (Condition was true)`);
    iteration++;
} while (iteration <= 3);

// Guarantee of executing at least once even if initial condition is false
let falseConditionVar = 99;
do {
    console.log(`do...while executed once even though falseConditionVar (${falseConditionVar}) > 100 is FALSE.`);
} while (falseConditionVar > 100);

// ==========================================
// 8. LOOP WITH 'break' AND 'continue'
// ==========================================

console.log("\n--- 8. Loop with 'break' and 'continue' Controls ---");

console.log("Searching for the number 5 between 1 and 10 (early exit with 'break'):");
for (let val = 1; val <= 10; val++) {
    if (val === 5) {
        console.log(`Target number ${val} FOUND! Exiting loop immediately with 'break'.`);
        break; // Exits the loop completely
    }
    console.log(`Checking: ${val}...`);
}

console.log("\nTask 5 completed successfully!\n");
