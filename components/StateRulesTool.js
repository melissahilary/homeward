"use client";

import { useState } from "react";
import Link from "next/link";
import { STATES, STATE_FIELDS, FEDERAL_NOTE } from "@/lib/states";

// Free, ungated. Pick a state → see what we have, honestly flagged.
export default function StateRulesTool() {
  const [slug, setSlug] = useState("");
  const state = STATES.find((s) => s.slug === slug);

  return (
    <div className="rounded-xl border border-line bg-white p-6">
      <label htmlFor="st" className="mb-1.5 block text-base font-medium text-ink">
        Your state
      </label>
      <select
        id="st"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="field"
      >
        <option value="">Choose a state…</option>
        {STATES.map((s) => (
          <option key={s.slug} value={s.slug}>{s.name}</option>
        ))}
      </select>

      {state && (
        <div className="mt-6 border-t border-line pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-ink">{state.name}</h3>
            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                state.verified ? "bg-panel text-stock" : "bg-panel text-pending"
              }`}
            >
              {state.verified ? "Verified" : "Not yet verified"}
            </span>
          </div>

          {!state.verified && (
            <p className="mt-3 rounded-lg border border-line bg-panel p-4 text-base text-ink">
              We have not finished verifying {state.name}&rsquo;s rules against
              primary sources. Do not rely on this yet. Confirm with your
              prescriber and pharmacist.
            </p>
          )}

          <dl className="mt-5 divide-y divide-line">
            {STATE_FIELDS.map((f) => (
              <div key={f.key} className="py-3">
                <dt className="text-base font-medium text-ink">{f.label}</dt>
                <dd className="mt-1 text-base text-ink-soft">
                  {state[f.key] || "Not yet entered."}
                </dd>
              </div>
            ))}
          </dl>

          <Link href={`/states/${state.slug}`} className="link mt-4 inline-block text-base">
            Open the {state.name} page
          </Link>
        </div>
      )}

      <p className="mt-6 border-t border-line pt-4 text-sm text-ink-faint">
        {FEDERAL_NOTE}
      </p>
    </div>
  );
}
