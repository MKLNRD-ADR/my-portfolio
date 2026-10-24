import { useEffect, useState } from "react";

const PDF_PATH = "/Mike_Lenard_Adriano_Resume.pdf";

const RESUME_THEMES = {
  light: {
    "--resume-bg": "#ffffff",
    "--resume-paper": "#ffffff",
    "--resume-fg": "#222222",
    "--resume-muted": "#555555",
    "--resume-line": "#d4d4d8",
    "--resume-accent": "#1F3864",
    "--resume-button": "#0d0d0d",
    "--resume-button-hover": "#2a2a2a",
    "--resume-button-text": "#ffffff",
    "--resume-soft": "#f5f5f5",
    "--resume-shadow": "0 4px 24px rgba(0,0,0,0.12)",
  },
  dark: {
    "--resume-bg": "#0b0b0b",
    "--resume-paper": "#151515",
    "--resume-fg": "#f1f1f1",
    "--resume-muted": "#a3a3a3",
    "--resume-line": "#363636",
    "--resume-accent": "#9ebbea",
    "--resume-button": "#f1f1f1",
    "--resume-button-hover": "#d6d6d6",
    "--resume-button-text": "#0d0d0d",
    "--resume-soft": "#242424",
    "--resume-shadow": "0 4px 24px rgba(0,0,0,0.55)",
  },
};

const summary =
  "BSIT graduate (Web and Mobile Application Development) and full-stack developer who built the award-winning capstone platform that tracks performance for 200+ students. Experienced in databases, admin dashboards, role-based accounts, and record-tracking systems, with a strong documentation habit from internship and team projects. Quick to learn new tools and processes, and comfortable working with non-technical stakeholders in both development and IT support roles.";

const skills = [
  "Languages: JavaScript, TypeScript, PHP, Java, HTML, CSS, Dart, Python, C#, C++",
  "Frameworks & Libraries: React, Next.js, Node.js, Flutter, Tailwind CSS, Bootstrap, OpenCart (Twig), Django",
  "Databases: MySQL, PostgreSQL, Supabase, Firebase, SQLite, Microsoft SQL Server | CRUD Operations, Record Management",
  "Office & Documentation: Microsoft Word, Microsoft Excel, Data Entry, Report Preparation, Record Keeping",
  "Tools: Git, GitHub, Vercel, VS Code | REST API Integration, OpenAI API",
  "Hardware & IT Support: PC/printer setup and troubleshooting, basic OS and network configuration, software installation/maintenance",
  "Professional Skills: Technical Documentation, Progress Reporting, Task Tracking, Clear Written and Verbal Communication, Teamwork with Non-Technical Stakeholders, Fast Learner of New Systems and SOPs, Attention to Detail",
];

const workExperience = [
  {
    title: "Front-End Developer Intern - SMESoft Inc.",
    period: "Dec 2025 – Mar 2026",
    bullets: [
      "Developed responsive user interfaces for an e-commerce platform, ensuring consistent layout and functionality across desktop and mobile devices.",
      "Built new features from team and stakeholder requirements, from UI components to interactive elements.",
      "Designed and integrated custom icons and visual assets to improve interface clarity and user experience.",
      "Documented every development task and presented progress in team meetings, updating task status after stakeholder approval to keep a clear, auditable project record.",
    ],
  },
  {
    title: "Freelance Developer - Self-Employed",
    period: "2024 – 2025",
    bullets: [
      "Built custom software projects for student clients from their written requirements, handling both front-end and back-end work.",
      "Implemented project features using HTML, CSS, JavaScript, PHP, Java, and MySQL, depending on each project's needs.",
      "Planned tasks, tracked deadlines, and delivered completed work according to agreed requirements.",
    ],
  },
];

const projects = [
  {
    title: "FireQuake Escape: Disaster Preparedness Training Game (Capstone Project, Best Capstone Award)",
    period: "2025",
    tech: "HTML, CSS, JavaScript, PHP, MySQL, Tailwind CSS, Bootstrap",
    bullets: [
      "Built the web platform and admin panel for a disaster-response capstone combining a 3D mobile game with a companion website.",
      "Implemented role-based accounts (Admin, Staff, and Student), each with tailored access to section and performance data.",
      "Automated performance tracking for 200+ students, allowing evaluators to quickly view, filter, and organize results by student and section.",
    ],
  },
  {
    title: "Café Crème: Coffee Shop Ordering & Management System",
    period: "2024",
    tech: "HTML, CSS, JavaScript, PHP, MySQL",
    bullets: [
      "Built a full-featured ordering and management web app with separate customer and admin interfaces.",
      "Admin side: Point-of-Sale (POS) system, inventory management, product management, and stock tracking.",
      "Added adjustable UI theming and data filtering across all major modules for faster searching and reporting.",
    ],
  },
  {
    title: "TaskFlow: AI-Assisted Task & Note Management Web App",
    period: "2026",
    tech: "Next.js, React, TypeScript, Node.js, Supabase, OpenAI API",
    bullets: [
      "Built a task management app with duplicate-detection and automated due-date/urgency tracking to keep large record sets organized and easy to search.",
    ],
  },
  {
    title: "Pocketra: Personal Budget & Wallet Management App",
    period: "2026",
    tech: "Flutter, Dart, Firebase",
    bullets: [
      "Developed a finance app that lets users divide and track balances across custom sections, with real-time totals and per-section logging.",
    ],
  },
];

const education = {
  degree: "Bachelor of Science in Information Technology",
  period: "2022 – 2026",
  bullets: [
    "Bulacan State University, Bustos Campus",
    "Specialization: Web and Mobile Application Development",
    "Awarded Best Capstone Project",
  ],
};

const MONO = "'Space Mono', 'JetBrains Mono', ui-monospace, monospace";

// ── Section heading (bold, with rule) ────────────────────────────
function Section({ title, children }) {
  return (
    <section className="mt-5">
      <h2 className="mb-2 border-b-2 border-[color:var(--resume-accent)] pb-[2px] text-[15px] font-bold uppercase tracking-wide text-[color:var(--resume-accent)]">
        {title}
      </h2>
      {children}
    </section>
  );
}

// ── Bullet list ─────────────────────────────────────────────────
function Bullets({ items }) {
  return (
    <ul className="ml-6 list-disc text-[13.5px] leading-[1.5] text-[color:var(--resume-fg)] marker:text-[color:var(--resume-fg)] sm:ml-7">
      {items.map((b, i) => (
        <li key={i} className="pl-1">
          {b}
        </li>
      ))}
    </ul>
  );
}

// ── Title row (bold title left, gray date right) ────────────────
function EntryHeader({ title, period }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <h3 className="text-[14.5px] font-bold leading-snug text-[color:var(--resume-fg)]">{title}</h3>
      <span className="whitespace-nowrap text-[13px] text-[color:var(--resume-muted)]">{period}</span>
    </div>
  );
}

export default function Resume() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "system";
    } catch {
      return "system";
    }
  });
  const [systemDark, setSystemDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () => setSystemDark(mediaQuery.matches);
    updateSystemTheme();
    mediaQuery.addEventListener("change", updateSystemTheme);
    return () => mediaQuery.removeEventListener("change", updateSystemTheme);
  }, []);

  useEffect(() => {
    const syncTheme = () => {
      try {
        setTheme(localStorage.getItem("theme") || "system");
      } catch {
        setTheme("system");
      }
    };
    window.addEventListener("storage", syncTheme);
    return () => window.removeEventListener("storage", syncTheme);
  }, []);

  const isDark = theme === "dark" || (theme === "system" && systemDark);
  const palette = isDark ? RESUME_THEMES.dark : RESUME_THEMES.light;

  return (
    <div
      className="min-h-screen bg-[var(--resume-bg)] px-3 py-6 text-[color:var(--resume-fg)] transition-colors duration-300 sm:px-6 sm:py-10"
      style={{ ...palette, fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="max-w-[850px] mx-auto">
        {/* ── TOP BAR ── */}
        <div className="flex items-center justify-between mb-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--resume-line)] bg-[var(--resume-paper)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--resume-fg)] transition-colors hover:bg-[var(--resume-soft)]"
            style={{ fontFamily: MONO }}
          >
            <span aria-hidden="true">←</span> Portfolio
          </a>

          <a
            href={PDF_PATH}
            download="Mike_Lenard_Adriano_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--resume-button)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--resume-button-text)] transition-colors hover:bg-[var(--resume-button-hover)]"
            style={{ fontFamily: MONO }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download Resume
          </a>
        </div>

        {/* ── PAPER ── */}
        <div className="border border-[color:var(--resume-line)] bg-[var(--resume-paper)] px-5 py-8 text-[color:var(--resume-fg)] shadow-[var(--resume-shadow)] sm:px-12 sm:py-10">
          {/* Header */}
          <header>
            <h1 className="text-[28px] font-bold uppercase leading-tight text-[color:var(--resume-fg)] sm:text-[34px]">
              Mike Lenard V. Adriano
            </h1>
            <p className="mt-0.5 text-[15px] font-bold text-[color:var(--resume-accent)]">
              IT Support Staff | Full-Stack Developer
            </p>
            <p className="mt-1.5 text-[12.5px] text-[color:var(--resume-muted)]">
              mikelenard2004@gmail.com &nbsp;|&nbsp; +63 993 710 3961 &nbsp;|&nbsp; Angat, Bulacan, Philippines
            </p>
            <p className="mt-1 text-[12.5px] text-[color:var(--resume-muted)]">
              Portfolio:{" "}
              <a
                href="https://my-portfolio-mike-dev1.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--resume-accent)] underline"
              >
                my-portfolio-mike-dev1.vercel.app
              </a>
            </p>
          </header>

          {/* Professional Summary */}
          <Section title="Professional Summary">
            <p className="text-[13.5px] leading-[1.5] text-[color:var(--resume-fg)]">{summary}</p>
          </Section>

          {/* Technical Skills */}
          <Section title="Technical Skills">
            <Bullets items={skills} />
          </Section>

          {/* Work Experience */}
          <Section title="Work Experience">
            <div className="flex flex-col gap-3">
              {workExperience.map((job) => (
                <div key={job.title}>
                  <EntryHeader title={job.title} period={job.period} />
                  <Bullets items={job.bullets} />
                </div>
              ))}
            </div>
          </Section>

          {/* Relevant Projects */}
          <Section title="Relevant Projects">
            <div className="flex flex-col gap-3">
              {projects.map((p) => (
                <div key={p.title}>
                  <EntryHeader title={p.title} period={p.period} />
                  <p className="mb-0.5 text-[12.5px] italic text-[color:var(--resume-muted)]">{p.tech}</p>
                  <Bullets items={p.bullets} />
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section title="Education">
            <EntryHeader title={education.degree} period={education.period} />
            <Bullets items={education.bullets} />
          </Section>
        </div>
      </div>
    </div>
  );
}
