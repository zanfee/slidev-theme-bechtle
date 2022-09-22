<script setup lang="ts">
import { useInbox } from '../composibles/inbox';

const { select } = useInbox();

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  read: {
    default: false,
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
  attachments: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="px-3 py-2 border-l-4 border-b-2" :class="{'border-l-bechtle-zukunftsblau': !read}" @click="select(id)">
    <div>{{ subject }}</div>
    <div class="text-bechtle-wintergrau flex items-center gap-2"><div class="text-sm i-fa6-solid:user" />{{ sender }}<div class="text-sm i-fa6-solid:clock ml-2" />{{ date.toLocaleString() }}</div>
  </div>
</template>
