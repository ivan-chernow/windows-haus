import {defineStore} from 'pinia';
import img1 from '../assets/img/About/certificates/certificates1.png';
import img2 from '../assets/img/About/certificates/certificates2.png';
import img3 from '../assets/img/About/certificates/certificates3.png';
import img4 from '../assets/img/About/certificates/certificates4.png';
import img5 from '../assets/img/About/certificates/certificates5.png';
import type {ReviewsTypes} from "~/data/about.data";
import {reviews} from "~/data/about.data";
import type {Ref, UnwrapRef} from "vue";

interface AboutStateTypes {
	activeSection: string
	currentImageIndex: number;
	currentIndexReview: number;
	images: string[];
	reviews: Ref<UnwrapRef<ReviewsTypes[]>, UnwrapRef<ReviewsTypes[]> | ReviewsTypes[]>
}

export const AboutState = defineStore('aboutState', {
	state: (): AboutStateTypes => ({
		activeSection: 'description',
		reviews,
		currentImageIndex: 2,
		currentIndexReview: 0,
		images: [img1, img2, img3, img4, img5],
	}),
	getters: {
		currentReview: (state) => {
			return state.reviews[state.currentIndexReview];
		}
	},
	actions: {
		setActiveSection(section: string) {
			this.activeSection = section
		},
		prevImage() {
			this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
		},
		nextImage() {
			this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
		},
		prevReview() {
			this.currentIndexReview = (this.currentIndexReview - 1 + this.reviews.length) % this.reviews.length;
		},
		nextReview() {
			this.currentIndexReview = (this.currentIndexReview + 1) % this.reviews.length;
		},
	},
});
