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
    },
  },
  plugins: [require("daisyui")]
}

