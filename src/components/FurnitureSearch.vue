<template>
  <div id="furniture-search">
    <input type="text" placeholder="Search furniture" @input="inputKeywords($event)">
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: mapActions("furnitureSearch", [
    "inputKeywords"
  ]),
  computed: mapGetters("furnitureSearch", [
    "keywords"
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#furniture-search {
  margin: 0 30px;
  padding: 15px 0 8px;
  width: -moz-max-content;
  width: max-content;
  border-bottom: 1px solid #f5f5f5;
}
#furniture-search input {
  background: 0 0;
  border: none;
  font-size: 24px;
  color: #fff;
}
</style>
