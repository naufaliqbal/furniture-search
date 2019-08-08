<template>
  <div id="furniture-lists">
    <transition-group
      name="staggered-fade"
      tag="ul"
      :css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-if="!outOfStock"
    >
      <li v-for="(product) in products" :key="product.name">
        <div class="product-name">
          <span class="product-name__title">{{product.name}}</span>
          <span
            class="product-name__price"
          >{{"IDR " + String(product.price).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}}</span>
        </div>
        <div class="product-description">
          <p>{{product.description}}</p>
        </div>
        <div class="product-style">
          <p>{{product.furniture_style.join(', ')}}</p>
        </div>
        <div class="product-delivery-days">
          <span>{{product.delivery_time > 1 ? product.delivery_time + ' days' : product.delivery_time + ' day'}}</span>
        </div>
      </li>
    </transition-group>
    <div v-if="outOfStock" class="empty-notification">
      <h3>Barang tidak ditemukan</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: mapActions("furnitureLists", ["beforeEnter", "enter"]),
  computed: {
    products({$store}) {
      return $store.getters["furnitureLists/products"]
    },
    outOfStock() {
      const products = this.products
      if (products.length === 0 && !products.__ob__) return true
      return false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.empty-notification {
  background-color: beige;
}
p {
  font-size: 13px;
  line-height: 1.6;
}
h3 {
  padding: 20px;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: repeat(4, auto);
  /* grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  grid-template-rows: auto; */
  grid-gap: 25px;
}
li {
  height: auto !important;
  padding: 20px;
  box-shadow: 0px 0px 8px lightgray;
  border-radius: 5px;
  display: grid;
  grid-template-rows: minmax(10px, auto) 2fr repeat(2, minmax(10px, auto));
  grid-template-columns: auto;
}
a {
  color: #42b983;
}
.product-name {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
}
.product-name__title {
  font-size: 16px;
}
.product-name__price {
  font-size: 14px;
  color: #ea7910;
}
.product-style p {
  color: #0042ff;
  font-weight: 600;
}
.product-delivery-days {
  text-align: right;
  color: #0042ff;
  font-size: 14px;
}
</style>
