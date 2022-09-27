<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <img :src="src" :alt="alt">
</template>