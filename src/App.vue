<script setup>
</script>

<template>


  <pv-card class ="login-card">
    <template #header> <p class="scaletitle">Iniciar Sesión</p>
    </template>
    <template #content>
      <p>Username</p>
      <pv-inputText type="text" v-model="value" />
      <p>Contraseña</p>
      <pv-inputText type="text" v-model="value" />
      <p></p>
      <pv-button label="Login" severity="info" class="scaleblock"/>
      <p>¿Olvidó su contraseña?</p>
      <pv-card class ="login2-card">
        <p>O inicia sesión con: </p>
      </pv-card>
    </template>
    <template #footer>
      <p>¿Nuevo en Fit Shirt?</p>
      <pv-button label="Registrate" severity="info" class="scaleblock"/>
    </template>
  </pv-card>



</template>
<style scoped>
.login2-card {
  width: 180px;
  background-color: white;
  color: white;
  border-radius: 15px;
  padding: 30px;
}
.scaletitle{
  text-align: center;
  align-items: center;
  font-size: 30px;
  font-family: Roboto, sans-serif;

}
.scaleblock{
  display: block;
  width: 100%;
  border: none;
  text-align: center;
  background-color: #4d94ff;
  color: white;
  padding: 03px 28px;
  border-radius: 05px;
}
.login-card {
  width: 280px;
  background-color: #333333;
  border-radius: 10px;
  padding: 40px 28px;
}
</style>