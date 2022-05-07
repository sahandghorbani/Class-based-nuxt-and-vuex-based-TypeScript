import { getAccessorFromStore } from 'typed-vuex'

import { createStore } from 'C:/Users/AasalDigital-DM1/Desktop/nuxt-ts/.nuxt/store'

const storeAccessor = getAccessorFromStore(createStore())

export default async ({ store }, inject) => {
  inject('accessor', storeAccessor(store))
}
