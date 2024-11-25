/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Plus_Jakarta_Sans": ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        "lime" : "#d7da2f",
        "red" : "#d73328",
        "slate100" : "#e3f3fd",
        "slate300" : "#9abed5",
        "slate500" : "#6b94a8",
        "slate700" : "#4e6e7e",
        "slate900" : "#122f3f" 
      }
    },
  },
  plugins: [],
}