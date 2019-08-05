import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Promise from 'promise-polyfill'

if (!window.Promise) {
	window.Promise = Promise
}

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    furnitureStyles: [],
    furnitureProducts: []
  },
  mutations: {
    setFurnitureStates(state, payload) {
      state.furnitureProducts = payload.products
      state.furnitureStyles = payload.furniture_styles
    }
  },
  actions: {
    async getFurnitureData({dispatch, commit}) {
      const payload = await dispatch("fetchApi")
      commit("setFurnitureStates", payload)
    },
    async fetchApi() {
      return fetch('https://www.mocky.io/v2/5c9105cb330000112b649af8')
      .then(response => response.json())
      .then(data => data)
    }
  },
  getters: {
    furnitureProducts(state) {
      return state.furnitureProducts
    },
    furnitureStyles(state) {
      return state.furnitureStyles
    }
  }
})

store.dispatch("getFurnitureData")

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
