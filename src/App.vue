<template>
  <div id="app">
    <div id="app__logo">
      <img :src="require('./assets/fabelio.png')" alt="logo">
    </div>
    <div id="app__header">
      <div id="app__header--search">
        <FurnitureSearch></FurnitureSearch>
      </div>
      <div id="app__header--filter">
        <FurnitureStyles></FurnitureStyles>
        <FurnitureDelivery></FurnitureDelivery>
      </div>
    </div>
    <div id="app__body">
      <FurnitureLists></FurnitureLists>
    </div>
  </div>
</template>

<script>
import FurnitureStyles from './components/FurnitureStyles'
import FurnitureDelivery from './components/FurnitureDelivery'
import FurnitureLists from './components/FurnitureLists'
import FurnitureSearch from './components/FurnitureSearch'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    FurnitureStyles,
    FurnitureDelivery,
    FurnitureLists,
    FurnitureSearch
  },
  beforeMount() {
    this.getFurnitureData()
  },
  methods: mapActions({
    getFurnitureData: "api/getFurnitureData",
  })
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
