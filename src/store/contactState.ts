import {defineStore} from 'pinia';
import type {contactStateTypes} from "~/store/types";


export const ContactState = defineStore('contactState', {
	state: (): contactStateTypes => ({
		isChecked: false,
		form: {
			name: '',
			email: '',
			text: ''
		},
		successMessage: '',
		isSubmitting: false,
		isToastVisible: false
	}),
	actions: {},
});

