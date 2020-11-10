<template>
  <div class="contenedor-componente">
    <strong>RESTAURANTE </strong>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
