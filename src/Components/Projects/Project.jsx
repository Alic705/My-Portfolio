import React, { useState, useEffect, useRef, useMemo } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import styles from "./Project.module.css";

/* ===================================================================
   SEO: PROJECT DATA (edit safely) 
   - Titles, taglines, shortDescription are keyworded for React/Angular/Next.js/TypeScript.
   - All images use lazy loading and good alt text downstream.
   =================================================================== */
export const projectsData = [
  {
    id: "proj-01",
    title: "Project Velocity — Next.js Marketing Site",
    shortDescription:
      "High-performance marketing website with Next.js, SSG/ISR, and a headless CMS—built to rank and convert.",
    coverImage:
      "https://i.pinimg.com/1200x/8d/aa/13/8daa13976583e745739b57d005295e49.jpg",
    techStack: ["Next.js", "React", "TypeScript", "Vercel"],
    liveUrl: "#",
    codeUrl: "#",

    heroTagline: "Sub-second loads, CMS freedom, and SEO that converts.",
    timeline: "2 months",
    role: "Front-End Lead",
    tools: ["Next.js", "TypeScript", "Contentful", "Vercel"],

    challenge:
      "The existing site was slow, difficult to update, and suffered a >70% bounce rate on mobile.",
    processSteps: [
      {
        title: "Discovery & Strategy",
        description:
          "Benchmarked Core Web Vitals, mapped journeys, aligned KPIs with marketing.",
      },
      {
        title: "Development & CMS",
        description: "Reusable components + Contentful content model.",
      },
      {
        title: "Performance",
        description:
          "Image optimization (next/image), SSG, code-splitting, prefetching.",
      },
      {
        title: "Deploy & Train",
        description: "Vercel deploy, preview workflows, team onboarding.",
      },
    ],
    features: [
      {
        icon: "⚡",
        title: "SSG + ISR",
        description: "Instant loads with smart revalidation.",
      },
      {
        icon: "🧩",
        title: "Component Library",
        description: "Consistent UI and rapid iteration.",
      },
      {
        icon: "🧠",
        title: "Headless CMS",
        description: "Marketing edits content without dev time.",
      },
    ],
    solution:
      "Statically generated Next.js site with a scalable component system and Contentful-backed content.",
    results: [
      { value: "98/100", label: "Lighthouse (Perf)", percent: 98 },
      { value: "-80%", label: "Bounce Rate", percent: 80 },
      { value: "+300%", label: "Lead Conversions" },
    ],
    testimonial: {
      quote:
        "The new website is incredibly fast and transformed how we manage content. Leads skyrocketed.",
      author: "Jane Doe, CEO",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    media: {
      images: [
        "https://images.unsplash.com/photo-1520371508851-2c951a174215?w=1200&q=80&auto=format",
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80&auto=format",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80&auto=format",
      ],
    },
    futureWork: [
      "A/B tests on hero messaging to improve CTR.",
      "Segment-based personalization blocks.",
      "Internationalization with i18n routing.",
    ],
  },

  {
    id: "proj-02",
    title: "Quantum Dashboard — Angular Analytics",
    shortDescription:
      "Enterprise analytics dashboard in Angular with NgRx and custom D3 charts for real-time insights.",
    coverImage:
      "https://i.pinimg.com/736x/fc/54/fb/fc54fb998c3ea5f4fac298c63d58ee58.jpg",
    techStack: ["Angular", "TypeScript", "D3.js", "NgRx"],
    liveUrl: "#",
    codeUrl: "#",
    heroTagline: "From noisy streams to insight in milliseconds.",
    timeline: "3.5 months",
    role: "Front-End Engineer",
    tools: ["Angular", "NgRx", "D3.js", "Jasmine"],

    challenge:
      "Thousands of incoming data points needed fast, reliable visualization with advanced filtering and zero regressions.",
    processSteps: [
      {
        title: "Requirements",
        description: "Mapped analysts’ workflows & KPIs.",
      },
      {
        title: "Architecture",
        description: "NgRx for predictable async flows.",
      },
      { title: "Charts", description: "Custom D3 components for power users." },
      {
        title: "Quality",
        description: "Extensive unit/integration tests with Karma/Jasmine.",
      },
    ],
    features: [
      {
        icon: "📊",
        title: "Custom Charts",
        description: "Financial & operational KPIs with drill-down.",
      },
      {
        icon: "🔁",
        title: "Real-time Streams",
        description: "WebSocket updates.",
      },
      {
        icon: "🧭",
        title: "Advanced Filters",
        description: "Compose multi-dimension filters easily.",
      },
    ],
    solution:
      "Modular Angular SPA with NgRx and D3 for performant, real-time visualizations.",
    results: [
      { value: "50ms", label: "UI Latency" },
      { value: "10k+", label: "Live Points" },
      { value: "-95%", label: "Reported Bugs", percent: 95 },
    ],
    testimonial: {
      quote: "Indispensable—fast, predictable, and reliable.",
      author: "Head of Analytics",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    media: {
      images: [
        "https://images.unsplash.com/photo-1551281044-8b59f26db41f?w=1200&q=80&auto=format",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format",
      ],
    },
    futureWork: ["Drill-down reports", "CSV/PDF exports", "Threshold alerts"],
  },

  {
    id: "proj-03",
    title: "E-Commerce Platform — React + Stripe",
    shortDescription:
      "Full-featured store in React with Redux Toolkit, Node.js APIs, and secure Stripe checkout.",
    coverImage:
      "https://i.pinimg.com/1200x/b5/f4/8e/b5f48ea8142b932cd58ad9ff8833fc16.jpg",
    techStack: ["React", "Redux", "Node.js", "Stripe"],
    liveUrl: "#",
    codeUrl: "#",
    heroTagline: "Frictionless checkout that customers love.",
    timeline: "10 weeks",
    role: "Full-Stack Developer",
    tools: ["React", "Redux Toolkit", "Node.js", "Stripe"],

    challenge:
      "Scale to large inventories, keep checkout fast and secure, and lower cart abandonment.",
    processSteps: [
      {
        title: "Flows",
        description: "Mapped discovery → checkout with minimal friction.",
      },
      { title: "API", description: "REST endpoints with strong schemas." },
      {
        title: "Frontend",
        description: "Interactive UI + robust state via RTK.",
      },
      {
        title: "Payments",
        description: "Stripe integration with solid error handling.",
      },
    ],
    features: [
      {
        icon: "🛒",
        title: "Smart Cart",
        description: "Persistent cart + coupons + stock checks.",
      },
      {
        icon: "🔎",
        title: "Filters",
        description: "Fast multi-facet filtering.",
      },
      {
        icon: "🔒",
        title: "Secure Pay",
        description: "PCI-aware flows with Stripe.",
      },
    ],
    solution:
      "React + Redux frontend, Node backend, Stripe payments. Emphasis on speed & trust.",
    results: [
      { value: "+25%", label: "Conversion Rate", percent: 25 },
      { value: "-40%", label: "Abandonment", percent: 40 },
      { value: "1.2s", label: "Avg Load" },
    ],
    testimonial: {
      quote: "Sales up and happier customers—the UI is clean and fast.",
      author: "Store Owner",
      avatar: "https://i.pravatar.cc/150?img=31",
    },
    media: {
      images: [
        "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=1200&q=80&auto=format",
        "https://images.unsplash.com/photo-1515165562835-c3b8c8e7dfd9?w=1200&q=80&auto=format",
      ],
    },
    futureWork: [
      "Wishlist & reminders",
      "Loyalty points",
      "AI recommendations",
    ],
  },
];

/* ===================================================================
   Case Study Modal
   =================================================================== */
const CaseStudyModal = ({ project, onClose, triggerRef }) => {
  const modalRef = useRef(null);
  const modalBodyRef = useRef(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      triggerRef?.current?.focus?.();
    };
  }, [onClose, triggerRef]);

  useEffect(() => {
    if (modalBodyRef.current) modalBodyRef.current.scrollTop = 0;
    setGalleryIndex(0);
  }, [project]);

  if (!project) return null;

  const {
    id,
    title,
    coverImage,
    heroTagline,
    timeline,
    role,
    tools,
    challenge,
    processSteps,
    features,
    solution,
    results,
    testimonial,
    media,
    liveUrl,
    codeUrl,
    futureWork,
  } = project;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
      >
        {/* HERO */}
        <header
          className={`${styles.modalHeader} ${styles.heroHeader}`}
          style={{ backgroundImage: `url(${coverImage})` }}
        >
          <div className={styles.heroBadgeRow}>
            {timeline && (
              <span className={styles.metaBadge}>📅 {timeline}</span>
            )}
            {role && <span className={styles.metaBadge}>👤 {role}</span>}
            {tools?.length > 0 && (
              <span className={styles.metaBadge}>
                🧰 {tools.slice(0, 3).join(" • ")}
                {tools.length > 3 ? " +" : ""}
              </span>
            )}
          </div>
          <div className={styles.heroText}>
            <h2 id="modal-title">{title}</h2>
            {heroTagline && <p className={styles.heroTagline}>{heroTagline}</p>}
          </div>
          <button
            className={styles.modalClose}
            onClick={onClose}
            aria-label="Close case study"
          >
            &times;
          </button>
        </header>

        {/* BODY */}
        <div className={styles.modalBody} ref={modalBodyRef}>
          {challenge && (
            <section
              className={`${styles.modalSection} ${styles.highlightCard}`}
            >
              <div className={styles.sectionIcon}>⚠️</div>
              <div>
                <h3>The Challenge</h3>
                <p>{challenge}</p>
              </div>
            </section>
          )}

          {processSteps?.length > 0 && (
            <section className={styles.modalSection}>
              <h3>Our Approach</h3>
              <div className={styles.timeline}>
                {processSteps.map((step, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineNode}>{i + 1}</div>
                    <div className={styles.timelineContent}>
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {features?.length > 0 && (
            <section className={styles.modalSection}>
              <h3>Key Features</h3>
              <div className={styles.featuresGrid}>
                {features.map((f, i) => (
                  <article key={i} className={styles.featureCard}>
                    <div className={styles.featureIcon} aria-hidden="true">
                      {f.icon ?? "✨"}
                    </div>
                    <h4>{f.title}</h4>
                    <p>{f.description}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {solution && (
            <section
              className={`${styles.modalSection} ${styles.highlightCard}`}
            >
              <div className={styles.sectionIcon}>💡</div>
              <div>
                <h3>The Solution</h3>
                <p>{solution}</p>
              </div>
            </section>
          )}

          {results?.length > 0 && (
            <section
              className={`${styles.modalSection} ${styles.resultsSection}`}
            >
              <h3>Results & Impact</h3>
              <div className={styles.resultsGrid}>
                {results.map((r, i) => (
                  <div key={i} className={styles.resultStat}>
                    {"percent" in r ? (
                      <div
                        className={styles.resultDonut}
                        style={{
                          background: `conic-gradient(#8a2be2 ${r.percent}%, rgba(255,255,255,.15) ${r.percent}%)`,
                        }}
                        aria-label={`${r.label} ${r.value}`}
                      >
                        <div className={styles.resultDonutHole}>{r.value}</div>
                      </div>
                    ) : (
                      <div className={styles.resultValue}>{r.value}</div>
                    )}
                    <div className={styles.resultLabel}>{r.label}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {testimonial?.quote && (
            <section
              className={`${styles.modalSection} ${styles.testimonialSection}`}
            >
              <div className={styles.testimonialCard}>
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={
                      testimonial.author
                        ? `${testimonial.author} avatar`
                        : "Client avatar"
                    }
                    className={styles.testimonialAvatar}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <blockquote>
                  <p>“{testimonial.quote}”</p>
                  {testimonial.author && (
                    <footer>— {testimonial.author}</footer>
                  )}
                </blockquote>
              </div>
            </section>
          )}

          {media?.images?.length > 0 && (
            <section className={styles.modalSection}>
              <h3>Gallery</h3>
              <div className={styles.sliderWrapper}>
                <button
                  className={styles.sliderNav}
                  onClick={() => setGalleryIndex((i) => Math.max(i - 1, 0))}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <div
                  className={styles.sliderTrack}
                  style={{ transform: `translateX(-${galleryIndex * 100}%)` }}
                >
                  {media.images.map((src, idx) => (
                    <div key={idx} className={styles.slide}>
                      <img
                        src={src}
                        alt={`${title} screenshot ${idx + 1}`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
                <button
                  className={styles.sliderNav}
                  onClick={() =>
                    setGalleryIndex((i) =>
                      Math.min(i + 1, media.images.length - 1)
                    )
                  }
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
              <div className={styles.sliderDots}>
                {media.images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.dot} ${
                      idx === galleryIndex ? styles.activeDot : ""
                    }`}
                    onClick={() => setGalleryIndex(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </section>
          )}

          {futureWork?.length > 0 && (
            <section className={styles.modalSection}>
              <h3>Future Work</h3>
              <ul className={styles.futureList}>
                {futureWork.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {(liveUrl || codeUrl) && (
            <footer className={styles.modalLinks}>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.modalButton} ${styles.modalButtonPrimary}`}
                >
                  Live Demo <FiExternalLink />
                </a>
              )}
              {codeUrl && (
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalButton}
                >
                  View Code <FaGithub />
                </a>
              )}
            </footer>
          )}
        </div>
      </div>
    </div>
  );
};

/* ===================================================================
   Project Card
   =================================================================== */
const ProjectCard = ({ project, onClick, isActive }) => {
  const cardRef = useRef(null);
  const handleClick = () => onClick(cardRef);

  return (
    <div
      className={`${styles.projectCard} ${isActive ? styles.activeCard : ""}`}
      onClick={handleClick}
      ref={cardRef}
      tabIndex={0}
      role="button"
      aria-label={`View case study: ${project.title}`}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClick()}
    >
      <img
        src={project.coverImage}
        alt={`${project.title} cover`}
        className={styles.projectImage}
        loading="lazy"
        decoding="async"
      />
      <div className={styles.cardOverlay}>
        <button className={styles.viewCaseCircleBtn} aria-hidden="true">
          <FiExternalLink />
        </button>
      </div>
      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <div className={styles.techTags}>
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ===================================================================
   Main Page
   =================================================================== */
function ProjectPortfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalTriggerRef, setModalTriggerRef] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const trackRef = useRef(null);
  const descriptionRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // responsive
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // slide transform + description fade
  useEffect(() => {
    const track = trackRef.current;
    if (track && track.children.length) {
      const card = track.children[0];
      const cardWidth = card.getBoundingClientRect().width;
      const gap = parseInt(getComputedStyle(track).gap, 10) || 0;
      const distance = currentIndex * (cardWidth + gap);
      track.style.transform = `translateX(-${distance}px)`;
    }
    const el = descriptionRef.current;
    if (el) {
      el.classList.remove(styles.isVisible);
      const t = setTimeout(() => el.classList.add(styles.isVisible), 120);
      return () => clearTimeout(t);
    }
  }, [currentIndex, isMobile]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const maxIndex = Math.max(projectsData.length - (isMobile ? 1 : 2), 0);
  const handleNext = () => setCurrentIndex((p) => Math.min(p + 1, maxIndex));
  const handlePrev = () => setCurrentIndex((p) => Math.max(p - 1, 0));
  const handleDotClick = (i) => setCurrentIndex(i);

  const handleOpenModal = (project, triggerRef) => {
    setSelectedProject(project);
    setModalTriggerRef(triggerRef);
    // optional: update hash for deep-link (nice for sharing)
    window.history.replaceState(null, "", `#${project.id}`);
  };
  const handleCloseModal = () => {
    setSelectedProject(null);
    window.history.replaceState(null, "", `#`);
  };

  const handleTouchStart = (e) =>
    (touchStartX.current = e.targetTouches[0].clientX);
  const handleTouchMove = (e) =>
    (touchEndX.current = e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 50) handleNext();
    if (delta < -50) handlePrev();
  };

  const activeProject = projectsData[currentIndex];

  /* ---------------- SEO: HEAD + JSON-LD ---------------- */
  const baseUrl = "https://your-domain.com";
  const canonical = `${baseUrl}/projects`;

  const itemListSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: projectsData.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `${baseUrl}/projects#${p.id}`,
        name: p.title,
        image: p.coverImage,
      })),
    }),
    []
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Projects", item: canonical },
    ],
  };

  const hasPartSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "React & Angular Projects and Case Studies",
    url: canonical,
    description:
      "Case studies showcasing React, Angular, Next.js and TypeScript work with performance, accessibility and SEO results.",
    hasPart: projectsData.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      headline: p.heroTagline || p.shortDescription,
      url: `${baseUrl}/projects#${p.id}`,
      image: p.coverImage,
      about: p.techStack,
    })),
  };

  return (
    <>
      {/* HEAD */}
      <title>React &amp; Angular Case Studies | Projects by Ali Ch</title>
      <meta
        name="description"
        content="Explore front-end case studies built with React, Angular, Next.js & TypeScript—Core Web Vitals wins, SSR/SSG, accessibility, and measurable business impact."
      />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />
      <meta
        property="og:title"
        content="React & Angular Case Studies | Projects"
      />
      <meta
        property="og:description"
        content="High-performance front-end projects with real results."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${baseUrl}/og-projects.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="React & Angular Case Studies" />
      <meta
        name="twitter:description"
        content="Performance, accessibility, and SEO—backed by data."
      />
      <meta name="twitter:image" content={`${baseUrl}/og-projects.jpg`} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hasPartSchema) }}
      />

      {/* PAGE */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={handleCloseModal}
          triggerRef={modalTriggerRef}
        />
      )}

      <main className={styles.projectsWrapper} aria-labelledby="projects-title">
        {/* H1 + Dek for SEO */}
        <header className="sectionHeader">
          <h1 id="projects-title" className="sectionTitle gradientText">
            React &amp; Angular Projects —{" "}
            <span className="impactHighlight">Case Studies</span>
          </h1>
          <p className={styles.sectionDek}>
            Real-world work across <strong>Next.js</strong>,{" "}
            <strong>Angular</strong>, <strong>React</strong> and{" "}
            <strong>TypeScript</strong>. Built for{" "}
            <strong>Core Web Vitals</strong>,{" "}
            <strong>accessibility (WCAG 2.2)</strong>, and <strong>SEO</strong>.
            View details, results, and stack choices.
          </p>
        </header>
        <div className="d-flex align-content-between gap-5">
          <div className={styles.leftPanel}>
            <h2 className={`${styles.mainHeading} ${styles.gradientText}`}>
              Latest Projects
              <br />
              I&apos;ve Shipped
            </h2>

            <div
              ref={descriptionRef}
              className={`${styles.projectDescription} ${styles.isVisible}`}
            >
              {activeProject && (
                <p key={activeProject.id}>{activeProject.shortDescription}</p>
              )}
              <p className={styles.inlineCta}>
                Looking for something similar?{" "}
                <a href="/contact" className={styles.inlineLink}>
                  Start a project →
                </a>
              </p>
            </div>

            <div className={styles.carouselNav}>
              <button
                onClick={handlePrev}
                aria-label="Previous projects"
                disabled={currentIndex === 0}
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next projects"
                disabled={currentIndex >= maxIndex}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div
            className={styles.rightPanel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.carouselContainer}>
              <div className={styles.carouselTrack} ref={trackRef}>
                {projectsData.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    isActive={i === currentIndex}
                    onClick={(ref) => {
                      setModalTriggerRef(ref);
                      handleOpenModal(project, ref);
                    }}
                  />
                ))}
              </div>
            </div>

            <div
              className={styles.dotIndicators}
              role="tablist"
              aria-label="Projects pagination"
            >
              {projectsData.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === currentIndex}
                  className={`${styles.dot} ${
                    i === currentIndex ? styles.activeDot : ""
                  }`}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProjectPortfolio;
