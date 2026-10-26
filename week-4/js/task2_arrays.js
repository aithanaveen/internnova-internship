/**
 * ============================================================================
 * WEEK 4 - TASK 2: ARRAYS (20 Marks)
 * ============================================================================
 * Concepts Demonstrated:
 *  1. Creating Arrays (Array literals & constructor)
 *  2. Accessing Elements (indexing, first/last element, Array.at())
 *  3. Adding Elements (push, unshift, splice)
 *  4. Removing Elements (pop, shift, splice)
 *  5. Updating Elements by Index
 *  6. Iterating through Arrays (for loop, for...of, forEach)
 *  7. Basic & Advanced Array Methods (map, filter, reduce, find, sort, slice, includes)
 *  8. Practical Dataset: Tech Courses & E-Commerce Product Catalog
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. Practical Datasets Initialization
// ----------------------------------------------------------------------------

// Dataset A: Array of Professional Course Names
let techCourses = [
  "Full-Stack Web Development",
  "Python & Machine Learning",
  "Cloud Architecture with AWS",
  "Cybersecurity Fundamentals",
  "Mobile App Development with Flutter"
];

// Dataset B: Array of Product Objects
let productInventory = [
  { id: 101, name: "Mechanical Gaming Keyboard", category: "Peripherals", price: 3499, inStock: true, rating: 4.8 },
  { id: 102, name: "Ergonomic Vertical Mouse", category: "Peripherals", price: 1899, inStock: true, rating: 4.6 },
  { id: 103, name: "Ultra-Wide 34-inch Monitor", category: "Display", price: 28999, inStock: false, rating: 4.9 },
  { id: 104, name: "Noise-Cancelling Headphones", category: "Audio", price: 8999, inStock: true, rating: 4.7 },
  { id: 105, name: "USB-C Multiport Docking Station", category: "Accessories", price: 4299, inStock: true, rating: 4.3 }
];

// ----------------------------------------------------------------------------
// 2. Demonstration Functions for Core Array Operations
// ----------------------------------------------------------------------------

/**
 * Demonstrates: Accessing Elements
 */
function demonstrateAccessing(arr) {
  const first = arr[0];
  const third = arr[2];
  const last = arr[arr.length - 1];
  const modernLast = arr.at(-1); // Modern ES2022 syntax

  return { first, third, last, modernLast, totalCount: arr.length };
}

/**
 * Demonstrates: Adding Elements (push, unshift, splice)
 */
function demonstrateAdding(courseList, newCourseAtEnd, newCourseAtStart) {
  // 1. push() - Adds element to the end of array
  courseList.push(newCourseAtEnd);

  // 2. unshift() - Adds element to the beginning of array
  courseList.unshift(newCourseAtStart);

  // 3. splice() - Inserts element at a specific index without deleting
  courseList.splice(2, 0, "DevOps & Docker Essentials");

  return courseList;
}

/**
 * Demonstrates: Removing Elements (pop, shift, splice)
 */
function demonstrateRemoving(courseList) {
  // 1. pop() - Removes and returns the last element
  const removedLast = courseList.pop();

  // 2. shift() - Removes and returns the first element
  const removedFirst = courseList.shift();

  // 3. splice() - Removes 1 element at index 1
  const removedMiddle = courseList.splice(1, 1);

  return {
    removedFirst,
    removedLast,
    removedMiddle: removedMiddle[0],
    remainingCourses: [...courseList]
  };
}

/**
 * Demonstrates: Updating Elements
 */
function demonstrateUpdating(courseList, indexToUpdate, newCourseTitle) {
  if (indexToUpdate >= 0 && indexToUpdate < courseList.length) {
    const oldTitle = courseList[indexToUpdate];
    courseList[indexToUpdate] = newCourseTitle;
    return { success: true, oldTitle, newTitle: newCourseTitle, updatedList: courseList };
  }
  return { success: false, message: "Invalid index" };
}

/**
 * Demonstrates: Iteration techniques
 */
function demonstrateIteration(arr) {
  const logs = [];

  // Method 1: Traditional for loop
  logs.push("--- Iteration with for loop ---");
  for (let i = 0; i < arr.length; i++) {
    logs.push(`Index [${i}]: ${arr[i]}`);
  }

  // Method 2: for...of loop (clean value iteration)
  logs.push("--- Iteration with for...of loop ---");
  for (const item of arr) {
    logs.push(`Item: ${item}`);
  }

  // Method 3: forEach() higher-order method
  logs.push("--- Iteration with forEach() ---");
  arr.forEach((item, index) => {
    logs.push(`Item #${index + 1}: ${item}`);
  });

  return logs;
}

/**
 * Demonstrates: Array Methods (map, filter, reduce, find, sort, slice, includes)
 */
function demonstrateArrayMethods(products) {
  // 1. map() - Transform array into list of formatted product strings
  const formattedTags = products.map(p => `${p.name} (₹${p.price}) [★ ${p.rating}]`);

  // 2. filter() - Filter products that are in stock and price < 5000
  const affordableInStock = products.filter(p => p.inStock && p.price < 5000);

  // 3. reduce() - Calculate total catalog value of all in-stock items
  const totalStockValue = products.reduce((acc, curr) => {
    return curr.inStock ? acc + curr.price : acc;
  }, 0);

  // 4. find() - Find the highest rated product or a product by ID
  const displayItem = products.find(p => p.category === "Display");

  // 5. includes() - Check if category exists
  const categories = products.map(p => p.category);
  const hasAudio = categories.includes("Audio");

  // 6. slice() - Extract top 3 items without mutating original array
  const topThree = products.slice(0, 3);

  // 7. sort() - Sort products by price ascending (non-destructive using slice/spread)
  const sortedByPriceAsc = [...products].sort((a, b) => a.price - b.price);

  return {
    formattedTags,
    affordableInStock,
    totalStockValue,
    displayItem,
    hasAudio,
    topThree,
    sortedByPriceAsc
  };
}

// ----------------------------------------------------------------------------
// 3. Execution in Developer Console
// ----------------------------------------------------------------------------
console.group("🚀 TASK 2: ARRAYS DEMONSTRATION & METHODS");

console.log("Initial Tech Courses:", [...techCourses]);
console.log("Accessing Elements Demo:", demonstrateAccessing(techCourses));

// Adding elements demonstration
let workingCourses = [...techCourses];
demonstrateAdding(workingCourses, "Artificial Intelligence Specialization", "HTML5 & CSS3 Masterclass");
console.log("After push, unshift, splice (Adding):", workingCourses);

// Removing elements demonstration
const removeResult = demonstrateRemoving(workingCourses);
console.log("After pop, shift, splice (Removing):", removeResult);

// Updating element demonstration
demonstrateUpdating(workingCourses, 0, "Modern TypeScript & React Ecosystem");
console.log("After Updating Index 0:", workingCourses);

// Iterating demonstration
console.log("Iteration Techniques Result:\n" + demonstrateIteration(techCourses).join("\n"));

// Array methods demonstration
const methodsResult = demonstrateArrayMethods(productInventory);
console.log("Array Methods Demo Results:", methodsResult);

console.groupEnd();

// ----------------------------------------------------------------------------
// 4. Interactive UI Controls for Webpage
// ----------------------------------------------------------------------------

// Working array state for UI explorer
let uiCourseCatalog = [
  "Full-Stack Web Development",
  "Python & Machine Learning",
  "Cloud Architecture with AWS",
  "Cybersecurity Fundamentals",
  "Mobile App Development with Flutter"
];

function renderUiCourses() {
  const container = document.getElementById("array-course-list");
  if (!container) return;

  container.innerHTML = "";
  uiCourseCatalog.forEach((course, idx) => {
    const itemEl = document.createElement("div");
    itemEl.className = "interactive-tag";
    itemEl.innerHTML = `
      <span><strong>#${idx}</strong>: ${course}</span>
      <span class="tag-close" title="Remove element at index ${idx}" onclick="handleUiRemoveCourse(${idx})">×</span>
    `;
    container.appendChild(itemEl);
  });

  const countBadge = document.getElementById("array-course-count");
  if (countBadge) countBadge.textContent = `${uiCourseCatalog.length} Items`;
}

function handleUiAddCourse(position = "end") {
  const input = document.getElementById("array-new-course-input");
  const value = input?.value.trim();
  if (!value) {
    alert("Please enter a course title to add.");
    return;
  }

  if (position === "end") {
    uiCourseCatalog.push(value); // push
    if (window.logToTerminal) window.logToTerminal(`[Task 2] push('${value}') -> added to end`, "success");
  } else if (position === "start") {
    uiCourseCatalog.unshift(value); // unshift
    if (window.logToTerminal) window.logToTerminal(`[Task 2] unshift('${value}') -> added to start`, "success");
  }

  input.value = "";
  renderUiCourses();
}

function handleUiPopCourse() {
  if (uiCourseCatalog.length === 0) return;
  const removed = uiCourseCatalog.pop();
  renderUiCourses();
  if (window.logToTerminal) window.logToTerminal(`[Task 2] pop() -> removed '${removed}' from end`, "warn");
}

function handleUiShiftCourse() {
  if (uiCourseCatalog.length === 0) return;
  const removed = uiCourseCatalog.shift();
  renderUiCourses();
  if (window.logToTerminal) window.logToTerminal(`[Task 2] shift() -> removed '${removed}' from start`, "warn");
}

function handleUiRemoveCourse(index) {
  if (index >= 0 && index < uiCourseCatalog.length) {
    const removed = uiCourseCatalog.splice(index, 1);
    renderUiCourses();
    if (window.logToTerminal) window.logToTerminal(`[Task 2] splice(${index}, 1) -> removed '${removed[0]}'`, "warn");
  }
}

function handleUiUpdateCourse() {
  const idx = parseInt(document.getElementById("array-update-index")?.value);
  const newVal = document.getElementById("array-update-val")?.value.trim();

  if (isNaN(idx) || idx < 0 || idx >= uiCourseCatalog.length) {
    alert(`Please enter a valid index between 0 and ${uiCourseCatalog.length - 1}`);
    return;
  }
  if (!newVal) {
    alert("Please enter replacement course title.");
    return;
  }

  const old = uiCourseCatalog[idx];
  uiCourseCatalog[idx] = newVal;
  renderUiCourses();
  if (window.logToTerminal) window.logToTerminal(`[Task 2] Updated index [${idx}]: '${old}' ➔ '${newVal}'`, "info");
}

function handleUiFilterCourses() {
  const query = document.getElementById("array-filter-query")?.value.toLowerCase().trim() || "";
  const display = document.getElementById("array-methods-output");
  
  const filtered = uiCourseCatalog.filter(c => c.toLowerCase().includes(query));
  
  if (display) {
    display.innerHTML = `
      <div class="log-line log-info">filter() results matching "${query}":</div>
      ${filtered.length > 0 
        ? filtered.map(c => `<div class="log-line log-success">✓ ${c}</div>`).join("") 
        : '<div class="log-line log-error">No courses matched the criteria.</div>'}
    `;
  }
}

function handleUiMapCourses() {
  const display = document.getElementById("array-methods-output");
  const mapped = uiCourseCatalog.map((c, i) => `Course Code [INTRN-40${i + 1}] -> ${c.toUpperCase()}`);
  
  if (display) {
    display.innerHTML = `
      <div class="log-line log-info">map() transformation (Generated Course Codes):</div>
      ${mapped.map(m => `<div class="log-line log-success">${m}</div>`).join("")}
    `;
  }
  if (window.logToTerminal) window.logToTerminal(`[Task 2] Applied .map() to transform ${mapped.length} courses`, "info");
}

function handleUiSortCourses() {
  uiCourseCatalog.sort();
  renderUiCourses();
  if (window.logToTerminal) window.logToTerminal(`[Task 2] Applied .sort() (alphabetical ascending)`, "success");
}

function handleUiResetCourses() {
  uiCourseCatalog = [
    "Full-Stack Web Development",
    "Python & Machine Learning",
    "Cloud Architecture with AWS",
    "Cybersecurity Fundamentals",
    "Mobile App Development with Flutter"
  ];
  renderUiCourses();
  if (window.logToTerminal) window.logToTerminal(`[Task 2] Reset courses catalog to default state`, "info");
}
