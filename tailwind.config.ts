import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        uploadAreaFractionMobile: "0.9fr",
        uploadAreaFractionDesktop: "0.5fr",
      },
      spacing: {
        navHorizontalPadding: "2rem",
        navVerticalPadding: "1rem",
      },
      colors: {
        primary: "rgb(var(--color-primary))",
        text: "rgb(var(--color-text) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        warn: "rgb(var(--color-warn) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        transparent: "transparent",
        current: "currentColor",
      },
    },
  },
  plugins: [],
} satisfies Config;
