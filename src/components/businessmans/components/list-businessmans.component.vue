<script >


import ItemBusinessman from "@/components/businessmans/components/item-businessman.component.vue";

export default{
  name: "list-businessmans",
  components: {ItemBusinessman},

  props:{
    mans:{
      type:Array,
      required: false,
    }
  }
}
</script>

<template>
  a<div v-for="man in mans">
  <item-businessman :business-entity="man"></item-businessman>/
  </div>
</template>

<style scoped>

</style>