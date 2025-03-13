import {defineStore} from "pinia";
import type {ModalCalcTypes, ModalFreezeTypes, ModalReviewsTypes, ModalServicesTypes} from "~/store/types";

export const ModalCalcState = defineStore('modalCalc', {
	state: (): ModalCalcTypes => ({
		showModalCalc: false,
		isChecked: false,
		successMessage: '',
		isSubmitting: false,
		isToastVisible: false,
		form: {
			name: '',
			phone: '',
			email: '',
		},
	}),
	actions: {
		openModalCalc() {
			this.showModalCalc = true;
		},
		closeModalCalc() {
			this.showModalCalc = false;
		},

	},
});


export const ModalFreezeState = defineStore('modalFreeze', {
	state: (): ModalFreezeTypes => ({
		showModalFreeze: false,
		isChecked: false,
		successMessage: false,
		isSubmitting: false,
		isToastVisible: false,
		form: {
			name: '',
			phone: '',
			email: ''
		}
	}),
	actions: {
		openModalFreeze() {
			this.showModalFreeze = true;
		},
		closeModalFreeze() {
			this.showModalFreeze = false;
		},
	},
});


export const ModalServicesState = defineStore('modalService', {
	state: (): ModalServicesTypes => ({
		modalService: false,
		selectedServiceIndex: '',
	}),
	actions: {
		openModalService(index: string | number) {
			this.modalService = true;
			this.selectedServiceIndex = index;
		},
		closeModalService() {
			this.modalService = false;
			this.selectedServiceIndex = '';
		},
	},
});


export const ModalReviewsState = defineStore('modalReviews', {
	state: (): ModalReviewsTypes => ({
		showModalReviews: false,
		successMessage: '',
		isSubmitting: false,
		isToastVisible: false,
		isChecked: false,
		form: {
			name: '',
			contract: '',
			email: '',
			reviews: '',
		}
	}),
	actions: {
		openModalReviews() {
			this.showModalReviews = true;
		},
		closeModalReviews() {
			this.showModalReviews = false;
		},
	},
});
