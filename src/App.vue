<script setup>
  import theHeader from './components/shared/the-header.component.vue'
  import theFooter from './components/shared/the-footer.component.vue'
  import theToolbar from './components/shared/the-toolbar.component.vue'
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