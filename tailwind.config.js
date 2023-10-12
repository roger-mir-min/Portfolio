/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
        fontFamily: {
        'acumin': ['Acumin-Pro'],
        'acumin-wide': ['Acumin-Pro-Wide']
      },
      colors: {
        'blau': "rgb(30, 64, 175)"
      }
    },
  },
  plugins: [require("daisyui")]
}
