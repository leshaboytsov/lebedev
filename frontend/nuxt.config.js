

export default {
  head: {
    title: 'Site',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      {rel: 'stylesheet', href:'/assets/style.css'},
      // { rel: 'stylesheet', href: '/path/to/plyr.css'}
    ]
  },

  css: [
  ],

  plugins: [
    // { src: '~/plugins/yandex-metrika.js', mode: 'client' }
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: process.env.BASE_URL
  },

  build: {
    transpile: ['plyr/dist/plyr.min.js'],

  },
}
