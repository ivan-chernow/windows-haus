import { defineStore } from 'pinia';

export interface BidFormStateTypes {
	isChecked: boolean;
	successMessage: string;
	isSubmitting: boolean;
	isToastVisible: boolean;
	form: {
		name: string;
		phone: string;
		email: string;
	};
}

export const BidFormState = defineStore('bidForm', {
	state: (): BidFormStateTypes => ({
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
});