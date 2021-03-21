module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.njk',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    animation: [],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}