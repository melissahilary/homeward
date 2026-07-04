"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const WALKS = [
  {
    city: "San Francisco",
    detail: "First Sunday, 6:30 AM — Lands End",
    meta: "30 dogs",
    action: "RSVP",
    open: true,
  },
  {
    city: "New York",
    detail: "Opening at 500 members",
    meta: "Waitlist",
    action: "Join",
    open: false,
  },
  {
    city: "Los Angeles",
    detail: "Opening at 500 members",
    meta: "Waitlist",
    action: "Join",
    open: false,
  },
];

export default function HouseGate() {
  const [entered, setEntered] = useState(false);
  const [value, setValue] = useState("");

  if (!entered) {
    return (
      <section className="mx-auto max-w-xl px-6 py-28 text-center md:py-36">
        <Reveal>
          <p className="eyebrow eyebrow-camel mb-6">Your key</p>
          <h2 className="font-serif text-3xl font-light leading-display text-ink md:text-4xl">
            Every order carries a charcoal card, and on it a code.
          </h2>
          <p className="mx-auto mt-5 max-w-md font-serif text-lg leading-body text-soft">
            Enter it to open the house. Doors, walks, and the long quiet within.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEntered(true);
            }}
            className="mx-auto mt-10 flex max-w-sm flex-col items-stretch gap-4"
          >
            <label className="sr-only" htmlFor="code">
              Enter your code
            </label>
            <input
              id="code"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="ENTER YOUR CODE"
              className="hairline border bg-transparent px-5 py-4 text-center font-serif text-xl tracking-[0.32em] text-ink outline-none placeholder:text-[0.7rem] placeholder:uppercase placeholder:tracking-[0.4em] placeholder:text-soft"
            />
            <button type="submit" className="btn-solid btn-block">
              Enter
            </button>
          </form>
        </Reveal>
      </section>
    );
  }

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      {/* Upcoming walks */}
      <Reveal className="mb-20">
        <p className="eyebrow eyebrow-camel mb-4">The Silent Walks</p>
        <h2 className="font-serif text-4xl font-light text-ink md:text-5xl">
          Upcoming.
        </h2>
        <ul className="mt-10 border-t hairline">
          {WALKS.map((w) => (
            <li
              key={w.city}
              className="flex flex-col gap-3 border-b hairline py-6 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                <span className="caps text-[0.7rem] text-ink">{w.city}</span>
                <span className="font-serif text-lg text-soft">{w.detail}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="caps text-[0.58rem] text-soft">{w.meta}</span>
                <span
                  className={`link-underline ${
                    w.open ? "text-ink" : "text-soft opacity-60"
                  }`}
                >
                  {w.action}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Two editorial cards */}
      <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Reveal className="bg-ivory-deep p-10">
          <p className="eyebrow eyebrow-camel mb-3">The Long Walk</p>
          <h3 className="font-serif text-3xl font-light text-ink">
            One route, at dawn.
          </h3>
          <p className="mt-4 font-serif text-lg leading-body text-soft">
            A slow hour on a set path, before the city wakes. No training, no
            agenda. We walk, and afterward there is coffee.
          </p>
        </Reveal>
        <Reveal style={{ transitionDelay: "120ms" }} className="bg-charcoal p-10 text-warmwhite">
          <p className="eyebrow eyebrow-camel mb-3">The Turndown, Live</p>
          <h3 className="font-serif text-3xl font-light">The letter, aloud.</h3>
          <p className="mt-4 font-serif text-lg leading-body text-steel">
            Once a season, the essay read in a room, the behaviourist taking
            questions, the house together for an evening.
          </p>
        </Reveal>
      </div>

      {/* The liturgy */}
      <Reveal className="border-y hairline py-20 text-center">
        <p className="mx-auto max-w-2xl font-serif text-2xl font-light italic leading-[1.5] text-ink md:text-3xl">
          Silent. Loose leads. Phones away. One route. Coffee after — where
          talking begins.
        </p>
      </Reveal>

      {/* Refusal */}
      <Reveal className="pt-20 text-center">
        <p className="mx-auto max-w-xl font-serif text-2xl font-light leading-display text-ink md:text-3xl">
          No banners. No booths. The only visible brand is the calm.
        </p>
      </Reveal>
    </div>
  );
}
