<template>
  <div id="app">
    <div id="app__logo">
      <img :src="fabelioLogo" alt="fabelio-logo">
    </div>
    <div id="app__header">
      <div id="app__header--search">
        <FurnitureSearch v-model="searchKeyword"></FurnitureSearch>
      </div>
      <div id="app__header--filter">
        <FurnitureStyles v-model="checkedStyles"></FurnitureStyles>
        <FurnitureDelivery></FurnitureDelivery>
      </div>
    </div>
    <!-- <div id="app__body">
      <FurnitureLists :filteredProducts="filteredProducts" :outOfStock="isOutOfStock"></FurnitureLists>
    </div> -->
  </div>
</template>

<script>
import FurnitureStyles from './components/FurnitureStyles'
import FurnitureDelivery from './components/FurnitureDelivery'
import FurnitureLists from './components/FurnitureLists'
import FurnitureSearch from './components/FurnitureSearch'
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {
    FurnitureStyles,
    FurnitureDelivery,
    FurnitureLists,
    FurnitureSearch
  },
  data () {
    return {
      checkedStyles: [],
      // rangeDelivery: [],
      searchKeyword: '',
      isOutOfStock: false,
      fabelioLogo: require('./assets/fabelio.png')
    }
  },
  beforeMount() {
    this.$store.dispatch("getFurnitureData");
  },
  computed: {
    ...mapGetters([
      "furnitureStyles"
    ]),
    furnitureProducts() {
      const products = this.$store.getters.furnitureProducts.map(el => {
          if (+el.delivery_time <= 7) {
            el['range_delivery'] = '1 week'
          } else if (+el.delivery_time > 7 && +el.delivery_time <= 14) {
            el['range_delivery'] = '2 weeks'
          } else if (+el.delivery_time > 14 && +el.delivery_time <= 30) {
            el['range_delivery'] = '1 month'
          } else {
            el['range_delivery'] = 'more'
          }
          return el
      })
      return products
    },
    // filteredProducts () {
    //   let vm = this
    //   if (
    //     !vm.searchKeyword &&
    //     !vm.rangeDelivery.length &&
    //     !vm.checkedStyles.length
    //   ) {
    //     return vm.furnitureProducts
    //   } else {
    //     let filtered = vm.furnitureProducts
    //       .filter(el => {
    //         return vm.searchKeyword
    //           ? el.name.toLowerCase().indexOf(vm.searchKeyword) > -1
    //           : el
    //       })
    //       .filter(el => {
    //         return vm.rangeDelivery.length
    //           ? vm.rangeDelivery.indexOf(el.range_delivery) > -1
    //           : el
    //       })
    //       .filter(el => {
    //         return vm.checkedStyles.length
    //           ? el.furniture_style.some(r => vm.checkedStyles.indexOf(r) > -1)
    //           : el
    //       })

    //     // handle if products is out of stock
    //     filtered.length ? (vm.isOutOfStock = false) : (vm.isOutOfStock = true)

    //     return filtered
    //   }
    // }
  }
}
</script>

<style>
#app {
  width: 60%;
  margin: auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app__header {
  background-color: #3589dd;
  color: white;
  min-width: 380px;
}
#app__logo {
  text-align: center;
  padding: 20px;
  min-width: 380px;
}
#app__logo img {
  width: 12rem;
}
#app__header--filter {
  display: flex;
  align-items: center;
}
</style>
