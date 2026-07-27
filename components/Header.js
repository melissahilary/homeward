import Link from "next/link";
import { BRAND } from "@/lib/site";

const NAV = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/tools", label: "Free tools" },
  { href: "/diagram", label: "The diagram" },
  { href: "/#pricing", label: "Pricing" },
];

export default function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
          {BRAND.wordmark}
        </Link>
        <nav className="flex items-center gap-4 md:gap-6">
          <ul className="hidden items-center gap-5 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-base text-ink-soft hover:text-ink">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/signup" className="btn !px-4 !py-2 text-base">
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}
