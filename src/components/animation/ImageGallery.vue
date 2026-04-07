<script setup lang="ts">
import '@/styles/image-gallery.css'
import { useCalculateDragDistance } from '@/utils/calculateDragDistance'
import { onMounted, ref, watch } from 'vue'
import 'swiper/css/effect-coverflow'
import { imageGallery } from '@/constants/imageGallery'
import { twJoin } from 'tailwind-merge'

const sliderRef = ref<HTMLDivElement | null>(null)

const numberOfImgLoaded = ref<number>(0)
const currentYDeg = ref<number>(0)
const endYDeg = ref<number>(0)

const { xDistance, init, isMouseDown } = useCalculateDragDistance()

watch(numberOfImgLoaded, (value) => {
  if (value < imageGallery.length) return
})

watch(xDistance, (value) => {
  const slider = sliderRef.value
  if (!slider) return
  const rotateY = ((value * 180) / window.innerWidth) * -1
  currentYDeg.value = rotateY
  const newYValue = endYDeg.value + rotateY
  slider.style.transform = `perspective(1000px) rotateX(-10deg) rotateY(${newYValue}deg)`
})

watch(isMouseDown, (value) => {
  const slider = sliderRef.value
  if (!slider || value) return
  endYDeg.value = currentYDeg.value + endYDeg.value
  currentYDeg.value = 0
  slider.style.transform = `perspective(1000px) rotateX(-10deg) rotateY(${endYDeg.value}deg)`
})

onMounted(() => {
  if (!sliderRef.value) return
  init(sliderRef.value)
  const imgList = gsap.utils.toArray<HTMLImageElement>('.item img')
  imgList.forEach((item) => {
    item.addEventListener('load', () => {
      numberOfImgLoaded.value = numberOfImgLoaded.value + 1
    })
  })
})
</script>

<template>
  <div class="banner">
    <div ref="sliderRef" class="slider" :style="`--quantity: ${imageGallery.length}`">
      <div
        v-for="(item, index) in imageGallery"
        :key="item.id"
        :class="twJoin('item')"
        :style="`--position: ${index + 1}`"
      >
        <img :src="item.img" :alt="item.title" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.banner .slider {
  position: absolute;
  z-index: 10;
  width: 200px;
  height: 250px;
  top: 10%;
  left: calc(50% - 100px);
  transform-style: preserve-3d;
  /* animation: autoRun 20s linear infinite; */
  transform: perspective(1000px) rotateX(-10deg);
  transition: all 0.05s linear;
  will-change: transform;
}

@keyframes autoRun {
  from {
    transform: perspective(1000px) rotateX(-10deg) rotateY(0deg);
  }
  to {
    transform: perspective(1000px) rotateX(-10deg) rotateY(360deg);
  }
}

.banner .slider .item {
  position: absolute;
  inset: 0;
  transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(-50vw);
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  user-select: none;
}

.banner .slider .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  -webkit-user-drag: none;
}
</style>
