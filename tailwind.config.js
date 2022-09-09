/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        100: "100%",
        90: "90%",
        80: "80%",
        50: "50%",
        img: "200px",
      },
      
      height: {
        100: "90vh",
        80: "80vh",
        img: "200px",
      },

      colors: {
        main: "#eee3d2",
        gray: "gray",
        dark: "rgba(0, 0, 0, 0.552)",
      },

      screens: {
        xsm: "445px",
        sm: "665px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        menu: " 'Bungee Outline', cursive",
      },

      fontSize: {
        "4xl": "6rem",
      },
    },
  },
  plugins: [],
};
