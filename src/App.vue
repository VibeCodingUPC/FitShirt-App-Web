<script setup>
  import theHeader from './components/shared/the-header.component.vue'
  import theFooter from './components/shared/the-footer.component.vue'
  import theToolbar from './components/shared/the-toolbar.component.vue'
</script>

<template>
    <router-view></router-view>
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