import React, { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import { gsap } from "gsap";

const Home = ({ onNavigate }) => {
  const refs = {
    h1: useRef(null),
    sub: useRef(null),
    ctas: useRef(null),
    trust: useRef(null),
    divider: useRef(null),
    spark: useRef(null),
    marqueeWrap: useRef(null),
    marqueeTrack: useRef(null),
    primaryWrap: useRef(null),
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
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

    gsap.set(revealEls, { opacity: 0, y: 18 });
    gsap.to(revealEls, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.14,
    });

    if (refs.spark.current) {
      gsap.fromTo(
        refs.spark.current,
        { xPercent: -15, opacity: 0 },
        { xPercent: 115, opacity: 1, duration: 2.2, repeat: -1, ease: "none" }
      );
    }

    // ---- Smooth marquee animation ----
    if (refs.marqueeWrap?.current && refs.marqueeTrack?.current) {
      const wrap = refs.marqueeWrap.current;
      const track = refs.marqueeTrack.current;

      // duplicate content for seamless loop
      let wrapW = wrap.offsetWidth || 0;
      let trackW = track.scrollWidth || 0;
      while (trackW < wrapW * 2) {
        Array.from(track.children).forEach((child) =>
          track.appendChild(child.cloneNode(true))
        );
        trackW = track.scrollWidth;
      }

      const distance = track.scrollWidth / 2;
      const speed = 60; // px/sec
      const dur = distance / speed;

      gsap.to(track, {
        x: -distance,
        duration: dur,
        ease: "none",
        repeat: -1,
      });
    }

    return () => gsap.globalTimeline.clear();
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
        Hire Senior React &amp; Angular Engineer | Performance-First Front-End
      </title>
      <meta
        name="description"
        content="Hire a senior React & Angular engineer who ships fast, accessible, SEO-ready web apps. Core Web Vitals wins, clean UX, and measurable business results—backed by case studies and 5★ reviews."
      />

      <main className={styles.homeContainer} aria-labelledby="hero-title">
        <div className={styles.contentWrapper}>
          <h1
            id="hero-title"
            ref={refs.h1}
            className={`${styles.mainHeading} ${styles.reveal}`}
          >
            Senior React &amp; Angular Engineer |{" "}
            <span className="impactHighlight"> High-Performance </span>{" "}
            Front-End Development
          </h1>

          <div
            ref={refs.divider}
            className={`${styles.divider} ${styles.reveal}`}
            aria-hidden="true"
          >
            <i ref={refs.spark} className={styles.sparkDot} />
          </div>

          <p ref={refs.sub} className={`${styles.subHeading} ${styles.reveal}`}>
            I specialize in building <strong>high-performance</strong>,{" "}
            <strong>accessible</strong>, and <strong>SEO-ready</strong> web
            applications with <strong>React</strong> &amp;{" "}
            <strong>Angular</strong>. From Core Web Vitals tuning to semantic
            markup and structured data, I ship clean UX that drives measurable{" "}
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
            <div ref={refs.marqueeTrack} className={styles.marqueeTrack}>
              <span className={styles.marqueeItem}>
                <i class="ph ph-lightning"></i>{" "}
                <strong>Performance-first</strong> — Core Web Vitals,
                code-splitting, optimized images, CDN strategy.
              </span>
              <span className={styles.marqueeItem}>
                <i class="ph ph-wheelchair"></i> <strong>Accessible</strong> —
                WCAG 2.2 AA, semantic HTML, keyboard & screen-reader testing.
              </span>
              <span className={styles.marqueeItem}>
                <i class="ph ph-magnifying-glass"></i>{" "}
                <strong>SEO-ready</strong> — SSR/SSG, structured data, clean
                routing, sitemap & canonical tags.
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
