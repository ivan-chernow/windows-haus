<template>
  <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M6.20654 1.02124H28.7065C30.2065 1.02124 31.7065 2.52124 31.7065 5.52124V20.5212C31.7065 22.0212 30.2065 23.5212 28.7065 23.5212H24.2065C24.2065 23.5212 25.7065 26.5212 21.2065 28.0212C22.7065 26.5212 19.7065 23.5212 19.7065 23.5212H6.20654C3.20654 23.5212 1.70654 22.0212 1.70654 20.5212V5.52124C1.70654 2.52124 3.20654 1.02124 6.20654 1.02124V1.02124Z"
          :stroke="props.stroke" stroke-width="2" stroke-miterlimit="22.9256" stroke-linecap="round"
          stroke-linejoin="round"/>
    <path d="M7.70654 8.52121H27.2065" :stroke="props.stroke" stroke-width="2" stroke-miterlimit="22.9256"
          stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.70654 13.0212H16.7065" :stroke="props.stroke" stroke-width="2" stroke-miterlimit="22.9256"
          stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.70654 17.5213H21.2065" :stroke="props.stroke" stroke-width="2" stroke-miterlimit="22.9256"
          stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  stroke: string
}>()

</script>
