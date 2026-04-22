<script setup lang="ts">
import { useCalculateDragDistance } from '@/utils/calculateDragDistance'
import { onMounted, ref, watch } from 'vue'
import 'swiper/css/effect-coverflow'
import { imageGallery } from '@/constants/imageGallery'
import { twJoin } from 'tailwind-merge'
import { gsap } from 'gsap'
import swipeIcon from '@/assets/icons/rotate.png'
import { ScrollTrigger, SplitText } from 'gsap/all'

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

const swipeIconAnimation = () => {
  const swipeIcon = document.querySelector<HTMLImageElement>('.swipe-icon')
  if (!swipeIcon) return
  gsap.to(swipeIcon, {
    duration: 1,
    repeat: -1,
    ease: 'power2.inOut',
    rotateZ: -20,
  })
}

const animateDescription = () => {
  const text = SplitText.create('.store-description', {
    type: 'chars, words',
  })
  const tl = gsap.timeline()

  gsap.set(text.words, { opacity: 0, y: 50 })
  gsap.set('.description-left', { opacity: 0, xPercent: -100 })
  gsap.set('.description-right', { opacity: 0, xPercent: 100 })

  ScrollTrigger.create({
    trigger: text.words,
    start: 'top 80%',
    scrub: 1,
    toggleActions: 'restart pause reverse pause',
    onEnter: () => {
      tl.to(text.words, {
        opacity: 1,
        y: 0,
        stagger: 0.01,
      })
        .to('.description-left', {
          duration: 0.5,
          opacity: 1,
          xPercent: 0,
        })
        .to('.description-right', {
          duration: 0.5,
          opacity: 1,
          xPercent: 0,
        })
    },
  })
}

onMounted(() => {
  if (!sliderRef.value) return
  init(sliderRef.value)
  const imgList = gsap.utils.toArray<HTMLImageElement>('.item img')
  imgList.forEach((item) => {
    item.addEventListener('load', () => {
      numberOfImgLoaded.value = numberOfImgLoaded.value + 1
    })
  })
  swipeIconAnimation()
  animateDescription()
})
</script>

<template>
  <div class="gallery-container h-[calc(100vh-64px)] pt-16 bg-black">
    <div
      ref="sliderRef"
      class="slider mt-10 select-none"
      :style="`--quantity: ${imageGallery.length}`"
    >
      <div
        v-for="(item, index) in imageGallery"
        :key="item.id"
        :class="twJoin('item')"
        :style="`--position: ${index + 1}`"
      >
        <img :src="item.img" :alt="item.title" />
      </div>
    </div>
    <div
      class="relative -top-20 flex items-center justify-center select-none bg-white w-fit m-auto px-3"
    >
      <span class="text-lg text-blue-400 mr-5">Swipe Image</span>
      <img :src="swipeIcon" alt="swipe icon" class="size-10 swipe-icon" />
    </div>
    <div class="select-none flex flex-col justify-center w-full mt-5 px-20">
      <h1 class="font-bold text-3xl text-white">Power you can feel - Luxury you deserve</h1>
      <p class="font-normal text-base mt-5 text-white/70 store-description">
        Welcome to a world where performance meets perfection. Our supercar showroom is more than
        just a store—it’s a destination for those who crave speed, luxury, and cutting-edge
        engineering. From sleek, aerodynamic designs to roaring engines that command attention,
        every vehicle in our collection is a masterpiece crafted for true enthusiasts.
      </p>
      <div class="flex items-start justify-between mt-10 gap-x-40 text-white/70">
        <p class="flex-1 text-justify description-left">
          We offer an exclusive lineup of the world’s most prestigious supercars, featuring iconic
          brands known for innovation and excellence. Whether you're drawn to the raw power of
          track-focused machines or the refined elegance of high-performance grand tourers, our
          curated selection delivers an unforgettable experience.
        </p>
        <p class="flex-1 text-justify description-right">
          Step inside and immerse yourself in a space designed to reflect the spirit of these
          extraordinary vehicles. Our expert team is here to guide you through every detail,
          ensuring a personalized journey from admiration to ownership.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-container {
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.gallery-container .slider {
  position: relative;
  z-index: 10;
  width: 240px;
  height: 320px;
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

.gallery-container .slider .item {
  position: absolute;
  inset: 0;
  transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(-50vw);
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  user-select: none;
}

.gallery-container .slider .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  -webkit-user-drag: none;
  -webkit-box-reflect: below 10px linear-gradient(transparent 60%, rgba(255, 255, 255, 0.8));
}
</style>
