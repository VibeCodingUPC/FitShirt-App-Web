import PublishShirtComponent from "@/components/posts/publish-shirt.component.vue";
import EditShirtComponent from "@/components/posts/edit-shirt.component.vue";
import PublishedShirtsComponent from "@/components/posts/published-shirts.component.vue";
import UserProfileComponent from '@/components/profile/user-profile.component.vue';
import EditProfileComponent from '@/components/profile/edit-profile.component.vue';
import EditPaymentMethod from "@/components/profile/edit-payment-method.component.vue";
import EditPassword from "@/components/profile/edit-password.component.vue";
import UserCart from "@/components/cart/user-cart.component.vue";
import ShirtDesignsComponent from "@/components/design/shirt-designs.component.vue";
import CreateDesignComponent from "@/components/design/create-design.component.vue";
import EditDesignComponent from "@/components/design/edit-design.component.vue";

import ShirtsCataloguePage from "@/components/catalogue/shirts-catalogue/shirts-catalogue.page.vue";
import ShirtDescriptionComponent from "@/components/catalogue/catalogue-shirts-description/shirt-description.component.vue";

import {createRouter, createWebHistory } from 'vue-router';
import { catalogueRoutes } from "@/components/catalogue/routes/catalogue.router";


const routes = [
  { path: '/', component: ShirtsCataloguePage },

  { path: '/published', component: PublishedShirtsComponent},
  { path: '/published/:id', name: "shirtDescription", component: ShirtDescriptionComponent},
  { path: '/publish', component: PublishShirtComponent},
  { path: '/edit-shirt/:id', name: "shirtEdit",component: EditShirtComponent},

  { path: '/profile', component: UserProfileComponent },
  { path: '/edit-profile', component: EditProfileComponent },
  { path: '/edit-password', component: EditPassword },
  { path: '/edit-payment-method', component: EditPaymentMethod },
  
  {path: '/my-design', component: ShirtDesignsComponent},
  {path: '/create-design', component: CreateDesignComponent},
  {path: '/edit-design/:id', name: "editDesign", component: EditDesignComponent},
  
  { path: '/cart', component: UserCart},
  ...catalogueRoutes
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;