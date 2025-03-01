<template>
  <header class="header" id="header">
    <div class="header__left">
      <nuxt-link to="/">
        <Logo class="header__logo"/>
      </nuxt-link>
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item"><a href="#services">Услуги</a></li>
          <li class="header__item"><a href="#products">Продукция</a></li>
          <li class="header__item"><a href="#about">О компании</a></li>
          <li class="header__item"><a href="#portfolio">Портфолио</a></li>
          <li class="header__item"><a href="#question">Вопрос-ответ</a></li>
          <li class="header__item"><a href="#contacts">Контакты</a></li>
        </ul>
      </nav>
    </div>
    <div class="header__buttons">
      <FreezeButton class="header__freeze-button" @click="openModalFreeze" width="172px" height="40px"
                    title="Заявка на замер"/>
      <transition name="fade">
        <ModalMenuFreeze v-if="modalFreeze.showModalFreeze" @close="closeModalFreeze"/>
      </transition>
      <CalculationButton @click="openModalCalc" width="172px" height="40px"/>
      <transition name="fade">
        <ModalMenuCalc v-if="modalCalc.showModalCalc" @close="closeModalCalc"/>
      </transition>
    </div>
  </header>
</template>


<script setup lang="ts">

import {ref} from 'vue';
import {useModalFreeze} from "~/store/modalFreeze";
import {useModalCalc} from "~/store/modalCalc";
import FreezeButton from "~/components/FreezeButton/FreezeButton.vue";
import CalculationButton from "~/components/CalculationButton/CalculationButton.vue";
import Logo from "~/components/Logo/Logo.vue";
import ModalMenuCalc from "~/components/ModalMenuCalc/ModalMenuCalc.vue";
import ModalMenuFreeze from "~/components/ModalMenuFreeze/ModalMenuFreeze.vue";
import Burger from "~/components/Burger.vue";

const modalFreeze = useModalFreeze();
const modalCalc = useModalCalc();
const isMenuOpen = ref(false);
const openModalFreeze = () => {
  modalFreeze.openModalFreeze();
};

const closeModalFreeze = () => {
  modalFreeze.closeModalFreeze();
};

const openModalCalc = () => {
  modalCalc.openModalCalc();
};

const closeModalCalc = () => {
  modalCalc.closeModalCalc();
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.header {
  width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 20px;
}

.header__left {
  display: flex;
  align-items: center;
}

.header__logo {
  width: 90px;
  height: 63px;
  cursor: pointer;
  margin-right: 44px;
}

.header__nav {
  display: flex;
}

.header__list {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
}

.header__item:not(:last-child) {
  margin-right: 40px;
}

.header__item {
  font-weight: 400;
  position: relative;
  display: inline-block;
  padding: 15px 0;
  cursor: pointer;
  overflow: hidden;
}

.header__item:active {
  color: #EF7F04;
}

.header__item::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: #EF7F04;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
}

.header__item:hover::after {
  transform: translateX(0);
}

.header__freeze-button {
  margin-right: 30px;
}

.header__buttons {
  display: flex;
  align-items: center;
}

/* Бургер-меню */
.header__burger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  border: none;
  background: transparent;
}

.header__burger-line {
  width: 25px;
  height: 3px;
  background: #000;
  margin: 3px 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}


</style>
