/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["cupcake", "dark","pastel"],
  },
  theme: {
    extend: {},
    
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar'),
  ],
}
