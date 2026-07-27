"use client";

import { useEffect, useRef, useState } from "react";

// Section 4: the message walkthrough. The diagram proved the month is a
// broken twelve-step system; this is the payoff, and it has to land while the
// recognition is still active. Three texts, that is the whole month.

const BLOCKS = [
  {
    label: "Day 22",
    body: "Before you run out, not after. The message is written. You send it.",
    time: "9:04",
    bubble: "Day 22. Your request is due today. Copy the message for Dr. Chen here.",
  },
  {
    label: "Day 27",
    body: "We check that it landed where you expect it to.",
    time: "8:12",
    bubble: "Sent Tuesday. Confirm it reached Walgreens on 5th before Friday.",
  },
  {
    label: "Day 29",
    body: "When it fails, you already know where to go next and what to say.",
    time: "5:47",
    bubble: {
      pre: "Walgreens on 5th is out. Broadway Pharmacy has your strength. ",
      accent: "9 of 10 transfers completed there this quarter",
      post: ". Copy the transfer request.",
    },
  },
];

const TYPING_MS = 750;

export default function PhoneWalkthrough() {
  const refs = [useRef(null), useRef(null), useRef(null)];
  // Per-bubble phase: 0 hidden, 1 typing, 2 shown.
  const [phase, setPhase] = useState([0, 0, 0]);
  const timers = useRef([]);

  function reveal(i) {
    setPhase((prev) => {
      if (prev[i] !== 0) return prev;
      const next = [...prev];
      next[i] = 1; // typing
      return next;
    });
    const t = setTimeout(() => {
      setPhase((prev) => {
        const next = [...prev];
        next[i] = 2; // shown
        return next;
      });
    }, TYPING_MS);
    timers.current.push(t);
  }

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 1024;
    if (reduce || small) {
      setPhase([2, 2, 2]);
      return;
    }
    const observers = refs.map((ref, i) => {
      const el = ref.current;
      if (!el) return null;
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(i);
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.4 }
      );
      io.observe(el);
      return io;
    });
    const t = timers.current;
    return () => {
      observers.forEach((io) => io && io.disconnect());
      t.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24">
              <Phone phase={phase} />
            </div>
          </div>

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

function Phone({ phase }) {
  const lastShown = phase.lastIndexOf(2);
  return (
    <div
      className="mx-auto w-full max-w-[330px] rounded-[2.6rem] p-3"
      style={{
        background: "linear-gradient(180deg, #1b1912 0%, #121210 55%)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow:
          "0 40px 70px -30px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
      aria-label="A phone showing three text messages across the month"
    >
      <div className="rounded-[2.1rem] px-4 pb-6 pt-4" style={{ background: "#0f0e0c" }}>
        {/* Minimal header: who, and a time. No status bar chrome. */}
        <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.07)] pb-3">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full text-[0.7rem] font-semibold"
              style={{ background: "#26241f", color: "#F4F1E8" }}
            >
              D
            </span>
            <span className="text-base font-medium text-ink">Daykeep</span>
          </div>
          <span className="font-mono text-xs text-ink-faint">Text message</span>
        </div>

        {/* Thread */}
        <div className="flex min-h-[280px] flex-col gap-4 pt-5">
          {BLOCKS.map((b, i) => {
            const p = phase[i];
            if (p === 0) return null;
            if (p === 1) return <Typing key={i} />;
            return (
              <div key={i} className="dk-bubble-in flex flex-col items-start">
                <div
                  className="max-w-[86%] rounded-2xl rounded-bl-md px-4 py-2.5 text-[0.95rem] leading-snug"
                  style={{
                    background: "#26241F",
                    color: "#F4F1E8",
                    border: "1px solid rgba(255,255,255,0.05)",
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
                <span className="dk-fade-in mt-1 pl-1 font-mono text-[0.66rem] text-ink-faint">
                  {b.time}
                  {i === lastShown ? " · Delivered" : ""}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md px-4 py-3.5" style={{ background: "#26241F", width: "fit-content" }}>
      {[0, 1, 2].map((d) => (
        <span
          key={d}
          className="dk-typing-dot h-2 w-2 rounded-full"
          style={{ background: "#8A857A" }}
        />
      ))}
    </div>
  );
}
