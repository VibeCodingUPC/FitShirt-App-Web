<script setup>

</script>

<template>
  <pv-card class="card-container">
    <template #content>
      <div class="form-container">
        <div class="title-text">Subir Publicación</div>
        <div>
          <div class="subtitle-text">Nombre Diseño</div>
          <div class="info-container"></div>
          <div class="subtitle-text">Color</div>
          <div class="info-container"></div>
          <div class="subtitle-text">Categoría </div>
          <div class="info-container"></div>
          <div class="subtitle-text">Estilo</div>
          <div class="info-container"></div>
          <div class="subtitle-text">Cantidad Actual</div>
          <div class="info-container"></div>
          <div class="subtitle-text">Tallas Disponibles</div>
          <div class="info-container"></div>
          <div class="subtitle-text">Precio</div>
          <div class="info-container"></div>
        </div>
      </div>
      <div class="button-container">
        <router-link to="/published">
          <pv-button class="button-style">Confirmar</pv-button>
        </router-link>
        <router-link to="/import-image">
          <pv-button class="button-style">Insertar Imágenes</pv-button>
        </router-link>
        <router-link to="/published">
          <pv-button class="button-style">Cancelar</pv-button>
        </router-link>
      </div>
    </template>
  </pv-card>
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
  width: 250px;
  margin-bottom: 8px;
}
</style>