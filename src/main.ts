import { createApp } from 'vue'
import { createPinia } from 'pinia';
import piniPluginPersistedState from "pinia-plugin-persistedstate";
import { router } from './router/index';
import App from './App.vue'
import './style.css'

const pinia = createPinia();
pinia.use(piniPluginPersistedState);
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app')
