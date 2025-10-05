import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./OrbitingCursor.module.css";

const OrbitingCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;

    // Cursor movement with smooth spring
    const moveCursor = (e) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power3.out",
      });
      gsap.to(circle, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "expo.out",
      });
    };

    // Hover scale effect
    const handleMouseEnter = (e) => {
      const label = e.target.getAttribute("data-cursor-label") || "";
      setHoverText(label);

      gsap.to(circle, {
        scale: 1.5,
        opacity: 0.25,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      setHoverText("");
      gsap.to(circle, {
        scale: 1,
        opacity: 0.6,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, .magnetic").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, .magnetic").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.cursorDot}></div>
      <div ref={circleRef} className={styles.cursorCircle}>
        {hoverText && <span className={styles.cursorText}>{hoverText}</span>}
      </div>
    </>
  );
};

export default OrbitingCursor;
