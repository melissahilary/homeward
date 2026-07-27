/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep, quiet, expensive. Dark is category-breaking here (every ADHD
        // product is bright and whimsical) and functionally kinder — sensory
        // ease, and legible on a dying phone. One action accent; green/amber/
        // red strictly for status.
        paper: "#121210", // page base, near-black warm
        panel: "#1C1A16", // alternate surface band
        line: "#34312B", // hairline borders
        ink: "#F4F1E8", // primary text, warm off-white
        "ink-soft": "#B7B3A8", // secondary text
        "ink-faint": "#8A857A", // tertiary text
        // Status — carries information or does not appear.
        stock: "#5FBE86", // green: in stock / a right
        pending: "#D9A63E", // amber: pending
        expired: "#E77E63", // red: broken / blocked
        focus: "#7CA9FF", // functional: focus rings only
        // Cards. Overriding `white` flips every existing bg-white to the
        // dark surface without touching each file.
        white: "#1B1915",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        base: ["1.125rem", { lineHeight: "1.6" }],
        lg: ["1.25rem", { lineHeight: "1.55" }],
        xl: ["1.5rem", { lineHeight: "1.4" }],
        "2xl": ["2rem", { lineHeight: "1.2" }],
        "3xl": ["2.75rem", { lineHeight: "1.1" }],
        // Enormous, Prenuvo-discipline display type.
        display: ["clamp(2.75rem, 8vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        measure: "38rem",
        content: "64rem",
      },
      borderColor: {
        DEFAULT: "#34312B",
      },
    },
  },
  plugins: [],
};
