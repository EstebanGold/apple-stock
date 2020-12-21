import Vue from "vue";
import Vuex from "vuex";
import { stock } from "@/service/stock";
import { compareDate } from "@/helpers/dates";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dates: []
  },
  getters: {
    getMinDate: state => {
      return state.dates[0].Date;
    },
    getMaxDate: state => {
      return state.dates[state.dates.length - 1].Date;
    },
    getDataAreaGraph: state => typePrice => {
      return state.dates.map(date => {
        return [new Date(date.Date).getTime(), date[typePrice]];
      });
    },
    getDataCandelGraph: state => {
      return state.dates.map(date => {
        return {
          x: date.Date,
          y: [date.Open, date.High, date.Low, date.Close]
        };
      });
    }
  },
  mutations: {
    add_dates: (state, payload) => {
      state.dates = payload.sort(compareDate);
    }
  },
  actions: {
    getDates: async ({ commit }, typeDate) => {
      // commit("add_dates", stock.getData(typeDate));
      let dates = await stock.getDataURL(typeDate);

      commit("add_dates", dates);
    }
  },
  modules: {}
});
