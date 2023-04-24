import { createApp } from 'vue'
import { createPinia } from 'pinia';
import piniPluginPersistedState from "pinia-plugin-persistedstate";
import { PiniaSharedState } from 'pinia-shared-state';
import { router } from './router/index';
import App from './App.vue'
import './style.css'

const pinia = createPinia();
pinia.use(piniPluginPersistedState);
pinia.use(PiniaSharedState({
	enable: true,
	initialize: false,
	type: 'localstorage'
}));
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app')
