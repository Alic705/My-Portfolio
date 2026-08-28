import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiGithubLine,
  RiExternalLinkLine,
  RiCalendarEventLine,
  RiUserLine,
  RiToolsLine,
  RiLightbulbFlashLine,
  RiRobot2Line,
  RiRocketLine,
  RiLeafLine,
  RiShakeHandsLine,
  RiShipLine,
  RiLineChartLine,
  RiShieldCheckLine,
  RiBarChartBoxLine,
  RiShoppingCartLine,
  RiFilter3Line,
  RiLockPasswordLine,
  RiCloseLine
} from "react-icons/ri";
import {
  SiReact,
  SiNextdotjs,
  SiOpenai,
  SiAngular,
  SiRedux,
  SiNodedotjs,
  SiStripe,
  SiFigma,
} from "react-icons/si";
import styles from "./Project.module.css";

/* ===================================================================
   SEO: PROJECT DATA (edit safely) 
   - Titles, taglines, shortDescription are keyworded for React/Angular/Next.js/TypeScript.
   - All images use lazy loading and good alt text downstream.
   =================================================================== */
export const projectsData = [
  {
    id: "proj-04",
    title: "Rdeens Solutions",
    shortDescription:
      "Rdeens Solutions combines AI technology with expert developers to turn your idea into a market-ready product — in record time.",
    coverImage: "assets/rdeens-1.png",
    techStack: ["React", "AI Integration", "Web & Mobile Dev"],
    liveUrl: "https://rdeens.com/",
    codeUrl: "#",

    heroTagline: "WE BUILD AI-POWERED DIGITAL PRODUCTS",
    timeline: "3 months",
    role: "Full Stack Developer",
    tools: ["React", "Next.js", "AI APIs", "Mobile Dev"],

    challenge:
      "To create a digital presence for an agency that combines AI technology with expert developers to turn ideas into market-ready products in record time.",
    processSteps: [
      { title: "Identify and Simplify", description: "Accelerate development cycle and maintain cost-effectiveness." },
      { title: "Build and Develop", description: "Complex, dynamic, and real-time solutions for various industries." },
      { title: "Quality Control", description: "Functional, integration, system, sanity, usability, and performance testing." },
      { title: "Scale and Deploy", description: "On-time deployment by assessing and scaling development needs." },
    ],

    features: [
      { icon: <RiLightbulbFlashLine />, title: "Strategic Thinking", description: "User-focused design combined with innovation." },
      { icon: <RiRobot2Line />, title: "AI-Driven", description: "Next-Gen AI-accelerated product development." },
      { icon: <RiRocketLine />, title: "Rapid Delivery", description: "Turn ideas into market-ready products in record time." },
    ],

    solution:
      "A comprehensive digital experience combining strategic thinking, user-focused design, powerful web and mobile development, and reliable engineering.",
    results: [
      { value: "80+", label: "Projects Delivered", percent: 80 },
      { value: "8+", label: "Years of Experience", percent: 90 },
      { value: "95%", label: "Client Satisfaction", percent: 95 },
    ],

    testimonial: {
      quote:
        "Their custom AI chatbot completely transformed our digital customer engagement.",
      author: "Spectifyxi, Entrepreneur",
      avatar: "https://i.pravatar.cc/150?img=11",
    },

    media: {
      images: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      ],
    },
    futureWork: ["More AI features", "Client portal", "Automated scaling"],
  },
  {
    id: "proj-01",
    title: "Animal Feed",
    shortDescription:
      "A global export platform for high-quality Animal Feed, Fodder, and Forages, specializing in the Gulf Countries market.",
    coverImage: "https://images.unsplash.com/photo-1599507963248-f6213797960d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    techStack: ["React", "Web Development", "Export Platform"],
    liveUrl: "https://animal-feed.netlify.app/",
    codeUrl: "#",

    heroTagline: "High-Quality Animal Feed And Forages",
    timeline: "2.5 months",
    role: "Front-End Engineer",
    tools: ["React", "CSS Modules", "Netlify"],

    challenge:
      "To create a seamless online platform for exporting high-quality animal fodder and forages globally, ensuring trust and international compliance.",
    processSteps: [
      {
        title: "Cultivation",
        description: "Growing and producing high-quality animal fodder and forages for livestock.",
      },
      {
        title: "Quality Control",
        description: "Ensuring products comply with international standards with necessary documentation.",
      },
      {
        title: "Export & Shipping",
        description: "Providing a one-window solution for products and shipping right at the doorstep.",
      },
    ],
    features: [
      {
        icon: <RiLeafLine />,
        title: "Quality Products",
        description: "Complying with international standards and documentation.",
      },
      {
        icon: <RiShakeHandsLine />,
        title: "Trust & Expertise",
        description: "Over 12 years of expertise in the export industry.",
      },
      {
        icon: <RiShipLine />,
        title: "Quality Services",
        description: "One-window solution for products, export, and shipping.",
      },
    ],
    solution:
      "A modern web platform that showcases diverse animal feeds, highlights agricultural expertise, and streamlines the export inquiry process.",
    results: [
      { value: "12+", label: "Years Expertise", percent: 100 },
      { value: "100%", label: "Quality Assurance", percent: 100 },
    ],
    testimonial: {
      quote:
        "Top-notch forage products and reliable export services. A trusted name in the industry.",
      author: "Satisfied Client",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    media: {
      images: [
        "https://images.unsplash.com/photo-1599507963248-f6213797960d?w=1200&q=80",
        "https://images.unsplash.com/photo-1595166415256-5b4d754be0eb?w=1200&q=80",
      ],
    },
    futureWork: [
      "Online order tracking for shipments.",
      "Expanded multi-language support for Gulf regions.",
    ],
  },

  {
    id: "proj-02",
    title: "Ethix Marketing",
    shortDescription:
      "Data-driven SEO strategies, high-authority link building, and conversion-focused content that puts your brand on page one — and keeps it there.",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    techStack: ["SEO", "Link Building", "Web Design", "Content"],
    liveUrl: "https://ethixmarketing.com/",
    codeUrl: "#",
    heroTagline: "100% SATISFACTION - Ethical Growth Built Around Your Brand",
    timeline: "Ongoing",
    role: "SEO & Growth Agency",
    tools: ["Ahrefs", "Semrush", "Google Analytics", "Figma"],
    challenge:
      "To build a performance-focused digital agency platform combining SEO, authority links, content, and conversion-led design into one clear growth system.",
    processSteps: [
      {
        title: "SEO Audit & Research",
        description: "Deep-dive into website, competitors, and niche to identify gaps and opportunities others miss."
      },
      {
        title: "Strategy Blueprint",
        description: "Custom SEO roadmap tailored to goals, industry, and target audience — no copy-paste plans."
      },
      {
        title: "Execute & Build",
        description: "On-page fixes, authority link building, and content deployment — all executed with precision."
      },
      {
        title: "Track & Scale",
        description: "Monthly reporting, continuous optimization, and scaling what works to compound growth."
      }
    ],
    features: [
      { icon: <RiLineChartLine />, title: "Data-Driven Strategy", description: "Every decision backed by analytics. We measure, optimize, and scale what works." },
      { icon: <RiShieldCheckLine />, title: "White-Hat Only", description: "No shortcuts, no penalties. We build sustainable growth with ethical, Google-compliant practices." },
      { icon: <RiBarChartBoxLine />, title: "Transparent Reporting", description: "Monthly reports with clear KPIs, ROI tracking, and actionable insights." }
    ],
    solution:
      "A complete digital marketing platform offering transparent link building packages, SEO services, and conversion-focused web design to dominate search results.",
    results: [
      { value: "500+", label: "Keywords Ranked", percent: 100 },
      { value: "10k+", label: "Backlinks Built", percent: 100 },
      { value: "80%", label: "Avg DR Increase", percent: 80 }
    ],
    testimonial: {
      quote: "Ethix Marketing transformed our search presence completely. We went from page 5 to page 1 in under 3 months. The results speak for themselves.",
      author: "Sarah Thompson, CEO, Sortlist",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    media: {
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    futureWork: ["Expanded Digital PR Services", "Advanced AI SEO Tools"]
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
        icon: <RiShoppingCartLine />,
        title: "Smart Cart",
        description: "Persistent cart + coupons + stock checks.",
      },
      {
        icon: <RiFilter3Line />,
        title: "Filters",
        description: "Fast multi-facet filtering.",
      },
      {
        icon: <RiLockPasswordLine />,
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
   Tech Icon Mapping
   =================================================================== */
const TechIcon = ({ name }) => {
  const iconMap = {
    "React": <SiReact className={styles.techIcon} />,
    "Next.js": <SiNextdotjs className={styles.techIcon} />,
    "Angular": <SiAngular className={styles.techIcon} />,
    "Node.js": <SiNodedotjs className={styles.techIcon} />,
    "Redux": <SiRedux className={styles.techIcon} />,
    "Redux Toolkit": <SiRedux className={styles.techIcon} />,
    "Stripe": <SiStripe className={styles.techIcon} />,
    "AI APIs": <SiOpenai className={styles.techIcon} />,
    "AI Integration": <SiOpenai className={styles.techIcon} />,
    "Figma": <SiFigma className={styles.techIcon} />,
    "SEO": <RiLineChartLine className={styles.techIcon} />,
  };
  return iconMap[name] || <RiToolsLine className={styles.techIcon} />;
};

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
        <button
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Close case study"
        >
          &times;
        </button>

        {/* BODY */}
        <div className={styles.modalBody} ref={modalBodyRef}>

          {/* CLEAN HEADER */}
          <header className={styles.cleanHeader}>
            <div className={styles.metaBadgeRow}>
              {timeline && (
                <span className={styles.metaBadge}>
                  <RiCalendarEventLine /> {timeline}
                </span>
              )}
              {role && (
                <span className={styles.metaBadge}>
                  <RiUserLine /> {role}
                </span>
              )}
              {tools?.length > 0 && (
                <span className={styles.metaBadge}>
                  <RiToolsLine /> {tools.slice(0, 3).join(" • ")}
                  {tools.length > 3 ? " +" : ""}
                </span>
              )}
            </div>

            <h2 id="modal-title" className={styles.cleanTitle}>{title}</h2>
            {heroTagline && <p className={styles.cleanTagline}>{heroTagline}</p>}
          </header>

          {/* STANDALONE HERO IMAGE */}
          <div className={styles.cleanHeroImage}>
            <img src={coverImage} alt={`${title} Cover`} loading="lazy" decoding="async" />
          </div>

          <div className={styles.modalGrid}>

            {/* LEFT COLUMN: The Story */}
            <div className={styles.modalLeft}>
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
            </div>

            {/* RIGHT COLUMN: The Data & Proof */}
            <div className={styles.modalRight}>
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
                              background: `conic-gradient(var(--proj-accent) ${r.percent}%, rgba(255,255,255,.15) ${r.percent}%)`,
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

              {testimonial?.quote && (
                <section
                  className={`${styles.modalSection} ${styles.testimonialSection}`}
                >
                  <h3>Client Feedback</h3>
                  <div className={styles.testimonialCard}>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className={styles.testimonialAvatar}
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <blockquote>"{testimonial.quote}"</blockquote>
                      <footer>— {testimonial.author}</footer>
                    </div>
                  </div>
                </section>
              )}
            </div>

          </div>

          {/* FULL WIDTH BOTTOM: Media & Links */}
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
                      Math.min(i + 1, media.images.length - 1),
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
                    className={`${styles.dot} ${idx === galleryIndex ? styles.activeDot : ""
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
                  Live Demo <RiExternalLinkLine />
                </a>
              )}
              {codeUrl && (
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalButton}
                >
                  View Code <RiGithubLine />
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
      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <div className={styles.techTags}>
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className={styles.techTag}>
              <TechIcon name={tech} />
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
    [],
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

        </header>
        <div className={`${styles.projectRow} mt-1vw`}>
          <div className={styles.leftPanel}>
            <h2 className={`${styles.mainHeading} ${styles.gradientText} `}>
              {activeProject ? activeProject.title : "Featured Projects"}
            </h2>

            <div
              ref={descriptionRef}
              className={`${styles.projectDescription} ${styles.isVisible} `}
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
                className={`${styles.arrowBtn} ${currentIndex === 0 ? styles.disabled : ""
                  }`}
                aria-label="Previous Project"
              >
                <RiArrowLeftLine />
              </button>
              <button
                onClick={handleNext}
                className={`${styles.arrowBtn} ${currentIndex >= maxIndex ? styles.disabled : ""
                  }`}
                aria-label="Next Project"
              >
                <RiArrowRightLine />
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
                  className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ""
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
