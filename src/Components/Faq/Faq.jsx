import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./FAQ.module.css";

/* ---- Content (kept editable) ---- */
const faqs = [
  {
    q: "Can React or Angular apps rank on Google?",
    a: "Yes. With SSR/SSG (or safe pre-rendering), semantic HTML, structured data, and Core Web Vitals tuning, React/Angular apps index and rank reliably.",
  },
  {
    q: "What Core Web Vitals targets do you aim for?",
    a: "LCP ≤ 1.5s, INP ≤ 200ms, CLS ≤ 0.05. We budget images, split bundles, and stream HTML for faster paint.",
  },
  {
    q: "Do you offer performance & SEO audits?",
    a: "Yes—fixed-scope audits covering LCP/INP/CLS, bundle analysis, image strategy, a11y, and technical SEO. You get a prioritized, step-by-step action plan.",
  },
  {
    q: "What’s your typical project process?",
    a: "Discovery → scope & KPIs → implementation (components, state, API) → performance/a11y/SEO pass → release & handover. Weekly check-ins and async updates.",
  },
  {
    q: "Do I keep the code and design system?",
    a: "Absolutely. You retain full ownership of code, components, and documentation.",
  },
  {
    q: "How soon can we start?",
    a: "I’m currently available. Most projects kick off within 1–2 weeks after scope sign-off.",
  },
  {
    q: "Which stacks do you use most?",
    a: "React/Next.js (TypeScript) and Angular (NgRx). Node.js/Express for APIs. Testing with Jest/Vitest/Karma.",
  },
  {
    q: "Do you handle accessibility?",
    a: "Yes. I target WCAG 2.2 AA: landmarks, keyboard support, focus management, and screen-reader checks.",
  },
  {
    q: "How do we measure results?",
    a: "We set KPIs (conversion, time-to-interactive, SEO impressions) and track via analytics, Search Console, and synthetic monitoring.",
  },
];

/* ---- Utilities ---- */
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);
  const listRef = useRef(null);

  // Hash deep-link (e.g. /faq#how-soon-can-we-start)
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace("#", ""));
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      el.open = true;
      el.scrollIntoView({ block: "start", behavior: "smooth" });
      setOpenId(hash);
    }
  }, []);

  // Filtered list (search in question/answer)
  const filtered = useMemo(() => {
    if (!query) return faqs;
    const q = query.toLowerCase();
    return faqs.filter(
      (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    );
  }, [query]);

  const baseUrl = "https://your-domain.com";
  const canonical = `${baseUrl}/faq`;

  /* ---- SEO schema ---- */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "FAQ", item: canonical },
    ],
  };

  const copyLink = async (id) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // fallback
    }
  };

  return (
    <main className={styles.wrap} aria-labelledby="faq-title">
      {/* SEO head */}
      <title>FAQ | React &amp; Angular Front-End | Ali Ch</title>
      <meta
        name="description"
        content="Answers about React & Angular SEO, Core Web Vitals, accessibility, process, and timelines. Get audit and project details."
      />
      <link rel="canonical" href={canonical} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className={styles.header}>
        <div className="sectionHeader">
          <h1
            id="faq-title"
            className="gradientText
        sectionTitle"
          >
            Frequently Asked Questions
          </h1>
          <p className="sectionDek">
            Everything about <strong>React</strong>, <strong>Angular</strong>,
            performance, accessibility, and SEO—how I work and what results to
            expect. Need something else?{" "}
            <a href="/contact" className={styles.link}>
              Contact me →
            </a>
          </p>

          <div className={styles.searchWrap}>
            <input
              className={styles.search}
              placeholder="Search questions…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search FAQ"
            />
          </div>
        </div>
      </header>

      {/* FAQ Grid */}
      <section ref={listRef} className={styles.grid} role="list">
        {filtered.map((f) => {
          const id = slugify(f.q);
          const isOpen = openId === id;
          return (
            <details
              key={id}
              id={id}
              className={`${styles.item} ${isOpen ? styles.isOpen : ""}`}
              role="listitem"
              onToggle={(e) => e.target.open && setOpenId(id)}
            >
              <summary className={styles.q}>
                <span className={styles.qText}>{f.q}</span>
                <span className={styles.chev} aria-hidden />
              </summary>

              <div className={styles.aWrap}>
                <p className={styles.a}>{f.a}</p>
                <div className={styles.itemActions}>
                  <button
                    className={styles.copyLink}
                    onClick={() => copyLink(id)}
                    aria-label="Copy link to this question"
                    title="Copy link"
                  >
                    #
                  </button>
                </div>
              </div>
            </details>
          );
        })}

        {filtered.length === 0 && (
          <div className={styles.empty}>
            No results. Try a different keyword (e.g. “SEO”, “Core Web Vitals”).
          </div>
        )}
      </section>

      {/* CTA row */}
      <aside className={styles.ctaRow}>
        <a href="/projects" className={`${styles.btn} ${styles.btnPrimary}`}>
          View Case Studies
        </a>
        <a href="/services" className={`${styles.btn} ${styles.btnGhost}`}>
          See Services
        </a>
      </aside>
    </main>
  );
}
