import { useEffect, useState } from "react";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 70 },
  { name: "Tailwind CSS", level: 65 },
  { name: "Git & GitHub", level: 60 },
];

const projects = [
  {
    title: "Todo App",
    desc: "A simple task manager built with React and localStorage. Users can add, complete, and delete tasks.",
    tech: ["React", "CSS"],
    link: "#",
  },
  {
    title: "Weather App",
    desc: "Fetches real-time weather data using OpenWeatherMap API. Shows temperature, humidity, and conditions.",
    tech: ["JavaScript", "API", "HTML"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    desc: "This website! Built with React and Tailwind CSS as my Grade 12 capstone project.",
    tech: ["React", "Tailwind"],
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

    return () => {
      document.body.style.overflow = "";
    };
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
    <div className="bg-[#111] text-[#e8e0d0] min-h-screen font-sans text-[16px] md:text-[18px] overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111]/90 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 py-4 sm:py-5 flex justify-between items-center">
          <span className="text-sm sm:text-lg tracking-widest text-[#aaa] uppercase">Mike Lenard</span>
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className={`text-lg tracking-wide transition-colors ${
                    active === link ? "text-[#e8e0d0]" : "text-[#777] hover:text-[#ccc]"
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

      <div
        className={`fixed inset-0 z-[55] bg-black/55 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 h-screen z-[60] w-[78%] max-w-sm bg-[#161616] border-l border-white/10 p-6 pt-20 transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`w-full text-left px-4 py-3 rounded-xl text-lg tracking-wide transition-colors ${
                  active === link ? "bg-white/10 text-[#e8e0d0]" : "text-[#aaa] hover:bg-white/5 hover:text-[#e8e0d0]"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* HOME HERO */}
      <section id="home" className="relative h-[88vh] min-h-[520px] sm:min-h-[600px] max-h-[860px] overflow-hidden">

        {/* Top labels */}
        <div className="absolute top-20 sm:top-24 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-7 flex items-center justify-between">
            <div className="text-xs sm:text-base text-[#999] tracking-widest uppercase">Creative Presentation</div>
            <div className="text-[#999] text-lg sm:text-3xl">→</div>
          </div>
        </div>

        {/* Big PORTFOLIO text */}
        <div
          className="absolute inset-0 px-6 sm:px-8 md:px-4 pointer-events-none select-none z-0 flex justify-center items-center -translate-y-4 sm:-translate-y-6 md:-translate-y-10"
        >
          <div className="relative inline-block">
            <p className="absolute -top-6 sm:-top-7 md:-top-10 right-0 md:-right-4 text-sm sm:text-xl md:text-4xl font-black text-[#e8e0d0] tracking-tight whitespace-nowrap">
              I'M WEB DEVELOPER
            </p>
            <h1
              className="font-black leading-none tracking-tight text-[#e8e0d0] whitespace-nowrap"
              style={{ fontSize: "clamp(56px, 15vw, 220px)" }}
            >
              POR
              <span style={{ WebkitTextStroke: "3px #e8e0d0", color: "transparent" }}>T</span>
              FOLIO
            </h1>
            <p className="absolute top-full mt-2 md:mt-4 left-1 md:left-2 text-sm sm:text-xl md:text-4xl font-black text-[#e8e0d0] tracking-tight whitespace-nowrap">
              DEVELOPER
            </p>
          </div>
        </div>

        {/* Bottom labels */}
        <div className="absolute inset-0 flex justify-center items-end pb-8 md:pb-12 pointer-events-none z-20 -translate-y-10 sm:-translate-y-16 md:-translate-y-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-base text-[#777] pointer-events-auto">
            <div>Mike Lenard</div>
            <div>www.reallygreatsite.com</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-32">
        <p className="text-base tracking-widest text-[#777] uppercase mb-6">01 — About Me</p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-12">Hi, I'm Anna.</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 text-[#bbb] leading-relaxed text-base sm:text-lg md:text-xl">
          <p>
            I'm a Grade 12 student from Manila, Philippines, currently learning web development.
            I started coding last year and I've been enjoying it ever since — especially building
            things I can actually see and click on.
          </p>
          <p>
            When I'm not coding, I draw, listen to music, and binge-watch YouTube tutorials.
            I'm planning to take up Computer Science in college and hopefully build cool stuff
            someday.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-white/5 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-base tracking-widest text-[#777] uppercase mb-6">02 — Skills</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-14">What I know so far</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-base sm:text-lg mb-3">
                  <span className="text-[#e8e0d0]">{skill.name}</span>
                  <span className="text-[#777]">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div
                    className="bg-[#e8e0d0] h-3 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-32">
        <p className="text-base tracking-widest text-[#777] uppercase mb-6">03 — Projects</p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-14">Things I've built</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-5 hover:border-white/25 transition-colors"
            >
              <h3 className="text-xl sm:text-2xl font-semibold">{p.title}</h3>
              <p className="text-[#999] text-base sm:text-lg leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm sm:text-base px-3 py-1.5 border border-white/15 rounded-full text-[#aaa]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                className="text-base text-[#e8e0d0] underline underline-offset-4 mt-3 w-fit"
              >
                View project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white/5 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-base tracking-widest text-[#777] uppercase mb-6">04 — Contact</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">Get in touch</h2>
          <p className="text-[#999] mb-10 md:mb-12 text-base sm:text-lg">
            Have questions or just want to say hi? Send me a message!
          </p>

          {sent ? (
            <div className="border border-white/15 rounded-3xl p-8 md:p-12 text-center text-[#bbb] text-lg sm:text-xl">
              <p className="text-4xl mb-4">✓</p>
              <p>Message sent! I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-transparent border border-white/15 rounded-xl px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg text-[#e8e0d0] placeholder-[#555] focus:outline-none focus:border-white/35 transition-colors"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-transparent border border-white/15 rounded-xl px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg text-[#e8e0d0] placeholder-[#555] focus:outline-none focus:border-white/35 transition-colors"
              />
              <textarea
                placeholder="Your message"
                rows={6}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-transparent border border-white/15 rounded-xl px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg text-[#e8e0d0] placeholder-[#555] focus:outline-none focus:border-white/35 transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-[#e8e0d0] text-[#111] rounded-xl py-4 sm:py-5 text-base sm:text-lg font-semibold hover:bg-white transition-colors"
              >
                Send message
              </button>
            </form>
          )}

          <div className="mt-12 md:mt-14 flex flex-col sm:flex-row gap-3 sm:gap-8 text-sm sm:text-base text-[#666]">
            <span>📧 anna@email.com</span>
            <span>📍 Manila, Philippines</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 sm:py-8 text-center text-sm sm:text-base text-[#555] px-4">
        Built with React + Tailwind CSS · Mike Lenard · 2025
      </footer>

    </div>
  );
}