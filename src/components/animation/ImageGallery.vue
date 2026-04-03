<script setup lang="ts">
import { imageGallery } from '@/constants/imageGallery'
import '@/styles/image-gallery.css'
// import { useCalculateDragDistance } from '@/utils/calculateDragDistance'
// import leftArrowIcon from '@/assets/icons/back-arrow.png'
// import rightArrowIcon from '@/assets/icons/right-arrow.png'
import { gsap } from 'gsap'
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/effect-coverflow'
// import { EffectCoverflow } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { Flip } from 'gsap/all'

// const sliderRef = ref<HTMLDivElement | null>(null)
let tween: gsap.core.Tween | null = null

const numberOfImgLoaded = ref<number>(0)
// const currentYDeg = ref<number>(0)
// const endYDeg = ref<number>(0)
const activeSlide = ref<number>(0)
const swiperRef = ref<SwiperType | null>(null)

// const { xDistance, init, isMouseDown } = useCalculateDragDistance()

watch(numberOfImgLoaded, (value) => {
  if (value < imageGallery.length) return
})

// watch(xDistance, (value) => {
//   const slider = sliderRef.value
//   if (!slider) return
//   const rotateY = ((value * 180) / window.innerWidth) * -1
//   currentYDeg.value = rotateY
//   const newYValue = endYDeg.value + rotateY
//   slider.style.transform = `perspective(1000px) rotateX(-10deg) rotateY(${newYValue}deg)`
// })

// watch(isMouseDown, (value) => {
//   const slider = sliderRef.value
//   if (!slider || value) return
//   endYDeg.value = currentYDeg.value + endYDeg.value
//   currentYDeg.value = 0
//   slider.style.transform = `perspective(1000px) rotateX(-10deg) rotateY(${endYDeg.value}deg)`
// })

onMounted(() => {
  //   if (!sliderRef.value) return
  //   init(sliderRef.value)
  //   const imgList = gsap.utils.toArray<HTMLImageElement>('.item img')
  //   imgList.forEach((item) => {
  //     item.addEventListener('load', () => {
  //       numberOfImgLoaded.value = numberOfImgLoaded.value + 1
  //     })
  //   })
})

watch(activeSlide, (value) => {
  //   const img = document.querySelector(`[data-index="${value}"]`) as HTMLImageElement
  //   const mainSlide = document.querySelector('.main-slide') as HTMLImageElement
  //   const state = Flip.getState(img)
  //   mainSlide.appendChild(img)
  //   Flip.from(state, {
  //     duration: 2,
  //     ease: 'power1.inOut',
  //     absolute: true,
  //     scale: true,
  //   })
})

onBeforeUnmount(() => {
  tween?.kill()
  tween = null
})

const onInit = (swiper: SwiperType) => {
  swiperRef.value = swiper
}

const onSlideChange = (swiper: SwiperType) => {
  console.log(swiper.activeIndex)
  activeSlide.value = swiper.activeIndex
  //   swiperRef.value?.removeSlide(swiper.activeIndex)
}
</script>

<template>
  <div class="banner">
    <!-- <div ref="sliderRef" class="slider" :style="`--quantity: ${imageGallery.length}`">
      <div
        v-for="(item, index) in imageGallery"
        :key="item.id"
        :class="twJoin('item')"
        :style="`--position: ${index + 1}`"
      >
        <img :src="item.img" :alt="item.title" />
      </div>
    </div> -->
    <swiper
      :slides-per-view="5"
      space-between="30"
      :centeredSlides="false"
      :grabCursor="true"
      @swiper="onInit"
      @slide-change="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in imageGallery" :key="item.id" :lazy="true">
        <img
          :src="item.img"
          :alt="item.title"
          class="w-66 h-37.5 object-cover"
          :data-index="index"
        />
      </swiper-slide>
    </swiper>
    <div class="absolute size-full top-0 left-0 main-slide">
      <!-- <img :src="imageGallery[0]?.img" alt="main-img" class="size-full object-cover main-bg" /> -->
    </div>
  </div>
</template>

<style scoped>
.main-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
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

/* .banner .slider .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  -webkit-user-drag: none;
} */
</style>
