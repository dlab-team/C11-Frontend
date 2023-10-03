/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fonFamily: {
      'poppins': ['Poppins'],      
    },
    colors: {
      'celeste': '#E2F2FE',
      'azul': '#2738F5'
    },

  },
  plugins: [],
  
}

