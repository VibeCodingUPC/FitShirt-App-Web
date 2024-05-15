import { catalogueRoutes } from "./modules/catalogue.routes.js";
import { authenticationRoutes } from "./modules/authentication.routes.js";

export default [
  ...catalogueRoutes,
  ...authenticationRoutes
];