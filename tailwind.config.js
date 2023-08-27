const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cl1: "#2B2D42",
        cl2: "#8D99AE",
        cl3: "#EDF2F4",
        cl4: "#EF233C",
        cl5: "#D90429",
        cl6: "#669BBC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
