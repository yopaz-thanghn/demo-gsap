<script setup lang="ts">
import CarGallery from '@/components/car/CarGallery.vue'
import ImageSlider from '@/components/car/ImageSlider.vue'
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
import NewestCar from '@/components/car/NewestCar.vue'
import { onMounted } from 'vue'
import CarTimeline from '@/components/car/CarTimeline.vue'

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
      <CarGallery />
      <NewestCar />
      <CarTimeline />
    </div>
  </div>
</template>
