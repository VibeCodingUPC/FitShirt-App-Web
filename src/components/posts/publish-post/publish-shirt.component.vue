<script setup>

import {onMounted, ref, watch} from "vue";
import {PostsApiService} from "@/services/posts-api.service.js";
import { useRoute } from 'vue-router';
import {CategoryApiService} from "@/services/category-api.service.js";
import {ColorApiService} from "@/services/color-api.service.js";
import {SizeApiService} from "@/services/size-api.service.js";

const categoryService = new CategoryApiService();
const colorService = new ColorApiService();
const sizeService = new SizeApiService();
const selectedCategory = ref("Any");
const selectedColor = ref("Any");
const postservice = new PostsApiService();
const errorMessage = ref('');

let postInformation = ref({
  "image":"/images/shirts/camiseta_1.png",
  "category":"",
  "color":"",
  "name":"",
  "stock":0,
  "size":"",
  "price":0
})

const categories = ref([
  {"id": 99,"name": "Any"}
]);

const colors = ref([
  {"id": 99, "name": "Any"}
]);

const sizes = ref([
  {"id": 99, "name": "Any"}
]);
const addPublish = async () =>{
  await postservice.publishPost(postInformation.value);
}
const fetchCategoryData = async () => {
  let fetchedCategories = await categoryService.getCategories();
  categories.value = [...categories.value, ...fetchedCategories];
}
const fetchColorData = async () => {
  let fetchedColors = await colorService.getColors();
  colors.value = [...colors.value, ...fetchedColors];
}

const fetchSizeData = async () => {
  let fetchedSizes = await sizeService.getSizes();
  sizes.value = [...sizes.value, ...fetchedSizes];
}
const isValidImageURL = (url) => {
  return url.match(/\.(jpeg|jpg|png)$/i) != null;
};

const validateImageUrl = () => {
  if (!isValidImageURL(postInformation.value.image)) {
    errorMessage.value = "La URL tiene que ser de una imagen en formato PNG o JPG";
  } else {
    errorMessage.value = "";
  }
};

watch(() => postInformation.value.image, validateImageUrl);


onMounted(async () => {
  fetchCategoryData();
  fetchColorData();
  fetchSizeData();
})
</script>

<template>
  <pv-card class="card-container">
    <template #content>
      <form class="form-container">
        <div class="title-text">{{ $t('posts.upload') }}</div>
        <div>
          <div class="subtitle-text">{{ $t('posts.name') }}</div>
          <pv-inputText class="info-container" v-model="postInformation.name"></pv-inputText>
          <div class="subtitle-text">{{ $t('posts.color') }}</div>
          <select v-model="postInformation.posts" id="color-input">
            <option
                v-for="color in colors"
                :value="color.name"
                :key="color.id">
              {{ color.name }}
            </option>
          </select>
          <div class="subtitle-text">{{ $t('posts.category') }} </div>
          <select v-model="postInformation.category" id="category-input">
            <option
                v-for="category in categories"
                :value="category.name"
                :key="category.id">
              {{ category.name }}
            </option>
          </select>
          <div class="subtitle-text">{{ $t('posts.quantity') }}</div>
          <pv-inputText type="number" class="info-container"  v-model="postInformation.stock"></pv-inputText>
          <div class="subtitle-text">{{ $t('posts.sizes') }}</div>
          <select v-model="postInformation.sizes" id="category-input">
            <option
                v-for="size in sizes"
                :value="size.name"
                :key="size.id">
              {{ size.name }}
            </option>
          </select>
          <div class="subtitle-text">{{ $t('posts.image') }}</div>
          <pv-inputText class="info-container" v-model="postInformation.image" @input="validateImageUrl"></pv-inputText>
          <div class="subtitle-text">{{ $t('posts.price') }}</div>
          <pv-inputText type="number" class="info-container"  v-model="postInformation.price"></pv-inputText>
        </div>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
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
.error-message {
  color: red;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>