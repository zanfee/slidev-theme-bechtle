<script setup lang="ts">
import { computed } from 'vue';
import { useInbox } from '../composibles/inbox';

const inbox = useInbox();
const itemCount = computed(() => inbox.selectedEmail.products ? inbox.selectedEmail.products.reduce((acc, product) => acc + product[1].amount, 0) : 0);
const total = computed(() => inbox.selectedEmail.products ? inbox.selectedEmail.products.reduce((acc, product) => acc + product[1].price * product[1].amount, 0) : 0);
const totalEuro = computed(() => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(total.value));
</script>

<template>
  <div v-show="inbox.selectedEmail.id >= 0" class="w-full bg-#eff4f9 border-2 border-#b1cbe1 flex-1">
    <div class="flex items-center bg-#b1cbe1 h-8 border-b-2 border-#009de0"><img src="../assets/sap.svg" alt="SAP" h-6 mx-2><div class="text-#009de0 font-bold">{{ inbox.selectedEmail.subject}}</div></div>
    <table mx-2 mt-2>
      <thead>
        <tr><th>Bestellung</th><th>Rechnung</th></tr>
      </thead>
      <tbody>
        <tr><td>{{ itemCount }} Artikel</td><td>{{ itemCount }} Artikel</td></tr>
        <tr><td>{{ totalEuro }}</td><td>{{ totalEuro }}</td></tr>
      </tbody>
    </table>
    <div class="mt-2 ml-4 flex items-center gap-2 text-bechtle-taubenblau"><div class="i-fa6-solid:check" />Daten stimmen überein</div>
  </div>
</template>

<style scoped>
th, td {
  @apply py-2!;
}

th {
  @apply font-bold!;
}
</style>