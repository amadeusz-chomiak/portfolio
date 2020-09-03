/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    //* color
    colors: {
      primary: {
        50: '#E8EFFF',
        100: '#D2DEF7',
        200: '#ADC1EA',
        300: '#8AA4D8',
        400: '#6789CC',
        500: '#4F6FB0',
        600: '#2851A2',
        700: '#1E3D7A',
        800: '#102757',
        900: '#051330',
        950: '#040E22',
      },
      warning: '#F9AC00',
      error: '#9F1D1D',
      black: '#070707',
      white: '#F8F8F8',
    },
    //* typography
    fontFamily: false,
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
