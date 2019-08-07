import Vue from "vue"
import Vuex from "vuex"
import api from "../api/api"
import furnitureDelivery from "./modules/furnitureDelivery"
import furnitureStyles from "./modules/furnitureStyles"
import furnitureSearch from "./modules/furnitureSearch"
import furnitureLists from "./modules/furnitureLists"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = false

export default new Vuex.Store({
  strict: debug,
  modules: {
    api,
    furnitureDelivery,
    furnitureStyles,
    furnitureSearch,
    furnitureLists
  }
})