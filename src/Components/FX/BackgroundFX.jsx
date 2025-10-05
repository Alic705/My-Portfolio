import React, { useEffect, useRef } from "react";

const random = (min, max) => Math.random() * (max - min) + min;

const BackgroundFX = ({
  density = 0.00006, // particles per px² (keep tiny for perf)
  maxSpeed = 0.06, // px per frame
  size = [1, 2], // particle radius range
  color = "rgba(255,255,255,0.08)", // very faint
}) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const particlesRef = useRef([]);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Resize & (re)seed particles
  const seed = (canvas) => {
    const { width, height } = canvas;
    const count = Math.max(8, Math.floor(width * height * density)); // tiny amount
    particlesRef.current = Array.from({ length: count }).map(() => ({
      x: random(0, width),
      y: random(0, height),
      vx: random(-maxSpeed, maxSpeed),
      vy: random(-maxSpeed, maxSpeed),
      r: random(size[0], size[1]),
    }));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed(canvas);
    };

    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      // Clear with gentle fade to create trails
      ctx.clearRect(0, 0, w, h);

      // Optional: a super subtle vignette (feel free to remove)
      const grad = ctx.createRadialGradient(
        w * 0.5,
        h * 0.5,
        Math.min(w, h) * 0.1,
        w * 0.5,
        h * 0.5,
        Math.max(w, h) * 0.7
      );
      grad.addColorStop(0, "rgba(0,0,0,0)");
      grad.addColorStop(1, "rgba(0,0,0,0.05)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Draw particles
      ctx.fillStyle = color;
      const ps = particlesRef.current;
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.x += p.vx;
        p.y += p.vy;

        // gentle wrap (no hard bounce)
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    if (!prefersReduced) {
      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fx-wrap" aria-hidden="true">
      {/* CSS grid shimmer layer */}
      <div className="soft-grid" />
      {/* Particle canvas layer */}
      <canvas ref={canvasRef} className="fx-canvas" />
      <style>{`
        .fx-wrap {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1; /* under content, above panel background */
        }
        .soft-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 48px 48px;
          opacity: .35;
          filter: blur(0.2px); /* slightly soften */
          animation: gridPulse 14s ease-in-out infinite;
        }
        .fx-canvas {
          position: absolute;
          inset: 0;
          opacity: .7;
          mix-blend-mode: screen; /* makes dots blend softly */
        }
        @keyframes gridPulse {
          0%   { opacity: .28; transform: translate3d(0,0,0) }
          50%  { opacity: .36; transform: translate3d(0,-2px,0) }
          100% { opacity: .28; transform: translate3d(0,0,0) }
        }
        @media (prefers-reduced-motion: reduce) {
          .soft-grid { animation: none; }
          .fx-canvas { display: none; }
        }
      `}</style>
    </div>
  );
};

export default BackgroundFX;
