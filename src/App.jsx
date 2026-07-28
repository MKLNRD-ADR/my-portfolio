import { useEffect, useState } from "react";
import aboutImage from "./assets/aboutme.png";
import { Link } from "react-router-dom";

// ─── TYPE SYSTEM ────────────────────────────────────────────────
// Font: Plus Jakarta Sans (add to index.html ↓)
//   <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;800;900&display=swap" rel="stylesheet">
//
// Scale:
//   Display  → font-[900] tracking-[-0.04em]   (Hero h1, section name h2)
//   Heading  → font-[800] tracking-[-0.03em]   (card titles)
//   Label    → font-[600] tracking-[0.12em] uppercase text-[11px]  (section labels, nav chips)
//   Body     → font-[400] leading-[1.85]        (paragraphs)
//   UI       → font-[500]                       (buttons, inputs, tags, nav links)
// ────────────────────────────────────────────────────────────────

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

const technicalSkills = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "OpenCart (Twig)"],
  },
  {
    category: "Backend",
    skills: ["PHP", "Node.js", "Next.js (API Routes)", "Django"],
  },
  {
    category: "Languages",
    skills: ["C#", "Java", "Python", "C++"],
  },
  {
    category: "Database",
    skills: ["MySQL", "SQLite", "PostgreSQL", "Supabase", "Firebase"],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Dart"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Vercel", "VS Code"],
  },
  {
    category: "APIs & Data",
    skills: ["REST API Integration", "OpenAI API"],
  },
];

const projects = [
  {
    title: "FireQuakeEscape",
    desc: "Built the web platform and admin panel for a disaster-response capstone combining a 3D mobile game with a companion website. Implemented role-based Admin, Staff, and Student accounts with automated performance tracking for 200+ students.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Tailwind CSS", "Bootstrap"],
    link: "https://firequakeescape.capstone-two.com/",
  },
  {
    title: "TaskFlow",
    desc: "Built a task management app with custom sections, fuzzy duplicate detection, AI-powered title-improvement suggestions, voice-to-text task creation, due-date urgency indicators, and an AI assistant for surfacing urgent tasks.",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "OpenAI API"],
    link: "https://my-saas-app-virid.vercel.app/",
  },
  {
    title: "Pocketra",
    desc: "Developed a finance app that lets users divide their total balance into custom sections for specific purposes, log expenses per section, and track real-time remaining balance and total amount spent.",
    tech: ["Flutter", "Dart", "Firebase"],
    link: "https://pocketra-website.vercel.app/",
  },
  {
    title: "Cafe Creme",
    desc: "Built a full-featured ordering and management web app with customer and admin interfaces, online ordering, POS, inventory and product management, stock tracking, a top-selling-items dashboard, theming, and filtering.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "#",
  },
];

// ─── SHARED CLASS TOKENS ─────────────────────────────────────────
// Label: used for "01 — About", nav links label variants, chip text
const LABEL = "text-[11px] font-semibold tracking-[0.12em] uppercase";

// Card shell
const CARD_SHELL =
  "overflow-hidden rounded-[20px] border border-[#3c3933] bg-[#171717] shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1";

// Card header
const CARD_HEADER = "border-b border-[#3c3933] bg-[#e8dfcf] px-6 py-5 text-[#111111]";

// Card title — heading weight
const CARD_TITLE = "text-[0.95rem] font-extrabold tracking-[-0.03em] leading-none";

// Tag pill
const TAG =
  "rounded-[10px] border border-[#4d4d4d] px-4 py-2 text-[13px] font-medium text-[#d8d1c4] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]";
// ─────────────────────────────────────────────────────────────────

export default function App() {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const scrollTo = (id) => {
    setActive(id);
    setIsMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // Root: single font family declared here, all children inherit
    <div
      className="bg-[#111] text-[#e8e0d0] min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111]/90 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">
          {/* Brand — label weight */}
          <span className={`${LABEL} text-[#aaa]`}>Mayk</span>

          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className={`text-[14px] font-medium tracking-wide transition-colors ${active === link ? "text-[#e8e0d0]" : "text-[#666] hover:text-[#bbb]"
                    }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg border border-white/15 text-[#e8e0d0]"
          >
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU OVERLAY ── */}
      <div
        className={`fixed inset-0 z-[55] bg-black/55 transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 h-screen z-[60] w-72 bg-[#161616] border-l border-white/10 px-6 pt-20 transition-transform duration-300 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`w-full text-left px-4 py-3 rounded-xl text-[14px] font-medium tracking-wide transition-colors ${active === link ? "bg-white/10 text-[#e8e0d0]" : "text-[#999] hover:bg-white/5 hover:text-[#e8e0d0]"
                  }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* ── HERO ── */}
      <section id="home" className="relative flex flex-col justify-center items-center h-screen min-h-[600px] max-h-[960px] overflow-hidden">
        {/* Top meta row */}
        <div className="absolute top-20 left-0 right-0">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 flex justify-between items-center">
            {/* Label weight — same as navbar brand */}
            <span className={`${LABEL} text-[#555]`}>Mike Lenard V. Adriano</span>
            <Link
              to="/resume"
              className={`${LABEL} text-[#555] underline underline-offset-4 hover:text-[#e8e0d0] transition-colors`}
            >
              View Resume →
            </Link>
          </div>
        </div>

        {/* Display heading — centered at all zoom levels */}
        <div className="relative select-none w-full px-6 sm:px-10 flex justify-center">
          <h1
            className="font-black leading-none text-[#e8e0d0] text-center"
            style={{
              fontSize: "clamp(52px, 11.5vw, 172px)",
              letterSpacing: "-0.04em",
            }}
          >
            POR
            <span style={{ WebkitTextStroke: "2px #e8e0d0", color: "transparent" }}>T</span>
            FOLIO
          </h1>
        </div>

        {/* Bottom meta row — stacked on mobile, side-by-side on sm+ */}
        <div className="absolute bottom-10 left-0 right-0">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
            <span className={`${LABEL} text-[#555]`}>mikelenard2004@gmail.com</span>
            <span className={`${LABEL} text-[#555]`}>github.com/MKLNRD-ADR</span>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <p className={`${LABEL} text-[#666] mb-8`}>01 — About</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className={`${LABEL} text-[#444] mb-2`}>Hi, I'm</p>
              <h2
                className="font-black text-[#e8e0d0] leading-none mb-6"
                style={{
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  letterSpacing: "-0.04em",
                }}
              >
                Mike Lenard.
              </h2>
              <div className="space-y-4 text-[#666] text-[15px] font-normal leading-[1.85]">
                <p>
                  A BS Information Technology student from Angat, Bulacan with a passion for creating modern, responsive, and user-friendly web applications. Through academic projects and internship experience, I have developed skills in HTML, CSS, JavaScript, React, PHP, MySQL, and modern development tools.
                </p>
                <p className="text-[#555]">
                  I enjoy solving problems through technology and continuously improving my skills as a developer. My goal is to build impactful digital solutions, contribute to meaningful projects, and grow into a professional full-stack developer.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Angat, Bulacan", "Problem Solver", "Full-Stack Ready", "Open to Opportunities"].map((chip) => (
                  <span key={chip} className={`${LABEL} px-3 py-1.5 border border-white/10 rounded text-[#555]`}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Image — capped so it doesn't dominate */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={aboutImage}
                alt="Mike Lenard portrait"
                className="w-full max-w-[320px] lg:max-w-[360px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 md:py-32 bg-white/[0.03]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <p className={`${LABEL} text-[#666] mb-12`}>02 — Technical Skills</p>
          {/* Section heading — extrabold, tight tracking (one step below display) */}
          <h2
            className="font-extrabold text-[#e8e0d0] mb-14"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}
          >
            What I know so far
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skillGroup) => (
              <div key={skillGroup.category} className={CARD_SHELL}>
                <div className={CARD_HEADER}>
                  {/* Card title — heading weight */}
                  <h3 className={CARD_TITLE}>{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3 px-6 py-8">
                  {skillGroup.skills.map((skill) => (
                    <span key={skill} className={TAG}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <p className={`${LABEL} text-[#666] mb-12`}>03 — Projects</p>
          <h2
            className="font-extrabold text-[#e8e0d0] mb-14"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}
          >
            Things I've built
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className={`${CARD_SHELL} flex flex-col`}>
                <div className={CARD_HEADER}>
                  <h3 className={CARD_TITLE}>{p.title}</h3>
                </div>
                <div className="flex flex-1 flex-col gap-5 px-6 py-8">
                  {/* Card body — same body spec as About */}
                  <p className="flex-1 text-[14px] font-normal leading-[1.85] text-[#9d968b]">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {p.tech.map((t) => (
                      <span key={t} className={TAG}>{t}</span>
                    ))}
                  </div>
                  {/* Link — UI weight */}
                  <a
                    href={p.link}
                    className="mt-1 w-fit text-[13px] font-medium text-[#e8dfcf] underline underline-offset-4 transition-colors hover:text-white"
                  >
                    View project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 md:py-32 bg-white/[0.03]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <p className={`${LABEL} text-[#666] mb-12`}>04 — Contact</p>
          <h2
            className="font-extrabold text-[#e8e0d0] mb-3"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}
          >
            Get in touch
          </h2>
          <p className="text-[#777] mb-12 text-[16px] font-normal leading-[1.85]">
            Have questions or just want to say hi? Send me a message!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT — Form */}
            <div>
              {sent ? (
                <div className="border border-white/10 rounded-2xl p-10 text-center text-[#888]">
                  <p className="text-3xl mb-4">✓</p>
                  <p className="text-[16px] font-normal">Message sent! I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {[
                    { type: "text", placeholder: "Your name", key: "name", value: form.name },
                    { type: "email", placeholder: "Your email", key: "email", value: form.email },
                  ].map(({ type, placeholder, key, value }) => (
                    <input
                      key={key}
                      type={type}
                      placeholder={placeholder}
                      required
                      value={value}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="bg-transparent border border-white/10 rounded-xl px-5 py-4 text-[15px] font-medium text-[#e8e0d0] placeholder-[#444] focus:outline-none focus:border-white/30 transition-colors"
                    />
                  ))}
                  <textarea
                    placeholder="Your message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-transparent border border-white/10 rounded-xl px-5 py-4 text-[15px] font-medium text-[#e8e0d0] placeholder-[#444] focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#e8e0d0] text-[#111] rounded-xl py-4 text-[15px] font-semibold hover:bg-white transition-colors"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT — Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                  label: "Phone Number",
                  line1: "+63 993 710 3961",
                  line2: null,
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: "Email Address",
                  line1: "mikelenard2004@gmail.com",
                  line2: null,
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.86L.057 23.882a.5.5 0 00.61.61l6.101-1.496A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.682-.522-5.205-1.428l-.364-.214-3.768.924.951-3.682-.236-.38A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                  ),
                  label: "WhatsApp",
                  line1: "+63 993 710 3961",
                  line2: null,
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.092 0L22.25 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  ),
                  label: "Home",
                  line1: "124 Encanto, Angat, Bulacan",

                },
              ].map(({ icon, label, line1, line2 }) => (
                <div
                  key={label}
                  className="flex flex-col gap-4 rounded-2xl border border-[#3c3933] bg-[#171717] p-6 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#e8dfcf]/10 text-[#e8dfcf]">
                    {icon}
                  </div>
                  <div>
                    <p className={`${LABEL} text-[#666] mb-1`}>{label}</p>
                    <p className="text-[13px] font-medium text-[#d8d1c4] leading-[1.7]">{line1}</p>
                    {line2 && (
                      <p className="text-[13px] font-medium text-[#888] leading-[1.7]">{line2}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-6 text-center">
        <span className={`${LABEL} text-[#444]`}>
          Built with React + Tailwind CSS · Mike Lenard V. Adriano · 2025
        </span>
      </footer>

    </div>
  );
}