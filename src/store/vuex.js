import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    airlines: {},
    flights: [],
    options: ["Только прямые", "Только с багажом", "Только возвратные"]
  },
  getters: {
    airlines: state => {
      return state.airlines;
    },
    flights: state => {
      return state.flights;
    },
    options: state => {
      return state.options;
    }
  },
  mutations: {
    INIT_AIRLINERS: (state, data) => {
      state.airlines = data;
    },
    INIT_FLIGHTS: (state, data) => {
      state.flights = data;
    },
  },
  actions: {
    INIT_AIRLINERS: (context, payload) => {
      context.commit('INIT_AIRLINERS', payload);
    },
    INIT_FLIGHTS: (context, payload) => {
      context.commit('INIT_FLIGHTS', payload);
    },
  }
})