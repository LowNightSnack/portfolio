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
      },
      spacing: {
        "700px": "700px",
        "600px": "600px",
        "500px": "500px",
        "400px": "400px",
        "300px": "300px",
        "200px": "200px",
        "100px": "100px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
