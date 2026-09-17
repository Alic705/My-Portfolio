import React, { useState, useEffect } from "react";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiExternalLinkLine,
  RiGithubLine,
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
  RiSparklingLine,
  RiCheckDoubleLine,
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
import { projectsData, getProjectById, getAdjacentProjects } from "./ProjectData";
import styles from "./ProjectDetail.module.css";

const TechIcon = ({ name }) => {
  const iconMap = {
    React: <SiReact className={styles.techIcon} />,
    "Next.js": <SiNextdotjs className={styles.techIcon} />,
    Angular: <SiAngular className={styles.techIcon} />,
    "Node.js": <SiNodedotjs className={styles.techIcon} />,
    TypeScript: <SiTypescript className={styles.techIcon} />,
    Python: <SiPython className={styles.techIcon} />,
    Docker: <SiDocker className={styles.techIcon} />,
    Flutter: <SiFlutter className={styles.techIcon} />,
    Redux: <SiRedux className={styles.techIcon} />,
    "Redux Toolkit": <SiRedux className={styles.techIcon} />,
    Stripe: <SiStripe className={styles.techIcon} />,
    "Stripe API": <SiStripe className={styles.techIcon} />,
    "AI APIs": <SiOpenai className={styles.techIcon} />,
    "AI Integration": <SiOpenai className={styles.techIcon} />,
    Figma: <SiFigma className={styles.techIcon} />,
    SEO: <RiLineChartLine className={styles.techIcon} />,
    TailwindCSS: <SiTailwindcss className={styles.techIcon} />,
    WordPress: <SiWordpress className={styles.techIcon} />,
    WooCommerce: <SiWoocommerce className={styles.techIcon} />,
  };
  return iconMap[name] || <RiToolsLine className={styles.techIcon} />;
};

function renderFeatureIcon(iconKey) {
  switch (iconKey) {
    case "lightbulb":
      return <RiLightbulbFlashLine />;
    case "robot":
      return <RiRobot2Line />;
    case "rocket":
      return <RiRocketLine />;
    case "leaf":
      return <RiLeafLine />;
    case "hands":
      return <RiShakeHandsLine />;
    case "ship":
      return <RiShipLine />;
    case "chart":
      return <RiLineChartLine />;
    case "shield":
      return <RiShieldCheckLine />;
    case "report":
      return <RiBarChartBoxLine />;
    case "cart":
      return <RiShoppingCartLine />;
    case "filter":
      return <RiFilter3Line />;
    case "lock":
      return <RiLockPasswordLine />;
    default:
      return <RiSparklingLine />;
  }
}

export default function ProjectDetail({ projectId, onNavigate }) {
  const project = getProjectById(projectId) || projectsData[0];
  const { prev, next } = getAdjacentProjects(project?.id);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    setGalleryIndex(0);
    // Scroll container to top when switching projects
    const mainPanel = document.getElementById("main-panel");
    const content = mainPanel?.querySelector(".hide-scrollbar");
    if (content) {
      content.scrollTop = 0;
    }
  }, [projectId]);

  if (!project) {
    return (
      <div className="custom-scale-wrapper">
        <div className={styles.emptyState}>
          <h2>Project Not Found</h2>
          <p>The project you're looking for doesn't exist or has moved.</p>
          <button
            className={styles.backButton}
            onClick={() => onNavigate?.("projects")}
          >
            <RiArrowLeftLine /> Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const {
    id,
    title,
    category,
    heroTagline,
    shortDescription,
    coverImage,
    role,
    timeline,
    tools = [],
    techStack = [],
    challenge,
    solution,
    processSteps = [],
    features = [],
    results = [],
    testimonial,
    media,
    liveUrl,
    codeUrl,
    futureWork = [],
  } = project;

  return (
    <div className="custom-scale-wrapper">
      <article className={styles.detailWrapper} aria-labelledby="case-study-title">
      {/* TOP NAVIGATION / ACTION BAR */}
      <nav className={styles.topBar} aria-label="Project Navigation">
        <button
          className={styles.backButton}
          onClick={() => onNavigate?.("projects")}
          aria-label="Back to all projects"
        >
          <span className={styles.backArrow}>
            <RiArrowLeftLine />
          </span>
          <span>Back to Projects</span>
        </button>

        <div className={styles.topActions}>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <span>Live Site</span>
              <RiExternalLinkLine />
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGhost}
            >
              <span>Source Code</span>
              <RiGithubLine />
            </a>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className={styles.heroSection}>
        {category && <span className={styles.categoryKicker}>{category}</span>}
        <h1 id="case-study-title" className={styles.projectTitle}>
          {title}
        </h1>
        <p className={styles.tagline}>{heroTagline || shortDescription}</p>

        {/* METADATA BAR */}
        <div className={styles.metaBar}>
          {role && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>
                <RiUserLine className={styles.metaIcon} /> Role
              </span>
              <span className={styles.metaVal}>{role}</span>
            </div>
          )}
          {timeline && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>
                <RiCalendarEventLine className={styles.metaIcon} /> Timeline
              </span>
              <span className={styles.metaVal}>{timeline}</span>
            </div>
          )}
          <div className={`${styles.metaItem} ${styles.metaTechItem}`}>
            <span className={styles.metaLabel}>
              <RiToolsLine className={styles.metaIcon} /> Core Technologies
            </span>
            <div className={styles.techPills}>
              {techStack.map((tech) => (
                <span key={tech} className={styles.techPill}>
                  <TechIcon name={tech} />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* HERO SHOWCASE IMAGE */}
      <div className={styles.showcaseFrame}>
        <img
          src={coverImage}
          alt={`${title} project preview`}
          className={styles.showcaseImage}
          loading="eager"
        />
      </div>

      {/* CORE NARRATIVE: CHALLENGE & SOLUTION */}
      <section className={styles.narrativeGrid}>
        <div className={styles.storyCard}>
          <div className={styles.cardHeader}>
            <span className={styles.sectionBadge}>01 / CONTEXT</span>
            <h2 className={styles.sectionHeading}>The Challenge</h2>
          </div>
          <p className={styles.cardParagraph}>{challenge}</p>
        </div>

        <div className={styles.storyCard}>
          <div className={styles.cardHeader}>
            <span className={styles.sectionBadge}>02 / EXECUTION</span>
            <h2 className={styles.sectionHeading}>The Solution</h2>
          </div>
          <p className={styles.cardParagraph}>{solution}</p>
        </div>
      </section>

      {/* MEASURABLE RESULTS / IMPACT COUNTERS */}
      {results.length > 0 && (
        <section className={styles.impactSection}>
          <div className={styles.sectionTitleBlock}>
            <span className={styles.sectionBadge}>03 / OUTCOMES</span>
            <h2 className={styles.sectionHeading}>Measurable Impact</h2>
          </div>
          <div className={styles.statsGrid}>
            {results.map((r, i) => (
              <div key={i} className={styles.statCard}>
                <div className={styles.statNumber}>{r.value}</div>
                <div className={styles.statLabel}>{r.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ENGINEERING APPROACH & PROCESS */}
      {processSteps.length > 0 && (
        <section className={styles.processSection}>
          <div className={styles.sectionTitleBlock}>
            <span className={styles.sectionBadge}>04 / METHODOLOGY</span>
            <h2 className={styles.sectionHeading}>Engineering Approach</h2>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((step, idx) => (
              <div key={idx} className={styles.processStepCard}>
                <div className={styles.stepIndex}>0{idx + 1}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* KEY FEATURES */}
      {features.length > 0 && (
        <section className={styles.featuresSection}>
          <div className={styles.sectionTitleBlock}>
            <span className={styles.sectionBadge}>05 / ARCHITECTURE</span>
            <h2 className={styles.sectionHeading}>Key Capabilities</h2>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feat, idx) => (
              <div key={idx} className={styles.featureCard}>
                <div className={styles.featureIconBubble}>
                  {renderFeatureIcon(feat.icon)}
                </div>
                <h3 className={styles.featureTitle}>{feat.title}</h3>
                <p className={styles.featureDesc}>{feat.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* INTERFACE SHOWCASE GALLERY */}
      {media?.images?.length > 0 && (
        <section className={styles.gallerySection}>
          <div className={styles.sectionTitleBlock}>
            <span className={styles.sectionBadge}>06 / INTERFACE SHOWCASE</span>
            <h2 className={styles.sectionHeading}>Visual Previews</h2>
          </div>

          <div className={styles.galleryContainer}>
            <div className={styles.galleryMain}>
              <img
                src={media.images[galleryIndex]}
                alt={`${title} interface preview ${galleryIndex + 1}`}
                className={styles.galleryImage}
                loading="lazy"
              />
            </div>
            {media.images.length > 1 && (
              <div className={styles.galleryThumbnails}>
                {media.images.map((img, i) => (
                  <button
                    key={i}
                    className={`${styles.thumbBtn} ${i === galleryIndex ? styles.activeThumb : ""
                      }`}
                    onClick={() => setGalleryIndex(i)}
                    aria-label={`Show preview image ${i + 1}`}
                  >
                    <img src={img} alt={`Thumbnail ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CLIENT TESTIMONIAL (IF AVAILABLE) */}
      {testimonial?.quote && (
        <section className={styles.testimonialSection}>
          <div className={styles.testimonialCard}>
            <div className={styles.quoteMark}>“</div>
            <p className={styles.quoteText}>{testimonial.quote}</p>
            <div className={styles.testimonialAuthor}>
              {testimonial.avatar && (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className={styles.authorAvatar}
                />
              )}
              <div>
                <div className={styles.authorName}>{testimonial.author}</div>
                {testimonial.role && (
                  <div className={styles.authorRole}>{testimonial.role}</div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FUTURE ROADMAP */}
      {futureWork?.length > 0 && (
        <section className={styles.futureSection}>
          <h3 className={styles.futureTitle}>Roadmap & Future Extensions</h3>
          <ul className={styles.futureList}>
            {futureWork.map((item, idx) => (
              <li key={idx} className={styles.futureItem}>
                <RiCheckDoubleLine className={styles.checkIcon} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* BOTTOM PAGER & CTA */}
      <footer className={styles.detailFooter}>

        <div className={styles.contactCtaBanner}>
          <div className={styles.ctaText}>
            <h3>Have an ambitious idea in mind?</h3>
            <p>Let's collaborate to build high-performance, human-centered digital products.</p>
          </div>
          <button
            className={styles.btnPrimary}
            onClick={() => onNavigate?.("contact")}
          >
            Start a Conversation →
          </button>
        </div>
      </footer>
    </article>
  </div>
  );
}
