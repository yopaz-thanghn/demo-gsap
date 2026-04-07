<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import { Flip } from 'gsap/all'
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'
import { imageGallery } from '@/constants/imageGallery'
import leftArrowIcon from '@/assets/icons/left-arrow.png'
import rightArrowIcon from '@/assets/icons/right-arrow.png'

const swiperRef = ref<SwiperType | null>(null)
const activeSlideIndex = ref<number>(0)

const mainBackgroundRef = useTemplateRef<HTMLDivElement>('main-background')

const onInit = (swiper: SwiperType) => {
  swiperRef.value = swiper
}

const onSlideChange = (swiper: SwiperType) => {
  activeSlideIndex.value = swiper.realIndex
}

const handleBackslide = async () => {
  const swiper = swiperRef.value
  const mainBg = mainBackgroundRef.value
  if (!swiper || !mainBg) return
  swiper.slidePrev()
  const previousIndex = activeSlideIndex.value

  const imgChild = mainBg.querySelector<HTMLImageElement>(`[data-index="${previousIndex}"]`)
  if (!imgChild) return
  const currentSlide = document.querySelector<HTMLDivElement>(
    `[data-swiper-slide-index="${previousIndex}"]`,
  )
  if (!currentSlide) return
  Array.from(currentSlide.children).forEach((child) => {
    currentSlide.removeChild(child)
  })
  const imgState = Flip.getState(imgChild)
  currentSlide.appendChild(imgChild)
  await Flip.from(imgState, {
    duration: 1,
    ease: 'power1.inOut',
    absolute: true,
    scale: true,
  })
  setBgImageStateList('prev', previousIndex, imgChild)
}

const handleNextSlide = async () => {
  const swiper = swiperRef.value
  const mainBackground = mainBackgroundRef.value
  if (!swiper || !mainBackground) return
  const activeIndex = activeSlideIndex.value
  const img = document.querySelector(`[data-index="${activeIndex}"]`) as HTMLImageElement

  const state = Flip.getState(img)
  mainBackground.appendChild(img)
  await Flip.from(state, {
    duration: 1,
    ease: 'power1.inOut',
    absolute: true,
    scale: true,
  })
  const currentSlide = document.querySelector<HTMLDivElement>(
    `[data-swiper-slide-index="${activeIndex}"]`,
  )
  const copyImg = img.cloneNode(true)
  setBgImageStateList('next', activeIndex, img)
  swiper.slideNext()
  swiper.on('slideNextTransitionEnd', () => {
    currentSlide?.appendChild(copyImg)
    swiper.off('slideNextTransitionEnd')
  })
}

const setBgImageStateList = (
  actionType: 'next' | 'prev',
  activeIndex: number,
  imgEl: HTMLImageElement,
) => {
  const mainBg = mainBackgroundRef.value
  if (!mainBg) return
  if (actionType === 'next') {
    const foundImgs = mainBg.querySelectorAll<HTMLImageElement>(`[data-index="${activeIndex}"]`)
    if (foundImgs.length === 0) return
    foundImgs.forEach((img) => {
      mainBg.removeChild(img)
    })
    mainBg.appendChild(imgEl)
  } else {
    const copyImg = imgEl.cloneNode(true)
    mainBg.prepend(copyImg)
  }
}

onMounted(() => {
  const mainbg = mainBackgroundRef.value
  const slides = document.querySelectorAll('.slider-item')
  if (!slides || !mainbg) return
  slides.forEach((slide) => {
    const imgEl = slide.querySelector('img') as HTMLImageElement
    const copyImg = imgEl.cloneNode(true)
    mainbg.appendChild(copyImg)
  })
})

onBeforeUnmount(() => {
  swiperRef.value?.destroy()
})
</script>

<template>
  <div class="h-screen w-full">
    <div class="flex items-center justify-between gap-x-5 relative z-10">
      <div
        @click="handleBackslide"
        class="bg-white rounded-full min-w-14 size-14 p-4 ml-2 cursor-pointer flex items-center justify-center"
      >
        <img :src="leftArrowIcon" alt="left-arrow-icon" class="size-full block" />
      </div>
      <swiper
        :slides-per-view="5"
        space-between="30"
        :centeredSlides="false"
        :grabCursor="true"
        :loop="true"
        :allow-touch-move="false"
        @swiper="onInit"
        @slide-change="onSlideChange"
        class="h-screen"
      >
        <swiper-slide
          v-for="(item, index) in imageGallery"
          :key="item.id"
          :lazy="true"
          class="slider-item relative"
        >
          <img :src="item.img" :alt="item.title" :data-index="index" />
        </swiper-slide>
      </swiper>

      <div
        @click="handleNextSlide"
        class="bg-white rounded-full min-w-14 size-14 p-4 mr-2 cursor-pointer flex items-center justify-center"
      >
        <img :src="rightArrowIcon" alt="right-arrow-icon" class="size-full block" />
      </div>
    </div>
    <div ref="main-background" class="absolute size-full z-0 top-0 left-0 main-background"></div>
  </div>
</template>

<style scoped>
.main-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.slider-item img {
  width: 240px;
  height: 136px;
  object-fit: cover;
  border-radius: 12px;
}
</style>
