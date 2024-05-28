import EditUserDataPage from "@/components/profile/edit-user-profile/edit-user-data/edit-user-data.page.vue";
import EditUserPasswordPage from "@/components/profile/edit-user-profile/edit-user-password/edit-user-password.page.vue";
import EditUserPaymentMethodPage from "@/components/profile/edit-user-profile/edit-user-payment/edit-user-payment-method.page.vue";
import UserProfilePage from "@/components/profile/user-profile/user-profile.page.vue";

export const profileRoutes = [
  { path: '/profile', component: UserProfilePage },
  { path: '/edit-profile', component: EditUserDataPage },
  { path: '/edit-password', component: EditUserPasswordPage },
  { path: '/edit-payment-method', component: EditUserPaymentMethodPage }
]