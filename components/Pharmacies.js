"use client";

import { useState } from "react";
import OutcomeTap from "./OutcomeTap";
import { PREDICTIONS, DEMO_METRO, DEMO_DRUG } from "@/lib/predictions";

// Reciprocity gate: you cannot get a ranked recommendation without reporting
// the outcome of your last one. Not a penalty, the mechanism. Waze cannot
// route a driver who is not driving.
export default function Pharmacies() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return (
      <div>
        <div className="max-w-measure rounded-xl border border-line bg-panel p-6">
          <p className="text-lg font-semibold text-ink">
            Report your last outcome to see the ranked map.
          </p>
          <p className="mt-2 text-base text-ink-soft">
            The map is built from real attempts at real counters. You cannot pull
            from it without feeding it. One tap and it opens.
          </p>
        </div>
        <div className="mt-6 max-w-measure">
          <OutcomeTap onReported={() => setUnlocked(true)} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="text-base text-ink-soft">
        {DEMO_DRUG} · {DEMO_METRO} · ranked by recorded completion, not by
        advertising.
      </p>
      <ol className="mt-6 space-y-4">
        {PREDICTIONS.map((p, i) => (
          <li key={p.name} className="rounded-xl border border-line bg-white p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-ink">
                  {i + 1}. {p.name}
                </p>
                <p className="text-base text-ink-soft">{p.area}</p>
              </div>
              <div className="shrink-0 text-right">
                <p
                  className={`text-2xl font-semibold ${
                    p.completion >= 75 ? "text-stock" : p.completion >= 55 ? "text-pending" : "text-expired"
                  }`}
                >
                  {p.completion}%
                </p>
                <p className="font-mono text-xs text-ink-faint">
                  {p.attempts} attempts · {p.windowDays}d
                </p>
              </div>
            </div>
            <p className="mt-3 text-base text-ink-soft">{p.reason}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 max-w-measure text-sm text-ink-faint">
        Every recommendation shows its sample size and its reasoning, always. A
        competitor gives you a phone book. This gives you a probability, and it
        only exists because patients report back.
      </p>
    </div>
  );
}
