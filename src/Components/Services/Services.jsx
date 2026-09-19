import React, { useState, useRef, useEffect } from "react";

import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiTestTubeLine,
  RiListCheck2,
  RiCheckLine,
  RiCheckboxCircleLine,
  RiCloseLine,
  RiRocketLine,
  RiCodeBoxLine,
  RiServerLine,
  RiShoppingBag3Line,
} from "react-icons/ri";
import {
  SiReact,
  SiAngular,
  SiFigma,
  SiNodedotjs,
  SiWordpress,
  SiShopify,
  SiRedux,
} from "react-icons/si";

import darkLogo from "../../assets/images/logo/dark-logo.png";
import lightLogo from "../../assets/images/logo/light-logo.png";

/* ===========================
   SEO-OPTIMIZED SERVICES DATA
   =========================== */
const services = [
  {
    id: 1,
    slug: "/services/react-development",
    title: "React & Redux Development",
    description:
      "Engineering modern, high-performance Single-Page Applications (SPAs) with React.js, Redux Toolkit, and Next.js. Focused on Core Web Vitals, modular architecture, and lightning-fast rendering.",
    Icon: SiReact,
    details: [
      "Modern React Architecture (Custom Hooks, Context API, Suspense)",
      "Global State Management with Redux Toolkit & RTK Query",
      "Next.js SSR, SSG & Incremental Static Regeneration (ISR)",
      "Lighthouse 95+ Core Web Vitals (LCP < 1.2s, 0 CLS)",
      "Clean TypeScript Typing & Reusable UI Component Systems",
      "Seamless RESTful API integration & Error Boundaries",
      "Automated Vitest/Jest Testing & GitHub Actions CI/CD",
    ],
    outcomes: [
      "Sub-second initial paint times and optimal Core Web Vitals",
      "Scalable frontend codebase ready for enterprise feature velocity",
      "High-converting user experiences across desktop and mobile",
    ],
    learnMoreUrl: "/projects",
    projectUrl: "/projects",
    accent: "#61dafb",
    halo: "radial-gradient(60% 70% at 50% 55%, rgba(97,218,251,0.20), rgba(0,0,0,0) 70%)",
  },
  {
    id: 2,
    slug: "/services/angular-development",
    title: "Enterprise Angular Engineering",
    description:
      "Robust, enterprise-grade Angular web platforms leveraging Standalone Components, reactive Signals, and RxJS pipelines for high-traffic and data-heavy applications.",
    Icon: SiAngular,
    details: [
      "Angular 17/18 Standalone Components & Signal-based reactivity",
      "RxJS state orchestration, subject pipelines & event streams",
      "Enterprise modular dashboards, data grids & complex forms",
      "Angular Universal (SSR) for search engine indexability",
      "Zone-less execution, deferrable views & image optimization",
      "Strict TypeScript typings & clean dependency injection",
      "Automated unit & E2E quality assurance (Jest, Playwright)",
    ],
    outcomes: [
      "Fully crawlable, SEO-ready Angular routes with dynamic metadata",
      "Smaller bundle footprints and rapid Time to Interactive (TTI)",
      "Long-term maintainable architecture trusted by enterprise teams",
    ],
    learnMoreUrl: "/projects",
    projectUrl: "/projects",
    accent: "#dd0031",
    halo: "radial-gradient(60% 70% at 50% 55%, rgba(221,0,49,0.18), rgba(0,0,0,0) 70%)",
  },
  {
    id: 3,
    slug: "/services/rest-api-integration",
    title: "REST APIs & Full-Stack Integration",
    description:
      "Connecting clean frontend user interfaces to powerful back-end services, third-party APIs, and full-stack Node.js/Express architectures.",
    Icon: RiServerLine,
    details: [
      "RESTful API design, data contract serialization & caching",
      "Full-stack basics: Node.js, Express.js & MongoDB integrations",
      "Secure JWT authentication, OAuth & role-based route guards",
      "Real-time WebSocket data feeds & automated webhook listeners",
      "API request throttling, debounce, optimistic UI updates",
      "Third-party SDK integrations (Stripe, Twilio, Analytics)",
    ],
    outcomes: [
      "Flawless data synchronization with zero UI blocking or lag",
      "End-to-end type safety across API request and response boundaries",
      "Secure, PCI-compliant client communication pipelines",
    ],
    learnMoreUrl: "/contact",
    projectUrl: "/contact",
    accent: "#8a2be2",
    halo: "radial-gradient(60% 70% at 50% 55%, rgba(138,43,226,0.20), rgba(0,0,0,0) 70%)",
  },
  {
    id: 4,
    slug: "/services/ecommerce-development",
    title: "Shopify & WooCommerce",
    description:
      "Custom, high-converting online stores tailored for luxury retail, digital products, and high-ticket brands. Fast checkouts, custom themes, and catalog speed.",
    Icon: RiShoppingBag3Line,
    details: [
      "Shopify Frontend customization (Liquid, Storefront API, modern CSS)",
      "Custom WordPress & WooCommerce theme engineering (PHP & Tailwind)",
      "Single-page checkout optimization with friction-free UX",
      "Faceted product filtering, live cart previews & mega-menus",
      "Meta Pixel, Google Analytics 4 & conversion funnel telemetry",
      "Speed optimization: WebP compression, lazy loading & caching",
    ],
    outcomes: [
      "Substantial drops in cart abandonment and faster checkouts",
      "Instant, app-like mobile shopping experience for high-ticket buyers",
      "Autonomous client store management via intuitive admin dashboards",
    ],
    learnMoreUrl: "/projects",
    projectUrl: "/projects",
    accent: "#3c873a",
    halo: "radial-gradient(60% 70% at 50% 55%, rgba(60,135,58,0.20), rgba(0,0,0,0) 70%)",
  },
  {
    id: 5,
    slug: "/services/ui-ux-implementation",
    title: "UI/UX Implementation ",
    description:
      "Pixel-perfect translation of Figma designs into clean, responsive production code using Tailwind CSS, CSS Modules, and WCAG 2.2 accessibility standards.",
    Icon: SiFigma,
    details: [
      "Figma → Pixel-perfect React & Angular componentization",
      "Reusable design token systems with light & dark theme syncing",
      "Fluid 60fps micro-animations, hover effects & interactive charts",
      "Strict semantic HTML5 structure with ARIA landmark attributes",
      "Cross-browser testing (Chrome, Safari, Firefox, Edge) across viewports",
      "Responsive mobile-first layouts engineered for touch devices",
    ],
    outcomes: [
      "Harmonious visual design system that commands client credibility",
      "100% responsive fluid UI across every mobile and desktop screen",
      "Built-in web accessibility guaranteeing inclusive user access",
    ],
    learnMoreUrl: "/projects",
    projectUrl: "/projects",
    accent: "#0ea5e9",
    halo: "radial-gradient(60% 70% at 50% 55%, rgba(14,165,233,0.18), rgba(0,0,0,0) 70%)",
  },
];

const developerInfo = {
  name: "Ali Ch",
  title: "Frontend Engineer — React, Angular & Redux Specialist",
  imageUrl: darkLogo,
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
    "serviceCard",
    isActive ? "activeCard" : "",
    isActive && isFlipped ? "isFlipped" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="serviceCardWrapper" style={getCardStyle()}>
      {isActive && <div className="cardHalo" aria-hidden="true" />}
      <div className={cls}>
        {/* Front */}
        <div className="cardFaceFront">
          <div className="cardHeader">
            <div className="cardIcon" aria-hidden="true">
              <service.Icon />
            </div>
            <h3 className="cardTitle">{service.title}</h3>
          </div>

          <p className="cardDescription">{service.description}</p>

          <div className="servicecardCtas">
            <a
              href={service.learnMoreUrl}
              className="cardBtn linkBtn"
              aria-label={`See case studies related to ${service.title}`}
            >
              See Case Studies
            </a>

            <button
              className="cardBtn detailsBtn"
              onClick={(e) => {
                e.stopPropagation();
                onFlip();
              }}
              type="button"
              disabled={!isActive}
              aria-expanded={isActive && isFlipped ? "true" : "false"}
            >
              <RiListCheck2 />
              <span>What's Included?</span>
            </button>
          </div>
        </div>

        {/* Back */}
        <div className="cardFaceBack" aria-live="polite">
          <div className="backHeader">
            <div className="backTitleGroup">
              <service.Icon className="backHeaderIcon" />
              <h3 className="backHeaderTitle">{service.title}</h3>
            </div>
            <button
              className="closeBtn"
              onClick={(e) => {
                e.stopPropagation();
                onFlip();
              }}
              aria-label="Close details"
            >
              <RiCloseLine />
            </button>
          </div>

          <div className="backContentScroll">
            <div className="specSection">
              <h4 className="detailsTitle">Core Deliverables</h4>
              <ul className="detailsList">
                {service.details.map((detail, i) => (
                  <li key={detail} style={{ "--i": i }}>
                    <RiCheckboxCircleLine className="checkIcon" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="specSection">
              <h4 className="outcomesTitle"><RiRocketLine className="rocketIcon" /> Business Impact</h4>
              <ul className="outcomesList">
                {service.outcomes.map((o, i) => (
                  <li key={o} style={{ "--i": i + service.details.length }}>
                    <div className="impactBullet" style={{ backgroundColor: 'var(--accent-color)' }} />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="backFooter">
            <a
              href={service.projectUrl}
              className="cardBtn linkBtn fullWidthBtn"
              aria-label={`View ${service.title} work`}
            >
              View Related Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceSelector = ({ services, currentIndex, onSelect }) => {
  const navRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    const updateIndicator = () => {
      const tabs = navRef.current?.querySelectorAll("[role='tab']");
      const el = tabs?.[currentIndex];
      if (el) {
        setIndicatorStyle({
          left: `${el.offsetLeft}px`,
          top: `${el.offsetTop}px`,
          width: `${el.offsetWidth}px`,
          height: `${el.offsetHeight}px`,
        });
      }
    };

    updateIndicator();

    // Ensure it updates on window resize
    window.addEventListener("resize", updateIndicator);

    // Ensure it updates if the container scales or fonts load
    const observer = new ResizeObserver(updateIndicator);
    if (navRef.current) observer.observe(navRef.current);

    return () => {
      window.removeEventListener("resize", updateIndicator);
      observer.disconnect();
    };
  }, [currentIndex]);

  const onKeyDown = (e) => {
    const count = services.length;
    if (e.key === "ArrowRight") onSelect((currentIndex + 1) % count);
    if (e.key === "ArrowLeft") onSelect((currentIndex - 1 + count) % count);
    if (e.key === "Home") onSelect(0);
    if (e.key === "End") onSelect(count - 1);
  };

  return (
    <div className="serviceSelectorWrapper">
      <div
        className="serviceSlider"
        ref={navRef}
        role="tablist"
        aria-label="Services"
        onKeyDown={onKeyDown}
      >
        {duplicatedServices.map((service, index) => {
          const originalIndex = index % services.length;
          const isActive = originalIndex === currentIndex;
          return (
            <button
              key={`${service.id}-${index}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${service.id}`}
              id={`tab-${service.id}-${index}`}
              className={`serviceNavItem ${isActive ? "active" : ""}`}
              onClick={() => onSelect(originalIndex)}
              tabIndex={isActive ? 0 : -1}
              data-accent={service.accent}
            >
              {service.title}
            </button>
          );
        })}
        <div className="navIndicator" style={indicatorStyle} />
      </div>
    </div>
  );
};

const DeveloperNav = ({ info, onPrev, onNext }) => (
  <nav className="developerNav" aria-label="Service navigation">
    <button onClick={onPrev} className="navButton" aria-label="Previous">
      <RiArrowLeftSLine />
    </button>
    <img src={info.imageUrl} alt={info.name} className="devImage" />
    <div className="devTextContainer">
      <div className="devName">{info.name}</div>
      <div className="devTitle">{info.title}</div>
    </div>
    <button onClick={onNext} className="navButton" aria-label="Next">
      <RiArrowRightSLine />
    </button>
  </nav>
);

/* ===========================
   PAGE
   =========================== */

function ServicesPage({ theme }) {
  const isDark =
    theme === "dark" ||
    (!theme &&
      typeof document !== "undefined" &&
      document.documentElement.getAttribute("data-theme") !== "light");

  const currentDevInfo = {
    ...developerInfo,
    imageUrl: isDark ? darkLogo : lightLogo,
  };

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 75) handleNext();
    else if (deltaX < -75) handlePrev();
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

      <div className="custom-scale-wrapper">
        <div
          className="container"
          style={{
            "--accent-color": activeService.accent,
            "--halo": activeService.halo,
          }}
        >
          <div className="pageHalo" aria-hidden="true" />
          <div className="sectionHeader">
            <h1 className="gradientText sectionTitle">
              Our Services
            </h1>

            <p className="sectionDek">
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
            className="carouselWrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            id={`panel-${activeService.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeService.id}`}
          >
            <div className="carouselTrack" ref={trackRef}>
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

          <div className="dotIndicators">
            {services.map((s, i) => (
              <button
                key={s.id}
                className={`dot ${i === currentIndex ? "activeDot" : ""}`}
                onClick={() => handleSelect(i)}
                aria-label={`Go to ${s.title}`}
                title={s.title}
              />
            ))}
          </div>

          <div className="developerNavWrapper">
            <DeveloperNav
              info={currentDevInfo}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
