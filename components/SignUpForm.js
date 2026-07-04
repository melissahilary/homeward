"use client";

import { useState } from "react";

// Newsletter / RSVP form — succeeds client-side, button becomes "Received."
export default function SignUpForm({
  placeholder = "Email address",
  button = "Sign Up",
  variant = "light",
  type = "email",
}) {
  const [done, setDone] = useState(false);
  const dark = variant === "dark";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex w-full max-w-md items-stretch"
    >
      <label className="sr-only" htmlFor="signup-field">
        {placeholder}
      </label>
      <input
        id="signup-field"
        type={type}
        required
        disabled={done}
        placeholder={placeholder}
        className={`min-w-0 flex-1 border bg-transparent px-4 py-3.5 font-serif text-lg outline-none placeholder:text-[0.8rem] placeholder:uppercase placeholder:tracking-[0.2em] ${
          dark
            ? "border-[rgba(246,241,230,0.3)] text-warmwhite placeholder:text-steel"
            : "hairline border text-ink placeholder:text-soft"
        }`}
      />
      <button
        type="submit"
        disabled={done}
        className={`shrink-0 px-6 text-[0.66rem] uppercase tracking-[0.24em] ${
          dark ? "bg-warmwhite text-charcoal" : "bg-charcoal text-warmwhite"
        }`}
        style={{ fontFamily: "var(--font-jost)" }}
      >
        {done ? "Received." : button}
      </button>
    </form>
  );
}
