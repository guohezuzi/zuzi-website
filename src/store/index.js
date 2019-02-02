import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    article: {}
  },
  getters: {},
  mutations: {
    update(state, article) {
      state.article = article
    }
  }
})
