// Read-only view for a partner or parent. No send buttons, no edits — a
// second person we serve, not just a feature. Demo state.
export default function CaregiverView() {
  return (
    <div className="max-w-measure rounded-xl border border-line bg-white p-6">
      <div className="flex items-center justify-between">
        <p className="text-base text-ink-soft">You are viewing</p>
        <span className="rounded-full bg-panel px-3 py-1 text-sm font-medium text-ink-soft">
          Read-only
        </span>
      </div>
      <p className="mt-1 text-xl font-semibold text-ink">Sam&rsquo;s cycle</p>

      <dl className="mt-5 divide-y divide-line border-t border-line">
        <Row label="Day" value="24 of 30" />
        <Row label="Medication" value="amphetamine XR 20mg" />
        <Row label="Today's step" value="Request the next fill" />
        <Row label="Status" value="Prescriber request sent · awaiting the script" tone="pending" />
      </dl>

      <p className="mt-5 text-base text-ink-soft">
        You can see where Sam is in the loop and what today needs. You cannot send
        anything or change anything — this view is read-only by design, and Sam can
        turn it off any time.
      </p>
    </div>
  );
}

function Row({ label, value, tone }) {
  const color = tone === "pending" ? "text-pending" : "text-ink";
  return (
    <div className="flex items-baseline justify-between gap-4 py-3">
      <dt className="text-base text-ink-soft">{label}</dt>
      <dd className={`text-right text-base font-medium ${color}`}>{value}</dd>
    </div>
  );
}
