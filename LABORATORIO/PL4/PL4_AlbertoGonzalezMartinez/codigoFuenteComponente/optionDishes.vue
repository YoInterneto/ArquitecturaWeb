<template>
  <div class="main-div">
    <select class="content" id="options" v-model="dishElection" @dblclick="addDish(dishElection, dishes)" multiple>
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
</style>