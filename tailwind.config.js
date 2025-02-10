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
        sm:"640px",
        md:"768px",
        lg:"960px",
        xl:"1200px"
      },
    },
    fontFamily:{
      primary:"var(--font-inter)",
    },
    colors:{
      primary:"#03120E",
      acccent:{
        DEFAULT:'#1A1D1A',
        hover:"#8AB0AB"
      },
      secondary:"#1A1D1A",
      base3:"#26413C",
      base2:"#3E505B",
      base1:"#8AB0AB",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
}