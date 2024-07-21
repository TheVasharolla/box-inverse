/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'  ],
  theme: {
    extend: {
      colors: {
        primary: "#42FF00",
        secondary: "#4DAE3D"
      }
    },
    breakpoints: {
      'sm': '400px', // updated value
      'md': '1024px',
      'lg': '1280px',
      'xl': '1536px',
      '2xl': '1920px',
    },
  },
  plugins: [],
}

