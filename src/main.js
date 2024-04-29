import './assets/main.css'
import 'primevue/resources/themes/aura-light-blue/theme.css'
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

app.component('pv_card',Card);
app.component('pv_inputText',InputText);
app.component('pv_button',Button);

app.mount('#app');
