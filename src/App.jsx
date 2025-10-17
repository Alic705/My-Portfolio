import React, { useState, useEffect, useRef } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Project from "./Components/Projects/Project";
// import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
// import UsesPage from "./Components/Uses/Uses";
import FAQ from "./Components/Faq/Faq";
// import Blog from "./Components/Blog/Blog";
// import BlogDetail from "./Components/Blog/BlogDetail";
import BackgroundFX from "./Components/FX/BackgroundFX";
import Preloader from "./Components/Preloader/Preloader";
import OrbitingCursor from "./Components/OrbitingCursor/OrbitingCursor";
import "./App.css";

/* === react-theme-switch-animation === */
import {
  useModeAnimation,
  ThemeAnimationType,
} from "react-theme-switch-animation";

/* =======================
   Theme tokens (NO --app-bg here)
   ======================= */
const THEME_CSS = `
:root{
  --text: #1f2937;
  --muted: #4b5563;

  --brand-1: #6e2de9;
  --brand-2: #9a66ff;

  --panel-bg: rgba(255,255,255,0.85);
  --panel-bg-translucent: rgba(255,255,255,0.65);
  --panel-border: rgba(0, 0, 0, 0.08);
  --panel-shadow: rgba(0,0,0,0.12);

  --btn-primary-bg: linear-gradient(135deg, var(--brand-1), var(--brand-2));
  --btn-primary-shadow: rgba(124,58,237,0.28);

  --btn-ghost-bg: rgba(0,0,0,0.03);
  --btn-ghost-border: rgba(0,0,0,0.20);
  --btn-ghost-border: #9a66ff;

  --divider-grad: linear-gradient(90deg, var(--brand-1), var(--brand-2));
  --star: #ca8a04;
  --accent: #8b5cf6;
}

[data-theme="dark"]{
  --text: #f5f5f7;
  --muted: #d1d5db;

  --panel-bg: rgba(35,35,35,0.75);
  --panel-bg-translucent: rgba(35,35,35,0.45);
  --panel-border: rgba(255,255,255,0.15);
  --panel-shadow: rgba(0,0,0,0.30);

  --btn-ghost-bg: transparent;
  --btn-ghost-border: rgba(255,255,255,0.28);
}

/* Smooth cross-fade for theme flip */
:root, [data-theme="dark"] { --transition-speed: 280ms; }
html, body, #root, #main-panel, .portfolio-container {
  transition:
    background-color var(--transition-speed) ease,
    color var(--transition-speed) ease,
    border-color var(--transition-speed) ease,
    box-shadow var(--transition-speed) ease;
}
`;

/* =======================
   Offline overlay
   ======================= */
const OfflineCloudIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-28 w-28 text-gray-300 mb-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774"
    />
    <line x1="1" y1="1" x2="23" y2="23" strokeWidth="2" />
  </svg>
);

const OfflineNotifier = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOverlay, setShowOverlay] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setTimeout(() => setShowOverlay(false), 500);
    };
    const handleOffline = () => {
      setIsOnline(false);
      setShowOverlay(true);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div>
      {children}
      {showOverlay && (
        <div
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${
            isOnline ? "opacity-0" : "opacity-100"
          }`}
          role="alert"
        >
          <OfflineCloudIcon />
          <h2 className="text-3xl font-bold text-gray-700 mb-2">
            Connection Lost
          </h2>
          <p className="text-gray-500 text-center max-w-xs">
            Oops! It looks like you're offline. Please check your internet
            connection.
          </p>
        </div>
      )}
    </div>
  );
};

/* =======================
   Layout (panel + background layers)
   ======================= */
const Layout = ({ children, theme }) => {
  const panelRef = useRef(null);
  const glareRef = useRef(null);

  useEffect(() => {
    const panel = panelRef.current;
    const glare = glareRef.current;
    if (!panel || !glare) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const rotateY = (e.clientX / innerWidth - 0.5) * 5;
      const rotateX = (0.5 - e.clientY / innerHeight) * 5;
      panel.style.transform = `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      glare.style.opacity = 0.18;
    };
    const handleMouseLeave = () => {
      panel.style.transform = `perspective(1400px) rotateX(0deg) rotateY(0deg)`;
      glare.style.opacity = 0;
    };
    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const panelStyles = {
    position: "relative",
    border: "1px solid var(--panel-border)",
    borderRadius: "var(--r-lg)",
    boxShadow: "var(--elev-3), 0 2px 0 rgba(255,255,255,.04) inset",
    height: "100%",
    maxHeight: "92vh",
    padding: 0,
    color: "var(--text)",
    transition:
      "transform 0.1s ease-out, padding 0.3s ease, background 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "auto",
    overflowX: "hidden",
    margin: "auto",
  };

  const contentWrapperStyle = {
    width: "100%",
    flex: 1,
    overflowY: "auto",
    overflowX: "hidden",
    padding: "2rem",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    position: "relative",
    zIndex: 3,
  };

  const dynamicStyles = `
  #main-panel {
    position: relative;
     overflow: hidden;
      background-color: 
      var(--panel-bg);
    animation: gridDrift 50s linear infinite;
     border-radius: var(--r-lg);
  }
  @supports (backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px)) {
    #main-panel { background-color: var(--panel-bg-translucent);
     -webkit-backdrop-filter: blur(28px);
      backdrop-filter: blur(28px); }
  }
  #main-panel::before {
    content: ""; 
    position: absolute; 
    inset: 0; 
    pointer-events: none;
    background-image:
      radial-gradient(120% 80% at 50% 60%, var(--shine-2), transparent 70%),
      repeating-conic-gradient(from 0deg at 50% 60%, var(--panel-grid-line) 0deg 0.2deg, transparent 0.2deg 8deg),
      linear-gradient(var(--panel-grid-line) 1px, transparent 1px),
      linear-gradient(90deg, var(--panel-grid-line) 1px, transparent 1px);
    background-size: auto, 200% 200%, 64px 64px, 64px 64px;
    background-position: center center, center center, 0 0, 0 0;
    background-blend-mode: screen; opacity: 0.2; filter: blur(0.3px); border-radius: var(--r-lg);
  }
  #main-panel::after {
    content: ""; position: absolute; inset: 0; pointer-events: none; border-radius: var(--r-lg);
    background:
      radial-gradient(1200px 600px at 10% 10%, var(--corner-glow), transparent 60%),
      radial-gradient(1200px 600px at 90% 90%, var(--corner-glow), transparent 60%),
      linear-gradient(180deg, rgba(0,0,0,.08), transparent 25%, transparent 75%, rgba(0,0,0,.08)),
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 .035'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
    background-blend-mode: soft-light, soft-light, multiply, normal; opacity: .6;
  }
  body::before {
    content: ""; position: fixed; inset: 0;
    background-image: radial-gradient(var(--speck) 1px, transparent 1px);
    background-size: 24px 24px; pointer-events: none; z-index: 0;
  }
  @keyframes gridDrift { 0% { background-position: 0 0, 0 0; } 100% { background-position: 120px 100px, 120px 100px; } }
  `;

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--app-bg)" }}
      data-theme={theme}
    >
      <main id="main-panel" style={panelStyles}>
        <style>{dynamicStyles}</style>
        <BackgroundFX density={0.00005} maxSpeed={0.05} />

        <div
          ref={glareRef}
          className="glare-effect"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "var(--r-lg)",
            zIndex: 2,
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.10) 0%, rgba(0,0,0,0) 70%)",
            opacity: 0,
            transition: "opacity 0.2s",
            pointerEvents: "none",
          }}
        />

        <div style={contentWrapperStyle} className="hide-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
};

/* =======================
   Theme Switch Button using the library
   ======================= */
function ThemeSwitchButton({ theme, setTheme }) {
  // Hook controls the animated transition & toggles a global "dark" class.
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    // keep your current state as source of truth
    isDarkMode: theme === "dark",
    onDarkModeChange: (isDark) => setTheme(isDark ? "dark" : "light"),
    animationType: ThemeAnimationType.CIRCLE, // or ThemeAnimationType.BLUR_CIRCLE
    duration: 800,
    easing: "ease-in-out",
    globalClassName: "dark", // library applies this to <html>
  });

  return (
    <button
      ref={ref}
      onClick={toggleSwitchTheme}
      aria-label="Toggle color theme"
      title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      className="theme-toggle"
      style={{
        position: "fixed",
        left: "clamp(1rem,4vw,2rem)",
        top: "1rem",
        zIndex: 1100,
        display: "inline-flex",
        alignItems: "center",
        gap: ".6rem",
        padding: ".6vw .9vw",
        borderRadius: "999px",
        cursor: "pointer",
        background: "var(--btn-ghost-bg)",
        color: "var(--text)",
        border: "1px solid var(--btn-ghost-border)",
        boxShadow: "0 6px 16px var(--btn-primary-shadow)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        fontSize: ".85vw",
      }}
    >
      <i className={`ph-bold ${isDarkMode ? "ph-moon" : "ph-sun"}`} />
      <span style={{ fontWeight: 700 }}>{isDarkMode ? "Dark" : "Light"}</span>
    </button>
  );
}

/* =======================
   Navbar (theme toggle + sidebar)
   ======================= */
const Navbar = ({ activePage, onNavigate, theme, setTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinksRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    {
      page: "home",
      label: "Home",
      icon: "ph-bold ph-house",
      backgroundImage:
        "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
    },
    {
      page: "about",
      label: "About",
      icon: "ph-bold ph-user",
      backgroundImage:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&q=80",
    },
    {
      page: "services",
      label: "Services",
      icon: "ph-bold ph-gear",
      backgroundImage:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    },
    {
      page: "projects",
      label: "Projects",
      icon: "ph-bold ph-briefcase",
      backgroundImage:
        "https://images.unsplash.com/photo-1572177812156-58036aae439c?w=800&q=80",
    },
    // {
    //   page: "testimonials",
    //   label: "Reviews",
    //   icon: "ph-bold ph-quotes",
    //   backgroundImage:
    //     "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    // },
    // {
    //   page: "uses",
    //   label: "Uses",
    //   icon: "ph-bold ph-wrench",
    //   backgroundImage:
    //     "https://images.unsplash.com/photo-1506784983877-45594efa4c85?w=800&q=80",
    // },
    {
      page: "faq",
      label: "FAQ",
      icon: "ph-bold ph-question",
      backgroundImage:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?w=800&q=80",
    },
    // {
    //   page: "blog",
    //   label: "Blog",
    //   icon: "ph-bold ph-newspaper",
    //   backgroundImage:
    //     "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=800&q=80",
    // },
    {
      page: "contact",
      label: "Contact",
      icon: "ph-bold ph-paper-plane-tilt",
      backgroundImage:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80",
    },
  ];

  useEffect(() => {
    if (isMobileMenuOpen && navLinksRef.current) {
      const activeLinkEl = navLinksRef.current.querySelector(
        ".mobile-nav-link.active"
      );
      if (activeLinkEl) {
        setIndicatorStyle({
          height: `${activeLinkEl.offsetHeight}px`,
          transform: `translateY(${activeLinkEl.offsetTop}px)`,
          opacity: 1,
        });
      }
    }
  }, [activePage, isMobileMenuOpen]);

  return (
    <>
      <style>{`
        .desktop-nav{display:none;}
        @media (min-width: 768px){
          .desktop-nav {
    background: color-mix(in hsl, var(--surface-panel) 70%, transparent);
    backdrop-filter: blur(12px);
    border-radius: var(--r-lg);
    border: 1px solid var(--panel-border);
    padding: .9vw 1.15vw;
    display: flex;
    flex-direction: column;
    gap: .9vw;
    z-index: 100;
}
            
        }
     .nav-link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.3vw;
    height: 3.3vw;
    border-radius: 50%;
    cursor: pointer;
    transition: all .2s ease;
    color: #e0e0e0;
    border: 1px solid transparent;
}
        .nav-link i { font-size: 1.5vw; }
        .nav-link:not(.active):hover{ background: color-mix(in hsl, var(--brand-2) 12%, transparent); border-color: color-mix(in hsl, var(--brand-2) 18%, transparent); }
        .nav-link.active{ background: color-mix(in hsl, var(--brand-2) 22%, white 10%); color: var(--text-primary); border-color: color-mix(in hsl, var(--brand-2) 35%, white); box-shadow: 0 6px 20px color-mix(in hsl, var(--brand-2) 40%, transparent); }
        .nav-link.active::before{ content:""; position:absolute; right:6px; top:50%; transform:translateY(-50%); width:6px; height:6px; border-radius:50%; background: var(--accent-gold); box-shadow: 0 0 10px rgba(255,254,1,.6); }
        .nav-link::after{ content:attr(data-label); position:absolute; left:120%; top:50%; transform:translateY(-50%); background:#222; color:#fff; padding:.4rem .8rem; border-radius:6px; border:1px solid rgba(255,255,255,0.2); font-size:.9rem; white-space:nowrap; opacity:0; visibility:hidden; pointer-events:none; transition: opacity .2s ease, visibility .2s ease; transition-delay: .1s; }
        .nav-link:hover::after{ opacity:1; visibility:visible; }
        .mobile-nav-header{display:none}
        .mobile-menu-overlay{display:none}
        @keyframes menuLinkAnimation { from { opacity: 0; transform: translateX(-20px) scale(0.95); } to { opacity: 1; transform: translateX(0) scale(1); } }
        @media (max-width: 767px) {
          .mobile-nav-header{display:flex;justify-content:flex-end;align-items:center;position:fixed;top:0;left:0;right:0;height:60px;padding:0 1rem;z-index:1002}
          .hamburger-button{background:none;border:none;color:var(--text);font-size:2rem;cursor:pointer;z-index:1003;position:relative;width:32px;height:32px}
          .hamburger-button i{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:transform .3s ease-in-out,opacity .3s ease-in-out;font-size:20px}
          .hamburger-button .icon-close{transform:translate(-50%,-50%) rotate(90deg);opacity:0}
          .hamburger-button.open .icon-list{transform:translate(-50%,-50%) rotate(-90deg);opacity:0}
          .hamburger-button.open .icon-close{transform:translate(-50%,-50%) rotate(0deg);opacity:1}
          .mobile-menu-overlay { display: flex; justify-content: center; align-items: flex-start; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #0A0A0A; z-index: 1001; clip-path: circle(25px at calc(100% - 40px) 30px); transition: clip-path 0.6s cubic-bezier(0.8, 0, 0.2, 1); padding: 0 2rem; overflow: hidden; }
          .mobile-menu-overlay.open { clip-path: circle(150% at calc(100% - 40px) 30px); }
          .menu-background-container { position: absolute; inset: 0; z-index: 1; }
          .menu-background-image { position: absolute; inset: 0; width: 100%; height: 100%; background-size: cover; background-position: center; opacity: 0; transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
          .menu-background-image.visible { opacity: 1; }
          .menu-background-container::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to right, #0A0A0A 10%, rgba(10,10,10,0.6) 50%, #0A0A0A 90%); }
          .mobile-menu-links { display: flex; flex-direction: column; gap: 0.5rem; text-align: left; position: relative; z-index: 2; width: 100%; max-width: 300px; margin-top: 15vh; }
          .mobile-menu-links.is-hovering .mobile-nav-link:not(:hover) { opacity: 0.6 !important; }
          .mobile-nav-link { color: #d1d1d1; font-size: 2rem; font-weight: 700; display: flex; align-items: center; gap: 1.25rem; cursor: pointer; transition: color 0.4s ease, transform 0.4s ease, opacity 0.4s ease !important; opacity: 0; padding: 0.75rem 1rem; border-radius: 12px; }
          .mobile-menu-overlay.open .mobile-nav-link { animation: menuLinkAnimation 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
          .mobile-menu-overlay.open .mobile-nav-link:nth-child(1){animation-delay:.25s}
          .mobile-menu-overlay.open .mobile-nav-link:nth-child(2){animation-delay:.3s}
          .mobile-menu-overlay.open .mobile-nav-link:nth-child(3){animation-delay:.35s}
          .mobile-menu-overlay.open .mobile-nav-link:nth-child(4){animation-delay:.4s}
          .mobile-menu-overlay.open .mobile-nav-link:nth-child(5){animation-delay:.45s}
          .mobile-menu-overlay.open .mobile-nav-link:nth-child(6){animation-delay:.5s}
          .mobile-menu-overlay.open .mobile-nav-link:nth-child(7){animation-delay:.55s}
          .mobile-nav-link:hover { transform: translateX(10px); color: #ffffff; }
          .mobile-nav-link.active { color: white; }
          .active-indicator { position: absolute; top: 0; left: 0; width: 100%; background-color: rgba(255, 255, 255, 0.1); border-left: 2px solid var(--brand-2); z-index: -1; opacity: 0; transition: transform 0.6s cubic-bezier(0.7, 0, 0.3, 1), height 0.6s cubic-bezier(0.7, 0, 0.3, 1), opacity 0.4s; border-radius: 0; }
        }
      `}</style>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        {navItems.map((item) => (
          <div
            key={item.page}
            className={`nav-link ${activePage === item.page ? "active" : ""}`}
            data-label={item.label}
            onClick={() => handleNavClick(item.page)}
            aria-label={item.label}
            aria-current={activePage === item.page ? "page" : undefined}
            role="button"
          >
            <i className={item.icon}></i>
          </div>
        ))}
      </nav>

      {/* Animated Theme toggle via library */}
      <ThemeSwitchButton theme={theme} setTheme={setTheme} />

      {/* Mobile Navigation */}
      <header className="mobile-nav-header">
        <button
          className={`hamburger-button ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Open menu"
        >
          <i className="ph-bold ph-list icon-list"></i>
          <i className="ph-bold ph-x icon-close"></i>
        </button>
      </header>

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="menu-background-container">
          {navItems.map((item) => (
            <div
              key={item.page}
              className={`menu-background-image ${
                hoveredItem === item.page ? "visible" : ""
              }`}
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
            />
          ))}
        </div>
        <nav
          className={`mobile-menu-links ${hoveredItem ? "is-hovering" : ""}`}
          ref={navLinksRef}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="active-indicator" style={indicatorStyle}></div>
          {navItems.map((item) => (
            <div
              key={item.page}
              className={`mobile-nav-link ${
                activePage === item.page ? "active" : ""
              }`}
              onClick={() => handleNavClick(item.page)}
              onMouseEnter={() => setHoveredItem(item.page)}
              role="button"
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

/* =======================
   Helpers: parse location & goTo
   ======================= */
function parseLocation() {
  const parts = window.location.pathname
    .replace(/\/+$/, "")
    .split("/")
    .filter(Boolean);
  if (parts.length === 0) return { page: "home" };
  if (parts[0] === "blog") {
    if (parts.length > 1) return { page: "blog-detail", slug: parts[1] };
    return { page: "blog" };
  }
  const valid = [
    "home",
    "about",
    "services",
    "projects",
    "testimonials",
    "uses",
    "faq",
    "contact",
    "blog",
  ];
  return { page: valid.includes(parts[0]) ? parts[0] : "home" };
}

function buildPath(page, slug) {
  if (page === "home") return "/";
  if (page === "blog-detail" && slug) return `/blog/${slug}`;
  return `/${page}`;
}

/* =======================
   App root
   ======================= */
function App() {
  const [loading, setLoading] = useState(true);

  // init from localStorage OR system; default "dark" for parity with old code
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // keep your CSS vars in sync with library's dark state
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    // also mirror <html> class for Tailwind's `dark:` utilities
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // routing state
  const initial = parseLocation();
  const [activePage, setActivePage] = useState(initial.page);
  const [blogSlug, setBlogSlug] = useState(initial.slug || "");

  useEffect(() => {
    const onPop = () => {
      const loc = parseLocation();
      setActivePage(loc.page);
      setBlogSlug(loc.slug || "");
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // SPA link interception (internal anchors)
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a[href]");
      if (!a) return;
      const url = new URL(a.href, window.location.origin);
      const sameOrigin = url.origin === window.location.origin;
      if (!sameOrigin) return;
      const path = url.pathname;
      if (
        path.startsWith("/blog/") ||
        [
          "/",
          "/about",
          "/services",
          "/projects",
          "/testimonials",
          "/uses",
          "/faq",
          "/contact",
          "/blog",
        ].includes(path)
      ) {
        e.preventDefault();
        const loc = parseLocationFrom(path);
        goTo(loc.page, loc.slug);
      }
    };
    const parseLocationFrom = (pathname) => {
      const parts = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
      if (parts.length === 0) return { page: "home" };
      if (parts[0] === "blog") {
        if (parts.length > 1) return { page: "blog-detail", slug: parts[1] };
        return { page: "blog" };
      }
      return { page: parts[0] };
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const goTo = (page, slug) => {
    setActivePage(page);
    setBlogSlug(slug || "");
    const path = buildPath(page, slug);
    window.history.pushState({ page, slug }, "", path);
  };

  const handleNavigate = (page) => goTo(page);

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home onNavigate={handleNavigate} />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "projects":
        return <Project />;
      case "testimonials":
        return <Testimonials />;
      case "uses":
        return <UsesPage />;
      case "faq":
        return <FAQ />;
      case "blog":
        return <Blog />;
      case "blog-detail":
        return <BlogDetail slugFromRouter={blogSlug} />;
      case "contact":
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  if (loading) return <Preloader />;

  return (
    <OfflineNotifier>
      <style>{THEME_CSS}</style>
      <OrbitingCursor />
      <div className="portfolio-container" data-theme={theme}>
        <Navbar
          activePage={activePage}
          onNavigate={handleNavigate}
          theme={theme}
          setTheme={setTheme}
        />
        <Layout theme={theme}>{renderPage()}</Layout>
      </div>
    </OfflineNotifier>
  );
}

export default App;
