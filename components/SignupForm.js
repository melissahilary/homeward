"use client";

import { useState } from "react";
import { SIGNUP, PRICING } from "@/lib/site";

// Four fields, one screen, no progress bar. Payment on the same screen.
// Succeeds client-side; the button becomes a confirmation.
export default function SignupForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="rounded-xl border border-line bg-white p-6" role="status">
        <p className="text-xl font-semibold text-ink">You&rsquo;re set.</p>
        <p className="mt-2 text-base text-ink-soft">
          Check your email. We start the countdown from your last fill date and
          reach out on day 22 — before you run out, not after.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="rounded-xl border border-line bg-white p-6"
    >
      <div className="space-y-4">
        {SIGNUP.fields.map((f) => (
          <div key={f.name}>
            <label
              htmlFor={f.name}
              className="mb-1.5 block text-base font-medium text-ink"
            >
              {f.label}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required
              placeholder={f.placeholder}
              inputMode={f.inputMode}
              autoComplete={f.autoComplete}
              className="field"
            />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-baseline justify-between border-t border-line pt-4">
        <span className="text-base text-ink-soft">Billed once a year</span>
        <span className="text-lg font-semibold text-ink">
          {PRICING.year}
          <span className="text-base font-normal text-ink-soft"> / year</span>
        </span>
      </div>

      <button type="submit" className="btn btn-block mt-4">
        Start — {PRICING.year} / year
      </button>
      <p className="mt-3 text-sm text-ink-faint">
        {PRICING.refundDays}-day refund, one click, no conversation. We email you
        30 days before renewal, and again 7 days before.
      </p>
    </form>
  );
}
