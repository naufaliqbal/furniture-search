<template>
  <div id="furniture-delivery">
    <div
      id="furniture-delivery__list"
      @mouseenter="expandStyles($event)"
      @mouseleave="collapseStyle($event)"
    >
      <p>{{placeholder ? placeholder : 'Delivery Time'}}</p>
      <ul>
        <li v-for="(value, index) in rangeDelivery" :key="value" :data-index="index">
          <div class="list-wrapper">
            <label :for="value">
              {{value}}
              <input
                type="checkbox"
                :id="index"
                :value="value"
                @click="selectRange($event)"
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: mapGetters("furnitureDelivery", [
    "rangeDelivery",
    "placeholder"
  ]),
  methods: mapActions("furnitureDelivery", [
    "collapseStyle",
    "expandStyles",
    "selectRange"
  ])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  z-index: 1;
  background-color: white;
  box-shadow: 0px 0px 8px lightgray;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}
li {
  margin: 20px 15px;
}
a {
  color: #42b983;
}
p {
  margin: 0;
  color: #989a9b;
  padding: 10px;
}
p:before {
  content: "\25bc";
  float: right;
  transform: rotate(180deg);
  transition: all 0.3s ease-in-out;
}
p.expanded:before {
  transform: rotate(0deg);
  transition: all 0.3s ease-in-out;
}
p.expanded ~ ul {
  visibility: visible;
  opacity: 1;
}
#furniture-delivery {
  width: 50%;
  margin: 20px 25px;
}
#furniture-delivery__list {
  position: relative;
  background-color: #fff;
  color: black;
  border-radius: 5px;
}
#furniture-delivery__list *:hover {
  cursor: pointer;
}
.list-wrapper {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.list-wrapper:hover input ~ .checkmark {
  background-color: #ccc;
}
.list-wrapper input:checked ~ .checkmark {
  background-color: #1ab385;
}
.list-wrapper input {
  position: absolute;
  opacity: 0;
  height: 25px;
  width: 100%;
  right: 0;
  cursor: pointer;
  z-index: 1;
  margin: 0;
}
.list-wrapper .checkmark {
  position: absolute;
  top: 0;
  right: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 5px;
}
.list-wrapper .checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.list-wrapper input:checked ~ .checkmark:after {
  display: block;
}
</style>
