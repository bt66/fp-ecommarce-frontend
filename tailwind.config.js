/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default-white' : '#F4F4EC',
        'default-dark': '#1E1E1E',
        'dark-secondary': '#121212',
        'white-secondary' : '#ADAFB2',
        'btn-primary' : '#C4EB12',
        'btn-primary-hover' : '#1a8a42'
      }
    },
  },
  plugins: [],
}
