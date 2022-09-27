<script setup lang="ts">
import { prevSlide, nextSlide } from '@slidev/client/logic/nav'

console.log('enabling custom navigation')

window.addEventListener('dblclick', (e) => {
  nextSlide()
})
</script>

<template></template>