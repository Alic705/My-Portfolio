export const projectsData = [
  {
    id: "proj-01",
    title: "Project Velocity",
    shortDescription:
      "A high-performance marketing website for a SaaS company, built with Next.js for optimal speed and SEO.",
    coverImage: "https://i.pinimg.com/1200x/8d/aa/13/8daa13976583e745739b57d005295e49.jpg",
    techStack: ["Next.js", "React", "TypeScript", "Vercel"],
    liveUrl: "#",
    codeUrl: "#",

    /* NEW */
    heroTagline: "Sub-second loads, CMS freedom, and SEO that converts.",
    timeline: "2 months",
    role: "Frontend Lead",
    tools: ["Next.js", "TypeScript", "Contentful", "Vercel"],

    challenge:
      "The client's existing marketing site was slow, had a high bounce rate (>70%), and was difficult to update.",
    processSteps: [
      { title: "Discovery & Strategy", description: "Analyzed bottlenecks, mapped user journeys and KPIs." },
      { title: "Development & CMS", description: "Reusable components + Contentful integration." },
      { title: "Performance", description: "Image optimization, SSG, code-splitting." },
      { title: "Deploy & Train", description: "Vercel deploy + marketing team onboarding." },
    ],

    /* NEW */
    features: [
      { icon: "⚡", title: "SSG + ISR", description: "Near-instant page loads with smart revalidation." },
      { icon: "🧩", title: "Component Library", description: "Consistent UI with scalable building blocks." },
      { icon: "🧠", title: "Headless CMS", description: "Marketing edits content without dev time." },
    ],

    solution:
      "Statically generated Next.js site with a clean component system and Contentful-backed content model.",
    results: [
      { value: "98/100", label: "Lighthouse Score", percent: 98 },
      { value: "-80%", label: "Bounce Rate", percent: 80 },
      { value: "+300%", label: "Lead Conversions", /* no percent to show raw */ },
    ],

    /* NEW */
    testimonial: {
      quote:
        "The new website is incredibly fast and transformed how we manage content. Leads skyrocketed.",
      author: "Jane Doe, CEO of Velocity",
      avatar: "https://i.pravatar.cc/150?img=5",
    },

    /* NEW */
    media: {
      videoUrl: "", // optional mp4 if you have it
      images: [
        "https://images.unsplash.com/photo-1520371508851-2c951a174215?w=1200&q=80&auto=format",
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80&auto=format",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80&auto=format",
      ],
    },

    /* NEW */
    futureWork: [
      "A/B tests on hero messaging to improve CTR.",
      "Personalized content blocks via user segments.",
      "Add multilingual support with i18n routing.",
    ],
  },

  /* ----- Shorter examples for the other two ----- */
  {
    id: "proj-02",
    title: "Quantum Dashboard",
    shortDescription: "Enterprise analytics dashboard with real-time data & complex filtering.",
    coverImage: "https://i.pinimg.com/736x/fc/54/fb/fc54fb998c3ea5f4fac298c63d58ee58.jpg",
    techStack: ["Angular", "TypeScript", "D3.js", "NgRx"],
    liveUrl: "#",
    codeUrl: "#",
    heroTagline: "From noisy streams to insight in milliseconds.",
    timeline: "3.5 months",
    role: "Frontend Engineer",
    tools: ["Angular", "NgRx", "D3.js", "Jasmine"],
    challenge:
      "Thousands of real-time points needed reliable, fast visualization with advanced filtering.",
    processSteps: [
      { title: "Requirements", description: "Mapped data points & analyst workflows." },
      { title: "Architecture", description: "NgRx for predictable async flows." },
      { title: "Charts", description: "Custom D3 components for pro users." },
      { title: "Quality", description: "Extensive tests with Karma/Jasmine." },
    ],
    features: [
      { icon: "📊", title: "Custom Charts", description: "Tailored visualizations for financial KPIs." },
      { icon: "🔁", title: "Real-time Streams", description: "WebSocket-backed UI updates." },
      { icon: "🧭", title: "Advanced Filters", description: "Compose multi-dimension filters easily." },
    ],
    solution:
      "Modular Angular SPA with NgRx and D3 for performant, real-time visualizations.",
    results: [
      { value: "50ms", label: "UI Latency" },
      { value: "10k+", label: "Data Points" },
      { value: "-95%", label: "Reported Bugs", percent: 95 },
    ],
    testimonial: {
      quote: "Indispensable for our team—fast, predictable, and reliable.",
      author: "John Smith, Head of Analytics",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    media: {
      images: [
        "https://images.unsplash.com/photo-1551281044-8b59f26db41f?w=1200&q=80&auto=format",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format",
      ],
    },
    futureWork: ["Drill-down reports", "Export to CSV/PDF", "Alerting & thresholds"],
  },

  {
    id: "proj-03",
    title: "E-Commerce Platform",
    shortDescription: "Full-featured store with custom cart and secure checkout.",
    coverImage: "https://i.pinimg.com/1200x/b5/f4/8e/b5f48ea8142b932cd58ad9ff8833fc16.jpg",
    techStack: ["React", "Redux", "Node.js", "Stripe"],
    liveUrl: "#",
    codeUrl: "#",
    heroTagline: "Frictionless checkout that customers love.",
    timeline: "10 weeks",
    role: "Full-stack Developer",
    tools: ["React", "Redux Toolkit", "Node.js", "Stripe"],
    challenge:
      "Build a fast store that scales with large inventory and keeps checkout secure & simple.",
    processSteps: [
      { title: "Flows", description: "Mapped discovery → checkout with minimal friction." },
      { title: "API", description: "REST + schema for products, users, orders." },
      { title: "Frontend", description: "Interactive UI + robust state via RTK." },
      { title: "Payments", description: "Stripe integration with error handling." },
    ],
    features: [
      { icon: "🛒", title: "Smart Cart", description: "Persistent cart with coupons & inventory checks." },
      { icon: "🔎", title: "Filters", description: "Fast, multi-facet product filtering." },
      { icon: "🔒", title: "Secure Pay", description: "PCI-aware Stripe flows." },
    ],
    solution:
      "React + Redux frontend, Node backend, Stripe payments. Emphasis on speed & trust.",
    results: [
      { value: "+25%", label: "Conversion Rate", percent: 25 },
      { value: "-40%", label: "Cart Abandonment", percent: 40 },
      { value: "1.2s", label: "Avg. Load" },
    ],
    testimonial: {
      quote: "Sales up and happier customers—the UI is clean and fast.",
      author: "Emily White, Store Owner",
      avatar: "https://i.pravatar.cc/150?img=31",
    },
    media: {
      images: [
        "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=1200&q=80&auto=format",
        "https://images.unsplash.com/photo-1515165562835-c3b8c8e7dfd9?w=1200&q=80&auto=format",
      ],
    },
    futureWork: ["Wishlist & reminders", "Loyalty points", "AI recommendations"],
  },
];
