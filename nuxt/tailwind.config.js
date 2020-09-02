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
        50: 'hsl(224, 90%, 95%)',
        100: 'hsl(224, 80%, 90%)',
        200: 'hsl(224, 60%, 80%)',
        300: 'hsl(224, 48%, 70%)',
        400: 'hsl(224, 36%, 60%)',
        500: 'hsl(224, 30%, 50%)',
        600: 'hsl(224, 50%, 40%)',
        700: 'hsl(224, 60%, 30%)',
        800: 'hsl(224, 80%, 20%)',
        900: 'hsl(224, 100%, 10%)',
        950: 'hsl(224, 100%, 7%)',
      },
      warning: 'hsl(41, 100%, 49%)',
      error: 'hsl(0, 70%, 37%)',
      black: 'hsl(0, 0%, 3%)',
      white: 'hsl(0, 0%, 97%)',
    },
    //* typography
    fontFamily: false,
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
