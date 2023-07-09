const Encore = require('@symfony/webpack-encore');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/**/*.html',
  ],
  theme: {
    extend: {
      maxWidth: {
        'prose': '70ch',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        archivo: ['Archivo Black', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pink: '#f1dbd6',
        green: '#728777',
        'dark-green': '#51665D',
        'dark-gray': '#4B5563',
        gray: '#6B7280',
      },
      screens: {
        '3xl': '1700px',
      },
      backgroundImage: {
        'marble': "url('./images/marbre.jpg')",
      },
      fontSize: {
        '12xl': '10rem',
      },
    },
  },
  variants: {},
  corePlugins: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  purge: Encore.isProduction(),
}
