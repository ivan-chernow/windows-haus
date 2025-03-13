import * as yup from "yup";

export const modalsSchema = yup.object({
	name: yup.string().required('Имя обязательно.'),
	phone: yup.string()
		.required('Номер телефона обязателен.')
		.matches(/^[+]?[0-9]{10,15}$/, 'Некорректный номер телефона.'),
	email: yup.string()
		.required('Email обязателен.')
		.email('Некорректный Email.'),
});

export const reviewsSchema = yup.object({
	name: yup.string().required('Имя обязательно.'),
	contract: yup.number()
		.required('Номер договора обязателен')
		.typeError('Некорректный номер договора'),
	email: yup.string()
		.required('Email обязателен.')
		.email('Некорректный Email.'),
	reviews: yup.string().required('Напишите отзыв'),

});


