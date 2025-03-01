<template>
  <div>
    <div id="map" class="map-container"></div>
    <div v-if="hoveredText" class="hover-text" :style="{ left: textPosition.x + 'px', top: textPosition.y + 'px' }">
      {{ hoveredText }}
      <button class="close-button" @click="hoveredText = ''">×</button>
    </div>
  </div>
</template>

<script>
import markerImg from '../../assets/img/Portfolio/porfolio-svg.svg';

export default {
  name: 'YandexMap',
  data() {
    return {
      hoveredText: '',
      textPosition: { x: 0, y: 0 },
      markers: [],
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const apiKey = 'Ваш_API_ключ';
      const script = document.createElement('script');
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
      script.async = true;
      script.onload = () => {
        ymaps.ready(this.createMap);
      };
      document.head.appendChild(script);
    },
    createMap() {
      const myMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 5,
        controls: [],
      });

      const placemarks = [
        { coords: [56.988713, 40.974909], content: 'Монтаж окна и балконного блока' },
        { coords: [55.611409, 37.201131], content: 'Установка межкомнатных дверей' },
        { coords: [59.936724, 30.313326], content: 'Ремонт балкона под ключ' },
        { coords: [55.790231, 49.116251], content: 'Монтаж зимнего сада' },
        { coords: [55.018938, 82.923861], content: 'Установка натяжных потолков' },
        { coords: [56.811231, 60.615531], content: 'Ремонт ванной комнаты' },
      ];

      placemarks.forEach((place) => {
        const placemark = new ymaps.Placemark(place.coords, {
          balloonContent: place.content,
        }, {
          iconLayout: 'default#image',
          iconImageHref: markerImg,
          iconImageSize: [30, 39],
          iconImageOffset: [-15, -30],
        });

        placemark.events.add('mouseenter', () => {
          placemark.options.set('iconImageSize', [40, 50]);
          this.hoveredText = place.content;
          const coords = placemark.geometry.coordinates;
          const pixelPoint = myMap.project(coords);
          this.textPosition.x = pixelPoint[0] + 15;
          this.textPosition.y = pixelPoint[1] - 20;
        });

        placemark.events.add('mouseleave', () => {
          placemark.options.set('iconImageSize', [30, 39]);
          this.hoveredText = '';
        });

        myMap.geoObjects.add(placemark);
      });
    },
  },
};
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px;
}

.hover-text {
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  pointer-events: none;
  white-space: nowrap;
}

.close-button {
  background: transparent;
  border: none;
  color: red;
  cursor: pointer;
}
</style>
