import React, { useMemo, useState } from "react";
import styles from "./Blog.module.css";
import { POSTS } from "./blogData";

// Import Swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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

  return (
    <main className={styles.wrap} aria-labelledby="blog-title">
      <header className={styles.header}>
        <h1 id="blog-title" className={styles.h1}>
          Blog
        </h1>
        <p className={styles.dek}>
          Latest blog posts and updates on <strong>React</strong>,{" "}
          <strong>Angular</strong>, <strong>Accessibility</strong>, and{" "}
          <strong>SEO</strong>.
        </p>
      </header>

      {/* Carousel */}
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        spaceBetween={24}
        slidesPerView={2}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className={styles.blogSwiper}
      >
        {list.map((p) => {
          const day = formatDay(p.publishedAt);
          const mon = formatMonthShort(p.publishedAt);
          return (
            <SwiperSlide key={p.slug}>
              <article className={styles.blogCard}>
                <a href={`/blog/${p.slug}`} className={styles.blogCardLink}>
                  <div className={styles.blogCardImg}>
                    <img src={p.cover} alt={p.title} loading="lazy" />
                  </div>

                  <div className={styles.dateBadge}>
                    {day} <span>{mon}</span>
                  </div>

                  <div className={styles.cardBody}>
                    <small>{p.author} • 0 Comments</small>
                    <h2>{p.title}</h2>
                    <span className={styles.continueLink}>
                      Continue Reading →
                    </span>
                  </div>
                </a>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
}
