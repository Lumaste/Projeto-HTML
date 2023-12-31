/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inder: ['Inder', 'sans-serif']
      }
    },
  },
  plugins: [],
}

