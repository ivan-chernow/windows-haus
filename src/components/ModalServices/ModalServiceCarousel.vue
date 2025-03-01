<template>
  <div class="gallery" @touchstart="startTouch" @touchmove="moveTouch" @touchend="endTouch">
    <div class="image-display">
      <div class="images-container" :style="containerStyle">
        <img
            v-for="(image, index) in images"
            :key="index"
            :src="image.src"
            :alt="image.alt"
            class="image"
        />
      </div>
      <div class="pagination">
        <span
            v-for="(image, index) in images"
            :key="index"
            :class="{ active: currentSlide === index }"
            @mouseenter="changeSlide(index)"
            @mouseleave="changeSlide(currentSlide)"
        ></span>
      </div>
      <button class="prev" @click="prevSlide">❮</button>
      <button class="next" @click="nextSlide">❯</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, defineProps, ref} from 'vue';

interface Image {
  src: string;
  alt: string;
}

interface ModalServicesCarouselProps {
  imagesModal: Image[]
}

const props = defineProps<ModalServicesCarouselProps>();
const currentSlide = ref(0);
const images = props.imagesModal.map(img => ({
  src: img.src,
  alt: img.alt,
}));

const changeSlide = (index: number) => {
  currentSlide.value = index;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.length) % images.length;
};

let startX: number;

const startTouch = (event: TouchEvent) => {
  startX = event.touches[0].clientX;
};

const moveTouch = (event: TouchEvent) => {
  event.preventDefault();
};

const endTouch = (event: TouchEvent) => {
  const endX = event.changedTouches[0].clientX;
  const diffX = startX - endX;

  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
};

// Вычисляем стиль контейнера для анимации прокрутки
const containerStyle = computed(() => {
  return {
    transform: `translateX(-${currentSlide.value * 100}%)`,
    transition: 'transform 0.5s ease',
  };
});
</script>


<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.image-display {
  position: relative;
  margin-bottom: 20px;
  width: 307px;
  height: 229px;
  overflow: hidden;
}

.images-container {
  display: flex;
  transition: transform 0.5s ease; /* Плавный переход */
}

.image {
  width: 307px;
  height: 229px;
  object-fit: cover;
}

.pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.pagination span {
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pagination span.active {
  background-color: #ef7f1a;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  font-size: 24px;
  z-index: 1;
}

.prev:hover, .next:hover {
  background-color: #ef7f1a;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
