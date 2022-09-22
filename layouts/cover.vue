<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    default: '../assets/Vasco-da-Gama-bridge.jpg',
  },
  dim: {
    default: false,
  }
})

const style = computed(() => handleBackground(props.background, props.dim))
</script>

<template>
  <div
    class="slidev-layout cover border-15"
    :style="style"
  >
    <div class="mt-auto mb-42 w-full">
      <slot />
    </div>
  </div>
</template>