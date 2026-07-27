import Link from "next/link";
import { BRAND } from "@/lib/site";

export default function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
          {BRAND.wordmark}
        </Link>
        <nav className="flex items-center gap-5">
          <Link href="/charter" className="text-base text-ink-soft hover:text-ink">
            What we never do
          </Link>
          <Link href="/signup" className="btn !px-4 !py-2 text-base">
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}
