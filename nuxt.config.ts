import { Configuration } from '@nuxt/types'

const config: Configuration = {
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', 'nuxt-typed-vuex', '@nuxtjs/eslint-module'],

  // modules:[ '@nuxtjs/eslint-module'] ,

  components: true

}

export default config
