import ShirtsCatalogueComponent from '@/components/catalogue/shirts-catalogue.component.vue';
import UserRegisterComponent from '@/components/login/user-register.component.vue';
import UserLoginComponent from '@/components/login/user-login.component.vue';
import UserRegister from "@/components/login/user-register.component.vue";
import {createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: UserRegister },
  { path: '/catalogue', component: ShirtsCatalogueComponent},
  { path: '/register', component: UserRegisterComponent},
  { path: '/login', component: UserLoginComponent}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;