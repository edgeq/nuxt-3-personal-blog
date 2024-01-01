// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    "~/node_modules/bulma/bulma.sass",
    "~/assets/style/main.scss",
  ],
  modules: ['@nuxt/image', "@vueuse/nuxt"],
  image: {
    dir: 'assets/img'
  }
})