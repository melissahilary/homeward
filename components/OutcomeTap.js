"use client";

import { useState } from "react";
import { OUTCOMES } from "@/lib/predictions";

const TONE = {
  stock: "border-stock text-stock",
  pending: "border-pending text-pending",
  expired: "border-expired text-expired",
};

// The first screen. One question, one tap, captured at the emotional peak, 
// filled, out of stock, or wrongly refused. This is the whole data engine.
export default function OutcomeTap({ onReported }) {
  const [pharmacy, setPharmacy] = useState("");
  const [choice, setChoice] = useState(null);

  if (choice) {
    const o = OUTCOMES.find((x) => x.key === choice);
    return (
      <div className="rounded-xl border border-line bg-white p-6" role="status">
        <p className="text-lg font-semibold text-ink">Reported: {o.label}.</p>
        <p className="mt-2 text-base text-ink-soft">
          Thank you. That one tap sharpens the map for the next person on your
          loop, and it is what unlocks your own ranked recommendations.
        </p>
        <button
          onClick={() => setChoice(null)}
          className="btn btn-secondary mt-4 !py-2.5 text-base"
        >
          Report another
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-line bg-white p-6">
      <label htmlFor="ph" className="mb-1.5 block text-base font-medium text-ink">
        Which pharmacy?
      </label>
      <input
        id="ph"
        type="text"
        value={pharmacy}
        onChange={(e) => setPharmacy(e.target.value)}
        placeholder="Elm Street Pharmacy, Mission"
        className="field"
      />

      <p className="mt-6 text-base font-medium text-ink">How did it go?</p>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {OUTCOMES.map((o) => (
          <button
            key={o.key}
            onClick={() => {
              setChoice(o.key);
              onReported?.(o.key);
            }}
            className={`rounded-lg border-2 bg-white px-4 py-4 text-lg font-semibold ${TONE[o.tone]} hover:bg-panel`}
          >
            {o.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-ink-faint">
        In the app this fires as one text within two hours of pickup, the moment
        of relief or fury, never a survey, never a scheduled form.
      </p>
    </div>
  );
}
