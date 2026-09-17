// src/Components/Blog/blogData.js
export const POSTS = [
  {
    slug: "sub-second-lcp-react-angular-core-web-vitals-guide",
    title:
      "Sub-Second LCP in Production: How I Optimised React & Angular Apps to 1.1s Largest Contentful Paint",
    description:
      "A deep-dive technical engineering guide on achieving sub-second LCP (≤1.2s) and 98+ Core Web Vitals on high-traffic React and Angular production applications.",
    author: "Ali Ch",
    publishedAt: "2025-11-12",
    updatedAt: "2025-11-15",
    tags: ["Core Web Vitals", "React", "Angular", "Web Performance", "SEO"],
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    html: `
      <p>In modern web engineering, speed is not just an aesthetic metric—it is direct conversion and search visibility. According to Google's ranking signals, applications that fail the <strong>Core Web Vitals</strong> threshold (LCP &gt; 2.5s, INP &gt; 200ms, CLS &gt; 0.1) suffer immediate ranking degradation. Yet, over 70% of single-page React and Angular applications fail Largest Contentful Paint out of the box due to client-side hydration delays and heavy JavaScript bundles.</p>

      <p>Over the past three years engineering production SPAs, I have refined an end-to-end performance blueprint that consistently drops LCP below <strong>1.2 seconds</strong>. Here is the exact architectural breakdown.</p>

      <h2>1. The Root Cause of Slow LCP in SPAs</h2>
      <p>In traditional client-rendered apps, the browser must follow a cascading waterfall before rendering the main visual element:</p>
      <ol>
        <li>Download HTML shell (usually 200–500 bytes of empty <code>&lt;div id="root"&gt;&lt;/div&gt;</code>).</li>
        <li>Download and parse multi-megabyte JavaScript bundles.</li>
        <li>Execute client framework code and initialize state.</li>
        <li>Trigger async REST API requests to fetch content data.</li>
        <li>Finally render the hero DOM node and trigger the image download.</li>
      </ol>
      <p>This sequential bottleneck turns even a fast 50ms server response into a 3.5s+ user-visible delay.</p>

      <h2>2. The Solution: Critical Resource Prioritization</h2>
      <p>To drop LCP to sub-second speeds, the critical hero asset must load in parallel with the HTML document rather than waiting for script execution.</p>

      <blockquote>
        <strong>Key Rule:</strong> Never allow your primary visual element (Hero image, title banner, or main CTA) to be blocked by non-critical JavaScript.
      </blockquote>

      <p>We implement immediate hero asset preloading directly in the document <code>&lt;head&gt;</code>:</p>
      <pre><code>&lt;!-- Preload hero image with fetchpriority --&gt;
&lt;link
  rel="preload"
  fetchpriority="high"
  as="image"
  type="image/webp"
  href="/assets/images/hero-banner.webp"
/&gt;</code></pre>

      <p>Pair this with the modern <code>&lt;picture&gt;</code> tag serving next-generation <strong>WebP</strong> and <strong>AVIF</strong> formats, combined with explicit <code>width</code> and <code>height</code> dimensions to ensure <strong>Zero Cumulative Layout Shift (CLS ≤ 0.01)</strong>.</p>

      <h2>3. Code Splitting & Route-Level Chunking</h2>
      <p>Instead of shipping a single monolithic bundle, we split by route and interaction boundary using React <code>lazy()</code> and <code>Suspense</code>, or Angular route <code>loadComponent()</code> with standalone components:</p>
      <pre><code>// React dynamic route chunking
const AnalyticsDashboard = lazy(() =>
  import(/* webpackChunkName: "analytics" */ "./features/AnalyticsDashboard")
);

// Angular Standalone route splitting
export const ROUTES: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  }
];</code></pre>

      <h2>4. Results & Measurable ROI</h2>
      <p>Applying this strategy across production web platforms consistently yielded:</p>
      <ul>
        <li><strong>LCP:</strong> Dropped from 3.8s to <strong>1.1s</strong> on mobile 4G.</li>
        <li><strong>INP:</strong> Maintained under <strong>45ms</strong> via deferred non-critical task scheduling.</li>
        <li><strong>Conversion Rate:</strong> Measurable uplift of <strong>+19% to +28%</strong> in checkout flows.</li>
      </ul>

      <p>Need to audit your application's Core Web Vitals? <a href="/services">Explore my frontend performance services →</a> or <a href="/contact">reach out for a full technical audit →</a>.</p>
    `,
  },
  {
    slug: "enterprise-redux-toolkit-rest-api-architecture-guide",
    title:
      "Architecting Scalable Frontends: Redux Toolkit, REST API Interceptors & Zero-Jank State Management",
    description:
      "Step-by-step engineering blueprint for building enterprise React state layers with Redux Toolkit, centralized Axios interceptors, token rotation, and optimistic UI updates.",
    author: "Ali Ch",
    publishedAt: "2025-12-04",
    updatedAt: "2025-12-06",
    tags: ["Redux", "React", "REST APIs", "TypeScript", "Architecture"],
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
    html: `
      <p>As web applications expand beyond initial prototypes into large-scale enterprise platforms, state management is often the first casualty. Uncontrolled prop-drilling, duplicate API queries, race conditions, and out-of-sync caching lead to UI flickering and unpredictable bugs.</p>

      <p>Building clean, scalable frontend architecture requires a disciplined approach to state isolation: distinguishing between <strong>Server Cache State</strong>, <strong>Global UI State</strong>, and <strong>Ephemeral Form State</strong>.</p>

      <h2>1. Structuring Slices with Redux Toolkit</h2>
      <p>Modern Redux Toolkit (RTK) eliminates legacy boilerplate with streamlined slice definitions and immutable state mutations backed by Immer:</p>
      <pre><code>import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(\`/users/\${userId}\`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Failed to load profile');
    }
  }
);</code></pre>

      <h2>2. Robust REST API Architecture with Centralized Interceptors</h2>
      <p>A production-grade API client handles authentication token expiration automatically without interrupting the user experience. By implementing an Axios interceptor queue, expired JWTs trigger a seamless refresh handshake in the background:</p>
      <pre><code>// Centralized interceptor with auto-refresh queue
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { newToken } = await refreshAuthToken();
        originalRequest.headers['Authorization'] = \`Bearer \${newToken}\`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        store.dispatch(logoutAction());
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);</code></pre>

      <h2>3. Optimistic UI Updates for Lightning-Fast UX</h2>
      <p>Users shouldn't have to wait 300ms–800ms for a roundtrip network request just to see a toggle switch or like button update. With optimistic updates, the UI state immediately reflects user intent while quietly synchronizing with the backend, rolling back gracefully only if the server returns an error.</p>

      <blockquote>
        <strong>Result:</strong> Zero perceived latency, seamless user feedback, and robust error boundaries preventing cascading app crashes.
      </blockquote>

      <p>Looking to structure a rock-solid state management layer for your engineering team? <a href="/projects">Check out my recent production case studies →</a> or <a href="/contact">get in touch directly →</a>.</p>
    `,
  },
  {
    slug: "high-converting-shopify-frontend-liquid-customization-guide",
    title:
      "High-Converting E-Commerce Frontends: Custom Shopify Liquid, Headless Speed & Fast Checkout UX",
    description:
      "How to engineer ultra-fast Shopify storefronts and e-commerce web applications that boost conversion rates and pass Core Web Vitals with flying colors.",
    author: "Ali Ch",
    publishedAt: "2026-01-18",
    updatedAt: "2026-01-20",
    tags: ["Shopify", "E-Commerce", "Liquid", "Conversion Rate", "Frontend"],
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    html: `
      <p>For high-growth e-commerce brands and luxury retailers, website performance directly impacts the bottom line. Research from Amazon and Google demonstrates that every <strong>100ms decrease in page load speed translates to a 1% increase in revenue</strong>. Yet standard Shopify and WooCommerce themes are frequently overloaded with 20+ conflicting third-party app scripts, causing sluggish browsing and high cart abandonment.</p>

      <p>Here is how I engineer custom Shopify Liquid themes and frontend architectures designed specifically for conversion velocity and sub-second load times.</p>

      <h2>1. The Script Diet: Eliminating App Bloat</h2>
      <p>The biggest performance killer in e-commerce is the reliance on apps for basic features like reviews, currency selectors, and quantity badges. Each app injects its own scripts, stylesheets, and external network requests.</p>
      <ul>
        <li><strong>Native Liquid Replacements:</strong> Replace app-driven badges and popups with native Liquid markup and lightweight CSS.</li>
        <li><strong>Faceted Filtering via Storefront API:</strong> Deliver instant product filtering without page reloads using lightweight fetch calls against Shopify's GraphQL API.</li>
        <li><strong>Resource Pre-warming:</strong> Speculatively prefetch checkout scripts when the customer hovers over the "Proceed to Checkout" button.</li>
      </ul>

      <h2>2. Ajax Cart Drawer with Optimistic Subtotaling</h2>
      <p>Full page reloads on "Add to Cart" kill conversion momentum. I implement custom flyout cart drawers featuring:</p>
      <ol>
        <li><strong>Instant visual feedback:</strong> The cart opens within 16ms of click.</li>
        <li><strong>Dynamic Free Shipping Bar:</strong> Calculates remaining spend in real-time to increase Average Order Value (AOV).</li>
        <li><strong>One-Click Upsells:</strong> Recommends matching accessories directly inside the drawer without cluttering the screen.</li>
      </ol>

      <h2>3. Mobile-First Sticky Checkout Buttons</h2>
      <p>Over 75% of e-commerce transactions occur on mobile devices. Ensuring the primary <em>"Add to Cart"</em> or <em>"Buy Now"</em> button remains thumb-accessible regardless of scroll position significantly reduces drop-offs.</p>

      <blockquote>
        <strong>Proven Impact:</strong> In recent store builds like <a href="/projects">Kyrozza</a> and luxury retail platforms, custom lightweight frontends increased mobile conversions by <strong>24%</strong> while achieving <strong>95+ Lighthouse scores</strong>.
      </blockquote>

      <p>Need a custom Shopify theme or headless e-commerce store that actually converts? <a href="/services">View e-commerce frontend services →</a> or <a href="/contact">schedule a scoping session →</a>.</p>
    `,
  },
  {
    slug: "accessible-design-systems-tailwind-typescript-wcag22",
    title:
      "Enterprise Design Systems: Building WCAG 2.2 AA Accessible Components with Tailwind CSS & TypeScript",
    description:
      "Practical implementation guide to crafting reusable, type-safe, and fully accessible component libraries in React using Tailwind CSS and WCAG 2.2 standards.",
    author: "Ali Ch",
    publishedAt: "2026-02-10",
    updatedAt: "2026-02-12",
    tags: ["Design Systems", "Accessibility", "Tailwind CSS", "TypeScript", "UI/UX"],
    cover:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
    html: `
      <p>In modern web development, accessibility is frequently treated as an afterthought—addressed only after an audit or legal inquiry. However, building accessible interfaces from day one is not only ethically necessary, but it also improves SEO semantic crawlability and produces cleaner, more maintainable code.</p>

      <p>With the release of <strong>WCAG 2.2</strong>, requirements around focus appearance, draggable alternatives, and target sizing have become strictly defined. Here is how I architect modular, accessible design systems using <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.</p>

      <h2>1. The Compound Component Architecture</h2>
      <p>Avoid monolithic components with dozens of conflicting boolean props (e.g. <code>&lt;Modal isOpen isAlert hasCloseButton customHeader ... /&gt;</code>). Instead, use the compound component pattern to grant parent components clean semantic composition:</p>
      <pre><code>// Clean semantic compound composition
&lt;Dialog open={isOpen} onClose={handleClose}&gt;
  &lt;Dialog.Backdrop /&gt;
  &lt;Dialog.Panel&gt;
    &lt;Dialog.Title&gt;Confirm Action&lt;/Dialog.Title&gt;
    &lt;Dialog.Description&gt;
      Are you sure you want to proceed with this update?
    &lt;/Dialog.Description&gt;
    &lt;Dialog.Actions&gt;
      &lt;Button variant="ghost" onClick={handleClose}&gt;Cancel&lt;/Button&gt;
      &lt;Button variant="primary" onClick={handleConfirm}&gt;Confirm&lt;/Button&gt;
    &lt;/Dialog.Actions&gt;
  &lt;/Dialog.Panel&gt;
&lt;/Dialog&gt;</code></pre>

      <h2>2. Managing Focus Traps and Keyboard Traversal</h2>
      <p>An accessible modal must trap focus within its boundaries so keyboard and screen-reader users cannot tab into background content:</p>
      <ul>
        <li><strong>Focus Trap:</strong> Automatically move focus to the first focusable element upon opening.</li>
        <li><strong>Escape Listener:</strong> Close the modal immediately when the <code>Escape</code> key is pressed.</li>
        <li><strong>Focus Restoration:</strong> Return focus precisely to the triggering button when the dialog closes.</li>
      </ul>

      <h2>3. Design Tokens with Tailwind CSS & Custom Properties</h2>
      <p>To support seamless Dark & Light theme switching with zero flash of unstyled content (FOUC), establish semantic color tokens mapped to CSS variables:</p>
      <pre><code>/* Global semantic tokens */
:root {
  --bg-surface: #ffffff;
  --text-primary: #111827;
  --border-subtle: #e5e7eb;
}

[data-theme="dark"] {
  --bg-surface: #0f172a;
  --text-primary: #f8fafc;
  --border-subtle: #1e293b;
}</code></pre>

      <h2>4. Automated Accessibility Testing</h2>
      <p>We enforce WCAG 2.2 AA standards at every commit using automated testing pipelines:</p>
      <ul>
        <li><strong>@axe-core/react:</strong> Real-time console warnings during local development.</li>
        <li><strong>Jest / Vitest + jest-axe:</strong> Unit tests checking for missing ARIA attributes and invalid landmarks.</li>
        <li><strong>Lighthouse CI:</strong> Mandatory 100% accessibility score before production merges.</li>
      </ul>

      <p>Building a design system or modernizing your web app's UI/UX? <a href="/about">Learn more about my technical background →</a> or <a href="/contact">reach out to collaborate →</a>.</p>
    `,
  },
];
