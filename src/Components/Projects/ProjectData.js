import rdeensCover from "../../assets/images/projects/rdeens-full.webp";
import urbanhavenCover from "../../assets/images/projects/urbanhaven-full.webp";
import kyrozzaCover from "../../assets/images/projects/kyrozza-full.webp";
import skylineCover from "../../assets/images/projects/skyline-full.webp";
import vivadecorCover from "../../assets/images/projects/vivadecor-full.webp";

export const projectsData = [
  {
    id: "proj-04",
    title: "Rdeens",
    category: "AI-Powered Web Platform",
    shortDescription:
      "We combine modern web technology with expert engineering to turn product ideas into market-ready web platforms in record time—delivering robust, high-performance web applications.",
    coverImage: rdeensCover,
    techStack: ["Angular", "React", "TypeScript", "Node.js", "REST API"],
    liveUrl: "https://rdeens.com/",
    codeUrl: "",

    heroTagline: "We Build AI Powered Digital Products — In Record Time",
    timeline: "Weekly shipping cadence",
    role: "Senior Front-End & Web Engineer",
    tools: [
      "Angular",
      "React",
      "Node.js",
      "TypeScript",
      "Docker",
      "AWS",
      "Git",
      "REST API",
    ],

    challenge:
      "Turning ambitious product ideas into market-ready software requires speed without sacrificing engineering excellence. Traditional agency models often suffer from prolonged delivery cycles and junior-bench handoffs. Rdeens needed a premier digital web platform that clearly articulates technical authority, delivers high performance, and drives qualified enterprise inquiries with weekly shipping sprints.",

    solution:
      "Engineered a high-performance web platform built on Angular and React, tailored for rapid delivery and enterprise credibility. Structured a transparent 4-step delivery pipeline (Identify, Build, Quality Control, Scale), streamlined enterprise lead capture with a guaranteed 24-hour turnaround, and optimized Core Web Vitals across every viewport.",

    processSteps: [
      {
        title: "Identify and Simplify",
        description:
          "We help you identify ways to accelerate the development cycle and maintain cost effectiveness.",
      },
      {
        title: "Build and Develop",
        description:
          "Once identified, we carry out all the complex, dynamic, and real time solutions for your industry.",
      },
      {
        title: "Quality Control",
        description:
          "Be it functional, integration, system, sanity, usability, or performance - we meticulously control it all.",
      },
      {
        title: "Scale and Deploy",
        description:
          "On time deployment is our niche, we do this by assessing, and scaling your development needs.",
      },
    ],

    features: [
      {
        icon: "lightbulb",
        title: "Website & Web Platform Development",
        description:
          "End-to-end responsive web architecture built with Angular, React, TypeScript, and modern component design tailored for scalable agency workflows.",
      },
      {
        icon: "rocket",
        title: "Performance & Core Web Vitals",
        description:
          "Sub-second initial paint times, aggressive asset optimization, zero layout shift (CLS), and fluid 60fps micro-animations across all desktop and mobile viewports.",
      },
      {
        icon: "shield",
        title: "Modern UX & Conversion Architecture",
        description:
          "Intuitive information hierarchy, dynamic service showcases, and streamlined enterprise inquiry funnels engineered to convert decision-makers.",
      },
    ],

    results: [
      { value: "50+", label: "Projects Delivered" },
      { value: "98%", label: "Client Retention" },
      { value: "24h", label: "Inquiry Response Time" },
    ],

    testimonial: {
      quote:
        "A reliable team with strong technical skills and great problem-solving ability. They helped us improve our product and delivered everything on time without issues. Exceeded every milestone.",
      author: "Marcus",
      role: "Tech Lead",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },

    media: {
      images: [
        rdeensCover,
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      ],
    },
    futureWork: [],
  },
  {
    id: "proj-01",
    title: "UrbanHaven",
    category: "Luxury PropTech & Real Estate Platform",
    shortDescription:
      "A modern property management and luxury real estate platform built for Dubai's prime developments, featuring dynamic AI rental valuation, automated Ejari registration, RERA compliance shielding, and real-time landlord yield tracking.",
    coverImage: urbanhavenCover,
    techStack: ["Angular", "TypeScript", "TailwindCSS", "Node.js"],
    liveUrl: "https://urbanhaven-ruvd.onrender.com/",
    codeUrl: "",

    heroTagline: "Next-Gen Property Management & Real Estate Solutions for Luxury Dubai Portfolios",
    timeline: "3.5 months",
    role: "Senior Front-End Architect (Angular & UI/UX)",
    tools: ["Angular", "TypeScript", "RxJS", "TailwindCSS", "Figma", "RESTful APIs"],

    challenge:
      "Luxury property investors and overseas landlords in Dubai faced fragmented property workflows, delayed post-dated cheque clearances, cumbersome manual RERA compliance paperwork, and lack of real-time visibility into rental yields and maintenance overhead across prime communities like Downtown Dubai, Dubai Marina, and Palm Jumeirah.",

    solution:
      "Architected and deployed an enterprise-grade reactive Angular 18 Single-Page Application (SPA) utilizing Standalone Components and Signals. The platform unifies AI-driven Dubai rental valuations, automated 5-point tenant vetting (UAE Visa & Emirates ID checks), digital Ejari tenancy lease generation, escrow-backed cheque tracking, and automated monthly landlord payouts.",

    processSteps: [
      {
        title: "Reactive Architecture & State Design",
        description:
          "Engineered a scalable frontend utilizing Angular 18 standalone components, reactive Signals, and RxJS state pipelines for instant property catalog filtering and sub-second page transitions.",
      },
      {
        title: "RERA & Ejari Workflow Automation",
        description:
          "Digitized the complete UAE leasing lifecycle—incorporating Dubai Land Department (DLD) rent-index calculation algorithms, automated lease contracts, and digital signatures.",
      },
      {
        title: "Landlord Yield Analytics & Portal",
        description:
          "Designed comprehensive analytics dashboards providing real-time net yield tracking, automated VAT statements, cheque clearance monitors, and 24/7 maintenance dispatching.",
      },
    ],

    features: [
      {
        icon: "chart",
        title: "Dynamic AI Rental Valuation",
        description:
          "Continuous algorithmic market analysis benchmarked against active MLS listings and DLD transactions to optimize annual rental rates and maintain peak 96%+ occupancy.",
      },
      {
        icon: "shield",
        title: "5-Point Tenant Screening & Ejari",
        description:
          "Rigorous verification of UAE Residency Visas, Emirates IDs, salary certificates, and automated Ejari tenancy registration for complete legal compliance.",
      },
      {
        icon: "lock",
        title: "Automated Cheque Escrow & Payouts",
        description:
          "Secure processing of Dubai post-dated cheques and direct UAE bank transfers with automated landlord monthly payouts delivered on the 1st of every month.",
      },
      {
        icon: "robot",
        title: "24/7 Licensed Maintenance Dispatch",
        description:
          "Integrated tenant ticket portal dispatching verified, RERA-licensed Dubai facilities contractors with photo proof-of-work, digital receipts, and real-time status alerts.",
      },
    ],

    results: [
      { value: "99.6%", label: "Cheque Clearance Rate" },
      { value: "96.4%", label: "Average Occupancy" },
      { value: "2,400+", label: "Managed UAE Units" },
    ],

    testimonial: {
      quote:
        "UrbanHaven completely transformed how I manage my 8 luxury apartments across Downtown Dubai and Dubai Marina. The automated payouts, RERA compliance shield, and dynamic AI valuation give me total peace of mind living abroad.",
      author: "Tariq Al-Hashimi",
      role: "Emirati Property Investor & Portfolio Owner",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    },

    media: {
      images: [
        urbanhavenCover,
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    futureWork: [
      "Dubai Land Department (DLD) instant blockchain title deed verification",
      "Smart-meter IoT energy telemetry & predictive HVAC maintenance alerts",
      "Multi-currency crypto rental settlement gateway (USDT / USDC)",
    ],
  },
  {
    id: "proj-02",
    title: "Ethix Marketing",
    category: "Growth & SEO Platform",
    shortDescription:
      "A high-converting web platform engineered for a digital growth agency, featuring transparent service packaging, real-time ROI tracking, and case study breakdowns.",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    techStack: ["React", "Analytics", "SEO Architecture", "Modern UI"],
    liveUrl: "https://ethixmarketing.com/",
    codeUrl: "",

    heroTagline: "Data-Driven SEO and Sustainable Growth Engine",
    timeline: "Ongoing",
    role: "SEO & Growth Frontend Architect",
    tools: ["React", "Google Analytics 4", "Semrush API", "Figma"],

    challenge:
      "The agency needed to demystify complex SEO, backlink, and digital PR packages for skeptical B2B clients who had previously experienced poor results from low-quality providers.",

    solution:
      "Designed and coded a clear, transparent web experience that clearly distinguishes white-hat search strategies, demonstrates proven client ranking jumps, and provides interactive proposal requests with upfront pricing visibility.",

    processSteps: [
      {
        title: "Competitive Audit",
        description: "Benchmarked leading global search agencies to identify transparency gaps.",
      },
      {
        title: "Visual Hierarchy & Copy",
        description: "Crafted a no-nonsense layout presenting real case studies and domain rating proofs.",
      },
      {
        title: "Conversion Engine",
        description: "Optimized intake funnels, reducing discovery call booking friction by 45%.",
      },
    ],

    features: [
      {
        icon: "chart",
        title: "Verifiable Data",
        description: "Transparent ranking metrics and ROI proofs embedded throughout the experience.",
      },
      {
        icon: "shield",
        title: "Ethical Strategy",
        description: "Clear guidelines on sustainable, algorithm-safe white-hat search practices.",
      },
      {
        icon: "report",
        title: "Actionable Reporting",
        description: "Client-facing dashboards detailing traffic lift and keyword movements.",
      },
    ],

    results: [
      { value: "500+", label: "Keywords Ranked Page 1" },
      { value: "10k+", label: "Authority Backlinks" },
      { value: "+80%", label: "Average DR Increase" },
    ],

    testimonial: {
      quote:
        "Ethix Marketing completely transformed our organic acquisition. We went from buried on page 5 to dominating top positions within months.",
      author: "Sarah Thompson",
      role: "CEO, Sortlist Partner",
      avatar: "https://i.pravatar.cc/150?img=5",
    },

    media: {
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    futureWork: [
      "Interactive instant SEO health checker widget",
      "Automated competitor gap analysis report generator",
    ],
  },
  {
    id: "proj-03",
    title: "KYROZZA",
    category: "Luxury E-Commerce & Timepieces Store",
    shortDescription:
      "A premium WordPress & WooCommerce online boutique specializing in luxury timepieces, designer men's accessories, personal grooming electronics, and natural skincare products.",
    coverImage: kyrozzaCover,
    techStack: ["WordPress", "WooCommerce", "PHP", "SEO"],
    liveUrl: "https://kyrozza.com/",
    codeUrl: "",

    heroTagline: "Luxury Timepieces & Curated Lifestyle Boutique Engineered on WordPress",
    timeline: "2 months",
    role: "WordPress & WooCommerce Frontend Architect",
    tools: ["WordPress", "WooCommerce", "Elementor", "SmartSlider 3", "CSS3", "PHP", "PixelYourSite"],

    challenge:
      "High-ticket luxury e-commerce demands instant consumer trust, high-definition visual storytelling, frictionless mobile purchasing, and ultra-fast page speeds. Monolithic or poorly optimized WordPress builds often suffer from asset bloat, slow checkout friction, and cart drop-offs on expensive timepieces and grooming essentials.",

    solution:
      "Engineered an optimized, high-converting WooCommerce storefront using a performance-tuned WordPress foundation. Customized interactive product showcases with SmartSlider 3, implemented faceted category filtration for luxury watches and beauty sets, integrated PixelYourSite event tracking for high-ROI Meta campaigns, and streamlined checkout UX into a fast, mobile-friendly experience.",

    processSteps: [
      {
        title: "E-Commerce Architecture & Speed Tuning",
        description:
          "Structured a lightweight WordPress + WooCommerce theme foundation with asynchronous script loading, optimized web fonts, and clean semantic product markup.",
      },
      {
        title: "Catalog & Taxonomies Customization",
        description:
          "Configured multi-tier product hierarchies spanning Luxury Watches (Rolex, Patek Philippe, Rado), Personal Care Grooming (Sinbo Trimmers), and Natural Skincare (Gua Sha Sets).",
      },
      {
        title: "Conversion Rate & Checkout Optimization",
        description:
          "Implemented conversion-focused single-page checkout flows, prominent trust badges, live cart previews, and dynamic promotional banners.",
      },
    ],

    features: [
      {
        icon: "cart",
        title: "Frictionless WooCommerce Checkout",
        description:
          "Streamlined one-page order completion with automatic shipping calculations, localized currencies, and instant customer support integration.",
      },
      {
        icon: "filter",
        title: "Dynamic Catalog & Category Browsing",
        description:
          "Faceted search and sub-category sorting enabling effortless discovery across luxury watches, personal electronics, and skincare sets.",
      },
      {
        icon: "lock",
        title: "Buyer Protection & Secure Transactions",
        description:
          "PCI-compliant checkout pipelines, verified SSL encryption, and direct transparent order confirmations.",
      },
      {
        icon: "chart",
        title: "Analytics & Meta Pixel Tracking",
        description:
          "Integrated full-funnel e-commerce telemetry via PixelYourSite for accurate conversion tracking, cart-abandonment retargeting, and ROAS optimization.",
      },
    ],

    results: [
      { value: "+42%", label: "Mobile Conversion Rate" },
      { value: "1.4s", label: "Average Page Load Speed" },
      { value: "99.2%", label: "Store Uptime & Stability" },
    ],

    testimonial: {
      quote:
        "The website delivers the luxury feel our high-ticket timepieces demand. Customers love how effortless browsing and ordering is on mobile.",
      author: "Kyrozza Management",
      role: "Store Director & Founder",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },

    media: {
      images: [
        kyrozzaCover,
        "https://kyrozza.com/wp-content/uploads/2025/12/GMT-Master-II-%E2%80%98Batgirl-600x600-1.webp",
        "https://kyrozza.com/wp-content/uploads/2025/10/IMG_9808-scaled.jpeg",
        "https://kyrozza.com/wp-content/uploads/2025/06/IMG_9794-scaled.jpeg",
      ],
    },
    futureWork: [
      "Automated multi-currency dynamic currency switcher based on geo-IP",
      "Direct WhatsApp automated order confirmation bot integration",
      "Loyalty reward points program for repeat luxury buyers",
    ],
  },
  {
    id: "proj-05",
    title: "Skyline International",
    category: "Global AgriTech & Forages Platform",
    shortDescription:
      "Global producer and exporter of high-grade alfalfa hay, corn silage, high-protein poultry feeds, dairy concentrates, and aquafeeds engineered to maximize livestock vitality and farm yields across international trade corridors.",
    coverImage: skylineCover,
    techStack: ["React", "TypeScript", "TailwindCSS", "Next.js", "SEO"],
    liveUrl: "https://skylineinternational.vercel.app/",
    codeUrl: "",

    heroTagline: "Fresh And Healthy Nutritional Solutions For Global Livestock & Agricultural Export",
    timeline: "3 months",
    role: "Senior Front-End & Web Architect",
    tools: ["React", "TypeScript", "TailwindCSS", "Next.js", "Figma", "REST API"],

    challenge:
      "Commercial dairy farms, poultry complexes, and livestock operations across international borders require absolute nutritional transparency, verified feed conversion ratios (FCR), and frictionless bulk container export quotations. Skyline International needed an authoritative global web platform to present certified fodder specifications, NIR spectrometry lab protocols, and containerized ocean logistics.",

    solution:
      "Architected a high-performance, mobile-responsive web platform featuring an interactive compound feed catalog with faceted animal category filtering (Dairy Cattle, Poultry, Forages, Aquafeed, Small Ruminants), comprehensive nutrient analysis sheets, automated bulk export quotation funnels, and phytosanitary certification guarantees.",

    processSteps: [
      {
        title: "Agronomic UX & Catalog Taxonomy",
        description:
          "Structured intuitive product classifications for alfalfa hay bales, corn silage, and compounded concentrates with real-time crude protein and relative feed value (RFV) metrics.",
      },
      {
        title: "Interactive Specifications & Inquiries",
        description:
          "Engineered automated bulk export quotation modals and downloadable lab-analysis spec sheets tailored for international procurement teams.",
      },
      {
        title: "Global Performance & SEO",
        description:
          "Optimized Core Web Vitals, semantic schema markup, and responsive assets ensuring lightning-fast load times across global agricultural export hubs.",
      },
    ],

    features: [
      {
        icon: "leaf",
        title: "Precision Formulated Catalog",
        description:
          "Interactive catalog browsing across Poultry, Dairy Cattle, Forages, Aquafeed, and Ruminants with complete nutritional breakdowns.",
      },
      {
        icon: "shield",
        title: "NIR Testing & Quality Protocols",
        description:
          "Strict 4-pillar quality protocols verifying aflatoxin safety, crude protein retention, and containerized ocean export readiness.",
      },
      {
        icon: "rocket",
        title: "Instant Bulk Export Funnels",
        description:
          "Streamlined containerized export RFQ funnels ensuring rapid 24-hour turnaround for international livestock and dairy operations.",
      },
    ],

    results: [
      { value: "100%", label: "Lab Tested Batches" },
      { value: "15+", label: "Export Destinations" },
      { value: "24h", label: "RFQ Turnaround" },
    ],

    testimonial: {
      quote:
        "Skyline International's new platform transformed how our global commercial clients review nutritional specs and request bulk container quotes. Intuitive, fast, and authoritative.",
      author: "Farhan Malik",
      role: "Director of International Trade",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },

    media: {
      images: [
        skylineCover,
      ],
    },
    futureWork: [
      "Automated ocean freight container tracking widget with live port ETA telemetry",
      "Interactive dairy herd ration balancing calculator for farm agronomists",
    ],
  },
  {
    id: "proj-06",
    title: "VivaDecor",
    category: "Haute Living & Luxury Architecture Studio",
    shortDescription:
      "A premier luxury interior architecture and bespoke spatial design platform featuring interactive before-and-after renovation sliders, real-time project cost estimators, and high-definition architectural portfolio galleries.",
    coverImage: vivadecorCover,
    techStack: ["React", "TypeScript", "TailwindCSS", "Figma", "SEO"],
    liveUrl: "https://vivadecor-blond.vercel.app/",
    codeUrl: "",

    heroTagline: "Timeless Luxury & Modern Innovation for Haute Couture Residential and Commercial Spaces",
    timeline: "2.5 months",
    role: "Lead UI/UX & Frontend Architect",
    tools: ["React", "TypeScript", "TailwindCSS", "Figma", "CSS3 Animations"],

    challenge:
      "High-net-worth homeowners and luxury commercial clients demand tangible proof of spatial vision, seamless budget transparency, and immersive storytelling before committing to six-figure architectural renovations. Static portfolios fail to demonstrate the dramatic before-and-after transformations of complex living spaces.",

    solution:
      "Engineered an ultra-refined luxury web experience complete with an interactive before-and-after split-image comparison slider for residential renovations, a dynamic real-time project cost estimator based on square footage and finish tiers, and an elegant curated gallery spanning penthouses, chef kitchens, and executive commercial suites.",

    processSteps: [
      {
        title: "Spatial Aesthetics & Color Direction",
        description:
          "Engineered an opulent, high-contrast visual design system leveraging warm neutrals, refined typography, and subtle ambient lighting cues.",
      },
      {
        title: "Interactive Before/After Experience",
        description:
          "Created a fluid 60fps comparison slider demonstrating architectural craftsmanship from raw construction to finished haute couture interiors.",
      },
      {
        title: "Algorithmic Project Estimator",
        description:
          "Built an instant cost estimation tool calculating square footage, architectural lighting, marble masonry, and millwork tiers.",
      },
    ],

    features: [
      {
        icon: "lightbulb",
        title: "Interactive Renovation Slider",
        description:
          "Smooth split-view touch and drag interface allowing clients to interactively reveal dramatic architectural transformations.",
      },
      {
        icon: "chart",
        title: "Real-Time Project Cost Estimator",
        description:
          "Instant algorithmic scope calculator adjusting budgets dynamically based on square footage, room typology, and luxury finish packages.",
      },
      {
        icon: "sparkling",
        title: "Curated Spatial Showcase",
        description:
          "High-definition architectural galleries highlighting Beverly Hills penthouses, Bel-Air monolithic kitchens, and Malibu coastal master suites.",
      },
    ],

    results: [
      { value: "450+", label: "Completed Projects" },
      { value: "98.5%", label: "Client Satisfaction" },
      { value: "Winner", label: "Architectural Digest 2026" },
    ],

    testimonial: {
      quote:
        "VivaDecor's digital experience perfectly mirrors the elegance and precision of our architectural craft. The before-and-after slider and cost estimator have increased qualified client consultations tremendously.",
      author: "Elena Rostova",
      role: "Principal Architectural Designer",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    },

    media: {
      images: [
        vivadecorCover,
      ],
    },
    futureWork: [
      "WebXR/Three.js virtual 3D room tour walkthrough for spatial walkthroughs",
      "Real-time material sample tactile selector with 4K PBR material rendering",
    ],
  },
];

export function getProjectById(id) {
  if (!id) return null;
  return projectsData.find((p) => p.id.toLowerCase() === id.toLowerCase()) || null;
}

export function getAdjacentProjects(id) {
  const index = projectsData.findIndex(
    (p) => p.id.toLowerCase() === (id || "").toLowerCase()
  );
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? projectsData[index - 1] : projectsData[projectsData.length - 1];
  const next = index < projectsData.length - 1 ? projectsData[index + 1] : projectsData[0];
  return { prev, next };
}
