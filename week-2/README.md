# Week 2 Assignment: CSS Fundamentals

**Internship Program:** Internnova Web Development Internship  
**Student Name:** Aitha Naveen  
**GitHub Profile:** [@aithanaveen](https://github.com/aithanaveen)  
**Repository:** [aithanaveen/internnova-internship](https://github.com/aithanaveen/internnova-internship)  
**Topic:** CSS Fundamentals (Selectors, Box Model, Flexbox, Grid, Media Queries, Mini Project)  
**Total Marks:** 100 / 100  
**Submission ZIP:** `WD_Week2_AithaNaveen.zip`  
**Submission Format:** ZIP Folder + Google Drive Link  

---

## 🎯 Objective

The objective of this assignment is to understand the fundamentals of CSS (Cascading Style Sheets) by learning how to:
1. Style HTML webpages with modular, maintainable, external CSS.
2. Utilize different selector specificity levels (Universal, Element, Class, ID).
3. Manage dimensions, spacing, margins, padding, and depth using the **CSS Box Model**.
4. Construct flexible one-dimensional layouts using **CSS Flexbox**.
5. Build structured two-dimensional layouts using **CSS Grid**.
6. Design fluid, adaptive layouts using **CSS Media Queries** across mobile, tablet, and desktop viewports.
7. Combine all concepts into a complete, modern **Mini CSS Project** (*NovaSphere Cloud & AI Platform*).

---

## 📂 Project Directory Structure

```text
week-2/
├── WD_Week2_AithaNaveen.zip     # Complete Submission ZIP Archive
├── index.html                   # Master Assignment Portal & Evaluation Hub
├── task1_selectors.html         # Task 1: CSS Syntax, Selectors, Colors & Typography
├── task2_boxmodel.html          # Task 2: CSS Box Model, Spacing, Borders & Shadows
├── task3_flexbox.html           # Task 3: Flexbox Layouts, Alignments & Direction
├── task4_grid.html              # Task 4: CSS Grid, Multi-Column, Bento & Dashboard
├── task5_responsive.html        # Task 5: Responsive Design & Media Queries
│
├── task6_project/               # Task 6: Complete Mini CSS Project
│   ├── index.html               # NovaSphere Cloud & AI Platform Landing Page
│   └── css/
│       └── style.css            # Task 6 Master Stylesheet
│
├── css/
│   ├── common.css               # Shared design tokens, reset, header & footer
│   ├── hub.css                  # Styles for master assignment portal (index.html)
│   ├── task1.css                # External CSS for Task 1
│   ├── task2.css                # External CSS for Task 2
│   ├── task3.css                # External CSS for Task 3
│   ├── task4.css                # External CSS for Task 4
│   └── task5.css                # External CSS for Task 5
│
├── create_zip.ps1               # Automated submission zip generation script
└── README.md                    # Project documentation & evaluation mapping
```

---

## 📊 Evaluation Criteria & Task Breakdown (100 Marks)

| Task | Focus Area | Marks | Deliverable Page | Key Implementation Highlights |
| :--- | :--- | :---: | :--- | :--- |
| **Task 1** | **Introduction to CSS & Selectors** | **20** | [`task1_selectors.html`](task1_selectors.html) | Universal reset `*`, Element (`h1`, `p`, `blockquote`), Class (`.selector-card`), ID (`#unique-featured-banner`), Color models (HEX, RGB, RGBA, HSL, CSS variables), Gradients, Typography scale, and Text alignments. |
| **Task 2** | **CSS Box Model & Styling** | **20** | [`task2_boxmodel.html`](task2_boxmodel.html) | 4-layer interactive Box Model diagram (Margin, Border, Padding, Content), side-by-side `content-box` vs `border-box` comparison, fixed/fluid width/height, auto margins, border styles (solid, dashed, dotted, double), border-radius (pills, 50% circle), and multi-layer box shadows. |
| **Task 3** | **Flexbox Layout** | **15** | [`task3_flexbox.html`](task3_flexbox.html) | Flex container (`display: flex`), `flex-direction` (row, row-reverse, column, column-reverse), 6 `justify-content` modes, cross-axis `align-items`, `gap: 1.5rem`, `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`, and real-world responsive feature cards & stats counter strip. |
| **Task 4** | **CSS Grid Layout** | **15** | [`task4_grid.html`](task4_grid.html) | Two-dimensional Grid container, fractional (`fr`) units, track spanning (`grid-column: span 2`, `grid-row: span 2`, `1 / -1`), modern Bento Grid showcase, 12-column administrative dashboard layout with chart widgets, and auto-fit responsive project gallery. |
| **Task 5** | **Responsive Design & Media Queries** | **15** | [`task5_responsive.html`](task5_responsive.html) | Live viewport breakpoint detector badge, Mobile (`<768px`), Tablet (`768px-1024px`), Desktop (`>1024px`), fluid `clamp()` typography, responsive images with `object-fit: cover`, adaptive 2:1 to 1:1 column collapse, and 4 &rarr; 2 &rarr; 1 card grid re-stacking. |
| **Task 6** | **Mini CSS Project** | **15** | [`task6_project/index.html`](task6_project/index.html) | **NovaSphere AI & Cloud Platform**: A complete, visually stunning web application combining all Week 2 concepts. Features sticky glassmorphism navigation, hero with interactive console mockup, Bento Grid features, Flexbox services, Box Model pricing tiers, testimonials, contact form, and 4-column responsive footer. |
| **TOTAL** | **Full Assignment Scope** | **100** | &mdash; | **All 6 Tasks Complete & Verified** |

---

## 🚀 How to Run & Preview Locally

1. Open this folder in your browser by opening [`index.html`](index.html).
2. Use the sticky navigation bar at the top of each page to easily navigate between the **Overview Hub**, **Tasks 1-5**, and the **Task 6 Mini Project**.
3. Resize your browser window or press `F12` to open DevTools device emulation to test responsiveness across Mobile, Tablet, and Desktop resolutions.

---

## 📤 Submission Instructions

1. **ZIP Archive:**
   The required ZIP archive has already been generated:
   ```text
   WD_Week2_AithaNaveen.zip
   ```
   *(To regenerate at any time, run: `powershell -ExecutionPolicy Bypass -File .\create_zip.ps1 -StudentName "AithaNaveen"`)*

2. **Upload to Google Drive:**
   - Upload `WD_Week2_AithaNaveen.zip` to Google Drive.
   - Right-click the uploaded file &rarr; select **Share**.
   - Under General Access, select **"Anyone with the link can view"**.
   - Copy the shareable link.

3. **Submit on Internship Portal:**
   - Paste the Google Drive link into the submission box on the Internnova internship portal.
