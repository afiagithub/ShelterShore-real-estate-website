/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['"Montserrat"', "sans-serif"],
        pac: ['"Pacifico"', "sans-serif"],
        signika: ['"Signika Negative"', "sans-serif"],
      },
      colors: {
        'deep-purple': '#702963',
        'magenta': '#5F374B',
      },
    },
  },
  plugins: [require("daisyui")],
}

