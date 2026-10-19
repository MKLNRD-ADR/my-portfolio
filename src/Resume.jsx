const PDF_PATH = "/Mike_Lenard_Adriano_Resume.pdf";

const summary =
  "BSIT graduate (Web and Mobile Application Development) and full-stack developer who built the award-winning capstone platform that tracks performance for 200+ students. Experienced in databases, admin dashboards, role-based accounts, and record-tracking systems, with a strong documentation habit from internship and team projects. Quick to learn new tools and processes, and comfortable working with non-technical stakeholders in both development and IT support roles.";

const skills = [
  "Languages: JavaScript, TypeScript, PHP, Java, HTML, CSS, Dart, Python, C#, C++",
  "Frameworks & Libraries: React, Next.js, Node.js, Flutter, Tailwind CSS, Bootstrap, OpenCart (Twig), Django",
  "Databases: MySQL, PostgreSQL, Supabase, Firebase, SQLite | CRUD Operations, Record Management",
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

// ── Section heading (navy, bold, with rule) ─────────────────────
function Section({ title, children }) {
  return (
    <section className="mt-5">
      <h2 className="text-[15px] font-bold uppercase tracking-wide text-[#1F3864] border-b-2 border-[#1F3864] pb-[2px] mb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

// ── Bullet list ─────────────────────────────────────────────────
function Bullets({ items }) {
  return (
    <ul className="list-disc ml-6 sm:ml-7 text-[13.5px] leading-[1.5] text-[#222] marker:text-[#222]">
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
      <h3 className="text-[14.5px] font-bold text-[#222] leading-snug">{title}</h3>
      <span className="text-[13px] text-[#555] whitespace-nowrap">{period}</span>
    </div>
  );
}

export default function Resume() {
  return (
    <div
      className="min-h-screen bg-[#FFFFFF] py-6 sm:py-10 px-3 sm:px-6"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="max-w-[850px] mx-auto">
        {/* ── TOP BAR ── */}
        <div className="flex items-center justify-between mb-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-white text-[#0d0d0d] border border-[#e4e4e7] rounded-lg px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] hover:bg-[#f5f5f5] transition-colors"
            style={{ fontFamily: MONO }}
          >
            <span aria-hidden="true">←</span> Portfolio
          </a>

          <a
            href={PDF_PATH}
            download="Mike_Lenard_Adriano_Resume.pdf"
            className="inline-flex items-center gap-2 bg-[#0d0d0d] text-white rounded-lg px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] hover:bg-[#2a2a2a] transition-colors"
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
        <div className="bg-white border border-[#d4d4d8] shadow-[0_4px_24px_rgba(0,0,0,0.12)] px-5 sm:px-12 py-8 sm:py-10 text-[#222]">
          {/* Header */}
          <header>
            <h1 className="text-[28px] sm:text-[34px] font-bold uppercase leading-tight text-[#222]">
              Mike Lenard V. Adriano
            </h1>
            <p className="text-[15px] font-bold text-[#1F3864] mt-0.5">
              IT Support Staff | Full-Stack Developer
            </p>
            <p className="text-[12.5px] text-[#555] mt-1.5">
              mikelenard2004@gmail.com &nbsp;|&nbsp; +63 993 710 3961 &nbsp;|&nbsp; Angat, Bulacan, Philippines
            </p>
            <p className="text-[12.5px] text-[#555] mt-1">
              Portfolio:{" "}
              <a
                href="https://my-portfolio-mike-dev1.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1F3864] underline"
              >
                my-portfolio-mike-dev1.vercel.app
              </a>
            </p>
          </header>

          {/* Professional Summary */}
          <Section title="Professional Summary">
            <p className="text-[13.5px] leading-[1.5] text-[#222]">{summary}</p>
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
                  <p className="text-[12.5px] italic text-[#555] mb-0.5">{p.tech}</p>
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
