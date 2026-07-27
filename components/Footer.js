import Link from "next/link";
import { BRAND } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto max-w-content px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-measure">
            <p className="text-lg font-semibold text-ink">{BRAND.wordmark}</p>
            <p className="mt-2 text-base text-ink-soft">
              A coordination tool for the monthly Schedule II cycle. Not a
              clinical service. We do not diagnose, treat, or send anything for
              you.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-base">
            <Link href="/charter" className="text-ink-soft hover:text-ink">
              What we never do
            </Link>
            <Link href="/#pricing" className="text-ink-soft hover:text-ink">
              Pricing
            </Link>
            <Link href="/#faq" className="text-ink-soft hover:text-ink">
              Questions
            </Link>
            <Link href="/signup" className="text-ink-soft hover:text-ink">
              Get started
            </Link>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-faint md:flex-row md:justify-between">
          <p>© 2026 {BRAND.name}. Cash only. No third-party payers.</p>
          <p>Your health data coordinates your refill and nothing else.</p>
        </div>
      </div>
    </footer>
  );
}
