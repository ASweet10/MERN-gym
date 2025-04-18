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
  },
  plugins: [],
}

