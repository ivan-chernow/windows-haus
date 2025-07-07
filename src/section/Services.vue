<script setup lang="ts">
import {services} from "~/data/services.data";
import ServiceItem from "~/components/ServiceItem.vue";
import ModalService from "~/components/ModalService.vue";
import {ModalServicesState} from "~/store/modalState";

const modalsService = ModalServicesState();
</script>

<template>
  <section class="services" id="services">
    <h2 class="services__title">Наши услуги</h2>
    <div class="services__block">
      <ul class="services__list">
        <ServiceItem
            v-for="(service, index) in services"
            :key="service.title + index"
            :imagesService="service.imagesService"
            :imagesModal="service.imagesModal[0]"
            :title="service.title"
            :description="service.subtitle"
            @click="modalsService.openModalService(index)"
        />
      </ul>
    </div>
    <transition name="fade">
      <ModalService
          v-if="modalsService.modalService"
          :key="services[modalsService.selectedServiceIndex].title"
          :title="services[modalsService.selectedServiceIndex].title"
          :description="services[modalsService.selectedServiceIndex].subtitle"
          :imagesModals="services[modalsService.selectedServiceIndex].imagesModal"
          :list="services[modalsService.selectedServiceIndex].list"
          @close="modalsService.closeModalService"
      />
    </transition>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.services {
  width: 1280px;
  margin: 130px auto 0;
}

.services__title {
  font-weight: 700;
  font-size: 24px;
  color: #2F2F51;
  margin-bottom: 48px;
  text-align: center;
}

.services__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
