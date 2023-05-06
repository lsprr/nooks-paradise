/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('/pattern.jpg')",
        'background': "url('/background.jpg')",
      },
      colors: {
        'skyBlue': '#8EDCE6',
        'beige': '#F5EADD',
        'darkGray': '#2F3939',
        'darkGreen': '#017069',
        'sienna': '#78512C',
        'creamWhite': '#f8f8f0',
        'creamGreen': '#e9f4ec',
        'limeGreen': '#A0CDA2',
        'brightBlue': '#1c99cf',
        'darkYellow': '#f1e26f',
        'lightBeige': '#fdfad8',
        'darkBlue': '#2d6895',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
