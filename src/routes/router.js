import PublishShirtComponent from "@/components/posts/publish-shirt.component.vue";
import EditShirtComponent from "@/components/posts/edit-shirt.component.vue";
import PublishedShirtsComponent from "@/components/posts/published-shirts.component.vue";
import ShirtDescriptionComponent from '@/components/catalogue/shirt-description.component.vue';
import TheToolbar from "@/components/shared/the-toolbar.component.vue";
import {createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: TheToolbar },
  { path: '/published', component: PublishedShirtsComponent},
  { path: '/published/:id', name: "shirtDescription", component: ShirtDescriptionComponent},
  {path: '/publish', component: PublishShirtComponent},
  {path: '/edit-shirt/:id', name: "shirtEdit",component: EditShirtComponent}
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;