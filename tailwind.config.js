/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        stylish: ["Allison", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "rgb(250 232 255)",
        secondary: "#f87171",
      },
    },
  },
  plugins: [],
};
