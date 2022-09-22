<script setup lang="ts">
import { ref } from 'vue';
import { useInbox } from '../composibles/inbox';

const inbox = useInbox();
const read = ref(false);
const show = ref(true);

defineProps({
  id: {
    type: Number,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  date: {
    default: new Date(),
  },
  message: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div v-show="show" class="flex items-center justify-between px-3 py-2 border-l-4 border-b-2" :class="{'border-l-bechtle-zukunftsblau': !read}" @click="inbox.select(id); read = true">
    <div>
      <div>{{ subject }}</div>
      <div class="text-bechtle-wintergrau flex items-center gap-2"><div class="text-sm i-fa6-solid:user" />{{ sender }}<div class="text-sm i-fa6-solid:clock ml-2" />{{ date.toLocaleString() }}</div>
    </div>
    <img src="../assets/pdf.svg" alt="SVG Icon" h-8 @click.stop="inbox.select(-1); show = false">
  </div>
</template>
