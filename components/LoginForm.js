"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Magic link only, with a six-digit code as the alternate path for anyone
// locked out of email on a shared or work device. No passwords: a forgotten
// password on day 31 is a churn event. Demo: any input unlocks the portal.
export default function LoginForm() {
  const router = useRouter();
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  if (step === "email") {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStep("sent");
        }}
        className="rounded-xl border border-line bg-white p-6"
      >
        <label htmlFor="email" className="mb-1.5 block text-base font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="field"
        />
        <button type="submit" className="btn btn-block mt-4 text-lg">
          Send me a link
        </button>
        <p className="mt-3 text-sm text-ink-faint">
          No passwords. We send a link to sign in, and a six-digit code you can
          use from any device.
        </p>
      </form>
    );
  }

  return (
    <div className="rounded-xl border border-line bg-white p-6">
      <p className="text-lg font-semibold text-ink">Check your email.</p>
      <p className="mt-2 text-base text-ink-soft">
        We sent a sign-in link to {email || "your inbox"}. Tap it, or enter the
        six-digit code below from any device.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/app");
        }}
        className="mt-5"
      >
        <label htmlFor="code" className="mb-1.5 block text-base font-medium text-ink">
          Six-digit code
        </label>
        <input
          id="code"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
          placeholder="000000"
          className="field font-mono tracking-[0.4em]"
        />
        <button type="submit" className="btn btn-block mt-4 text-lg">
          Enter
        </button>
      </form>
      <button
        onClick={() => setStep("email")}
        className="mt-4 text-sm text-ink-faint underline underline-offset-2"
      >
        Use a different email
      </button>
    </div>
  );
}
