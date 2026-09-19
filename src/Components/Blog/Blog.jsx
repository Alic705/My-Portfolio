import React, { useMemo, useState } from "react";
import { POSTS } from "./blogData";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function formatDay(dateStr) {
  const d = new Date(dateStr);
  return String(d.getDate()).padStart(2, "0");
}
function formatMonthShort(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleString(undefined, { month: "short" }).toUpperCase();
}

export default function Blog() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("All");

  const tags = useMemo(() => {
    const t = new Set();
    POSTS.forEach((p) => p.tags.forEach((x) => t.add(x)));
    return ["All", ...Array.from(t)];
  }, []);

  const list = useMemo(() => {
    let out = POSTS.slice();
    if (q) {
      const s = q.toLowerCase();
      out = out.filter(
        (p) =>
          p.title.toLowerCase().includes(s) ||
          p.description.toLowerCase().includes(s) ||
          p.tags.some((t) => t.toLowerCase().includes(s))
      );
    }
    if (tag !== "All") out = out.filter((p) => p.tags.includes(tag));
    return out.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );
  }, [q, tag]);

  const canonical = "https://alich.dev/blog";

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Ali Ch Engineering Blog",
    description:
      "Technical articles and deep-dives by Ali Ch on React.js, Angular, Core Web Vitals, SSR/SSG, and front-end architecture.",
    url: canonical,
    author: {
      "@type": "Person",
      name: "Ali Ch",
      url: "https://alich.dev/",
    },
    blogPost: POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      url: `https://alich.dev/blog/${p.slug}`,
      datePublished: p.publishedAt,
      dateModified: p.updatedAt || p.publishedAt,
      image: p.cover,
      author: {
        "@type": "Person",
        name: p.author,
      },
    })),
  };

  return (
    <div className="custom-scale-wrapper">
      <main className="blogWrap" aria-labelledby="blog-title">
        <title>Engineering Blog | React, Angular &amp; Web Performance | Ali Ch</title>
        <meta
          name="description"
          content="Technical articles and deep-dives by Ali Ch on React.js, Angular, Core Web Vitals, SSR/SSG, and front-end architecture."
        />
        <link rel="canonical" href={canonical} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />

        <header className="blogHeader">
          <h1 id="blog-title" className="gradientText sectionTitle">
            Blog
          </h1>
          <p className="sectionDek">
            Latest articles and case breakdowns on <strong>React</strong>,{" "}
            <strong>Angular</strong>, <strong>Core Web Vitals</strong>, and{" "}
            <strong>Technical SEO</strong>.
          </p>

          <div className="blogFilters">
            <input
              className="blogSearch"
              placeholder="Search articles…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search articles"
            />
            <select
              className="blogSelect"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              aria-label="Filter by tag"
            >
              {tags.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </header>

        {list.length === 0 ? (
          <div className="blogEmpty">
            <p>No articles found matching "{q}". Try a different keyword or category.</p>
          </div>
        ) : (
          /* Carousel */
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            grabCursor={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1200: { slidesPerView: 3 },
            }}
            className="blogSwiper"
          >
            {list.map((p) => {
              const day = formatDay(p.publishedAt);
              const mon = formatMonthShort(p.publishedAt);
              return (
                <SwiperSlide key={p.slug}>
                  <article className="blogCard">
                    <a href={`/blog/${p.slug}`} className="blogCardLink">
                      <div className="blogCardImg">
                        <img src={p.cover} alt={p.title} loading="lazy" />
                      </div>

                      <div className="blogDateBadge">
                        {day} <span>{mon}</span>
                      </div>

                      <div className="blogCardBody">
                        <small>{p.author} • {p.tags.slice(0, 2).join(", ")}</small>
                        <h2>{p.title}</h2>
                        <span className="blogContinueLink">
                          Continue Reading →
                        </span>
                      </div>
                    </a>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </main>
    </div>
  );
}
