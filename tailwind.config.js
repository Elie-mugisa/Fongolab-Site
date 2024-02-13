/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        main: "#0B1120",
        filter_main: "#0B112072",
        filter_main2: "#0B1120BA",
        prim: "#0EA5E9",
        filter_prim: "#0EA4E961",
        second: "#F844AA",
        filter_white: "#FFFFFF80",
      },
      keyframes: {
        move: {
          "0%": { transform: "Scale(1)" },
          "50%": { transform: "Scale(1.2)" },
          "90%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
