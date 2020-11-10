<template>
  <div class="main-div">
    <select id="options" v-model="dishElection" @dblclick="addDish(dishElection, dishes)" multiple>
      <option :value="option.id" v-for="(option, index) in dishes" :key="index">
        {{ option.name }}  ({{ option.price}}€)
      </option>
    </select>
  </div>
</template>

<script>

export default {

  name: 'optionDishes',

  props: {
    dishes: {
      type: Array,
      required: true,
    }
  },

  data() {
    return {
      dishElection: [],
    }
  },

  methods: {
    addDish(position, dishArray){
      var dish = dishArray[position-1];
      console.log(`Se ha seleccionado ${dish.id}) ${dish.name}`);
      this.$emit('add', dish);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>