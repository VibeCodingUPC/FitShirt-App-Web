<script setup>

  const props = defineProps({
    id: {
      type: Number,
      required: true
    },
    imageSrc: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    },
  })
</script>

<template>
  <pv-card class="shirt-card">
    <template #header>
      <img 
        :alt="$props.name + ' image'"
        :src="$props.imageSrc"
      />
    </template>
    <template #title>
      <h1>
        {{ props.name }}
      </h1>
    </template>
  </pv-card>
</template>

<style scoped>
  .shirt-card {
    width: 180px;
    height: 220px;
    background-color: #D9D9D9;
    border-radius: 6px;
    padding: .6em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .shirt-card img {
    width: 100%;
    height: 140px;
    object-fit: contain;
    border-radius: 8px;
  }
  .shirt-card h1 {
    text-align: center;
    font-size: 1.2em;
    font-weight: 600;
    margin: .4em 0
  }
</style>