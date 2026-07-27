import Link from "next/link";
import { BRAND } from "@/lib/site";
import { SignupButton } from "@/components/SignupDrawer";

// Nav is for recognition. "How It Works" anchors to the diagram; we never
// call it "The Loop" here, vocabulary is taught in body copy, not the nav.
const NAV = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/tools", label: "Free Tools" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/our-rules", label: "Our Rules" },
];

export default function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
          {BRAND.wordmark}
        </Link>

        {/* Middle, recognition labels. */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="nav-underline text-base text-ink-soft hover:text-ink">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right, log in, then the one action. */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/login" className="nav-underline text-base text-ink-soft hover:text-ink">
            Log in
          </Link>
          <SignupButton className="btn !px-4 !py-2 text-base">Get started</SignupButton>
        </div>
      </div>
    </header>
  );
}
