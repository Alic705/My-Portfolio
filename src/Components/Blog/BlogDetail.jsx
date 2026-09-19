// src/pages/blog/BlogDetail.jsx
import React, { useMemo } from "react";
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
      <main className="blogDetailWrap">
        <h1>Article not found</h1>
        <p>
          Go back to the <a href="/blog">blog</a>.
        </p>
      </main>
    );
  }

  const baseUrl = "https://alich.dev";
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
    <div className="custom-scale-wrapper">
      <main className="blogDetailWrap" aria-labelledby="post-title">
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

        <header className="blogDetailHeader">
          <p className="blogDetailKicker">
            Front-End · {post.tags.slice(0, 2).join(" · ")}
          </p>
          <h1 id="post-title" className="blogDetailH1 gradientText">
            {post.title}
          </h1>
          <p className="blogDetailMeta">
            <span>{post.author}</span>
            <span className="blogDetailDot">•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
            <span className="blogDetailDot">•</span>
            <span>{minutes} min read</span>
          </p>
          <img
            src={post.cover}
            alt={post.title}
            className="blogDetailHero"
            loading="lazy"
            decoding="async"
          />
        </header>

        <article
          className="blogDetailArticle"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <aside className="blogDetailPostCtas">
          <a href="/services" className="btnPrimary">
            Need a performance/SEO audit?
          </a>
          <a href="/projects" className="btnGhost">
            View case studies
          </a>
        </aside>

        <nav className="blogDetailPager" aria-label="More articles">
          {prev && (
            <a href={`/blog/${prev.slug}`} className="blogDetailPrev">
              ← {prev.title}
            </a>
          )}
          {next && (
            <a href={`/blog/${next.slug}`} className="blogDetailNext">
              {next.title} →
            </a>
          )}
        </nav>

        {related.length > 0 && (
          <section className="blogDetailRelated" aria-label="Related posts">
            <h2>Related</h2>
            <div className="blogDetailRelatedGrid">
              {related.map((p) => (
                <a
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="blogDetailRelatedCard"
                >
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="blogDetailRelatedMeta">
                    <span className="blogDetailTag">{p.tags[0]}</span>
                    <h3>{p.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
