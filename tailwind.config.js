/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',                   // Your main HTML file
    './src/**/*.{js,ts,jsx,tsx}',     // All JS/TS/JSX/TSX files in the src directory
    
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: 
    // eslint-disable-next-line no-undef
    [require('daisyui')],
  
}