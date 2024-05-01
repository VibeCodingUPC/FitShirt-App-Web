<script setup>
  import { onMounted, ref } from 'vue';
  import {CartApiService} from "@/services/cart-api.service.js";
  import {reactive} from "vue";

  const cartService = new CartApiService();
  const state = reactive({
    items: []
  });

  const fetchCartData = async () => {
    state.items = await cartService.getCartItems();
  }

  const removeItemFromCart = async (id) => {
    await cartService.deleteItemById(id);

    state.items = state.items.filter(item => item.id !== id);
  }


  onMounted(async () => {
    fetchCartData();
  })

</script>

<template>
  <div class="main-container">
    <div class="cart-container">
      <div class="header-container">
        <p>Subtotal:&nbsp </p>
        <div class="info-container"></div>
        <router-link to="/catalogue">
          <pv-button class="button-style">Comprar</pv-button>
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
            <pv-inputText v-model="item.quantity" class="editableinfo-container"></pv-inputText>
          </div>
          <div class="subitem-container">
            <p>Precio:&nbsp</p>
            <div class="info-container">S/. {{item.price}}</div>
          </div>
          <div class="subitem-container">
            <p>Subtotal:&nbsp </p>
            <div class="info-container">S/. {{item.price*item.quantity}}</div>
          </div>
          <div>
            <pv-button @click="removeItemFromCart(item.id)" class="trash-button" >
              <img src="/images/bin.png" alt="bin-Image" class="bin-container">
            </pv-button>
          </div>
        </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.main-container{
  background-color: #dadada;
  padding: 20px;
  flex: .95;
}
.cart-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.trash-button{
  background-color: rgba(255, 255, 255, 0);
}
.subitem-container{
  background-color: #cacaca;
  padding: 20px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.bin-container{
  height: 20px;
}
.header-container{
  padding: 20px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-container{
  background-color: #cacaca;
  padding: 20px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.image-container{
  height: 140px;
  width: 150px;
  margin: 5px;
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
  padding: .4em 1.8em;
  margin: .2em 0;
  border-radius: 6px;
  font-size: .9em;
  cursor: pointer;
  background-color: #4D94FF;
  color: #E5E5E5;
}
</style>
