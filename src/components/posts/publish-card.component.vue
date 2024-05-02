<script setup>
  const props = defineProps({
    id: {
      type: String,
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
  <router-link :to= "{name:'shirtEdit', params: {id:props.id}}"
    :aria-label="`Edit post `+$props.name">
    <pv-card class="shirt-card">
      <template #header>
        <img 
        :alt="$props.name + ' image'"
        :aria-label="$props.name + ' image'"
        :src="$props.imageSrc"
        />
      </template>
      <template #content>
        <h1
        :aria-label="$props.name">
          {{ props.name }}
        </h1>
      </template>
    </pv-card>
  </router-link>
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
    cursor: pointer;
  }
  .shirt-card img {
    width: 100%;
    height: 140px;
    object-fit: contain;
    border-radius: 8px;
    transition: transform 0.5s ease;
  }
  .shirt-card h1 {
    text-align: center;
    color: #000;
    font-size: .9em;
    font-weight: 600;
  }
  .shirt-card:hover img {
    transform: scale(1.1)
  }
</style>