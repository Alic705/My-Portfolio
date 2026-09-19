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
        <div className="emptyState">
          <h2>Project Not Found</h2>
          <p>The project you're looking for doesn't exist or has moved.</p>
          <button
            className="backButton"
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
      <article className="detailWrapper" aria-labelledby="case-study-title">
      {/* TOP NAVIGATION / ACTION BAR */}
      <nav className="topBar" aria-label="Project Navigation">
        <button
          className="backButton"
          onClick={() => onNavigate?.("projects")}
          aria-label="Back to all projects"
        >
          <span className="backArrow">
            <RiArrowLeftLine />
          </span>
          <span>Back to Projects</span>
        </button>

        <div className="topActions">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btnPrimary"
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
              className="btnGhost"
            >
              <span>Source Code</span>
              <RiGithubLine />
            </a>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="heroSection">
        {category && <span className="categoryKicker">{category}</span>}
        <h1 id="case-study-title" className="projectTitle">
          {title}
        </h1>
        <p className="tagline">{heroTagline || shortDescription}</p>

        {/* METADATA BAR */}
        <div className="metaBar">
          {role && (
            <div className="metaItem">
              <span className="metaLabel">
                <RiUserLine className="metaIcon" /> Role
              </span>
              <span className="metaVal">{role}</span>
            </div>
          )}
          {timeline && (
            <div className="metaItem">
              <span className="metaLabel">
                <RiCalendarEventLine className="metaIcon" /> Timeline
              </span>
              <span className="metaVal">{timeline}</span>
            </div>
          )}
          <div className="metaItem metaTechItem">
            <span className="metaLabel">
              <RiToolsLine className="metaIcon" /> Core Technologies
            </span>
            <div className="techPills">
              {techStack.map((tech) => (
                <span key={tech} className="techPill">
                  <TechIcon name={tech} />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* HERO SHOWCASE IMAGE */}
      <div className="showcaseFrame">
        <img
          src={coverImage}
          alt={`${title} project preview`}
          className="showcaseImage"
          loading="eager"
        />
      </div>

      {/* CORE NARRATIVE: CHALLENGE & SOLUTION */}
      <section className="narrativeGrid">
        <div className="storyCard">
          <div className="cardHeader">
            <span className="sectionBadge">01 / CONTEXT</span>
            <h2 className="sectionHeading">The Challenge</h2>
          </div>
          <p className="cardParagraph">{challenge}</p>
        </div>

        <div className="storyCard">
          <div className="cardHeader">
            <span className="sectionBadge">02 / EXECUTION</span>
            <h2 className="sectionHeading">The Solution</h2>
          </div>
          <p className="cardParagraph">{solution}</p>
        </div>
      </section>

      {/* MEASURABLE RESULTS / IMPACT COUNTERS */}
      {results.length > 0 && (
        <section className="impactSection">
          <div className="sectionTitleBlock">
            <span className="sectionBadge">03 / OUTCOMES</span>
            <h2 className="sectionHeading">Measurable Impact</h2>
          </div>
          <div className="statsGrid">
            {results.map((r, i) => (
              <div key={i} className="statCard">
                <div className="statNumber">{r.value}</div>
                <div className="statLabel">{r.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ENGINEERING APPROACH & PROCESS */}
      {processSteps.length > 0 && (
        <section className="processSection">
          <div className="sectionTitleBlock">
            <span className="sectionBadge">04 / METHODOLOGY</span>
            <h2 className="sectionHeading">Engineering Approach</h2>
          </div>
          <div className="processGrid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="processStepCard">
                <div className="stepIndex">0{idx + 1}</div>
                <h3 className="stepTitle">{step.title}</h3>
                <p className="stepDesc">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* KEY FEATURES */}
      {features.length > 0 && (
        <section className="featuresSection">
          <div className="sectionTitleBlock">
            <span className="sectionBadge">05 / ARCHITECTURE</span>
            <h2 className="sectionHeading">Key Capabilities</h2>
          </div>
          <div className="featuresGrid">
            {features.map((feat, idx) => (
              <div key={idx} className="featureCard">
                <div className="featureIconBubble">
                  {renderFeatureIcon(feat.icon)}
                </div>
                <h3 className="featureTitle">{feat.title}</h3>
                <p className="featureDesc">{feat.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* INTERFACE SHOWCASE GALLERY */}
      {media?.images?.length > 0 && (
        <section className="gallerySection">
          <div className="sectionTitleBlock">
            <span className="sectionBadge">06 / INTERFACE SHOWCASE</span>
            <h2 className="sectionHeading">Visual Previews</h2>
          </div>

          <div className="galleryContainer">
            <div className="galleryMain">
              <img
                src={media.images[galleryIndex]}
                alt={`${title} interface preview ${galleryIndex + 1}`}
                className="galleryImage"
                loading="lazy"
              />
            </div>
            {media.images.length > 1 && (
              <div className="galleryThumbnails">
                {media.images.map((img, i) => (
                  <button
                    key={i}
                    className={`thumbBtn ${i === galleryIndex ? "activeThumb" : ""
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
        <section className="testimonialSection">
          <div className="testimonialCard">
            <div className="quoteMark">“</div>
            <p className="quoteText">{testimonial.quote}</p>
            <div className="testimonialAuthor">
              {testimonial.avatar && (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="authorAvatar"
                />
              )}
              <div>
                <div className="authorName">{testimonial.author}</div>
                {testimonial.role && (
                  <div className="authorRole">{testimonial.role}</div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FUTURE ROADMAP */}
      {futureWork?.length > 0 && (
        <section className="futureSection">
          <h3 className="futureTitle">Roadmap & Future Extensions</h3>
          <ul className="futureList">
            {futureWork.map((item, idx) => (
              <li key={idx} className="futureItem">
                <RiCheckDoubleLine className="checkIcon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* BOTTOM PAGER & CTA */}
      <footer className="detailFooter">

        <div className="contactCtaBanner">
          <div className="ctaText">
            <h3>Have an ambitious idea in mind?</h3>
            <p>Let's collaborate to build high-performance, human-centered digital products.</p>
          </div>
          <button
            className="btnPrimary"
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
