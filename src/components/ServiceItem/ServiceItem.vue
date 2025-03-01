<template>
  <li class="services__item" @click="$emit('click')">
    <div class="services__item-bg" :style="{ backgroundImage: 'url(' + props.imagesModal.src + ')' }"></div>
    <div class='services-item__content'>
      <div class='services-item__row'>
        <img :src="props.imagesService" alt="img" class="services__img"/>
        <p class="services-item__title">{{ props.title }}</p>
      </div>
      <p class="services-item__description services-item__description-mt1">{{ props.description }}</p>
    </div>
    <svg width="40" height="21" viewBox="0 0 40 21" fill="none" xmlns="http://www.w3.org/2000/svg"
         class="services-item__strelka">
      <path d="M23.3846 1.75L38 10.75L23.3846 19.75" stroke="white" stroke-width="2"/>
      <path d="M0 10.75H37.0256" stroke="white" stroke-width="2"/>
    </svg>
  </li>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

interface ServicesProps {
  imagesService: string;
  title: string;
  description: string;
  imagesModal: { src: string, alt: string }
}

const props = defineProps<ServicesProps>();
</script>

<style scoped>
.services__item {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 47px 22px 22px 48px;
  flex: 1 1 595px;
  max-height: 268px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background-color: white;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
}

.services__item-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  mask-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  transition: opacity 0.5s ease;
}

.services__item:hover .services__item-bg {
  filter: blur(0);
}

.services__item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.services-item__content {
  position: relative;
  z-index: 1;
  width: 50%;
  padding: 20px;
}

.services-item__row {
  display: flex;
  align-items: center;
}

.services__img {
  margin-right: 20px;
}

.services-item__title {
  font-weight: 700;
  font-size: 24px;
  color: #2F2F51;
  width: 280px;
}

.services-item__description {
  font-weight: 400;
  color: #2F2F51;
  width: 302px;
  margin-bottom: 5px;
  margin-top: 30px;
}

.services-item__description-mt1 {
  margin-top: 31px;
}

.services-item__strelka {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.services__item:hover .services-item__strelka path {
  stroke: #EF7F1A;
  transition: all 0.3s ease;
}


</style>
