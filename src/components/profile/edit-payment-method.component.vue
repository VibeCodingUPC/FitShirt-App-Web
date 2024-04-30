<script setup>
</script>

<template>
  <pv_card class="card-container">
    <template #content>
      <div class="form-container">
        <div class="title-text">Método de Pago</div>
        <div>
          <div class="subtitle-text">Número de Tarjeta</div>
          <pv_inputText class="info-container"></pv_inputText>
          <div class="subtitle-text">Fecha de Vencimiento</div>
          <pv_inputText class="info-container"></pv_inputText>
          <div class="subtitle-text">Código de Seguridad </div>
          <pv_inputText class="info-container"></pv_inputText>
        </div>
      </div>
      <div class="button-container">
        <router-link to="/profile"><pv_button class="button-style">Cancelar</pv_button></router-link>
        <router-link to="/profile"><pv_button class="button-style">Confirmar</pv_button></router-link>
        <router-link to="/profile"><pv_button class="button-style">Eliminar Tarjeta</pv_button></router-link>


      </div>
    </template>
  </pv_card>
</template>

<style scoped>
.card-container{
  background-color: #dadada;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
}
.form-container {
  background-color: #dadada;
  padding: 20px;
  flex-direction: column;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.button-container {
  margin-top: 30px;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.button-style {
  width: 263px;
}

.title-text {
  font-size: 70px;
  font-family: Roboto,math;
  color: #000000;
  margin-bottom: 30px;
}
.subtitle-text {
  font-size: 20px;
  font-family: Roboto,math;
  color: #000000;
}
.info-container {
  border-radius: 4px;
  background-color: #ffffff;
  height: 20px;
  width: 300px;
  margin-bottom: 8px;
}
</style>