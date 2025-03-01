import {defineNuxtPlugin} from '#app';
import 'vue-toastification/dist/index.css';
import {createPinia} from "pinia";

export default defineNuxtPlugin((nuxtApp) => {
	const pinia = createPinia();
	nuxtApp.vueApp.use(pinia)
});
