import aboutImage from "./assets/aboutme.png";

const LABEL = "text-[11px] font-semibold tracking-[0.12em] uppercase";

const workExperience = [
  {
    role: "Front-End Developer Intern",
    company: "E-commerce Website Project",
    period: "Dec 2025 – Mar 2026",
    bullets: [
      "Developed and implemented responsive user interfaces for an e-commerce platform, ensuring consistent layout and functionality across desktop and mobile devices.",
      "Built new features based on team and stakeholder requirements, from UI components to interactive elements.",
      "Designed and integrated custom icons and visual assets to improve interface clarity and overall user experience.",
      "Documented each development task and presented progress during team meetings; updated task status to 'Completed' upon stakeholder approval, maintaining a clear record of project progress.",
    ],
  },
];

const projects = [
  {
    title: "FireQuakeEscape",
    badge: "Best Capstone Project",
    role: "Web Developer",
    bullets: [
      "Built the web platform and admin panel for a disaster-response capstone combining a 3D mobile game with a companion website.",
      "Mobile component, built by teammates, modeled the BSU campus in Blender for a 3D fire and earthquake escape simulation.",
      "Implemented role-based accounts — Admin, Staff, and Student — each with tailored access to section and performance data.",
      "Automated performance tracking for 200+ students and added data filtering platform-wide, improving evaluation efficiency by 100%.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "TaskFlow",
    badge: null,
    role: "Full-Stack Developer",
    bullets: [
      "Built a task management app that organizes notes into custom sections, with tasks added under each one.",
      "Implemented fuzzy-matching duplicate detection to flag similar task titles even with typos, plus an AI-powered title-improvement suggestion feature.",
      "Added voice-to-text input for task creation, due-date scheduling with automatic color-coded urgency indicators, and a completion checkbox.",
      "Integrated an AI assistant that scans all sections and tasks to surface the one closest to its deadline, alongside filtering tools for managing large task lists.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Supabase", "OpenAI API"],
  },
  {
    title: "Pocketra",
    badge: null,
    role: "Mobile App Developer",
    bullets: [
      "Developed a finance app that lets users virtually divide their total balance into custom 'sections' (sub-wallets) for specific purposes, e.g., setting aside a fixed allowance while it stays part of the overall balance.",
      "Enabled users to log expenses per section and track real-time totals for remaining balance and total amount spent.",
    ],
    tech: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Café Crème",
    badge: null,
    role: "Full-Stack Developer",
    bullets: [
      "Built a full-featured ordering and management web app with separate customer and admin interfaces.",
      "Customer side: browse the menu, fully customize drinks, and place orders online.",
      "Admin side: Point-of-Sale (POS) system, inventory management, product management, stock tracking, and a top-selling-items dashboard.",
      "Added adjustable UI theming (background color customization) and data filtering across all major modules for faster searching and reporting.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "Bulacan State University — Bustos Campus",
  period: "2022 – 2026",
  specialization: "Web and Mobile Application Development",
};

const techStack = [
  { label: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Responsive Design"] },
  { label: "Backend", items: ["Node.js", "Express.js", "PHP", "Django"] },
  { label: "Database", items: ["MySQL", "SQLite", "PostgreSQL (Supabase)"] },
  { label: "Mobile", items: ["Flutter", "Dart"] },
  { label: "Programming Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C#", "Dart"] },
  { label: "Tools", items: ["Git", "GitHub", "Vercel", "VS Code"] },
  { label: "APIs & Data", items: ["REST API Integration", "OpenAI API", "JSON"] },
];

// ── Section wrapper ──────────────────────────────────────────────
function Section({ icon, title, children }) {
  return (
    <div className="rounded-2xl border border-[#2a2a2a] bg-[#161616] p-6">
      <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[#2a2a2a]">
        <span className="text-[#666]">{icon}</span>
        <h2 className="text-[14px] font-extrabold text-[#e8e0d0] tracking-[-0.02em]">{title}</h2>
      </div>
      {children}
    </div>
  );
}

// ── Bullet list ──────────────────────────────────────────────────
function BulletList({ items }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((b, i) => (
        <li key={i} className="flex gap-3 text-[13px] font-normal leading-[1.8] text-[#777]">
          <span className="mt-[8px] w-1 h-1 rounded-full bg-[#4d4943] flex-shrink-0" />
          {b}
        </li>
      ))}
    </ul>
  );
}

// ── Tech pill ───────────────────────────────────────────────────
function Pill({ text }) {
  return (
    <span className="rounded-[8px] border border-[#2a2a2a] px-3 py-1 text-[11px] font-medium text-[#666] hover:border-[#555] hover:text-[#9d968b] transition-colors cursor-default">
      {text}
    </span>
  );
}

export default function Resume() {
  return (
    <div
      className="bg-[#0f0f0f] text-[#e8e0d0] min-h-screen"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12">

        {/* ── PROFILE HEADER ── */}
        <div className="flex flex-col sm:flex-row items-start gap-6 mb-8 rounded-2xl border border-[#2a2a2a] bg-[#161616] p-6">
          <img
            src={aboutImage}
            alt="Mike Lenard"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover border border-[#2a2a2a] flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-[20px] sm:text-[24px] font-extrabold text-[#e8e0d0] tracking-[-0.03em]">
                Mike Lenard V. Adriano
              </h1>
            </div>
            <div className="flex items-center gap-1.5 text-[12px] text-[#555] mb-1">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Angat, Bulacan, Philippines
            </div>
            <p className="text-[13px] font-semibold text-[#9d968b] mb-4">
              Full-Stack Developer · Fresh BSIT Graduate
            </p>
            {/* Contact row */}
            <div className="flex flex-wrap gap-x-5 gap-y-1 mb-5">
              {[
                { label: "mikelenard2004@gmail.com" },
                { label: "+63 993 710 3961" },
                { label: "github.com/MKLNRD-ADR" },
              ].map(({ label }) => (
                <span key={label} className={`${LABEL} text-[#444]`}>{label}</span>
              ))}
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/Mike_Lenard_Adriano_Resume.pdf"
                download="Mike_Lenard_Adriano_Resume.pdf"
                className="flex items-center gap-2 bg-[#e8dfcf] text-[#111] px-4 py-2 rounded-lg text-[13px] font-semibold hover:bg-white transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Resume
              </a>
              <a
                href="mailto:mikelenard2004@gmail.com"
                className="flex items-center gap-2 border border-[#3c3933] text-[#e8e0d0] px-4 py-2 rounded-lg text-[13px] font-semibold hover:bg-white/5 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Send Email
              </a>
              <a
                href="/"
                className="flex items-center gap-2 border border-[#2a2a2a] text-[#555] px-4 py-2 rounded-lg text-[13px] font-semibold hover:bg-white/5 hover:text-[#e8e0d0] transition-colors"
              >
                ← Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* ── ROW 1: Work Experience + Education ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 mb-5">

          {/* Work Experience */}
          <Section icon={
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          } title="Work Experience">
            {workExperience.map((job, i) => (
              <div key={i}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-[14px] font-extrabold text-[#e8e0d0] tracking-[-0.02em]">{job.role}</h3>
                    <p className="text-[12px] font-medium text-[#9d968b] mt-0.5">{job.company}</p>
                  </div>
                  <span className={`${LABEL} text-[#555] whitespace-nowrap`}>{job.period}</span>
                </div>
                <BulletList items={job.bullets} />
              </div>
            ))}
          </Section>

          {/* Education */}
          <Section icon={
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          } title="Education">
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-[14px] font-extrabold text-[#e8e0d0] tracking-[-0.02em] leading-snug">{education.degree}</h3>
                <span className={`${LABEL} text-[#555] whitespace-nowrap`}>{education.period}</span>
              </div>
              <p className="text-[12px] font-medium text-[#9d968b]">{education.school}</p>
              <div className="pt-3 border-t border-[#2a2a2a]">
                <p className={`${LABEL} text-[#555] mb-1`}>Specialization</p>
                <p className="text-[13px] font-medium text-[#777]">{education.specialization}</p>
              </div>
              <div className="pt-3 border-t border-[#2a2a2a]">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#c8b97a] bg-[#c8b97a]/10 px-3 py-1.5 rounded-lg">
                  🏆 Best Capstone Project
                </span>
              </div>
            </div>
          </Section>
        </div>

        {/* ── ROW 2: Projects (full width) ── */}
        <div className="mb-5">
          <Section icon={
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          } title="Projects">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {projects.map((p, i) => (
                <div key={i} className="flex flex-col gap-3 rounded-xl border border-[#2a2a2a] bg-[#111] p-4">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-0.5">
                      <h3 className="text-[13px] font-extrabold text-[#e8e0d0] tracking-[-0.02em] leading-snug">{p.title}</h3>
                      {p.badge && (
                        <span className="text-[10px] font-semibold tracking-wide text-[#c8b97a] bg-[#c8b97a]/10 px-2 py-0.5 rounded-md whitespace-nowrap">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] font-medium text-[#555]">{p.role}</p>
                  </div>
                  <BulletList items={p.bullets} />
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#2a2a2a]">
                    {p.tech.map((t) => <Pill key={t} text={t} />)}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* ── ROW 3: Tech Stack (full width) ── */}
        <div className="mb-8">
          <Section icon={
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
          } title="Tech Stack">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {techStack.map(({ label, items }) => (
                <div key={label}>
                  <p className={`${LABEL} text-[#555] mb-2.5`}>{label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => <Pill key={item} text={item} />)}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* ── FOOTER ── */}
        <div className="text-center">
          <span className={`${LABEL} text-[#333]`}>
            Mike Lenard V. Adriano · mikelenard2004@gmail.com · +63 993 710 3961
          </span>
        </div>

      </div>
    </div>
  );
}