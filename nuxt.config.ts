import {defineNuxtConfig} from 'nuxt/config';
import {fileURLToPath, URL} from 'node:url';
import path from "node:path";

export default defineNuxtConfig({
	srcDir: 'src/',
	compatibilityDate: '2024-11-01',
	devtools: {enabled: true},

	alias: {
		'@': path.resolve(__dirname, 'src'),
		'~': fileURLToPath(new URL('./src', import.meta.url)),
	},


	plugins: [
		'@/../plugins/toastification.ts',
		'@/../plugins/pinia.ts',
	],

	css: [
		'~/assets/styles/main.css'
	],

	modules: [
		'@primevue/nuxt-module'
	],

});
