/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B2447",
        secondary: "rgb(209 213 219)",
        accent: "#FF414D",
        tertiary: "#47597E",
        icon: "#9AC8CD",
      },
    },
  },
  plugins: [],
};

