<template>
  <section class="portfolio" id="portfolio">
    <div class="portfolio__block-1">
      <p class="portfolio__title">Портфолио</p>
      <div class="swiper-container">
        <swiper
            :slides-per-view="4"
            :space-between="30"
            :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
            :loop="true"
            :modules="modules"
            @swiper="onSwiper"
        >
          <swiper-slide v-for="(project, index) in projects" :key="project.id">
            <div class="portfolio__item" @click="openModal(project)">
              <img
                  v-if="project.imagesModal.length > 0"
                  :src="project.imagesModal[0].src"
                  alt="img"
                  class="portfolio-item__img"
              />
              <div v-else class="portfolio-item__placeholder">Нет изображений</div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev svg-left">
          <svg width="26" height="50" viewBox="0 0 26 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 0.812988L1 24.813L25 48.813" stroke="currentColor" stroke-width="3"/>
          </svg>
        </div>
        <div class="swiper-button-next svg-right">
          <svg width="26" height="50" viewBox="0 0 26 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.812988L25 24.813L1 48.813" stroke="currentColor" stroke-width="3"/>
          </svg>
        </div>
      </div>
    </div>
    <ModalPortfolio v-if="isModalOpen" @close="closeModal" :selectedProject="selectedProject"/>
    <YandexMap/>
  </section>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { portfolio, type Project } from '~/data/portfolio.data';
import ModalPortfolio from '~/components/ModalPortfolio.vue';
import YandexMap from '~/components/YandexMap.vue';

const swiperInstance = ref(null);
const isModalOpen = ref(false);
const selectedProject = ref<Project | null>(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const projects = Object.values(portfolio).map((project, index) => ({
  ...project,
  id: index + 1,
}));

const openModal = (project: Project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
};

const modules = [Navigation];
</script>

<style scoped>

.portfolio {
  width: 1280px;
  margin: 86px auto 81px auto;
}

.portfolio__block-1 {
  background-color: #FFFFFF;
  padding: 36px;
  border-radius: 3px;
  position: relative;
}

.portfolio__title {
  font-weight: 700;
  font-size: 24px;
  color: #2F2F51;
  margin-bottom: 47px;
  text-align: center;
}

.swiper-container {
  position: relative;
  padding: 0 60px;
}

.portfolio__item {
  cursor: pointer;
  width: 100%;
  height: 214px;
  position: relative;
  overflow: hidden;
  border-radius: 3px;
}

.portfolio__item:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
  transition: transform 0.5s ease, box-shadow 0.3s ease;
}

.portfolio-item__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 3px;
}

.portfolio-item__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  color: #2F2F51;
  font-size: 16px;
}


.svg-left {
  left: 1px;
}

.svg-right {
  right: 1px;
}

.svg-left svg,
.svg-right svg {
  color: gray;
}

.svg-left:active svg path,
.svg-right:active svg path {
  stroke: black;
}

.svg-left:hover svg,
.svg-right:hover svg {
  color: #EF7F1A;
  transition: color 0.2s ease-in;

}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}
</style>