import UserRegisterComponent from '@/components/login/user-register.component.vue';
import UserLoginComponent from '@/components/login/user-login.component.vue';

export const authenticationRoutes = [
  { path: '/register', component: UserRegisterComponent},
  { path: '/login', component: UserLoginComponent}
];