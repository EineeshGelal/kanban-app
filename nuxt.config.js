export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  // ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: process.env.TITLE,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'A simple kanban board where items can be dragged and dropped from the list.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],

  plugins: [
    { mode: 'client', src: '~/plugins/click-outside' },
    { mode: 'client', src: '~/plugins/verte' },
    { mode: 'client', src: '~/plugins/draggable' },
  ],

  colorMode: {
    preference: 'light',
  },

  purgeCSS: {
    whitelist: ['dark-mode'],
  },

  modules: [
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://www.npmjs.com/package/@nuxtjs/toast
    '@nuxtjs/toast',
    // https://github.com/rubystarashe/nuxt-vuex-localstorage-example
    [
      'nuxt-vuex-localstorage',
      {
        localStorage: ['kanban'],
      },
    ],
  ],
  manifest: {
    name: 'PWA test',
    short_name: 'Nuxt.js PWA',
    lang: 'en',
    display: 'standalone',
  },

  pwa: {
    icon: false // disables the icon module
  },

  toast: {
    position: 'bottom-center',
    duration: 3000,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ['nuxt-vuex-localstorage'],
  },
}
