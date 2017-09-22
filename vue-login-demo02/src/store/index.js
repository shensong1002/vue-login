import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  getters: {

  },
  actions: {
    loginIn({ commit }, obj) {
      commit('loginIn', obj)
    },
    loginOut({ commit }) {
      commit('loginOut')
    }
  },
  mutations: {
    loginIn(state, obj) {
      state.token = obj.token
    },
    loginOut(state) {
      state.token = null
    }
  }
})