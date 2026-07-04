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
        ivory: "#F3EFE5",
        "ivory-deep": "#EDE7D9",
        charcoal: "#26231E",
        ink: "#2E2B25",
        soft: "#57524A",
        travertine: "#D8CBB2",
        camel: "#A97F52",
        steel: "#A8A49C",
        warmwhite: "#F6F1E6",
        tile: "#EDE8DB",
        "tile-hover": "#E7E0CF",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        caps: ["var(--font-jost)", "Jost", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        cap: "0.3em",
        capwide: "0.42em",
        wordmark: "0.55em",
      },
      lineHeight: {
        display: "1.15",
        body: "1.75",
      },
      transitionTimingFunction: {
        house: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      maxWidth: {
        prose: "62ch",
      },
    },
  },
  plugins: [],
};
