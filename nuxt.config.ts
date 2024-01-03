// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  content: {},
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    "~/node_modules/bulma/bulma.sass",
    "~/assets/style/main.scss",
  ],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Syne: {
        wght: '400..800',
      },
      Roboto: true,
      Inter: '200..700',
      'Pixelify+Sans': {
        wght: '400..700'
      }
    }
  },
  image: {
    dir: 'assets/img'
  },
  modules: ['@nuxt/image', "@vueuse/nuxt", "@nuxtjs/google-fonts", "@nuxt/content"]
})