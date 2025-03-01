import {defineStore} from 'pinia';

export const useServices = defineStore('modalsService', {
	state: () => ({
		modalService: false, // Состояние для управления показом модального окна
		selectedServiceIndex: '' as string | number, // Индекс выбранного сервиса (может быть числом или null)
	}),
	actions: {
		openModalService(index: string | number) {
			this.modalService = true; // Открываем модальное окно
			this.selectedServiceIndex = index; // Сохраняем индекс выбранного сервиса
		},
		closeModalService() {
			this.modalService = false; // Закрываем модальное окно
			this.selectedServiceIndex = ''; // Сбрасываем индекс при закрытии
		},
	},
});
