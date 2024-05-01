import 'primevue/resources/themes/aura-light-blue/theme.css'
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue';
import router from './routes/router';
import PrimeVue from 'primevue/config';

import Card from 'primevue/card';
import InputText from "primevue/inputtext";
import Button from 'primevue/button';
import 'primeicons/primeicons.css'
import Sidebar from "primevue/sidebar";
const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.component('pv-card',Card);
app.component('pv-inputText',InputText);
app.component('pv-sidebar',Sidebar);
app.component('pv-button',Button);

app.mount('#app');
