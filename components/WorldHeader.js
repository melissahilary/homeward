"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";

// World chrome — transparent over the hero, solidifying to ivory on scroll.
export default function WorldHeader({ overHero = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solid, setSolid] = useState(!overHero);

  useEffect(() => {
    if (!overHero) return;
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  const dark = overHero && !solid;
  const tone = dark ? "text-warmwhite" : "text-ink";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ease-house ${
          solid ? "bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_rgba(46,43,37,0.08)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10">
          <div className="flex flex-1 items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className={`flex items-center gap-3 ${tone}`}
              aria-label="Open menu"
            >
              <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden="true">
                <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="9" x2="22" y2="9" stroke="currentColor" strokeWidth="1" />
              </svg>
              <span className="caps hidden text-[0.66rem] sm:inline">Menu</span>
            </button>
          </div>

          <Link href="/" className={`wordmark text-[0.78rem] md:text-[0.95rem] ${tone}`}>
            Homeward
          </Link>

          <div className="flex flex-1 items-center justify-end gap-5 md:gap-7">
            <Link
              href="/journal"
              className={`caps hidden text-[0.66rem] transition-opacity duration-500 hover:opacity-60 md:inline ${tone}`}
            >
              The Journal
            </Link>
            <Link
              href="/house"
              className={`btn-solid ${dark ? "!bg-warmwhite !text-charcoal" : ""}`}
            >
              Enter the House
            </Link>
          </div>
        </div>
      </header>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
