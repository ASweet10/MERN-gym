/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans']
      }
    },
    colors: {
      "primary": "#9f0000",
      "secondary": "#ad2d3a",
      "shadow": "#BBBBBB",
      "error": "#E7195A",
      "bg": "#DDDDDD",
      "nav-bg": "#EEEEEE",
      "black": "#000000",
      "white": "#d6d6d6",
      "grey": "#b5b5b5",
      "darkGrey": "#202020",
    },
  },
  plugins: [],
}