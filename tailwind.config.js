/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#cbf1f5",
        "secondary" : "#D94F53",
        "tertiary" : "#000000",
      }, 
    },
    screens: {
      lg: {max: '2023px'},

      sm: {max: '1000px'},
    },
  },
  plugins: [],
};