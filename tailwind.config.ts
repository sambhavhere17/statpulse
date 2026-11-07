import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF9500",
          charcoal: "#292C32",
          card: "#383C44",
          border: "#4A4F58",
          cream: "#FFF6EE",
          "cream-card": "#FFF8F0",
          tint: "#FFEBCF",
          "orange-border": "#FDDDAA",
          body: "#555B66",
          line: "#EAE4DC",
        },
        chart: {
          orange: "#FF9500",
          amber: "#FFB22E",
          yellow: "#FFCB5C",
          charcoal: "#292C32",
          gray: "#8A8F98",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: { site: "1280px" },
      boxShadow: {
        card: "0 18px 48px rgba(41, 44, 50, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
