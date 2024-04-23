import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue';
import router from './routes/router';
import PrimeVue from 'primevue/config';

import Card from 'primevue/card';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.component('pv-card', Card);

app.mount('#app');
