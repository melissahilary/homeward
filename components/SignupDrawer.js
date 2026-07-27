"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import SignupForm from "./SignupForm";

const SignupCtx = createContext(null);

export function SignupProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openSignup = useCallback(() => setOpen(true), []);
  const closeSignup = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <SignupCtx.Provider value={{ open, openSignup, closeSignup }}>
      {children}
      <Drawer open={open} onClose={closeSignup} />
    </SignupCtx.Provider>
  );
}

export function useSignup() {
  return useContext(SignupCtx) || { open: false, openSignup: () => {}, closeSignup: () => {} };
}

// A "Get started" button that opens the drawer in place, keeping the visitor
// in marketing context instead of a page swap.
export function SignupButton({ className = "btn", children = "Get started" }) {
  const { openSignup } = useSignup();
  return (
    <button type="button" onClick={openSignup} className={className}>
      {children}
    </button>
  );
}

function Drawer({ open, onClose }) {
  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[100] ${open ? "" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Get started"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col overflow-y-auto border-l border-line bg-paper transition-transform duration-300 ease-house ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <span className="text-lg font-semibold text-ink">Set up your cycle</span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-base text-ink-soft hover:text-ink"
          >
            Close
          </button>
        </div>
        <div className="px-6 py-6">
          <p className="mb-5 text-base text-ink-soft">
            Four fields, under ninety seconds. Your last fill date is the only
            gate.
          </p>
          {open && <SignupForm />}
        </div>
      </div>
    </div>
  );
}
