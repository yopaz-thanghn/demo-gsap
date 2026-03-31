<script setup lang="ts">
import { gsap } from 'gsap'
import { advantagesSection } from '@/constants/advantages'
import { onMounted, useTemplateRef } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const advantageContainerRef = useTemplateRef<HTMLDivElement>('advantage-container')

onMounted(() => {
  const container = advantageContainerRef.value
  if (!container) return

  const sections = gsap.utils.toArray<HTMLElement>(container.querySelectorAll('.advantage-item'))
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      pinSpacing: true,
      anticipatePin: 1,
      end: () => `+=${container.offsetWidth}`,
    },
  })
})
</script>

<template>
  <section
    ref="advantage-container"
    class="advantage-container pt-20 h-screen overflow-hidden min-h-screen"
  >
    <h2 class="font-bold text-2xl text-center">LÝ DO KHÁCH HÀNG CHỌN CHÚNG TÔI</h2>
    <div class="flex items-center border-t-2 border-t-[#d1d1d1] mt-10 overflow-x-hidden">
      <div
        v-for="item in advantagesSection"
        :key="item.id"
        class="advantage-item shrink-0 w-full h-[calc(100vh-64px)] p-10 flex items-center flex-col gap-y-10 px-20"
      >
        <h3 class="font-semibold text-xl">{{ item.title }}</h3>
        <p class="mt-4">{{ item.content }}</p>
        <img :src="item.thumbnail" alt="image-1" class="text-center w-auto mt-20" />
      </div>
    </div>
  </section>
</template>
