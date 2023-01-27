/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // "./**/*.html"
  // darkMode: "media", // @media (prefers-color-scheme:dark) based on OS
  darkMode: ["class"],
  theme: {
    extend: {
      flexGrow: {
        2: "2",
        0.75: "0.75",
      },
    },
    plugins: [],
  },
};
