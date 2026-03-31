<script setup lang="ts">
import introBannerPcVideo from '@/assets/videos/output.mp4'
import introBannerMobileVideo from '@/assets/videos/intro_banner_homepage_mobile.mp4'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { onMounted, useTemplateRef } from 'vue'

const videoRef = useTemplateRef<HTMLVideoElement>('videoRef')
const introBtnRef = useTemplateRef<HTMLButtonElement>('introBtnRef')

const translateBtn = () => {
  const introBtn = introBtnRef.value
  if (!introBtn) return
  gsap.to(introBtn, {
    xPercent: 100,
    opacity: 1,
    duration: 2,
    ease: 'power1.in',
    scrollTrigger: {
      trigger: introBtn,
      start: 'top center',
      end: 'top bottom',
      toggleActions: 'restart pause reverse pause',
      scrub: 1,
    },
  })
}

onMounted(() => {
  translateBtn()
  const startValue = 'center 50%'
  const endValue = 'bottom top'

  const setupVideoScroll = () => {
    const video = videoRef.value
    if (!video || !video.duration) return

    video.pause()
    const setTime = gsap.quickTo(video, 'currentTime', {
      duration: 0.05,
      ease: 'none',
    })

    ScrollTrigger.create({
      trigger: '#section2',
      scrub: 0.01,
      start: startValue,
      end: endValue,
      pin: true,
      anticipatePin: 1,
      pinSpacing: true,
      onUpdate: (self) => {
        setTime(self.progress * video.duration)
      },
    })

    ScrollTrigger.refresh()
  }

  const video = videoRef.value
  if (video) {
    if (video.readyState >= 1) {
      setupVideoScroll()
    } else {
      video.addEventListener('loadedmetadata', setupVideoScroll, { once: true })
    }
  }
})
</script>

<template>
  <section id="section2" class="flex flex-col justify-center px-20 h-screen relative">
    <button
      ref="introBtnRef"
      class="cursor-pointer text-2xl w-fit px-5 py-3 text-white border-white border-2 hover:bg-red-400 hover:border-red-400 hover:text-white absolute -translate-y-1/2 opacity-0"
    >
      Introduce about Yopaz
    </button>
    <video ref="videoRef" :muted="true" playsinline preload="auto">
      <source :src="introBannerPcVideo" media="(min-width: 769px)" type="video/mp4" />
      <source :src="introBannerMobileVideo" media="(max-width: 768px)" type="video/mp4" />
    </video>
  </section>
</template>
