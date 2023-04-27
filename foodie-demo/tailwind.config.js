/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'sysco-blue': {
        100: '#008CD2',
        40: '#99D1ED',
        15: '#D9EEF9'
      },
      'lighter-blue': {
        100: '#E9EEF5',
        40: '#F7F9FB',
        15: '#FCFDFE',
      },
      'dark-blue': {
        100: '#1B4F72',
        40: '#A4B9C7',
        15: '#DEE5EA'
      },
      'light-grey': {
        100: '#E4E5E6',
        40: '#F5F5F5',
        15: '#FBFCFC'
      },
      'almond': {
        light: '#FFF9F0',
        dark: '#EDE0CC'
      },
      white: '#ffffff',
      black: '#000000'

    },
    fontFamily: {
      sans: ['myriad-pro', 'sans-serif'],
      serif: ['calluna', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}