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
      // --- Ideator design palette (from the target design) ---
      primary: "#1a261c",        // main dark text / was #03120E
      secondary: "#4a5c4e",      // secondary text
      textMuted: "#728476",
      bgPrimary: "#f6f4ee",      // main cream background
      bgSecondary: "#edeae0",
      bgTertiary: "#dfdacb",
      cardBg: "#ece7dc",
      accent: {
        DEFAULT: "#d28b26",      // gold accent (buttons, highlights)
        light: "#e5a953",
        hover: "#b8731d",
      },
      // --- Kept from the original project so nothing breaks ---
      // Stairs.jsx, StairTransition.jsx, SideTransition.jsx and
      // Contact/page.jsx all reference "base1" directly — do not remove it.
      base3: "#26413C",
      base2: "#3E505B",
      base1: "#8AB0AB",
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