import Vue from "vue";
import Vuex from "vuex";
import { stock } from "@/service/stock";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    daily: []
  },
  mutations: {
    add_daily: (state, payload) => {
      state.daily = payload;
    }
  },
  actions: {
    getDaily: ({ commit }) => {
      let data = stock.getDaily();
      commit("add_daily", data);
    }
  },
  modules: {}
});
