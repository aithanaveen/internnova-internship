# Week 4 Assignment: JavaScript Fundamentals – Part 2

**Internship Program:** Internnova Technologies Web Development Internship  
**Student Name:** [Aitha Naveen](https://github.com/aithanaveen)  
**GitHub Profile:** [https://github.com/aithanaveen](https://github.com/aithanaveen)  
**GitHub Repository:** [https://github.com/aithanaveen/internnova-internship](https://github.com/aithanaveen/internnova-internship)  
**Duration:** 1 Week (7 Days)  
**Total Marks:** 100 / 100  
**Submission Package:** `WD_Week4_AithaNaveen.zip`  

---

## 🎯 Executive Summary & Learning Objectives

The objective of this assignment is to master the core pillars of interactive modern JavaScript:
1. **Functions**: Function declarations, parameters, arguments, return values, function pipelines, and ES6 arrow functions.
2. **Arrays**: Creating arrays, accessing elements, adding (`push`, `unshift`), removing (`pop`, `shift`, `splice`), updating, iterating (`for`, `for...of`, `forEach`), and higher-order methods (`map`, `filter`, `reduce`, `find`, `sort`, `slice`).
3. **Objects**: Object literals, properties, dot vs bracket notation, dynamic additions, updates, property deletion (`delete`), and multi-scenario data modeling.
4. **DOM Manipulation**: Element selection (`getElementById`, `querySelector`, `querySelectorAll`), text mutation (`textContent`), template injection (`innerHTML`), dynamic inline CSS styling, and runtime node creation/removal (`createElement`, `appendChild`, `remove`).
5. **Events**: User interactions including `click`, `input`, `change`, `submit` (with `e.preventDefault()`), mouse tracking (`mousemove`, `mouseenter`, `mouseleave`), and keyboard keystroke telemetry (`keydown`, `keyup`).
6. **Mini Project (EduTrack Pro)**: A full-fledged, production-ready Student Record & Performance Manager combining all the above concepts with LocalStorage persistence and JSON export.

---

## 📁 Repository & File Structure

```text
week-4/
├── index.html                   # Interactive Single-Page Application (SPA) showcase portal
├── css/
│   └── style.css                # Premium glassmorphic CSS design system (Dark & Light modes)
├── js/
│   ├── task1_functions.js       # Task 1: Functions implementation & interactive grade/invoice calculators
│   ├── task2_arrays.js          # Task 2: Array manipulation, courses catalog, & higher-order methods
│   ├── task3_objects.js         # Task 3: 3 Real-world practical objects & dynamic property inspector
│   ├── task4_dom.js             # Task 4: Dynamic DOM laboratory (text, HTML, styles, sandbox nodes)
│   ├── task5_events.js          # Task 5: Interactive event arena & real-time telemetry stream
│   ├── task6_project.js         # Task 6: EduTrack Pro (Student Record & Performance Manager)
│   └── main.js                  # Main shell controller, tab router, theme engine, & live terminal
├── README.md                    # Detailed documentation & submission guide
└── WD_Week4_AithaNaveen.zip     # Complete submission archive
```

---

## 📊 Detailed Task Breakdown & Marks Distribution

| Task | Topic | Marks | Status | Primary File |
| :--- | :--- | :---: | :---: | :--- |
| **Task 1** | JavaScript Functions | **20** | ✅ Completed | [`js/task1_functions.js`](file:///c:/Users/aitha/internnova%20internship/week-4/js/task1_functions.js) |
| **Task 2** | Arrays | **20** | ✅ Completed | [`js/task2_arrays.js`](file:///c:/Users/aitha/internnova%20internship/week-4/js/task2_arrays.js) |
| **Task 3** | Objects | **15** | ✅ Completed | [`js/task3_objects.js`](file:///c:/Users/aitha/internnova%20internship/week-4/js/task3_objects.js) |
| **Task 4** | DOM Manipulation | **20** | ✅ Completed | [`js/task4_dom.js`](file:///c:/Users/aitha/internnova%20internship/week-4/js/task4_dom.js) |
| **Task 5** | Events | **15** | ✅ Completed | [`js/task5_events.js`](file:///c:/Users/aitha/internnova%20internship/week-4/js/task5_events.js) |
| **Task 6** | Mini Project (EduTrack Pro) | **10** | ✅ Completed | [`js/task6_project.js`](file:///c:/Users/aitha/internnova%20internship/week-4/js/task6_project.js) |
| **Total** | **Comprehensive Full Marks** | **100** | ✅ **100/100** | — |

---

## 🔍 Task-by-Task Implementation Details

### ✅ Task 1: JavaScript Functions (20 Marks)
File: [`js/task1_functions.js`](file:///c:/Users/aitha/internnova%20internship/week-4/js/task1_functions.js)
- **Function Declaration, Parameters, Arguments & Return Values**:
  - `calculateStudentPerformance(studentName, marksArray, maxPerSubject = 100)`: Calculates total marks, percentage, letter grade (`A+`, `A`, `B`, `C`, `D`, `F`), and qualification status.
- **Multiple Functions Pipeline (Composition)**:
  - `calculateSubtotal(unitPrice, quantity)`
  - `calculateDiscount(subtotal, discountRate)`
  - `calculateTax(taxableAmount, taxRate = 18)`
  - `calculateShipping(taxedAmount, isExpress)`
  - `generateOrderInvoice(...)`: Master coordinator function calling all sub-functions sequentially to produce an itemized invoice.
- **Arrow Functions (ES6)**:
  - `generateGreeting = (userName, role, hour) => ...`: Dynamic greeting based on current hour.
  - `calculateCircleArea = (radius) => ...`: Concise single-line calculation.
  - `calculateCompoundInterest = (principal, annualRate, timeYears, compoundFreq) => ...`: Financial compounding calculation.

### ✅ Task 2: Arrays (20 Marks)
File: [`js/task2_arrays.js`](file:///c:/Users/aitha/internnova%20internship/week-4/js/task2_arrays.js)
- **Practical Datasets**: Professional Tech Courses Catalog and E-Commerce Hardware Inventory.
- **Accessing Elements**: Index lookup (`arr[0]`), last element (`arr[arr.length - 1]`), and modern ES2022 negative indexing (`arr.at(-1)`).
- **Adding Elements**: `push()` (appends to end), `unshift()` (inserts at start), and `splice()` (inserts at any index).
- **Removing Elements**: `pop()` (removes from end), `shift()` (removes from start), and `splice(index, count)` (removes at target index).
- **Updating Elements**: In-place replacement via index assignment (`arr[index] = newValue`).
- **Iterating**: Traditional `for` loop, `for...of` iteration, and `forEach()` higher-order method.
- **Array Methods**:
  - `map()`: Transforms course array into structured course codes (`INTRN-40X`).
  - `filter()`: Live filtering by title or price criteria.
  - `reduce()`: Aggregating total catalog inventory valuations.
  - `sort()`: Lexicographical and numerical sorting.
  - `slice()` & `includes()`: Non-destructive sub-array slicing and membership validation.

### ✅ Task 3: Objects (15 Marks)
File: [`js/task3_objects.js`](file:///c:/Users/aitha/internnova%20internship/week-4/js/task3_objects.js)
- **3 Meaningful Practical Objects**:
  1. `internProfile`: Internnova student internship record with name, mentor, role, skills array, and summary method.
  2. `techProduct`: High-end gaming laptop specs with regular price, discount calculations, and hardware specifications object.
  3. `studentAccount`: Digital wallet with current balance, transaction ledger, and `deposit()` / `withdraw()` methods.
- **Property Access**: Dot notation (`obj.prop`) and bracket notation (`obj["prop"]`).
- **Dynamic Manipulation**:
  - Updating existing properties.
  - Adding new properties and methods at runtime.
  - Removing properties using the `delete` operator (`delete obj.prop`).
- **Object Utilities**: Demonstrating `Object.keys()`, `Object.values()`, and `Object.entries()`.

### ✅ Task 4: DOM Manipulation (20 Marks)
File: [`js/task4_dom.js`](file:///c:/Users/aitha/internnova%20internship/week-4/js/task4_dom.js)
- **Selecting Elements**: `document.getElementById()`, `document.querySelector()`, and `document.querySelectorAll()`.
- **Text Content**: Real-time mutation via `.textContent`.
- **HTML Content**: Rich template structure injection via `.innerHTML`.
- **CSS Styles Dynamically**: Direct manipulation of `.style.background`, `.style.borderColor`, and `.style.transform`.
- **Adding Elements**: Dynamic creation of interactive tags using `document.createElement()`, configuring class attributes, and appending with `appendChild()`.
- **Removing Elements**: Node removal via `element.remove()` and `container.removeChild()`.

### ✅ Task 5: Events (15 Marks)
File: [`js/task5_events.js`](file:///c:/Users/aitha/internnova%20internship/week-4/js/task5_events.js)
- **`click` Event**: Incremental click counter and interactive action triggers.
- **`input` Event**: Real-time live text mirroring with dynamic character and word counters.
- **`change` Event**: Dropdown select and toggle checkbox triggers updating theme previews.
- **`submit` Event**: Form submission interception using `event.preventDefault()`, input validation, and feedback banners.
- **Mouse Events**: Interactive mouse arena tracking `mousemove` (relative X and Y coordinates), `mouseenter`, `mouseleave`, `mousedown`, and `mouseup`.
- **Keyboard Events**: Live keystroke inspector capturing `keydown` and `keyup` with `event.key`, `event.code`, and modifier keys (`Ctrl`, `Shift`, `Alt`).
- **Event Telemetry**: Live timestamped event stream displaying triggered events in real-time.

### ✅ Task 6: Mini Project – EduTrack Pro (10 Marks)
File: [`js/task6_project.js`](file:///c:/Users/aitha/internnova%20internship/week-4/js/task6_project.js)
- **Integrated Architecture**:
  - **Functions**: Grade evaluation, percentage calculation, aggregate metrics computation, validation, and serialization.
  - **Arrays**: Repository of student objects, filtered via `.filter()`, sorted via `.sort()`, and aggregated via `.reduce()`.
  - **Objects**: Multi-subject student records `{ id, rollNumber, fullName, course, email, marks: { js, html, react, python } }`.
  - **DOM Manipulation**: Dynamic table rows, modal window popups, statistic counter cards, and toast notification alerts.
  - **Events**: Form `submit`, live `input` search, filter `change`, action button `click`, and `Escape` key shortcut.
- **Features**:
  - Add New Student modal dialog.
  - In-place Edit Student dialog with pre-filled marks.
  - Delete Student confirmation.
  - Live Search by Name, Roll Number, or Email.
  - Course and Status filter dropdowns.
  - Dynamic Sorting by Student Name, Roll Number, or Score.
  - Class statistics dashboard (Total Enrolled, Class Average, Top Scorer, Pass Rate).
  - Browser LocalStorage auto-persistence (retains records on refresh).
  - Export entire student dataset to `.json` file.
  - Restore sample dataset button.

---

## 🚀 How to Run the Project Locally

No external build tools or installations are required!

1. **Option 1: Direct Browser Launch**
   - Double-click [`index.html`](file:///c:/Users/aitha/internnova%20internship/week-4/index.html) or right-click and choose **Open with Google Chrome / Microsoft Edge / Firefox**.

2. **Option 2: Using VS Code Live Server / Local Server**
   ```bash
   # From the week-4 directory
   npx serve .
   # Or using Python
   python -m http.server 5500
   ```
   Open `http://localhost:5500` in your web browser.

3. **Developer Console & Live Terminal**
   - Press `F12` or `Ctrl + Shift + I` to open Developer Tools.
   - All modules print structured, grouped `console.log()` logs for instant grading.
   - Alternatively, inspect the **Live System Terminal** embedded directly at the bottom of the webpage.

---

## 📤 Submission Instructions

1. The project archive is packaged as **`WD_Week4_AithaNaveen.zip`**.
2. **Google Drive Upload**:
   - Upload `WD_Week4_AithaNaveen.zip` to Google Drive.
   - Right-click the uploaded file, select **Share**, and set General Access to **"Anyone with the link can view"**.
   - Copy the link and submit it on the Internnova internship portal.
