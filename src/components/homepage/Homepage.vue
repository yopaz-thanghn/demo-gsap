<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollSmoother, ScrollTrigger, SplitText, Flip, CSSPlugin } from 'gsap/all'

import Advantages from './Advantages.vue'
import Sectors from './Sectors.vue'
import IntroductionVideo from './IntroductionVideo.vue'
import Introduction from './Introduction.vue'
import { useGsapStore } from '@/stores/useGsapStore'
import LogoAnimation from './LogoAnimation.vue'
import Projects from './Projects.vue'
import ClientFeedback from './ClientFeedback.vue'

gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother, Flip, CSSPlugin)
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
      <Introduction />
      <IntroductionVideo />
      <LogoAnimation />
      <Advantages />
      <Sectors />
      <Projects />
      <ClientFeedback />
      <!-- <div class="h-screen w-full"></div> -->
    </div>
  </div>
</template>
