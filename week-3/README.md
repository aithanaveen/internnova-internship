# Week 3 Assignment: JavaScript Fundamentals (Part 1)

**Student Name:** Aitha Venkata Naveen  
**Internship:** Internnova Web Development Internship  
**GitHub Profile:** [github.com/aithanaveen](https://github.com/aithanaveen)  
**GitHub Repository:** [aithanaveen/internnova-internship](https://github.com/aithanaveen/internnova-internship)  
**Duration:** 1 Week (7 Days)  
**Total Marks:** 100 / 100  
**Submission Format:** ZIP Folder (`AithaVenkataNaveen-Week3-Assignment.zip` / `WD_Week3_AithaNaveen.zip`) + Google Drive Link  

---

## 🎯 Objective

The objective of this assignment is to master the core fundamentals of JavaScript, including:
1. JavaScript syntax, console output, and comments
2. Variables (`let`, `const`) and primitive data types
3. Operators (arithmetic, assignment, comparison, logical, increment/decrement)
4. Conditional statements (`if`, `if...else`, `else if`, nested `if`)
5. Loops (`for`, `while`, `do...while`, loop control with `break` and `continue`)
6. Algorithmic problem-solving combining all fundamental concepts

---

## 📁 Project Directory Structure

```text
week-3/
├── index.html                  # Comprehensive UI dashboard & Live Console Viewer
├── task1_basics.html           # Dedicated HTML demonstration for Task 1 JS linking
├── README.md                   # Full documentation, concepts, and run guide
└── js/
    ├── task1_basics.js         # Task 1: JavaScript Basics (15 Marks)
    ├── task2_variables.js      # Task 2: Variables & Data Types (20 Marks)
    ├── task3_operators.js      # Task 3: Operators (20 Marks)
    ├── task4_conditionals.js   # Task 4: Conditional Statements (20 Marks)
    ├── task5_loops.js          # Task 5: Loops (20 Marks)
    └── task6_practice.js       # Task 6: 6 Practice Programs (5 Marks)
```

---

## 📊 Marks Distribution & Task Overview

| Task | Component | Key Topics Covered | Marks |
| :--- | :--- | :--- | :---: |
| **Task 1** | JavaScript Basics | Syntax, `console.log()`, Single/Multi-line comments, HTML linking, statements | 15 |
| **Task 2** | Variables & Data Types | `let`, `const`, declarations, assignments, 5 primitive types, `typeof` | 20 |
| **Task 3** | Operators | Arithmetic, Assignment, Strict/Loose Comparison, Logical, Increment/Decrement | 20 |
| **Task 4** | Conditional Statements | Positive/Negative/Zero, Even/Odd, Age Eligibility, Greater Number, Grading | 20 |
| **Task 5** | Loops | `for`, `while`, `do...while`, counting, even/odd, table, sum, reverse order | 20 |
| **Task 6** | Practice Programs | Factorial, Prime Checker, Palindrome, Fibonacci, Calculator, FizzBuzz | 5 |
| **TOTAL** | | **Comprehensive Full Implementation** | **100** |

---

## 🛠️ Detailed Task Implementations

### Task 1: JavaScript Basics (`js/task1_basics.js` & `task1_basics.html`)
- **Syntax & Statements:** Sequential execution, case-sensitivity, semicolon usage.
- **Comments:** Single-line (`//`) and multi-line (`/* ... */`).
- **`console.log()`:** Logging strings, numbers, evaluated expressions, and formatted template literals.
- **HTML Linking:** Demonstrates `<script src="js/task1_basics.js"></script>` in `task1_basics.html`.

### Task 2: Variables & Data Types (`js/task2_variables.js`)
- **`let` vs `const`:** Block-scoping, reassignment capability with `let`, and immutability with `const`.
- **Primitive Data Types:**
  - `String` (single quotes, double quotes, template literals)
  - `Number` (integers, floating decimals, `NaN`, `Infinity`)
  - `Boolean` (`true`, `false`)
  - `undefined` (declared without value)
  - `null` (intentional absence of value)
- **`typeof` Operator:** Type inspection and documentation of JavaScript's legacy `typeof null === 'object'` behavior.
- **Real-world Example:** Student profile record model.

### Task 3: Operators (`js/task3_operators.js`)
- **Arithmetic Operators:** `+`, `-`, `*`, `/`, `%` (modulus), `**` (exponentiation).
- **Assignment Operators:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`.
- **Comparison Operators:** Loose equality (`==`), Strict equality (`===`), Inequality (`!=`, `!==`), Relational (`>`, `<`, `>=`, `<=`).
- **Logical Operators:** Logical AND (`&&`), Logical OR (`||`), Logical NOT (`!`), and combined expressions.
- **Increment & Decrement Operators:** Detailed side-by-side walkthrough of Pre-increment (`++x`), Post-increment (`x++`), Pre-decrement (`--y`), and Post-decrement (`y--`).

### Task 4: Conditional Statements (`js/task4_conditionals.js`)
- **Problem 1:** Checking whether a number is positive, negative, or zero using `if...else if...else`.
- **Problem 2:** Checking even or odd numbers using `num % 2 === 0`.
- **Problem 3:** Age-based eligibility check for voting and nested `if` validation for driving license issuance.
- **Problem 4:** Finding the greater of two numbers and the greater of three numbers using relational and logical AND operators.
- **Problem 5:** Multi-tiered student grading system (A+, A, B, C, D, F) with input range validation.

### Task 5: Loops (`js/task5_loops.js`)
- **Problem 1:** Printing numbers from 1 to 10 using a `for` loop.
- **Problem 2:** Printing even numbers (2 to 20) using a `while` loop with step increment (`+= 2`).
- **Problem 3:** Printing odd numbers (1 to 20) with a `for` loop and conditional `continue`.
- **Problem 4:** Printing multiplication tables (Table of 7 up to 10) with formatted output.
- **Problem 5:** Calculating the sum of first N natural numbers (1 to 100 = 5050) using a loop and formula verification.
- **Problem 6:** Printing numbers in reverse order (10 down to 1) using decrement (`--`).
- **Additional Demonstrations:** Guaranteed execution in `do...while` loop and early exit using `break`.

### Task 6: Practice Programs (`js/task6_practice.js`)
- **Program 1: Factorial of a Number** (`n!` using loop, handles 0, negative check).
- **Program 2: Prime Number Checker & Range Generator** (checks prime status and generates all primes between 1 and 50).
- **Program 3: Reverse a Number & Palindrome Checker** (digit extraction using `% 10` and `/ 10`, verifies palindrome).
- **Program 4: Fibonacci Series Generator** (generates first N terms of sequence starting from 0, 1).
- **Program 5: Simple Arithmetic Calculator** (branching calculator supporting `+`, `-`, `*`, `/`, `%`, `**` with zero-division safeguard).
- **Program 6 (Bonus): Classic FizzBuzz Algorithm** (evaluates numbers 1 to 20 with modulo and outputs summary statistics).

---

## 🚀 How to Run the Programs

### Method 1: Using Node.js (Terminal)
Run each task file directly from your terminal:

```bash
# Navigate to the week-3 folder
cd "week-3"

# Run individual task files
node js/task1_basics.js
node js/task2_variables.js
node js/task3_operators.js
node js/task4_conditionals.js
node js/task5_loops.js
node js/task6_practice.js
```

### Method 2: In Any Web Browser
1. Double click or open `index.html` in your favorite browser (Chrome, Edge, Firefox, Safari).
2. The page provides a built-in synchronized **Live Execution Terminal** showing the real-time execution of all tasks.
3. Open the browser's Developer Tools by pressing <kbd>F12</kbd> or <kbd>Ctrl + Shift + I</kbd> and navigate to the **Console** tab to view the native browser console output.
4. Open `task1_basics.html` to review the dedicated HTML script linking demonstration.

---

## 📦 Submission Details

- **Submission ZIP Name:** `WD_Week3_NaveenAitha.zip`
- **ZIP Contents:**
  - `index.html`
  - `task1_basics.html`
  - `README.md`
  - `js/task1_basics.js`
  - `js/task2_variables.js`
  - `js/task3_operators.js`
  - `js/task4_conditionals.js`
  - `js/task5_loops.js`
  - `js/task6_practice.js`
- **Google Drive Sharing:** Set permissions to **"Anyone with the link can view"**.
