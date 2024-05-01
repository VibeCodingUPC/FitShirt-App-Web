<script setup>
  import { onBeforeMount, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { ShirtsApiService } from '@/services/shirts-api.service';
import { CartApiService } from '@/services/cart-api.service';

  const route = useRoute();
  const shirtsService = new ShirtsApiService();
  const cartService = new CartApiService();

  let shirtInformation = ref({})
  let selectedSize = ref('S');
  let selectedQuantity = ref(1);

  const reduceSelectedQuantity = () => {
    if (selectedQuantity.value>1) selectedQuantity.value--;  
  }

  const increaseSelectedQuantity = () => {
    if (selectedQuantity.value<shirtInformation.value["stock"]) selectedQuantity.value++;  
  }

  const addItemToCart = async () => {
    const item = {
      "name": shirtInformation.value['name'],
      "image": shirtInformation.value['image'],
      "category": shirtInformation.value['category'],
      "color": shirtInformation.value['color'],
      "quantity": selectedQuantity.value,
      "size": selectedSize.value,
      "price": shirtInformation.value['price']
    }
    
    await cartService.postItem(item);
  }

  const fetchShirtInformation = async () => {
    shirtInformation.value = await shirtsService.getShirtById(route.params.id);
  }

  onBeforeMount(() => {
    fetchShirtInformation();
  })

</script>

<template>
  <div 
    class="shirt-description-container"
    aria-describedby="Contains jersey description like name, price, seller, size, color and stock">
    <div class="shirt-details">
      <div class="shirt-detail" id="category">
        <h3 aria-describedby="Jersey category">/{{ shirtInformation["category"] }} Jersey</h3>
      </div>
      <div class="shirt-detail" id="name">
        <h1 aria-describedby="Jersey name">{{ shirtInformation["name"] }}</h1>
      </div>
      <div class="shirt-detail" id="price">
        <h2 aria-describedby="Jersey price">S/.{{ shirtInformation["price"]?.toFixed(2) }}</h2>
      </div>

      <div class="shirt-detail" id="size">
        <label for="size-selection">Available sizes</label>
        <select v-model="selectedSize" id="size-selection">
          <option 
            v-for="size in shirtInformation['sizes']"
            :value="size">
            {{size}}
          </option>
        </select>
      </div>
      
      <div class="shirt-detail">
        <h2 aria-describedby="Jersey color"><b>Color:</b> {{ shirtInformation["color"] }}</h2>
      </div>
      
      <div class="shirt-detail">
        <h2 aria-describedby="Jersey stock"><b>Stock:</b> {{ shirtInformation["stock"] }} availables</h2>
      </div>

      <div class="shirt-detail" id="quantity-detail">
        <h2><b>Quantity to buy:</b></h2>
        <div className="quantity">
            <button 
              class="quantity-minus" 
              :onClick="reduceSelectedQuantity"
              aria-label="Reduce quantity by one">
              -
            </button>
            <span aria-label="Quantity to purchase">{{ selectedQuantity }}</span>
            <button 
              class="quantity-plus" 
              :onClick="increaseSelectedQuantity"
              aria-label="Increase quantity by one"
              >
              +
            </button>
          </div>
      </div>

      <div class="shirt-detail" id="card-detail">
        <button 
          aria-label="Add to cart"
          :onClick="addItemToCart">Add to cart</button>
      </div>

      <div class="shirt-detail" id="seller-detail">
        <h2><b>Sold by:</b> {{ shirtInformation["seller"] }} </h2>
      </div>
    </div>
    <div class="shirt-image">
      <img
        :src="shirtInformation['image']"
        :alt="shirtInformation['name'] + ' image'"
        :aria-label="shirtInformation['name'] + ' image'"
      >
    </div>
  </div>
</template>

<style scoped>
  .shirt-description-container {
    display: flex;
    flex-direction: row;
    align-items: self-start;
    padding: .8em 0;
    flex: .95;
  }
  .shirt-details {
    flex: 1;
    padding: 20px;
    border-radius: 8px;
    border: solid black .01em;
  }
  .shirt-detail {
    margin: .6em 0;
  }
  .shirt-detail b {
    font-weight: 600;
  }
  #category {
    font-size: .8em;
    font-style: italic;
  }
  #name {
    font-size: 1.6em;
    font-weight: 600;
    text-align: center;
  }
  #price {
    font-size: 1.4em;
    font-weight: 500;
    text-align: center;
    font-style: italic;
  }
  #size {
    display: flex;
    flex-direction: column;
  }
  #size label {
    font-weight: 600;
    margin-bottom: .4em;
  }
  #size select {
    padding: .6em;
    margin: auto;
    width: 200px;
    border-radius: 12px;
  }
  #quantity-detail {
    display: flex;
    flex-direction: column;
  }
  #quantity-detail .quantity {
    margin: auto;
    width: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  #quantity-detail .quantity button {
    width: 32px;
    height: 24px;
    border-radius: 4px;
    background-color: #bbbbbb;
    cursor: pointer;
  }
  #card-detail {
    display: flex;
    justify-content: center;
  }
  #card-detail button {
    padding: .4em 1.8em;
    margin: .2em 0;
    border-radius: 6px;
    font-size: 1.05em;
    cursor: pointer;
    background-color: #4D94FF;
    color: #E5E5E5;
  }
  #seller-detail {
    font-size: .8em;
    text-align: end;
  }
  .shirt-image {
    width: 400px; 
    height: 400px;
    display: flex;
  }
  .shirt-image img {
    max-width: 100%;
    height: 300px;
    margin: auto;
    object-fit: contain;
  }
  @media (max-width: 880px) {
    .shirt-description-container {
      flex-direction: column-reverse;
      height: 800px;
    }

    .shirt-details,
    .shirt-image {
      width: 100%;
      padding: 10px;
    }

    .shirt-image {
      margin: 0;
      height: 300px;
    }
    .shirt-image img {
      height: 100%;

    }
  }
  
</style>