<script setup>
import { onMounted, ref } from 'vue';
import filters from './shirt-filters.component.vue';
import shirtCard from './shirt-card.component.vue';
import {DesignsApiService} from "@/services/designs-api-service.js";

let designs=ref([]);
const designsService = new DesignsApiService();

const fetchDesignsData = async () => {
  designs.value = await designsService.getDesign();
}

onMounted(async () => {
  fetchDesignsData();
})
</script>

<template>
  <div
      class="catalogue-container"
      aria-describedby="Interactive jerseys catalogue with filters to browse">
    <div class="shirts-container">
      <shirt-card
          v-for="design in designs"
          :key="design.id"
          :id="design.id"
          :image-src="design.image"
          :name="design.name"
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