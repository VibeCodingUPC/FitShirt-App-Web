import PublishShirtComponent from "@/components/posts/publish-shirt.component.vue";
import EditShirtComponent from "@/components/posts/edit-shirt.component.vue";
import ImageShirtViewComponent from "@/components/posts/image-shirt-view.component.vue";
import InsertImageShirtComponent from "@/components/posts/insert-image-shirt.component.vue";
import ImageLoadedComponent from "@/components/posts/image-loaded.component.vue";
import ImageEditedComponent from "@/components/posts/image-edited.component.vue";
import PublishedShirtsComponent from "@/components/posts/published-shirts.component.vue";
import {createRouter, createWebHistory } from 'vue-router';

const routes = [
  {path: '/publish', component: PublishShirtComponent},
  {path: '/edit-shirt', component: EditShirtComponent},
  {path: '/view-image', component: ImageShirtViewComponent},
  {path: '/import-image', component: InsertImageShirtComponent},
  {path: '/loaded-success', component: ImageLoadedComponent},
  {path: '/edited-success', component: ImageEditedComponent},
  {path: '/published-shirts', component: PublishedShirtsComponent}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;