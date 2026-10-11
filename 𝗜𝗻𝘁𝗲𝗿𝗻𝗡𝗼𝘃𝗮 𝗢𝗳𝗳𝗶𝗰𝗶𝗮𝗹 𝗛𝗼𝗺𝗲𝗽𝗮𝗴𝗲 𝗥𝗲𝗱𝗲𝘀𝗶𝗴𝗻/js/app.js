// ==========================================================================
// InternNova Homepage Redesign - Main Application Logic
// Handles Theme Switcher, Dynamic Time Greeting, Cohort Countdown,
// Filterable Catalogs, Modals, Certificate Verification, and Accordions
// ==========================================================================

import {
  PROGRAMS_DATA,
  TESTIMONIALS_DATA,
  VERIFIED_CERTIFICATES_SAMPLE,
  WORKSHOPS_DATA,
  FAQ_DATA
} from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTimeGreeting();
  initCohortCountdown();
  initHeaderScroll();
  initMobileDrawer();
  renderPrograms('all');
  initProgramFilters();
  renderWorkshops();
  renderTestimonials();
  renderFaqs();
  initFaqSearch();
  initCertificateVerification();
  initApplicationModal();
  initCurriculumModal();
  initLoginModal();
  initBackToTop();
  initNewsletter();
  initQuickHelp();
});

/* ==========================================================================
   1. Theme Management (Dark / Light)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem('internnova-theme') || 'dark';
  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      showToast(`Switched to ${newTheme.toUpperCase()} theme`, 'info');
    });
  }

  function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('internnova-theme', theme);
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'fa-solid fa-sun';
      } else {
        themeIcon.className = 'fa-solid fa-moon';
      }
    }
  }
}

/* ==========================================================================
   2. Dynamic Time Greeting Badge
   ========================================================================== */
function initTimeGreeting() {
  const heroGreetingText = document.getElementById('heroGreetingText');
  if (!heroGreetingText) return;

  const currentHour = new Date().getHours();
  let greeting = 'Good Evening 🌙';

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good Morning ☀️';
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = 'Good Afternoon 🌤️';
  } else if (currentHour >= 17 && currentHour < 21) {
    greeting = 'Good Evening 🌙';
  } else {
    greeting = 'Welcome Night Owl 🌌';
  }

  heroGreetingText.innerHTML = `${greeting} &bull; Welcome to InternNova Batch-08`;
}

/* ==========================================================================
   3. Cohort Countdown Timer
   ========================================================================== */
function initCohortCountdown() {
  const countdownTimer = document.getElementById('countdownTimer');
  if (!countdownTimer) return;

  // Cohort target: 4 days from current date
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  targetDate.setHours(targetDate.getHours() + 14);

  function update() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      countdownTimer.innerText = 'Cohort Starting Today!';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');
    countdownTimer.innerText = `${pad(days)}d : ${pad(hours)}h : ${pad(minutes)}m : ${pad(seconds)}s`;
  }

  update();
  setInterval(update, 1000);

  // Close announcement top banner
  const closeBtn = document.getElementById('closeAnnouncement');
  const banner = document.getElementById('topAnnouncement');
  if (closeBtn && banner) {
    closeBtn.addEventListener('click', () => {
      banner.style.display = 'none';
    });
  }
}

/* ==========================================================================
   4. Header Sticky Scroll
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   5. Mobile Drawer Navigation
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const drawerItems = document.querySelectorAll('.drawer-item');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  drawerItems.forEach(item => {
    item.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   6. Render Programs & Filter Logic
   ========================================================================== */
function renderPrograms(filter = 'all') {
  const container = document.getElementById('programsGrid');
  if (!container) return;

  const filtered = filter === 'all'
    ? PROGRAMS_DATA
    : PROGRAMS_DATA.filter(p => p.category === filter);

  container.innerHTML = filtered.map(program => `
    <article class="program-card" data-id="${program.id}">
      <div>
        <div class="program-card-header">
          <span class="program-badge badge-${program.badgeType}">${program.badge}</span>
          <div class="program-rating">
            <i class="fa-solid fa-star"></i>
            <span>${program.rating}</span>
            <span style="color: var(--text-muted); font-size: 0.75rem;">(${program.reviewsCount})</span>
          </div>
        </div>

        <h3 class="program-title">${program.title}</h3>
        <p class="program-subtitle">${program.subtitle}</p>

        <div class="program-meta">
          <div class="meta-item">
            <i class="fa-regular fa-clock"></i>
            <span>${program.duration}</span>
          </div>
          <div class="meta-item">
            <i class="fa-solid fa-signal"></i>
            <span>${program.level}</span>
          </div>
        </div>

        <div class="tech-stack-chips">
          ${program.techStack.map(tech => `<span class="tech-chip">${tech}</span>`).join('')}
        </div>

        <ul class="program-highlights">
          ${program.highlights.slice(0, 3).map(h => `
            <li class="highlight-row">
              <i class="fa-solid fa-circle-check"></i>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="program-actions">
        <button class="btn btn-secondary btn-sm view-curr-btn" data-id="${program.id}">
          <i class="fa-regular fa-file-lines"></i> Curriculum
        </button>
        <button class="btn btn-primary btn-sm apply-track-btn" data-track="${program.title}">
          Apply Now <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </article>
  `).join('');

  // Attach button events
  document.querySelectorAll('.view-curr-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const progId = e.currentTarget.getAttribute('data-id');
      openCurriculumModal(progId);
    });
  });

  document.querySelectorAll('.apply-track-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const trackName = e.currentTarget.getAttribute('data-track');
      openApplicationModal(trackName);
    });
  });
}

function initProgramFilters() {
  const buttons = document.querySelectorAll('#programFilterTabs .filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderPrograms(filter);
    });
  });
}

/* ==========================================================================
   7. Render Workshops
   ========================================================================== */
function renderWorkshops() {
  const container = document.getElementById('workshopsGrid');
  if (!container) return;

  container.innerHTML = WORKSHOPS_DATA.map(ws => `
    <div class="workshop-card">
      <div>
        <div class="workshop-header">
          <span class="workshop-badge">${ws.badge}</span>
          <span class="seats-badge"><i class="fa-solid fa-fire"></i> ${ws.seatsLeft} seats left</span>
        </div>

        <h3 class="workshop-title">${ws.title}</h3>

        <div class="speaker-box">
          <div class="speaker-avatar-icon">${ws.speaker.charAt(0)}</div>
          <div class="speaker-details">
            <h4>${ws.speaker}</h4>
            <p>${ws.speakerRole}</p>
          </div>
        </div>

        <div class="workshop-schedule">
          <div class="schedule-row">
            <i class="fa-regular fa-calendar-days"></i>
            <span>${ws.date}</span>
          </div>
          <div class="schedule-row">
            <i class="fa-regular fa-clock"></i>
            <span>${ws.time}</span>
          </div>
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 24px;">
          ${ws.topics.map(t => `<span class="tech-chip">${t}</span>`).join('')}
        </div>
      </div>

      <button class="btn btn-secondary rsvp-btn" data-title="${ws.title}" style="width: 100%;">
        <i class="fa-regular fa-bell"></i> Reserve Free Seat
      </button>
    </div>
  `).join('');

  document.querySelectorAll('.rsvp-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const title = e.currentTarget.getAttribute('data-title');
      showToast(`Reserved your seat for: "${title}"! Check your email.`, 'success');
    });
  });
}

/* ==========================================================================
   8. Render Testimonials
   ========================================================================== */
function renderTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container) return;

  container.innerHTML = TESTIMONIALS_DATA.map(t => `
    <article class="testimonial-card">
      <div>
        <div class="testimonial-top">
          <div class="student-info">
            <img src="${t.avatar}" alt="${t.name}" class="student-avatar" loading="lazy">
            <div class="student-meta">
              <h4>${t.name}</h4>
              <p>${t.college}</p>
            </div>
          </div>
          <div class="verified-badge-mini">
            <i class="fa-solid fa-circle-check"></i> Verified
          </div>
        </div>

        <div style="color: #fbbf24; font-size: 0.88rem; margin-bottom: 12px;">
          ${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}
        </div>

        <p class="testimonial-quote">"${t.quote}"</p>
      </div>

      <div class="testimonial-footer">
        <div>
          <strong>${t.role}</strong>
        </div>
        <span class="credential-link verify-sample-link" data-id="${t.credentialId}">
          ${t.credentialId} &rarr;
        </span>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.verify-sample-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      verifyCredential(id);
    });
  });
}

/* ==========================================================================
   9. Render FAQ & Search
   ========================================================================== */
function renderFaqs(searchTerm = '') {
  const container = document.getElementById('faqList');
  if (!container) return;

  const normalized = searchTerm.toLowerCase().trim();
  const filtered = FAQ_DATA.filter(faq => 
    faq.question.toLowerCase().includes(normalized) ||
    faq.answer.toLowerCase().includes(normalized)
  );

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 12px; display: block;"></i>
        No matching questions found for "${searchTerm}". Please contact our support team!
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((faq, index) => `
    <div class="faq-item ${index === 0 && !searchTerm ? 'active' : ''}" data-id="${faq.id}">
      <button class="faq-question-btn" type="button" aria-expanded="${index === 0 && !searchTerm}">
        <span>${faq.question}</span>
        <i class="fa-solid fa-plus faq-icon"></i>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');

  // Accordion Toggle
  container.querySelectorAll('.faq-question-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const item = e.currentTarget.closest('.faq-item');
      const isActive = item.classList.contains('active');

      container.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

function initFaqSearch() {
  const searchInput = document.getElementById('faqSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    renderFaqs(e.target.value);
  });
}

/* ==========================================================================
   10. Certificate Verification
   ========================================================================== */
function initCertificateVerification() {
  const verifyForm = document.getElementById('verifyForm');
  const certInput = document.getElementById('certInputId');
  const sampleChips = document.querySelectorAll('.sample-chip');
  const resultModal = document.getElementById('certResultModal');
  const closeResultBtn = document.getElementById('closeCertResultModal');
  const copyLinkBtn = document.getElementById('copyCertLinkBtn');

  if (verifyForm) {
    verifyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = certInput.value.trim().toUpperCase();
      if (val) verifyCredential(val);
    });
  }

  sampleChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const id = chip.getAttribute('data-id');
      if (certInput) certInput.value = id;
      verifyCredential(id);
    });
  });

  if (closeResultBtn && resultModal) {
    closeResultBtn.addEventListener('click', () => {
      resultModal.classList.remove('open');
    });
    resultModal.addEventListener('click', (e) => {
      if (e.target === resultModal) resultModal.classList.remove('open');
    });
  }

  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', () => {
      const certId = document.getElementById('resCertId').innerText;
      const url = `https://internnova.co.in/verify/${certId}`;
      navigator.clipboard.writeText(url).then(() => {
        showToast('Verification URL copied to clipboard!', 'success');
      }).catch(() => {
        showToast('Link copied: ' + url, 'info');
      });
    });
  }
}

function verifyCredential(certId) {
  const resultModal = document.getElementById('certResultModal');
  const studentNameEl = document.getElementById('resStudentName');
  const certIdEl = document.getElementById('resCertId');
  const domainEl = document.getElementById('resDomain');
  const durationEl = document.getElementById('resDuration');
  const projectsListEl = document.getElementById('resProjectsList');

  const match = VERIFIED_CERTIFICATES_SAMPLE[certId] || {
    studentName: "Naveen Aitha",
    domain: "Full Stack Web Development",
    trackType: "Virtual Pro Internship",
    issueDate: "October 11, 2026",
    completionDuration: "6 Weeks (120 Hours)",
    grade: "Grade A+ (Distinction)",
    status: "Verified & Active",
    verificationId: certId,
    projectsCompleted: [
      "E-Commerce Microservice with Payment Gateway",
      "Real-Time Collaborative Kanban Dashboard",
      "Responsive Production Portfolio Website"
    ]
  };

  studentNameEl.innerText = match.studentName;
  certIdEl.innerText = match.verificationId;
  domainEl.innerText = match.domain;
  durationEl.innerText = `${match.completionDuration} • ${match.grade}`;

  projectsListEl.innerHTML = match.projectsCompleted.map(p => `
    <li><i class="fa-solid fa-check" style="color: var(--success); margin-right: 6px;"></i> ${p}</li>
  `).join('');

  resultModal.classList.add('open');
  showToast(`Credential ${certId} authenticated!`, 'success');
}

/* ==========================================================================
   11. Multi-Step Application Modal Wizard
   ========================================================================== */
function initApplicationModal() {
  const modal = document.getElementById('applicationModal');
  const closeBtn = document.getElementById('closeAppModal');
  const form = document.getElementById('multiStepAppForm');
  const successView = document.getElementById('applicationSuccessView');
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');

  // Trigger buttons
  const triggers = [
    document.getElementById('headerApplyBtn'),
    document.getElementById('heroExploreBtn'),
    document.getElementById('announcementApplyBtn'),
    document.getElementById('drawerApplyBtn'),
    document.getElementById('ctaApplyBtn')
  ];

  triggers.forEach(t => {
    if (t) {
      t.addEventListener('click', () => {
        if (t.id === 'heroExploreBtn') {
          document.getElementById('programs').scrollIntoView({ behavior: 'smooth' });
        } else {
          openApplicationModal();
        }
      });
    }
  });

  const heroVerifyTrigger = document.getElementById('heroVerifyTriggerBtn');
  if (heroVerifyTrigger) {
    heroVerifyTrigger.addEventListener('click', () => {
      document.getElementById('verify').scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }

  if (closeSuccessBtn && modal) {
    closeSuccessBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  // Wizard Step Switching
  const p1 = document.getElementById('wizardPane1');
  const p2 = document.getElementById('wizardPane2');
  const p3 = document.getElementById('wizardPane3');
  const ind1 = document.getElementById('wizardInd1');
  const ind2 = document.getElementById('wizardInd2');
  const ind3 = document.getElementById('wizardInd3');

  document.getElementById('wizardNextBtn1')?.addEventListener('click', () => {
    const name = document.getElementById('appFullName').value.trim();
    const email = document.getElementById('appEmail').value.trim();
    if (!name || !email) {
      showToast('Please fill out your Name and Email', 'warning');
      return;
    }
    p1.style.display = 'none';
    p2.style.display = 'block';
    ind1.className = 'step-indicator-item completed';
    ind2.className = 'step-indicator-item active';
  });

  document.getElementById('wizardPrevBtn2')?.addEventListener('click', () => {
    p2.style.display = 'none';
    p1.style.display = 'block';
    ind1.className = 'step-indicator-item active';
    ind2.className = 'step-indicator-item';
  });

  document.getElementById('wizardNextBtn2')?.addEventListener('click', () => {
    p2.style.display = 'none';
    p3.style.display = 'block';
    ind2.className = 'step-indicator-item completed';
    ind3.className = 'step-indicator-item active';
  });

  document.getElementById('wizardPrevBtn3')?.addEventListener('click', () => {
    p3.style.display = 'none';
    p2.style.display = 'block';
    ind2.className = 'step-indicator-item active';
    ind3.className = 'step-indicator-item';
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const college = document.getElementById('appCollege').value.trim();
      if (!college) {
        showToast('Please provide your College or University name', 'warning');
        return;
      }

      const candidateName = document.getElementById('appFullName').value.trim();
      const trackName = document.getElementById('appTrackSelect').value;

      document.getElementById('confCandidateName').innerText = candidateName;
      document.getElementById('confTrackName').innerText = trackName;

      form.style.display = 'none';
      document.querySelector('.wizard-steps-indicator').style.display = 'none';
      successView.style.display = 'block';

      showToast('Application submitted & Offer Letter generated!', 'success');
    });
  }
}

function openApplicationModal(preselectedTrack = null) {
  const modal = document.getElementById('applicationModal');
  const form = document.getElementById('multiStepAppForm');
  const successView = document.getElementById('applicationSuccessView');
  const trackSelect = document.getElementById('appTrackSelect');

  if (!modal) return;

  if (preselectedTrack && trackSelect) {
    for (let i = 0; i < trackSelect.options.length; i++) {
      if (trackSelect.options[i].text.includes(preselectedTrack) || trackSelect.options[i].value.includes(preselectedTrack)) {
        trackSelect.selectedIndex = i;
        break;
      }
    }
  }

  // Reset wizard to Step 1
  form.style.display = 'block';
  document.querySelector('.wizard-steps-indicator').style.display = 'flex';
  successView.style.display = 'none';
  document.getElementById('wizardPane1').style.display = 'block';
  document.getElementById('wizardPane2').style.display = 'none';
  document.getElementById('wizardPane3').style.display = 'none';
  document.getElementById('wizardInd1').className = 'step-indicator-item active';
  document.getElementById('wizardInd2').className = 'step-indicator-item';
  document.getElementById('wizardInd3').className = 'step-indicator-item';

  modal.classList.add('open');
}

/* ==========================================================================
   12. Curriculum Modal
   ========================================================================== */
function initCurriculumModal() {
  const modal = document.getElementById('curriculumModal');
  const closeBtn = document.getElementById('closeCurriculumModal');
  const applyBtn = document.getElementById('currApplyNowBtn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }

  if (applyBtn && modal) {
    applyBtn.addEventListener('click', () => {
      const title = document.getElementById('currModalTitle').innerText;
      modal.classList.remove('open');
      openApplicationModal(title);
    });
  }
}

function openCurriculumModal(programId) {
  const modal = document.getElementById('curriculumModal');
  const program = PROGRAMS_DATA.find(p => p.id === programId);
  if (!modal || !program) return;

  document.getElementById('currModalBadge').innerText = `${program.badge} • ${program.duration}`;
  document.getElementById('currModalTitle').innerText = program.title;
  document.getElementById('currModalSubtitle').innerText = program.subtitle;

  const techContainer = document.getElementById('currModalTech');
  techContainer.innerHTML = program.techStack.map(t => `<span class="tech-chip">${t}</span>`).join('');

  const weeksContainer = document.getElementById('currWeeksContainer');
  weeksContainer.innerHTML = program.curriculum.map(module => `
    <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 16px 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <strong style="color: var(--brand-secondary-light); font-size: 0.95rem;">${module.week}: ${module.title}</strong>
      </div>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 4px; font-size: 0.88rem; color: var(--text-secondary);">
        ${module.topics.map(tp => `<li><i class="fa-solid fa-angle-right" style="color: var(--brand-primary); margin-right: 6px;"></i> ${tp}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  modal.classList.add('open');
}

/* ==========================================================================
   13. Student LMS Login Modal
   ========================================================================== */
function initLoginModal() {
  const modal = document.getElementById('loginModal');
  const loginBtns = [
    document.getElementById('studentLoginBtn'),
    document.getElementById('drawerLoginBtn'),
    document.getElementById('footerLoginLink')
  ];
  const closeBtn = document.getElementById('closeLoginModal');
  const form = document.getElementById('lmsLoginForm');

  loginBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        if (modal) modal.classList.add('open');
      });
    }
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('lmsEmail').value.trim();
      modal.classList.remove('open');
      showToast(`Welcome back, ${email}! Loading your dashboard...`, 'success');
    });
  }
}

/* ==========================================================================
   14. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   15. Newsletter & Campus Ambassador
   ========================================================================== */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletterEmail');
      showToast(`Thank you! ${input.value} added to the cohort newsletter list.`, 'success');
      input.value = '';
    });
  }

  const ambLink = document.getElementById('ambassadorLink');
  if (ambLink) {
    ambLink.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Campus Ambassador applications open for 2026! Reach out to support@internnova.co.in', 'info');
    });
  }

  const brochureBtn = document.getElementById('ctaBrochureBtn');
  if (brochureBtn) {
    brochureBtn.addEventListener('click', () => {
      showToast('Downloading InternNova 2026 Track Brochure (PDF)...', 'success');
    });
  }
}

function initQuickHelp() {
  const helpBtn = document.getElementById('quickHelpBtn');
  if (helpBtn) {
    helpBtn.addEventListener('click', () => {
      showToast('Connecting to InternNova Student Help Desk...', 'info');
      window.open('https://wa.me/919999999999?text=Hello%20InternNova%20Team%2C%20I%20have%20an%20inquiry%20regarding%20virtual%20internships.', '_blank');
    });
  }
}

/* ==========================================================================
   16. Universal Toast Notification Utility
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const icon = type === 'success' ? 'fa-circle-check' : (type === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-info');
  const iconColor = type === 'success' ? 'var(--success)' : (type === 'warning' ? '#fbbf24' : 'var(--brand-secondary)');

  toast.innerHTML = `
    <i class="fa-solid ${icon}" style="color: ${iconColor}; font-size: 1.2rem;"></i>
    <div style="font-size: 0.9rem; color: var(--text-primary);">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
