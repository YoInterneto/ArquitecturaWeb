<template>
  <div class="main-div">
    <select id="selected" multiple aria-readonly="true">
        <option :value="option.id" v-for="(option, index) in dishes" :key="index">
            {{ option.name }}
        </option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'selelectedDishes',

  props: {
    dishes: {
      type: Array,
      required: true,
    }
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