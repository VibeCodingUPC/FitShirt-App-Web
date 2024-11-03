<script>

import {BusinessmansApiService} from "@/components/businessmans/services/businessmans-api.service.js";
import {PostsApiService} from "@/services/posts-api.service.js";

export default {
  name: "info-businessman",
  data(){
    return {
      businessman:[],
      dataApi: new BusinessmansApiService(),
      post:[],
    }
  },
  created(){

      this.dataApi.getBusinessmansByIdApiService(this.$route.params.id)
      .then((response) => {
      let dataMans = response;
      this.businessman = dataMans;
      })

 }
}


</script>

<template>
 <pv-card style="width: 25rem; height: fit-content;  ">
   <template #header>

   </template>
   <template #title>
     {{businessman.name}} {{businessman.lastname}}
   </template>
   <template #subtitle>
     {{businessman.username}}

   </template>
   <template #content>
     E-mail: {{businessman.email}}<br><br>
     Celular: {{businessman.cellphone}}<br>
   </template>
 </pv-card>


</template>

<style scoped>

</style>