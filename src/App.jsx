import { useEffect, useState } from "react";
import aboutImage from "./assets/aboutme.png";
import cafeAboutus1 from "./assets/cafe-creme/Cafe_Creme_Aboutus_page1.png";
import cafeAboutus2 from "./assets/cafe-creme/Cafe_Creme_Aboutus_page2.png";
import cafeAboutus3 from "./assets/cafe-creme/Cafe_Creme_Aboutus_page3.png";
import cafeAboutus4 from "./assets/cafe-creme/Cafe_Creme_Aboutus_page4.png";
import cafeAdminProfile from "./assets/cafe-creme/Cafe_Creme_Admin_Profile.png";
import cafeCart from "./assets/cafe-creme/Cafe_Creme_cart.png";
import cafeCheckout from "./assets/cafe-creme/Cafe_Creme_Checkout.png";
import cafeContactus1 from "./assets/cafe-creme/Cafe_Creme_Contactus_page1.png";
import cafeCustomize from "./assets/cafe-creme/Cafe_Creme_Customize.png";
import cafeDashboard from "./assets/cafe-creme/Cafe_Creme_dashboard.png";
import cafeForgotpassword from "./assets/cafe-creme/Cafe_Creme_Forgotpassword.png";
import cafeHome1 from "./assets/cafe-creme/Cafe_Creme_Home_page1.png";
import cafeHome2 from "./assets/cafe-creme/Cafe_Creme_Home_page2.png";
import cafeHome3 from "./assets/cafe-creme/Cafe_Creme_Home_page3.png";
import cafeHome4 from "./assets/cafe-creme/Cafe_Creme_Home_page4.png";
import cafeHome5 from "./assets/cafe-creme/Cafe_Creme_Home_page5.png";
import cafeLogin from "./assets/cafe-creme/Cafe_Creme_Login.png";
import cafeManageIngred from "./assets/cafe-creme/Cafe_Creme_Manage_ingred.png";
import cafeManageProducts from "./assets/cafe-creme/Cafe_Creme_Manage_products.png";
import cafeManageorder from "./assets/cafe-creme/Cafe_Creme_Manageorder.png";
import cafeMenuFilter from "./assets/cafe-creme/Cafe_Creme_Menu_filter.png";
import cafeMenu1 from "./assets/cafe-creme/Cafe_Creme_Menu_page1.png";
import cafeMenu2 from "./assets/cafe-creme/Cafe_Creme_Menu_page2.png";
import cafePaymentlist from "./assets/cafe-creme/Cafe_Creme_Paymentlist.png";
import cafePosReceipt from "./assets/cafe-creme/Cafe_Creme_POS_receipt.png";
import cafePos from "./assets/cafe-creme/Cafe_Creme_POS.png";
import cafeQueue from "./assets/cafe-creme/Cafe_Creme_Queue.png";
import cafeRegister from "./assets/cafe-creme/Cafe_Creme_Register.png";
import cafeTheme1 from "./assets/cafe-creme/Cafe_Creme_Theme_page1.png";
import cafeTheme2 from "./assets/cafe-creme/Cafe_Creme_Theme_page2.png";
import cafeUpdateProduct from "./assets/cafe-creme/Cafe_Creme_update_product.png";
import cafeUserList from "./assets/cafe-creme/Cafe_Creme_User_list.png";
import cafeVerify1 from "./assets/cafe-creme/Cafe_Creme_Verify_page1.png";
import cafeVerify2 from "./assets/cafe-creme/Cafe_Creme_Verify_page2.png";
import cafeVerify3 from "./assets/cafe-creme/Cafe_Creme_Verify_page3.png";
import cafeViewProduct from "./assets/cafe-creme/Cafe_Creme_View_product.png";
import cafeViewOrder from "./assets/cafe-creme/Cafe_Creme_ViewOrder.png";
import { Link } from "react-router-dom";
import ChatBot from "./ChatBot";


const hoverMatches = import.meta.glob("./assets/aboutme-hover.{png,jpg,jpeg,webp}", { eager: true, import: "default" });
const hoverImage = Object.values(hoverMatches)[0] || null;


const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

const technicalSkills = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "PHP", "Java", "HTML", "CSS", "Dart", "Python", "C#", "C++"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Flutter", "Tailwind CSS", "Bootstrap", "OpenCart (Twig)", "Django"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "Supabase", "Firebase", "SQLite", "CRUD Operations", "Record Management"],
  },
  {
    category: "Tools & APIs",
    skills: ["Git", "GitHub", "Vercel", "VS Code", "REST API Integration", "OpenAI API"],
  },
  {
    category: "Office & Docs",
    skills: ["Microsoft Word", "Microsoft Excel", "Data Entry", "Report Preparation", "Record Keeping"],
  },
  {
    category: "IT Support",
    skills: ["PC/Printer Setup & Troubleshooting", "Basic OS & Network Configuration", "Software Installation & Maintenance"],
  },
  {
    category: "Professional",
    skills: ["Technical Documentation", "Progress Reporting", "Task Tracking", "Written & Verbal Communication", "Teamwork with Non-Technical Stakeholders", "Fast Learner", "Attention to Detail"],
  },
];

const projects = [
  {
    title: "FireQuake Escape",
    desc: "Best Capstone Award winner. Built the web platform and admin panel for a disaster-response capstone combining a 3D mobile game with a companion website. Implemented role-based Admin, Staff, and Student accounts and automated performance tracking for 200+ students.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Tailwind CSS", "Bootstrap"],
    link: "https://firequakeescape.capstone-two.com/",
  },
  {
    title: "Café Crème",
    desc: "Built a full-featured ordering and management web app with separate customer and admin interfaces. The admin side includes a POS system, inventory and product management, and stock tracking, plus adjustable UI theming and data filtering across all major modules.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "#",
    screenshots: [
      { src: cafeHome1, label: "Home – Page 1" },
      { src: cafeHome2, label: "Home – Page 2" },
      { src: cafeHome3, label: "Home – Page 3" },
      { src: cafeHome4, label: "Home – Page 4" },
      { src: cafeHome5, label: "Home – Page 5" },
      { src: cafeAboutus1, label: "About Us – Page 1" },
      { src: cafeAboutus2, label: "About Us – Page 2" },
      { src: cafeAboutus3, label: "About Us – Page 3" },
      { src: cafeAboutus4, label: "About Us – Page 4" },
      { src: cafeMenu1, label: "Customer Menu" },
      { src: cafeMenu2, label: "Menu – Page 2" },
      { src: cafeContactus1, label: "Contact Us" },
      { src: cafeLogin, label: "Login" },
      { src: cafeForgotpassword, label: "Forgot Password" },
      { src: cafeRegister, label: "Register" },
      { src: cafeVerify1, label: "Verify – Page 1" },
      { src: cafeVerify2, label: "Verify – Page 2" },
      { src: cafeVerify3, label: "Verify – Page 3" },
      { src: cafeMenuFilter, label: "Menu Filter" },
      { src: cafeCustomize, label: "Drink Customization" },
      { src: cafeViewProduct, label: "View Product" },
      { src: cafeCart, label: "Cart" },
      { src: cafeCheckout, label: "Checkout" },
      { src: cafeViewOrder, label: "View Order" },
      { src: cafeDashboard, label: "Top-Selling Dashboard" },
      { src: cafeAdminProfile, label: "Admin Profile" },
      { src: cafeUserList, label: "User List" },
      { src: cafeTheme1, label: "Theme Settings – Page 1" },
      { src: cafeTheme2, label: "Theme Settings – Page 2" },
      { src: cafeManageProducts, label: "Manage Products" },
      { src: cafeUpdateProduct, label: "Update Product" },
      { src: cafePos, label: "POS System" },
      { src: cafePosReceipt, label: "POS Receipt" },
      { src: cafeQueue, label: "Order Queue" },
      { src: cafeManageIngred, label: "Manage Ingredients" },
      { src: cafePaymentlist, label: "Payment List" },
      { src: cafeManageorder, label: "Manage Orders" },
    ],
  },
  {
    title: "TaskFlow",
    desc: "Built an AI-assisted task and note management app with duplicate detection and automated due-date and urgency tracking to keep large record sets organized and easy to search.",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "OpenAI API"],
    link: "https://my-saas-app-virid.vercel.app/",
  },
  {
    title: "Pocketra",
    desc: "Developed a personal budget and wallet app that lets users divide and track balances across custom sections, with real-time totals and per-section logging.",
    tech: ["Flutter", "Dart", "Firebase"],
    link: "https://pocketra-website.vercel.app/",
  },
];

// ─── THEME PALETTES (CSS variables, swapped on the root element) ──
const THEMES = {
  light: {
    "--bg": "#ffffff",
    "--fg": "#0a0a0a",
    "--mute": "#5c5c5c",
    "--faint": "#8d8d8d",
    "--line": "#e7e7e7",
    "--chip": "#f7f7f7",
    "--phone": "#e4e4e0",
    "--phone-edge": "#bdbdb8",
    "--phone-shadow": "0 30px 60px -24px rgba(0,0,0,0.28), inset 0 0 0 1px rgba(255,255,255,0.9)",
  },
  dark: {
    "--bg": "#0b0b0b",
    "--fg": "#f1f1f1",
    "--mute": "#a3a3a3",
    "--faint": "#6e6e6e",
    "--line": "#262626",
    "--chip": "#151515",
    "--phone": "#151515",
    "--phone-edge": "#2d2d2d",
    "--phone-shadow": "0 30px 60px -24px rgba(0,0,0,0.85), inset 0 0 0 1px rgba(255,255,255,0.05)",
  },
};

// ─── SHARED CLASS TOKENS ─────────────────────────────────────────
// Label: section markers, nav, chip text
const LABEL = "mono text-[10.5px] font-medium tracking-[0.14em] uppercase";

// Pill chip (links, tags)
const CHIP =
  "mono inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[var(--chip)] px-3 py-1.5 text-[10.5px] font-medium tracking-[0.08em] uppercase text-[color:var(--mute)]";

// Buttons
const BTN_PRIMARY =
  "mono inline-flex items-center gap-2 rounded-md bg-[var(--fg)] px-5 py-3 text-[11px] font-bold tracking-[0.1em] uppercase text-[color:var(--bg)] transition-opacity hover:opacity-80";
const BTN_OUTLINE =
  "mono inline-flex items-center gap-2 rounded-md border border-[color:var(--line)] px-5 py-3 text-[11px] font-bold tracking-[0.1em] uppercase text-[color:var(--fg)] transition-colors hover:bg-[var(--chip)]";

// Form field
const FIELD =
  "w-full bg-transparent border border-[color:var(--line)] rounded-lg px-4 py-3.5 text-[14px] text-[color:var(--fg)] placeholder:text-[color:var(--faint)] focus:outline-none focus:border-[color:var(--fg)] transition-colors";

// Body copy
const BODY = "text-[15px] font-light leading-[1.85] text-[color:var(--mute)]";
// ─────────────────────────────────────────────────────────────────

const SECTION_IDS = navLinks.map((l) => l.toLowerCase());

// Section marker: outlined number + five-segment tracker (matches the sidebar rail) + title
const SectionMark = ({ index, title }) => (
  <div className="mb-10 flex items-center gap-4">
    <span
      className="mono outline-text text-[40px] font-extrabold leading-none tracking-[-0.03em]"
      aria-hidden="true"
    >
      {String(index).padStart(2, "0")}
    </span>
    <span className="flex gap-1" aria-hidden="true">
      {navLinks.map((_, i) => (
        <span
          key={i}
          className={`h-[3px] w-5 transition-colors ${i === index - 1 ? "bg-[var(--fg)]" : "bg-[var(--line)]"}`}
        />
      ))}
    </span>
    <span className={`${LABEL} text-[color:var(--faint)]`}>{title}</span>
  </div>
);

// Film-grain look for the phone photo (no sepia, so no brown tint)
// The grain is a static tiled image (rasterised once), NOT a live SVG filter: live feTurbulence
// filters are re-computed on every frame in iOS Safari and cause heavy lag.
const VINTAGE_FILTER = { filter: "contrast(1.1) saturate(0.8) brightness(1.08)" };
const GRAIN_BG = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;

// Phone portrait: a camera app on a phone that is white in light mode and dark in dark mode.
// Hover the shutter to swap the photo; click it to "take" a picture.
const PhoneCamera = ({ src, altSrc, alt }) => {
  const [hover, setHover] = useState(false);
  const [peek, setPeek] = useState(false); // touch devices: brief swap after a tap
  const [shots, setShots] = useState(0);
  const [thumb, setThumb] = useState(null);
  const [shutterDelay, setShutterDelay] = useState(0);

  const second = altSrc || src;
  const showSecond = hover || peek;

  const takePhoto = (e) => {
    setThumb(showSecond ? second : src);
    setShots((n) => n + 1);
    const type = e.nativeEvent && e.nativeEvent.pointerType;
    if (type && type !== "mouse") {
      // touch: swap the photo right away, let it be seen, then fire the shutter
      setShutterDelay(350);
      setPeek(true);
      setTimeout(() => setPeek(false), 1600);
    } else {
      setShutterDelay(0);
    }
  };

  const edge = "absolute w-[3px] bg-[var(--phone-edge)] transition-colors duration-300";

  return (
    <div className="mx-auto w-[270px]">
      <div className="relative">
        {/* side buttons */}
        <span className={`${edge} -left-[3px] top-24 h-8 rounded-l`} />
        <span className={`${edge} -left-[3px] top-36 h-12 rounded-l`} />
        <span className={`${edge} -right-[3px] top-32 h-16 rounded-r`} />

        {/* body */}
        <div
          className="rounded-[46px] border border-[color:var(--phone-edge)] bg-[var(--phone)] p-[10px] transition-colors duration-300"
          style={{ boxShadow: "var(--phone-shadow)" }}
        >
          {/* screen */}
          <div
            role="img"
            aria-label={alt}
            className="relative aspect-[9/19] select-none overflow-hidden rounded-[36px] bg-[var(--bg)] ring-1 ring-[color:var(--phone-edge)] transition-colors duration-300"
          >
            <img
              src={src}
              alt=""
              style={VINTAGE_FILTER}
              className={`absolute inset-0 h-full w-full object-cover object-top transition-[opacity,transform] duration-300 will-change-[opacity,transform] ${
                showSecond ? "scale-105 opacity-0" : "scale-100 opacity-100"
              }`}
            />
            <img
              src={second}
              alt=""
              style={VINTAGE_FILTER}
              className={`absolute inset-0 h-full w-full object-cover object-top transition-[opacity,transform] duration-300 will-change-[opacity,transform] ${
                showSecond ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />

            {/* static film grain */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.16]"
              style={{ backgroundImage: GRAIN_BG, backgroundSize: "160px 160px" }}
            />

            {/* rule-of-thirds grid */}
            <div className="pointer-events-none absolute inset-0">
              <span className="absolute inset-y-0 left-1/3 w-px bg-[var(--fg)] opacity-10" />
              <span className="absolute inset-y-0 left-2/3 w-px bg-[var(--fg)] opacity-10" />
              <span className="absolute inset-x-0 top-1/3 h-px bg-[var(--fg)] opacity-10" />
              <span className="absolute inset-x-0 top-2/3 h-px bg-[var(--fg)] opacity-10" />
            </div>

            {/* focus square appears while the shutter is hovered */}
            {showSecond && (
              <span className="focus-in pointer-events-none absolute left-1/2 top-[42%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 border border-[color:var(--fg)]" />
            )}

            {/* dynamic island */}
            <span className="absolute left-1/2 top-3 z-20 flex h-[22px] w-[78px] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-2">
              <span className="h-2 w-2 rounded-full bg-[#1a1d29] ring-1 ring-white/10" />
            </span>

            {/* flash icon */}
            <svg viewBox="0 0 24 24" className="absolute left-5 top-14 z-20 h-4 w-4 text-[color:var(--fg)]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
            </svg>

            {/* camera controls */}
            <div
              className="absolute inset-x-0 bottom-0 z-20 px-6 pb-6 pt-20"
              style={{ backgroundImage: "linear-gradient(to top, var(--bg) 0%, transparent 100%)" }}
            >
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="mono rounded-full bg-[var(--chip)] px-2 py-0.5 text-[10px] font-medium text-[color:var(--fg)]">1×</span>
                <span className="mono text-[10px] font-medium tracking-[0.14em] text-[color:var(--fg)]">PHOTO</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="h-10 w-10 overflow-hidden rounded-lg border border-[color:var(--line)] bg-[var(--chip)]">
                  {thumb && <img key={shots} src={thumb} alt="" style={VINTAGE_FILTER} className="thumb-pop h-full w-full object-cover object-top" />}
                </span>

                <button
                  type="button"
                  aria-label="Take photo"
                  onClick={takePhoto}
                  onPointerEnter={(e) => e.pointerType === "mouse" && setHover(true)}
                  onPointerLeave={() => setHover(false)}
                  onFocus={() => setHover(true)}
                  onBlur={() => setHover(false)}
                  className="group flex h-[66px] w-[66px] items-center justify-center rounded-full border-[3px] border-[color:var(--fg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--fg)]"
                >
                  <span className="h-[52px] w-[52px] rounded-full bg-[var(--fg)] transition-transform duration-150 group-hover:scale-95 group-active:scale-[0.8]" />
                </button>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--chip)] text-[color:var(--fg)]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 9V6h3M20 15v3h-3M5 11a7 7 0 0111-4.5M19 13a7 7 0 01-11 4.5" />
                  </svg>
                </span>
              </div>
            </div>

            {/* shutter animation: blades close, then a white flash */}
            {shots > 0 && (
              <div key={shots} className="pointer-events-none absolute inset-0 z-30">
                <span style={{ animationDelay: `${shutterDelay}ms` }} className="shot-top absolute inset-x-0 top-0 h-1/2 bg-black" />
                <span style={{ animationDelay: `${shutterDelay}ms` }} className="shot-bottom absolute inset-x-0 bottom-0 h-1/2 bg-black" />
                <span style={{ animationDelay: `${shutterDelay}ms` }} className="shot-flash absolute inset-0 bg-white" />
              </div>
            )}
          </div>
        </div>
      </div>

      <p className={`${LABEL} mt-5 text-center text-[9px] text-[color:var(--faint)]`}>
        Hover the shutter · Click to shoot
      </p>
    </div>
  );
};

// System / light / dark toggle
const ThemeToggle = ({ theme, setTheme }) => {
  const options = [
    {
      key: "system",
      label: "System theme",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16v11H4zM9 20h6M12 16v4" />,
    },
    {
      key: "light",
      label: "Light theme",
      icon: (
        <>
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </>
      ),
    },
    {
      key: "dark",
      label: "Dark theme",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z" />,
    },
  ];
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-[color:var(--line)] bg-[var(--chip)] p-1">
      {options.map((o) => (
        <button
          key={o.key}
          type="button"
          aria-label={o.label}
          aria-pressed={theme === o.key}
          onClick={() => setTheme(o.key)}
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
            theme === o.key
              ? "bg-[var(--bg)] text-[color:var(--fg)] shadow-[0_0_0_1px_var(--line)]"
              : "text-[color:var(--faint)] hover:text-[color:var(--fg)]"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {o.icon}
          </svg>
        </button>
      ))}
    </div>
  );
};

export default function App() {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [lightbox, setLightbox] = useState(null); // { project, index }
  const [scrollPct, setScrollPct] = useState(0);
  const [clock, setClock] = useState("");

  // Theme: "system" | "light" | "dark"
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "system";
    } catch {
      return "system";
    }
  });
  const [systemDark, setSystemDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystemDark(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  // Scroll progress for the sidebar rail
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Manila clock for the sidebar
  useEffect(() => {
    const tick = () =>
      setClock(
        new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Manila" }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  const activeIndex = Math.max(0, navLinks.indexOf(active));

  const isDark = theme === "dark" || (theme === "system" && systemDark);
  const palette = isDark ? THEMES.dark : THEMES.light;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen || lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen, lightbox]);

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const name = navLinks.find((l) => l.toLowerCase() === entry.target.id);
            if (name) setActive(name);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") {
        setLightbox((prev) =>
          prev ? { ...prev, index: (prev.index + 1) % prev.project.screenshots.length } : prev
        );
      }
      if (e.key === "ArrowLeft") {
        setLightbox((prev) =>
          prev
            ? { ...prev, index: (prev.index - 1 + prev.project.screenshots.length) % prev.project.screenshots.length }
            : prev
        );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

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

  // Languages used in projects (resume lists C# and C++ as "familiar", so they aren't counted)
  const languageCount =
  technicalSkills.find((g) => g.category === "Languages")?.skills.length ?? 0;
  const stats = [
    { value: `${projects.length}`, label: "Projects" },
    { value: `${languageCount}`, label: "Languages" },
    { value: "BSIT", label: "Graduate" },
  ];

  const contactCards = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: "Phone Number",
      line1: "+63 993 710 3961",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: "Email Address",
      line1: "mikelenard2004@gmail.com",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.86L.057 23.882a.5.5 0 00.61.61l6.101-1.496A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.682-.522-5.205-1.428l-.364-.214-3.768.924.951-3.682-.236-.38A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      ),
      label: "WhatsApp",
      line1: "+63 993 710 3961",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.092 0L22.25 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      label: "Location",
      line1: "Angat, Bulacan, Philippines",
    },
  ];

  return (
    // Root: theme variables are set here and inherited by everything below
    <div
      className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[color:var(--fg)] transition-colors duration-300"
      style={{ ...palette, fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        .mono { font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace; }
        @keyframes shot-top { 0% { transform: translateY(-100%); } 30%, 55% { transform: translateY(0); } 100% { transform: translateY(-100%); } }
        @keyframes shot-bottom { 0% { transform: translateY(100%); } 30%, 55% { transform: translateY(0); } 100% { transform: translateY(100%); } }
        @keyframes shot-flash { 0%, 30% { opacity: 0; } 40% { opacity: 0.95; } 100% { opacity: 0; } }
        @keyframes thumb-pop { 0% { transform: scale(1.7); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes focus-in { 0% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; } 60% { opacity: 1; } 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; } }
        .shot-top { animation: shot-top 480ms ease-out both; }
        .shot-bottom { animation: shot-bottom 480ms ease-out both; }
        .shot-flash { animation: shot-flash 480ms ease-out both; }
        .thumb-pop { animation: thumb-pop 400ms 250ms ease-out both; }
        .focus-in { animation: focus-in 300ms ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .shot-top, .shot-bottom, .shot-flash, .thumb-pop, .focus-in { animation: none; }
          .shot-top, .shot-bottom, .shot-flash { display: none; }
        }
        .outline-text {
          color: var(--bg);
          -webkit-text-stroke: 3px var(--fg);
          paint-order: stroke fill;
        }
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
      `}</style>

      {/* ── SIDEBAR (desktop): scroll-linked index rail ── */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[220px] flex-col justify-between px-7 py-8 lg:flex">
        <span className="mono text-[13px] font-bold tracking-tight">mayk.dev</span>

        {/* Rail: the line fills down to the section you're reading */}
        <nav aria-label="Primary">
          <div className="relative flex h-[300px] flex-col justify-between pl-7">
            <span className="absolute bottom-1 left-[3px] top-1 w-px bg-[var(--line)]" />
            <span
              className="absolute left-[3px] top-1 w-px bg-[var(--fg)] transition-[height] duration-500 ease-out"
              style={{ height: `calc((100% - 8px) * ${activeIndex / (navLinks.length - 1)})` }}
            />
            {navLinks.map((link, i) => {
              const isActive = i === activeIndex;
              const isPast = i < activeIndex;
              return (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  aria-current={isActive ? "true" : undefined}
                  className="group relative flex items-baseline gap-3 text-left"
                >
                  <span
                    className={`absolute -left-7 top-1/2 h-[7px] w-[7px] -translate-y-1/2 transition-all duration-300 ${
                      isActive
                        ? "scale-[1.6] bg-[var(--fg)]"
                        : isPast
                        ? "bg-[var(--fg)]"
                        : "border border-[color:var(--faint)] bg-[var(--bg)] group-hover:border-[color:var(--fg)]"
                    }`}
                  />
                  <span className="mono text-[9px] tracking-[0.1em] text-[color:var(--faint)]">0{i + 1}</span>
                  <span
                    className={`${LABEL} transition-all duration-300 ${
                      isActive
                        ? "translate-x-1 text-[color:var(--fg)]"
                        : "text-[color:var(--faint)] group-hover:translate-x-1 group-hover:text-[color:var(--fg)]"
                    }`}
                  >
                    {link}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        <div className="flex flex-col gap-5">
          {/* Live scroll counter */}
          <div>
            <p className="mono text-[34px] font-medium leading-none tracking-[-0.05em]" aria-hidden="true">
              {String(scrollPct).padStart(3, "0")}
              <span className="text-[14px] text-[color:var(--faint)]">%</span>
            </p>
            <p className={`${LABEL} mt-2 text-[9px] text-[color:var(--faint)]`}>Manila {clock}</p>
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <span className="mono break-all text-[9.5px] uppercase tracking-[0.08em] text-[color:var(--faint)]">
            mikelenard2004@gmail.com
          </span>
        </div>
      </aside>

      {/* ── TOP BAR (mobile / tablet) ── */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-[color:var(--line)] bg-[var(--bg)]/90 px-6 py-4 backdrop-blur lg:hidden">
        <span className="mono text-[13px] font-bold tracking-tight">mayk.dev</span>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-lg border border-[color:var(--line)] p-2"
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
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <div
        className={`fixed inset-0 z-[55] bg-black/55 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      {/* h-[100dvh] = visible viewport height on mobile; toggle sits right under the links so it's never cut off */}
      <aside
        className={`fixed right-0 top-0 z-[60] flex h-[100dvh] w-72 flex-col gap-8 overflow-y-auto border-l border-[color:var(--line)] bg-[var(--bg)] px-6 pb-24 pt-20 transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`${LABEL} w-full rounded-lg px-4 py-3 text-left transition-colors ${
                  active === link
                    ? "bg-[var(--chip)] text-[color:var(--fg)]"
                    : "text-[color:var(--faint)] hover:bg-[var(--chip)] hover:text-[color:var(--fg)]"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <div className="border-t border-[color:var(--line)] pt-6">
          <p className={`${LABEL} mb-3 text-[9px] text-[color:var(--faint)]`}>Theme</p>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </aside>

      <main className="lg:pl-[220px]">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-14">

          {/* ── HERO ── */}
          <section id="home" className="flex min-h-screen flex-col justify-center pb-16 pt-28 lg:pt-20">
            <SectionMark index={1} title="Home" />

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14">
              {/* Phone portrait */}
              <div className="mx-auto w-full max-w-[340px] lg:mx-0">
                <PhoneCamera src={aboutImage} altSrc={hoverImage} alt="Mike Lenard portrait" />
              </div>

              <div>
                <p className={`${LABEL} mb-6 flex items-center gap-2 text-[color:var(--faint)]`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--fg)]" />
                  Open to opportunities
                </p>

                <h1
                  className="mono font-extrabold uppercase leading-[0.98] outline-text"
                  style={{ fontSize: "clamp(40px, 6vw, 76px)", letterSpacing: "-0.03em" }}
                >
                  Mike<br />Lenard V.<br />Adriano
                </h1>

                <p className={`${LABEL} mt-5 text-[color:var(--mute)]`}>
                  IT Support Staff | Full-Stack Developer
                </p>

                <p className={`${BODY} mt-6 max-w-[52ch]`}>
                  BSIT graduate and full-stack developer from Angat, Bulacan. I built the award-winning capstone platform that tracks performance for 200+ students, and I work with React, Next.js, PHP, MySQL, and Flutter.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  <a href="mailto:mikelenard2004@gmail.com" className={CHIP}>Email ↗</a>
                  <a href="tel:+639937103961" className={CHIP}>+63 993 710 3961</a>
                  <span className={CHIP}>Angat, Bulacan, PH</span>
                  <a href="https://github.com/MKLNRD-ADR" target="_blank" rel="noreferrer" className={CHIP}>GitHub ↗</a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button type="button" onClick={() => scrollTo("Projects")} className={BTN_PRIMARY}>
                    View projects →
                  </button>
                  <Link to="/resume" className={BTN_OUTLINE}>
                    View resume ↗
                  </Link>
                </div>

                <dl className="mt-10 inline-grid grid-cols-3 gap-8 rounded-xl border border-[color:var(--line)] px-6 py-5">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <dd className="mono text-[22px] font-medium leading-none">{s.value}</dd>
                      <dt className={`${LABEL} mt-2 text-[9px] text-[color:var(--faint)]`}>{s.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          {/* ── ABOUT ── */}
          <section id="about" className="border-t border-[color:var(--line)] py-20 md:py-28">
            <SectionMark index={2} title="About" />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <h2
                className="mono font-extrabold uppercase leading-[1] outline-text"
                style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}
              >
                Hi, I'm<br />Mike Lenard.
              </h2>

              <div>
                <div className="space-y-4">
                  <p className={BODY}>
                    BSIT graduate (Web and Mobile Application Development) and full-stack developer who built the award-winning capstone platform that tracks performance for 200+ students. I'm experienced in databases, admin dashboards, role-based accounts, and record-tracking systems, with a strong documentation habit from internship and team projects.
                  </p>
                  <p className={BODY}>
                    I learn new tools and processes quickly and I'm comfortable working with non-technical stakeholders, in both development and IT support roles.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Angat, Bulacan", "Full-Stack Developer", "IT Support", "Open to Opportunities"].map((chip) => (
                    <span key={chip} className={CHIP}>{chip}</span>
                  ))}
                </div>

                <div className="mt-10 border-t border-[color:var(--line)]">
                  {[
                    { role: "Front-End Developer Intern · SMESoft Inc.", period: "Dec 2025 – Mar 2026" },
                    { role: "Freelance Developer · Self-Employed", period: "2024 – 2025" },
                    { role: "BS Information Technology · Bulacan State University, Bustos", period: "2022 – 2026" },
                  ].map((item) => (
                    <div
                      key={item.role}
                      className="flex items-start justify-between gap-4 border-b border-[color:var(--line)] py-4"
                    >
                      <span className="text-[14px] text-[color:var(--fg)]">{item.role}</span>
                      <span className={`${LABEL} whitespace-nowrap text-[color:var(--faint)]`}>{item.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── SKILLS ── */}
          <section id="skills" className="border-t border-[color:var(--line)] py-20 md:py-28">
            <SectionMark index={3} title="Technical Skills" />
            <h2
              className="mono mb-12 font-extrabold uppercase leading-[1] outline-text"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}
            >
              What I know<br />so far
            </h2>

            <div className="border-t border-[color:var(--line)]">
              {technicalSkills.map((group) => (
                <div
                  key={group.category}
                  className="grid grid-cols-1 gap-4 border-b border-[color:var(--line)] py-6 sm:grid-cols-[200px_1fr] sm:gap-8"
                >
                  <h3 className={`${LABEL} pt-1.5 text-[color:var(--fg)]`}>{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className={CHIP}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PROJECTS ── */}
          <section id="projects" className="border-t border-[color:var(--line)] py-20 md:py-28">
            <SectionMark index={4} title="Projects" />
            <h2
              className="mono mb-12 font-extrabold uppercase leading-[1] outline-text"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}
            >
              Things<br />I've built
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="flex flex-col rounded-xl border border-[color:var(--line)] p-6 transition-colors duration-300 hover:border-[color:var(--fg)]"
                >
                  <h3 className="mono text-[17px] font-bold tracking-[-0.03em]">{p.title}</h3>
                  <p className={`${BODY} mt-4 flex-1 text-[14px]`}>{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className={CHIP}>{t}</span>
                    ))}
                  </div>
                  {p.screenshots ? (
                    <button
                      type="button"
                      onClick={() => setLightbox({ project: p, index: 0 })}
                      className={`${LABEL} mt-6 w-fit underline underline-offset-4 transition-opacity hover:opacity-60`}
                    >
                      View screenshots →
                    </button>
                  ) : (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`${LABEL} mt-6 w-fit underline underline-offset-4 transition-opacity hover:opacity-60`}
                    >
                      View project →
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* ── CONTACT ── */}
          <section id="contact" className="border-t border-[color:var(--line)] py-20 md:py-28">
            <SectionMark index={5} title="Contact" />
            <h2
              className="mono mb-4 font-extrabold uppercase leading-[1] outline-text"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}
            >
              Get in touch
            </h2>
            <p className={`${BODY} mb-12`}>
              Have questions or just want to say hi? Send me a message!
            </p>

            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">

              {/* LEFT — Form */}
              <div>
                {sent ? (
                  <div className="rounded-xl border border-[color:var(--line)] p-10 text-center text-[color:var(--mute)]">
                    <p className="mb-4 text-3xl">✓</p>
                    <p className="text-[15px]">Message sent! I'll get back to you soon.</p>
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
                        className={FIELD}
                      />
                    ))}
                    <textarea
                      placeholder="Your message"
                      rows={6}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${FIELD} resize-none`}
                    />
                    <button type="submit" className={`${BTN_PRIMARY} justify-center py-4`}>
                      Send message →
                    </button>
                  </form>
                )}
              </div>

              {/* RIGHT — Contact Info Cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {contactCards.map(({ icon, label, line1 }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-4 rounded-xl border border-[color:var(--line)] p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--chip)] text-[color:var(--fg)]">
                      {icon}
                    </div>
                    <div>
                      <p className={`${LABEL} mb-1 text-[color:var(--faint)]`}>{label}</p>
                      <p className="break-words text-[13px] leading-[1.7] text-[color:var(--fg)]">{line1}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ── FOOTER ── */}
          <footer className="border-t border-[color:var(--line)] py-6">
            <span className={`${LABEL} text-[color:var(--faint)]`}>
              Built with React + Tailwind CSS · Mike Lenard V. Adriano · 2026
            </span>
          </footer>
        </div>
      </main>

      {/* ── PROJECT SCREENSHOT LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 px-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close"
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 p-2 text-white/70 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            {/* Slide */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/15 bg-[#111]">
              <img
                src={lightbox.project.screenshots[lightbox.index].src}
                alt={lightbox.project.screenshots[lightbox.index].label}
                className="h-full w-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
                <p className={`${LABEL} text-white`}>
                  {lightbox.project.screenshots[lightbox.index].label}
                </p>
              </div>

              {/* Prev/Next arrows */}
              {lightbox.project.screenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous screenshot"
                    onClick={() =>
                      setLightbox((prev) => ({
                        ...prev,
                        index: (prev.index - 1 + prev.project.screenshots.length) % prev.project.screenshots.length,
                      }))
                    }
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next screenshot"
                    onClick={() =>
                      setLightbox((prev) => ({
                        ...prev,
                        index: (prev.index + 1) % prev.project.screenshots.length,
                      }))
                    }
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Slide counter */}
            <div className="mt-5 flex items-center justify-center gap-4">
              <span className={`${LABEL} text-white/60`}>
                {lightbox.index + 1} / {lightbox.project.screenshots.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating chatbot (bottom-right). Always rendered, so it floats over the mobile sidebar too */}
      <ChatBot />
    </div>
  );
}