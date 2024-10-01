/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["cupcake", "dark","corporate"],
  },
  theme: {
    extend: {},
    
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar'),
  ],
}
