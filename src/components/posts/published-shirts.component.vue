<script setup>
  import { onBeforeMount, onMounted, ref } from 'vue';
  import filters from './shirt-filters.component.vue';
  import shirtCard from './publish-card.component.vue';
  import {PostsApiService} from "@/services/posts-api.service.js";


  let posts=ref([]);
  const postservice = new PostsApiService();

  const fetchPostsData = async () => {
    posts.value = await postservice.getPosts();
  }

  onBeforeMount(async () => {
    fetchPostsData();
  })
</script>

<template>
  <div 
    class="catalogue-container"
    aria-describedby="Catalog of publications made by the user">
    <div class="shirts-container">
      <shirt-card
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :image-src="post.image"
        :name="post.name"
      />
    </div>
    <filters/>
  </div>
</template>

<style scoped>
  .catalogue-container {
    flex: .95;
  }
  .catalogue-container .shirts-container {
    display: flex;
    justify-content: space-around;
    gap: 8px;
    margin: auto;
    flex-wrap: wrap;
  }
</style>