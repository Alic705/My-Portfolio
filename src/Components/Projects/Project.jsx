import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiToolsLine,
  RiLineChartLine,
  RiArrowRightUpLine,
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
  SiTailwindcss,
} from "react-icons/si";
import { projectsData } from "./ProjectData";
import styles from "./Project.module.css";

/* ===================================================================
   Tech Icon Mapping
   =================================================================== */
const TechIcon = ({ name }) => {
  const iconMap = {
    React: <SiReact className={styles.techIcon} />,
    "Next.js": <SiNextdotjs className={styles.techIcon} />,
    Angular: <SiAngular className={styles.techIcon} />,
    "Node.js": <SiNodedotjs className={styles.techIcon} />,
    Redux: <SiRedux className={styles.techIcon} />,
    "Redux Toolkit": <SiRedux className={styles.techIcon} />,
    Stripe: <SiStripe className={styles.techIcon} />,
    "Stripe API": <SiStripe className={styles.techIcon} />,
    "AI APIs": <SiOpenai className={styles.techIcon} />,
    "AI Integration": <SiOpenai className={styles.techIcon} />,
    Figma: <SiFigma className={styles.techIcon} />,
    SEO: <RiLineChartLine className={styles.techIcon} />,
    TailwindCSS: <SiTailwindcss className={styles.techIcon} />,
  };
  return iconMap[name] || <RiToolsLine className={styles.techIcon} />;
};

/* ===================================================================
   Project Card with Center Arrow Hover
   =================================================================== */
const ProjectCard = ({ project, onNavigate, isActive }) => {
  const cardRef = useRef(null);

  const handleNavigate = () => {
    onNavigate?.("project-detail", project.id);
  };

  return (
    <div
      className={`${styles.projectCard} ${isActive ? styles.activeCard : ""}`}
      onClick={handleNavigate}
      ref={cardRef}
      tabIndex={0}
      role="button"
      aria-label={`View project details: ${project.title}`}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleNavigate()}
    >
      <div className={styles.imageContainer}>
        <img
          src={project.coverImage}
          alt={`${project.title} cover`}
          className={styles.projectImage}
          loading="lazy"
          decoding="async"
        />

        {/* Center Arrow Hover Button */}
        <div className={styles.centerArrowWrapper}>
          <button
            type="button"
            className={styles.centerArrowBtn}
            aria-label={`Open ${project.title} project page`}
            onClick={(e) => {
              e.stopPropagation();
              handleNavigate();
            }}
          >
            <RiArrowRightUpLine className={styles.centerArrowIcon} />
          </button>
        </div>
      </div>

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
   Main Projects Carousel Page
   =================================================================== */
function ProjectPortfolio({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const trackRef = useRef(null);
  const descriptionRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive check
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Slide transform + description animation
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

  // Keyboard navigation
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
        url: `${baseUrl}/project/${p.id}`,
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
    name: "React & Modern Web Projects | Portfolio by Ali Altaf",
    url: canonical,
    description:
      "Case studies showcasing modern React, Next.js, and TypeScript web development with performance and business outcomes.",
    hasPart: projectsData.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      headline: p.heroTagline || p.shortDescription,
      url: `${baseUrl}/project/${p.id}`,
      image: p.coverImage,
      about: p.techStack,
    })),
  };

  return (
    <>
      {/* HEAD */}
      <title>Projects &amp; Case Studies | Ali Altaf</title>
      <meta
        name="description"
        content="Explore full-stack and front-end case studies built with React, Next.js, and modern web architectures."
      />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content="Projects & Case Studies | Ali Altaf" />
      <meta
        property="og:description"
        content="High-performance front-end and full-stack projects with real business impact."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />

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

      <main className={styles.projectsWrapper} aria-labelledby="projects-title">
        {/* H1 for SEO & Header */}
        <header className="sectionHeader">
          <h1 id="projects-title" className="sectionTitle gradientText">
            Featured Projects &amp;{" "}
            <span className="impactHighlight">Case Studies</span>
          </h1>
        </header>

        <div className={`${styles.projectRow} mt-1vw`}>
          <div className={styles.leftPanel}>
            <h2 className={`${styles.mainHeading} ${styles.gradientText}`}>
              {activeProject ? activeProject.title : "Featured Projects"}
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
                <button
                  type="button"
                  onClick={() => onNavigate?.("contact")}
                  className={styles.inlineLinkBtn}
                >
                  Start a project →
                </button>
              </p>
            </div>

            <div className={styles.carouselNav}>
              <button
                onClick={handlePrev}
                className={`${styles.arrowBtn} ${
                  currentIndex === 0 ? styles.disabled : ""
                }`}
                aria-label="Previous Project"
                disabled={currentIndex === 0}
              >
                <RiArrowLeftLine />
              </button>
              <button
                onClick={handleNext}
                className={`${styles.arrowBtn} ${
                  currentIndex >= maxIndex ? styles.disabled : ""
                }`}
                aria-label="Next Project"
                disabled={currentIndex >= maxIndex}
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
                    onNavigate={onNavigate}
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
