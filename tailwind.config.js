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
        'nav': 'linear-gradient(270deg,#302f39,#223240 95%)',
        'hero': 'linear-gradient(90deg,#302f39,#223240)',
        'trans': "url('https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61bbc96064c698bc567db060_noise10.webp')"
      },
      backgroundSize: {
        '12.5': '3.125rem'
      },
      borderRadius: {
        '2.5': '0.625rem'
      },
      colors: {
        choco: '#c47d57',
        'choco.50': '#d4ac8e',
        'choco.10': '#e4ded5',
        'choco.dark': '#b55730',
        'dark-blue': '#223240',
        'light': '#e4ded5'
      },
      fontFamily: {
        fauc: 'fauc',
        geoma: 'geoma'
      },
      fontSize: {
        '2xl.1': '1.5625rem',
        '4xl.3': '2.5rem',
        '22.5': '5.625rem'
      },
      maxWidth: {
        '8xl': '87.5rem',
        '300': '75rem',
        '12/10': '120%'
      },
      spacing: {
        '240': '60rem',
        '55': '13.75rem',
        '35': '8.75rem',
        '25': '6.25rem',
        '22.5': '5.625rem',
        '15': '3.75rem',
        '7.5': '1.875rem',
        '2.5': '0.625rem'
      }
    },
  },
  plugins: [
    require("tailwindcss-text-fill")
  ],
}
