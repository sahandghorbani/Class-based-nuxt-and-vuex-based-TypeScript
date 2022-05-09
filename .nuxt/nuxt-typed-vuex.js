import { getAccessorFromStore } from 'typed-vuex'

import { createStore } from '/Users/sahand/Desktop/Class-based-nuxt-and-vuex-based-TypeScript/.nuxt/store'

const storeAccessor = getAccessorFromStore(createStore())

export default async ({ store }, inject) => {
  inject('accessor', storeAccessor(store))
}
