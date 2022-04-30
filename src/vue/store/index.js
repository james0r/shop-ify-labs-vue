import { createStore } from 'vuex'
import Cart from './cart'

export const store = createStore({
  state() {
    return {
      visible: false,
    }
  },
  getters: {
    getVisible(state) {
      return state.visible
    },
  },
  mutations: {
    TOGGLE(state) {
      state.visible = !state.visible
    },

    SHOW(state) {
      state.visible = true
    },

    HIDE(state) {
      state.visible = false
    },
  },
  actions: {
    toggle({ commit }) {
      commit('TOGGLE')
    },

    show({ commit }) {
      commit('SHOW')
    },

    hide({ commit }) {
      commit('HIDE')
    },
  },
  modules: {
    Cart
  }
})
