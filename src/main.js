import 'primevue/resources/themes/aura-light-blue/theme.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue';
import router from './routes/index.js';
import PrimeVue from 'primevue/config';

import Card from 'primevue/card';
import InputText from "primevue/inputtext";
import Button from 'primevue/button';
import Sidebar from "primevue/sidebar";
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.component('pv-card',Card);
app.component('pv-inputText',InputText);
app.component('pv-sidebar',Sidebar);
app.component('pv-button',Button);

app.mount('#app');