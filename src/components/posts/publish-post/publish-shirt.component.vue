<script setup>

import {ref} from "vue";
import {PostsApiService} from "@/services/posts-api.service.js";
import { useRoute } from 'vue-router';

const postservice = new PostsApiService();
let postInformation = ref({
  "image":"/images/posts/camiseta_1.png",
  "category":"",
  "color":"",
  "name":"",
  "stock":0,
  "size":"",
  "price":0
})
const addPublish = async () =>{
  await postservice.publishPost(postInformation.value);
}
</script>

<template>
  <pv-card class="card-container">
    <template #content>
      <form class="form-container">
        <div class="title-text">{{ $t('posts.post') }}</div>
        <div>
          <div class="subtitle-text">{{ $t('posts.name') }}</div>
          <pv-inputText class="info-container" v-model="postInformation.name"></pv-inputText>
          <div class="subtitle-text">{{ $t('posts.color') }}</div>
          <pv-inputText class="info-container"  v-model="postInformation.color"></pv-inputText>
          <div class="subtitle-text">{{ $t('posts.category') }} </div>
          <pv-inputText class="info-container"  v-model="postInformation.category"></pv-inputText>
          <div class="subtitle-text">{{ $t('posts.quantity') }}</div>
          <pv-inputText type="number" class="info-container"  v-model="postInformation.stock"></pv-inputText>
          <div class="subtitle-text">{{ $t('posts.sizes') }}</div>
          <pv-inputText class="info-container"  v-model="postInformation.sizes"></pv-inputText>
          <div class="subtitle-text">{{ $t('posts.price') }}</div>
          <pv-inputText type="number" class="info-container"  v-model="postInformation.price"></pv-inputText>
        </div>
        <div class="button-container">
          <router-link to="/published">
            <pv-button class="button-style" aria-label="Confirm a post" @click="addPublish">{{ $t('posts.confirmButton') }}</pv-button>
          </router-link>
          <router-link to="/published">
            <pv-button class="button-style" aria-label="Cancel a post">{{ $t('posts.cancelButton') }}</pv-button>
          </router-link>
        </div>
      </form>
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
  justify-content: center;
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