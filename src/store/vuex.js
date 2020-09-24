import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    airlines: {},
    flights: [],
    options: {
      is_not_segmented: "Только прямые",
      is_bagage: "Только с багажом",
      is_refundable: "Только возвратные"
    },
    filter: {
      options: {},
      airlines: {}
    }
  },
  getters: {
    airlines: state => {
      return state.airlines;
    },
    options: state => {
      return state.options;
    },
    filter: state => {
      return state.filter;
    },
    flights: state => {

      function checkAirline(flight) {
        return state.filter.airlines[flight.validating_carrier] 
      }
      
      function checkOption(flight) {
        let is_not_segmented = flight.itineraries[0][0].segments.length > 1;
        let is_refundable = flight.refundable;
        let is_bagage = flight.services['0PC'] === undefined || flight.services['20KG']  || flight.services['1PC'] 
        
        let ans  = true;

        if(state.filter.options.is_not_segmented && ans){
          ans = is_not_segmented
        }
        if(state.filter.options.is_bagage && ans){
          ans = is_bagage
        }
        if(state.filter.options.is_refundable && ans){
          ans = is_refundable
        }

        return ans
      }

      return  state.flights.filter(checkAirline).filter(checkOption);
    },
  },
  mutations: {
    INIT_AIRLINERS: (state, data) => {
      state.airlines = data;
    },
    INIT_FLIGHTS: (state, data) => {
      state.flights = data;
    },
    UPDATE_FILTER: (state, data) => {
      state.filter[data.type_filter] = data.value;
    },
  },
  actions: {
    INIT_AIRLINERS: (context, payload) => {
      context.commit('INIT_AIRLINERS', payload);
    },
    INIT_FLIGHTS: (context, payload) => {
      context.commit('INIT_FLIGHTS', payload);
    },
    UPDATE_FILTER: (context, payload) => {
      context.commit('UPDATE_FILTER', payload);
    },
  }
})
