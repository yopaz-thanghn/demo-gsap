<script lang="ts" setup>
import { sectorList } from '@/constants/sectors'
import { gsap } from 'gsap'
import { ScrollTrigger, Observer } from 'gsap/all'
import { onMounted } from 'vue'

gsap.registerPlugin(Observer)

onMounted(() => {
  gsap.utils.toArray('.sector').forEach((sector) => {
    ScrollTrigger.create({
      trigger: sector,
      pin: true,
      pinSpacing: false,
      start: 'top top',
      anticipatePin: 1,
      scrub: 0.05,
    })
  })

  // Observer.create({
  //   target: 'window',
  //   type: 'wheel,touch,scroll,pointer',
  //   onPress: () => {
  //     console.log('on press');
  //   },
  //   onChange: (self) => {
  //     console.log(self.deltaY, self.velocityY);
  //   }
  // })
})
</script>

<template>
  <section class="sector-container w-full">
    <div class="sector-content">
      <h1 class="font-bold text-2xl text-center mb-10">LĨNH VỰC PHÁT TRIỂN</h1>
      <div
        v-for="item in sectorList"
        :key="item.id"
        class="sector h-screen w-full text-white flex flex-col items-center justify-center relative"
      >
        <img
          :src="item.bg"
          :alt="'bg-' + item.id"
          class="block absolute top-0 size-full z-0 rounded-lg text-center"
        />
        <div
          class="relative translate-0 z-0 flex flex-col justify-center items-center text-center py-10 px-20 gap-y-10"
        >
          <img :src="item.img" :alt="item.tech" class="size-12 object-contain" />
          <h4 class="font-extrabold">{{ item.title }}</h4>
          <p>{{ item.tech }}</p>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
