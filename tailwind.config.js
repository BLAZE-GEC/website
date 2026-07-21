/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px"
      },
    },
    fontFamily: {
      primary: "var(--font-body)",
      heading: "var(--font-heading)",
    },
    colors: {
      // All theme colors now read from CSS variables (defined in globals.css)
      // so they can flip automatically between light and dark mode.
      // The "/ <alpha-value>" pattern is what keeps opacity modifiers like
      // bg-primary/10 or text-white/70 working correctly.
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      textMuted: "rgb(var(--color-text-muted) / <alpha-value>)",
      bgPrimary: "rgb(var(--color-bg-primary) / <alpha-value>)",
      bgSecondary: "rgb(var(--color-bg-secondary) / <alpha-value>)",
      bgTertiary: "rgb(var(--color-bg-tertiary) / <alpha-value>)",
      cardBg: "rgb(var(--color-card-bg) / <alpha-value>)",
      accent: {
        DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
        light: "rgb(var(--color-accent-light) / <alpha-value>)",
        hover: "rgb(var(--color-accent-hover) / <alpha-value>)",
      },
      // Kept static — used by the original Stairs/PageTransition components,
      // unrelated to the light/dark theme system.
      base3: "#26413C",
      base2: "#3E505B",
      base1: "#8AB0AB",
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        '3d': '4px 4px 0px rgba(26, 38, 28, 1)',
        '3d-hover': '8px 8px 0px rgba(26, 38, 28, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}