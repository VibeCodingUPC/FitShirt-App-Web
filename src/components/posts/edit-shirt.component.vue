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

     setTimeout(() => {
      window.location.reload()
    }, 100);
   }

   const deleteItemPost = async ()=>{
    await postService.deletePost(postInformation.value.id);

    setTimeout(() => {
      window.location.reload()
    }, 100);
   }

   onBeforeMount(()=>{
     fetchPostInformation();
   })

</script>

<template>
  <pv-card class="card-container">
    <template #content>
      <div class="form-container">
        <div class="title-text">Editar Publicación</div>
        <div>
          <div class="subtitle-text">Nombre Diseño</div>
          <pv-inputText class="info-container" v-model="postInformation.name"></pv-inputText>
          <div class="subtitle-text">Color</div>
          <pv-inputText class="info-container" v-model="postInformation.color"></pv-inputText>
          <div class="subtitle-text">Categoría </div>
          <pv-inputText class="info-container" v-model="postInformation.category"></pv-inputText>
          <div class="subtitle-text">Cantidad Actual</div>
          <pv-inputText type="number" class="info-container" v-model="postInformation.stock"></pv-inputText>
          <div class="subtitle-text">Tallas Disponibles</div>
          <pv-inputText class="info-container" v-model="postInformation.sizes"></pv-inputText>
          <div class="subtitle-text">Precio</div>
          <pv-inputText type="number" class="info-container" v-model="postInformation.price"></pv-inputText>
        </div>
      </div>
      <div class="button-container">
        <router-link to="/published">
          <pv-button @click="editPost" class="button-style" aria-label="Confirm changes">Confirmar</pv-button>
        </router-link>
        <router-link to="/published">
          <pv-button class="button-style" aria-label="Cancel changes">Cancelar</pv-button>
        </router-link>
        <router-link to="/published">
          <pv-button @click="deleteItemPost" class="button-style" aria-label="Delete a Post">Eliminar Post</pv-button>
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