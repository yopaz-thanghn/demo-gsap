<script setup lang="ts">
import { onMounted } from 'vue'
// import { storeToRefs } from 'pinia'
import { jobImages } from '../../constants/jobImages'
import { SplitText } from 'gsap/all'
import { gsap } from 'gsap'
// import { useGsapStore } from '@/stores/useGsapStore'

// const { smoother } = storeToRefs(useGsapStore())

onMounted(() => {
  const split = SplitText.create('.section1-title', {
    type: 'chars, words',
  })
  const timeline = gsap.timeline()
  timeline
    .from(split.chars, {
      yPercent: 'random([-50, 50])',
      autoAlpha: 0,
      stagger: {
        amount: 0.1,
        each: 0.1,
        from: 'center',
      },
      delay: 0.5,
    })
    .to('.job', {
      stagger: {
        amount: 0.5,
        from: 'start',
        ease: 'power1.inOut',
      },
      opacity: 1,
      duration: 2,
    })
})
</script>

<template>
  <section
    id="section1"
    class="font-bold flex flex-col justify-evenly items-center gap-y-10 h-[calc(100vh-64px)] p-20"
  >
    <p class="section1-title text-2xl">
      Tập trung vào hoạt động cốt lõi với “Nhân lực CNTT toàn cầu”
    </p>

    <!-- <div class="image_cont relative overflow-hidden aspect-square" data-speed="1">
      <img
        data-speed="auto"
        class="h-[150%]"
        src="https://images.unsplash.com/photo-1556856425-366d6618905d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        alt=""
      />
    </div> -->

    <div class="flex items-center w-full gap-x-20">
      <img
        v-for="(item, index) in jobImages"
        :key="index"
        :src="item"
        :alt="`job-${index}`"
        class="job w-full h-auto object-contain opacity-0"
      />
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap');
@font-face {
  font-family: 'wild_worldbold';
  src:
    url('https://assets.codepen.io/756881/wild_world-webfont.woff2') format('woff2'),
    url('https://assets.codepen.io/756881/wild_world-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.title {
  font-family: 'wild_worldbold';
  font-size: 32px;
  color: white;
  margin: 0;
  text-align: center;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 1.5px;
  position: absolute;
  z-index: 999;
}

.title:first-child {
  color: black;
  z-index: 1000;
}
</style>
