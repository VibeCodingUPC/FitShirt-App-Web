<script setup>
  import { onMounted } from 'vue';
  import TheToolbar from "@/components/shared/the-toolbar.component.vue";
  import {reactive} from "vue";
  import axios from "axios";

  const state = reactive({
    items: {}
  });

  async function getData(){
    const response= await axios.get('http://localhost:3000/cart/');
    state.items= response.data;
  }
  async function deleteData(id) {
    await axios.delete(`http://localhost:3000/cart/`+ id);
    state.items = state.items.filter(item => item.id !== id);
  }


  onMounted(async () => {
    console.log(state.items);
    await getData();
})
</script>

<template>
  <the-toolbar/>
  <div class="card-container">
    <div class="header-container">
        <p>Subtotal:&nbsp </p>
        <div class="info-container"></div>
        <router-link to="/catalogue">
          <pv_button class="button-style">Comprar</pv_button>
        </router-link>
      </div>
      <div v-for="item in state.items" :key="item.id">
        <div class="item-container">
          <div class="subitem-container">
            <img :src="item.image" alt="Item-Image" class="image-container"/>
            <p>&nbsp{{item.name}}&nbsp</p>
          </div>
          <div class="subitem-container">
            <p>Cantidad:&nbsp</p>
            <pv_inputText  v-model="quantity" class="editableinfo-container"></pv_inputText>
          </div>
          <div class="subitem-container">
            <p>Precio:&nbsp</p>
            <div class="info-container">S/. {{item.price}}</div>
          </div>
          <div class="subitem-container">
            <p>Subtotal:&nbsp </p>
            <div class="info-container">S/. {{item.price*quantity}}</div>
          </div>
          <div>

            <pv_button @click="deleteData(item.id)" class="trash-button" ><img src="/images/bin.png" alt="bin-Image" class="bin-container"></pv_button>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.trash-button{
  background-color: rgba(255, 255, 255, 0);
}
.subitem-container{
  background-color: #cacaca;
  padding: 20px;
  flex-direction: row;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.bin-container{
  height: 20px;
  width: 20px;
}
.header-container{
  padding: 20px;
  flex-direction: row;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-container{
  background-color: #cacaca;
  padding: 20px;
  flex-direction: row;
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid #2563eb;
  margin: 5px;
}
.image-container{
  height: 140px;
  width: 150px;
  border: 2px solid #2563eb;
  margin: 5px;
}
.card-container {
  background-color: #dadada;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height:100vh;
}
.info-container {
  border-radius: 4px;
  background-color: #ffffff;
  height: 20px;
  width: 100px;
  padding-left: 20px;
  padding-top: 2px;
  margin-right: 10px;
}
.editableinfo-container {
  border-radius: 4px;
  background-color: #ffffff;
  height: 20px;
  width: 100px;
  padding-left: 20px;
}
.button-style {
  width: 263px;
}
</style>
