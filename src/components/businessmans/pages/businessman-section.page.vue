<script setup>
import TheToolbar from "/src/components/shared/the-toolbar.component.vue";
import ListBusinessmans from "@/components/businessmans/components/list-businessmans.component.vue";



</script>

<template>
  <main class="main">
    <the-toolbar/>
    <list-businessmans></list-businessmans>
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