/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      Rotate: {
        '-270': '-270deg',
        270: '270deg',
      }
    },
  },
  plugins: [],
}
