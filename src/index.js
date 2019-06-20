import Vue from 'vue'
import App from './App.vue'
import Promise from 'promise-polyfill'
import 'whatwg-fetch'

if (!window.Promise) {
	window.Promise = Promise
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
