<script setup lang="ts">
import { useInbox } from '../composibles/inbox';

const { selectedEmail } = useInbox();
</script>

<template>
  <div v-show="selectedEmail.id >= 0" class="w-full bg-bechtle-hellgrau border-2 flex-grow">
    {{ selectedEmail}}
  </div>
</template>