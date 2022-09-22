import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, computed } from 'vue'

const suppliers = [
  {
    name: 'Microsoft',
    order: 16384,
    prefix: 'Ord. no. MS0',
  },
  {
    name: 'Lenovo',
    order: 36496,
    prefix: 'Bestellung LNV',
  },
  {
    name: 'HP',
    order: 694648,
    prefix: 'Your order 0',
  }
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

    emails.value.push({
      id: id++,
      read: false,
      date: new Date(),
      subject: randomSupplier.prefix + randomSupplier.order++,
      sender: randomSupplier.name,
    })
  }

  function select(id: number) {
    if (emails.value.length > id) {
      selected.value = id
      selectedEmail.value.read = true
      console.log('selected', selectedEmail.value)
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
