"use client";

import { useEffect, useRef, useState } from "react";

// Slow intersection-observer reveal: 12px rise, 900ms, once.
export default function Reveal({ as: Tag = "div", className = "", style, children }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={style}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
