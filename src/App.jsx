import { useEffect, useState } from "react";
import aboutImage from "./assets/aboutme.png";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 75 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Bootstrap", level: 80 },
  { name: "PHP", level: 80 },
  { name: "MySQL", level: 85 },
  { name: "Java", level: 70 },
  { name: "Git & GitHub", level: 75 },
];

const projects = [
  {
    title: "FireQuakeEscape",
    desc: "Web system and admin panel for a 3D evacuation simulation game with account management and performance tracking. Automated calculations for 200+ students' progress.",
    tech: ["React", "JavaScript", "MySQL"],
    link: "#",
  },
  {
    title: "E-commerce Website",
    desc: "Developed responsive front-end pages using OpenCart (Twig), HTML, CSS, and Bootstrap. Improved UI consistency while collaborating with backend developers via GitHub.",
    tech: ["HTML", "CSS", "Twig", "Bootstrap"],
    link: "#",
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
    <div className="bg-[#111] text-[#e8e0d0] min-h-screen font-sans overflow-x-hidden">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111]/90 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">
          <span className="text-sm tracking-widest text-[#aaa] uppercase">Mike Lenard V. Adriano</span>

          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className={`text-base tracking-wide transition-colors ${
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
                className={`w-full text-left px-4 py-3 rounded-xl text-base tracking-wide transition-colors ${
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
        <div className="absolute top-20 left-0 right-0">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 flex justify-between items-center">
            <span className="text-xs tracking-widest text-[#555] uppercase">Creative Presentation</span>
            <span className="text-[#555] text-xl">→</span>
          </div>
        </div>

        <div className="relative select-none text-center px-4">
          <h1
            className="font-black leading-none tracking-tight text-[#e8e0d0]"
            style={{ fontSize: "clamp(64px, 14vw, 200px)" }}
          >
            POR
            <span style={{ WebkitTextStroke: "2px #e8e0d0", color: "transparent" }}>T</span>
            FOLIO
          </h1>
        </div>

        <div className="absolute bottom-10 left-0 right-0">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 flex justify-between text-xs sm:text-sm text-[#555]">
            <span>Mike Lenard V. Adriano</span>
            <span>mikelenard2004@gmail.com</span>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <p className="text-sm tracking-widest text-[#666] uppercase mb-12">01 — About</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-[#444] mb-3">Hi, I'm</p>
              <h2
                className="font-black text-[#e8e0d0] leading-none tracking-tight mb-8"
                style={{ fontSize: "clamp(56px, 8vw, 96px)" }}
              >
                Mike Lenard.
              </h2>
              <div className="space-y-5 text-[#666] text-base sm:text-[17px] leading-[1.9]">
                <p>
                  Front-End Developer with a passion for building responsive, user-friendly web applications. Recently completed an internship developing e-commerce solutions using React, Tailwind CSS, and modern web technologies. Specialized in Web and Mobile Application Development.
                </p>
                <p className="text-[#555]">
                  BS Information Technology student at Bulacan State University. Experienced in full-stack development with expertise in HTML, CSS, JavaScript, PHP, MySQL, and emerging technologies like React and Django.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Angat, Bulacan", "Front-End Dev", "Full-Stack Ready", "Open to Opportunities"].map((chip) => (
                  <span
                    key={chip}
                    className="text-[11px] tracking-widest uppercase px-4 py-2 border border-white/10 rounded text-[#555]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <img
                src={aboutImage}
                alt="Anna portrait"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 md:py-32 bg-white/[0.03]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <p className="text-sm tracking-widest text-[#666] uppercase mb-12">02 — Skills</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-14">What I know so far</h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm sm:text-base mb-3">
                  <span className="text-[#e8e0d0]">{skill.name}</span>
                  <span className="text-[#555]">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2.5">
                  <div
                    className="bg-[#e8e0d0] h-2.5 rounded-full transition-all"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <p className="text-sm tracking-widest text-[#666] uppercase mb-12">03 — Projects</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-14">Things I've built</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="border border-white/10 rounded-2xl p-7 flex flex-col gap-4 hover:border-white/20 transition-colors"
              >
                <h3 className="text-lg sm:text-xl font-semibold">{p.title}</h3>
                <p className="text-[#777] text-sm sm:text-base leading-relaxed flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs sm:text-sm px-3 py-1 border border-white/10 rounded-full text-[#888]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a href={p.link} className="text-sm text-[#e8e0d0] underline underline-offset-4 mt-1 w-fit hover:text-white transition-colors">
                  View project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 md:py-32 bg-white/[0.03]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <p className="text-sm tracking-widest text-[#666] uppercase mb-12">04 — Contact</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">Get in touch</h2>
          <p className="text-[#777] mb-12 text-base sm:text-lg">
            Have questions or just want to say hi? Send me a message!
          </p>

          <div className="max-w-2xl">
            {sent ? (
              <div className="border border-white/10 rounded-2xl p-10 text-center text-[#888]">
                <p className="text-3xl mb-4">✓</p>
                <p className="text-base sm:text-lg">Message sent! I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-transparent border border-white/10 rounded-xl px-5 py-4 text-base text-[#e8e0d0] placeholder-[#444] focus:outline-none focus:border-white/30 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-transparent border border-white/10 rounded-xl px-5 py-4 text-base text-[#e8e0d0] placeholder-[#444] focus:outline-none focus:border-white/30 transition-colors"
                />
                <textarea
                  placeholder="Your message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-transparent border border-white/10 rounded-xl px-5 py-4 text-base text-[#e8e0d0] placeholder-[#444] focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="bg-[#e8e0d0] text-[#111] rounded-xl py-4 text-base font-semibold hover:bg-white transition-colors"
                >
                  Send message
                </button>
              </form>
            )}

            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-8 text-sm text-[#555]">
              <span>mikelenard2004@gmail.com</span>
              <span>+63 993 710 3961</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-6 text-center text-sm text-[#444]">
        Built with React + Tailwind CSS · Mike Lenard V. Adriano · 2025
      </footer>

    </div>
  );
}