<script setup>
  import { onMounted, ref } from 'vue';
  import {CartApiService} from "@/services/shirts-api.service.js";
  import TheToolbar from "@/components/shared/the-toolbar.component.vue";

  let items=ref([]);
  const cartService = new CartApiService();

  const fetchShirtsData = async () => {
    items.value = await cartService.getCarItems();
  }


  onMounted(async () => {
    fetchShirtsData();
})
</script>

<template>
  <div class="main-container">
    <the-toolbar/>
    <div class="cart-container">
      <div class="header-container">
        <p>Subtotal:&nbsp </p>
        <div class="info-container"></div>
        <router-link to="/catalogue">
          <pv_button class="button-style">Comprar</pv_button>
        </router-link>
      </div>
      <div v-for="item in items" :key="item.id">
        <div class="item-container">
          <div class="subitem-container">
            <img :src="item.image" alt="Item-Image" class="image-container"/>
            <p>&nbsp{{item.name}}&nbsp</p>
          </div>
          <div class="subitem-container">
            <p>Cantidad:&nbsp</p>
            <pv_inputText v-model="item.quantity" class="editableinfo-container"></pv_inputText>
          </div>
          <div class="subitem-container">
            <p>Precio:&nbsp</p>
            <div class="info-container">S/. {{item.price}}</div>
          </div>
          <div class="subitem-container">
            <p>Subtotal:&nbsp </p>
            <div class="info-container">S/. {{item.price*2}}</div>
          </div>
          <div>
            <img src="/images/bin.png" alt="bin-Image" class="bin-container">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container{
  flex-direction: row;
  width: auto;
  display: flex;
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
.cart-container {
  background-color: #dadada;
  padding: 20px;
  flex-direction: row;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
