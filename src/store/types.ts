export interface ModalReviewsTypes {
	showModalReviews: boolean,
	successMessage: string,
	isSubmitting: boolean,
	isToastVisible: boolean,
	isChecked: boolean,
	form: {
		name: string,
		contract: string,
		email: string,
		reviews: string,
	}
}

export interface ModalServicesTypes {
	modalService: boolean,
	selectedServiceIndex: string | number
}

export interface ModalFreezeTypes {
	showModalFreeze?: boolean;
	isChecked: boolean;
	successMessage: boolean;
	isSubmitting: boolean;
	isToastVisible: boolean;
	form: {
		name: string;
		phone: string;
		email: string;
	};
}

export interface ModalCalcTypes {
	showModalCalc: boolean;
	isChecked: boolean;
	successMessage: string;
	isSubmitting: boolean;
	isToastVisible: boolean;
	form: {
		name: string;
		phone: string;
		email: string;
	};


}export interface contactStateTypes {
	isChecked: boolean;
	form: {
		name: string,
		email: string,
		text: string,
	};
	successMessage: string;
	isSubmitting: boolean;
	isToastVisible: boolean;
}