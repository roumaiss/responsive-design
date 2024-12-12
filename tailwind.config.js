/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#ffffff",
        textColor: "#000000",
        subColor: "#6D6D6D",
      },
      backgroundImage: {
        textGradient: "linear-gradient(95.53deg, #AADE93 -0.21%, #B8C53D 100.24%)",
        heroimage: "url('res/hero.png')",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        dol:["Dela Gothic One", "sans-serif"]
      },
    },
  },
  plugins: [],
};
