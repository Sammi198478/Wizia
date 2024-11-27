/** @type {import('tailwindcss').Config} */

const {nextui, colors} = require("@nextui-org/theme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#02242A",
        primary: "#0FF1F6",
        secondary: "#FFFFFF",
      },
      fontFamily: {Montserrat:'"Montserrat", sans-serif'},
    },
  },
  darkMode: "class",
  plugins: [nextui()],
  
};

