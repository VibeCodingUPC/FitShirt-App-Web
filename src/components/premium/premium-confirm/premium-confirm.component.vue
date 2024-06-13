<script setup>

</script>

<template>
  <div class="container" aria-label="Confirm process notification">
    <h1>Realizar Mejora</h1>
    <h2>Estimado cliente ¿Está seguro que desea realzar esta mejora</h2>
    <router-link to="/profile" tag="button" class="router-button">
      Confirmar
    </router-link>
    <router-link to="/premium" tag="button" class="router-button">
      Cancelar
    </router-link>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: .8em;
  padding: 1.6em;
}
.container h1 {
  font-size: 2.4em;
  font-weight: 600;
}
.container h2 {
  font-size: 1.4em;
  font-weight: 400;
}
.container .router-button {
  padding: 1em .6em;
  border-radius: 10px;
  cursor: pointer;
  background-color: #333333;
  color: #dedede;
  font-size: 1.1em;
  font-weight: 600;
  text-align: center;
}
</style>