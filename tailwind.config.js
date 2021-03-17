module.exports = {
  purge: [ "./src/_includes/**/*.njk", "./src/*.html" ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {},
  },
  plugins: [],
}
