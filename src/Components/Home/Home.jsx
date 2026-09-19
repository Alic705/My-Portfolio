import React, { useEffect, useRef } from "react";

const marqueeItems = [
  {
    icon: "lightning",
    label: "Performance-First",
    text: "Sub-second LCP, zero layout shift (CLS), and Core Web Vitals optimization.",
  },
  {
    icon: "code",
    label: "React.js & Angular SPAs",
    text: "Reusable component architecture, Redux Toolkit, reactive Signals & clean state.",
  },
  {
    icon: "plugs-connected",
    label: "REST APIs & Full-Stack",
    text: "Node.js, Express, MongoDB, secure API orchestration & Shopify storefronts.",
  },
  {
    icon: "layout",
    label: "UI/UX & Design Systems",
    text: "Pixel-perfect Figma conversion, responsive layouts, and WCAG 2.2 accessibility.",
  },
  {
    icon: "check-circle",
    label: "Testing & Quality Assurance",
    text: "Unit and integration testing with Vitest/Jest and automated CI/CD workflows.",
  },
];

const Home = ({ onNavigate }) => {
  const refs = {
    h1: useRef(null),
    sub: useRef(null),
    ctas: useRef(null),
    trust: useRef(null),
    divider: useRef(null),
    spark: useRef(null),
    marqueeWrap: useRef(null),
    primaryWrap: useRef(null),
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealEls = [
      refs.h1.current,
      refs.sub.current,
      refs.ctas.current,
      refs.trust.current,
      refs.marqueeWrap?.current,
    ].filter(Boolean);

    if (reduceMotion) {
      revealEls.forEach((el) => el.classList.add("isVisible"));
      return;
    }

    const timeoutIds = revealEls.map((el, idx) =>
      window.setTimeout(() => el.classList.add("isVisible"), idx * 140),
    );

    return () => timeoutIds.forEach((id) => window.clearTimeout(id));
  }, []);

  const handleGlowMove = (e) => {
    const el = refs.primaryWrap.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <title>
        Ali Ch | Frontend Engineer &amp; Web Developer | React.js &amp; Angular Specialist
      </title>
      <meta
        name="description"
        content="Frontend Engineer specializing in React.js, Angular, Redux, TypeScript &amp; REST APIs. Crafting high-performance web applications with sub-second speeds."
      />

      <main className="homeContainer" aria-labelledby="hero-title">
        <div className="contentWrapper">
          <h1
            id="hero-title"
            ref={refs.h1}
            className="mainHeading reveal"
          >
            Frontend Engineer &amp; Web Developer{" "}
            <span className="impactHighlight">React.js &amp; Angular</span>{" "}
            Specialist
          </h1>



          <p ref={refs.sub} className="subHeading reveal">
            I am a <strong>Frontend Engineer</strong> specializing in <strong>React.js</strong>, <strong>Angular</strong>, <strong>Redux</strong>, and <strong>REST APIs</strong>. I engineer scalable single-page applications, sub-second page performance, and clean, accessible UI architectures that rank on Google and drive measurable{" "}
            <span className="impactHighlight">business results</span>.
          </p>

          <div ref={refs.ctas} className="ctaRow reveal">
            <span
              ref={refs.primaryWrap}
              className="ctaWrap"
              onMouseMove={handleGlowMove}
              onMouseLeave={() => {
                const el = refs.primaryWrap.current;
                if (el) {
                  el.style.removeProperty("--x");
                  el.style.removeProperty("--y");
                }
              }}
            >
              <i className="pointerGlow" aria-hidden="true" />
              <button
                onClick={() => onNavigate("projects")}
                className="btn btnPrimary"
                aria-label="See React & Angular case studies"
              >
                See Case Studies
              </button>
            </span>

            <button
              onClick={() => onNavigate("contact")}
              className="btn btnGhost"
              aria-label="Hire a senior React & Angular developer — get a free consultation"
            >
              Get a Free Consultation
            </button>
          </div>

          <section
            ref={refs.trust}
            className="trustBlock reveal"
            aria-label="Social proof"
          >
          </section>

          {/* Smooth marquee badges */}
          <div
            ref={refs.marqueeWrap}
            className="marqueeWrap reveal"
            aria-label="Capabilities"
          >
            <div className="marqueeTrack">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
                <span
                  key={`${item.label}-${idx}`}
                  className="marqueeItem"
                >
                  <i className={`ph ph-${item.icon}`}></i>{" "}
                  <strong>{item.label}</strong> — {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
