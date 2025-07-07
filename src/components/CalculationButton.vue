<script setup lang="ts">
import CalculationIcon from "~/components/CalculationIcon.vue";

const propsCalc = defineProps<{
  width?: string;
  height?: string;
}>();

const buttonWidth = propsCalc.width
const buttonHeight = propsCalc.height
</script>


<template>
  <div class="calculation-button" :style="{width: buttonWidth, height: buttonHeight}">
    <CalculationIcon class="calculation-button__img"/>
    <p class="calculation-button__par">Заказать расчет</p>
  </div>
</template>


<style scoped>

.calculation-button {
  cursor: pointer;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3B3A63;
  color: white;
  border: none;
  transition: transform 0.3s ease, background-color 0.3s ease;
}


.calculation-button:hover {
  transform: scale(1.1);
}


.calculation-button:active {
  background-color: #0056b3;
  transform: scale(1.05);
}

.calculation-button__img {
  width: 20px;
  height: 18px;
  margin-right: 15px;
}

.calculation-button__par {
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 700;
}
</style>
