<script setup lang="ts">
import AwesomeBackground from '@/components/nature/AwesomeBackground.vue'
import ImageCircle from '@/components/nature/ImageCircle.vue'
import IntroductionNature from '@/components/nature/IntroductionNature.vue'
import LuckyWheel from '@/components/nature/LuckyWheel.vue'
import { VueLenis } from 'lenis/vue'

import { gsap } from 'gsap'
import {
  ScrollTrigger,
  SplitText,
  Flip,
  MotionPathPlugin,
  InertiaPlugin,
  Draggable,
} from 'gsap/all'
import { ref, watchEffect } from 'vue'

gsap.registerPlugin(Draggable, ScrollTrigger, SplitText, Flip, MotionPathPlugin, InertiaPlugin)

const lenisRef = ref()

watchEffect((onInvalidate) => {
  if (!lenisRef.value?.lenis) return

  //  if using GSAP ScrollTrigger, update ScrollTrigger on scroll
  lenisRef.value.lenis.on('scroll', ScrollTrigger.update)

  // add the Lenis requestAnimationFrame (raf) method to GSAP's ticker
  // this ensures Lenis's smooth scroll animation updates on each GSAP tick
  function update(time: number) {
    lenisRef.value.lenis.raf(time * 1000)
  }
  gsap.ticker.add(update)

  // disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0)

  // clean up GSAP's ticker from the previous execution of watchEffect, or when the effect is stopped
  onInvalidate(() => {
    gsap.ticker.remove(update)
  })
})
</script>

<template>
  <VueLenis root ref="lenisRef" :options="{ autoRaf: false }" />
  <!-- <TextAnimation /> -->
  <IntroductionNature />
  <AwesomeBackground />
  <ImageCircle />
  <LuckyWheel />
</template>
