<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { onMounted } from 'vue'

const zoomText = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.wrapper-bg',
      scrub: 1,
      start: 'center center',
      invalidateOnRefresh: true,
      pin: true,
      markers: true,
    },
  })

  const contentTitle = SplitText.create('.content-title', {
    type: 'chars, words',
  })

  const contentDescription = SplitText.create('.content-description', {
    type: 'chars, words',
  })

  tl.to('.main-word', {
    scale: 100,
    duration: 2,
    ease: 'power1.inOut',
  })
    .to('.word-wrapper', {
      backgroundClip: 'content-box',
      ease: 'power1.inOut',
      duration: 1,
    })
    .from(contentTitle.chars, {
      autoAlpha: 0,
      stagger: 0.1,
      yPercent: -100,
    })
    .from(contentDescription.words, {
      autoAlpha: 0,
      stagger: 0.1,
      yPercent: 'random(-100, 100)',
    })
}

onMounted(() => {
  zoomText()
})
</script>

<template>
  <section class="h-screen w-full relative wrapper-bg">
    <div
      :class="
        'absolute inset-0 h-full w-full z-10 bg-clip-text flex items-center justify-center word-wrapper' +
        ` bg-[url(/mountain.jpg)]`
      "
    >
      <p class="main-word">N</p>
      <div class="absolute top-40 w-full px-20">
        <h3 class="text-2xl text-white content-title">The Beauty and Power of Mountains</h3>
        <p class="text-base text-white/60 w-1/2 text-justify mt-10 content-description">
          Mountains are majestic natural formations that rise high above the surrounding land, often
          characterized by steep slopes, rugged terrain, and breathtaking views. They are formed
          over millions of years through geological processes such as tectonic plate movements,
          volcanic activity, or erosion.
        </p>
      </div>
    </div>
    <div class="flex items-center justify-center h-full absolute inset-0"></div>
  </section>
  <!-- <div class="h-screen w-full"></div> -->
</template>

<style scoped>
.main-word {
  font-size: 300px;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 0px #fff;
  user-select: none;
}
</style>
