"use client";

import { useEffect, useRef, useState } from "react";

// Section 4: the message walkthrough. The diagram proved the month is a
// broken twelve-step system; this is the payoff, and it has to land while the
// recognition is still active. Three texts, that is the whole month.

const BLOCKS = [
  {
    label: "Day 22",
    body: "Before you run out, not after. The message is written. You send it.",
    bubble: "Day 22. Your request is due today. Copy the message for Dr. Chen here.",
  },
  {
    label: "Day 27",
    body: "We check that it landed where you expect it to.",
    bubble: "Sent Tuesday. Confirm it reached Walgreens on 5th before Friday.",
  },
  {
    label: "Day 29",
    body: "When it fails, you already know where to go next and what to say.",
    // The one differentiator line is highlighted in the phone below.
    bubble: {
      pre: "Walgreens on 5th is out. Broadway Pharmacy has your strength. ",
      accent: "9 of 10 transfers completed there this quarter",
      post: ". Copy the transfer request.",
    },
  },
];

export default function PhoneWalkthrough() {
  const refs = [useRef(null), useRef(null), useRef(null)];
  const [shown, setShown] = useState([false, false, false]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 1024;
    // Reduced motion or small screens: render all three immediately.
    if (reduce || small) {
      setShown([true, true, true]);
      return;
    }
    const observers = refs.map((ref, i) => {
      const el = ref.current;
      if (!el) return null;
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setShown((prev) => {
                if (prev[i]) return prev;
                const next = [...prev];
                next[i] = true;
                return next;
              });
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.4 }
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((io) => io && io.disconnect());
  }, []);

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-measure">
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            This is what arrives.
          </h2>
          <p className="mt-3 text-lg text-ink-soft">
            Three texts. That is the whole month.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Phone: first on mobile, sticky on desktop. */}
          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24">
              <Phone shown={shown} />
            </div>
          </div>

          {/* Text blocks. */}
          <div className="order-2 lg:order-1">
            {BLOCKS.map((b, i) => (
              <div
                key={b.label}
                ref={refs[i]}
                className="border-b border-line py-10 lg:min-h-[42vh] lg:py-16"
              >
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-ink-faint">
                  {b.label}
                </p>
                <p className="mt-4 max-w-measure text-xl leading-relaxed text-ink">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Phone({ shown }) {
  return (
    <div
      className="mx-auto w-full max-w-[320px] rounded-[2.2rem] p-4"
      style={{ border: "1px solid rgba(255,255,255,0.10)" }}
      aria-label="A phone showing three text messages across the month"
    >
      <div className="flex flex-col gap-3 py-6">
        {BLOCKS.map((b, i) => (
          <div
            key={i}
            className="max-w-[85%] self-start rounded-2xl px-4 py-3 text-[0.95rem] leading-snug transition-opacity duration-200"
            style={{
              background: "#26241F",
              color: "#F4F1E8",
              opacity: shown[i] ? 1 : 0,
            }}
          >
            {typeof b.bubble === "string" ? (
              b.bubble
            ) : (
              <>
                {b.bubble.pre}
                <span style={{ color: "#5FBE86" }}>{b.bubble.accent}</span>
                {b.bubble.post}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
