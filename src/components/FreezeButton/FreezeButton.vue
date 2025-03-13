<script setup lang="ts">
import FreezeIcon from "~/components/FreezeIcon/FreezeIcon.vue";
 const propsButton = defineProps<{
  title?: string;
  width?: string;
  height?: string;
}>();


const buttonWidth = propsButton.width
const buttonHeight = propsButton.height
</script>

<template>
  <div class="button-freeze" :style="{width: buttonWidth, height: buttonHeight}">
    <FreezeIcon class="button-freeze__img"/>
    <p class=button-freeze__par>{{ propsButton.title }}</p>
  </div>
</template>

<style scoped>

.button-freeze {
  cursor: pointer;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EF7F04;
  color: white;
  border: none;
  transition: transform 0.3s ease, background-color 0.3s ease;
}


.button-freeze:hover {
  transform: scale(1.1);
}


.button-freeze:active {
  background-color: #0056b3;
  transform: scale(1.05);
}


.button-freeze__img {
  width: 20px;
  height: 18px;
  margin-right: 13px;
}

.button-freeze__par {
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 700;
}
</style>
