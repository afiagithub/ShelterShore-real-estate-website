/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animatedSettings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 500,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 500,
        classes: ['bounce', 'heartBeat', 'swing', 'fadeIn']
      },
      fontFamily: {
        mont: ['"Montserrat"', "sans-serif"],
        pac: ['"Pacifico"', "sans-serif"],
        bebas: ['"Bebas Neue"', "sans-serif"],
      },
      colors: {
        'deep-purple': '#702963',
        'magenta': '#5F374B',
      },
    },
  },
  plugins: [require("daisyui"),
  require('tailwindcss-animatecss'),],

}

