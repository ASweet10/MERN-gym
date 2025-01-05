/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "oswald": ['Oswald', 'sans'],
        "DMSans": ['DMSans', 'sans'],
      }
    },
    colors: {
      "primary": "#9F0000",
      "secondary": "#AD2D3A",
      "shadow": "#BBBBBB",
      "error": "#E7195A",
      "transparent": "transparent",
      "black": "#000000",
      "white": "#FFFFFF",
      "darkGrey": "#202020",
      "darkGreyHover": "#404040",
      "lightBlue": "#1877F2",
      "lightGrey": "#bdb4b3",
      "grey": "#e8e8e8",
    },
  },
  plugins: [],
}

