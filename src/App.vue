<script setup>
  import theHeader from './components/shared/the-header.component.vue'
  import theFooter from './components/shared/the-footer.component.vue'
  import theToolbar from './components/shared/the-toolbar.component.vue'
</script>

<template>
  <the-header/>
  <main>
    <the-toolbar/>
    <router-view></router-view>
  </main>
  <the-footer/>
</template>

<style scoped>
</style>