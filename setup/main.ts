import { defineAppSetup } from '@slidev/types'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()


export default defineAppSetup(({ app, router }) => {
  app.use(pinia)
})