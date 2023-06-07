/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...require('tailwindcss/colors'),
      "main": "#ff4564",
      "second": "#ffdab5",
      "third": "#9663fc"
    }
  },
  plugins: [],
}