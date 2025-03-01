<template>
  <section class="about" id="products">
    <p class="about__title">Продукция</p>
    <div class="about__variants">
      <p
          class="about__variant"
          @click="setActiveSection('standard')"
          :class="{ active: activeSection === 'standard' }">
        Стандарт
      </p>
      <p
          class="about__variant"
          @click="setActiveSection('business')"
          :class="{ active: activeSection === 'business' }">
        Бизнес
      </p>
      <p
          class="about__variant"
          @click="setActiveSection('premium')"
          :class="{ active: activeSection === 'premium' }">
        Премиум
      </p>
      <p
          class="about__variant"
          @click="setActiveSection('exclusive')"
          :class="{ active: activeSection === 'exclusive' }">
        Эксклюзив
      </p>
    </div>
    <transition name="fade" mode="out-in">
      <div :key="activeSection" class="content">
        <div class="about__block" v-if="activeVariant">
          <img :src="activeVariant.img" :alt="activeVariant.alt" class="about-left__img">
          <div class="about-right">
            <h2 class="about-right__title">{{ activeVariant.title }}</h2>
            <p class="about-right__subtitle">{{ activeVariant.subtitle }}</p>
            <ul class="about-right__list">
              <li class="about-right__item" v-for="(param, index) in activeVariant.params" :key="index">
                <p class="about-right__item-params">{{ param.label }}</p>
                <span class="about-right__item-span">{{ param.value }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
    <Order/>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.about {
 width: 1280px;
  margin: 95px auto 85px auto;
}

.about__title {
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  color: #2F2F51;
  margin-bottom: 40px;
}

.about__variants {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  margin-bottom: 20px;
}

.about__variant {
  font-weight: 400;
  font-size: 18px;
  padding: 10px 20px;
  color: #000000;
  cursor: pointer;
  border-radius: 3px;
  transition: color 0.3s ease, transform 0.2s;
}

.about__variant.active {
  background-color: #EF7F04;
  color: #FFFFFF;
}

.about__variant:not(:last-child) {
  margin-right: 45px;
}

.about__variant:hover {
  transform: scale(1.1);
  color: #FFFFFF;
  padding: 10px 20px;
  background-color: #EF7F04;
  transition: all 0.2s ease;
}

.about__block {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 3px;
}

.about-left__img {
  width: 567px;
  height: 461px;
  margin-right: 34px;
}

.about-right {
  display: flex;
  flex-direction: column;
  width: 511px;
}

.about-right__title {
  font-weight: 700;
  font-size: 36px;
  color: #EF7F04;
  margin-bottom: 35px;
}

.about-right__subtitle {
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  margin-bottom: 30px;
  text-align: left;
  line-height: 1.2;
}

.about-right__list {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-right__item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.about-right__item-params {
  font-weight: 400;
  color: #000000;
  font-size: 18px;
}

.about-right__item-span {
  font-weight: 700;
}

</style>

<script setup lang="ts">
import {computed, ref} from 'vue';
import Order from '~/section/Order/Order.vue';
import {variants} from "~/data/products.data";

interface Param {
  label: string;
  value: string;
}

interface Variant {
  typeVariant: string;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  params: Param[];
  prev: string;
  next: string;
}

const productVariants = ref<Variant[]>(variants);
const activeSection = ref<string>(productVariants.value[0].typeVariant);

const setActiveSection = (section: string) => {
  activeSection.value = section;
};

const activeVariant = computed(() => {
  return productVariants.value.find(variant => variant.typeVariant === activeSection.value);
});
</script>
