/**
 * ============================================================================
 * WEEK 4 - TASK 3: OBJECTS (15 Marks)
 * ============================================================================
 * Concepts Demonstrated:
 *  1. Creating Objects (Object Literals, Constructor Functions & Factories)
 *  2. Object Properties & Values (Primitives, Arrays, Nested Objects, Methods)
 *  3. Accessing Properties (Dot notation & Bracket notation)
 *  4. Updating Properties
 *  5. Adding New Properties
 *  6. Removing Properties (using 'delete' operator)
 *  7. Object Utility Methods (Object.keys(), Object.values(), Object.entries())
 *  8. Three Practical Real-World Scenarios:
 *     - Object 1: Student Intern Profile (Internnova Internship)
 *     - Object 2: Premium Tech Product Specification
 *     - Object 3: Student Digital Wallet / Savings Account
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. Practical Objects Definition (3 Meaningful Practical Scenarios)
// ----------------------------------------------------------------------------

/**
 * OBJECT 1: Internnova Student Internship Profile
 */
const internProfile = {
  internId: "INT-2026-884",
  fullName: "Aitha Naveen",
  role: "Full-Stack Web Development Intern",
  company: "Internnova Technologies",
  mentorName: "Dr. Vikram Seth",
  startDate: "2026-10-01",
  durationWeeks: 8,
  stipendAmount: 15000,
  isCertified: false,
  technicalSkills: ["JavaScript", "HTML5", "CSS3", "React", "Node.js"],
  contact: {
    email: "aitha.naveen@example.com",
    city: "Hyderabad",
    country: "India"
  },
  // Object Method
  getInternshipSummary: function() {
    return `${this.fullName} is currently working as a ${this.role} at ${this.company} under mentor ${this.mentorName}.`;
  }
};

/**
 * OBJECT 2: Premium Tech Product Specification
 */
const techProduct = {
  productId: "PRD-ROG-X16",
  brand: "ASUS",
  productName: "ROG Flow X16 Gaming Laptop",
  category: "Laptops & Computing",
  regularPrice: 174999,
  discountPercentage: 12,
  stockQuantity: 18,
  isAvailable: true,
  specifications: {
    processor: "AMD Ryzen 9 7940HS",
    gpu: "NVIDIA GeForce RTX 4070 8GB",
    ram: "32GB DDR5 5600MHz",
    display: "16-inch QHD+ 240Hz Mini LED Touchscreen",
    storage: "1TB NVMe PCIe Gen4 SSD"
  },
  // Object Method with calculations
  getDiscountedPrice: function() {
    const discount = (this.regularPrice * this.discountPercentage) / 100;
    return this.regularPrice - discount;
  }
};

/**
 * OBJECT 3: Student Academic & Digital Wallet Account
 */
const studentAccount = {
  accountNumber: "ACC-8921-STUDENT",
  accountHolder: "Aitha Naveen",
  accountType: "Student Scholar Savings",
  currentBalance: 12450.75,
  currency: "INR",
  isKycVerified: true,
  rewardsPoints: 450,
  recentTransactions: [
    { id: "TX101", desc: "Internship Stipend Credit", amount: 15000, type: "CREDIT" },
    { id: "TX102", desc: "Course Registration Fee", amount: 2549.25, type: "DEBIT" }
  ],
  // Method: Deposit funds
  deposit: function(amount) {
    if (amount > 0) {
      this.currentBalance += amount;
      this.recentTransactions.push({
        id: `TX${Date.now().toString().slice(-4)}`,
        desc: "Direct Fund Deposit",
        amount,
        type: "CREDIT"
      });
      return { success: true, newBalance: this.currentBalance };
    }
    return { success: false, message: "Invalid deposit amount" };
  },
  // Method: Withdraw funds
  withdraw: function(amount) {
    if (amount > 0 && amount <= this.currentBalance) {
      this.currentBalance -= amount;
      this.recentTransactions.push({
        id: `TX${Date.now().toString().slice(-4)}`,
        desc: "ATM / Online Withdrawal",
        amount,
        type: "DEBIT"
      });
      return { success: true, newBalance: this.currentBalance };
    }
    return { success: false, message: "Insufficient funds or invalid amount" };
  }
};

// ----------------------------------------------------------------------------
// 2. Demonstration Functions (Accessing, Updating, Adding, Deleting)
// ----------------------------------------------------------------------------

/**
 * Demonstrates: Property Access via Dot & Bracket notation
 */
function demonstratePropertyAccess(obj) {
  // Dot Notation
  const roleByDot = obj.role;
  const companyByDot = obj.company;

  // Bracket Notation
  const nameByBracket = obj["fullName"];
  const dynamicKey = "stipendAmount";
  const stipendByDynamicBracket = obj[dynamicKey];

  return {
    roleByDot,
    companyByDot,
    nameByBracket,
    stipendByDynamicBracket
  };
}

/**
 * Demonstrates: Updating Existing Properties
 */
function demonstratePropertyUpdate(obj, newRole, newStipend) {
  const previousRole = obj.role;
  obj.role = newRole; // Updating via dot notation
  obj["stipendAmount"] = newStipend; // Updating via bracket notation
  return { previousRole, updatedRole: obj.role, updatedStipend: obj.stipendAmount };
}

/**
 * Demonstrates: Adding New Properties
 */
function demonstratePropertyAddition(obj) {
  // Adding primitive property
  obj.githubProfile = "https://github.com/aithanaveen";

  // Adding boolean flag
  obj["hasCompletedWeek4"] = true;

  // Adding a new method dynamically
  obj.getSkillsCount = function() {
    return this.technicalSkills ? this.technicalSkills.length : 0;
  };

  return {
    github: obj.githubProfile,
    completedWeek4: obj.hasCompletedWeek4,
    skillsCount: obj.getSkillsCount()
  };
}

/**
 * Demonstrates: Removing Properties using 'delete'
 */
function demonstratePropertyRemoval(obj, propName) {
  const existedBefore = propName in obj;
  const deleted = delete obj[propName];
  const existsAfter = propName in obj;

  return {
    property: propName,
    existedBefore,
    deletedSuccessfully: deleted,
    existsAfter
  };
}

// ----------------------------------------------------------------------------
// 3. Execution in Developer Console
// ----------------------------------------------------------------------------
console.group("🚀 TASK 3: JAVASCRIPT OBJECTS DEMONSTRATION");

console.log("1. Object 1 (Intern Profile):", internProfile);
console.log("Summary Method Output:", internProfile.getInternshipSummary());

console.log("2. Object 2 (Tech Product):", techProduct);
console.log(`Discounted Price for ${techProduct.productName}: ₹${techProduct.getDiscountedPrice()}`);

console.log("3. Object 3 (Student Account):", studentAccount);
studentAccount.deposit(2000);
console.log("After depositing ₹2000, new balance:", studentAccount.currentBalance);

// Accessing Demo
console.log("Accessing Properties Demo:", demonstratePropertyAccess(internProfile));

// Creating deep copy for mutation demo
const demoIntern = JSON.parse(JSON.stringify(internProfile));
console.log("Update Demo:", demonstratePropertyUpdate(demoIntern, "Lead Software Architect Intern", 25000));
console.log("Addition Demo:", demonstratePropertyAddition(demoIntern));
console.log("Removal Demo (delete durationWeeks):", demonstratePropertyRemoval(demoIntern, "durationWeeks"));

// Object Utilities (Keys, Values, Entries)
console.log("Object.keys(internProfile):", Object.keys(internProfile));
console.log("Object.values(techProduct.specifications):", Object.values(techProduct.specifications));

console.groupEnd();

// ----------------------------------------------------------------------------
// 4. Interactive UI Controls for Webpage
// ----------------------------------------------------------------------------

// UI Active Working Object
let activeObjectKey = "intern";
const uiObjectsRegistry = {
  intern: {
    fullName: "Aitha Naveen",
    role: "Full-Stack Web Dev Intern",
    company: "Internnova Technologies",
    mentor: "Dr. Vikram Seth",
    durationWeeks: 8,
    stipendAmount: 15000,
    city: "Hyderabad"
  },
  product: {
    brand: "ASUS",
    name: "ROG Flow X16",
    price: 174999,
    discountRate: 12,
    ram: "32GB DDR5",
    storage: "1TB Gen4 SSD",
    inStock: true
  },
  wallet: {
    accountHolder: "Aitha Naveen",
    accountNumber: "ACC-8921-STU",
    balance: 14450.75,
    currency: "INR",
    kycVerified: true,
    branch: "Hitech City"
  }
};

function renderUiObjectInspector() {
  const container = document.getElementById("object-properties-grid");
  const currentObj = uiObjectsRegistry[activeObjectKey];
  if (!container || !currentObj) return;

  container.innerHTML = "";
  
  Object.entries(currentObj).forEach(([key, val]) => {
    const itemCard = document.createElement("div");
    itemCard.className = "card";
    itemCard.style.padding = "0.75rem";
    itemCard.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-family:var(--font-mono); font-weight:700; color:var(--text-highlight); font-size:0.85rem;">.${key}</span>
        <button class="btn btn-danger btn-sm" style="padding:0.15rem 0.45rem; font-size:0.7rem;" onclick="handleUiDeleteProperty('${key}')" title="delete obj['${key}']">delete</button>
      </div>
      <div style="margin-top:0.35rem; font-size:0.85rem; color:var(--text-primary); word-break:break-all;">
        ${typeof val === "string" ? `"${val}"` : val}
      </div>
      <div style="font-size:0.7rem; color:var(--text-muted); margin-top:0.25rem;">Type: ${typeof val}</div>
    `;
    container.appendChild(itemCard);
  });

  // Update Raw JSON Preview
  const jsonView = document.getElementById("object-json-preview");
  if (jsonView) {
    jsonView.textContent = JSON.stringify(currentObj, null, 2);
  }
}

function handleUiSelectObject(key) {
  activeObjectKey = key;
  renderUiObjectInspector();
  if (window.logToTerminal) window.logToTerminal(`[Task 3] Loaded Object: '${key.toUpperCase()}'`, "info");
}

function handleUiAddOrUpdateProperty() {
  const keyInput = document.getElementById("obj-prop-key");
  const valInput = document.getElementById("obj-prop-val");
  const key = keyInput?.value.trim();
  let val = valInput?.value.trim();

  if (!key) {
    alert("Please enter a property key name.");
    return;
  }

  // Type coercion for numbers / booleans
  if (val.toLowerCase() === "true") val = true;
  else if (val.toLowerCase() === "false") val = false;
  else if (!isNaN(val) && val !== "") val = Number(val);

  const currentObj = uiObjectsRegistry[activeObjectKey];
  const isUpdate = key in currentObj;
  
  currentObj[key] = val; // Add or update property
  
  keyInput.value = "";
  valInput.value = "";
  renderUiObjectInspector();

  if (window.logToTerminal) {
    window.logToTerminal(`[Task 3] ${isUpdate ? 'Updated' : 'Added'} property: obj.${key} = ${JSON.stringify(val)}`, "success");
  }
}

function handleUiDeleteProperty(key) {
  const currentObj = uiObjectsRegistry[activeObjectKey];
  if (delete currentObj[key]) {
    renderUiObjectInspector();
    if (window.logToTerminal) {
      window.logToTerminal(`[Task 3] Deleted property: delete obj.${key}`, "warn");
    }
  }
}
