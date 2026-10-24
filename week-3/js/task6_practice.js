/**
 * ============================================================================
 * Task 6: JavaScript Practice Programs
 * ============================================================================
 * Assignment : Week 3 - JavaScript Fundamentals (Part 1)
 * Objective  : 5+ Comprehensive practice programs combining Week 3 concepts:
 *              Variables, Data Types, Operators, Conditional Statements, Loops
 *
 * Programs:
 *   1. Factorial Calculation (Variables, Loop, Arithmetic, Conditions)
 *   2. Prime Number Checker & Range Generator (Modulo, Conditions, Nested Loops)
 *   3. Reverse a Number & Palindrome Checker (Arithmetic, While Loop, Conditions)
 *   4. Fibonacci Series Generator (Variables, For Loop, Arithmetic)
 *   5. Simple Arithmetic Calculator (Branching, Comparison, Zero Check)
 *   6. Classic FizzBuzz Algorithm with Statistics (Modulo, Logical AND, Counters)
 * ============================================================================
 */

console.log("==========================================");
console.log("   TASK 6: JAVASCRIPT PRACTICE PROGRAMS   ");
console.log("==========================================");

// ============================================================================
// PROGRAM 1: FACTORIAL CALCULATION
// ============================================================================
/*
  Description: The factorial of a non-negative integer n (denoted as n!)
  is the product of all positive integers less than or equal to n.
  Formula: n! = n * (n-1) * (n-2) * ... * 1. Factorial of 0 is 1.
*/

console.log("\n--- Program 1: Factorial Calculation ---");

let factorialInput = 5;
let factorialResult = 1;

if (factorialInput < 0) {
    console.log(`Error: Factorial does not exist for negative number (${factorialInput}).`);
} else if (factorialInput === 0 || factorialInput === 1) {
    console.log(`The factorial of ${factorialInput} is 1.`);
} else {
    let steps = [];
    for (let i = factorialInput; i >= 1; i--) {
        factorialResult *= i;
        steps.push(i);
    }
    console.log(`Input Number : ${factorialInput}`);
    console.log(`Calculation  : ${steps.join(" x ")}`);
    console.log(`Result (${factorialInput}!): ${factorialResult}`);
}

// Testing with another value (7!)
let secondInput = 7;
let secondResult = 1;
for (let i = 1; i <= secondInput; i++) {
    secondResult *= i;
}
console.log(`Verification : The factorial of ${secondInput} is ${secondResult}`);

// ============================================================================
// PROGRAM 2: PRIME NUMBER CHECKER & RANGE GENERATOR
// ============================================================================
/*
  Description: A prime number is a natural number greater than 1 that has
  no positive divisors other than 1 and itself.
*/

console.log("\n--- Program 2: Prime Number Checker & Range Generator ---");

// Part A: Checking a specific number
let testPrimeNum = 29;
let isPrime = true;

if (testPrimeNum <= 1) {
    isPrime = false;
} else {
    for (let factor = 2; factor <= Math.sqrt(testPrimeNum); factor++) {
        if (testPrimeNum % factor === 0) {
            isPrime = false;
            break; // No need to continue checking
        }
    }
}

if (isPrime) {
    console.log(`Result: ${testPrimeNum} is a PRIME number.`);
} else {
    console.log(`Result: ${testPrimeNum} is NOT a prime number.`);
}

// Part B: Finding all prime numbers in range 1 to 50
let primeList = [];
for (let candidate = 2; candidate <= 50; candidate++) {
    let candidateIsPrime = true;
    for (let divisor = 2; divisor <= Math.sqrt(candidate); divisor++) {
        if (candidate % divisor === 0) {
            candidateIsPrime = false;
            break;
        }
    }
    if (candidateIsPrime) {
        primeList.push(candidate);
    }
}
console.log("Prime numbers between 1 and 50:");
console.log(primeList.join(", "));

// ============================================================================
// PROGRAM 3: REVERSE A NUMBER & PALINDROME CHECKER
// ============================================================================
/*
  Description: Reverses an integer using arithmetic operations (% 10, / 10)
  and checks if the original number matches the reversed number (Palindrome).
  Example: 12321 reversed is 12321 -> Palindrome!
*/

console.log("\n--- Program 3: Reverse a Number & Palindrome Checker ---");

let originalNumber = 12321;
let tempNum = originalNumber;
let reversedNumber = 0;

while (tempNum > 0) {
    let lastDigit = tempNum % 10;                     // Extract last digit
    reversedNumber = (reversedNumber * 10) + lastDigit; // Append digit to reversed number
    tempNum = Math.floor(tempNum / 10);              // Remove last digit
}

console.log(`Original Number : ${originalNumber}`);
console.log(`Reversed Number : ${reversedNumber}`);

if (originalNumber === reversedNumber) {
    console.log(`Result          : Yes! ${originalNumber} is a PALINDROME.`);
} else {
    console.log(`Result          : No, ${originalNumber} is NOT a palindrome.`);
}

// Non-palindrome test case
let nonPalNum = 4829;
let tempNonPal = nonPalNum;
let revNonPal = 0;
while (tempNonPal > 0) {
    revNonPal = (revNonPal * 10) + (tempNonPal % 10);
    tempNonPal = Math.floor(tempNonPal / 10);
}
console.log(`Testing ${nonPalNum} -> Reversed: ${revNonPal} | Is Palindrome: ${nonPalNum === revNonPal}`);

// ============================================================================
// PROGRAM 4: FIBONACCI SERIES GENERATOR
// ============================================================================
/*
  Description: The Fibonacci series is a sequence where each number is the
  sum of the two preceding ones, usually starting with 0 and 1.
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
*/

console.log("\n--- Program 4: Fibonacci Series Generator ---");

let fibTermsCount = 10;
let firstTerm = 0;
let secondTerm = 1;
let fibSeries = [];

console.log(`Generating first ${fibTermsCount} terms of the Fibonacci sequence:`);

if (fibTermsCount >= 1) fibSeries.push(firstTerm);
if (fibTermsCount >= 2) fibSeries.push(secondTerm);

for (let termIndex = 3; termIndex <= fibTermsCount; termIndex++) {
    let nextTerm = firstTerm + secondTerm;
    fibSeries.push(nextTerm);
    firstTerm = secondTerm;
    secondTerm = nextTerm;
}

console.log("Fibonacci Series:", fibSeries.join(", "));

// ============================================================================
// PROGRAM 5: SIMPLE ARITHMETIC CALCULATOR
// ============================================================================
/*
  Description: Takes two numbers and an arithmetic operator (+, -, *, /, %, **)
  and calculates the result using conditional branches with error validation.
*/

console.log("\n--- Program 5: Simple Arithmetic Calculator ---");

let operandA = 36;
let operandB = 4;
let operation = "*"; // Try: '+', '-', '*', '/', '%', '**'
let calcResult;
let isValidOperation = true;

if (operation === "+") {
    calcResult = operandA + operandB;
} else if (operation === "-") {
    calcResult = operandA - operandB;
} else if (operation === "*") {
    calcResult = operandA * operandB;
} else if (operation === "/") {
    if (operandB === 0) {
        console.log("Error: Division by zero is undefined!");
        isValidOperation = false;
    } else {
        calcResult = operandA / operandB;
    }
} else if (operation === "%") {
    if (operandB === 0) {
        console.log("Error: Modulo by zero is undefined!");
        isValidOperation = false;
    } else {
        calcResult = operandA % operandB;
    }
} else if (operation === "**") {
    calcResult = operandA ** operandB;
} else {
    console.log(`Error: Unsupported operator '${operation}'`);
    isValidOperation = false;
}

if (isValidOperation) {
    console.log(`Calculation: ${operandA} ${operation} ${operandB} = ${calcResult}`);
}

// Quick test with division
let divA = 100, divB = 8;
console.log(`Division test: ${divA} / ${divB} = ${divA / divB}`);

// ============================================================================
// PROGRAM 6: THE CLASSIC FIZZBUZZ CHALLENGE (BONUS ALGORITHM)
// ============================================================================
/*
  Description: Iterate numbers 1 to 30:
  - If divisible by both 3 and 5 (15), print "FizzBuzz"
  - If divisible by 3, print "Fizz"
  - If divisible by 5, print "Buzz"
  - Otherwise, print the number
*/

console.log("\n--- Program 6: FizzBuzz Algorithm (1 to 20) with Stats ---");

let fizzCount = 0;
let buzzCount = 0;
let fizzBuzzCount = 0;
let plainNumberCount = 0;

for (let count = 1; count <= 20; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
        console.log(`Number ${count.toString().padStart(2, " ")}: FizzBuzz`);
        fizzBuzzCount++;
    } else if (count % 3 === 0) {
        console.log(`Number ${count.toString().padStart(2, " ")}: Fizz`);
        fizzCount++;
    } else if (count % 5 === 0) {
        console.log(`Number ${count.toString().padStart(2, " ")}: Buzz`);
        buzzCount++;
    } else {
        console.log(`Number ${count.toString().padStart(2, " ")}: ${count}`);
        plainNumberCount++;
    }
}

console.log("\n--- FizzBuzz Summary Statistics ---");
console.log(`Total FizzBuzz : ${fizzBuzzCount}`);
console.log(`Total Fizz     : ${fizzCount}`);
console.log(`Total Buzz     : ${buzzCount}`);
console.log(`Plain Numbers  : ${plainNumberCount}`);

console.log("\nTask 6 completed successfully!\n");
