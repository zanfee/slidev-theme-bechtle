<script setup lang="ts">
import { useInbox } from '../composibles/inbox';

const { emails, addEmail } = useInbox();

defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="inbox border-2 min-h-[17rem]">
    <div class="flex gap-2 items-center px-4 py-4 bg-bechtle-hellgrau border-b-2 font-semibold">
      <button class="i-fa6-solid-rotate text-bechtle-zukunftsblau" @click="addEmail" />
      {{ name }}
    </div>
    <Email v-for="email in emails" :id="email.id" :sender="email.sender" :subject="email.subject" :date="email.date" :message="email.message" :attachments="email.attachments" />
  </div>
</template>

<style scoped>
.inbox > div:last-child {
  @apply border-b-0!;
}
</style>