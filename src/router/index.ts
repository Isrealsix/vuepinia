import AboutVue from "../views/About.vue";
import HomeVue from "../views/Home.vue";
import * as VueRouter from 'vue-router';

const routes = [
	{path: '/', component: HomeVue},
	{path: '/about', component: AboutVue}
]


export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})