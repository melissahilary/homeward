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
    // Device bezel: titanium edge, deep shadow, crisp corners.
    <div
      className="relative mx-auto w-full max-w-[318px]"
      style={{
        padding: "11px",
        borderRadius: "3.3rem",
        background: "linear-gradient(160deg, #3a3a3d 0%, #0b0b0c 22%, #050506 55%, #17171a 100%)",
        boxShadow:
          "0 55px 90px -35px rgba(0,0,0,0.9), 0 0 0 1px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.14)",
      }}
      aria-label="An iPhone showing three text messages across the month"
    >
      {/* Titanium hardware buttons. Left: silent switch, volume up, volume
          down. Right: side button. The tells that make it read as an iPhone. */}
      <span aria-hidden="true" className="absolute -left-[2px] top-[104px] h-7 w-[3px] rounded-l-sm" style={{ background: "linear-gradient(90deg,#2c2c2f,#0a0a0b)" }} />
      <span aria-hidden="true" className="absolute -left-[2px] top-[150px] h-12 w-[3px] rounded-l-sm" style={{ background: "linear-gradient(90deg,#2c2c2f,#0a0a0b)" }} />
      <span aria-hidden="true" className="absolute -left-[2px] top-[210px] h-12 w-[3px] rounded-l-sm" style={{ background: "linear-gradient(90deg,#2c2c2f,#0a0a0b)" }} />
      <span aria-hidden="true" className="absolute -right-[2px] top-[168px] h-16 w-[3px] rounded-r-sm" style={{ background: "linear-gradient(270deg,#2c2c2f,#0a0a0b)" }} />

      {/* Screen */}
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: "2.7rem", background: "#0a0a0c", minHeight: "540px" }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute left-1/2 top-[13px] z-20 flex -translate-x-1/2 items-center justify-end gap-2"
          style={{ width: "94px", height: "27px", background: "#000", borderRadius: "999px", paddingRight: "9px" }}
        >
          <span style={{ width: "7px", height: "7px", borderRadius: "999px", background: "#1c1c22" }} />
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-3.5 text-white">
          <span className="text-[13px] font-semibold tracking-tight">9:41</span>
          <span className="flex items-center gap-1.5">
            <SignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </span>
        </div>

        {/* iMessage contact header */}
        <div className="flex flex-col items-center gap-1 border-b border-[rgba(255,255,255,0.07)] px-4 pb-3 pt-3">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold"
            style={{ background: "#26241f", color: "#F4F1E8" }}
          >
            D
          </span>
          <span className="text-[13px] font-medium text-white">Daykeep</span>
        </div>

        {/* Home indicator, the pill at the base of every modern iPhone. */}
        <div
          aria-hidden="true"
          className="absolute bottom-[9px] left-1/2 z-20 -translate-x-1/2 rounded-full"
          style={{ width: "116px", height: "5px", background: "rgba(255,255,255,0.55)" }}
        />

        {/* Thread */}
        <div className="flex flex-col gap-4 px-4 pb-14 pt-5">
          {BLOCKS.map((b, i) => {
            const p = phase[i];
            if (p === 0) return null;
            if (p === 1) return <Typing key={i} />;
            return (
              <div key={i} className="dk-bubble-in flex flex-col items-start">
                <div
                  className="max-w-[86%] rounded-[1.35rem] rounded-bl-md px-3.5 py-2.5 text-[0.92rem] leading-snug"
                  style={{ background: "#262528", color: "#F4F1E8" }}
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
                <span className="dk-fade-in mt-1 pl-1.5 text-[0.62rem] font-medium uppercase tracking-wide text-ink-faint">
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
    <div
      className="flex items-center gap-1.5 rounded-[1.35rem] rounded-bl-md px-4 py-3.5"
      style={{ background: "#262528", width: "fit-content" }}
    >
      {[0, 1, 2].map((d) => (
        <span key={d} className="dk-typing-dot h-2 w-2 rounded-full" style={{ background: "#8f8f96" }} />
      ))}
    </div>
  );
}

function SignalIcon() {
  return (
    <svg width="17" height="11" viewBox="0 0 17 11" fill="white" aria-hidden="true">
      <rect x="0" y="7" width="3" height="4" rx="1" />
      <rect x="4.5" y="5" width="3" height="6" rx="1" />
      <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
      <rect x="13.5" y="0" width="3" height="11" rx="1" />
    </svg>
  );
}
function WifiIcon() {
  return (
    <svg width="16" height="11" viewBox="0 0 16 12" fill="white" aria-hidden="true">
      <path d="M8 2.5c2.6 0 5 1 6.8 2.7l-1.4 1.5A7.6 7.6 0 0 0 8 4.5 7.6 7.6 0 0 0 2.6 6.7L1.2 5.2A9.6 9.6 0 0 1 8 2.5Z" />
      <path d="M8 6.2c1.5 0 2.9.6 3.9 1.6l-1.5 1.5A3.4 3.4 0 0 0 8 8.2c-.9 0-1.8.4-2.4 1.1L4.1 7.8A5.4 5.4 0 0 1 8 6.2Z" />
      <circle cx="8" cy="10.4" r="1.3" />
    </svg>
  );
}
function BatteryIcon() {
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="white" strokeOpacity="0.45" />
      <rect x="2" y="2" width="18" height="8" rx="1.6" fill="white" />
      <rect x="22.5" y="4" width="1.8" height="4" rx="0.9" fill="white" fillOpacity="0.45" />
    </svg>
  );
}
