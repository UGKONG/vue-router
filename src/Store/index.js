import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    num: 0
  },
  mutations: {
    setNum: (state, payload) => state.num = payload,
  },
  actions: {
    setNum: ({commit}, payload) => commit('setNum', payload),
  }
})