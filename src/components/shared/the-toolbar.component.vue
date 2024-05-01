<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>

<template>
  <div class="sidebar-container">
  <pv-button class="button-style" icon="pi pi-bars" @click="visible = true"></pv-button>
    <pv-sidebar v-model:visible="visible">
      <template #container>
        <div class="flex flex-column h-full">
          <div class="overflow-y-auto">
            <ul class="list-none p-3 ">
              <li>
                <ul class="list-none overflow-y-auto">
                  <router-link to="/profile">
                    <li>
                      <a class="icons-container">
                        <img src="/icons/ProfileIcon.png" alt="profile-Image" class="icon-container">
                        <span >Mi perfil</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/catalogue">
                    <li>
                      <a class="icons-container">
                        <img src="/icons/ShopIcon.png" alt="shop-Image" class="icon-container">
                        <span >Catálogo</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/publications">
                    <li>
                      <a class="icons-container">
                        <img src="/icons/ShopIcon.png" alt="shop-Image" class="icon-container">
                        <span >Publicaciones</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/design">
                    <li>
                      <a class="icons-container">
                        <img src="/icons/DesignIcon.png" alt="shop-Image" class="icon-container">
                        <span >Diseños</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/cart">
                    <li>
                      <a class="icons-container">
                        <img src="/icons/CartIcon.png" alt="shop-Image" class="icon-container">
                        <span >Carrito</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/premium">
                    <li>
                      <a class="icons-container">
                        <img src="/icons/PremiumIcon.png" alt="shop-Image" class="icon-container">
                        <span >Premium</span>
                      </a>
                    </li>
                  </router-link>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </pv-sidebar>
  </div>
</template>

<style scoped>
.sidebar-container {
  position: relative;
  flex: .05;
}
.button-style {
  width: 36px;
  height: 36px;
  padding: .8em;
  border-radius: 12px;
  background-color: #cacaca;
  position: absolute;
  cursor: pointer;
}
.icons-container{
  display:flex;
  align-items: center;
  cursor: pointer;
  background-color: rgba(37, 99, 235, 0.26);
  overflow: hidden;
  font-weight: 600;
  border-radius: 0.25rem;
  padding: 0.725rem;
  margin: 10px;
}
.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.h-full {
}
.icon-container{
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
}
.overflow-y-auto {
  overflow-y: auto;
}
.list-none {
  list-style-type: none;
}

.p-3 {
  padding: 0.75rem;
}
</style>