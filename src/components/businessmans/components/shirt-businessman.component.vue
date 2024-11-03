<script>

export default {
  name: "shirt-businessman",
  props:{
    shirtEntity:{
      type:Object,
    }
  },
  created(){
    console.log(this.shirtEntity);
  }

}
</script>

<template>
  <pv-card class="shirt-card">
    <template #header>
     <img :src="shirtEntity.image">
    </template>/
    <template #content>
      {{shirtEntity.name}}
    </template>
  </pv-card>
</template>

<style scoped>
.shirt-card img {
  width: 100%;
  height: 140px;
  object-fit: contain;
  border-radius: 8px;
  transition: transform 0.5s ease;
}
</style>