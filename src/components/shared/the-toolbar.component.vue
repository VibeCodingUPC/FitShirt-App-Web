<script setup>
</script>

<template>
  <div class="toolbar-container">
    <router-link to="/profile">
      <div class="icon-container">
        <img src="/icons/ProfileIcon.png" alt="profile-Image">
      </div>
    </router-link>
    <router-link to="/catalogue">
      <div class="icon-container">
        <img src="/icons/CatalogoIcon.png" alt="catalogue-Image">
      </div>
    </router-link>
    <router-link to="/">
      <div  class="icon-container">
        <img src="/icons/ShopIcon.png" alt="shop-Image">
      </div>
    </router-link>
    <router-link to="/">
      <div  class="icon-container">
        <img src="/icons/DesignIcon.png" alt="design-Image" >
      </div>
    </router-link>
    <router-link to="/cart">
      <div  class="icon-container">
        <img src="/icons/CartIcon.png" alt="cart-Image">
      </div>
    </router-link>
    <router-link to="/">
      <div  class="icon-container">
        <img src="/icons/OremiumIcon.png" alt="premium-Image">
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.toolbar-container{
  background-color: #cacaca;
  padding: .4em .6em;
  border-radius: 8px;
  height: 100%;
  flex-shrink: 0;
}
.icon-container{
  height: 36px;
  width: 36px;
  margin: .8em 0;
}
.icon-container img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: contain;
}
</style>