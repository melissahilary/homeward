"use client";

import { useEffect, useState } from "react";
import { SignupButton } from "@/components/SignupDrawer";

// The proven DTC pattern is a persistent CTA so a decided visitor never has to
// hunt for the button. Kept quiet for a depleted audience: mobile only, and it
// only appears once you have scrolled past the opening.
export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.1);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur-sm transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        <span className="text-sm text-ink-soft">$99 for the year, paid once.</span>
        <SignupButton className="btn !px-5 !py-2.5 text-base">Get started</SignupButton>
      </div>
    </div>
  );
}
