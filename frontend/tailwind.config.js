/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "oswald": ['Oswald', 'sans']
      }
    },
    colors: {
      "primary": "#9F0000",
      "secondary": "#AD2D3A",
      "shadow": "#BBBBBB",
      "error": "#E7195A",
      "black": "#000000",
      "white": "#FFFFFF",
      "darkGrey": "#202020",
      "lightGrey": "#787878",
      "grey": "#D4D4D4",
    },
  },
  plugins: [],
}

