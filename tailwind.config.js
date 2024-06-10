/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        copernicus: ['GalaxieCopernicus', 'sans-serif'],
        polaris: ['GalaxiePolaris', 'sans-serif'],
        polarisCondensed: ['GalaxiePolarisCondensed', 'sans-serif'],
        // Add more fonts if necessary
      },
      opacity: {
        '20': '0.2',
      },
    },
  },
  plugins: [],
}

