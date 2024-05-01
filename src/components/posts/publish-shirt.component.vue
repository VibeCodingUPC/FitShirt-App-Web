<script setup>
import { onMounted,ref} from 'vue';
import {PostsApiService} from "@/services/posts-api.service.js";
import {computed as datas} from "primevue/slider";

let data=ref([]);
const dataShirt = new PostsApiService();

const fetchPublishData = async() =>{
  datas.value = await dataShirt.getPostItems();
}

onMounted(async() => {
  fetchPublishData();
})


</script>

<template>
  <pv_card class="card-container">
    <template #content>
      <div class="form-container">
        <div class="title-text">Subir Publicación</div>
        <div v-for="data in datas" :key="data.id">
          <div class="subtitle-text">Nombre Diseño</div>
          <div class="info-container">{{data.name}}</div>
          <div class="subtitle-text">Color</div>
          <div class="info-container">{{data.color}}</div>
          <div class="subtitle-text">Categoría </div>
          <div class="info-container">{{data.idCategory}}</div>
          <div class="subtitle-text">Estilo</div>
          <div class="info-container">{{data.styles}}</div>
          <div class="subtitle-text">Cantidad Actual</div>
          <div class="info-container">{{data.stock}}</div>
          <div class="subtitle-text">Tallas Disponibles</div>
          <div class="info-container">{{data.sizes}}</div>
          <div class="subtitle-text">Precio</div>
          <div class="info-container">{{data.price}}</div>
        </div>
      </div>
      <div class="button-container">
        <router-link to="/edit-profile">
          <pv_button class="button-style">Confirmar</pv_button>
        </router-link>
        <router-link to="/import-image">
          <pv_button class="button-style">Insertar Imágenes</pv_button>
        </router-link>
        <router-link to="/edit-payment-method">
          <pv_button class="button-style">Cancelar</pv_button>
        </router-link>
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
  width: 250px;
  margin-bottom: 8px;
}
</style>