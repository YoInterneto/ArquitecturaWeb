<template>
  <div class="main-div">
    <input type="checkbox" id="coffe" v-if="this.coffeValue" checked @click="toggleValue()">
    <input type="checkbox" id="coffe" v-else @click="toggleValue()">
    <label for="coffe"> con café</label>
  </div>
</template>

<script>

export default {
    name: 'optionCoffe',

    props: {
        coffeValue: {
            type: Boolean,
            required: true,
        }
    },

    methods: {
        toggleValue(){
            this.$emit('changecoffe');
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