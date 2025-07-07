<template>
  <div class="modal-overlay modal" @click="$emit('close')">
    <div class="service-modal" @click.stop>
      <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="modal__cross-icon"
          @click="$emit('close')"
      >
        <path
            d="M21.75 1.14355L1.25 21.6436M1.25 1.14355L21.75 21.6436"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
      </svg>
      <div class="services-modal__content">
        <ModalServiceCarousel :imagesModal="imagesModals" class="modal_carousel"/>
        <div class="modal-content__right">
          <p class="modal-content-right__title">{{ props.title }}</p>
          <p class="modal-content-right__subtitle">{{ props.description }}</p>
          <div class='modal-content-right__row'>
            <FreezeButton class="header__freeze-button" @click="modalFreeze.openModalFreeze" width="169px" height="40px"
                          title="Заявка на замер"/>
            <transition name="fade">
              <ModalMenuFreeze v-if="modalFreeze.showModalFreeze" @close="modalFreeze.closeModalFreeze"/>
            </transition>
            <CalculationButton class="header_calc-button" @click="modalCalc.openModalCalc" width="169px" height="40px"/>
            <transition name="fade">
              <ModalMenuCalc v-if="modalCalc.showModalCalc" @close="modalCalc.closeModalCalc"/>
            </transition>
          </div>
        </div>
      </div>
      <ul class="modal-content__list">
        <li class="modal-content__item" v-for="(item) in props.list">
          <div class="modal-content-item__row">
            <img :src="item.img" alt="img" class="modal-content-item__img1">
            <div class="modal-content-item__column">
              <p class="modal-content-item__column-tittle">{{ item.title }}</p>
              <p class="modal-content-item__column-subtitle">{{ item.subTitle }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import FreezeButton from "~/components/FreezeButton.vue";
import CalculationButton from "~/components/CalculationButton.vue";
import ModalMenuFreeze from "~/components/ModalMenuFreeze.vue";
import ModalMenuCalc from "~/components/ModalMenuCalc.vue";
import ModalServiceCarousel from "~/components/ModalServiceCarousel.vue";
import {defineProps} from "vue";
import {ModalCalcState, ModalFreezeState} from "~/store/modalState";
import {usePressEscape} from "~/hooks/usePressEscape";

const modalFreeze = ModalFreezeState()
const modalCalc = ModalCalcState()

interface ModalServicesProps {
  title: string;
  description: string;
  imagesModals: { src: string; alt: string; }[];
  list: { title: string; subTitle: string; img: string}[];
}

const props = defineProps<ModalServicesProps>();

usePressEscape([modalFreeze.closeModalFreeze, modalCalc.closeModalCalc])
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-modal {
  animation: fadeIn 0.3s ease-out;
}


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);

}

.service-modal {
  width: 1000px;
  background-color: white;
  border-radius: 8px;
  padding: 50px 20px 20px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1001;

}

.modal__cross-icon {
  width: 16px;
  height: 16px;
  stroke: black;
  position: absolute;
  top: 33px;
  right: 31px;
  cursor: pointer;
  transition: transform 0.2s;
  display: block;
  margin-bottom: 30px;
}

.modal__cross-icon:hover {
  transform: scale(1.2);
}


.services-modal__content {
  max-width: 773px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.modal_carousel {
  display: flex;
  align-items: flex-start;
}

.service-modal {
  width: 1000px;
}

.services-modal__content {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.modal-content__right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 375px;
}

.modal-content-right__title {
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  margin-bottom: 20px;
}

.header__freeze-button {
  margin-right: 30px;
}

.modal-content-right__subtitle {
  font-weight: 400;
  color: #000000;
  margin-bottom: 25px;
}

.modal-content-right__row {
  display: flex;
  align-items: center;
}

.modal-content__list {
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.modal-content__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-bottom: 25px;
}

.modal-content__item:nth-child(2) {
  margin-bottom: 45px;
}

.modal-content-item__img1 {
  width: 80px;
  height: 69px;
  margin-right: 17px;
}


.modal-content-item__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-content-item__column {
  display: flex;
  flex-direction: column;
  width: 266px;
}

.modal-content-item__column-tittle {
  font-weight: 700;
  font-size: 14px;
  color: #2F2F51;
  margin-bottom: 5px;
}

.modal-content-item__column-subtitle {
  font-weight: 400;
  font-size: 13px;
  color: #2F2F51;

}
</style>
