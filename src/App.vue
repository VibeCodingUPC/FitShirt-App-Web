<script setup>
</script>

<template>
  <the-header/>
  <main class="main">
    <the-toolbar/>
    <router-view></router-view>
  </main>
  <the-footer/>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  width: 85vw;
  padding: .6em 1.2em;
  margin: auto;
  background-color: #f3f3f3;
}
</style>