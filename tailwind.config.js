/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav': 'linear-gradient(270deg,#302f39,#223240 95%)'
      },
      colors: {
        choco: '#c47d57',
        'choco.50': '#d4ac8e',
        'choco.10': '#e4ded5',
        'choco.dark': '#b55730',
        'dark-blue': '#223240'
      },
      fontFamily: {
        fauc: 'fauc'
      },
      fontSize: {
        '2xl.1': '1.5625rem'
      },
      spacing: {
        '25': '6.25rem'
      }
    },
  },
  plugins: [],
}
