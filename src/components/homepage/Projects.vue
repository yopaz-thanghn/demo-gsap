<script lang="ts" setup>
import { cardList } from '@/constants/cardList'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
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
    paused: true,
  })

  gtl
    .to(cardContainer, { gap: 30, duration: 1, ease: 'power3.out' }, 0)
    .to('.card-1', { x: -30, duration: 1, ease: 'power3.out' }, 0)
    .to('.card-3', { x: 30, duration: 1, ease: 'power3.out' }, 0)
    .to('.card', { borderRadius: '20px', duration: 1, ease: 'power3.out' }, 0)

  gtl.play()
  const flipTl = gsap.timeline({
    paused: true,
  })

  flipTl
    .to(
      '.card',
      {
        rotateY: 180,
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
        y: 30,
        rotationZ: (i) => (i === 0 ? -15 : 15),
        duration: 1,
        ease: 'power3.inOut',
      },
      0,
    )

  flipTl.play()
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
})
</script>

<template>
  <section class="h-screen w-full relative z-50 bg-gray-500">
    <h1>Flip card</h1>
    <div class="size-full flex items-center justify-center" ref="card-container">
      <div class="flex">
        <div v-for="item in cardList" :key="item.id">
          <img :class="`${item.className}`" :src="item.img" :alt="item.title" />
        </div>
      </div>
    </div>
  </section>
</template>
