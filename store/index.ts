import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Context } from '@nuxt/types'
import axios from 'axios'

import * as submodule from './submodule'

export const state = () => ({
  email: '',
  counter: 0,
  underZeroAllowance: false,
  navbar_Title: 'asasasssss'
})

type RootState = ReturnType<typeof state>;

export const getters = {
  email: (state: RootState) => state.email,
  fullEmail: (state: RootState) => state.email,
  counter: (state: RootState) => state.counter,
  navbar_Title: (state: RootState) => state.navbar_Title
}

export const mutations = mutationTree(state, {
  setEmail (state, newValue: string) {
    state.email = newValue
  },

  initialiseStore () {
    // console.log('initialised')
  },

  increase (state, payload: number) {
    state.counter = payload
  },

  decrease (state, payload: number) {
    state.counter = payload
  },

  alowanceChnger (state, payload: boolean) {
    state.underZeroAllowance = payload
  },

  navbarTitle (state, payload: string) {
    state.navbar_Title = payload
  }
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async nuxtServerInit ({ commit }) {
      const url = 'https://jsonplaceholder.typicode.com/posts/1'
      const response = await axios.get(url)
      commit('navbarTitle', response.data.title)
    },

    resetEmail ({ commit }) {
      commit('setEmail', 'a@a.com')
    }
  }
)

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  modules: {
    submodule
  }
})
