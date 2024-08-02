/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#032573',
        'secondary': '#ff3366',
        'accent': '#6b46c1',
      }
    },
  },
  plugins: [],
}

