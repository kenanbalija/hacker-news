import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    searchFilterType: '',
  },
  mutations: {
    setSearch (state, payload) {
      state.search = payload;
    },
  },
  actions: {
    setSearch({ commit, state }, payload) {
      commit('setSearch', payload);
    },
  }
})
