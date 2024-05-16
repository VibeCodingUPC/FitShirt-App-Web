import { catalogueRoutes } from "./modules/catalogue.routes.js";
import { authenticationRoutes } from "./modules/authentication.routes.js";
import { designRoutes } from "@/routes/modules/design.routes.js";
import { postsRoutes } from "@/routes/modules/posts.routes.js";
import { errorRoutes } from "@/routes/modules/error.routes.js";
import UserLoginPage from "@/components/authentication/login/user-login.page.vue";
import { shoppingCart } from "./modules/shopping-cart.routes.js";

export default [
  { path: '/', component: UserLoginPage },
  ...catalogueRoutes,
  ...authenticationRoutes,
  ...designRoutes,
  ...postsRoutes,
  ...errorRoutes,
  ...shoppingCart
];