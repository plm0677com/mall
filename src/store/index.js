import Vue from "vue";
import Vuex from 'vuex'

import mutations from "@/store/mutations";
import getters from "@/store/getters";
import actions from "@/store/actions";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  getters,
  mutations,
  actions,
  modules: {}
})

export default store
