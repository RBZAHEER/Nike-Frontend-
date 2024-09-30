/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      size: {
        128: "45rem",
      },
    },
    fontFamily: {
      hero_heading: ["Bebas_Neue", "sans-serif"],
    },
  },
  plugins: [],
};
