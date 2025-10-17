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
} from "react-icons/si";
import {
  TbCamera,
  TbDeviceGamepad2,
  TbBook2,
  TbCube,
  TbBrandJavascript,
  TbBrandReact,
  TbShoppingBag,
  TbServerBolt,
} from "react-icons/tb";

/* ===========================
   SEO-friendly toolkit labels
   =========================== */
const categorizedToolkit = {
  frontend: [
    { name: "HTML5", Icon: SiHtml5, className: styles.htmlIcon },
    { name: "CSS3", Icon: SiCss3, className: styles.cssIcon },
    {
      name: "JavaScript (ESNext)",
      Icon: SiJavascript,
      className: styles.jsIcon,
    },
    {
      name: "TypeScript (strict)",
      Icon: SiTypescript,
      className: styles.tsIcon,
    },
    { name: "React", Icon: SiReact, className: styles.reactIcon },
    { name: "Angular", Icon: SiAngular, className: styles.angularIcon },
    { name: "Git", Icon: SiGit, className: styles.gitIcon },
    { name: "GitHub", Icon: SiGithub, className: styles.githubIcon },
  ],
};

/* ===========================================
   Journey now starts at 2021 (React & Angular)
   =========================================== */
const journeyMilestones = [
  {
    year: "2023",
    event: "React & Angular foundations — first production SPAs.",
    level: 40,
    Icon: TbBrandReact,
  },
  // {
  //   year: "2022",
  //   event: "Led large e-commerce build (Angular) + Next.js (React SSR).",
  //   level: 65,
  //   Icon: TbShoppingBag,
  // },
  {
    year: "2024",
    event: "Enterprise dashboards with TypeScript, state mgmt, CI/CD.",
    level: 80,
    Icon: TbBrandJavascript,
  },
  {
    year: "2025",
    event: "Perf & SEO audits — Core Web Vitals, structured data, WCAG 2.2.",
    level: 90,
    Icon: TbServerBolt,
  },
  // {
  //   year: "2025",
  //   event: "Full-stack exploration — Node.js, Angular Universal & Next.js.",
  //   level: 95,
  //   Icon: TbCube,
  // },
];

/* ========= Sub-Components ========= */

// ...existing code...
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

// ...existing code...
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
              <TbCube />
            </div>
            <div className={styles.hobbyLabel}>Coding</div>
          </div>
        </div>
        <div className={styles.hobbyItem} role="listitem" tabIndex={0}>
          <div className={styles.hobbyPolaroid}>
            <div className={styles.hobbyIconWrapper} aria-hidden="true">
              <TbCamera />
            </div>
            <div className={styles.hobbyLabel}>Photography</div>
          </div>
        </div>
        <div className={styles.hobbyItem} role="listitem" tabIndex={0}>
          <div className={styles.hobbyPolaroid}>
            <div className={styles.hobbyIconWrapper} aria-hidden="true">
              <TbDeviceGamepad2 />
            </div>
            <div className={styles.hobbyLabel}>Gaming</div>
          </div>
        </div>
        <div className={styles.hobbyItem} role="listitem" tabIndex={0}>
          <div className={styles.hobbyPolaroid}>
            <div className={styles.hobbyIconWrapper} aria-hidden="true">
              <TbBook2 />
            </div>
            <div className={styles.hobbyLabel}>Reading</div>
          </div>
        </div>
        <div className={styles.hobbyItem} role="listitem" tabIndex={0}>
          <div className={styles.hobbyPolaroid}>
            <div className={styles.hobbyIconWrapper} aria-hidden="true">
              {/* </TbShoppingBag> */}
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
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const cards = Array.from(
      gridRef.current.querySelectorAll(`.${styles.aboutCard}`)
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
      { threshold: 0.15 }
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
  const canonicalUrl = "https://your-domain.com/about";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ali Ch",
    jobTitle: "Senior Front-End Engineer (React & Angular)",
    url: canonicalUrl,
    sameAs: [
      "https://github.com/your-handle",
      "https://www.linkedin.com/in/your-handle",
    ],
    homeLocation: { "@type": "Place", name: "Chiniot, Pakistan" },
    knowsAbout: [
      "React",
      "Angular",
      "TypeScript",
      "Web Performance",
      "Core Web Vitals",
      "Accessibility (WCAG 2.2)",
      "Technical SEO",
      "SSR",
      "SSG",
      "Design Systems",
    ],
  };
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Ali Ch – Senior React & Angular Front-End Engineer",
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
        item: "https://your-domain.com/",
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
        About Ali Ch – Senior React &amp; Angular Front-End Engineer
      </title>
      <meta
        name="description"
        content="Senior front-end engineer specializing in React & Angular since 2021. I build fast, accessible, SEO-ready apps—Core Web Vitals wins, WCAG 2.2, SSR/SSG, and maintainable architecture. Based in Chiniot, Pakistan—working worldwide."
      />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonicalUrl} />
      {/* OpenGraph */}
      <meta
        property="og:title"
        content="About Ali Ch– Senior React & Angular Front-End Engineer"
      />
      <meta
        property="og:description"
        content="React & Angular specialist focused on performance, accessibility, and technical SEO. See journey, toolkit, and availability."
      />
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={canonicalUrl} />
      <meta
        property="og:image"
        content="https://your-domain.com/og-about.jpg"
      />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="About Ali Ch– Senior React & Angular Engineer"
      />
      <meta
        name="twitter:description"
        content="React & Angular specialist with Core Web Vitals wins, WCAG 2.2, SSR/SSG."
      />
      <meta
        name="twitter:image"
        content="https://your-domain.com/og-about.jpg"
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
          About Me
        </h1>
        <p className="sectionDek ">
          I’m a front-end engineer focused on <strong>React</strong> and{" "}
          <strong>Angular</strong>. I build scalable,{" "}
          <strong>high-performance</strong> web applications that meet{" "}
          <strong>Core Web Vitals</strong>, pass <strong>WCAG&nbsp;2.2</strong>{" "}
          audits, and ship with <strong>technical SEO</strong> best practices
          (SSR/SSG, structured data). My goal: clean UX that <em>ranks</em>,{" "}
          <em>converts</em>, and <em>scales</em>.
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
                <div className={styles.glanceValue}>Chiniot, Pakistan</div>
                <div className={styles.glanceLabel}>(Remote globally)</div>
              </div>
            </div>

            <a
              href="/resume.pdf"
              className={`${styles.btn} ${styles.btnGhost} ${styles.resumeCta} `}
              download
              aria-label="Download Ali Ch– React & Angular résumé (PDF)"
            >
              <span>Download Ali Ch– React &amp; Angular Résumé (PDF)</span>
            </a>
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
