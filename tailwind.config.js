/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
         'roboto-slab': ['"Roboto Slab"', 'serif'],
         'edu': ['"Edu AU VIC WA NT Hand"', 'cursive']
      },
      colors: {
        'primary': '#032573',
        'secondary': '#ff3366',
        'accent': '#6b46c1',
        'peach': '#D59187'
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}

