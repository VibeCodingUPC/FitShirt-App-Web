import ShirtsCatalogueComponent from '@/components/catalogue/shirts-catalogue.component.vue';
import ShirtDescriptionComponent from '@/components/catalogue/shirt-description.component.vue';
import {createRouter, createWebHistory } from 'vue-router';

const routes = [
  {path: '/catalogue', component: ShirtsCatalogueComponent},
  {path: '/catalogue/:id', name: "shirtDescription", component: ShirtDescriptionComponent}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;