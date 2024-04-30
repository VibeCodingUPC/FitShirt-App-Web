<script setup>
  import { onBeforeMount, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { ShirtsApiService } from '@/services/shirts-api.service';

  const route = useRoute();
  const shirtsService = new ShirtsApiService();

  let shirtInformation = ref({})

  const fetchShirtInformation = async () => {
    shirtInformation.value = await shirtsService.getShirtById(route.params.id);
    console.log(shirtInformation);
  }

  onBeforeMount(() => {
    fetchShirtInformation();
  })

</script>

<template>
  <div class="shirt-description-container">
    <div class="shirt-details">
      <div class="shirt-detail" id="category">
        <h3>/{{ shirtInformation["idCategory"] }} Jersey</h3>
      </div>
      <div class="shirt-detail" id="name">
        <h1>{{ shirtInformation["name"] }}</h1>
      </div>
      <div class="shirt-detail" id="price">
        <h2>S/.{{ shirtInformation["price"].toFixed(2) }}</h2>
      </div>

      <div class="shirt-detail" id="size">
        <label for="size-selection">Available sizes</label>
        <select>
          <option 
            v-for="size in shirtInformation['sizes']"
            :value="size"
            id="size-selection">
            {{size}}
          </option>
        </select>
      </div>
      
      <div class="shirt-detail">
        <h2><b>Color:</b> {{ shirtInformation["color"] }}</h2>
      </div>
      
      <div class="shirt-detail">
        <h2><b>Stock:</b> {{ shirtInformation["stock"] }} availables</h2>
      </div>

      <div class="shirt-detail" id="quantity-detail">
        <h2><b>Quantity to buy:</b></h2>
        <div className="quantity">
            <button class="quantity-minus">-</button>
            <span>1</span>
            <button class="quantity-plus">+</button>
          </div>
      </div>

      <div class="shirt-detail" id="card-detail">
        <button>Add to cart</button>
      </div>

      <div class="shirt-detail" id="seller-detail">
        <h2><b>Sold by:</b> {{ shirtInformation["seller"] }} </h2>
      </div>
    </div>
    <div class="shirt-image">
      <img
        :src="shirtInformation['image']"
      >
    </div>
  </div>
</template>

<style scoped>
  .shirt-description-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 84vh;
    width: 100%;

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
  
</style>