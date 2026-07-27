"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import FrameSVG from "./FrameSVG";
import { POSITIONING } from "@/lib/site";

// Five discrete frames. Each animates once on entry via IntersectionObserver.
// No scroll-jacking, no pinning, the user owns the scroll, and every frame is
// a valid stopping point. prefers-reduced-motion renders the final frame,
// static, at the top: the complete state, not a degraded one.
const FRAMES = [
  { frame: 1, eyebrow: "For anyone on a prescription stimulant", headline: "Prescription stimulants can't be refilled.", sub: "So you run the whole process again, every thirty days. This is the month you already run." },
  { frame: 2, eyebrow: null, headline: "Twelve steps. You know them by heart.", sub: "Request. Transmit. Verify. Locate. Transfer. Every single month." },
  { frame: 3, eyebrow: null, headline: "Three of these break. Every time.", sub: "It was a system all along. Not a personal failing." },
  { frame: 4, eyebrow: null, headline: "Three of them are rights you already hold.", sub: "Dated fills. A transfer you can start yourself. A partial fill. Leverage you were never told about." },
  { frame: 5, eyebrow: null, headline: "We run the other nine.", sub: POSITIONING.tagline },
];

function Frame({ data, isFinal, isFirst }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const Heading = isFirst ? "h1" : "h2";

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { setInView(true); io.unobserve(e.target); }
      }),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`choreo-frame ${inView ? "is-in" : ""} flex min-h-[88svh] flex-col justify-center border-b border-line py-16`}
    >
      <div className="mx-auto w-full max-w-content px-5 md:px-8">
        {data.eyebrow && (
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-ink-faint">
            {data.eyebrow}
          </p>
        )}
        <Heading className="max-w-4xl text-display font-semibold text-ink">{data.headline}</Heading>
        {data.sub && (
          <p className="mt-6 max-w-measure text-xl text-ink-soft">{data.sub}</p>
        )}

        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[720px]">
            <FrameSVG frame={data.frame} />
          </div>
        </div>

        {isFinal && (
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link href="/signup" className="btn text-lg">Get started, $99 a year</Link>
            <Link href="/how-it-works" className="link text-lg">See how it works</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Choreography() {
  const [reduce, setReduce] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(m.matches);
    const on = () => setReduce(m.matches);
    m.addEventListener?.("change", on);
    return () => m.removeEventListener?.("change", on);
  }, []);

  // Reduced motion: the complete final frame, static, at the top.
  if (mounted && reduce) {
    const f = FRAMES[4];
    return (
      <section className="border-b border-line py-20">
        <div className="mx-auto w-full max-w-content px-5 md:px-8">
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-ink-faint">
            Prescription stimulants have no refills
          </p>
          <h1 className="max-w-4xl text-display font-semibold text-ink">
            Prescription stimulants can&rsquo;t be refilled.
          </h1>
          <p className="mt-6 max-w-measure text-xl text-ink-soft">
            So you run the whole process again, every thirty days. {f.headline}
          </p>
          <div className="mt-12 overflow-x-auto">
            <div className="min-w-[720px]"><FrameSVG frame={5} /></div>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link href="/signup" className="btn text-lg">Get started, $99 a year</Link>
            <Link href="/how-it-works" className="link text-lg">See how it works</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      {FRAMES.map((data, i) => (
        <Frame key={data.frame} data={data} isFirst={i === 0} isFinal={i === FRAMES.length - 1} />
      ))}
    </div>
  );
}
