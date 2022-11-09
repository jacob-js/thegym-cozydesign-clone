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
        'trans': "url('https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61bbc96064c698bc567db060_noise10.webp')",
        'about': "url('https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61bbc96064c698bc567db060_noise10.webp'),linear-gradient(180deg,rgba(213,173,143,.3),rgba(213,173,143,.3)),url('https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/607077c4d94a9d833a9cd183_stacked-waves-haikei.svg')"
      },
      backgroundSize: {
        '12.5': '3.125rem',
        'ab': '50px, auto, cover'
      },
      borderRadius: {
        '2.5': '0.625rem'
      },
      boxShadow: {
        'test-1': '0 10px 24px 0 rgb(45 72 80 / 60%)',
        'test-2': '0 10px 24px 0 rgb(45 72 80 / 70%)',
        'test-3': '0 10px 24px 0 rgb(196 125 87 / 90%)',
        'test-4': '0 10px 24px 0 rgb(196 125 87 / 80%)',
        'border-icon': '0 8px 24px 0 rgb(82 91 115 / 12%)'
      },
      colors: {
        choco: '#c47d57',
        'choco.50': '#d4ac8e',
        'choco.10': '#e4ded5',
        'choco.dark': '#b55730',
        'dark-blue': '#223240',
        'dark-blue.80': '#2d4850',
        'light': '#e4ded5'
      },
      fontFamily: {
        fauc: 'fauc',
        geoma: 'geoma'
      },
      fontSize: {
        '2xl.1': '1.5625rem',
        '4xl.3': '2.5rem',
        '22.5': '5.625rem',
        '17.5': '4.375rem',
        '9.25': '2.3125rem',
        '7.5': '1.875rem',
        '5.5': '1.375rem'
      },
      lineHeight: {
        '13.5': '3.375rem'
      },
      maxWidth: {
        '8xl': '87.5rem',
        '300': '75rem',
        '12/10': '120%',
        '30': '7.5rem',
      },
      spacing: {
        '240': '60rem',
        '55': '13.75rem',
        '35': '8.75rem',
        '30': '7.5rem',
        '25': '6.25rem',
        '22.5': '5.625rem',
        '15': '3.75rem',
        '7.5': '1.875rem',
        '3.75': '0.9375rem',
        '2.5': '0.625rem'
      }
    },
  },
  plugins: [
    require("tailwindcss-text-fill")
  ],
}
