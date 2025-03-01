import project1_bg1 from '../assets/img/Portfolio/project1/img1.png';
import project1_bg2 from '../assets/img/Portfolio/project1/img2.png';
import project1_bg3 from '../assets/img/Portfolio/project1/img3.png';
import project1_bg4 from '../assets/img/Portfolio/project1/img4.png';
import project1_bg5 from '../assets/img/Portfolio/project1/img5.png';

import project2_bg1 from '../assets/img/Portfolio/project2/img1.png';
import project2_bg2 from '../assets/img/Portfolio/project2/img2.png';
import project2_bg3 from '../assets/img/Portfolio/project2/img3.png';
import project2_bg4 from '../assets/img/Portfolio/project2/img4.png';
import project2_bg5 from '../assets/img/Portfolio/project2/img5.png';

import project3_bg1 from '../assets/img/Portfolio/project3/img1.png';
import project3_bg2 from '../assets/img/Portfolio/project3/img2.png';
import project3_bg3 from '../assets/img/Portfolio/project3/img3.png';
import project3_bg4 from '../assets/img/Portfolio/project3/img4.png';
import project3_bg5 from '../assets/img/Portfolio/project3/img5.png';

import project4_bg1 from '../assets/img/Portfolio/project4/img1.png';
import project4_bg2 from '../assets/img/Portfolio/project4/img2.png';
import project4_bg3 from '../assets/img/Portfolio/project4/img3.png';
import project4_bg4 from '../assets/img/Portfolio/project4/img4.png';
import project4_bg5 from '../assets/img/Portfolio/project4/img5.png';

import project5_bg1 from '../assets/img/Portfolio/project5/img1.png';
import project5_bg2 from '../assets/img/Portfolio/project5/img2.png';
import project5_bg3 from '../assets/img/Portfolio/project5/img3.png';
import project5_bg4 from '../assets/img/Portfolio/project5/img4.png';
import project5_bg5 from '../assets/img/Portfolio/project5/img5.png';

import project6_bg1 from '../assets/img/Portfolio/project6/img1.png';
import project6_bg2 from '../assets/img/Portfolio/project6/img2.png';
import project6_bg3 from '../assets/img/Portfolio/project6/img3.png';
import project6_bg4 from '../assets/img/Portfolio/project6/img4.png';
import project6_bg5 from '../assets/img/Portfolio/project6/img5.png';


export interface Image {
	src: string;
	alt: string;
}

export interface Project {
	imagesModal: Image[];
	date: string;
	address: string;
	title: string;
	made: string;
	category: string;
}

export interface PortfolioType {
	[key: string]: Project;
}

export const portfolio: PortfolioType = {
	project1: {
		imagesModal: [
			{src: project1_bg1, alt: 'Image'},
			{src: project1_bg2, alt: 'Image'},
			{src: project1_bg3, alt: 'Image'},
			{src: project1_bg4, alt: 'Image'},
			{src: project1_bg5, alt: 'Image'},
		],
		date: '08.10.2021',
		address: 'г Иваново,  ул Ташкентская, д 4 к 1',
		title: 'Монтаж окна и балконного блока',
		made: 'Профильная система Rehau Blitz Фурнитура Roto NT',
		category: 'Окна Балконный блок'
	},
	project2: {
		imagesModal: [
			{src: project2_bg1, alt: 'Image'},
			{src: project2_bg2, alt: 'Image'},
			{src: project2_bg3, alt: 'Image'},
			{src: project2_bg4, alt: 'Image'},
			{src: project2_bg5, alt: 'Image'},
		],
		date: '15.03.2022',
		address: 'г Москва, ул Ленина, д 10',
		title: 'Установка межкомнатных дверей',
		made: 'Двери из массива дерева, фурнитура Гардиан',
		category: 'Двери',
	},
	project3: {
		imagesModal: [
			{src: project3_bg1, alt: 'Image'},
			{src: project3_bg2, alt: 'Image'},
			{src: project3_bg3, alt: 'Image'},
			{src: project3_bg4, alt: 'Image'},
			{src: project3_bg5, alt: 'Image'},
		],
		date: '22.07.2022',
		address: 'г Санкт-Петербург, пр-т Невский, д 5',
		title: 'Ремонт балкона под ключ',
		made: 'Утепление, отделка, установка окон',
		category: 'Балконы',
	},
	project4: {
		imagesModal: [
			{src: project4_bg1, alt: 'Image'},
			{src: project4_bg2, alt: 'Image'},
			{src: project4_bg3, alt: 'Image'},
			{src: project4_bg4, alt: 'Image'},
			{src: project4_bg5, alt: 'Image'},
		],
		date: '30.11.2023',
		address: 'г Казань, ул Баумана, д 27',
		title: 'Монтаж зимнего сада',
		made: 'Стеклянные конструкции, профильная система Schüco',
		category: 'Зимние сады',
	},
	project5: {
		imagesModal: [
			{src: project5_bg1, alt: 'Image'},
			{src: project5_bg2, alt: 'Image'},
			{src: project5_bg3, alt: 'Image'},
			{src: project5_bg4, alt: 'Image'},
			{src: project5_bg5, alt: 'Image'},
		],
		date: '12.06.2024',
		address: 'г Новосибирск, ул Красный проспект, д 12',
		title: 'Установка натяжных потолков',
		made: 'Натяжные потолки, светодиодная подсветка',
		category: 'Потолки',
	},
	project6: {
		imagesModal: [
			{src: project6_bg1, alt: 'Image'},
			{src: project6_bg2, alt: 'Image'},
			{src: project6_bg3, alt: 'Image'},
			{src: project6_bg4, alt: 'Image'},
			{src: project6_bg5, alt: 'Image'},
		],
		date: '25.08.2024',
		address: 'г Екатеринбург, ул Чапаева, д 45',
		title: 'Ремонт ванной комнаты',
		made: 'Полная замена плитки, установка сантехники',
		category: 'Ванные комнаты',
	}
};
