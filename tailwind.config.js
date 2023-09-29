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
    tablet: '640px', // /// *** OJO ** NO modificar este archivo *** /// //
    // => @media (min-width: 640px) { ... }

    laptop: '1024px',
    // => @media (min-width: 1024px) { ... }

    desktop: '1280px',
    // => @media (min-width: 1280px) { ... }

  },
  plugins: [],
  
}

