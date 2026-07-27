"use client";

import { useState } from "react";

// A single contact form. Succeeds client-side; the button confirms.
export default function ContactForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="rounded-xl border border-line bg-white p-6" role="status">
        <p className="text-lg font-semibold text-ink">Received.</p>
        <p className="mt-2 text-base text-ink-soft">
          A real person will reply within one business day. No chatbot in
          between.
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
        <div>
          <label htmlFor="c-email" className="mb-1.5 block text-base font-medium text-ink">
            Email
          </label>
          <input id="c-email" type="email" required autoComplete="email" placeholder="you@email.com" className="field" />
        </div>
        <div>
          <label htmlFor="c-msg" className="mb-1.5 block text-base font-medium text-ink">
            How can we help?
          </label>
          <textarea id="c-msg" required rows={5} className="field resize-y" placeholder="Tell us what is going on." />
        </div>
      </div>
      <button type="submit" className="btn btn-block mt-4">
        Send
      </button>
    </form>
  );
}
