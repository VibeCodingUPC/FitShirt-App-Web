<script setup>
  import { onMounted, ref } from 'vue';
  import filters from './shirt-filters.component.vue';
  import shirtCard from './shirt-card.component.vue';
import { ShirtsApiService } from '@/services/shirts-api.service';

  let shirts=ref([]);
  const shirtsService = new ShirtsApiService();

  const fetchShirtsData = async () => {
    shirts.value = await shirtsService.getShirts();
  }

  onMounted(async () => {
    fetchShirtsData();
  })
</script>

<template>
  <div class="catalogue-container">
    <filters/>
    <div class="shirts-container">
      <shirt-card
        v-for="shirt in shirts"
        :key="shirt.id"
        :id="shirt.id"
        :image-src="shirt.image"
        :name="shirt.name"
      />
    </div>
  </div>
</template>

<style scoped>
  .catalogue-container {
    margin: auto;
  }
  .catalogue-container .shirts-container {
    display: flex;
    justify-content: space-around;
    gap: 8px;
    margin: auto;
    flex-wrap: wrap;
  }
</style>