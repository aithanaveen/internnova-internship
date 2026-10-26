/**
 * ============================================================================
 * WEEK 4 ASSIGNMENT - MAIN CONTROLLER & APPLICATION SHELL
 * Student Name: Aitha Naveen
 * Internship: Internnova Web Development
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. Live Terminal Logger
// ----------------------------------------------------------------------------
window.logToTerminal = function(message, type = "info") {
  const terminalBody = document.getElementById("main-terminal-body");
  if (!terminalBody) return;

  const timestamp = new Date().toLocaleTimeString();
  const line = document.createElement("div");
  line.className = `log-line ${type === 'error' ? 'log-error' : type === 'success' ? 'log-success' : type === 'warn' ? 'log-warn' : 'log-info'}`;
  line.innerHTML = `<span style="color:var(--text-muted); font-size:0.75rem;">[${timestamp}]</span> ${message}`;

  terminalBody.prepend(line);

  // Keep maximum 40 log lines in memory
  while (terminalBody.children.length > 40) {
    terminalBody.removeChild(terminalBody.lastChild);
  }
};

function handleClearTerminal() {
  const terminalBody = document.getElementById("main-terminal-body");
  if (terminalBody) {
    terminalBody.innerHTML = '<div class="log-line log-info">System terminal log ready. Interactive operations will appear here in real-time.</div>';
  }
}

// ----------------------------------------------------------------------------
// 2. Tab Navigation System
// ----------------------------------------------------------------------------
function switchTaskTab(targetTaskId) {
  // Update Tab buttons
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    if (btn.getAttribute("data-target") === targetTaskId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update Task Panels
  const panels = document.querySelectorAll(".task-panel");
  panels.forEach(panel => {
    if (panel.id === targetTaskId) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });

  // Scroll smoothly to top of main container
  const mainCont = document.querySelector(".main-container");
  if (mainCont) {
    mainCont.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Trigger contextual renders
  if (targetTaskId === "task2-panel" && typeof renderUiCourses === "function") {
    renderUiCourses();
  } else if (targetTaskId === "task3-panel" && typeof renderUiObjectInspector === "function") {
    renderUiObjectInspector();
  } else if (targetTaskId === "task6-panel" && typeof renderStudentsTable === "function") {
    renderStudentsTable();
  }

  window.logToTerminal(`Switched active view to: [${targetTaskId.toUpperCase()}]`, "info");
}

// ----------------------------------------------------------------------------
// 3. Theme Toggle (Dark Mode / Light Mode)
// ----------------------------------------------------------------------------
function initializeTheme() {
  const savedTheme = localStorage.getItem("internnova_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("internnova_theme", nextTheme);
      updateThemeIcon(nextTheme);
      window.logToTerminal(`Theme toggled to: ${nextTheme.toUpperCase()}`, "info");
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (icon) {
    icon.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

// ----------------------------------------------------------------------------
// 4. Global Page Initialization
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initializeTheme();

  // Attach Tab Switcher clicks
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      if (target) switchTaskTab(target);
    });
  });

  // Log Welcome Banner
  window.logToTerminal("Week 4 JavaScript Fundamentals Part 2 - Interactive Environment Ready", "success");
  window.logToTerminal("All 6 Task Modules Loaded & Tested: Functions, Arrays, Objects, DOM, Events, Mini Project", "info");

  // Initial renders
  if (typeof renderUiCourses === "function") renderUiCourses();
  if (typeof renderUiObjectInspector === "function") renderUiObjectInspector();
});
