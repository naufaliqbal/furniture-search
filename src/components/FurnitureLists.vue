<template>
  <div id="furniture-lists">
    <transition-group
      name="staggered-fade"
      tag="ul"
      :css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <li v-for="(product, index) in filteredProducts" :data-index="index" :key="product.name">
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
import Velocity from 'velocity-animate'
export default {
  name: 'FurnitureLists',
  props: ['filteredProducts', 'outOfStock'],
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 100
      setTimeout(function () {
        Velocity(el, { opacity: 1 }, { complete: done })
      }, delay)
    },
    leave: function (el, done) {
      setTimeout(function () {
        Velocity(el, { opacity: 0 }, { complete: done })
      }, 0)
    }
  }
}
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
