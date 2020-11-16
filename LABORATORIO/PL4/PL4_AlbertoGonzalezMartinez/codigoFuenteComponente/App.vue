<template>
  <div class="contenedor-componente">
    <componente-restaurante></componente-restaurante>
  </div>
</template>

<script>
import componenteRestaurante from '@/components/componenteRestaurante'

export default {
  name: 'App',

  components: {
    componenteRestaurante
  }
}
</script>

<style>
#app {
  background-color: rgb(40, 39, 41);
  font-family: "Segoe UI";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
