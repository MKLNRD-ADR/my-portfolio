import { useEffect, useRef, useState } from "react";

// Portfolio chatbot: bottom-right launcher + chat panel.
// Uses the same CSS variables as App.jsx (--bg, --fg, --line, --chip, --mute, --faint),
// so it follows light / dark / system theme automatically.
// Answers come from the portfolio's own content (no backend or API key needed).

const MONO = { fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace" };

const QUICK_REPLIES = ["Projects", "Skills", "Contact", "Resume", "Availability"];

const KB = [
  {
    keys: ["hi", "hello", "hey", "yo", "sup"],
    reply: "Hi! I'm Mike's portfolio assistant. Ask me about his projects, skills, or how to reach him.",
  },
  {
    keys: ["who", "about", "yourself", "introduce", "background", "student", "study", "school"],
    reply:
      "Mike Lenard V. Adriano is a BS Information Technology student from Angat, Bulacan. He builds responsive, user-friendly web apps with React, PHP, MySQL, and Tailwind CSS, and is growing toward a full-stack developer role.",
  },
  {
    keys: ["project", "work", "built", "portfolio", "made"],
    reply:
      "Mike's projects:\n• FireQuakeEscape – web platform and admin panel for a disaster-response capstone, tracking 200+ students.\n• TaskFlow – AI-assisted task manager (Next.js, Supabase, OpenAI).\n• Pocketra – Flutter finance app that splits a balance into custom sections.\n• Cafe Creme – ordering, POS, and inventory web app (PHP, MySQL).",
  },
  {
    keys: ["firequake", "capstone", "disaster", "game"],
    reply:
      "FireQuakeEscape is a disaster-response capstone: a 3D mobile game with a companion website. Mike built the web platform and admin panel, with Admin, Staff, and Student roles and automated performance tracking for 200+ students. Stack: HTML, CSS, JavaScript, PHP, MySQL, Tailwind, Bootstrap.",
  },
  {
    keys: ["taskflow", "task", "todo", "openai", "ai"],
    reply:
      "TaskFlow is a task manager with custom sections, fuzzy duplicate detection, AI title suggestions, voice-to-text task creation, due-date urgency indicators, and an AI assistant that surfaces urgent tasks. Stack: Next.js, React, TypeScript, Node.js, Supabase, OpenAI API.",
  },
  {
    keys: ["pocketra", "finance", "money", "expense", "budget", "flutter", "mobile"],
    reply:
      "Pocketra is a Flutter + Firebase finance app. Users divide their balance into sections for specific purposes, log expenses per section, and see the remaining balance and total spent in real time.",
  },
  {
    keys: ["cafe", "creme", "pos", "ordering", "inventory", "coffee"],
    reply:
      "Cafe Creme is a full ordering and management web app with customer and admin sides: online ordering, POS, product and ingredient management, stock tracking, a top-selling dashboard, theming, and filtering. Open the project card's “View screenshots” to browse it.",
  },
  {
    keys: ["skill", "stack", "tech", "technology", "know", "language", "react", "php", "python", "java", "tool"],
    reply:
      "Skills:\n• Frontend: HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind, Bootstrap\n• Backend: PHP, Node.js, Django\n• Languages: C#, Java, Python, C++\n• Database: MySQL, SQLite, PostgreSQL, Supabase, Firebase\n• Mobile: Flutter, Dart\n• Tools: Git, GitHub, Vercel, VS Code",
  },
  {
    keys: ["contact", "email", "mail", "reach", "message", "phone", "number", "call", "whatsapp", "hire"],
    reply:
      "You can reach Mike at:\n• Email: mikelenard2004@gmail.com\n• Phone / WhatsApp: +63 993 710 3961\nOr use the contact form further down the page.",
  },
  {
    keys: ["resume", "cv"],
    reply: "You can view Mike's resume with the “View resume” button in the hero section, or go straight to /resume.",
  },
  {
    keys: ["available", "availability", "open", "opportunity", "job", "intern", "internship", "hiring"],
    reply:
      "Yes, Mike is open to opportunities. The quickest way to reach him is mikelenard2004@gmail.com.",
  },
  {
    keys: ["where", "location", "live", "based", "bulacan", "angat", "manila", "philippines"],
    reply: "Mike is based in Angat, Bulacan, Philippines (Manila time, UTC+8).",
  },
  {
    keys: ["github", "code", "repo", "source"],
    reply: "Mike's code is on GitHub: github.com/MKLNRD-ADR",
  },
  {
    keys: ["thanks", "thank", "ty"],
    reply: "You're welcome! Anything else you'd like to know?",
  },
];

const FALLBACK =
  "I'm not sure about that one. I can tell you about Mike's projects, skills, contact details, or availability. Or send him a message through the contact form.";

const GREETING = {
  from: "bot",
  text: "Hi! Ask me anything about Mike's work, or pick a topic below.",
};

function answer(input) {
  const words = input.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  let best = null;
  let bestScore = 0;
  for (const entry of KB) {
    const score = entry.keys.reduce(
      (n, k) => n + (words.some((w) => w === k || (k.length > 3 && w.startsWith(k))) ? 1 : 0),
      0
    );
    if (score > bestScore) {
      best = entry;
      bestScore = score;
    }
  }
  return best ? best.reply : FALLBACK;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);
  const inputRef = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const send = (text) => {
    const clean = text.trim();
    if (!clean || typing) return;
    setMessages((m) => [...m, { from: "user", text: clean }]);
    setInput("");
    setTyping(true);
    const t = setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: answer(clean) }]);
      setTyping(false);
    }, 550);
    timers.current.push(t);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[65] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <style>{`
        @keyframes chat-in { from { opacity: 0; transform: translateY(12px) scale(0.98); } to { opacity: 1; transform: none; } }
        @keyframes chat-dot { 0%, 80%, 100% { opacity: 0.25; } 40% { opacity: 1; } }
        .chat-panel { animation: chat-in 200ms ease-out both; transform-origin: bottom right; }
        .chat-dot { animation: chat-dot 1.1s infinite; }
        @media (prefers-reduced-motion: reduce) { .chat-panel, .chat-dot { animation: none; } }
      `}</style>

      {open && (
        <section
          role="dialog"
          aria-label="Chat with Mike's assistant"
          className="chat-panel flex h-[min(520px,calc(100vh-7rem))] w-[calc(100vw-2.5rem)] max-w-[360px] flex-col overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[var(--bg)] text-[color:var(--fg)] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.4)]"
        >
          {/* header */}
          <header className="flex items-center justify-between border-b border-[color:var(--line)] px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[var(--fg)]" />
              <div>
                <p style={MONO} className="text-[12px] font-bold tracking-tight">mayk.dev assistant</p>
                <p className="text-[11px] text-[color:var(--faint)]">Ask about Mike's work</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="rounded-md p-1.5 text-[color:var(--faint)] transition-colors hover:bg-[var(--chip)] hover:text-[color:var(--fg)]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </header>

          {/* messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <p
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-[13px] leading-[1.6] ${
                    m.from === "user"
                      ? "rounded-br-sm bg-[var(--fg)] text-[color:var(--bg)]"
                      : "rounded-bl-sm border border-[color:var(--line)] bg-[var(--chip)] text-[color:var(--fg)]"
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <span className="flex gap-1 rounded-2xl rounded-bl-sm border border-[color:var(--line)] bg-[var(--chip)] px-3.5 py-3" aria-label="Assistant is typing">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="chat-dot h-1.5 w-1.5 rounded-full bg-[var(--mute)]"
                      style={{ animationDelay: `${d * 160}ms` }}
                    />
                  ))}
                </span>
              </div>
            )}

            {messages.length === 1 && !typing && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="rounded-full border border-[color:var(--line)] bg-[var(--chip)] px-3 py-1.5 text-[12px] text-[color:var(--mute)] transition-colors hover:border-[color:var(--fg)] hover:text-[color:var(--fg)]"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-[color:var(--line)] p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question"
              aria-label="Your message"
              className="min-w-0 flex-1 rounded-lg border border-[color:var(--line)] bg-transparent px-3 py-2.5 text-[13px] text-[color:var(--fg)] placeholder:text-[color:var(--faint)] transition-colors focus:border-[color:var(--fg)] focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!input.trim() || typing}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--fg)] text-[color:var(--bg)] transition-opacity hover:opacity-80 disabled:opacity-30"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </section>
      )}

      {/* launcher */}
      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--fg)] text-[color:var(--bg)] shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)] transition-transform duration-150 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--fg)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.4 8.4 0 01-8.5 8.3c-1.2 0-2.3-.2-3.3-.6L4 21l1.5-4.6A8.1 8.1 0 014 11.5 8.4 8.4 0 0112.5 3.2 8.4 8.4 0 0121 11.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
