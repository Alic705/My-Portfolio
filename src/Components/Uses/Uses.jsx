import React, { useMemo, useState } from "react";
import styles from "./Uses.module.css";

/* =========================================
   Data
   ========================================= */
export const DATA = [
  // ---------- Development ----------
  {
    id: "vscode",
    category: "Development",
    title: "VS Code",
    description:
      "My daily editor for React & Angular work. Extensions, debugging, and Git integrations keep delivery fast.",
    tags: ["Editor", "Extensions", "Debugger"],
    os: ["macOS", "Windows", "Linux"],
    link: "https://code.visualstudio.com/",
    addedAt: "2024-10-10",
    install: {
      macOS: "brew install --cask visual-studio-code",
      Windows: "winget install Microsoft.VisualStudioCode",
      Linux: "sudo snap install code --classic",
    },
  },
  {
    id: "node",
    category: "Development",
    title: "Node.js (via nvm)",
    description:
      "Manage multiple Node versions cleanly for SSR, tooling, and APIs.",
    tags: ["Runtime", "nvm"],
    os: ["macOS", "Windows", "Linux"],
    link: "https://nodejs.org/",
    addedAt: "2024-10-10",
    install: {
      macOS:
        "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash && source ~/.zshrc && nvm install --lts",
      Linux:
        "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash && source ~/.bashrc && nvm install --lts",
      Windows:
        "winget install CoreyButler.NVMforWindows && nvm install lts && nvm use lts",
    },
  },
  {
    id: "git",
    category: "Development",
    title: "Git",
    description:
      "Version control for everything—feature branches, PRs, and CI triggers.",
    tags: ["VCS"],
    os: ["macOS", "Windows", "Linux"],
    link: "https://git-scm.com/",
    addedAt: "2024-10-09",
    install: {
      macOS: "brew install git",
      Windows: "winget install Git.Git",
      Linux: "sudo apt-get update && sudo apt-get install -y git",
    },
  },
  {
    id: "pnpm",
    category: "Development",
    title: "pnpm",
    description:
      "Fast, disk-efficient package manager for monorepos and app workspaces.",
    tags: ["Package Manager"],
    os: ["macOS", "Windows", "Linux"],
    link: "https://pnpm.io/",
    addedAt: "2024-08-11",
    install: {
      macOS: "brew install pnpm",
      Windows: "npm i -g pnpm",
      Linux: "npm i -g pnpm",
    },
  },
  {
    id: "docker",
    category: "Development",
    title: "Docker Desktop",
    description: "Local containers for parity with production services.",
    tags: ["Containers"],
    os: ["macOS", "Windows", "Linux"],
    link: "https://www.docker.com/products/docker-desktop/",
    addedAt: "2024-05-01",
    install: {
      macOS: "brew install --cask docker",
      Windows: "winget install Docker.DockerDesktop",
      Linux: "sudo snap install docker",
    },
  },
  {
    id: "postman",
    category: "Development",
    title: "Postman",
    description: "API testing & collections for React/Angular backends.",
    tags: ["API", "Testing"],
    os: ["macOS", "Windows", "Linux"],
    link: "https://www.postman.com/",
    addedAt: "2024-06-12",
    install: {
      macOS: "brew install --cask postman",
      Windows: "winget install Postman.Postman",
      Linux: "sudo snap install postman",
    },
  },
  {
    id: "insomnia",
    category: "Development",
    title: "Insomnia",
    description: "Lightweight REST/GraphQL client—great for contract testing.",
    tags: ["API", "GraphQL"],
    os: ["macOS", "Windows", "Linux"],
    link: "https://insomnia.rest/",
    addedAt: "2024-08-22",
    install: {
      macOS: "brew install --cask insomnia",
      Windows: "winget install Kong.Insomnia",
      Linux: "sudo snap install insomnia",
    },
  },
  {
    id: "iterm",
    category: "Development",
    title: "iTerm2",
    description: "My preferred macOS terminal with profiles & panes.",
    tags: ["Terminal"],
    os: ["macOS"],
    link: "https://iterm2.com/",
    addedAt: "2024-07-01",
    install: { macOS: "brew install --cask iterm2" },
  },
  {
    id: "warp",
    category: "Development",
    title: "Warp",
    description: "Modern, GPU-accelerated terminal to speed daily workflows.",
    tags: ["Terminal"],
    os: ["macOS", "Linux"],
    link: "https://www.warp.dev/",
    addedAt: "2024-06-20",
    install: {
      macOS: "brew install --cask warp",
      Linux:
        "curl -sS https://packagecloud.io/install/repositories/warp/warp/script.deb.sh | sudo bash && sudo apt install warp-terminal",
    },
  },
  {
    id: "ohmyzsh",
    category: "Development",
    title: "Oh My Zsh",
    description: "Zsh framework with themes & plugins for productive shells.",
    tags: ["Shell"],
    os: ["macOS", "Linux"],
    link: "https://ohmyz.sh/",
    addedAt: "2024-08-20",
    install: {
      macOS:
        'sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"',
      Linux:
        'sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"',
    },
  },
  {
    id: "tableplus",
    category: "Development",
    title: "TablePlus",
    description: "Fast GUI for Postgres/MySQL/SQLite—handy during sprints.",
    tags: ["DB", "GUI"],
    os: ["macOS", "Windows"],
    link: "https://tableplus.com/",
    addedAt: "2024-04-18",
    install: {
      macOS: "brew install --cask tableplus",
      Windows: "winget install TablePlus.TablePlus",
    },
  },
  {
    id: "mongodb-compass",
    category: "Development",
    title: "MongoDB Compass",
    description: "Visual explorer for MongoDB collections.",
    tags: ["DB", "MongoDB"],
    os: ["macOS", "Windows", "Linux"],
    link: "https://www.mongodb.com/products/compass",
    addedAt: "2024-03-02",
    install: {
      macOS: "brew install --cask mongodb-compass",
      Windows: "winget install MongoDB.Compass",
      Linux: "sudo snap install mongodb-compass",
    },
  },
  {
    id: "redisinsight",
    category: "Development",
    title: "RedisInsight",
    description: "Admin GUI for Redis—great for caching strategy.",
    tags: ["DB", "Redis"],
    os: ["macOS", "Windows", "Linux"],
    link: "https://redis.io/insight/",
    addedAt: "2024-07-30",
    install: {
      macOS: "brew install --cask redisinsight",
      Windows: "winget install Redis.RedisInsight",
      Linux: "sudo snap install redisinsight",
    },
  },
  {
    id: "sentry-cli",
    category: "Development",
    title: "Sentry CLI",
    description: "Release & sourcemap uploads for reliable error tracking.",
    tags: ["Monitoring"],
    os: ["macOS", "Windows", "Linux"],
    link: "https://docs.sentry.io/cli/",
    addedAt: "2024-05-30",
    install: {
      macOS: "brew install getsentry/tools/sentry-cli",
      Windows: "choco install sentry-cli",
      Linux: "curl -sL https://sentry.io/get-cli/ | bash",
    },
  },

  // ---------- Design ----------
  {
    id: "figma",
    category: "Design",
    title: "Figma",
    description:
      "Wireframes to hi-fi prototypes; source of truth for components.",
    tags: ["UI/UX", "Prototyping"],
    os: ["macOS", "Windows", "Linux"],
    link: "https://figma.com/",
    addedAt: "2024-09-01",
    install: {
      macOS: "brew install --cask figma",
      Windows: "winget install Figma.Figma",
      Linux: "sudo snap install figma-linux",
    },
  },
  {
    id: "notion",
    category: "Design",
    title: "Notion",
    description: "Docs, specs, and lightweight PM in one place.",
    tags: ["Notes", "Docs"],
    os: ["macOS", "Windows", "Linux"],
    link: "https://notion.so/",
    addedAt: "2024-07-15",
    install: {
      macOS: "brew install --cask notion",
      Windows: "winget install Notion.Notion",
      Linux: "sudo snap install notion-snap",
    },
  },
  {
    id: "obsidian",
    category: "Design",
    title: "Obsidian",
    description: "Local-first markdown knowledge base for ideas and snippets.",
    tags: ["Notes", "Markdown"],
    os: ["macOS", "Windows", "Linux"],
    link: "https://obsidian.md/",
    addedAt: "2024-07-05",
    install: {
      macOS: "brew install --cask obsidian",
      Windows: "winget install Obsidian.Obsidian",
      Linux: "sudo snap install obsidian --classic",
    },
  },
  {
    id: "cleanshot",
    category: "Design",
    title: "CleanShot X",
    description: "The best screenshots on macOS with instant markup/recording.",
    tags: ["Screenshots", "Video"],
    os: ["macOS"],
    link: "https://cleanshot.com/",
    addedAt: "2024-02-05",
    install: { macOS: "brew install --cask cleanshot" },
  },
  {
    id: "loom",
    category: "Design",
    title: "Loom",
    description: "Async video explainers for teammates and clients.",
    tags: ["Video", "Async"],
    os: ["macOS", "Windows"],
    link: "https://www.loom.com/",
    addedAt: "2024-01-18",
    install: {
      macOS: "brew install --cask loom",
      Windows: "winget install Loom.Loom",
    },
  },
  {
    id: "raycast",
    category: "Design",
    title: "Raycast",
    description: "Command palette for everything—fast launcher & scripts.",
    tags: ["Launcher", "Productivity"],
    os: ["macOS"],
    link: "https://www.raycast.com/",
    addedAt: "2024-07-09",
    install: { macOS: "brew install --cask raycast" },
  },

  // ---------- Hardware ----------
  {
    id: "mbp",
    category: "Hardware",
    title: 'MacBook Pro 14" (M1 Pro)',
    description: "Great thermals and battery for long React/Angular sessions.",
    tags: ["Laptop"],
    os: ["macOS"],
    link: "https://apple.com/macbook-pro-14-and-16/",
    addedAt: "2023-12-01",
  },
  {
    id: "dell-monitor",
    category: "Hardware",
    title: "Dell UltraSharp U2721DE",
    description: "27” 1440p display with excellent color for UI work.",
    tags: ["Monitor"],
    os: ["All"],
    link: "https://www.dell.com/",
    addedAt: "2023-11-15",
  },
  {
    id: "keychron",
    category: "Hardware",
    title: "Keychron K2",
    description: "Compact mechanical keyboard with tactile switches.",
    tags: ["Keyboard"],
    os: ["All"],
    link: "https://www.keychron.com/",
    addedAt: "2023-11-10",
  },
  {
    id: "mxmaster",
    category: "Hardware",
    title: "Logitech MX Master 3S",
    description: "Ergonomic mouse with programmable buttons.",
    tags: ["Mouse"],
    os: ["All"],
    link: "https://www.logitech.com/",
    addedAt: "2023-11-05",
  },
  {
    id: "speakers",
    category: "Hardware",
    title: "Creative Pebble V3",
    description: "Clean desktop speakers with USB-C.",
    tags: ["Audio"],
    os: ["All"],
    link: "https://creative.com/",
    addedAt: "2023-10-20",
  },
];

const CATEGORIES = ["Development", "Design", "Hardware"];
const OS = ["All", "macOS", "Windows", "Linux"];
const SORTS = [
  { id: "az", label: "A → Z" },
  { id: "recent", label: "Recently added" },
];

/* ============ Small helpers ============ */
const OsGlyph = ({ o }) => (o === "macOS" ? "" : o === "Windows" ? "⊞" : "🐧");

/* ============ Card ============ */
function ToolCard({ item, osFilter, onCopied }) {
  const cmd =
    osFilter === "All"
      ? item.install?.macOS || item.install?.Windows || item.install?.Linux
      : item.install?.[osFilter];

  const copy = async () => {
    if (!cmd) return;
    try {
      await navigator.clipboard.writeText(cmd);
      onCopied(`Copied install for ${item.title}`);
    } catch {
      onCopied("Copied to clipboard");
      alert("Install command:\n\n" + cmd);
    }
  };

  return (
    <article className={styles.card}>
      <header className={styles.cardHead}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        {item.link && (
          <a
            className={styles.cardLink}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${item.title} website`}
          >
            Visit ↗
          </a>
        )}
      </header>

      <p className={styles.cardDesc}>{item.description}</p>

      <div className={styles.metaRow}>
        <ul className={styles.tags}>
          {item.tags?.map((t) => (
            <li key={t} className={styles.tag}>
              {t}
            </li>
          ))}
        </ul>
        <div className={styles.osBadges} aria-label="Supported OS">
          {["macOS", "Windows", "Linux"].map((o) => (
            <span
              key={o}
              className={`${styles.os} ${
                item.os.includes(o) ? styles.osOn : styles.osOff
              }`}
              title={item.os.includes(o) ? `Supports ${o}` : `No ${o} build`}
            >
              <OsGlyph o={o} />
            </span>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        {cmd ? (
          <button className={styles.copyBtn} onClick={copy}>
            Copy install
          </button>
        ) : (
          <span className={styles.copyBtnDisabled} aria-disabled="true">
            No CLI
          </span>
        )}
      </div>
    </article>
  );
}

/* ============ Filter rail ============ */
function FilterRail({
  activeCat,
  setActiveCat,
  os,
  setOS,
  q,
  setQ,
  sort,
  setSort,
}) {
  return (
    <aside className={styles.rail}>
      <h2 className={styles.railTitle}>Filters</h2>

      <div className={styles.block}>
        <label className={styles.label} htmlFor="search">
          Search
        </label>
        <input
          id="search"
          className={styles.search}
          placeholder="Search tools, tags…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className={styles.block}>
        <div className={styles.label}>Category</div>
        <div className={styles.pills}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`${styles.pill} ${
                activeCat === c ? styles.pillOn : ""
              }`}
              onClick={() => setActiveCat(c)}
              aria-pressed={activeCat === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.block}>
        <div className={styles.label}>OS</div>
        <div className={styles.pillsCompact}>
          {OS.map((o) => (
            <button
              key={o}
              className={`${styles.pillSmall} ${os === o ? styles.pillOn : ""}`}
              onClick={() => setOS(o)}
              aria-pressed={os === o}
            >
              {o}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.block}>
        <label className={styles.label} htmlFor="sort">
          Sort
        </label>
        <select
          id="sort"
          className={styles.select}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          {SORTS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.block}>
        <div className={styles.smallNote}>
          Tip: See <a href="/services">Services</a> or{" "}
          <a href="/case-studies">Case Studies</a> for how these tools show up
          in real projects.
        </div>
      </div>
    </aside>
  );
}

/* ============ Page ============ */
export default function Uses() {
  const [activeCat, setActiveCat] = useState("Development");
  const [os, setOS] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("az");
  const [toast, setToast] = useState("");

  const list = useMemo(() => {
    let out = DATA.filter((d) => d.category === activeCat);
    if (os !== "All") out = out.filter((d) => d.os.includes(os));
    if (q) {
      const s = q.toLowerCase();
      out = out.filter(
        (d) =>
          d.title.toLowerCase().includes(s) ||
          d.description.toLowerCase().includes(s) ||
          d.tags?.some((t) => t.toLowerCase().includes(s))
      );
    }
    if (sort === "az") {
      out.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      out.sort(
        (a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
      );
    }
    return out;
  }, [activeCat, os, q, sort]);

  // --- SEO computed values ---
  const baseUrl = "https://your-domain.com";
  const canonical = `${baseUrl}/uses`;
  const lastUpdated = useMemo(
    () =>
      DATA.reduce(
        (max, d) =>
          Math.max(max, new Date(d.addedAt || "2000-01-01").getTime()),
        0
      ),
    []
  );

  // Build JSON-LD for ItemList (SoftwareApplication for apps; Product for hardware)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: DATA.map((d, i) => {
      const isHardware = d.category === "Hardware";
      const brandGuess = d.title.includes("MacBook")
        ? "Apple"
        : d.title.includes("Dell")
        ? "Dell"
        : d.title.includes("Keychron")
        ? "Keychron"
        : d.title.includes("Logitech")
        ? "Logitech"
        : d.title.includes("Creative")
        ? "Creative"
        : d.title.split(" ")[0];

      return {
        "@type": isHardware ? "Product" : "SoftwareApplication",
        position: i + 1,
        name: d.title,
        description: d.description,
        url: d.link,
        ...(isHardware
          ? { brand: brandGuess, category: "ComputerHardware" }
          : {
              operatingSystem: d.os.join(", "),
              applicationCategory:
                d.category === "Design"
                  ? "DesignApplication"
                  : "DeveloperApplication",
            }),
      };
    }),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "My Toolkit /uses",
    url: canonical,
    dateModified: new Date(lastUpdated).toISOString(),
    description:
      "The hardware and software I rely on to ship fast, accessible React & Angular applications.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "My Toolkit /uses",
        item: canonical,
      },
    ],
  };

  return (
    <section className={styles.page} aria-labelledby="uses-title">
      {/* SEO head */}
      <title>
        My Toolkit (/uses) – Tools for React &amp; Angular Development
      </title>
      <meta
        name="description"
        content="The hardware & software I use to build fast, accessible, SEO-ready React & Angular applications: editors, terminals, databases, design tools, and more."
      />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />
      {/* OG/Twitter */}
      <meta
        property="og:title"
        content="My Toolkit (/uses) – React & Angular"
      />
      <meta
        property="og:description"
        content="Editors, terminals, databases, design and productivity tools I use to ship high-performance front-ends."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${baseUrl}/og-uses.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="My Toolkit (/uses) – React & Angular"
      />
      <meta
        name="twitter:description"
        content="Hardware & software stack behind my projects."
      />
      <meta name="twitter:image" content={`${baseUrl}/og-uses.jpg`} />
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <header className={styles.hero}>
        <h1 id="uses-title" className={styles.title}>
          My Toolkit <span className={styles.slug}>/uses</span>
        </h1>
        <p className={styles.sub}>
          The hardware &amp; software I rely on to ship{" "}
          <strong>fast, accessible, SEO-ready</strong> <strong>React</strong>{" "}
          &amp; <strong>Angular</strong> interfaces. Explore the exact apps,
          terminals, DB tools, and gear I use day-to-day.
          <span className={styles.inlineLinks}>
            {" "}
            See <a href="/services">Services</a> or{" "}
            <a href="/case-studies">Case Studies</a> to view these in action.
          </span>
        </p>
      </header>

      <div className={styles.layout}>
        <FilterRail
          activeCat={activeCat}
          setActiveCat={setActiveCat}
          os={os}
          setOS={setOS}
          q={q}
          setQ={setQ}
          sort={sort}
          setSort={setSort}
        />

        <main className={styles.grid}>
          {list.map((item) => (
            <ToolCard
              key={item.id}
              item={item}
              osFilter={os}
              onCopied={(msg) => {
                setToast(msg);
                window.clearTimeout(window._usesToastTimer);
                window._usesToastTimer = window.setTimeout(
                  () => setToast(""),
                  1600
                );
              }}
            />
          ))}
          {list.length === 0 && (
            <div className={styles.empty}>No tools match your filters.</div>
          )}
        </main>
      </div>

      {toast && <div className={styles.toast}>{toast}</div>}
    </section>
  );
}
