import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Testimonials.module.css";

const DEFAULT_ITEMS = [
  {
    quote:
      "Ali lifted our Core Web Vitals into the green in two sprints. React SSR + image strategy dropped LCP from 3.8s to 1.3s and conversions rose 19%.",
    author: "Sara Khan",
    meta: "Product Lead, HealthPlus",
    rating: 5,
  },
  {
    quote:
      "Best front-end collaboration we’ve had. Accessible Angular components (WCAG 2.2 AA), predictable state, and CI that caught regressions early.",
    author: "Daniel Lee",
    meta: "Engineering Manager, FintechCo",
    rating: 5,
  },
  {
    quote:
      "Complex flows became a fast, elegant UI. TypeScript, design-system primitives, and clean routing improved maintainability and SEO crawlability.",
    author: "Marta Silva",
    meta: "Program Manager, EduSphere",
    rating: 5,
  },
];

const DEFAULT_LOGOS = [
  {
    src: "https://beta.rdeens.com/assets/images/img/company-logo/core-value-3.webp",
    alt: "HealthPlus",
  },
  {
    src: "https://beta.rdeens.com/assets/images/img/company-logo/core-value-2.webp",
    alt: "FintechCo",
  },
  {
    src: "https://beta.rdeens.com/assets/images/img/company-logo/core-value-3.webp",
    alt: "EduSphere",
  },
  {
    src: "https://beta.rdeens.com/assets/images/img/company-logo/core-value-2.webp",
    alt: "ShopMax",
  },
  {
    src: "https://beta.rdeens.com/assets/images/img/company-logo/core-value-2.webp",
    alt: "LogiHub",
  },
];

export default function Testimonials({
  accent = "brand", // 'brand' | 'green' | 'blue'
  items = DEFAULT_ITEMS,
  logos = DEFAULT_LOGOS,
  interval = 6500,
  nameForSchema = "Ali Ch",
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const sliderRef = useRef(null);

  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);

  useEffect(() => {
    if (prefersReduced || paused) return;
    const id = setInterval(
      () => setIndex((p) => (p + 1) % items.length),
      interval
    );
    return () => clearInterval(id);
  }, [interval, items.length, prefersReduced, paused]);

  const go = (n) => setIndex((p) => (p + n + items.length) % items.length);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [items.length]);

  // --- JSON-LD (reviews + aggregate rating) ---
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: nameForSchema,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (
        items.reduce((s, it) => s + (it.rating || 5), 0) / items.length
      ).toFixed(1),
      reviewCount: String(items.length),
    },
    review: items.map((it) => ({
      "@type": "Review",
      reviewBody: it.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(it.rating || 5),
        bestRating: "5",
      },
      author: { "@type": "Person", name: it.author },
    })),
  };

  const baseUrl = "https://your-domain.com";
  const canonical = `${baseUrl}/testimonials`;

  return (
    <section
      className={[
        styles.wrap,
        styles.fillPanel, // full-bleed over the panel background
        styles[`accent-${accent}`],
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby="testimonials-h1"
    >
      {/* SEO */}
      <title>Client Testimonials & Results | React & Angular Front-End</title>
      <meta
        name="description"
        content="Real client feedback on React & Angular projects: Core Web Vitals wins, accessibility (WCAG 2.2), SSR/SSG, and measurable outcomes."
      />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content="Client Testimonials & Results" />
      <meta
        property="og:description"
        content="Performance, accessibility, and SEO results from real projects."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${baseUrl}/og-testimonials.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Header */}
      <header className={styles.pageHeader}>
        <h1 id="testimonials-h1" className={styles.pageTitle}>
          Client Testimonials <span className={styles.kicker}>& Results</span>
        </h1>
        <p className={styles.pageDek}>
          Evidence from <strong>React</strong> & <strong>Angular</strong> builds
          — Core Web Vitals in the green, <strong>WCAG&nbsp;2.2&nbsp;AA</strong>{" "}
          accessibility, <strong>SSR/SSG</strong>, and maintainable UIs that
          move the needle.
        </p>
      </header>

      {/* Slider (fills width, glass card centers the quote) */}
      <div
        ref={sliderRef}
        className={styles.slider}
        role="region"
        aria-live="polite"
        tabIndex={0}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <button
          className={`${styles.nav} ${styles.prev}`}
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            className={styles.quoteCard}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: prefersReduced ? 0 : 0.45,
              ease: "easeOut",
            }}
          >
            <blockquote className={styles.quoteText}>
              {items[index].quote}
            </blockquote>

            <figcaption className={styles.authorRow}>
              <span className={styles.author}>{items[index].author}</span>
              {items[index].meta && (
                <span className={styles.meta}>— {items[index].meta}</span>
              )}
              {!!items[index].rating && (
                <span
                  className={styles.rating}
                  aria-label={`${items[index].rating} out of 5`}
                >
                  {"★".repeat(items[index].rating)}
                </span>
              )}
            </figcaption>

            <span className={`${styles.qmark} ${styles.qstart}`} aria-hidden>
              “
            </span>
            <span className={`${styles.qmark} ${styles.qend}`} aria-hidden>
              ”
            </span>
          </motion.figure>
        </AnimatePresence>

        <button
          className={`${styles.nav} ${styles.next}`}
          onClick={() => go(1)}
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className={styles.dots} role="tablist" aria-label="Testimonials">
        {items.map((_, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={idx === index}
            className={`${styles.dot} ${idx === index ? styles.dotActive : ""}`}
            onClick={() => setIndex(idx)}
            tabIndex={idx === index ? 0 : -1}
            aria-label={`Show testimonial ${idx + 1}`}
          />
        ))}
      </div>

      {/* Clients rail (full width, subtle) */}
      {!!logos?.length && (
        <div className={styles.railWrap} aria-label="Clients & partners">
          <div className={`${styles.marquee} ${styles.m1}`}>
            {[...logos, ...logos].map((l, k) => (
              <img key={`m1-${k}`} src={l.src} alt={l.alt} loading="lazy" />
            ))}
          </div>
          <div className={`${styles.marquee} ${styles.m2}`}>
            {[...logos, ...logos].map((l, k) => (
              <img key={`m2-${k}`} src={l.src} alt={l.alt} loading="lazy" />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
