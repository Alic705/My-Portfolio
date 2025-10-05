// src/pages/blog/blogData.js
export const POSTS = [
  {
    slug: "react-vs-angular-seo-2025-ssr-ssg-core-web-vitals",
    title:
      "React vs Angular for SEO in 2025: SSR, SSG, and Core Web Vitals That Actually Move the Needle",
    description:
      "A practical comparison of React and Angular for SEO—covering SSR/SSG, routing, structured data, and Core Web Vitals.",
    author: "Ali Ch",
    publishedAt: "2025-08-15",
    updatedAt: "2025-08-20",
    tags: ["React", "Angular", "SEO", "SSR", "SSG", "Core Web Vitals"],
    cover:
      "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?t=st=1757239642~exp=1757243242~hmac=decfd0f905944feb64e7714f3f771e3086ae7c132f43cb05c0085ebf6cfa789f&w=2000",
    html: `
      <p>If you’re choosing between <strong>React</strong> and
      <strong>Angular</strong> in 2025 with <em>search visibility</em> in mind,
      the critical topics are <strong>SSR/SSG</strong>, <strong>routing</strong>,
      <strong>structured data</strong>, and <strong>Core Web Vitals</strong>.</p>

      <h2>Rendering approaches that index</h2>
      <p><strong>React:</strong> Next.js offers SSR, SSG, and ISR out of the box.
      You can stream HTML, split bundles, and add metadata per route easily.</p>
      <p><strong>Angular:</strong> Angular Universal delivers SSR with good DX.
      Pair it with pre-rendering for brochure content and hydration for apps.</p>

      <h2>Core Web Vitals priorities</h2>
      <ul>
        <li><strong>LCP:</strong> Serve a real hero image, compress aggressively, and
        warm critical routes via prefetch.</li>
        <li><strong>INP:</strong> Avoid long tasks. Defer non-critical work and keep
        handlers light.</li>
        <li><strong>CLS:</strong> Always reserve space with width/height or aspect-ratio.</li>
      </ul>

      <h2>Routing, sitemaps, and structured data</h2>
      <p>Use clean, human-readable paths. Generate sitemaps and canonical tags.
      For rich results, embed JSON-LD per page (e.g., <code>BlogPosting</code>,
      <code>FAQPage</code>). Validate with Search Console.</p>

      <h2>Decision cheat-sheet</h2>
      <ul>
        <li><strong>Marketing + content velocity?</strong> React/Next.js with SSG/ISR.</li>
        <li><strong>Large enterprise SPA?</strong> Angular Universal + disciplined state.</li>
      </ul>

      <p>Either way, the winners prioritize <strong>fast first paint</strong>,
      <strong>predictable interactivity</strong>, and <strong>semantic HTML</strong>.
      Need help? <a href="/contact">Let’s discuss your stack →</a></p>
    `,
  },
  {
    slug: "core-web-vitals-audit-checklist-react-angular-2025",
    title:
      "Core Web Vitals Audit Checklist (2025): React & Angular Teams, Read This First",
    description:
      "My field-tested checklist to push LCP/INP/CLS into the green for modern React & Angular apps.",
    author: "Ali Ch",
    publishedAt: "2025-08-28",
    updatedAt: "2025-08-30",
    tags: ["Performance", "Core Web Vitals", "React", "Angular", "Audit"],
    cover:
      "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?t=st=1757239728~exp=1757243328~hmac=9b33636426b71fe161a94d276b5e42efc01b7dd700a840bdd512c6e4c19b4ae5&w=2000",
    html: `
      <p>This is the exact checklist I run in audits before touching any code.</p>

      <h2>1) Images</h2>
      <ul>
        <li>Serve next-gen formats (AVIF/WebP). Add <code>width/height</code> or <code>aspect-ratio</code>.</li>
        <li>Lazy-load offscreen images and prefetch hero assets.</li>
      </ul>

      <h2>2) JavaScript</h2>
      <ul>
        <li>Eliminate unused code. Split by route and hydrate minimally.</li>
        <li>Defer non-critical work; cap long tasks &lt; 50ms.</li>
      </ul>

      <h2>3) CSS</h2>
      <ul>
        <li>Inline above-the-fold CSS. Purge unused rules.</li>
        <li>Prefer <code>content-visibility</code> for below-the-fold containers.</li>
      </ul>

      <h2>4) Fonts</h2>
      <ul>
        <li>Use <code>font-display: swap</code>. Preload critical font files.</li>
      </ul>

      <h2>5) Server</h2>
      <ul>
        <li>HTTP/2 or HTTP/3 + CDN. Cache policy with immutable assets.</li>
      </ul>

      <p>Ship this and you’ll often see immediate wins.
      Need a formal audit? <a href="/services">See services →</a></p>
    `,
  },
  {
    slug: "accessible-design-systems-react-angular-wcag-22",
    title:
      "Accessible Design Systems in React & Angular (WCAG 2.2 AA): Practical Patterns",
    description:
      "Practical patterns for WCAG 2.2 AA components: focus, keyboard, semantics, and screen readers.",
    author: "Ali Ch",
    publishedAt: "2025-09-02",
    updatedAt: "2025-09-02",
    tags: ["Accessibility", "WCAG 2.2", "Design Systems", "React", "Angular"],
    cover:
      "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169847.jpg?t=st=1757239772~exp=1757243372~hmac=ce09df79434971475cdfbf76fb8c859a0875cf29b9bfdb8887e49f899fac984f&w=2000",
    html: `
      <p>Accessibility scales when it’s baked into the system, not bolted on.</p>

      <h2>Focus & keyboard</h2>
      <ul>
        <li>Every interactive component supports keyboard and visible focus rings.</li>
        <li>Manage focus on open/close (modals, menus) and trap focus where needed.</li>
      </ul>

      <h2>Semantics</h2>
      <ul>
        <li>Use native elements first (<code>button</code>, <code>details</code>, <code>summary</code>).</li>
        <li>Add accurate labels (<code>aria-label</code>/<code>aria-labelledby</code>).</li>
      </ul>

      <h2>Announcements</h2>
      <ul>
        <li>Use polite live regions for async updates.</li>
      </ul>

      <h2>Testing</h2>
      <ul>
        <li>Include automated checks (axe), manual screen-reader passes, and color-contrast tests.</li>
      </ul>

      <p>Build it once, reuse it everywhere. See real implementations in my
      <a href="/projects">case studies</a>.</p>
    `,
  },
];
