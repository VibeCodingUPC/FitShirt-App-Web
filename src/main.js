import './assets/main.css'
// Deletes prime vue css for errors in styles. by: Diego
import { createApp } from 'vue'
import App from './App.vue';
import router from './routes/router';
import PrimeVue from 'primevue/config';

import Card from 'primevue/card';
import InputText from "primevue/inputtext";
import Button from 'primevue/button';
const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.component('pv-card',Card);
app.component('pv-inputText',InputText);
app.component('pv-button',Button);

app.mount('#app');
