import Link from "next/link";
import DocPage from "@/components/DocPage";
import { ACCOUNT } from "@/lib/site";

export const metadata = {
  title: "Your account",
  description:
    "Plan, renewal date, one-click cancel, refund, receipt, and data export — all at the same depth.",
};

// Demo state. Cancel lives at the same depth as everything else.
export default function AccountPage() {
  return (
    <DocPage title={ACCOUNT.title}>
      <div className="mt-8 max-w-measure rounded-xl border border-line bg-white p-6">
        <dl className="divide-y divide-line">
          <Row label="Plan" value={ACCOUNT.plan} />
          <Row label="Price" value={ACCOUNT.price} />
          <Row label="Status" value={ACCOUNT.status} />
          <Row label="Renews" value={ACCOUNT.renews} />
        </dl>
      </div>

      <div className="mt-6 grid max-w-measure grid-cols-1 gap-3 sm:grid-cols-2">
        <Action label="Cancel subscription" note="One click. No retention maze." />
        <Action label="Request refund" note="Full refund within 30 days." />
        <Action label="Download receipt" note="PDF for your records." />
        <Action label="Export my data" note="Everything we hold." />
      </div>

      <p className="mt-6 max-w-measure text-base text-ink-soft">
        Want to remove your health data too?{" "}
        <Link href="/delete" className="link">
          Delete your data
        </Link>
        .
      </p>
    </DocPage>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between py-3">
      <dt className="text-base text-ink-soft">{label}</dt>
      <dd className="text-base font-medium text-ink">{value}</dd>
    </div>
  );
}

function Action({ label, note }) {
  return (
    <div className="rounded-xl border border-line bg-white p-4">
      <p className="text-base font-medium text-ink">{label}</p>
      <p className="mt-1 text-sm text-ink-faint">{note}</p>
    </div>
  );
}
