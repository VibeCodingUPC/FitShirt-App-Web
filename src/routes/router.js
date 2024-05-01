import ShirtsCatalogueComponent from '@/components/catalogue/shirts-catalogue.component.vue';

import UserRegister from "@/components/login/user-register.component.vue";
import {createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: UserRegister },
  { path: '/catalogue', component: ShirtsCatalogueComponent},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;