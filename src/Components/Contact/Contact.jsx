import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";

/* ---------------- Icons ---------------- */
const PaperPlaneIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="m22 2-11 11" />
  </svg>
);

const LoadingAnimation = () => (
  <div className={styles.loadingAnimation}>
    <PaperPlaneIcon />
  </div>
);

const SuccessIcon = () => (
  <div className={styles.successIcon}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  </div>
);

const SocialLink = ({ href, iconClass, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.socialLink}
    aria-label={label}
  >
    <i className={iconClass}></i>
  </a>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

/* --------- Dynamic Headline --------- */
const DynamicHeadline = ({ headlines }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIndex((p) => (p + 1) % headlines.length),
      4000
    );
    return () => clearInterval(t);
  }, [headlines.length]);
  return (
    <div className={styles.headlineContainer} aria-live="polite">
      {headlines.map((text, i) => (
        <h2
          key={i}
          className={`${styles.headline} ${
            i === index ? styles.headlineVisible : ""
          }`}
        >
          {text}
        </h2>
      ))}
    </div>
  );
};

/* ===================== Page ===================== */
const Contact = () => {
  const [view, setView] = useState("portal"); // 'portal' | 'form' | 'success'
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [localTime, setLocalTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
    website: "", // honeypot
  });
  const [errors, setErrors] = useState({});

  const dynamicHeadlines = [
    "Let's Build Something Amazing.",
    "Have a Project in Mind?",
    "Let's Start a Conversation.",
  ];

  /* ---- live local time (nice trust signal) ---- */
  useEffect(() => {
    const timer = setInterval(() => {
      const time = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setLocalTime(`${time} PKT`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePortalClick = () => setView("form");

  const validateField = (name, value) => {
    let errorMsg = "";
    if (name !== "message" && !value.trim())
      errorMsg = "This field is required.";
    else if (
      name === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
    )
      errorMsg = "Please enter a valid email address.";
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // honeypot: if filled, silently ignore
    if (formData.website) return;

    // final validate
    ["name", "email", "projectType"].forEach((k) =>
      validateField(k, formData[k])
    );
    if (["name", "email", "projectType"].some((k) => !formData[k] || errors[k]))
      return;

    setStatus("submitting");

    try {
      // Replace with your Apps Script endpoint (already present)
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbzs50oxAmfN28uw191i_h1WBTTGjVPyFgzNpiZXbnFQCw0HNePSuUt1cpOQYgS_9Xf-zg/exec";

      const payload = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
        message: formData.message,
        page: "/contact",
        tz: "Asia/Karachi",
        ts: new Date().toISOString(),
      });

      const response = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      const result = await response.json();
      if (result.result === "success") {
        setStatus("success");
        setView("success");
      } else {
        throw new Error(result.error || "Unknown error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      projectType: "",
      message: "",
      website: "",
    });
    setErrors({});
    setStatus("idle");
    setView("form");
  };

  const getButtonContent = () => {
    if (status === "submitting") return <LoadingAnimation />;
    if (status === "error") return "Error! Try Again.";
    return "Send Message";
  };

  /* ---------- SEO head & structured data ---------- */
  const baseUrl = "https://your-domain.com";
  const canonical = `${baseUrl}/contact`;

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Ali Ch",
    url: canonical,
    description:
      "Contact a Senior React & Angular Front-End Engineer for performance-first development, UI/UX implementation, and audits.",
    about: {
      "@type": "Person",
      name: "Ali Ch",
      jobTitle: "Senior Front-End Engineer (React & Angular)",
      homeLocation: { "@type": "Place", name: "Chiniot, Pakistan" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        areaServed: "Worldwide",
        availableLanguage: ["en"],
        email: "mailto:alich70566.babar@example.com",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Contact", item: canonical },
    ],
  };

  return (
    <>
      {/* HEAD */}
      <title>
        Contact Ali Ch – Hire React &amp; Angular Front-End Engineer
      </title>
      <meta
        name="description"
        content="Get in touch to discuss React or Angular development, UI/UX implementation, performance & SEO audits. Based in Chiniot, Pakistan — working with teams worldwide."
      />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />
      {/* OG/Twitter */}
      <meta
        property="og:title"
        content="Contact Ali Ch – React & Angular Engineer"
      />
      <meta
        property="og:description"
        content="Hire a performance-first front-end developer for React/Angular projects, audits and testing."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${baseUrl}/og-contact.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Contact Ali Ch – React & Angular Engineer"
      />
      <meta
        name="twitter:description"
        content="Front-end development, UI/UX implementation, and Core Web Vitals improvements."
      />
      <meta name="twitter:image" content={`${baseUrl}/og-contact.jpg`} />
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* PAGE */}
      <div className={styles.ctaContainer} aria-labelledby="contact-title">
        {/* Visible H1 for SEO/A11y (keeps UI minimal if styled small) */}
        <h1
          id="contact-title"
          className="gradientText
        sectionTitle"
        >
          Contact
        </h1>

        {/* --- STATE 1: Portal --- */}
        <div
          className={`${styles.portalView} ${
            view !== "portal" ? styles.hidden : ""
          }`}
        >
          <DynamicHeadline headlines={dynamicHeadlines} />
          <div
            className={styles.portal}
            onClick={handlePortalClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" ? handlePortalClick() : null)}
            aria-label="Open contact form"
          >
            <PaperPlaneIcon className={styles.portalIcon} />
          </div>
          <p className={styles.ctaSubtitle}>
            Click the icon to start the conversation. It’s currently{" "}
            <strong>{localTime}</strong> in Chiniot, Pakistan.
          </p>
        </div>

        {/* --- STATE 2: Form --- */}
        <div
          className={`${styles.formWrapper} ${
            view === "form" ? styles.visible : ""
          }`}
        >
          <div
            className={`${styles.formContainer} ${
              status === "error" ? styles.shake : ""
            }`}
          >
            <div className={styles.formHeader}>
              <h2>Start the Conversation</h2>
              <div className={styles.statusWrapper}>
                <div className={styles.availability}>
                  <span className={styles.statusDot}></span>Available for new
                  projects
                </div>
                <div className={styles.responseTime}>
                  <ClockIcon /> Usually replies within <span>24</span> hours
                </div>
              </div>
            </div>

            <form
              onSubmit={handleFormSubmit}
              noValidate
              method="post"
              aria-describedby="privacy-note"
            >
              {/* Honeypot (hidden) */}
              <div
                style={{ position: "absolute", left: "-9999px" }}
                aria-hidden="true"
              >
                <label htmlFor="website">Your website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div
                className={`${styles.formGroup} ${
                  errors.name ? styles.error : ""
                }`}
              >
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="What should I call you?"
                />
                {errors.name && (
                  <span className={styles.errorMessage}>{errors.name}</span>
                )}
              </div>

              <div
                className={`${styles.formGroup} ${
                  errors.email ? styles.error : ""
                }`}
              >
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="e.g., name@example.com"
                />
                {errors.email && (
                  <span className={styles.errorMessage}>{errors.email}</span>
                )}
              </div>

              <div
                className={`${styles.formGroup} ${
                  errors.projectType ? styles.error : ""
                }`}
              >
                <label htmlFor="projectType" className={styles.label}>
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    What are we discussing?
                  </option>
                  <option value="New Project">
                    New Project (React/Angular)
                  </option>
                  <option value="UI/UX Development">
                    UI/UX Implementation
                  </option>
                  <option value="Performance & SEO Audit">
                    Performance & SEO Audit
                  </option>
                  <option value="Opportunity">Freelance Collaboration</option>
                  <option value="Hello">Just saying hello</option>
                </select>
                {errors.projectType && (
                  <span className={styles.errorMessage}>
                    {errors.projectType}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Goals, timeline, budget, links—whatever helps."
                />
              </div>

              <p id="privacy-note" className={styles.privacyNote}>
                I’ll use your info only to reply. No mailing lists. By
                submitting, you agree to be contacted about your inquiry.
              </p>

              <button
                type="submit"
                className={`${styles.submitBtn} ${
                  status === "error" ? styles.showError : ""
                }`}
                disabled={status === "submitting"}
                data-analytics="contact-submit"
              >
                {getButtonContent()}
              </button>
            </form>

            <div className={styles.socialsFooter}>
              <p>or connect with me on</p>
              <div className={styles.socialLinksContainer}>
                <SocialLink
                  href="https://www.linkedin.com/"
                  iconClass="ph-bold ph-linkedin-logo"
                  label="LinkedIn"
                />
                <SocialLink
                  href=""
                  iconClass="ph-bold ph-github-logo"
                  label="GitHub"
                />
                <SocialLink
                  href="https://twitter.com/"
                  iconClass="ph-bold ph-twitter-logo"
                  label="Twitter"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- STATE 3: Success --- */}
        <div
          className={`${styles.successView} ${
            view === "success" ? styles.visible : ""
          }`}
        >
          <SuccessIcon />
          <h3>Thank you, {formData.name.split(" ")[0] || "friend"}!</h3>
          <p>Your message has been sent. I’ll review it and reply promptly.</p>
          <div className={styles.nextSteps}>
            <h4>What’s Next?</h4>
            <p>
              I typically respond within <strong>24 hours</strong>. Meanwhile,
              explore <a href="/case-studies">case studies</a> or projects on{" "}
              <a href="" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              .
            </p>
          </div>
          <button onClick={resetForm} className={styles.resetButton}>
            Send Another Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
