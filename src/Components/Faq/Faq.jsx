import React, { useEffect, useMemo, useRef, useState } from "react";

/* ---- Content (kept editable) ---- */
const faqs = [
  {
    q: "Which front-end technologies and frameworks do you specialize in?",
    a: "I specialize in React.js, Angular, Redux Toolkit, TypeScript, and modern JavaScript (ES6+). For styling and UI architecture, I build modular design systems using Tailwind CSS and CSS Modules. I also integrate REST APIs, handle full-stack basics with Node.js/Express/MongoDB, and customize Shopify & e-commerce frontends.",
  },
  {
    q: "Are you available for remote engineering contracts or full-time roles?",
    a: "Yes. I am available worldwide for freelance contracts, consulting engagements, and dedicated remote front-end engineering roles. I collaborate seamlessly across US, UK, European, and Asian time zones with clear async reporting and daily updates.",
  },
  {
    q: "How do you optimize React and Angular apps for Google SEO & Core Web Vitals?",
    a: "I implement sub-second First Contentful Paint (FCP) and Largest Contentful Paint (LCP ≤ 1.5s) via route-based code splitting, lazy loading, next-gen WebP/AVIF images, and pre-rendering/SSR. Every page includes semantic HTML5 landmarks, structured JSON-LD schemas, and zero layout shift (CLS ≤ 0.05) to ensure maximum indexing and ranking.",
  },
  {
    q: "How do you manage complex application state and REST API integrations?",
    a: "I engineer predictable, scalable state layers using Redux Toolkit, Context API, and Angular RxJS observables. For data fetching, I handle token authentication, centralized interceptors, error boundaries, request deduplication, loading skeletons, and optimistic UI updates for a snappy user experience.",
  },
  {
    q: "Do you work with design files from Figma, Adobe XD, or Sketch?",
    a: "Yes. I translate Figma designs into pixel-perfect, accessible, and responsive components. I ensure precise typography, fluid spacing, micro-interactions, dark/light mode parity, and WCAG AA compliance across desktop, tablet, and mobile viewports.",
  },
  {
    q: "Do you build and customize Shopify or e-commerce storefronts?",
    a: "Absolutely. I develop high-converting Shopify frontend themes, Liquid customizations, and e-commerce platforms (such as WooCommerce/WordPress and custom SPAs). I focus on high-speed product catalogs, frictionless checkout flows, and mobile-first conversions.",
  },
  {
    q: "What is your typical development process and sprint cadence?",
    a: "1. Discovery & Architecture Review → 2. Component & State Implementation → 3. API Integration & Error Handling → 4. Core Web Vitals & Cross-Browser QA → 5. Deployment & Handover. I operate in weekly sprints with live staging demos, GitHub pull requests, and transparent Slack/email communication.",
  },
  {
    q: "Who owns the intellectual property (IP) and source code?",
    a: "You retain 100% full ownership of all source code, design assets, and documentation. All deliverables are handed over cleanly via GitHub or your preferred version control system with comprehensive README documentation and zero vendor lock-in.",
  },
  {
    q: "How soon can we kick off a new project or milestone?",
    a: "I can typically begin new projects or join active engineering sprints within 2 to 5 business days following scope alignment and kickoff call.",
  },
  {
    q: "What are your communication channels during an ongoing engagement?",
    a: "I communicate primarily via Slack, Discord, Microsoft Teams, GitHub PR reviews, and scheduled video check-ins (Google Meet/Zoom), paired with written sprint recaps so your team always knows what shipped and what’s next.",
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
      (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q),
    );
  }, [query]);

  const baseUrl = "https://alich.dev";
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
    <main className="faqWrap" aria-labelledby="faq-title">
      {/* SEO head */}
      <title>FAQ | Frontend Engineer &amp; Web Developer | Ali Ch</title>
      <meta
        name="description"
        content="Frequently asked questions about hiring Ali Ch for React.js, Angular, Redux, REST APIs, performance optimization, project timelines, and contracts."
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
      <header className="faqHeader">
        <div className="sectionHeader">
          <h1 id="faq-title" className="gradientText sectionTitle">
            Frequently Asked Questions
          </h1>
          <p className="sectionDek">
            Everything about <strong>React</strong>, <strong>Angular</strong>,
            performance, accessibility, and SEO—how I work and what results to
            expect. Need something else?{" "}
            <a href="/contact" className="faqLink">
              Contact me →
            </a>
          </p>

          <div className="faqSearchWrap">
            <input
              className="faqSearch"
              placeholder="Search questions…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search FAQ"
            />
          </div>
        </div>
      </header>

      {/* FAQ Grid */}
      <section ref={listRef} className="faqGrid" role="list">
        {filtered.map((f, index) => {
          const id = `${slugify(f.q)}-${index}`;
          const isOpen = openId === id;

          return (
            <details
              key={id}
              open={isOpen} // Important for accessibility
              className={`faqItem ${isOpen ? "faqIsOpen" : ""}`}
            >
              <summary
                className="faqQ"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenId(isOpen ? null : id);
                }}
              >
                <span className="faqQText">{f.q}</span>
                <span className="faqChev" />
              </summary>

              {/* Transition ke liye ye wrapper zaroori hai */}
              <div className="faqAWrap">
                <div className="faqAContent">
                  <p className="faqA">{f.a}</p>
                  <div className="faqItemActions">
                    <button
                      className="faqCopyLink"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyLink(id);
                      }}
                    >
                      #
                    </button>
                  </div>
                </div>
              </div>
            </details>
          );
        })}
      </section>
      {/* CTA row */}
      <aside className="faqCtaRow">
        <a href="/projects" className="btn btnPrimary">
          View Case Studies
        </a>
        <a href="/services" className="btn btnGhost">
          See Services
        </a>
      </aside>
    </main>
  );
}
