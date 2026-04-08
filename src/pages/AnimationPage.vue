<script setup lang="ts">
import ImageGallery from '@/components/animation/ImageGallery.vue'
import ImageSlider from '@/components/animation/ImageSlider.vue'
import { gsap } from 'gsap'
import {
  InertiaPlugin,
  Draggable,
  ScrollTrigger,
  Observer,
  Flip,
  SplitText,
  ScrollSmoother,
} from 'gsap/all'
import 'swiper/css'
import NewestCar from '@/components/animation/NewestCar.vue'
import { onMounted } from 'vue'
import CarTimeline from '@/components/animation/CarTimeline.vue'

gsap.registerPlugin(
  InertiaPlugin,
  Draggable,
  ScrollTrigger,
  Observer,
  Flip,
  SplitText,
  ScrollSmoother,
)

onMounted(() => {
  ScrollSmoother.create({
    wrapper: '#animation-container',
    content: '#animation-content',
    smooth: 1,
    effects: true,
    ignoreMobileResize: true,
    normalizeScroll: true,
  })
})
</script>

<template>
  <div id="animation-container">
    <div id="animation-content">
      <ImageSlider />
      <ImageGallery />
      <NewestCar />
      <CarTimeline />
    </div>
  </div>
</template>
