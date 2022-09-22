<script setup lang="ts">
import { useInbox } from '../composibles/inbox';

const { selectedEmail, selected } = useInbox();
</script>

<template>
  {{ selectedEmail}}
  {{ selected}}
  <div v-show="selectedEmail.id >= 0" class="w-full bg-bechtle-hellgrau border-2 flex-grow">
    Sap
  </div>
</template>