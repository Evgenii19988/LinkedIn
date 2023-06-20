/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#3456FF",
        opacityBlue: "#3456FFBF",
        darkGreen: "#27AE60",
        lightGreen: "#4FCB8D",
        mainBlack: "#070928",
        opacityBlack: "rgba(7, 9, 40, 0.75)",
        mainGray: "#F8F8FA",
      },
    },
  },
  plugins: [],
};
