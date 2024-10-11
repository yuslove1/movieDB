/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mywhite: '#EDF6F9',
        mutedred: '#FFDDD2',
        myred: '#E29578',
        cyan: '#83C5BE',
        darkcyan: '#006D77',
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        roboto: ["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [],
}