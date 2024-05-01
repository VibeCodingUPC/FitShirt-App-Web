import ShirtsCatalogueComponent from '@/components/catalogue/shirts-catalogue.component.vue';
import TheToolbar from "@/components/shared/the-toolbar.component.vue";
import UserLogin from "@/components/login/user-login.component.vue";
import {createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: UserLogin },
  { path: '/catalogue', component: ShirtsCatalogueComponent},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;