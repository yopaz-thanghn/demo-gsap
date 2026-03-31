<script lang="ts" setup>
import { cardList } from '@/constants/cardList'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { twJoin } from 'tailwind-merge'
import { onMounted, useTemplateRef } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const cardContainerRef = useTemplateRef<HTMLDivElement>('card-container')

const initAnimation = () => {
  const mm = gsap.matchMedia()

  mm.add('(min-width: 999px)', () => {})
}

const runAnimation = () => {
  const cardContainer = cardContainerRef.value
  if (!cardContainer) return
  const gtl = gsap.timeline({
    scrollTrigger: {
      trigger: cardContainer,
      start: 'center center',
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  })

  gtl
    .to(cardContainer, { gap: 30, duration: 0.5, ease: 'power3.out' }, 0)
    .to('.card-1', { x: -30, duration: 0.5, ease: 'power3.out' }, 0)
    .to('.card-3', { x: 30, duration: 0.5, ease: 'power3.out' }, 0)
    .to(
      ['.card', '.card-img', '.card-font', '.card-back'],
      { borderRadius: 20, duration: 0.5, ease: 'power3.out' },
      0,
    )
  gtl
    .to(
      '.card',
      {
        rotationY: 180,
        duration: 1,
        ease: 'power3.inOut',
        stagger: 0.1,
        transformOrigin: 'center center',
      },
      0,
    )
    .to(
      ['.card-1', '.card-3'],
      {
        y: 60,
        rotationZ: (i) => (i === 0 ? -15 : 15),
        duration: 1,
        ease: 'power3.inOut',
      },
      0,
    )
}

onMounted(() => {
  let resizeTimer: number
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      initAnimation()
      ScrollTrigger.refresh()
    }, 200)
  })
  runAnimation()
})
</script>

<template>
  <section class="">
    <div
      class="h-screen w-full flex items-center justify-center perspective-distant px-10 bg-gray-300"
      ref="card-container"
    >
      <div
        v-for="(item, index) in cardList"
        :key="item.id"
        :class="`${item.className} card aspect-5/7 transform-3d relative h-34 w-52`"
      >
        <div class="card-front absolute top-0 backface-hidden overflow-hidden size-full">
          <img :src="item.img" :alt="item.title" class="card-img object-cover size-full" />
        </div>
        <div
          :class="
            twJoin(
              'card-back absolute top-0 backface-hidden overflow-hidden size-full flex items-center justify-center text-center rotate-y-180 text-white',
              index === 0 ? 'bg-[#533277]' : index === 1 ? 'bg-[#F6B326]' : 'bg-[#E74C38]',
            )
          "
        >
          <h3 class="text-xl">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>
