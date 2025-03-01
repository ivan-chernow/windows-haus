import {defineStore} from "pinia";

export const useModalCalc = defineStore('modalCalc', {
	state: () => ({
		showModalCalc: false,
	}),
	actions: {
		openModalCalc() {
			this.showModalCalc = true;
			console.log(this.showModalCalc); // Добавьте это

		},
		closeModalCalc() {
			this.showModalCalc = false;
		},
		handleKeydownCalc(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				this.closeModalCalc();
			}
		},
	}
})
