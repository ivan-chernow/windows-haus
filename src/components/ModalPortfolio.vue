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
        <ModalServiceCarousel v-if="props.selectedProject?.imagesModal"
                              :imagesModal="props.selectedProject.imagesModal"/>
        <div class="modal-content__right">
          <div class="modal-content__right-block">
            <p class="modal-content-right__data">{{ props.selectedProject?.date }}</p>
            <svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="modal-content-right__icon">
              <g clip-path="url(#clip0_347_685)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M14.6236 0.435669C22.8054 0.435669 30.0781 6.7993 30.0781 14.9811C30.0781 23.1629 19.169 38.6175 14.6236 38.6175C10.9872 38.6175 0.078125 23.1629 0.078125 14.9811C0.078125 6.7993 6.44176 0.435669 14.6236 0.435669V0.435669Z"
                      fill="#EF7F1A"/>
                <path
                    d="M14.6236 27.7084C21.1506 27.7084 26.4418 22.4172 26.4418 15.8902C26.4418 9.3632 21.1506 4.07202 14.6236 4.07202C8.0966 4.07202 2.80542 9.3632 2.80542 15.8902C2.80542 22.4172 8.0966 27.7084 14.6236 27.7084Z"
                    fill="#FEFEFE"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M21.8964 12.2539H16.4418L12.8054 9.52661L10.0782 11.3448V10.4357H8.25999V13.163L5.53271 14.9812H8.25999V21.3448H21.8964V14.9812H24.6236L21.8964 12.2539ZM16.4418 14.9812H20.9873V20.4357H16.4418V14.9812ZM12.8054 11.3448L16.4418 14.0721H9.16908L12.8054 11.3448ZM10.0782 14.9812H15.5327V20.4357H10.0782V14.9812Z"
                      fill="#EF7F1A"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M21.8964 12.2539H16.4418L12.8054 9.52661L10.0782 11.3448V10.4357H8.25999V13.163L5.53271 14.9812H21.8964H24.6236L21.8964 12.2539ZM12.8054 11.3448L16.4418 14.0721H9.16908L12.8054 11.3448Z"
                      fill="#5B5B5B"/>
              </g>
              <defs>
                <clipPath id="clip0_347_685">
                  <rect width="30" height="39" fill="white" transform="translate(0.078125 0.0266113)"/>
                </clipPath>
              </defs>
            </svg>
            <p class="modal-content-right__address">{{ props.selectedProject?.address }}</p>
          </div>
          <p class="modal-content-right__title">{{ props.selectedProject?.title }}</p>
          <p class="modal-content-right__subtitle">Что делали</p>
          <p class="modal-content-right__made">{{ props.selectedProject?.made }}</p>
          <p class="modal-content-right__subtitle">Категории объекта:</p>
          <p class="modal-content-right__category">{{ props.selectedProject?.category }}</p>
          <div class='modal-content-right__row'>
            <FreezeButton class="header__freeze-button" @click="modalFreeze.openModalFreeze" width="169px" height="40px"
                          title="Заявка на замер"/>
            <transition name="fade">
              <ModalMenuFreeze v-if="modalFreeze.showModalFreeze" @close="modalFreeze.closeModalFreeze"/>
            </transition>
            <PriceButton class="header_calc-button" @click="modalCalc.openModalCalc" width="143px" height="40px"
                         img="img"
                         title=""/>
            <transition name="fade">
              <ModalMenuCalc v-if="modalCalc.showModalCalc" @close="modalCalc.closeModalCalc" img="img" title=""/>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import FreezeButton from "~/components/FreezeButton.vue";
import ModalMenuFreeze from "~/components/ModalMenuFreeze.vue";
import {defineProps} from "vue";
import ModalServiceCarousel from "~/components/ModalServiceCarousel.vue";
import type {Image} from "~/data/portfolio.data";
import PriceButton from "~/components/PriceButton.vue";
import { ModalCalcState, ModalFreezeState} from "~/store/modalState";
import {usePressEscape} from "~/hooks/usePressEscape";

const modalFreeze = ModalFreezeState()
const modalCalc = ModalCalcState()


const props = defineProps<ModalServicesProps>();

interface ModalServicesProps {
  selectedProject: {
    imagesModal: Image[],
    date: string,
    address: string,
    title: string,
    made: string,
    category: string
  } | null
}

usePressEscape([modalFreeze.closeModalFreeze, modalCalc.closeModalCalc]);

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
  height: 350px;
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
  width: 773px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.modal-content__right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 420px;
  margin-left: 50px;
}

.modal-content-right__title {
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  margin-bottom: 20px;
}

.modal-content-right__subtitle {
  font-weight: 700;
  color: #000000;
  margin-bottom: 5px;
}

.modal-content-right__row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.header__freeze-button {
  margin-right: 14px;
}

.modal-content__right-block {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.modal-content-right__data {
  font-weight: 400;
  font-size: 14px;
  color: gray;
  margin-right: 12px;
}

.modal-content-right__icon {
  width: 30px;
  height: 39px;
  margin-right: 11px;
}

.modal-content-right__address {
  font-weight: 400;
  color: #2F2F51;
  width: 400px;
}

.modal-content-right__made {
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  line-height: 1.2;
  margin-bottom: 10px;
}

.modal-content-right__category {
  margin-bottom: 20px;
}


</style>
