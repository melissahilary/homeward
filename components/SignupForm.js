"use client";

import { useState } from "react";
import Link from "next/link";
import { SIGNUP, PRICING } from "@/lib/site";

// Four fields, one screen, no progress bar. Payment on the same screen.
// Consent is unbundled per My Health My Data: two separate, unchecked
// boxes, neither buried in the terms. Succeeds client-side.
export default function SignupForm() {
  const [done, setDone] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [consentHealth, setConsentHealth] = useState(false);

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

      {/* Consent — separate, unchecked, unbundled. */}
      <fieldset className="mt-6 space-y-3 border-t border-line pt-5">
        <legend className="sr-only">Consent</legend>
        <label className="flex cursor-pointer items-start gap-3 text-base text-ink">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0"
          />
          <span>
            I agree to the{" "}
            <Link href="/terms" className="link">Terms of Service</Link> and{" "}
            <Link href="/privacy" className="link">Privacy Policy</Link>.
          </span>
        </label>
        <label className="flex cursor-pointer items-start gap-3 text-base text-ink">
          <input
            type="checkbox"
            checked={consentHealth}
            onChange={(e) => setConsentHealth(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0"
          />
          <span>
            I consent to Daykeep collecting my medication and refill details and
            using them only to run my cycle. I can withdraw this any time. See
            the{" "}
            <Link href="/health-data" className="link">
              Consumer Health Data Privacy Policy
            </Link>
            .
          </span>
        </label>
      </fieldset>

      <div className="mt-5 flex items-baseline justify-between border-t border-line pt-4">
        <span className="text-base text-ink-soft">Billed once a year</span>
        <span className="text-lg font-semibold text-ink">
          {PRICING.year}
          <span className="text-base font-normal text-ink-soft"> / year</span>
        </span>
      </div>

      <button
        type="submit"
        disabled={!agreeTerms || !consentHealth}
        className="btn btn-block mt-4 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Start — {PRICING.year} / year
      </button>
      <p className="mt-3 text-sm text-ink-faint">
        {PRICING.refundDays}-day refund, one click, no conversation. We email you
        30 days before renewal, and again 7 days before.
      </p>
    </form>
  );
}
