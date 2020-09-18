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
      transparent: 'transparent',
    },
    //* filters
    filter: {
      none: 'none',
      blur: 'blur(1px)',
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(2px)',
    },
    //* typography
    fontFamily: false,
    extend: {
      screens: {
        'sm-h': { raw: '(min-height: 400px)' },
        'md-h': { raw: '(min-height: 680px)' },
        'lg-h': { raw: '(min-height: 800px)' },
        'xl-h': { raw: '(min-height: 1000px)' },
      },
      spacing: {
        14: '3.5rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
      },
      maxWidth: {
        '2xs': '16rem',
      },
      minHeight: {
        nuxt: 'calc(100vh - 20rem)',
      },
      borderWidth: {
        3: '3px',
      },
      borderRadius: {
        xl: '1rem',
      },
      backgroundSize: {
        56: '14rem',
        12: '3rem',
      },
      zIndex: {
        '-10': '-10',
      },
      opacity: {
        85: '0.85',
        90: '0.90',
        95: '0.95',
      },
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  variants: {
    borderColor: [
      'responsive',
      'hover',
      'focus',
      'hocus',
      'active',
      'group-active',
    ],
    backgroundColor: [
      'responsive',
      'hover',
      'focus',
      'hocus',
      'active',
      'group-active',
    ],
    scale: ['responsive', 'active', 'group-active'],
    translate: ['responsive', 'active', 'group-active'],
    borderOpacity: ['responsive', 'active', 'group-active'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-active'],
    margin: ['responsive', 'first'],
    minHeight: ['responsive', 'last'],
    scrollSnapType: ['responsive'],
  },
  plugins: [
    require('tailwindcss-blend-mode')(),
    require('tailwindcss-scroll-snap'),
    require('tailwindcss-filters'),
    require('tailwindcss-interaction-variants'),
  ],
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
