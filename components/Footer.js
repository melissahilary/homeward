import Link from "next/link";
import { BRAND, POSITIONING } from "@/lib/site";
import { TRADEMARK_NOTICE } from "@/lib/drugs";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "The diagram", href: "/diagram" },
      { label: "About", href: "/about" },
      { label: "Who we serve", href: "/who-we-serve" },
      { label: "The charter", href: "/charter" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Free tools",
    links: [
      { label: "Refill countdown", href: "/tools/countdown" },
      { label: "State rules lookup", href: "/tools/state-rules" },
      { label: "Message generator", href: "/tools/message" },
      { label: "Calendar export", href: "/tools/calendar" },
    ],
  },
  {
    title: "The map",
    links: [
      { label: "Which counter works", href: "/pharmacies" },
      { label: "Report an outcome", href: "/report" },
      { label: "How the map is built", href: "/the-map" },
      { label: "Methodology", href: "/methodology" },
      { label: "Caregiver access", href: "/caregiver" },
      { label: "Email previews", href: "/email" },
    ],
  },
  {
    title: "Library",
    links: [
      { label: "By medication", href: "/drugs" },
      { label: "State rules", href: "/states" },
      { label: "Your three rights", href: "/rights" },
      { label: "Message library", href: "/messages" },
      { label: "Glossary", href: "/glossary" },
      { label: "Who this is not for", href: "/not-for" },
    ],
  },
  {
    title: "Safety & support",
    links: [
      { label: "If you cannot get your medication", href: "/safety" },
      { label: "Help center", href: "/help" },
      { label: "Contact", href: "/contact" },
      { label: "Account & billing", href: "/account" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Delete your data", href: "/delete" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
  {
    title: "Operational",
    links: [
      { label: "Security", href: "/security" },
      { label: "Changelog", href: "/changelog" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      {/* Standalone Consumer Health Data Privacy link — separate and distinct,
          on every page including the homepage, per My Health My Data. */}
      <div className="border-b border-line bg-panel">
        <div className="mx-auto max-w-content px-5 py-4 md:px-8">
          <Link href="/health-data" className="link text-base font-medium">
            Consumer Health Data Privacy Policy
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-content px-5 py-12 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
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

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-lg font-semibold text-ink">{BRAND.wordmark}</p>
          <p className="max-w-xl text-sm text-ink-faint">
            {POSITIONING.category} Not a clinical service. We make no clinical
            judgment, supply no medication, and send nothing for you.
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-2 text-sm text-ink-faint md:flex-row md:justify-between">
          <p>© 2026 {BRAND.name}. Cash only. No third-party payers.</p>
          <p>Your health data coordinates your refill and nothing else.</p>
        </div>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-ink-faint">
          {TRADEMARK_NOTICE}
        </p>
      </div>
    </footer>
  );
}
