<script setup>

import {computed, onMounted, ref} from "vue";
import {PostsApiService} from "@/services/posts-api.service.js";
import {CategoryApiService} from "@/services/category-api.service.js";
import {ColorApiService} from "@/services/color-api.service.js";
import {SizeApiService} from "@/services/size-api.service.js";

const categoryService = new CategoryApiService();
const colorService = new ColorApiService();
const sizeService = new SizeApiService();
const postservice = new PostsApiService();

let postInformation = ref({
  "image":"",
  "category":"",
  "color":"",
  "name":"",
  "stock":0,
  "sizes":[],
  "price":0
})

const categories = ref([]);

const colors = ref([]);

const sizes = ref([]);

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

const isWrongInputs = computed(() => {
  if (postInformation.value.name.length===0) {
    return true;
  }
  if (postInformation.value.color.length===0) {
    return true;
  }
  if (postInformation.value.category.length===0) {
    return true;
  }
  if (postInformation.value.stock<=0) {
    return true;
  }
  if (!Number.isInteger(Number(postInformation.value.stock))) {
    return true
  }
  if (postInformation.value.sizes.length===0) {
    return true;
  }
  if (!postInformation.value.image.match(/\.(jpeg|jpg|png)$/i)) {
    return true;
  }
  if (postInformation.value.price<=0) {
    return true;
  }

  return false;
})

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
        <div class="inputs-container">
          <div class="subtitle-text">{{ $t('posts.name') }}</div>
          <pv-inputText class="info-container" v-model="postInformation.name"></pv-inputText>
          
          <div class="subtitle-text">{{ $t('posts.color') }}</div>
          <select v-model="postInformation.color" id="color-input">
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
          <pv-inputText 
            class="info-container" 
            type="number" 
            min="0"
            step="1"
            v-model="postInformation.stock">
          </pv-inputText>
          
          <div class="subtitle-text">{{ $t('posts.sizes') }}</div>
          <div v-for="size in sizes" :key="size.id">
            <input
              type="checkbox"
              :id="size.id"
              :value="size.name"
              v-model="postInformation.sizes"
            />
            <label :for="size.id">{{ size.name }}</label>
          </div>
          
          <div class="subtitle-text">{{ $t('posts.image') }}</div>
          <pv-inputText 
            class="info-container" 
            v-model="postInformation.image">
          </pv-inputText>
          
          <div class="subtitle-text">{{ $t('posts.price') }}</div>
          <pv-inputText 
            class="info-container"  
            type="number" 
            min="0"
            v-model="postInformation.price">
          </pv-inputText>
        </div>
        <div class="button-container">
          <router-link :to="!isWrongInputs ? `/published` : null ">
            <pv-button 
              class="button-style" 
              aria-label="Confirm a post"
              :disabled="isWrongInputs"
              @click="addPublish">
                {{ $t('posts.confirmButton') }}
              </pv-button>
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
.inputs-container {
  width: 50%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: .4em;
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
  width: 100%;
}
select {
  border-radius: 4px;
  padding: .8em;
}
input[type="checkbox"] {
  margin-right: 5px;
}
</style>