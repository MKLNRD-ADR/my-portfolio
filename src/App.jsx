import { useEffect, useState } from "react";
import aboutImage from "./assets/aboutme.png";

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
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "PHP", "Django"],
  },
  {
    category: "Database",
    skills: ["MySQL", "SQLite", "PostgreSQL", "Supabase"],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Dart"],
  },
  {
    category: "Programming Languages",
    skills: ["JavaScript", "Python", "Java", "C#", "Dart"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Vercel", "VS Code"],
  },
  {
    category: "APIs & Data",
    skills: ["REST API Integration", "JSON"],
  },
];

const projects = [
  {
    title: "FireQuakeEscape",
    desc: "Web system and admin panel for a 3D evacuation simulation game with account management and performance tracking. Automated calculations for 200+ students' progress.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Tailwind", "Bootstrap"],
    link: "https://firequakeescape.capstone-two.com/",
  },
  {
    title: "Payroll System",
    desc: "User interface for employee and admin payroll features including salary computation, payslips, and records management with automated calculations.",
    tech: ["Java", "MySQL", "HTML", "CSS"],
    link: "#",
  },
  {
    title: "Watch Shop Management",
    desc: "Responsive web interface for product browsing, ordering, POS, and account management with organized layouts and integrated customer/admin features.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "#",
  },
  {
    title: "Coffee Shop System",
    desc: "Full-stack web application for product browsing, ordering, POS, and account management simulating real-world coffee shop operations.",
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
                  className={`text-[14px] font-medium tracking-wide transition-colors ${
                    active === link ? "text-[#e8e0d0]" : "text-[#666] hover:text-[#bbb]"
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
        className={`fixed inset-0 z-[55] bg-black/55 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 h-screen z-[60] w-72 bg-[#161616] border-l border-white/10 px-6 pt-20 transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`w-full text-left px-4 py-3 rounded-xl text-[14px] font-medium tracking-wide transition-colors ${
                  active === link ? "bg-white/10 text-[#e8e0d0]" : "text-[#999] hover:bg-white/5 hover:text-[#e8e0d0]"
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
            <button className={`${LABEL} text-[#555] underline underline-offset-4 hover:text-[#e8e0d0] transition-colors`}>
              View Resume →
            </button>
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
                  Front-End Developer with a passion for building responsive, user-friendly web applications. Recently completed an internship developing e-commerce solutions using React, Tailwind CSS, and modern web technologies. Specialized in Web and Mobile Application Development.
                </p>
                <p className="text-[#555]">
                  BS Information Technology student at Bulacan State University. Experienced in full-stack development with expertise in HTML, CSS, JavaScript, PHP, MySQL, and emerging technologies like React and Django.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Angat, Bulacan", "Front-End Dev", "Full-Stack Ready", "Open to Opportunities"].map((chip) => (
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
          {/* Subtitle — body weight */}
          <p className="text-[#777] mb-12 text-[16px] font-normal leading-[1.85]">
            Have questions or just want to say hi? Send me a message!
          </p>

          <div className="max-w-2xl">
            {sent ? (
              <div className="border border-white/10 rounded-2xl p-10 text-center text-[#888]">
                <p className="text-3xl mb-4">✓</p>
                <p className="text-[16px] font-normal">Message sent! I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Inputs — UI weight, consistent placeholder style */}
                {[
                  { type: "text",  placeholder: "Your name",  key: "name",    value: form.name },
                  { type: "email", placeholder: "Your email", key: "email",   value: form.email },
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
                {/* Button — UI weight */}
                <button
                  type="submit"
                  className="bg-[#e8e0d0] text-[#111] rounded-xl py-4 text-[15px] font-semibold hover:bg-white transition-colors"
                >
                  Send message
                </button>
              </form>
            )}

            {/* Contact details — label weight */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-8">
              <span className={`${LABEL} text-[#555]`}>mikelenard2004@gmail.com</span>
              <span className={`${LABEL} text-[#555]`}>+63 993 710 3961</span>
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