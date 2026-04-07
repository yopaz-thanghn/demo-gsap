<script setup lang="ts">
import ImageGallery from '@/components/animation/ImageGallery.vue'
import ImageSlider from '@/components/animation/ImageSlider.vue'
import { gsap } from 'gsap'
import { InertiaPlugin, Draggable, ScrollTrigger, Observer, Flip, SplitText } from 'gsap/all'
import 'swiper/css'

gsap.registerPlugin(InertiaPlugin, Draggable, ScrollTrigger, Observer, Flip, SplitText)
</script>

<template>
  <main>
    <ImageSlider />
    <ImageGallery />
  </main>
</template>
