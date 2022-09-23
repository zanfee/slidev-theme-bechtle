<script setup lang="ts">
import { computed } from 'vue';
import { useInbox } from '../composibles/inbox';

const inbox = useInbox();
const total = computed(() => inbox.selectedEmail.products ? inbox.selectedEmail.products.reduce((acc, product) => acc + product[1].price * product[1].amount, 0) : 0);
</script>

<template>
  <div v-show="inbox.selectedEmail.id >= 0" class="w-full bg-bechtle-hellgrau border-2 px-4 flex-1">
    <div py-4 h-10><img :src="'../public/assets/' + inbox.selectedEmail.sender + '.svg'" alt="" max-h-8 max-w-24 ml-auto></div>
    <div font-bold>{{ inbox.selectedEmail.subject}}</div>
    <ul>
      <li v-for="[key, val] in inbox.selectedEmail.products">
        <div flex justify-between>
          <div class="text-bechtle-wintergrau">{{ val.amount }}x {{ key }}</div>
          <div>{{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.price * val.amount) }}</div>
        </div>
      </li>
    </ul>
    <hr border-b-1 my-2>
    <div flex justify-between>
      <div class="text-bechtle-wintergrau">Total</div>
      <div>{{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(total) }}</div>
    </div>
  </div>
</template>