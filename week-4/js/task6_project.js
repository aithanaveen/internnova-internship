/**
 * ============================================================================
 * WEEK 4 - TASK 6: MINI JAVASCRIPT PROJECT (10 Marks)
 * PROJECT NAME: "EduTrack Pro" - Interactive Student Record & Performance Manager
 * ============================================================================
 * Seamlessly integrates all Week 4 concepts:
 *  1. Functions: Modular validation, grade computation, stats calculation, data serialization
 *  2. Arrays: Student array repository, filter, map, reduce, sort, push, splice
 *  3. Objects: Rich student records with nested scores, status methods, metric aggregates
 *  4. DOM Manipulation: Dynamic table generation, stat card updates, modal rendering, toasts
 *  5. Events: Form submit, live input search, change filters, click actions, keyboard shortcuts
 *  6. Bonus: LocalStorage auto-persistence & JSON/CSV data export!
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. Initial State & Sample Dataset
// ----------------------------------------------------------------------------

const DEFAULT_STUDENTS = [
  {
    id: "STU-1001",
    rollNumber: "26-CSE-001",
    fullName: "Aitha Naveen",
    course: "Full-Stack Web Development",
    email: "aitha.naveen@example.com",
    marks: { js: 95, html: 92, react: 88, python: 90 },
    enrolledDate: "2026-10-01"
  },
  {
    id: "STU-1002",
    rollNumber: "26-CSE-002",
    fullName: "Priya Sharma",
    course: "Python & Machine Learning",
    email: "priya.sharma@example.com",
    marks: { js: 82, html: 86, react: 79, python: 94 },
    enrolledDate: "2026-10-03"
  },
  {
    id: "STU-1003",
    rollNumber: "26-CSE-003",
    fullName: "Rahul Verma",
    course: "Cloud Architecture",
    email: "rahul.v@example.com",
    marks: { js: 65, html: 70, react: 62, python: 68 },
    enrolledDate: "2026-10-05"
  },
  {
    id: "STU-1004",
    rollNumber: "26-CSE-004",
    fullName: "Ananya Iyer",
    course: "Full-Stack Web Development",
    email: "ananya.iyer@example.com",
    marks: { js: 91, html: 96, react: 94, python: 89 },
    enrolledDate: "2026-10-06"
  },
  {
    id: "STU-1005",
    rollNumber: "26-CSE-005",
    fullName: "Karan Patel",
    course: "Cybersecurity Fundamentals",
    email: "karan.p@example.com",
    marks: { js: 42, html: 50, react: 45, python: 48 },
    enrolledDate: "2026-10-08"
  }
];

// In-Memory Array of Student Objects
let studentsRepository = [];
let editingStudentId = null; // null when adding, holds ID when editing

// ----------------------------------------------------------------------------
// 2. Pure Calculation & Helper Functions
// ----------------------------------------------------------------------------

/**
 * Computes performance analytics for a student object.
 * @param {Object} marks - { js, html, react, python }
 * @returns {Object} Performance evaluation
 */
function evaluateStudentMarks(marks) {
  const scores = Object.values(marks).map(n => Number(n) || 0);
  const totalScored = scores.reduce((sum, val) => sum + val, 0);
  const maxPossible = scores.length * 100;
  const percentage = Number(((totalScored / maxPossible) * 100).toFixed(1));

  let grade = "F";
  let status = "Failed";
  let badgeClass = "badge-failed";

  if (percentage >= 85) {
    grade = "A+";
    status = "Distinction";
    badgeClass = "badge-distinction";
  } else if (percentage >= 70) {
    grade = "A";
    status = "First Class";
    badgeClass = "badge-passed";
  } else if (percentage >= 55) {
    grade = "B";
    status = "Second Class";
    badgeClass = "badge-passed";
  } else if (percentage >= 45) {
    grade = "C";
    status = "Pass";
    badgeClass = "badge-passed";
  }

  return { totalScored, maxPossible, percentage, grade, status, badgeClass };
}

/**
 * Calculates aggregate class statistics across the entire student array.
 * Uses Array reduce, map, filter methods.
 */
function calculateDashboardMetrics(students) {
  if (!students || students.length === 0) {
    return { total: 0, average: 0, highest: 0, passRate: 0 };
  }

  const evaluations = students.map(s => evaluateStudentMarks(s.marks));
  const total = students.length;

  const totalPercentageSum = evaluations.reduce((acc, curr) => acc + curr.percentage, 0);
  const average = Number((totalPercentageSum / total).toFixed(1));

  const highest = Math.max(...evaluations.map(e => e.percentage));
  const passedCount = evaluations.filter(e => e.percentage >= 45).length;
  const passRate = Number(((passedCount / total) * 100).toFixed(0));

  return { total, average, highest, passRate };
}

// ----------------------------------------------------------------------------
// 3. Persistence (LocalStorage)
// ----------------------------------------------------------------------------
const STORAGE_KEY = "internnova_week4_edutrack_students";

function saveStudentsToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(studentsRepository));
  } catch (err) {
    console.warn("LocalStorage access failed or unavailable:", err);
  }
}

function loadStudentsFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      studentsRepository = JSON.parse(raw);
      return;
    }
  } catch (err) {
    console.warn("Failed to parse LocalStorage data:", err);
  }
  // Fallback to default sample dataset
  studentsRepository = JSON.parse(JSON.stringify(DEFAULT_STUDENTS));
}

// ----------------------------------------------------------------------------
// 4. DOM Rendering Functions
// ----------------------------------------------------------------------------

/**
 * Renders the student table based on search & filter criteria.
 */
function renderStudentsTable() {
  const tableBody = document.getElementById("edutrack-table-body");
  if (!tableBody) return;

  const searchQuery = (document.getElementById("edutrack-search")?.value || "").toLowerCase().trim();
  const courseFilter = document.getElementById("edutrack-filter-course")?.value || "ALL";
  const statusFilter = document.getElementById("edutrack-filter-status")?.value || "ALL";

  // Apply Array filter() method
  const filteredStudents = studentsRepository.filter(student => {
    const perf = evaluateStudentMarks(student.marks);
    const matchesSearch = 
      student.fullName.toLowerCase().includes(searchQuery) ||
      student.rollNumber.toLowerCase().includes(searchQuery) ||
      student.email.toLowerCase().includes(searchQuery);

    const matchesCourse = courseFilter === "ALL" || student.course === courseFilter;
    const matchesStatus = statusFilter === "ALL" || perf.status === statusFilter;

    return matchesSearch && matchesCourse && matchesStatus;
  });

  tableBody.innerHTML = "";

  if (filteredStudents.length === 0) {
    const emptyRow = document.createElement("tr");
    emptyRow.innerHTML = `
      <td colspan="7" style="text-align: center; padding: 2.5rem; color: var(--text-secondary);">
        🔍 No matching student records found. Try adjusting your search or filters.
      </td>
    `;
    tableBody.appendChild(emptyRow);
  } else {
    filteredStudents.forEach(student => {
      const perf = evaluateStudentMarks(student.marks);
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>
          <div style="font-weight: 700; color: var(--text-primary);">${student.fullName}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${student.email}</div>
        </td>
        <td><code style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-highlight);">${student.rollNumber}</code></td>
        <td><span class="card-badge">${student.course}</span></td>
        <td><strong>${perf.totalScored}</strong> <span style="font-size: 0.75rem; color: var(--text-muted);">/ 400</span></td>
        <td>
          <div style="font-weight: 700;">${perf.percentage}%</div>
          <div style="font-size: 0.75rem; color: var(--text-secondary);">Grade: <strong>${perf.grade}</strong></div>
        </td>
        <td>
          <span class="badge-status ${perf.badgeClass}">${perf.status}</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-secondary btn-sm" onclick="handleOpenEditStudentModal('${student.id}')" title="Edit Student">✏️</button>
            <button class="btn btn-danger btn-sm" onclick="handleDeleteStudent('${student.id}')" title="Delete Student">🗑️</button>
          </div>
        </td>
      `;

      tableBody.appendChild(row);
    });
  }

  // Update metric counters
  renderDashboardCards();
}

/**
 * Updates Dashboard Summary Stats
 */
function renderDashboardCards() {
  const metrics = calculateDashboardMetrics(studentsRepository);

  const totalEl = document.getElementById("edutrack-stat-total");
  const avgEl = document.getElementById("edutrack-stat-avg");
  const highEl = document.getElementById("edutrack-stat-high");
  const passEl = document.getElementById("edutrack-stat-pass");

  if (totalEl) totalEl.textContent = metrics.total;
  if (avgEl) avgEl.textContent = `${metrics.average}%`;
  if (highEl) highEl.textContent = `${metrics.highest}%`;
  if (passEl) passEl.textContent = `${metrics.passRate}%`;
}

// ----------------------------------------------------------------------------
// 5. CRUD Event Handlers (Create, Read, Update, Delete)
// ----------------------------------------------------------------------------

/**
 * Opens Modal for adding a new student
 */
function handleOpenAddStudentModal() {
  editingStudentId = null;
  const modal = document.getElementById("edutrack-modal");
  const modalTitle = document.getElementById("edutrack-modal-title");
  const form = document.getElementById("edutrack-student-form");

  if (modalTitle) modalTitle.textContent = "➕ Add New Student Record";
  if (form) form.reset();

  // Generate suggested next roll number
  const rollInput = document.getElementById("modal-student-roll");
  if (rollInput) {
    const nextNum = studentsRepository.length + 1;
    rollInput.value = `26-CSE-${nextNum < 10 ? '00' : nextNum < 100 ? '0' : ''}${nextNum}`;
  }

  if (modal) modal.classList.add("active");
}

/**
 * Opens Modal pre-filled with data for editing
 */
function handleOpenEditStudentModal(id) {
  const student = studentsRepository.find(s => s.id === id);
  if (!student) return;

  editingStudentId = id;
  const modal = document.getElementById("edutrack-modal");
  const modalTitle = document.getElementById("edutrack-modal-title");

  if (modalTitle) modalTitle.textContent = `✏️ Edit Student Record (${student.fullName})`;

  // Populate inputs
  document.getElementById("modal-student-name").value = student.fullName;
  document.getElementById("modal-student-roll").value = student.rollNumber;
  document.getElementById("modal-student-email").value = student.email;
  document.getElementById("modal-student-course").value = student.course;
  document.getElementById("modal-mark-js").value = student.marks.js;
  document.getElementById("modal-mark-html").value = student.marks.html;
  document.getElementById("modal-mark-react").value = student.marks.react;
  document.getElementById("modal-mark-python").value = student.marks.python;

  if (modal) modal.classList.add("active");
}

/**
 * Closes the modal
 */
function handleCloseStudentModal() {
  const modal = document.getElementById("edutrack-modal");
  if (modal) modal.classList.remove("active");
}

/**
 * Form Submit Handler: Handles both Adding and Editing
 */
function handleStudentFormSubmit(event) {
  event.preventDefault();

  const fullName = document.getElementById("modal-student-name")?.value.trim();
  const rollNumber = document.getElementById("modal-student-roll")?.value.trim();
  const email = document.getElementById("modal-student-email")?.value.trim();
  const course = document.getElementById("modal-student-course")?.value;

  const jsMark = parseFloat(document.getElementById("modal-mark-js")?.value) || 0;
  const htmlMark = parseFloat(document.getElementById("modal-mark-html")?.value) || 0;
  const reactMark = parseFloat(document.getElementById("modal-mark-react")?.value) || 0;
  const pythonMark = parseFloat(document.getElementById("modal-mark-python")?.value) || 0;

  // Validation
  if (!fullName || !rollNumber || !email) {
    showToast("Please fill out all required fields.", "error");
    return;
  }

  const marksObject = {
    js: Math.min(100, Math.max(0, jsMark)),
    html: Math.min(100, Math.max(0, htmlMark)),
    react: Math.min(100, Math.max(0, reactMark)),
    python: Math.min(100, Math.max(0, pythonMark))
  };

  if (editingStudentId) {
    // UPDATE existing student
    const studentIdx = studentsRepository.findIndex(s => s.id === editingStudentId);
    if (studentIdx !== -1) {
      studentsRepository[studentIdx] = {
        ...studentsRepository[studentIdx],
        fullName,
        rollNumber,
        email,
        course,
        marks: marksObject
      };
      showToast(`Updated student record: ${fullName}`, "success");
      if (window.logToTerminal) {
        window.logToTerminal(`[Task 6] Updated student ID: ${editingStudentId} (${fullName})`, "success");
      }
    }
  } else {
    // CREATE new student
    const newStudent = {
      id: `STU-${Date.now().toString().slice(-4)}`,
      rollNumber,
      fullName,
      course,
      email,
      marks: marksObject,
      enrolledDate: new Date().toISOString().split("T")[0]
    };
    studentsRepository.push(newStudent);
    showToast(`Added new student: ${fullName}`, "success");
    if (window.logToTerminal) {
      window.logToTerminal(`[Task 6] Enrolled student: ${fullName} [${rollNumber}]`, "success");
    }
  }

  saveStudentsToStorage();
  renderStudentsTable();
  handleCloseStudentModal();
}

/**
 * Delete a student record
 */
function handleDeleteStudent(id) {
  const student = studentsRepository.find(s => s.id === id);
  if (!student) return;

  if (confirm(`Are you sure you want to delete student "${student.fullName}" (${student.rollNumber})?`)) {
    studentsRepository = studentsRepository.filter(s => s.id !== id);
    saveStudentsToStorage();
    renderStudentsTable();
    showToast(`Deleted student: ${student.fullName}`, "warn");
    if (window.logToTerminal) {
      window.logToTerminal(`[Task 6] Removed student record ID: ${id}`, "warn");
    }
  }
}

/**
 * Sort students dynamically
 */
let currentSortField = "name";
let currentSortAsc = true;

function handleSortStudents(field) {
  if (currentSortField === field) {
    currentSortAsc = !currentSortAsc;
  } else {
    currentSortField = field;
    currentSortAsc = true;
  }

  studentsRepository.sort((a, b) => {
    let valA, valB;
    if (field === "name") {
      valA = a.fullName.toLowerCase();
      valB = b.fullName.toLowerCase();
      return currentSortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    } else if (field === "percentage") {
      valA = evaluateStudentMarks(a.marks).percentage;
      valB = evaluateStudentMarks(b.marks).percentage;
      return currentSortAsc ? valA - valB : valB - valA;
    } else if (field === "roll") {
      valA = a.rollNumber;
      valB = b.rollNumber;
      return currentSortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
    return 0;
  });

  renderStudentsTable();
  showToast(`Sorted table by ${field.toUpperCase()} (${currentSortAsc ? 'Ascending ⬆️' : 'Descending ⬇️'})`, "info");
}

/**
 * Reset to default dataset
 */
function handleResetEduTrackData() {
  if (confirm("Reset student repository back to default dataset?")) {
    studentsRepository = JSON.parse(JSON.stringify(DEFAULT_STUDENTS));
    saveStudentsToStorage();
    renderStudentsTable();
    showToast("Restored default student records.", "info");
    if (window.logToTerminal) {
      window.logToTerminal("[Task 6] Restored default student data", "info");
    }
  }
}

/**
 * Export data to JSON file
 */
function handleExportJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(studentsRepository, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `EduTrack_Students_${new Date().toISOString().split("T")[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Exported student dataset to JSON", "success");
}

// ----------------------------------------------------------------------------
// 6. Toast Notification System
// ----------------------------------------------------------------------------
function showToast(message, type = "info") {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warn' ? '⚠️' : 'ℹ️'}</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ----------------------------------------------------------------------------
// 7. Initialization & Event Bindings
// ----------------------------------------------------------------------------
function initializeEduTrackProject() {
  loadStudentsFromStorage();
  renderStudentsTable();

  // Search input live filtering
  const searchInput = document.getElementById("edutrack-search");
  if (searchInput) {
    searchInput.addEventListener("input", renderStudentsTable);
  }

  // Course & status dropdown change filters
  const courseFilter = document.getElementById("edutrack-filter-course");
  if (courseFilter) {
    courseFilter.addEventListener("change", renderStudentsTable);
  }

  const statusFilter = document.getElementById("edutrack-filter-status");
  if (statusFilter) {
    statusFilter.addEventListener("change", renderStudentsTable);
  }

  // Student form submission
  const studentForm = document.getElementById("edutrack-student-form");
  if (studentForm) {
    studentForm.addEventListener("submit", handleStudentFormSubmit);
  }

  // Keyboard shortcut: ESC to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      handleCloseStudentModal();
    }
  });

  // Modal backdrop click to close
  const modal = document.getElementById("edutrack-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) handleCloseStudentModal();
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeEduTrackProject);
} else {
  initializeEduTrackProject();
}
