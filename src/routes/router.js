import UserProfileComponent from '@/components/profile/user-profile.component.vue';
import EditProfileComponent from '@/components/profile/edit-profile.component.vue';
import EditPaymentMethod from "@/components/profile/edit-payment-method.component.vue";
import EditPassword from "@/components/profile/edit-password.component.vue";
import UserCart from "@/components/cart/user-cart.component.vue";
import ShirtsCataloguePage from "@/components/catalogue/shirts-catalogue/shirts-catalogue.page.vue";


import {createRouter, createWebHistory } from 'vue-router';
import { catalogueRoutes } from "@/components/catalogue/routes/catalogue.router";
import {designRoutes} from "@/routes/modules/design.routes.js";


const routes = [
  { path: '/', component: ShirtsCataloguePage },

  { path: '/profile', component: UserProfileComponent },
  { path: '/edit-profile', component: EditProfileComponent },
  { path: '/edit-password', component: EditPassword },
  { path: '/edit-payment-method', component: EditPaymentMethod },

  { path: '/cart', component: UserCart},
  ...catalogueRoutes,
  ...designRoutes
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;