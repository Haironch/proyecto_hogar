// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#06D6A0",
        primary: "#118AB2",
        navbar: "#FFD166",
        dark: "#073B4C",
        Red: "#EF476F"
      },
      fontFamily: {
        font: ['Titillium Web', "sans-serif"]
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};