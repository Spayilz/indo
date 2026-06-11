import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        midnight: "#0B1928",      // deep ocean at twilight
        midnightDeep: "#060F1B",  // abyss
        midnightWarm: "#16263A",  // softer panel
        // Paper / cream cards
        paper: "#F4ECDB",
        paperDark: "#E8DCBF",
        paperShadow: "#D8CBA9",
        ink: "#1A1814",
        // Tropical accents
        saffron: "#E8A93D",
        saffronDeep: "#B57E1F",
        lava: "#E45846",
        lavaDeep: "#A8341E",
        jade: "#3F8A6D",
        jadeDeep: "#236149",
        turquoise: "#5BB6B0",
        turquoiseDeep: "#2C7975",
        sunset: "#E66B85",
        ash: "#8C8478",
        smoke: "#5A5142",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
} satisfies Config;
