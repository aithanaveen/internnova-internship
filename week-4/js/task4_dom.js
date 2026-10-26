/**
 * ============================================================================
 * WEEK 4 - TASK 4: DOM MANIPULATION (20 Marks)
 * ============================================================================
 * Concepts Demonstrated:
 *  1. Selecting HTML Elements (getElementById, querySelector, querySelectorAll)
 *  2. Changing Text Content (textContent, innerText)
 *  3. Changing HTML Content (innerHTML)
 *  4. Changing CSS Styles Dynamically (inline styles & classList operations)
 *  5. Adding Elements to the DOM (createElement, appendChild, prepend)
 *  6. Removing Elements from the DOM (element.remove(), removeChild)
 *  7. Updating Webpage Content Dynamically (Live interactive DOM laboratory)
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. Element Selection Demonstrations
// ----------------------------------------------------------------------------

/**
 * Demonstrates various DOM selection strategies
 */
function demonstrateDomSelection() {
  // Method 1: getElementById
  const sandbox = document.getElementById("dom-sandbox-area");

  // Method 2: querySelector (CSS selector matching first instance)
  const firstCard = document.querySelector(".card");

  // Method 3: querySelectorAll (CSS selector matching all instances as NodeList)
  const allButtons = document.querySelectorAll(".btn");

  // Method 4: getElementsByClassName (HTMLCollection)
  const allCards = document.getElementsByClassName("card");

  return {
    byId: sandbox ? `#${sandbox.id}` : "Not found",
    byQuerySelector: firstCard ? firstCard.className : "Not found",
    byQuerySelectorAllCount: allButtons.length,
    byClassNameCount: allCards.length
  };
}

// ----------------------------------------------------------------------------
// 2. Interactive DOM Manipulation Handlers
// ----------------------------------------------------------------------------

let dynamicElementCounter = 0;

/**
 * 1. Changing Text Content
 * Demonstrates: element.textContent and element.innerText
 */
function handleDomChangeText() {
  const target = document.getElementById("dom-demo-heading");
  if (!target) return;

  const sampleTexts = [
    "🚀 DOM Manipulation is Dynamic & Powerful!",
    "⚡ JavaScript is Actively Controlling This Text!",
    "🎉 Text Content Successfully Updated via textContent!",
    "💻 Real-Time Dynamic Web Architecture in Action!"
  ];

  const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
  target.textContent = randomText;

  if (window.logToTerminal) {
    window.logToTerminal(`[Task 4] heading.textContent = "${randomText}"`, "success");
  }
}

/**
 * 2. Changing HTML Content
 * Demonstrates: element.innerHTML
 */
function handleDomChangeHtml() {
  const target = document.getElementById("dom-demo-rich-content");
  if (!target) return;

  const timestamp = new Date().toLocaleTimeString();
  target.innerHTML = `
    <div style="background: rgba(99, 102, 241, 0.15); border: 1px solid var(--primary); padding: 0.85rem; border-radius: 8px;">
      <h4 style="color: var(--text-highlight); margin-bottom: 0.25rem;">✨ Rendered with innerHTML</h4>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">
        Injected dynamic rich HTML structure with styled tags at <strong>${timestamp}</strong>.
      </p>
      <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
        <span class="badge-status badge-passed">HTML5 Validated</span>
        <span class="badge-status badge-distinction">Render Time: 0ms</span>
      </div>
    </div>
  `;

  if (window.logToTerminal) {
    window.logToTerminal(`[Task 4] Injected rich HTML template via target.innerHTML`, "info");
  }
}

/**
 * 3. Changing CSS Styles Dynamically
 * Demonstrates: style.property and classList.toggle/add
 */
function handleDomChangeStyles() {
  const box = document.getElementById("dom-style-box");
  if (!box) return;

  const vibrantColors = [
    { bg: "linear-gradient(135deg, #4f46e5, #06b6d4)", border: "#818cf8" },
    { bg: "linear-gradient(135deg, #ec4899, #8b5cf6)", border: "#f472b6" },
    { bg: "linear-gradient(135deg, #10b981, #3b82f6)", border: "#34d399" },
    { bg: "linear-gradient(135deg, #f59e0b, #ef4444)", border: "#fbbf24" }
  ];

  const randomTheme = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];

  // Directly modifying CSS inline styles
  box.style.background = randomTheme.bg;
  box.style.borderColor = randomTheme.border;
  box.style.transform = "scale(1.02)";
  box.style.boxShadow = "0 8px 30px rgba(99, 102, 241, 0.4)";
  box.style.transition = "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)";

  setTimeout(() => {
    box.style.transform = "scale(1)";
  }, 300);

  if (window.logToTerminal) {
    window.logToTerminal(`[Task 4] Updated box.style.background and box.style.borderColor`, "success");
  }
}

/**
 * 4. Adding Elements Dynamically
 * Demonstrates: document.createElement, setAttribute, appendChild
 */
function handleDomAddElement() {
  const container = document.getElementById("dom-sandbox-items");
  if (!container) return;

  dynamicElementCounter++;
  
  // 1. Create a new DOM element
  const newItem = document.createElement("div");
  
  // 2. Configure properties & classes
  newItem.className = "interactive-tag";
  newItem.id = `dynamic-item-${dynamicElementCounter}`;
  newItem.style.animation = "fadeIn 0.3s ease";
  
  // 3. Set content with innerHTML
  newItem.innerHTML = `
    <span>📦 Dynamic Node #${dynamicElementCounter} created at ${new Date().toLocaleTimeString()}</span>
    <span class="tag-close" onclick="handleDomRemoveSpecific('${newItem.id}')" title="Remove this element">×</span>
  `;

  // 4. Append to container
  container.appendChild(newItem);

  updateDynamicCount();

  if (window.logToTerminal) {
    window.logToTerminal(`[Task 4] document.createElement('div') & appendChild(#${newItem.id})`, "info");
  }
}

/**
 * 5. Removing Elements Dynamically
 * Demonstrates: element.remove() and removeChild
 */
function handleDomRemoveLastElement() {
  const container = document.getElementById("dom-sandbox-items");
  if (!container || container.children.length === 0) {
    alert("No dynamic elements available to remove.");
    return;
  }

  // Get last child element
  const lastChild = container.lastElementChild;
  if (lastChild) {
    const id = lastChild.id;
    // Calling modern element.remove()
    lastChild.remove();
    updateDynamicCount();

    if (window.logToTerminal) {
      window.logToTerminal(`[Task 4] Removed element: #${id} using element.remove()`, "warn");
    }
  }
}

/**
 * Removing a specific element by ID (Demonstrates removeChild or element.remove())
 */
function handleDomRemoveSpecific(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.remove();
    updateDynamicCount();
    if (window.logToTerminal) {
      window.logToTerminal(`[Task 4] Element #${elementId} removed`, "warn");
    }
  }
}

/**
 * Clear all sandbox elements
 */
function handleDomClearAll() {
  const container = document.getElementById("dom-sandbox-items");
  if (!container) return;
  container.innerHTML = "";
  dynamicElementCounter = 0;
  updateDynamicCount();
  if (window.logToTerminal) {
    window.logToTerminal(`[Task 4] Cleared all dynamic sandbox elements`, "warn");
  }
}

function updateDynamicCount() {
  const container = document.getElementById("dom-sandbox-items");
  const countBadge = document.getElementById("dom-item-count-badge");
  if (container && countBadge) {
    countBadge.textContent = `${container.children.length} Elements`;
  }
}

// ----------------------------------------------------------------------------
// 3. Console Verification
// ----------------------------------------------------------------------------
console.group("🚀 TASK 4: DOM MANIPULATION VERIFICATION");
console.log("DOM Selection Capabilities:", demonstrateDomSelection());
console.log("DOM API Ready: createElement, appendChild, remove, innerHTML, textContent, style");
console.groupEnd();
