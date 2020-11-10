<template>
  <div class="main-div">
    <input type="checkbox" id="cocktail" v-if="this.cocktailValue" checked @click="toggleValue()">
    <input type="checkbox" id="cocktail" v-else @click="toggleValue()">
    <label for="coffe"> con copa</label>
  </div>
</template>

<script>

export default {
    name: 'optionCocktail',

    props: {
        cocktailValue: {
            type: Boolean,
            required: true,
        }
    },

    methods: {
        toggleValue(){
            this.$emit('changecocktail');
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