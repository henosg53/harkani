/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'primary': '#F3C651',
       
        'grey': '#333',
        'prime': '#219653',
        'secondary': '#A28089',
      },
      fontFamily: {
        'ArchivoBlack': ['ArchivoBlack'],
        'dmsans': ['DMSans'],
        'exotic': ['Exotic']
      },
      backgroundImage:{
        'introDsk': "url('/apartment.jpg') ",
        'introMob': "url('/apartment6.jpg')",
        'justawall': "url('/justawall.PNG')"
      }
    },
  },
  plugins: [],
}

