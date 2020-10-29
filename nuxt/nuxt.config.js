export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Stwórzmy Twoją część internetu – Amadeusz Chomiak',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Nie marnuj czasu zgadując, jakiej strony potrzebujesz. Wybierz specjalistę, który przeprowadzi Cię przez cały proces i zadba, aby Twoja nowa strona, była szybka, wygodna i elegancka.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/polyfills',
    '~/plugins/focusLock',
    { src: '~/plugins/vueUnicons', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config) {
      // ..
      config.module.rules.find((loader) =>
        loader.test.toString().includes('png|jpe?g|gif|svg|webp')
      ).test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {},
        },
      })
      // Sets webpack's mode to development if `isDev` is true.
      // if (isDev) {
      //   config.mode = 'development'
      // }
    },
  },
  generate: {
    // choose to suit your project
    interval: 2000,
  },
}
