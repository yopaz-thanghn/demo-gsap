<script setup lang="ts">
import { projectList1, projectList2, projectList3 } from '@/constants/projects'
import { gsap } from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  gsap.utils.toArray('.project-list-item').forEach((item) => {
    const el = item as HTMLElement
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        scrub: 0.5,
      },
      scale: 1.3,
    })
  })
})
</script>

<template>
  <section class="flex items-center justify-center h-screen px-10 bg-blue-200">
    <div class="flex-1 flex flex-col gap-y-10 project-list-1">
      <div v-for="item in projectList1" :key="item.id" class="flex items-center justify-center">
        <img
          :src="item.img"
          alt="list 1"
          class="h-20 w-36 object-cover project-list-item scale-[0.5]"
        />
      </div>
    </div>
    <div class="flex-1 flex flex-col gap-y-10 project-list-2">
      <div v-for="item in projectList2" :key="item.id" class="flex items-center justify-center">
        <img
          :src="item.img"
          alt="list 2"
          class="h-20 w-36 object-cover project-list-item scale-[0.5]"
        />
      </div>
    </div>
    <div class="flex-1 flex flex-col gap-y-10 project-list-3">
      <div v-for="item in projectList3" :key="item.id" class="flex items-center justify-center">
        <img
          :src="item.img"
          alt="list 2"
          class="h-20 w-36 object-cover project-list-item scale-[0.5]"
        />
      </div>
    </div>
  </section>
</template>
