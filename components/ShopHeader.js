"use client";

import Link from "next/link";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { useCart } from "./CartProvider";

const CATEGORY_NAV = [
  { label: "Rituals", href: "/shop#rituals" },
  { label: "Instruments", href: "/shop#instruments" },
  { label: "Formulas", href: "/shop#formulas" },
  { label: "Home", href: "/shop#home" },
  { label: "Water", href: "/shop#water" },
  { label: "The Recovery Kit", href: "/shop#kit" },
];

export default function ShopHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 bg-ivory">
        {/* Utility strip */}
        <div className="bg-ivory-deep">
          <p className="caps mx-auto max-w-[1600px] px-5 py-2 text-center text-[0.58rem] text-soft md:px-10">
            Complimentary delivery on orders over $150 within the US.
          </p>
        </div>

        {/* Wordmark row */}
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10">
          <div className="flex flex-1 items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-3 text-ink"
              aria-label="Open menu"
            >
              <svg width="20" height="9" viewBox="0 0 20 9" fill="none" aria-hidden="true">
                <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1" />
              </svg>
              <span className="caps hidden text-[0.62rem] sm:inline">Search</span>
            </button>
          </div>

          <Link href="/" className="wordmark text-[0.78rem] text-ink md:text-[0.95rem]">
            Homeward
          </Link>

          <div className="flex flex-1 items-center justify-end gap-5 md:gap-6">
            <Link
              href="/house"
              className="caps hidden text-[0.62rem] text-ink transition-opacity duration-500 hover:opacity-60 md:inline"
            >
              Gift Cards
            </Link>
            <Link
              href="/house"
              className="caps hidden text-[0.62rem] text-ink transition-opacity duration-500 hover:opacity-60 sm:inline"
            >
              Account
            </Link>
            <span className="font-serif text-base text-ink">
              Bag ({count})
            </span>
          </div>
        </div>

        {/* Category nav */}
        <nav className="border-t hairline">
          <ul className="scroll-row mx-auto flex max-w-[1600px] items-center justify-start gap-7 overflow-x-auto px-5 py-4 md:justify-center md:px-10">
            {CATEGORY_NAV.map((c) => (
              <li key={c.label} className="shrink-0">
                <Link
                  href={c.href}
                  className="font-serif text-lg text-ink transition-opacity duration-500 hover:opacity-55"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
