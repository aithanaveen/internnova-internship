/**
 * ============================================================================
 * WEEK 4 - TASK 5: EVENTS (15 Marks)
 * ============================================================================
 * Concepts Demonstrated:
 *  1. 'click' event (Counter, Action buttons, Mode switches)
 *  2. 'input' event (Real-time live typing, word/char counter)
 *  3. 'change' event (Select dropdown, checkbox toggle)
 *  4. 'submit' event (Form interception, validation, e.preventDefault())
 *  5. Mouse Events (mouseenter, mouseleave, mousemove, mousedown, mouseup)
 *  6. Keyboard Events (keydown, keyup, tracking key/code/modifiers)
 *  7. Live Event Telemetry Stream
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. Initializing Event Listeners on DOM Ready
// ----------------------------------------------------------------------------

function initializeTask5Events() {
  // 1. Click Event Listeners
  const clickTargetBtn = document.getElementById("evt-click-btn");
  let clickCount = 0;
  if (clickTargetBtn) {
    clickTargetBtn.addEventListener("click", (e) => {
      clickCount++;
      const countDisplay = document.getElementById("evt-click-counter");
      if (countDisplay) countDisplay.textContent = clickCount;

      logEventStream("click", `Button clicked (Total: ${clickCount}) at [X:${e.clientX}, Y:${e.clientY}]`);
      if (window.logToTerminal) {
        window.logToTerminal(`[Task 5: click] Button clicked #${clickCount}`, "info");
      }
    });
  }

  // 2. Input Event Listener (Real-Time Live Typing)
  const realTimeInput = document.getElementById("evt-live-input");
  const livePreview = document.getElementById("evt-live-preview");
  const charCounter = document.getElementById("evt-char-count");
  const wordCounter = document.getElementById("evt-word-count");

  if (realTimeInput) {
    realTimeInput.addEventListener("input", (e) => {
      const text = e.target.value;
      if (livePreview) {
        livePreview.textContent = text || "(Type in the input box to see real-time mirroring...)";
      }
      if (charCounter) charCounter.textContent = text.length;
      if (wordCounter) {
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        wordCounter.textContent = words;
      }
      logEventStream("input", `Value updated: "${text.slice(0, 25)}${text.length > 25 ? '...' : ''}" (${text.length} chars)`);
    });
  }

  // 3. Change Event Listeners (Select & Checkbox)
  const themeSelect = document.getElementById("evt-accent-select");
  const notifyCheckbox = document.getElementById("evt-checkbox-toggle");

  if (themeSelect) {
    themeSelect.addEventListener("change", (e) => {
      const selectedValue = e.target.value;
      const previewBox = document.getElementById("evt-change-preview");
      if (previewBox) {
        previewBox.style.borderColor = selectedValue;
        previewBox.style.color = selectedValue;
      }
      logEventStream("change", `<select> changed to: ${selectedValue}`);
      if (window.logToTerminal) {
        window.logToTerminal(`[Task 5: change] Accent color changed to ${selectedValue}`, "success");
      }
    });
  }

  if (notifyCheckbox) {
    notifyCheckbox.addEventListener("change", (e) => {
      const isChecked = e.target.checked;
      logEventStream("change", `<checkbox> is now: ${isChecked ? "CHECKED [true]" : "UNCHECKED [false]"}`);
    });
  }

  // 4. Submit Event Listener (Form Interception)
  const demoForm = document.getElementById("evt-demo-form");
  if (demoForm) {
    demoForm.addEventListener("submit", (e) => {
      // Prevent standard browser form submission / page reload
      e.preventDefault();

      const nameField = document.getElementById("evt-form-name")?.value.trim();
      const emailField = document.getElementById("evt-form-email")?.value.trim();
      const feedbackDisplay = document.getElementById("evt-form-feedback");

      if (!nameField || !emailField) {
        if (feedbackDisplay) {
          feedbackDisplay.innerHTML = `<span style="color:var(--danger)">⚠️ All fields are mandatory.</span>`;
        }
        logEventStream("submit", `Form validation failed: Missing fields`, "error");
        return;
      }

      if (feedbackDisplay) {
        feedbackDisplay.innerHTML = `
          <div class="log-line log-success">
            ✅ Form successfully submitted! Registered: <strong>${nameField}</strong> (${emailField})
          </div>
        `;
      }

      demoForm.reset();
      logEventStream("submit", `Form submitted for: ${nameField} <${emailField}>`, "success");
      if (window.logToTerminal) {
        window.logToTerminal(`[Task 5: submit] Form submitted for ${nameField}`, "success");
      }
    });
  }

  // 5. Mouse Events (Hover, Move, Down, Up)
  const mouseArena = document.getElementById("evt-mouse-arena");
  const mouseCoords = document.getElementById("evt-mouse-coords");
  const mouseState = document.getElementById("evt-mouse-state");

  if (mouseArena) {
    mouseArena.addEventListener("mouseenter", () => {
      if (mouseState) mouseState.textContent = "Status: Mouse Entered Area";
      logEventStream("mouseenter", "Cursor entered interactive arena");
    });

    mouseArena.addEventListener("mouseleave", () => {
      if (mouseState) mouseState.textContent = "Status: Mouse Left Area";
      if (mouseCoords) mouseCoords.textContent = "X: --, Y: --";
      logEventStream("mouseleave", "Cursor left interactive arena");
    });

    mouseArena.addEventListener("mousemove", (e) => {
      const rect = mouseArena.getBoundingClientRect();
      const relativeX = Math.round(e.clientX - rect.left);
      const relativeY = Math.round(e.clientY - rect.top);

      if (mouseCoords) {
        mouseCoords.textContent = `X: ${relativeX}px | Y: ${relativeY}px (Client: ${e.clientX}, ${e.clientY})`;
      }
    });

    mouseArena.addEventListener("mousedown", () => {
      mouseArena.classList.add("active-press");
      if (mouseState) mouseState.textContent = "Status: Mouse Button PRESSED (mousedown)";
      logEventStream("mousedown", "Active mouse button pressed inside arena");
    });

    mouseArena.addEventListener("mouseup", () => {
      mouseArena.classList.remove("active-press");
      if (mouseState) mouseState.textContent = "Status: Mouse Button RELEASED (mouseup)";
      logEventStream("mouseup", "Mouse button released");
    });
  }

  // 6. Keyboard Events (keydown, keyup)
  const keyInput = document.getElementById("evt-key-test-input");
  const keyNameDisplay = document.getElementById("evt-key-name");
  const keyCodeDisplay = document.getElementById("evt-key-code");
  const keyModifiersDisplay = document.getElementById("evt-key-modifiers");

  if (keyInput) {
    keyInput.addEventListener("keydown", (e) => {
      if (keyNameDisplay) keyNameDisplay.textContent = e.key;
      if (keyCodeDisplay) keyCodeDisplay.textContent = `${e.code} (${e.keyCode || e.which})`;
      
      const modifiers = [];
      if (e.ctrlKey) modifiers.push("CTRL");
      if (e.shiftKey) modifiers.push("SHIFT");
      if (e.altKey) modifiers.push("ALT");
      if (e.metaKey) modifiers.push("META");
      
      if (keyModifiersDisplay) {
        keyModifiersDisplay.textContent = modifiers.length > 0 ? modifiers.join(" + ") : "None";
      }

      logEventStream("keydown", `Key pressed: [${e.key}] | Code: ${e.code}`);
    });

    keyInput.addEventListener("keyup", (e) => {
      logEventStream("keyup", `Key released: [${e.key}]`);
    });
  }
}

// ----------------------------------------------------------------------------
// 2. Real-Time Event Stream Logger
// ----------------------------------------------------------------------------
function logEventStream(eventType, message, type = "info") {
  const streamBody = document.getElementById("evt-stream-body");
  if (!streamBody) return;

  const timestamp = new Date().toLocaleTimeString();
  const line = document.createElement("div");
  line.className = `log-line ${type === 'error' ? 'log-error' : type === 'success' ? 'log-success' : 'log-info'}`;
  line.innerHTML = `<span>[${timestamp}]</span> <strong>[${eventType.toUpperCase()}]</strong>: ${message}`;

  streamBody.prepend(line);

  // Keep stream to max 12 items for clean UX
  while (streamBody.children.length > 12) {
    streamBody.removeChild(streamBody.lastChild);
  }
}

function handleClearEventStream() {
  const streamBody = document.getElementById("evt-stream-body");
  if (streamBody) streamBody.innerHTML = '<div class="log-line log-info">Event stream cleared. Interact with elements to observe events.</div>';
}

// Initialize on DOMContentLoaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeTask5Events);
} else {
  initializeTask5Events();
}
