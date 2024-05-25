<script setup>
import {onBeforeMount, ref} from "vue";
import {DesignsApiService} from "@/services/designs-api.service.js";
import {useRoute} from "vue-router";

const route = useRoute();

let designInformation = ref({});

const designsService = new DesignsApiService();
const fetchDesignData = async () => {
  designInformation.value = await designsService.getDesignbyid(route.params.id);

}
const editDesign = async () => {
  await designsService.editDesign(designInformation.value);
}
const deleteItemDesign = async () => {
  await designsService.deleteDesign(designInformation.value.id);
}
onBeforeMount(()=>{
  fetchDesignData();
})

</script>

<template>
  <pv-card class="card-container">
    <template #content>
      <div class="form-container">
        <div class="title-text">{{ $t('designs.edit') }}</div>
        <img :src="designInformation.image" class="image-container">
        <div>
          <div class="subtitle-text">{{ $t('designs.name') }}</div>
          <pv-inputText class="info-container" v-model="designInformation.name"></pv-inputText>
          <div class="subtitle-text">{{ $t('designs.fColor') }} </div>
          <pv-inputText  class="info-container" v-model="designInformation.color"></pv-inputText >
          <div class="subtitle-text">{{ $t('designs.sColor') }}</div>
          <pv-inputText  class="info-container" v-model="designInformation.secundario"></pv-inputText >
          <div class="subtitle-text">{{ $t('designs.tColor') }}</div>
          <pv-inputText  class="info-container" v-model="designInformation.terciario"></pv-inputText >
          <div class="subtitle-text">{{ $t('designs.shield') }}</div>
          <pv-inputText  class="info-container" v-model="designInformation.escudo"></pv-inputText >
        </div>
      </div>
      <div class="button-container">
        <router-link to="/my-design">
          <pv-button class="button-style" @click="editDesign" aria-label="Apply changes">{{ $t('designs.confirmButton') }}</pv-button>
        </router-link>
        <router-link to="/my-design">
          <pv-button class="button-style" aria-label="Cancel changes">{{ $t('designs.cancelButton') }}</pv-button>
        </router-link>
        <router-link to="/my-design">
          <pv-button class="button-style" @click="deleteItemDesign" aria-label="Delete a Design">{{ $t('designs.deleteButton') }}</pv-button>
        </router-link>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.card-container{
  background-color: #dadada;
  height: 100%;
  display: flex;
  justify-content: center;
  flex: .95;
  align-self: center;
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
  padding: .8em 0;
}
.button-style {
  padding: .4em 1.8em;
  margin: .2em 0;
  border-radius: 6px;
  font-size: .9em;
  cursor: pointer;
  background-color: #4D94FF;
  color: #E5E5E5;
}

.title-text {
  font-size: 2.8em;
  font-weight: 600;
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
.subitem-container{
  background-color: #cacaca;
  padding: 20px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.image-container{
  height: 140px;
  width: 150px;
  margin: 5px;
}

.subitem-container{
  background-color: #cacaca;
  padding: 20px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>