<script setup>
import { ref } from "vue";

const selectedCategory = ref("Any");
const categories = ref([
  {"id": 99,"name": "Any"},
  {"id": 1,"name": "Football"},
  {"id": 2,"name": "Volleyball"},
  {"id": 3,"name": "Basketball"}
]);

const selectedColor = ref("Any");
const colors = ref([
  {"id": 99, "name": "Any"},
  {"name": "Red"},
  {"name": "Yellow"},
  {"name": "Purple"},
  {"name": "Gray"},
  {"name": "White"},
  {"name": "Black"},
  {"name": "Green"},
  {"name": "Blue"}
]);
</script>

<template>
  <div class="filter-container">
    <form class="filter-form">
      <div class="input-container">
        <label for="category-input">  
          Category: 
        </label>
        <select v-model="selectedCategory">
          <option 
            v-for="category in categories" 
            :value="category.name" 
            :key="category.id"
            id="category-input">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="input-container">
        <label for="color-input">Color: </label>
        <select v-model="selectedColor">
          <option 
            v-for="color in colors" 
            :value="color.name" 
            :key="color.id"
            id="color-input">
            {{ color.name }}
          </option>
        </select>
      </div>
      <button class="form-button">
        Filter
      </button>
    </form>
  </div>
</template>

<style scoped>
.filter-container {
  padding: .4em;
}
.filter-container .filter-form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.filter-container .filter-form .input-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: .4em;
}
.filter-container .filter-form .input-container label {
  margin-right: .4em;
}
.filter-container .filter-form .input-container select {
  align-items: center;
  width: 140px;
  font-size: .8rem;
  padding: .3em;
  border: solid black 1px;
  border-radius: 6px;
}
.filter-container .filter-form .form-button {
  background-color: #4D94FF;
  padding: .8em 2.8em;
  border-radius: 8px;
  color: #E5E5E5;
  font-size: .8em;
  font-weight: 600;
  cursor: pointer;
}
</style>
