import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Promise from 'promise-polyfill'

if (!window.Promise) {
	window.Promise = Promise
}

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
