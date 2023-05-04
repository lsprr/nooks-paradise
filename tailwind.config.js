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
        'lightBg': "url('/lightBackground.jpg')",
        'darkBg': "url('/darkBackground.jpg')",
        'pattern': "url('/pattern.jpg')",
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
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
