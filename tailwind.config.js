module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // you can specify your own colors, font families etc here.
        primary: '#1301fe',
        secondary: '#ffb6c1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
