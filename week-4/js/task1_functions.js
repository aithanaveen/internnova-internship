/**
 * ============================================================================
 * WEEK 4 - TASK 1: JAVASCRIPT FUNCTIONS (20 Marks)
 * ============================================================================
 * Concepts Demonstrated:
 *  1. Function Declaration
 *  2. Function Parameters & Arguments
 *  3. Return Values (Primitive & Complex Objects)
 *  4. Multiple Functions (Composition & Modular Pipelines)
 *  5. Arrow Functions (ES6 Syntax, implicit & explicit returns)
 *  6. Practical Real-World Scenarios:
 *     - Student Marks & Grade Calculator
 *     - E-Commerce Price & Tax Invoice Calculator
 *     - Dynamic Personalized Greeting Generator
 *     - Financial Interest / Result Calculator
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. Function Declaration, Parameters, Arguments & Return Values
// ----------------------------------------------------------------------------

/**
 * Calculates student total marks, percentage, grade, and qualification status.
 * @param {string} studentName - The name of the student (Parameter)
 * @param {number[]} marksArray - Array of scores scored by the student (Parameter)
 * @param {number} maxPerSubject - Maximum possible score per subject (Default parameter: 100)
 * @returns {Object} Comprehensive evaluation summary (Return Value)
 */
function calculateStudentPerformance(studentName, marksArray, maxPerSubject = 100) {
  // Input validation
  if (!marksArray || marksArray.length === 0) {
    return {
      studentName,
      error: "Marks array cannot be empty."
    };
  }

  // Calculate total marks scored
  let totalScored = 0;
  for (let i = 0; i < marksArray.length; i++) {
    totalScored += Number(marksArray[i]);
  }

  const subjectCount = marksArray.length;
  const maxTotal = subjectCount * maxPerSubject;
  const percentage = Number(((totalScored / maxTotal) * 100).toFixed(2));

  // Determine Letter Grade and Performance Remarks
  let grade = "F";
  let status = "Needs Improvement";
  let isPassed = false;

  if (percentage >= 90) {
    grade = "A+";
    status = "Outstanding / Distinction";
    isPassed = true;
  } else if (percentage >= 80) {
    grade = "A";
    status = "Excellent";
    isPassed = true;
  } else if (percentage >= 70) {
    grade = "B";
    status = "Very Good";
    isPassed = true;
  } else if (percentage >= 60) {
    grade = "C";
    status = "Good";
    isPassed = true;
  } else if (percentage >= 50) {
    grade = "D";
    status = "Passed";
    isPassed = true;
  } else {
    grade = "F";
    status = "Failed";
    isPassed = false;
  }

  // Return value: An informative JavaScript object
  return {
    studentName,
    subjectCount,
    totalScored,
    maxTotal,
    percentage,
    grade,
    status,
    isPassed
  };
}

// ----------------------------------------------------------------------------
// 2. Multiple Functions (Modular Function Pipeline & Composition)
// Scenario: E-Commerce Invoice Calculation Pipeline
// ----------------------------------------------------------------------------

/**
 * Step 1: Calculates subtotal from unit price and quantity.
 */
function calculateSubtotal(unitPrice, quantity) {
  return unitPrice * quantity;
}

/**
 * Step 2: Calculates discount amount based on discount percentage.
 */
function calculateDiscount(subtotal, discountRate) {
  if (discountRate < 0 || discountRate > 100) return 0;
  return (subtotal * discountRate) / 100;
}

/**
 * Step 3: Calculates sales tax on the discounted amount.
 */
function calculateTax(taxableAmount, taxRate = 18) {
  return (taxableAmount * taxRate) / 100;
}

/**
 * Step 4: Calculates shipping fee based on location and final amount.
 */
function calculateShipping(taxedAmount, isExpress = false) {
  if (taxedAmount >= 1500) return 0; // Free shipping for orders >= 1500
  return isExpress ? 150 : 60;
}

/**
 * Master Pipeline Function: Coordinates multiple functions to compute the complete invoice.
 */
function generateOrderInvoice(productName, unitPrice, quantity, discountRate = 10, taxRate = 18, isExpress = false) {
  // Call multiple modular functions sequentially
  const subtotal = calculateSubtotal(unitPrice, quantity);
  const discountAmount = calculateDiscount(subtotal, discountRate);
  const netAfterDiscount = subtotal - discountAmount;
  const taxAmount = calculateTax(netAfterDiscount, taxRate);
  const shippingFee = calculateShipping(netAfterDiscount + taxAmount, isExpress);
  const grandTotal = netAfterDiscount + taxAmount + shippingFee;

  return {
    productName,
    unitPrice: Number(unitPrice.toFixed(2)),
    quantity,
    subtotal: Number(subtotal.toFixed(2)),
    discountRate: `${discountRate}%`,
    discountAmount: Number(discountAmount.toFixed(2)),
    taxRate: `${taxRate}%`,
    taxAmount: Number(taxAmount.toFixed(2)),
    shippingFee: Number(shippingFee.toFixed(2)),
    grandTotal: Number(grandTotal.toFixed(2))
  };
}

// ----------------------------------------------------------------------------
// 3. Arrow Functions (ES6 Syntax)
// ----------------------------------------------------------------------------

/**
 * Arrow Function 1: Formats dynamic personalized greetings based on time and role.
 */
const generateGreeting = (userName, role = "Student", hour = new Date().getHours()) => {
  let timeGreeting = "Hello";
  if (hour >= 5 && hour < 12) {
    timeGreeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    timeGreeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    timeGreeting = "Good Evening";
  } else {
    timeGreeting = "Good Night";
  }
  return `${timeGreeting}, ${userName}! Welcome back to your ${role} dashboard.`;
};

/**
 * Arrow Function 2: Concise single-line arrow function with implicit return.
 */
const calculateCircleArea = (radius) => Number((Math.PI * radius * radius).toFixed(2));

/**
 * Arrow Function 3: Compound Interest Calculator.
 * A = P(1 + r/n)^(nt)
 */
const calculateCompoundInterest = (principal, annualRate, timeYears, compoundFreq = 1) => {
  const r = annualRate / 100;
  const amount = principal * Math.pow(1 + r / compoundFreq, compoundFreq * timeYears);
  const totalInterest = amount - principal;
  return {
    principal,
    annualRate: `${annualRate}%`,
    timeYears,
    finalAmount: Number(amount.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2))
  };
};

// ----------------------------------------------------------------------------
// 4. Console Demonstration Execution (Demonstrating Arguments & Returns)
// ----------------------------------------------------------------------------
console.group("🚀 TASK 1: JAVASCRIPT FUNCTIONS EXECUTION LOGS");

// Calling Function 1 with Arguments
const sampleScores = [88, 92, 79, 95, 84];
const studentResult = calculateStudentPerformance("Aitha Naveen", sampleScores, 100);
console.log("1. Student Marks Calculation Result:", studentResult);

// Calling Function Pipeline (Multiple Functions)
const sampleInvoice = generateOrderInvoice("Mechanical Gaming Keyboard", 1200, 2, 15, 18, true);
console.log("2. Multiple Function E-Commerce Invoice:", sampleInvoice);

// Calling Arrow Functions
const greetingMessage = generateGreeting("Aitha Naveen", "Software Engineer Intern", 10);
console.log("3. Arrow Function Greeting:", greetingMessage);
console.log("4. Arrow Function Circle Area (r=7):", calculateCircleArea(7));
console.log("5. Arrow Function Compound Interest (P=10000, 7.5%, 3 yrs):", calculateCompoundInterest(10000, 7.5, 3, 1));

console.groupEnd();

// ----------------------------------------------------------------------------
// 5. Interactive UI Handlers (For the Webpage Interface)
// ----------------------------------------------------------------------------

/**
 * Interactive handler for the Marks Calculator card
 */
function handleUiCalculateMarks() {
  const nameInput = document.getElementById("fn-student-name")?.value.trim() || "Student";
  const scoresInput = document.getElementById("fn-student-scores")?.value.trim() || "85, 90, 78, 92";
  
  const scores = scoresInput
    .split(",")
    .map(s => parseFloat(s.trim()))
    .filter(n => !isNaN(n));

  if (scores.length === 0) {
    alert("Please enter at least one valid numerical score separated by commas.");
    return;
  }

  const result = calculateStudentPerformance(nameInput, scores);
  
  const display = document.getElementById("fn-marks-output");
  if (display) {
    display.innerHTML = `
      <div class="log-line log-info">Student: <strong>${result.studentName}</strong></div>
      <div class="log-line log-info">Subjects Count: <strong>${result.subjectCount}</strong></div>
      <div class="log-line log-info">Total Score: <strong>${result.totalScored} / ${result.maxTotal}</strong></div>
      <div class="log-line log-info">Percentage: <strong>${result.percentage}%</strong></div>
      <div class="log-line ${result.isPassed ? 'log-success' : 'log-error'}">Grade: <strong>${result.grade} (${result.status})</strong></div>
      <div class="log-line log-warn">Passed: <strong>${result.isPassed ? 'YES ✅' : 'NO ❌'}</strong></div>
    `;
  }

  if (window.logToTerminal) {
    window.logToTerminal(`[Task 1] Evaluated marks for ${result.studentName}: ${result.percentage}% (${result.grade})`, "success");
  }
}

/**
 * Interactive handler for the Invoice Calculator card
 */
function handleUiCalculateInvoice() {
  const item = document.getElementById("fn-item-name")?.value.trim() || "Wireless Mouse";
  const price = parseFloat(document.getElementById("fn-item-price")?.value) || 750;
  const qty = parseInt(document.getElementById("fn-item-qty")?.value) || 2;
  const discount = parseFloat(document.getElementById("fn-item-discount")?.value) || 10;
  const express = document.getElementById("fn-item-express")?.checked || false;

  const invoice = generateOrderInvoice(item, price, qty, discount, 18, express);

  const display = document.getElementById("fn-invoice-output");
  if (display) {
    display.innerHTML = `
      <div class="log-line log-info">Item: <strong>${invoice.productName}</strong> (x${invoice.quantity})</div>
      <div class="log-line log-info">Subtotal: <strong>₹${invoice.subtotal}</strong></div>
      <div class="log-line log-warn">Discount (${invoice.discountRate}): <strong>-₹${invoice.discountAmount}</strong></div>
      <div class="log-line log-info">GST Tax (${invoice.taxRate}): <strong>+₹${invoice.taxAmount}</strong></div>
      <div class="log-line log-info">Shipping Fee: <strong>₹${invoice.shippingFee}</strong></div>
      <div class="log-line log-success">Grand Total: <strong>₹${invoice.grandTotal}</strong></div>
    `;
  }

  if (window.logToTerminal) {
    window.logToTerminal(`[Task 1] Generated Invoice for ${item} | Grand Total: ₹${invoice.grandTotal}`, "success");
  }
}

/**
 * Interactive handler for the Dynamic Greeting Generator card
 */
function handleUiGenerateGreeting() {
  const name = document.getElementById("fn-greet-name")?.value.trim() || "Aitha Naveen";
  const role = document.getElementById("fn-greet-role")?.value || "Full-Stack Developer";
  const hour = parseInt(document.getElementById("fn-greet-time")?.value);
  
  const message = generateGreeting(name, role, isNaN(hour) ? new Date().getHours() : hour);
  
  const display = document.getElementById("fn-greet-output");
  if (display) {
    display.innerHTML = `<div class="log-line log-success">${message}</div>`;
  }

  if (window.logToTerminal) {
    window.logToTerminal(`[Task 1] Greeting Generated: "${message}"`, "info");
  }
}
