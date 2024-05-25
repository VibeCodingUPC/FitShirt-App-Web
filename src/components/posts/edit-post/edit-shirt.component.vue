<script setup>
   import {onBeforeMount,ref} from "vue";
   import {useRoute} from 'vue-router';
   import {PostsApiService} from "@/services/posts-api.service.js";

   const postService= new PostsApiService();
   const route = useRoute();

   let postInformation = ref({})

   const fetchPostInformation = async() =>{
     postInformation.value= await postService.getPostById(route.params.id);
     console.log(postInformation.value)
   }

   const editPost = async () =>{
     await postService.editPost(postInformation.value);
   }

   const deleteItemPost = async ()=>{
    await postService.deletePost(postInformation.value.id);
   }

   onBeforeMount(()=>{
     fetchPostInformation();
   })

</script>

<template>
  <pv-card class="card-container">
    <template #content>
      <div class="form-container">
        <div class="title-text">{{ $t('posts.edit') }}</div>
        <div>
          <div class="subtitle-text">{{ $t('posts.name') }}</div>
          <pv-inputText class="info-container" v-model="postInformation.name"></pv-inputText>
          <div class="subtitle-text">{{ $t('posts.color') }}</div>
          <pv-inputText class="info-container" v-model="postInformation.color"></pv-inputText>
          <div class="subtitle-text">{{ $t('posts.category') }} </div>
          <pv-inputText class="info-container" v-model="postInformation.category"></pv-inputText>
          <div class="subtitle-text">{{ $t('posts.quantity') }}</div>
          <pv-inputText type="number" class="info-container" v-model="postInformation.stock"></pv-inputText>
          <div class="subtitle-text">{{ $t('posts.sizes') }}</div>
          <pv-inputText class="info-container" v-model="postInformation.sizes"></pv-inputText>
          <div class="subtitle-text">{{ $t('posts.price') }}</div>
          <pv-inputText type="number" class="info-container" v-model="postInformation.price"></pv-inputText>
        </div>
      </div>
      <div class="button-container">
        <router-link to="/published">
          <pv-button @click="editPost" class="button-style" aria-label="Confirm changes">{{ $t('posts.confirmButton') }}</pv-button>
        </router-link>
        <router-link to="/published">
          <pv-button class="button-style" aria-label="Cancel changes">{{ $t('posts.cancelButton') }}</pv-button>
        </router-link>
        <router-link to="/published">
          <pv-button @click="deleteItemPost" class="button-style" aria-label="Delete a Post">{{ $t('posts.deleteButton') }}</pv-button>
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