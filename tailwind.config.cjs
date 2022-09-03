/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        black: {
          800: "#0E0E0F",
          700: "#121214",
        },

        gray: {
          900: "#3E3E42",
          700: "#A8A8B3",
          600: "#E1E1E6",
        },

        green: {
          700: "#04D361",
        },

        purple: {
          700: "#633BBC",
          600: "#8257E5",
        },
      },
    },
  },
  plugins: [],
};
