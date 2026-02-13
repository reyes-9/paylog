/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#ffffff",
          dark: "#030712",
        },
        color: {
          light: "#000000",
          dark: "#f9fafb",
        },
        accent: {
          purple: "#5444e5",
        },
      },
    },
  },
  plugins: [],
};
