import {useToast} from "vue-toastification";
import type {BidFormStateTypes} from "~/store/bidFormState";
import type {contactStateTypes, ModalFreezeTypes, ModalReviewsTypes} from "~/store/types";

export const showToast = (message: string, isError = false, state: BidFormStateTypes | ModalFreezeTypes | ModalReviewsTypes | contactStateTypes) => {
	const toast = useToast();

	state.isToastVisible = true;
	const toastMethod = isError ? toast.error : toast.success;
	toastMethod(message, {
		onClose: () => {
			state.isToastVisible = false;
		}
	});
};