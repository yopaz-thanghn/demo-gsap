<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollSmoother, ScrollTrigger, SplitText } from 'gsap/all'

import Advantages from './Advantages.vue'
import Sectors from './Sectors.vue'
import IntroductionVideo from './IntroductionVideo.vue'
import Introduction from './Introduction.vue'
import { useGsapStore } from '@/stores/useGsapStore'
import Projects from './Projects.vue'

gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother)

const { setSmoother } = useGsapStore()

onMounted(() => {
  const smoother = ScrollSmoother.create({
    wrapper: '#homepage',
    content: '#homepage-content',
    smooth: 1,
    effects: true,
    ignoreMobileResize: true,
    normalizeScroll: true,
  })
  setSmoother(smoother)
})
</script>

<template>
  <div id="homepage" class="bg-[#FAFAFA] w-screen mt-20">
    <div id="homepage-content">
      <!-- <Introduction />
      <IntroductionVideo />
      <Advantages /> -->
      <!-- <Sectors /> -->
      <Projects />
    </div>
  </div>
</template>
