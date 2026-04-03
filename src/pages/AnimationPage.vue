<script setup lang="ts">
import ImageGallery from '@/components/animation/ImageGallery.vue'
import { gsap } from 'gsap'
import { InertiaPlugin, Draggable, ScrollTrigger, Observer, Flip } from 'gsap/all'
import 'swiper/css'

gsap.registerPlugin(InertiaPlugin, Draggable, ScrollTrigger, Observer, Flip)
</script>

<template>
  <main>
    <ImageGallery />
  </main>
</template>
