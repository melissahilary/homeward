"use client";

import Link from "next/link";
import { useEffect } from "react";

const PRIMARY = [
  { label: "Shop", href: "/shop" },
  { label: "The Journal", href: "/journal" },
  { label: "The House", href: "/house" },
  { label: "The Exhibition", href: "/exhibition" },
  { label: "Our Standard", href: "/standard" },
];

const SECONDARY = [
  { label: "Care & Safety", href: "/standard" },
  { label: "Stockists", href: "/house" },
  { label: "Contact", href: "/journal" },
];

export default function MenuOverlay({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[100] bg-ivory transition-opacity duration-500 ease-house ${
        open ? "opacity-100 visible" : "pointer-events-none invisible opacity-0"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-6 md:px-12">
        <button
          onClick={onClose}
          className="caps text-[0.7rem] text-ink"
          aria-label="Close menu"
        >
          Close
        </button>
        <Link
          href="/"
          onClick={onClose}
          className="wordmark text-[0.85rem] text-ink"
        >
          Homeward
        </Link>
        <span className="w-12" aria-hidden="true" />
      </div>

      <nav className="mx-auto grid max-w-5xl grid-cols-1 gap-16 px-8 pt-16 md:grid-cols-2 md:px-12 md:pt-28">
        <ul className="space-y-6">
          {PRIMARY.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onClose}
                className="font-serif text-4xl font-light text-ink transition-opacity duration-500 hover:opacity-55 md:text-5xl"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-5 md:pt-3">
          {SECONDARY.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onClose}
                className="caps text-[0.72rem] text-soft transition-opacity duration-500 hover:opacity-55"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-10">
            <p className="max-w-xs font-serif text-lg italic leading-body text-soft">
              A world of one&rsquo;s own. Turn down the lights.
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
}
