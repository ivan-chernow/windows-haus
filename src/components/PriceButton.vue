<script setup lang="ts">

const props = defineProps<{
  width?: string;
  height?: string;
}>();

const buttonWidth = props.width
const buttonHeight = props.height
</script>


<template>
  <div class="calculation-button" :style="{width: buttonWidth, height: buttonHeight}">
    <svg width="31" height="21" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg"
         class="calculation-button__img">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M11 19.3123H25.2857C28.1429 19.3123 29.5714 17.8837 29.5714 15.0266V5.02656C29.5714 3.59799 28.1429 0.740845 25.2857 0.740845H11C9.57143 0.740845 7.625 1.90161 6.71429 3.59799C3.5625 4.33911 0.9375 6.3034 0.9375 10.5891C0.9375 13.4463 3.85714 16.4551 6.71429 16.4551C8.14286 17.8837 9.57143 19.3123 11 19.3123Z"
            stroke="#EF7F1A" stroke-width="1.42857" stroke-miterlimit="22.9256"/>
      <path
          d="M7.95541 13.223C9.53337 13.223 10.8126 11.9438 10.8126 10.3658C10.8126 8.78785 9.53337 7.50867 7.95541 7.50867C6.37745 7.50867 5.09827 8.78785 5.09827 10.3658C5.09827 11.9438 6.37745 13.223 7.95541 13.223Z"
          stroke="#EF7F1A" stroke-width="1.42857" stroke-miterlimit="22.9256" stroke-linecap="round"
          stroke-linejoin="round"/>
      <path
          d="M16.7142 15.0266V5.02661C16.7142 5.02661 20.4285 5.02661 20.4285 7.88375C20.4285 10.7409 17.1428 10.7409 17.1428 10.7409"
          stroke="#EF7F1A" stroke-width="1.42857" stroke-miterlimit="22.9256" stroke-linecap="round"
          stroke-linejoin="round"/>
      <path d="M15.2858 13.598H18.5715" stroke="#EF7F1A" stroke-width="1.42857" stroke-miterlimit="22.9256"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <p class="calculation-button__par">Узнать цену</p>
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
  width: 28px;
  height: 18px;
  margin-right: 10px;
}

.calculation-button__par {
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 700;
}
</style>
