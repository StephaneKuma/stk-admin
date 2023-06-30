import './bootstrap';
import { createApp } from 'vue';
import App from '@/App.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import router from '@/router';

const app = createApp(App);

app.component('helloWorld', HelloWorld);

app.use(router)
app.mount('#app');
