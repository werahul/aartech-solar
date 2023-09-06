/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      "antonio": ['Antonio', ' sans-serif'],
      'Barlow': ['Barlow', ' sans-serif']
    },
    extend: {
      colors: {
        'foot-blue': '#0C013D',
        'nav-color': '#262626D9',
        'box-red': ' #B80001',
        'box-bg': '#F6F6F6',
        'lightBlack': '#262626 '

      },
      
     
    },
    plugins: [],
  }
}
