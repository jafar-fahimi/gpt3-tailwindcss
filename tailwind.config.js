/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // "./**/*.html"
  // darkMode: "media", // @media (prefers-color-scheme:dark) based on OS
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        "regal-blue": "#243c5a",
      },
      screens: {
        xsm: "550px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
