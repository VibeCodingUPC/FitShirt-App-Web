<script>

import {BusinessmansApiService} from "@/components/businessmans/services/businessmans-api.service.js";
import {PostsApiService} from "@/services/posts-api.service.js";

export default {
  name: "info-businessman",
  data(){
    return {
      businessman:[],
      dataApi: new BusinessmansApiService(),
      postApi: new PostsApiService(),
      post:[],
    }
  },
  created(){
    console.log('a')
   console.log(this.$route.params.id)
      this.dataApi.getBusinessmansByIdApiService(this.$route.params.id)
      .then((response) => {
      let dataMans = response;
      this.businessman = dataMans;
      console.log(dataMans);
      console.log(this.businessman.id)
      })

   this.dataApi.getPostByUserId2(this.$route.params.id)
       .then((response)=>{

         console.log(response.data)
       })


 }
}


</script>

<template>
 <pv-card style="width: 25rem; overflow: hidden">
   <p>a</p>
aa
 </pv-card>
</template>

<style scoped>

</style>