# 🚀 InternNova Official Homepage Redesign

> **Mandatory Real-World Project Task** | Web Development Internship  
> **Student Developer:** Naveen Aitha  
> **Repository:** [https://github.com/aithanaveen/internnova-internship](https://github.com/aithanaveen/internnova-internship)  
> **Original Reference:** [https://internnova.co.in](https://internnova.co.in)

---

## 🌟 Live Demo & Quick Launch

### ⚡ Run Locally in 5 Seconds (Zero Dependencies)
```bash
# 1. Open the project directory
cd "𝗜𝗻𝘁𝗲𝗿𝗻𝗡𝗼𝘃𝗮 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗛𝗼𝗺𝗲𝗽𝗮𝗴𝗲 𝗥𝗲𝗱𝗲𝘀𝗶𝗴𝗻"

# 2. Start the local server
node server.js
# Or using npm
npm start
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🎯 Project Objective

To perform a comprehensive UI/UX analysis of the official **InternNova** website and redesign the **entire homepage** into a state-of-the-art, high-converting, and modern web application.

The goal is to elevate InternNova's digital presence to match world-class engineering platforms (like Linear, Vercel, Supabase), while preserving its core brand identity as an accredited, MSME-registered virtual internship platform.

---

## 🔍 UI/UX Audit & Analysis of Original Website

| Section | Original Website Observation | Redesign Improvement |
| :--- | :--- | :--- |
| **Visual Aesthetics** | Generic dark palette, static backgrounds, limited depth | **Cosmic Obsidian glassmorphism**, ambient glowing orbs, fluid neon gradients (`#8b5cf6` & `#06b6d4`) |
| **Typography** | Default system sans-serif fonts | Curated **Outfit** (headings) & **Inter** (body) with **JetBrains Mono** for tech stacks |
| **Hero Section** | Standard text with basic buttons | **Dynamic time-aware greeting** ("Good Evening 🌙"), live pulse indicators, and an interactive **Developer Workspace Dashboard preview** |
| **Program Catalog** | Static cards with minimal curriculum breakdown | **Instant tab filtering** (Web, AI/Data, Cyber, Cloud, Pro Tracks) with a **detailed week-by-week curriculum modal** |
| **Certificate Verification** | External/basic lookup without rich visual preview | **Real-time Certificate Verification Tool** with instant student lookup (`IN-2026-WEB-8842`), verified seal, and preview modal |
| **Trust & Social Proof** | Basic text testimonials | **Filterable Student Wall of Love**, 4.95/5 star ratings, placement badges, and infinite-scrolling partner university marquee |
| **Application Process** | Redirects to static forms | **3-Step Application Wizard modal** with real-time validation and **instant Offer Letter preview** generation |
| **Interactivity** | Single static theme, minimal feedback | **Dark / Light mode switcher**, search-as-you-type FAQ accordion, toast notifications, cohort countdown clock |

---

## 📋 Complete Homepage Sections Implemented

1. **Top Announcement Bar**: Live cohort countdown clock (`03d : 14h : 22m`), Batch-08 alerts, and instant apply trigger.
2. **Glassmorphic Sticky Header**: InternNova brand logo with glowing rocket icon, MSME badge, smooth navigation links, theme switcher, LMS student login modal button, and mobile hamburger drawer.
3. **High-Impact Hero Section**:
   - Dynamic time-based greeting badge.
   - High-conversion headline & value proposition.
   - Dual CTAs (*Explore Programs* & *Verify Credential*).
   - Social proof stack (10,000+ interns, 4.95/5 stars).
   - Interactive developer student dashboard mockup with live PR merged badge and gold seal certificate.
4. **Impact & Key Metrics Counter Ribbon**: 10,000+ Students, 100% Verifiable Credentials, 4.9/5 Rating, 95% Completion Rate, 6+ Tech Domains.
5. **About InternNova**: Mission, college-to-corporate bridge, official Govt. MSME registration tag (`UDYAM-BR-24-0054689`), and key pedagogical pillars.
6. **Curated Internship Tracks (Filterable Catalog)**:
   - Full Stack Web Development (MERN / Next.js)
   - Artificial Intelligence & Machine Learning
   - Data Analytics & Business Intelligence (Power BI, SQL)
   - Cyber Security & Ethical Hacking
   - Cloud Computing & DevOps (AWS, Docker, Terraform)
   - Mobile App Development (Flutter, React Native)
   - Java & DSA Interview Masterclass
   - AI Agent Engineering & LLM Systems
7. **Interactive Credential Verification Portal**:
   - Live certificate lookup supporting sample IDs (`IN-2026-WEB-8842`, `IN-2026-AIML-4419`, `IN-2026-CYBER-9021`).
   - Renders authenticated modal with student name, verified grade, issue date, and direct share link.
8. **Why Choose InternNova (Comparison Matrix)**: Direct feature comparison between InternNova Pro vs traditional college/solo tutorial learning.
9. **4-Step Learning Roadmap**: Step-by-step visual roadmap from Day 1 Offer Letter to Graduation & Placement.
10. **Upcoming Live Workshops & Masterclasses**: RSVP cards with seats-left indicators and industry speakers (Ex-Amazon, AI Architects).
11. **Student Wall of Love (Testimonials)**: Filterable alumni stories with verified credentials, college affiliations (SLIIT, Anna Univ, Tribhuvan, VTU, DTU, UTM), and placement outcomes.
12. **University & Hiring Partners Marquee**: Seamless infinite-scrolling ticker with 100+ partner universities.
13. **Interactive FAQ Section**: Instant search-as-you-type filter and smooth accordion collapsible items.
14. **High-Conversion Call-To-Action (CTA)**: High-impact gradient banner with dynamic cohort timer and brochure download.
15. **Comprehensive Footer**: MSME legal registry, quick track links, student corner, newsletter subscription with toast feedback, and social links.
16. **Interactive Modals**:
    - Multi-Step Application Wizard (Personal -> Track -> Academics -> Generated Offer Letter).
    - Detailed Syllabus Drawer / Modal.
    - Certificate Verification Authentication Modal.
    - Intern Portal Login Modal.

---

## 🛠️ Technology Stack

- **Structure:** Semantic HTML5 (Single `<h1>`, accessible ARIA roles, clean SEO meta tags).
- **Styling:** Pure Vanilla CSS3 with CSS Custom Properties (Design Tokens), Glassmorphism, CSS Grid & Flexbox, smooth transitions, and complete responsive breakpoints (desktop, tablet, mobile).
- **Interactivity:** Modern ES6+ JavaScript modules (`app.js` and `data.js`) handling dynamic DOM rendering, theme persistence, and modal controllers.
- **Typography:** Google Fonts (`Outfit`, `Inter`, `JetBrains Mono`).
- **Icons:** FontAwesome 6.5.1 vector icons.
- **Backend / Dev Server:** Zero-dependency Node.js HTTP server (`server.js`).

---

## 📸 Screenshots & Visual Previews

All high-resolution screenshots are organized in the [`screenshots/`](./screenshots/) directory:

- **[`screenshots/01_homepage_hero_dark.png`](./screenshots/01_homepage_hero_dark.png)**: Dark Mode Hero Section with developer dashboard and live countdown.
- **[`screenshots/02_light_theme_toggle.png`](./screenshots/02_light_theme_toggle.png)**: Clean, high-contrast Light Mode UI.
- **[`screenshots/03_curriculum_modal.png`](./screenshots/03_curriculum_modal.png)**: Detailed Week-by-Week Curriculum breakdown modal.
- **[`screenshots/04_faq_interactive_search.png`](./screenshots/04_faq_interactive_search.png)**: Real-time search filter in FAQ section.
- **[`screenshots/05_verified_certificate_sample.jpg`](./screenshots/05_verified_certificate_sample.jpg)**: Official MSME-registered InternNova certificate sample.
- **[`screenshots/06_developer_dashboard_preview.jpg`](./screenshots/06_developer_dashboard_preview.jpg)**: High-tech developer workspace mockup.

---

## 🌐 Free 1-Click Deployment Options

### Option 1: GitHub Pages (Recommended)
1. In your GitHub repository settings, navigate to **Pages**.
2. Select **Source:** `Deploy from a branch` -> `main` -> `/ (root)`.
3. Your live link will be: `https://aithanaveen.github.io/internnova-internship/` (or repository folder).

### Option 2: Vercel (Instant)
```bash
npx vercel
```

### Option 3: Netlify
Drag and drop this project folder into [app.netlify.com/drop](https://app.netlify.com/drop).

---

## 📄 Submission Details
- **Task:** Mandatory Project Task - InternNova Official Homepage Redesign
- **Domain:** Web Development Internship
- **Submitted by:** Naveen Aitha
