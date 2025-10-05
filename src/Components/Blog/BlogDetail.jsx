// src/pages/blog/BlogDetail.jsx
import React, { useMemo } from "react";
import styles from "./BlogDetail.module.css";
import { POSTS } from "./blogData";

function getReadingTime(html) {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = text ? text.split(" ").length : 0;
  const minutes = Math.max(3, Math.round(words / 220));
  return { words, minutes };
}

function usePost(slug) {
  const idx = POSTS.findIndex((p) => p.slug === slug);
  return {
    post: idx >= 0 ? POSTS[idx] : null,
    index: idx,
    prev: idx > 0 ? POSTS[idx - 1] : null,
    next: idx >= 0 && idx < POSTS.length - 1 ? POSTS[idx + 1] : null,
  };
}

function buildToc(html) {
  const headings = Array.from(html.matchAll(/<h2>(.*?)<\/h2>/gi)).map(
    (m, i) => ({ id: `h2-${i + 1}`, text: m[1] })
  );
  let processed = html;
  headings.forEach((h, i) => {
    processed = processed.replace(
      /<h2>(.*?)<\/h2>/i,
      `<h2 id="${h.id}">$1</h2>`
    );
  });
  return { headings, html: processed };
}

export default function BlogDetail({ slugFromRouter }) {
  // If you're using a router, pass slug prop, or derive from URL:
  const slug =
    slugFromRouter ||
    (typeof window !== "undefined"
      ? window.location.pathname.split("/").pop()
      : "");

  const { post, index, prev, next } = usePost(slug);
  if (!post) {
    return (
      <main className={styles.wrap}>
        <h1>Article not found</h1>
        <p>
          Go back to the <a href="/blog">blog</a>.
        </p>
      </main>
    );
  }

  const baseUrl = "https://your-domain.com";
  const canonical = `${baseUrl}/blog/${post.slug}`;
  const { minutes } = getReadingTime(post.html);
  const { headings, html } = buildToc(post.html);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.cover,
    author: { "@type": "Person", name: post.author },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: canonical,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical },
    ],
  };

  const related = useMemo(() => {
    const tag = post.tags[0];
    return POSTS.filter(
      (p) => p.slug !== post.slug && p.tags.includes(tag)
    ).slice(0, 3);
  }, [post]);

  return (
    <main className={styles.wrap} aria-labelledby="post-title">
      <title>{post.title}</title>
      <meta name="description" content={post.description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={post.cover} />
      <meta name="twitter:card" content="summary_large_image" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className={styles.header}>
        <p className={styles.kicker}>
          Front-End · {post.tags.slice(0, 2).join(" · ")}
        </p>
        <h1 id="post-title" className={styles.h1}>
          {post.title}
        </h1>
        <p className={styles.meta}>
          <img src="/avatar-hamza.jpg" alt="" className={styles.avatar} />
          <span>{post.author}</span>
          <span className={styles.dot}>•</span>
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString()}
          </time>
          <span className={styles.dot}>•</span>
          <span>{minutes} min read</span>
        </p>
        <img
          src={post.cover}
          alt={post.title}
          className={styles.hero}
          loading="lazy"
          decoding="async"
        />
      </header>

      {/* Table of contents */}
      {headings.length > 0 && (
        <nav className={styles.toc} aria-label="Table of contents">
          <strong>On this page</strong>
          <ul>
            {headings.map((h) => (
              <li key={h.id}>
                <a href={`#${h.id}`}>{h.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <article
        className={styles.article}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <aside className={styles.postCtas}>
        <a href="/services" className={styles.btnPrimary}>
          Need a performance/SEO audit?
        </a>
        <a href="/projects" className={styles.btnGhost}>
          View case studies
        </a>
      </aside>

      <nav className={styles.pager} aria-label="More articles">
        {prev && (
          <a href={`/blog/${prev.slug}`} className={styles.prev}>
            ← {prev.title}
          </a>
        )}
        {next && (
          <a href={`/blog/${next.slug}`} className={styles.next}>
            {next.title} →
          </a>
        )}
      </nav>

      {related.length > 0 && (
        <section className={styles.related} aria-label="Related posts">
          <h2>Related</h2>
          <div className={styles.relatedGrid}>
            {related.map((p) => (
              <a
                key={p.slug}
                href={`/blog/${p.slug}`}
                className={styles.relatedCard}
              >
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.relatedMeta}>
                  <span className={styles.tag}>{p.tags[0]}</span>
                  <h3>{p.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
