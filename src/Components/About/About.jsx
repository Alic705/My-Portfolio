import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiGit,
  SiGithub,
  SiLinkedin,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiShopify,
} from "react-icons/si";
import {
  RiCameraLensLine,
  RiGamepadLine,
  RiBookReadLine,
  RiBox3Line,
  RiServerLine,
  RiFlightTakeoffLine,
  RiRocketLine,
} from "react-icons/ri";

/* ===========================
   SEO-friendly toolkit labels
   =========================== */
const categorizedToolkit = {
  frontend: [
    { name: "React.js", Icon: SiReact, className: styles.reactIcon },
    { name: "Angular", Icon: SiAngular, className: styles.angularIcon },
    { name: "Redux.js", Icon: SiRedux, className: styles.reactIcon },
    { name: "TypeScript", Icon: SiTypescript, className: styles.tsIcon },
    { name: "JavaScript", Icon: SiJavascript, className: styles.jsIcon },
    { name: "Tailwind CSS", Icon: SiTailwindcss, className: styles.cssIcon },
    { name: "HTML5 & CSS3", Icon: SiHtml5, className: styles.htmlIcon },
    { name: "Node.js Basics", Icon: SiNodedotjs, className: styles.jsIcon },
    { name: "Shopify Frontend", Icon: SiShopify, className: styles.gitIcon },
    { name: "Git & GitHub", Icon: SiGithub, className: styles.githubIcon },
  ],
};

/* ===========================================
   Journey starts at 2023 (React & Angular)
   =========================================== */
const journeyMilestones = [
  {
    year: "2023",
    event: "React & Angular foundations — first production SPAs & responsive UI.",
    level: 35,
    Icon: SiReact,
  },
  {
    year: "2024",
    event: "TypeScript architecture, Next.js, state management & CI/CD workflows.",
    level: 60,
    Icon: SiTypescript,
  },
  {
    year: "2025",
    event: "High-performance web platforms, PropTech & custom e-commerce solutions.",
    level: 82,
    Icon: SiAngular,
  },
  {
    year: "2026",
    event: "Senior Front-End Architect — design systems, technical SEO & sub-second speed.",
    level: 98,
    Icon: RiRocketLine,
  },
];

/* ========= Sub-Components ========= */

const Toolkit = () => (
  <div className={`${styles.aboutCard} ${styles.toolkitCard}`} data-tilt>
    <div className={styles.cardContent}>
      <div className={styles.cardHeader}>
        <h4 className={styles.alignCenter}>My Toolkit</h4>
        <p className={styles.alignCenter}>
          Modern stack for scalable, reliable React &amp; Angular apps.
        </p>
      </div>

      <div className={styles.toolkitGrid}>
        {Object.entries(categorizedToolkit).map(([category, techs]) => (
          <div key={category} className={styles.toolkitCategory}>
            <div className={styles.toolkitCategoryTitle}>
              {category === "frontend"
                ? "Frameworks & Front-End Dev Tools"
                : category}
            </div>

            <div className={styles.toolkitIconGrid}>
              {techs.map((tech) => (
                <div
                  key={tech.name}
                  className={styles.toolkitItem}
                  role="img"
                  aria-label={tech.name}
                  tabIndex={0}
                >
                  <div className={`${styles.iconWrapper} ${tech.className}`}>
                    <tech.Icon aria-hidden="true" />
                  </div>
                  <span className={styles.toolkitTooltip}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const HobbiesCard = () => (
  <div className={`${styles.aboutCard} ${styles.hobbiesCard}`} data-tilt>
    <div className={styles.cardContent}>
      <div className={styles.cardHeader}>
        <h4>Beyond the Code</h4>
        <p className={styles.centerNote}>
          A few things I enjoy when I’m not coding: reading, traveling, music,
          coffee, and time with friends.
        </p>
      </div>

      <div className={styles.hobbiesGrid} role="list">
        <div className={styles.hobbyItem} role="listitem" tabIndex={0}>
          <div className={styles.hobbyPolaroid}>
            <div className={styles.hobbyIconWrapper} aria-hidden="true">
              <RiBox3Line />
            </div>
            <div className={styles.hobbyLabel}>Coding</div>
          </div>
        </div>
        <div className={styles.hobbyItem} role="listitem" tabIndex={0}>
          <div className={styles.hobbyPolaroid}>
            <div className={styles.hobbyIconWrapper} aria-hidden="true">
              <RiCameraLensLine />
            </div>
            <div className={styles.hobbyLabel}>Photography</div>
          </div>
        </div>
        <div className={styles.hobbyItem} role="listitem" tabIndex={0}>
          <div className={styles.hobbyPolaroid}>
            <div className={styles.hobbyIconWrapper} aria-hidden="true">
              <RiGamepadLine />
            </div>
            <div className={styles.hobbyLabel}>Gaming</div>
          </div>
        </div>
        <div className={styles.hobbyItem} role="listitem" tabIndex={0}>
          <div className={styles.hobbyPolaroid}>
            <div className={styles.hobbyIconWrapper} aria-hidden="true">
              <RiBookReadLine />
            </div>
            <div className={styles.hobbyLabel}>Reading</div>
          </div>
        </div>
        <div className={styles.hobbyItem} role="listitem" tabIndex={0}>
          <div className={styles.hobbyPolaroid}>
            <div className={styles.hobbyIconWrapper} aria-hidden="true">
              <RiFlightTakeoffLine />
            </div>
            <div className={styles.hobbyLabel}>Traveling</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ========= Main About Component ========= */

const About = () => {
  const gridRef = useRef(null);
  const [experience, setExperience] = useState("");

  useEffect(() => {
    // Years of experience (from 2021, to 1dp)
    const startDate = new Date("2023-03-01");
    const years = ((Date.now() - startDate.getTime()) / 31557600000).toFixed(1);
    setExperience(`${years}+`);
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;

    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const cards = Array.from(
      gridRef.current.querySelectorAll(`.${styles.aboutCard}`),
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add(styles.isVisible), i * 120);
          });
          io.disconnect();
        });
      },
      { threshold: 0.15 },
    );
    io.observe(gridRef.current);

    if (!prefersReduced) {
      const handleMove = (e) => {
        const target = e.target?.closest?.(`[data-tilt].${styles.aboutCard}`);
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rx = (y / rect.height - 0.5) * -6;
        const ry = (x / rect.width - 0.5) * 6;
        target.style.setProperty("--rx", `${rx}deg`);
        target.style.setProperty("--ry", `${ry}deg`);
        target.classList.add(styles.tiltActive);
      };
      const handleLeave = (e) => {
        const target = e.target?.closest?.(`[data-tilt].${styles.aboutCard}`);
        if (!target) return;
        target.style.setProperty("--rx", "0deg");
        target.style.setProperty("--ry", "0deg");
        target.classList.remove(styles.tiltActive);
      };
      const root = gridRef.current;
      root.addEventListener("mousemove", handleMove);
      root.addEventListener("mouseleave", handleLeave);
      return () => {
        root.removeEventListener("mousemove", handleMove);
        root.removeEventListener("mouseleave", handleLeave);
      };
    }
  }, []);

  // --------- JSON-LD (Person + AboutPage + Breadcrumbs) ---------
  const canonicalUrl = "https://alich.dev/about";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ali Ch",
    jobTitle: "Frontend Engineer",
    url: canonicalUrl,
    sameAs: [
      "https://www.linkedin.com/in/alichdev",
    ],
    homeLocation: { "@type": "Place", name: "Lahore, Punjab, Pakistan" },
    knowsAbout: [
      "React.js",
      "Angular",
      "Redux.js",
      "REST APIs",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Shopify Frontend",
      "Web Performance",
      "Core Web Vitals",
      "Technical SEO",
    ],
  };
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Ali Ch – Frontend Engineer | React & Angular Specialist",
    url: canonicalUrl,
    mainEntity: { "@type": "Person", name: "Ali Ch", url: canonicalUrl },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://alich.dev/",
      },
      { "@type": "ListItem", position: 2, name: "About", item: canonicalUrl },
    ],
  };

  return (
    <section
      id="about"
      className={styles.aboutSection}
      aria-labelledby="about-title"
    >
      {/* SEO head for About page */}
      <title>
        About Ali Ch | Frontend Engineer | React &amp; Angular Specialist
      </title>
      <meta
        name="description"
        content="Frontend Engineer specializing in React.js, Angular, Redux &amp; REST APIs. 3.5+ years building production SPAs, design systems, and high-performance web applications."
      />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonicalUrl} />
      {/* OpenGraph */}
      <meta
        property="og:title"
        content="About Ali Ch | Frontend Engineer (React &amp; Angular)"
      />
      <meta
        property="og:description"
        content="Frontend Engineer specializing in React.js, Angular, Redux, and REST APIs. Building responsive, scalable, and high-performance web applications."
      />
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={canonicalUrl} />
      <meta
        property="og:image"
        content="https://alich.dev/og-about.jpg"
      />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="About Ali Ch – Frontend Engineer"
      />
      <meta
        name="twitter:description"
        content="React &amp; Angular specialist with Core Web Vitals wins, clean UI architecture, and REST API integration."
      />
      <meta
        name="twitter:image"
        content="https://alich.dev/og-about.jpg"
      />
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="sectionHeader">
        <h1
          className="gradientText
        sectionTitle"
          id="about-title"
        >
          About Ali Ch
        </h1>
        <p className="sectionDek ">
          I am a <strong>Frontend Engineer</strong> specializing in <strong>React.js</strong>, <strong>Angular</strong>, <strong>Redux</strong>, and <strong>REST APIs</strong>, backed by a strong foundation in <strong>Computer Science</strong>. With 3.5+ years of production experience, I engineer high-performance, responsive web applications with clean, reusable component architectures, <strong>Core Web Vitals</strong> optimization, and measurable search visibility.
        </p>

        {/* Internal links to concentrate topical authority */}
        <p className={styles.linksRow}>
          <a
            href="/services"
            className={`${styles.inlineLink} ${styles.impactHighlight}`}
          >
            See my React &amp; Angular services
          </a>{" "}
          ·{" "}
          <a
            href="/case-studies"
            className={`${styles.inlineLink} ${styles.textUnderline}`}
          >
            Read performance &amp; SEO case studies
          </a>{" "}
          ·{" "}
          <a
            href="/contact"
            className={`${styles.inlineLink} ${styles.impactHighlight}`}
          >
            Hire me
          </a>
        </p>
      </div>

      <div className={styles.aboutGrid} ref={gridRef}>
        {/* Journey */}
        <div
          className={`${styles.aboutCard} ${styles.cardMainStory}`}
          data-tilt
        >
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <h4 className={styles.alignLeft}>My Journey in Tech</h4>
              <p className={`${styles.journeySubtitle} ${styles.alignLeft}`}>
                From front-end frameworks to scalable full-stack solutions
              </p>
            </div>

            <div className={styles.journeyContainer}>
              <div className={styles.yAxisLabel}>Complexity &amp; Scale</div>

              <div className={styles.journeyGraph} role="list">
                {journeyMilestones.map((item, idx) => {
                  const tipId = `milestone-tip-${item.year}`;
                  const Icon = item.Icon;
                  return (
                    <div
                      key={item.year}
                      className={styles.graphBarWrapper}
                      role="listitem"
                    >
                      <button
                        className={styles.graphBar}
                        style={{
                          "--height": `${item.level}%`,
                          "--d": `${0.12 + idx * 0.08}s`,
                        }}
                        aria-describedby={tipId}
                        aria-label={`${item.year}: ${item.event}`}
                      >
                        <span className={styles.graphIcon} aria-hidden="true">
                          <Icon />
                        </span>
                        <span className={styles.graphTooltip} id={tipId}>
                          {item.event}
                        </span>
                      </button>
                      <div className={styles.graphLabel}>{item.year}</div>
                    </div>
                  );
                })}
              </div>

              {/* <p className={styles.journeyCaption}>
                Highlights: LCP &lt; 1.5s, CLS &lt; 0.05, structured data for
                richer search results, and measurable conversion lifts after
                performance &amp; UX fixes.
              </p> */}
            </div>
          </div>
        </div>

        {/* At a Glance */}
        <div
          className={`${styles.aboutCard} ${styles.atAGlanceCard}`}
          data-tilt
        >
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <h4 className={styles.alignLeft}>At a Glance</h4>
            </div>

            <div className={styles.glanceGrid} role="list">
              <div className={styles.glanceItem} role="listitem">
                <div className={styles.glanceIcon} aria-hidden="true">
                  <i className="ph-bold ph-briefcase" />
                </div>
                <div className={styles.experencenum}>{experience}</div>
                <div className={styles.glanceLabel}>Years Experience</div>
              </div>

              <div className={styles.glanceItem} role="listitem">
                <div className={styles.glanceIcon} aria-hidden="true">
                  <i className="ph-bold ph-map-pin" />
                </div>
                <div className={styles.glanceValue}>Lahore, Pakistan</div>
                <div className={styles.glanceLabel}>(Remote globally)</div>
              </div>
            </div>

            {/* <a
              href="/resume.pdf"
              className={`${styles.btn} ${styles.btnGhost} ${styles.resumeCta} `}
              download
              aria-label="Download Ali Ch – React & Angular résumé (PDF)"
            >
              <span>Download Ali Ch – React &amp; Angular Résumé (PDF)</span>
            </a> */}
          </div>
        </div>

        {/* Availability */}
        <div className={`${styles.aboutCard} ${styles.cardConnect}`} data-tilt>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <h4 className={styles.alignCenter}>Open for Opportunities</h4>
              <p className={styles.alignCenter}>
                I partner with product teams to ship high-performance,
                accessible, and SEO-ready front-ends. Typical start: discovery
                call → audit or sprint plan.
              </p>
            </div>

            <div className={styles.availabilityStatus} aria-live="polite">
              <div className={styles.statusDot} aria-hidden="true" />
              <span className={styles.statusText}>
                Available for new projects
              </span>
            </div>

            <a
              href="mailto:alich70566@example.com"
              className={`${styles.btn} ${styles.connectBtn}`}
              aria-label="Email Ali to start a project"
            >
              Say Hello
            </a>
          </div>
        </div>

        <Toolkit />
        <HobbiesCard />
      </div>
    </section>
  );
};

export default About;
