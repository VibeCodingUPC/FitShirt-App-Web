import ShirtsCatalogueComponent from '@/components/catalogue/shirts-catalogue.component.vue';
import ShirtDescriptionComponent from '@/components/catalogue/shirt-description.component.vue';
import ShirtDesignsComponent from "@/components/design/shirt-designs.component.vue";
import CreateDesignComponent from "@/components/design/create-design.component.vue";
import EditDesignComponent from "@/components/design/edit-design.component.vue";
import {createRouter, createWebHistory } from 'vue-router';

const routes = [
  {path: '/catalogue', component: ShirtsCatalogueComponent},
  {path: '/my-design', component: ShirtDesignsComponent},
  {path: '/create-design', component: CreateDesignComponent},
  {path: '/edit-design/:id', name: "editDesign", component: EditDesignComponent},

  {path: '/catalogue/:id', name: "shirtDescription", component: ShirtDescriptionComponent}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;