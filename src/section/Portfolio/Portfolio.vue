<template>
  <section class="portfolio" id="portfolio">
    <div class="portfolio__block-1">
      <p class="portfolio__title">Портфолио</p>
      <ul class="portfolio__list">
        <li class="portfolio__svg svg-left" @click="prevPage">
          <svg width="26" height="50" viewBox="0 0 26 50" fill="none" xmlns="http://www.w3.org/2000/svg"
               class="portfolio__svg-left">
            <path d="M25 0.812988L1 24.813L25 48.813" stroke="black"/>
          </svg>
        </li>
        <transition-group name="fade" tag="ul" class="portfolio__list">
          <li class="portfolio__item" v-for="(project, index) in currentProjects" :key="index"
              @click="openModal(project)">
            <img v-if="project.imagesModal.length > 0" :src="project.imagesModal[0].src" alt="img"
                 class="portfolio-item__img">
            <p v-else>Нет изображений</p>
          </li>
        </transition-group>
        <li class="portfolio__svg svg-right" @click="nextPage">
          <svg width="26" height="50" viewBox="0 0 26 50" fill="none" xmlns="http://www.w3.org/2000/svg"
               class="portfolio__svg-right">
            <path d="M1 0.812988L25 24.813L1 48.813" stroke="black"/>
          </svg>
        </li>
      </ul>
    </div>
    <ModalPortfolio v-if="isModalOpen" @close="closeModal" :selectedProject="selectedProject"/>
    <YandexMap/>
  </section>
</template>

<style scoped>
.portfolio {
  width: 1280px;
  margin: 86px auto 81px auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.portfolio__block-1 {
  background-color: #FFFFFF;
  padding: 36px;
  border-radius: 3px;
}

.portfolio__title {
  font-weight: 700;
  font-size: 24px;
  color: #2F2F51;
  margin-bottom: 47px;
  text-align: center;
}

.portfolio__list {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.portfolio__svg {
  width: 24px;
  height: 48px;
  cursor: pointer;
}

.svg-left {
  margin-right: 41px;
}

.svg-right {
  margin-left: -3px;
}

.portfolio__item {
  margin-right: 44px;
  cursor: pointer;
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: 1;
}

.portfolio__item.hidden {
  opacity: 0;
  transform: translateX(-20px);
}

.portfolio__item.show {
  opacity: 1;
  transform: translateX(0);
}

.portfolio__item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.portfolio-item__img {
  width: 214px;
  height: 214px;
  border-radius: 3px;
  object-fit: cover;
}

.portfolio__svg-left:hover path,
.portfolio__svg-right:hover path {
  stroke: #EF7F1A;
  transition: stroke 0.2s ease;
}
</style>

<script setup lang="ts">
import {computed, nextTick, ref} from 'vue';
import {portfolio, type Project} from "~/data/portfolio.data";
import '../../components/modalPortfolio/modalPortfolio.vue';
import '../../components/YandexMap/YandexMap.vue';

const projects = Object.values(portfolio);
const itemsPerPage = 4;
const currentIndex = ref(0);
const isModalOpen = ref(false);
const selectedProject = ref<Project | null>(null);

const currentProjects = computed(() => {
  const totalProjects = projects.length;
  const displayedProjects = [];

  for (let i = 0; i < itemsPerPage; i++) {
    const index = (currentIndex.value + i) % totalProjects;
    displayedProjects.push(projects[index]);
  }

  return displayedProjects;
});

const openModal = (project: Project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
};

const changeProjects = (direction: number) => {
  const items = document.querySelectorAll('.portfolio__item');

  items.forEach(item => {
    item.classList.add('hidden');
  });

  nextTick(() => {
    currentIndex.value = (currentIndex.value + direction + projects.length) % projects.length;

    items.forEach(item => {
      item.classList.remove('hidden');
      item.classList.add('show');
    });
  });
};

const nextPage = () => {
  changeProjects(1);
};

const prevPage = () => {
  changeProjects(-1);
};
</script>
