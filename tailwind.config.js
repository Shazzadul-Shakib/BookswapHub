/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#070F2B",
        secondary: "rgb(209 213 219)",
        accent: "#FF414D",
        tertiary: "#535C91",
        icon: "#9AC8CD",
      },
    },
  },
  plugins: [],
};

