<script setup>

import TheToolbar from "@/components/shared/the-toolbar.component.vue";
import InfoBusinessman from "@/components/businessmans/components/info-businessman.vue";


</script>

<template>
  <main class="main">
    <the-toolbar/>
    <info-businessman></info-businessman>

  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: space-around;
  min-height: 100vh;
  margin: auto;
}
@media (max-width: 600px) {
  .main {
    width: 100vw;
  }
}
</style>