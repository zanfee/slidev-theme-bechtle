import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, computed } from 'vue'

const suppliers = [
  {
    name: 'Microsoft',
    order: 16384,
    prefix: 'Rechnung MS0',
    products: {
      'Surface Pro 8': 1029,
      'Surface Laptop 4': 1129,
      'Surface Book 3': 1858,
      'Surface Studio 2': 4194,
    }
  },
  {
    name: 'Lenovo',
    order: 36496,
    prefix: 'Rechnung LNV',
    products: {
      'ThinkPad X1 Carbon': 1999,
      'ThinkPad X1 Yoga': 2299,
      'ThinkPad X1 Extreme': 2499,
      'ThinkPad X1 E Gen 2': 2799,
    }
  },
  {
    name: 'HP',
    order: 694648,
    prefix: 'Rechnung HP',
    products: {
      'Spectre x360 13': 1499,
      'Spectre x360 15': 1699,
      'Spectre x360 15t': 1999,
    },
  },
]

export const useInbox = defineStore('inbox', () => {
  let id = 0
  const emails = ref([])
  const selected = ref(-1)

  const selectedEmail = computed(() => {
    if (selected.value >= 0) 
      return emails.value[selected.value]
    return { id: -1 }
  })

  function addEmail() {
    const randomSupplier = suppliers[Math.floor(Math.random() * suppliers.length)]
    const randomNumberOfProducts = Math.floor(Math.random() * 2) + 2
    const randomProducts = new Map<string, { price: number, amount: number }>()

    for (let i = 0; i < randomNumberOfProducts; i++) {
      const randomProduct = Object.keys(randomSupplier.products)[Math.floor(Math.random() * Object.keys(randomSupplier.products).length)]
      if (!randomProducts.has(randomProduct))
        randomProducts.set(randomProduct, { price: randomSupplier.products[randomProduct], amount: Math.floor(Math.random() * 9) + 1 })
    }

    emails.value.push({
      id: id++,
      date: new Date(),
      subject: randomSupplier.prefix + randomSupplier.order++,
      sender: randomSupplier.name,
      products: [...randomProducts],
    })
  }

  function select(id: number) {
    console.log('select', id)
    if (emails.value.find((email) => email.id === id))
      selected.value = id
    else {
      selected.value = -1
      console.log('-1')
    }
  }

  return {
    emails,
    addEmail,
    select,
    selected,
    selectedEmail,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useInbox, import.meta.hot))
