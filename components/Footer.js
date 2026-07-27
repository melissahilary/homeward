import Link from "next/link";
import { BRAND } from "@/lib/site";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "The message library", href: "/messages" },
      { label: "What your script allows", href: "/rights" },
      { label: "Glossary", href: "/glossary" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Get started", href: "/signup" },
    ],
  },
  {
    title: "Safety & support",
    links: [
      { label: "If you cannot get your medication", href: "/safety" },
      { label: "Support", href: "/support" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "What we never do", href: "/charter" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Delete your data", href: "/delete" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      {/* Standalone Consumer Health Data Privacy link — a separate, distinct
          homepage link, as Washington's My Health My Data Act requires. */}
      <div className="border-b border-line bg-panel">
        <div className="mx-auto max-w-content px-5 py-4 md:px-8">
          <Link href="/health-data" className="link text-base font-medium">
            Consumer Health Data Privacy Policy
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-content px-5 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="max-w-xs">
            <p className="text-lg font-semibold text-ink">{BRAND.wordmark}</p>
            <p className="mt-2 text-base text-ink-soft">
              A coordination tool for the monthly Schedule II cycle. Not a
              clinical service. We do not diagnose, treat, or send anything for
              you.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.title}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-faint">
                {col.title}
              </p>
              <ul className="space-y-2 text-base">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-ink-soft hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-faint md:flex-row md:justify-between">
          <p>© 2026 {BRAND.name}. Cash only. No third-party payers.</p>
          <p>Your health data coordinates your refill and nothing else.</p>
        </div>
      </div>
    </footer>
  );
}
