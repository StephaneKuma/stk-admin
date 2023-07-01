import './bootstrap';

import { createApp } from 'vue';
import Vuesax from 'vuesax3'
import App from '@/App.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import router from '@/router';

import "vuesax3/dist/vuesax.css";

const app = createApp(App);

app.use(Vuesax)
app.use(router)

app.component('helloWorld', HelloWorld);

app.mount('#app');
