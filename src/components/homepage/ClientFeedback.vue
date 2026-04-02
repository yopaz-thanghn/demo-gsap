<script setup lang="ts">
import { clientFeedbacks } from '@/constants/clientFeedbacks'
import { gsap } from 'gsap'
import { Flip } from 'gsap/all'
import { onMounted, useTemplateRef } from 'vue'

const wrapperContainerRef = useTemplateRef<HTMLElement>('client-feedback-container')
const contentRef = useTemplateRef<HTMLDivElement>('content-list')

onMounted(() => {
  gsap.registerPlugin(Flip)
  const container = wrapperContainerRef.value
  const content = contentRef.value
  if (!container || !content) return
  const clientCards = gsap.utils.toArray<HTMLElement>('.client-card')
  const cardContents = gsap.utils.toArray<HTMLElement>('.client-card-content')

  const rect = container.getBoundingClientRect()
  const containerWidth = rect.width
  const containerHeight = rect.height

  gsap.set(clientCards, {
    backgroundColor: 'rgba(255,255,255,0.3)',
  })
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'center 60%',
      // end: 'center 60%',
      scrub: 1,
      pin: true,
    },
  })
  tl.to(clientCards[0] as HTMLElement, {
    backgroundColor: '#fff',
    duration: 0.3,
    zIndex: 10,
  })
    .to(cardContents[0] as HTMLElement, {
      display: 'block',
    })
    .fromTo(
      clientCards[1] as HTMLElement,
      {
        x: -containerWidth / 2,
        ease: 'power1.inOut',
        opacity: 0,
        duration: 0.8,
      },
      {
        backgroundColor: '#fff',
        x: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.8,
        zIndex: 10,
      },
    )
    .to(cardContents[1] as HTMLElement, {
      display: 'block',
    })
    .fromTo(
      clientCards[2] as HTMLElement,
      {
        y: -containerHeight / 3,
        ease: 'power1.inOut',
        opacity: 0,
        duration: 0.8,
      },
      {
        backgroundColor: '#fff',
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.8,
        zIndex: 10,
      },
    )
    .to(cardContents[2] as HTMLElement, {
      display: 'block',
    })
    .fromTo(
      clientCards[3] as HTMLElement,
      {
        y: -containerHeight / 3,
        x: -containerWidth / 2,
        ease: 'power1.inOut',
        opacity: 0,
        duration: 1,
      },
      {
        backgroundColor: '#fff',
        y: 0,
        x: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 1,
        zIndex: 10,
      },
    )
    .to(cardContents[3] as HTMLElement, {
      display: 'block',
    })
    .fromTo(
      clientCards[4] as HTMLElement,
      {
        y: -containerHeight / 2,
        ease: 'power1.inOut',
        opacity: 0,
        duration: 1,
      },
      {
        backgroundColor: '#fff',
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 1,
        zIndex: 10,
      },
    )
    .to(cardContents[4] as HTMLElement, {
      display: 'block',
    })
    .fromTo(
      clientCards[5] as HTMLElement,
      {
        y: -containerHeight / 2,
        x: -containerWidth / 2,
        ease: 'power1.inOut',
        opacity: 0,
        duration: 1.4,
      },
      {
        backgroundColor: '#fff',
        y: 0,
        x: 0,
        opacity: 1,
        ease: 'power1.inOut',
        zIndex: 10,
        duration: 1.4,
      },
    )
    .to(cardContents[5] as HTMLElement, {
      display: 'block',
    })
})
</script>

<template>
  <div ref="client-feedback-container" class="w-full px-10 mt-10">
    <h1 class="text-center font-bold text-2xl">Client Feedback</h1>
    <div class="flex justify-between gap-x-10 h-screen mt-10">
      <div class="grid grid-cols-2 gap-x-20 gap-y-5 w-full" ref="content-list">
        <div
          v-for="item in clientFeedbacks"
          :key="item.id"
          class="flex gap-x-5 flex-1 bg-white/30 rounded-lg client-card shadow-xl"
        >
          <img :src="item.avatar" :alt="item.name" class="w-32 h-40 rounded-lg" />
          <div class="flex flex-col">
            <h3 class="font-semibold text-xl">{{ item.name }}</h3>
            <h4 class="italic text-base">{{ item.position }} - {{ item.company }}</h4>
            <p class="text-sm hidden client-card-content">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
