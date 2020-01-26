import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeClickInternal: 0
  },
  getters:{
    storeClicks: (state) => state.storeClickInternal
  },
  mutations: {
    updateStoreClicks(state, value){
      state.storeClickInternal = value;
    }
  },
  actions: {
    updateClickOnClick({commit}, value){
      commit('updateStoreClicks', value);
    }
  },
  modules: {
  }
})
