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
        // Near-black on off-white. Functional color only for actions/status.
        paper: "#FAFAF7",
        panel: "#F2F2ED",
        line: "#E2E2DA",
        ink: "#17171A",
        "ink-soft": "#54544E",
        "ink-faint": "#84847C",
        // Status — carries information or does not appear.
        stock: "#1F7A44", // green: in stock
        pending: "#9A6800", // amber: pending
        expired: "#B4321F", // red: expired / blocked
        focus: "#1D4ED8", // functional accent: focus + inline links
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        // Body at 18px minimum.
        base: ["1.125rem", { lineHeight: "1.6" }],
        lg: ["1.25rem", { lineHeight: "1.55" }],
        xl: ["1.5rem", { lineHeight: "1.4" }],
        "2xl": ["2rem", { lineHeight: "1.2" }],
        "3xl": ["2.75rem", { lineHeight: "1.1" }],
      },
      maxWidth: {
        // Line length capped ~65 characters.
        measure: "38rem",
        content: "64rem",
      },
      borderColor: {
        DEFAULT: "#E2E2DA",
      },
    },
  },
  plugins: [],
};
