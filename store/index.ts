import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'

import * as submodule from './submodule'

export const state = () => ({
  email: '',
  counter: 0 ,
  underZeroAllowance : false          
})

type RootState = ReturnType<typeof state>

export const getters = {
  email: (state: RootState) => state.email,
  fullEmail: (state: RootState) => state.email,
  counter:(state: RootState) => state.counter,
}

export const mutations = mutationTree(state, {
  setEmail(state, newValue: string) {
    state.email = newValue
  },

  initialiseStore() {
    console.log('initialised')
  },

  increase(state , payload:number) {
    state.counter = payload
  } ,

  decrease(state , payload:number) {
    state.counter =payload
  } ,

  alowanceChnger(state , payload:boolean) {
    state.underZeroAllowance = payload
  }
  
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async resetEmail({ commit }) {
      commit('setEmail', 'a@a.com')
    },
  }
)

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  modules: {
    submodule,
  },
})
