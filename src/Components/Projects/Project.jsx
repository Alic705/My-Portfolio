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
  SiTypescript,
  SiPython,
  SiDocker,
  SiFlutter,
  SiWordpress,
  SiWoocommerce,
} from "react-icons/si";
import { projectsData } from "./ProjectData";

/* ===================================================================
   Tech Icon Mapping
   =================================================================== */
const TechIcon = ({ name }) => {
  const iconMap = {
    React: <SiReact className="techIcon" />,
    "Next.js": <SiNextdotjs className="techIcon" />,
    Angular: <SiAngular className="techIcon" />,
    "Node.js": <SiNodedotjs className="techIcon" />,
    TypeScript: <SiTypescript className="techIcon" />,
    Python: <SiPython className="techIcon" />,
    Docker: <SiDocker className="techIcon" />,
    Flutter: <SiFlutter className="techIcon" />,
    Redux: <SiRedux className="techIcon" />,
    "Redux Toolkit": <SiRedux className="techIcon" />,
    Stripe: <SiStripe className="techIcon" />,
    "Stripe API": <SiStripe className="techIcon" />,
    "AI APIs": <SiOpenai className="techIcon" />,
    "AI Integration": <SiOpenai className="techIcon" />,
    Figma: <SiFigma className="techIcon" />,
    SEO: <RiLineChartLine className="techIcon" />,
    TailwindCSS: <SiTailwindcss className="techIcon" />,
    WordPress: <SiWordpress className="techIcon" />,
    WooCommerce: <SiWoocommerce className="techIcon" />,
  };
  return iconMap[name] || <RiToolsLine className="techIcon" />;
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
      className={`projectCard ${isActive ? "activeCard" : ""}`}
      onClick={handleNavigate}
      ref={cardRef}
      tabIndex={0}
      role="button"
      aria-label={`View project details: ${project.title}`}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleNavigate()}
    >
      <div className="imageContainer">
        <img
          src={project.coverImage}
          alt={`${project.title} cover`}
          className="projectImage"
          loading="lazy"
          decoding="async"
        />

        {/* Center Arrow Hover Button */}
        <div className="centerArrowWrapper">
          <button
            type="button"
            className="centerArrowBtn"
            aria-label={`Open ${project.title} project page`}
            onClick={(e) => {
              e.stopPropagation();
              handleNavigate();
            }}
          >
            <RiArrowRightUpLine className="centerArrowIcon" />
          </button>
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
      el.classList.remove("isVisible");
      const t = setTimeout(() => el.classList.add("isVisible"), 120);
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

  const maxIndex = Math.max(projectsData.length - 1, 0);
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
    name: "React & Modern Web Projects | Portfolio by Ali Ch",
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
      <title>Projects &amp; Case Studies | Ali Ch</title>
      <meta
        name="description"
        content="Explore full-stack and front-end case studies built with React, Next.js, and modern web architectures."
      />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content="Projects & Case Studies | Ali Ch" />
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

      <main className="projectsWrapper" aria-labelledby="projects-title">
        {/* H1 for SEO & Header */}
        <header className="sectionHeader">
          <h1 id="projects-title" className="sectionTitle gradientText">
            Featured Projects &amp;{" "}
            <span className="impactHighlight">Case Studies</span>
          </h1>
        </header>

        <div className="projectRow mt-1vw">
          <div className="leftPanel">
            <h2 className="mainHeading gradientText">
              {activeProject ? activeProject.title : "Featured Projects"}
            </h2>

            <div
              ref={descriptionRef}
              className="projectDescription isVisible"
            >
              {activeProject && (
                <p key={activeProject.id}>{activeProject.shortDescription}</p>
              )}
              <p className="inlineCta">
                Looking for something similar?{" "}
                <button
                  type="button"
                  onClick={() => onNavigate?.("contact")}
                  className="inlineLinkBtn"
                >
                  Start a project →
                </button>
              </p>
            </div>

            <div className="carouselNav">
              <button
                onClick={handlePrev}
                className={`arrowBtn ${
                  currentIndex === 0 ? "disabled" : ""
                }`}
                aria-label="Previous Project"
                disabled={currentIndex === 0}
              >
                <RiArrowLeftLine />
              </button>
              <button
                onClick={handleNext}
                className={`arrowBtn ${
                  currentIndex >= maxIndex ? "disabled" : ""
                }`}
                aria-label="Next Project"
                disabled={currentIndex >= maxIndex}
              >
                <RiArrowRightLine />
              </button>
            </div>
          </div>

          <div
            className="rightPanel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="carouselContainer">
              <div className="carouselTrack" ref={trackRef}>
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
              className="dotIndicators"
              role="tablist"
              aria-label="Projects pagination"
            >
              {projectsData.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === currentIndex}
                  className={`dot ${
                    i === currentIndex ? "activeDot" : ""
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
