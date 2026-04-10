<script setup lang="ts">
import AwesomeBackground from '@/components/nature/AwesomeBackground.vue'
import ImageCircle from '@/components/nature/ImageCircle.vue'
import IntroductionNature from '@/components/nature/IntroductionNature.vue'
import LuckyWheel from '@/components/nature/LuckyWheel.vue'
import TextAnimation from '@/components/nature/TextAnimation.vue'

import { gsap } from 'gsap'
import { ScrollTrigger, SplitText, Flip, ScrollSmoother } from 'gsap/all'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger, SplitText, Flip, ScrollSmoother)

onMounted(() => {
  ScrollSmoother.create({
    wrapper: '#homepage',
    content: '#homepage-content',
    smooth: 1,
    effects: true,
    ignoreMobileResize: true,
    normalizeScroll: true,
  })
})
</script>

<template>
  <div id="homepage">
    <div id="homepage-content">
      <!-- <IntroductionNature />
      <AwesomeBackground /> -->
      <!-- <TextAnimation /> -->
      <!-- <ImageCircle /> -->
      <LuckyWheel />
    </div>
  </div>
</template>
