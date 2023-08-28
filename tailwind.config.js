/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"


  ],
  theme: {
    extend: {
      colors: {
        // primaryColor: '#dfe3fa0f',
        primaryColor: "#1e2139",
        secondaryColor: '#141625',
        accentColor: '#7c5dfa',
        paleRed: '#ec5757',
        darkBlue: '#252945',
        paleCyan: "#7e88c3",
        paleText: '#888eb0'
      }
    },
  },

  plugins: [
    require('flowbite/plugin')
  ]
}

