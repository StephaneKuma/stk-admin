import './bootstrap';
import { createApp } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

const app = createApp({});

app.component('helloWorld', HelloWorld);

app.mount('#app');
