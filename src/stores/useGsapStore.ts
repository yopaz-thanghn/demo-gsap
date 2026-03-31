import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ScrollSmoother } from 'gsap/ScrollSmoother'

export const useGsapStore = defineStore('gsap', () => {
  const smoother = ref<ScrollSmoother>()

  const setSmoother = (value: ScrollSmoother) => {
    smoother.value = value
  }

  return { smoother, setSmoother }
})
