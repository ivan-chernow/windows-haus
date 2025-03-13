import { onMounted, onUnmounted } from 'vue';

export const usePressEscape = (callbacks: Array<() => void>) => {
	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			event.stopPropagation();
			callbacks.forEach((callback) => callback());
		}
	};

	onMounted(() => {
		window.addEventListener('keydown', handleKeydown);
	});

	onUnmounted(() => {
		if (handleKeydown) {
			window.removeEventListener('keydown', handleKeydown);
		}
	});
};