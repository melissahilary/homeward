"use client";

import { useState } from "react";
import { DELETE } from "@/lib/legal";

// Working self-service actions, not an email address. Client-side demo:
// each action confirms in place.
export default function DeletePanel() {
  const [doneIndex, setDoneIndex] = useState(null);

  return (
    <div className="space-y-4">
      {DELETE.options.map((opt, i) => (
        <div key={opt.label} className="rounded-xl border border-line bg-white p-5">
          <p className="text-lg font-medium text-ink">{opt.label}</p>
          <p className="mt-1 text-base text-ink-soft">{opt.note}</p>
          {doneIndex === i ? (
            <p className="mt-4 text-base font-medium text-stock" role="status">
              Done. We have started this request and emailed you a confirmation.
            </p>
          ) : (
            <button
              onClick={() => setDoneIndex(i)}
              className="btn btn-secondary mt-4 !py-2.5 text-base"
            >
              Confirm
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
