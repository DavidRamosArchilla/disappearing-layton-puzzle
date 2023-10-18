import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css'; // Choose a theme
// import 'primeicons/primeicons.css'; // PrimeIcons CSS
import 'primevue/resources/primevue.min.css'; // PrimeVue CSS

import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue);

app.mount('#app');
