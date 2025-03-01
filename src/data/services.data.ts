import imagesService1 from '@/assets/img/Services/services1/services1.jpg';
import imagesService2 from '@/assets/img/Services/services2/services2.jpg';
import imagesService3 from '@/assets/img/Services/services3/services3.jpg';
import imagesService4 from '@/assets/img/Services/services4/services4.jpg';
import imagesModal_1_bg1 from '@/assets/img/Services/services1/bg1.png';
import imagesModal_1_bg2 from '@/assets/img/Services/services1/bg2.png';
import imagesModal_1_bg3 from '@/assets/img/Services/services1/bg3.png';
import imagesModal_1_bg4 from '@/assets/img/Services/services1/bg4.png';
import imagesModal_1_bg5 from '@/assets/img/Services/services1/bg5.png';
import imagesModal_2_bg1 from '@/assets/img/Services/services2/bg1.png';
import imagesModal_2_bg2 from '@/assets/img/Services/services2/bg2.png';
import imagesModal_2_bg3 from '@/assets/img/Services/services2/bg3.png';
import imagesModal_2_bg4 from '@/assets/img/Services/services2/bg4.png';
import imagesModal_2_bg5 from '@/assets/img/Services/services2/bg5.png';
import imagesModal_3_bg1 from '@/assets/img/Services/services3/bg1.png';
import imagesModal_3_bg2 from '@/assets/img/Services/services3/bg2.png';
import imagesModal_3_bg3 from '@/assets/img/Services/services3/bg3.png';
import imagesModal_3_bg4 from '@/assets/img/Services/services3/bg4.png';
import imagesModal_3_bg5 from '@/assets/img/Services/services3/bg5.png';
import imagesModal_4_bg1 from '@/assets/img/Services/services4/bg1.png';
import imagesModal_4_bg2 from '@/assets/img/Services/services4/bg2.png';
import imagesModal_4_bg3 from '@/assets/img/Services/services4/bg3.png';
import imagesModal_4_bg4 from '@/assets/img/Services/services4/bg4.png';
import imagesModal_4_bg5 from '@/assets/img/Services/services4/bg5.png';


import listImg1 from '@/assets/img/Services/services-list/services-list1.svg';
import listImg2 from '@/assets/img/Services/services-list/services-list2.svg';
import listImg3 from '@/assets/img/Services/services-list/services-list3.svg';
import listImg4 from '@/assets/img/Services/services-list/services-list4.svg';
import listImg5 from '@/assets/img/Services/services-list/services-list5.svg';
import listImg6 from '@/assets/img/Services/services-list/services-list6.svg';
type ModalImage = {
	src: string;
	alt: string;
};

type Service = {
	imagesService: string;
	title: string;
	subtitle: string;
	imagesModal: ModalImage[];
	list: {
		img: string;
		title: string;
		subTitle: string
	}[];
};

type Services = {
	[key: string]: Service;
}

export const services = ref<Services>({
		service1: {
			imagesService: imagesService1,
			title: 'Установка пластиковых окон',
			subtitle: 'Пластиковые окна Rehau от проверенного производителя с гарантией качества',
			imagesModal: [
				{src: imagesModal_1_bg1, alt: 'Image'},
				{src: imagesModal_1_bg2, alt: 'Image'},
				{src: imagesModal_1_bg3, alt: 'Image'},
				{src: imagesModal_1_bg4, alt: 'Image'},
				{src: imagesModal_1_bg5, alt: 'Image'},
			],
			list: [
				{
					img: listImg1,
					title: 'Пластиковые окна',
					subTitle: 'Использование ламинационных окон, ламинации в массе, 3д-ламинации, а также покраска окон.',
				},
				{
					img: listImg2,
					title: 'Ламинация',
					subTitle: 'Пластиковые окна могут быть любого нужного вам цвета. Внутри и снаружи. ',
				},
				{
					img: listImg3,
					title: 'Подоконники',
					subTitle: 'Качественный подоконник не царапается, выдерживает большие нагрузки и будет служить вам долгие годы. ',
				},
				{
					img: listImg4,
					title: 'Цветные ручки',
					subTitle: 'Оригинальные оконные ручки подчеркнут дизайн окна. Подберем оптимальный цвет ручек в зависимости от цвета всей конструкции. ',
				},
				{
					img: listImg5,
					title: 'Проветриватели',
					subTitle: 'Постоянное обновление воздуха в комнате снижает риск аллергии, улучшает сон и благоприятно влияет на самочувствие.',
				},
				{
					img: listImg6,
					title: 'Москитные сетки',
					subTitle: 'Москитные сетки Нежеланные насекомые останутся на улице, а ваша кошка - в квартире. Устанавливаем сетки для пластиковых окон любых форм и размеров.',
				},
			]
		},
		service2: {
			imagesService: imagesService2,
			title: 'Остекление балконов и лоджий',
			subtitle: 'Занимаемся остеклением и отделкой балконов и лоджий. Теплое и холодное остекление, изготовление выносов и крыш. Беремся за сложные объекты',

			imagesModal: [
				{src: imagesModal_2_bg1, alt: 'Image'},
				{src: imagesModal_2_bg2, alt: 'Image'},
				{src: imagesModal_2_bg3, alt: 'Image'},
				{src: imagesModal_2_bg4, alt: 'Image'},
				{src: imagesModal_2_bg5, alt: 'Image'},
			],
			list: [
				{
					img: listImg1,

					title: 'Тёплое остекление',
					subTitle: 'Теплое остекление — возможность сделать из балкона или лоджии полноценное жилое помещение.',
				},
				{
					img: listImg2,

					title: 'Холодное остекление',
					subTitle: 'Холодное остекление рекомендовано в случаях, когда балкон или лоджия используются для хранения вещей.',
				},
				{
					img: listImg3,

					title: 'Панорамное остекление',
					subTitle: 'Остекление от пола до потолка, дающее максимальное естественное освещение и прекрасный обзор окрестностей.'
				},
				{
					img: listImg4,

					title: 'Остекление с выносом',
					subTitle: 'Способ увеличения площади и объема балкона или лоджии.',
				},
				{
					img: listImg5,

					title: 'Остекление с крышей',
					subTitle: 'Строительство крыши для домов с высоким потолком и квартир, расположенных на последних этажах.',
				},
				{
					img: listImg6,

					title: 'Объединение с комнатой',
					subTitle: "Перепланировка квартиры, дающая дополнительные метры полезной площади и улучшающая жилищные условия.",
				},
			]
		},
		service3: {
			imagesService: imagesService3,
			title: 'Остекление коттеджей и дач',
			subtitle: 'Остекление и отделка под ключ: от коттеджей и дач до терраc и беседок. Выделяем личного технолога' +
				' под каждый обьект',
			imagesModal: [
				{src: imagesModal_3_bg1, alt: 'Image'},
				{src: imagesModal_3_bg2, alt: 'Image'},
				{src: imagesModal_3_bg3, alt: 'Image'},
				{src: imagesModal_3_bg4, alt: 'Image'},
				{src: imagesModal_3_bg5, alt: 'Image'},
			],
			list: [
				{
					img: listImg1,
					title: 'Цветные окна',
					subTitle: 'Использование ламинационных окон, ламинации в массе, 3д-ламинации, \n' +
						'а также покраска окон.',
				},
				{
					img: listImg2,
					title: 'Фигурные окна\n',
					subTitle: 'Арочные окна, окна трапеции, треугольные окна, круглые и многоугольные окна',
				},
				{
					img: listImg3,
					title: 'Алюминиевые конструкции',
					subTitle:
						'Идеальный вариант для\n' +
						'большой площади остекления:\n' +
						'зимние сады, террасы и т.п..'
				},
				{
					img: listImg4,
					title: 'Деревянные окна',
					subTitle: 'Экологичное и натуральное\n' +
						'решение для остекления\n' +
						'любого объекта.',
				},
				{
					img: listImg5,
					title: 'Портальные решения',
					subTitle: 'Эксклюзивные дверные и балконные раздвижные\n' +
						'конструкции для элитных квартир и респектабельных\n' +
						'домов, обеспечивающие панорамный вид\n и экономящие пространство.',
				},
				{
					img: listImg6,
					title: 'Рольставни и ворота',
					subTitle: "Защитные рольставни\n" +
						"для частных домов,\n" + "роллетные ворота",
				},
			],
		},
		service4: {
			imagesService: imagesService4,
			title: 'Остекление корпоративных объектов',
			subtitle:
				'Реализуем сложные проекты\n' +
				'по остеклению торговых центров,\n' +
				'ресторанов, производственных помещений и офисов',
			imagesModal: [
				{src: imagesModal_4_bg1, alt: 'Image'},
				{src: imagesModal_4_bg2, alt: 'Image'},
				{src: imagesModal_4_bg3, alt: 'Image'},
				{src: imagesModal_4_bg4, alt: 'Image'},
				{src: imagesModal_4_bg5, alt: 'Image'},
			],
			list: [
				{
					img: listImg1,
					title: 'Многоквартирные дома',
					subTitle: 'Изготовление и монтаж окон ПВХ\n' +
						'под ключ. Приглашаем к партнерству\n' +
						'застройщиков',
				},
				{
					img: listImg2,
					title: 'Офисные помещения',
					subTitle: 'Установка пластиковых окон,\n' +
						'офисных перегородок и\n' +
						'дверей и входных групп.',
				},
				{
					img: listImg3,
					title: 'Социальные объекты',
					subTitle: 'Остекляем детские сады,\n' + 'школы, медицинские учреждения'
				},
				{
					img: listImg4,
					title: 'Объекты торговли',
					subTitle: 'Способ увеличения площади и объема балкона или лоджии.',
				},
				{
					img: listImg5,
					title: 'Спортивные объекты\n',
					subTitle:
						'Остекляем спортивные залы,\n' +
						'бассейны, крытые спорткомплексы',
				},
				{
					img: listImg6,
					title: 'Производственные помещения',
					subTitle: 'Устанавливаем окна для складских\n' +
						'и промышленных зданий в соответствии\n' +
						'с требованиями бизнеса',
				},
			],
		},
	}
)
