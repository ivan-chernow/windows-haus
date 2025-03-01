// stores/modalStore.js
import {defineStore} from 'pinia';
import {ref} from "vue";

export const useModalFreeze = defineStore('modalFreeze', {
	state: () => ({
		showModalFreeze: false,
	}),
	actions: {
		openModalFreeze() {
			this.showModalFreeze = true;
		},
		closeModalFreeze() {
			this.showModalFreeze = false;
		},
		handleKeydownFreeze(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				this.closeModalFreeze();
			}
		},
	},
});
