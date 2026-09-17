import React, { useEffect, useRef } from "react";
import styles from "./Home.module.css";

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
      revealEls.forEach((el) => el.classList.add(styles.isVisible));
      return;
    }

    const timeoutIds = revealEls.map((el, idx) =>
      window.setTimeout(() => el.classList.add(styles.isVisible), idx * 140),
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

      <main className={styles.homeContainer} aria-labelledby="hero-title">
        <div className={styles.contentWrapper}>
          <h1
            id="hero-title"
            ref={refs.h1}
            className={`${styles.mainHeading} ${styles.reveal}`}
          >
            Frontend Engineer &amp; Web Developer{" "}
            <span className="impactHighlight">React.js &amp; Angular</span>{" "}
            Specialist
          </h1>

          <div
            ref={refs.divider}
            className={`${styles.divider} ${styles.reveal}`}
            aria-hidden="true"
          >
            <i ref={refs.spark} className={styles.sparkDot} />
          </div>

          <p ref={refs.sub} className={`${styles.subHeading} ${styles.reveal}`}>
            I am a <strong>Frontend Engineer</strong> specializing in <strong>React.js</strong>, <strong>Angular</strong>, <strong>Redux</strong>, and <strong>REST APIs</strong>. I engineer scalable single-page applications, sub-second page performance, and clean, accessible UI architectures that rank on Google and drive measurable{" "}
            <span className={styles.impactHighlight}>business results</span>.
          </p>

          <div ref={refs.ctas} className={`${styles.ctaRow} ${styles.reveal}`}>
            <span
              ref={refs.primaryWrap}
              className={styles.ctaWrap}
              onMouseMove={handleGlowMove}
              onMouseLeave={() => {
                const el = refs.primaryWrap.current;
                if (el) {
                  el.style.removeProperty("--x");
                  el.style.removeProperty("--y");
                }
              }}
            >
              <i className={styles.pointerGlow} aria-hidden="true" />
              <button
                onClick={() => onNavigate("projects")}
                className={`${styles.btn} ${styles.btnPrimary}`}
                aria-label="See React & Angular case studies"
              >
                See Case Studies
              </button>
            </span>

            <button
              onClick={() => onNavigate("contact")}
              className={`${styles.btn} ${styles.btnGhost}`}
              aria-label="Hire a senior React & Angular developer — get a free consultation"
            >
              Get a Free Consultation
            </button>
          </div>

          <section
            ref={refs.trust}
            className={`${styles.trustBlock} ${styles.reveal}`}
            aria-label="Social proof"
          >
            {/* <div className={styles.ratingRow}>
              <div
                className={styles.starsAnimated}
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={styles.star}
                    style={{ "--i": i }}
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className={styles.score}>5.0</span>
              <span className={styles.dotPulse} aria-hidden="true" />
              <em className={styles.muted}>from 12 recent projects</em>
            </div> */}
          </section>

          {/* Smooth marquee badges */}
          <div
            ref={refs.marqueeWrap}
            className={`${styles.marqueeWrap} ${styles.reveal}`}
            aria-label="Capabilities"
          >
            <div className={styles.marqueeTrack}>
              {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                <span
                  key={`${item.label}-${idx}`}
                  className={styles.marqueeItem}
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
