/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#dfe3fa0f',
        secondaryColor: '#141625',
        accentColor: '#7e88c3',
        paleRed: '#ec5757',
        darkBlue: '#252945'

      }
    },
  },
  plugins: [],
}

