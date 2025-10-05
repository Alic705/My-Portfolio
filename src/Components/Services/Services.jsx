import React, { useState, useRef, useEffect } from "react";
import styles from "./Services.module.css";

import {
  FaChevronLeft,
  FaChevronRight,
  FaReact,
  FaAngular,
  FaFigma,
  FaVial,
  FaList,
  FaCheck,
  FaNodeJs,
} from "react-icons/fa";

/* ===========================
   SEO-OPTIMIZED SERVICES DATA
   =========================== */
const services = [
  {
    id: 1,
    slug: "/services/react-development",
    title: "React Development",
    description:
      "Build lightning-fast React apps with TypeScript, SSR/SSG for SEO, and a component-driven design system. I tune Core Web Vitals so interfaces feel instant and conversion-ready.",
    Icon: FaReact,
    details: [
      "Architecture & state management (Redux Toolkit, Zustand, Context + hooks)",
      "Routing & data fetching (React Router / Next.js App Router)",
      "SSR/SSG or safe prerendering, image/CDN strategy",
      "Design systems (Storybook, Radix, Tailwind) with a11y patterns",
      "Performance budgets: code-split, bundle analysis, INP/LCP tuning",
      "Testing: Jest + RTL, Playwright/Cypress for critical flows",
      "Analytics & monitoring (GA4, Sentry) wired for insights",
    ],
    outcomes: [
      "LCP < 1.5s, INP < 200ms, CLS < 0.05 on key pages",
      "Accessible UI (WCAG 2.2 AA) and improved crawlability",
      "SEO-ready deploy with structured data & clean routing",
    ],
    learnMoreUrl: "/case-studies?tag=react",
    projectUrl: "/case-studies?tag=react",
    accent: "#8a2be2",
    halo: "radial-gradient(60% 70% at 50% 55%, rgba(138,43,226,0.20), rgba(0,0,0,0) 70%)",
  },
  {
    id: 2,
    slug: "/services/angular-development",
    title: "Angular Development",
    description:
      "Robust, scalable Angular apps with RxJS and Angular Universal for SEO. Best for enterprise dashboards, complex forms, and data-heavy interfaces.",
    Icon: FaAngular,
    details: [
      "Standalone components, feature modules, Nx monorepos",
      "Signals/RxJS patterns, smart/presentational components",
      "Angular Universal (SSR) or prerendering for indexability",
      "Angular Material/theming; semantic HTML for a11y",
      "Zone-less/hydration strategies, defer, image optimization",
      "Unit tests (Jest/Karma) & E2E (Cypress/Playwright)",
      "CI/CD with GitHub Actions and quality gates",
    ],
    outcomes: [
      "Crawlable routes with correct meta/canonicals",
      "Faster TTI & smaller initial bundle under load",
      "Stable, maintainable architecture for long-term teams",
    ],
    learnMoreUrl: "/case-studies?tag=angular",
    projectUrl: "/case-studies?tag=angular",
    accent: "#dd0031",
    halo: "radial-gradient(60% 70% at 50% 55%, rgba(221,0,49,0.18), rgba(0,0,0,0) 70%)",
  },
  {
    id: 3,
    slug: "/services/node-backend",
    title: "Node.js Backend Development",
    description:
      "Fast, secure APIs for React & Angular fronts. Node.js with Express or NestJS, production-grade auth, caching, and observability.",
    Icon: FaNodeJs,
    details: [
      "REST/GraphQL APIs (Express or NestJS)",
      "Auth, RBAC, JWT/Session; rate limiting & input validation",
      "PostgreSQL/Prisma (primary), Mongo optional",
      "Caching & performance (Redis, CDN headers, compression)",
      "Observability: structured logs, health checks, uptime",
      "CI/CD pipelines and environment configuration",
    ],
    outcomes: [
      "Lower latency and fewer timeouts under spikes",
      "Clean API contracts that speed up front-end delivery",
      "Easier scaling and monitoring in production",
    ],
    learnMoreUrl: "/contact",
    projectUrl: "/contact",
    accent: "#3c873a",
    halo: "radial-gradient(60% 70% at 50% 55%, rgba(60,135,58,0.20), rgba(0,0,0,0) 70%)",
  },
  {
    id: 4,
    slug: "/services/ui-ux-implementation",
    title: "UI/UX Implementation",
    description:
      "Pixel-accurate builds from Figma to production. Design tokens, component libraries, and accessible interactions.",
    Icon: FaFigma,
    details: [
      "Figma → React/Angular componentization",
      "Design tokens & theming; responsive grid systems",
      "Micro-interactions/animations with accessibility in mind",
      "Forms, validation, error states, i18n",
      "Storybook docs & visual regression setup",
      "Cross-browser/device compatibility testing",
    ],
    outcomes: [
      "Consistent, documented UI at scale",
      "Faster feature delivery, fewer regressions",
      "Accessibility baked into every component",
    ],
    learnMoreUrl: "/projects?tag=design-system",
    projectUrl: "/projects?tag=design-system",
    accent: "#0ea5e9",
    halo: "radial-gradient(60% 70% at 50% 55%, rgba(14,165,233,0.18), rgba(0,0,0,0) 70%)",
  },
  {
    id: 5,
    slug: "/services/testing",
    title: "Unit & Integration Testing",
    description:
      "Automated tests for React & Angular with E2E coverage on critical paths—so shipping fast stays safe.",
    Icon: FaVial,
    details: [
      "Test strategy & coverage goals aligned to risk",
      "Unit tests (Jest/Karma), component tests (RTL/Cypress)",
      "E2E (Playwright/Cypress) with CI parallelization",
      "Mocking, fixtures, and data-seeding utilities",
      "A11y & performance checks in pipeline",
    ],
    outcomes: [
      "Fewer production bugs and safer refactors",
      "Predictable releases with green pipelines",
      "Documented acceptance criteria as living tests",
    ],
    learnMoreUrl: "/case-studies?tag=testing",
    projectUrl: "/case-studies?tag=testing",
    accent: "#22c55e",
    halo: "radial-gradient(60% 70% at 50% 55%, rgba(34,197,94,0.20), rgba(0,0,0,0) 70%)",
  },
];

const developerInfo = {
  name: "Ali Ch",
  title: "Senior Front-End Engineer — React & Angular",
  imageUrl: "https://placehold.co/100x100/4A5568/E2E8F0?text=HB",
};

/* ===========================
   COMPONENTS
   =========================== */

const ServiceCard = ({ service, offset, isFlipped, onFlip, isActive }) => {
  const getCardStyle = () => ({
    "--offset": offset,
    "--dir": Math.sign(offset || 0),
    "--accent": service.accent,
    "--halo": service.halo,
    zIndex: services.length - Math.abs(offset || 0),
  });

  const cls = [
    styles.serviceCard,
    isActive ? styles.activeCard : "",
    isActive && isFlipped ? styles.isFlipped : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.serviceCardWrapper} style={getCardStyle()}>
      {isActive && <div className={styles.cardHalo} aria-hidden="true" />}
      <div className={cls}>
        {/* Front */}
        <div className={styles.cardFaceFront}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon} aria-hidden="true">
              <service.Icon />
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
          </div>

          <p className={styles.cardDescription}>{service.description}</p>

          <div className={styles.servicecardCtas}>
            <a
              href={service.learnMoreUrl}
              className={`${styles.cardBtn} ${styles.linkBtn}`}
              aria-label={`See case studies related to ${service.title}`}
            >
              See Case Studies
            </a>

            <button
              className={`${styles.cardBtn} ${styles.detailsBtn}`}
              onClick={onFlip}
              type="button"
              disabled={!isActive}
              aria-expanded={isActive && isFlipped ? "true" : "false"}
            >
              <FaList />
              <span>What's Included?</span>
            </button>
          </div>
        </div>

        {/* Back */}
        <div className={styles.cardFaceBack} aria-live="polite">
          <button className={styles.backBtn} onClick={onFlip} aria-label="Back">
            &larr;
          </button>

          <h4 className={styles.detailsTitle}>What's Included</h4>
          <ul className={styles.detailsList}>
            {service.details.map((detail, i) => (
              <li key={detail} style={{ "--i": i }}>
                <FaCheck className={styles.checkIcon} aria-hidden="true" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          <h4 className={styles.outcomesTitle}>Expected Results</h4>
          <ul className={styles.outcomesList}>
            {service.outcomes.map((o, i) => (
              <li key={o} style={{ "--i": i }}>
                <FaCheck className={styles.checkIcon} aria-hidden="true" />
                <span>{o}</span>
              </li>
            ))}
          </ul>

          <a
            href={service.projectUrl}
            className={`${styles.cardBtn} ${styles.linkBtn}`}
            aria-label={`View ${service.title} work`}
          >
            View Related Work
          </a>
        </div>
      </div>
    </div>
  );
};

const ServiceSelector = ({ services, currentIndex, onSelect }) => {
  const navRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const el = navRef.current?.querySelectorAll("[role='tab']")[currentIndex];
    if (el) {
      setIndicatorStyle({
        left: `${el.offsetLeft}px`,
        width: `${el.offsetWidth}px`,
      });
      el.focus({ preventScroll: true });
    }
  }, [currentIndex]);

  const onKeyDown = (e) => {
    const count = services.length;
    if (e.key === "ArrowRight") onSelect((currentIndex + 1) % count);
    if (e.key === "ArrowLeft") onSelect((currentIndex - 1 + count) % count);
    if (e.key === "Home") onSelect(0);
    if (e.key === "End") onSelect(count - 1);
  };

  return (
    <div
      className={styles.serviceSelector}
      ref={navRef}
      role="tablist"
      aria-label="Services"
      onKeyDown={onKeyDown}
    >
      {services.map((service, index) => (
        <button
          key={service.id}
          role="tab"
          aria-selected={index === currentIndex}
          aria-controls={`panel-${service.id}`}
          id={`tab-${service.id}`}
          className={`${styles.serviceNavItem} ${
            index === currentIndex ? styles.active : ""
          }`}
          onClick={() => onSelect(index)}
          tabIndex={index === currentIndex ? 0 : -1}
          data-accent={service.accent}
        >
          {service.title}
        </button>
      ))}
      <div className={styles.navIndicator} style={indicatorStyle} />
    </div>
  );
};

const DeveloperNav = ({ info, onPrev, onNext }) => (
  <nav className={styles.developerNav} aria-label="Service navigation">
    <button onClick={onPrev} className={styles.navButton} aria-label="Previous">
      <FaChevronLeft />
    </button>
    <img src={info.imageUrl} alt={info.name} className={styles.devImage} />
    <div className={styles.devTextContainer}>
      <div className={styles.devName}>{info.name}</div>
      <div className={styles.devTitle}>{info.title}</div>
    </div>
    <button onClick={onNext} className={styles.navButton} aria-label="Next">
      <FaChevronRight />
    </button>
  </nav>
);

/* ===========================
   PAGE
   =========================== */

function ServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const trackRef = useRef(null);

  const changeService = (newIndex) => {
    const wrapped = (newIndex + services.length) % services.length;
    if (wrapped !== currentIndex) {
      setIsFlipped(false);
      setCurrentIndex(wrapped);
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const resize = () => {
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      track.style.transform = mobile
        ? `translateX(-${currentIndex * 100}%)`
        : "";
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [currentIndex]);

  const handleNext = () => changeService(currentIndex + 1);
  const handlePrev = () => changeService(currentIndex - 1);
  const handleSelect = (index) =>
    changeService(typeof index === "number" ? index : index);
  const handleFlip = () => setIsFlipped((p) => !p);

  const handleTouchStart = (e) =>
    (touchStartX.current = e.targetTouches[0].clientX);
  const handleTouchMove = (e) =>
    (touchEndX.current = e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) handleNext();
    if (touchStartX.current - touchEndX.current < -75) handlePrev();
  };

  const activeService = services[currentIndex];
  const baseUrl = "https://your-domain.com";

  // --- SEO head & structured data (Breadcrumb + all Service objects) ---
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/services`,
      },
    ],
  };

  const servicesSchema = services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: "Software development",
    description: s.description,
    provider: { "@type": "Person", name: "Ali Ch" },
    areaServed: "Worldwide",
    offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
    url: `${baseUrl}${s.slug}`,
  }));

  return (
    <>
      {/* SEO head */}
      <title>
        Front-End Development Services – React &amp; Angular | Performance, SEO
        & Testing
      </title>
      <meta
        name="description"
        content="Hire a React & Angular specialist. Performance-first front-end, Angular/React app development, Node.js APIs, UI/UX implementation, and unit/integration testing. Case-study backed."
      />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={`${baseUrl}/services`} />
      {/* OG/Twitter */}
      <meta
        property="og:title"
        content="Front-End Development Services – React & Angular"
      />
      <meta
        property="og:description"
        content="Performance-first front-end, Node.js APIs, UI/UX implementation, and automated testing. Case-study backed."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}/services`} />
      <meta property="og:image" content={`${baseUrl}/og-services.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Front-End Development Services – React & Angular"
      />
      <meta
        name="twitter:description"
        content="React/Angular development, Node.js APIs, UI/UX implementation, testing."
      />
      <meta name="twitter:image" content={`${baseUrl}/og-services.jpg`} />
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {servicesSchema.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div
        className={styles.container}
        style={{
          "--accent-color": activeService.accent,
          "--halo": activeService.halo,
        }}
      >
        <div className={styles.pageHalo} aria-hidden="true" />
        <div className="sectionHeader">
          <h1
            className="gradientText
        sectionTitle"
          >
            Our Services
          </h1>

          <p className={styles.sectionDek}>
            I help teams ship fast, accessible, SEO-ready products. Choose a
            focused service or combine them into a sprint plan. Every engagement
            includes measurable outcomes and clear deliverables.
          </p>
        </div>

        <ServiceSelector
          services={services}
          currentIndex={currentIndex}
          onSelect={handleSelect}
        />

        <main
          className={styles.carouselWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          id={`panel-${activeService.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeService.id}`}
        >
          <div className={styles.carouselTrack} ref={trackRef}>
            {services.map((service, index) => {
              let offset = index - currentIndex;
              if (offset > services.length / 2) offset -= services.length;
              if (offset < -services.length / 2) offset += services.length;
              const isActive = index === currentIndex;
              return (
                <ServiceCard
                  key={service.id}
                  service={service}
                  offset={offset}
                  isFlipped={isActive && isFlipped}
                  onFlip={handleFlip}
                  isActive={isActive}
                />
              );
            })}
          </div>
        </main>

        <div className={styles.dotIndicators}>
          {services.map((s, i) => (
            <button
              key={s.id}
              className={`${styles.dot} ${
                i === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => handleSelect(i)}
              aria-label={`Go to ${s.title}`}
              title={s.title}
            />
          ))}
        </div>

        <div className={styles.developerNavWrapper}>
          <DeveloperNav
            info={developerInfo}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
