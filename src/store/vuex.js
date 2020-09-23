import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    count: 0,
    airlines: {},
    flights: [],
  },
  getters: {
    count: state => {
      return state.count;
    },
    airlines: state => {
      return state.count;
    },
    flights: state => {
      return state.count;
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