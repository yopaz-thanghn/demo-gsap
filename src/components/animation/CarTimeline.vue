<script setup lang="ts">
import { carTimeline } from '@/constants/car-timeline'
import { gsap } from 'gsap'
import { Flip, SplitText } from 'gsap/all'
import { twJoin } from 'tailwind-merge'
import { onMounted } from 'vue'

const textAnimation = () => {
  const textDetail1 = SplitText.create('.text-detail-1', {
    type: 'chars, words',
  })
  const textDetail2 = SplitText.create('.text-detail-2', {
    type: 'chars, words',
  })
  const textDetail3 = SplitText.create('.text-detail-3', {
    type: 'chars, words',
  })
  const textDetail4 = SplitText.create('.text-detail-4', {
    type: 'chars, words',
  })

  gsap.from(textDetail1.words, {
    scrollTrigger: {
      trigger: '.car-1 img',
      start: 'top 60%',
      end: 'bottom 60%',
      scrub: 1,
      invalidateOnRefresh: true,
    },
    opacity: 0,
    duration: 0.5,
  })
  gsap.from(textDetail2.words, {
    scrollTrigger: {
      trigger: '.car-2 img',
      start: 'top 60%',
      end: 'bottom 60%',
      scrub: 1,
      invalidateOnRefresh: true,
    },
    opacity: 0,
    duration: 0.5,
  })

  gsap.from(textDetail3.words, {
    scrollTrigger: {
      trigger: '.car-3 img',
      start: 'top 60%',
      end: 'bottom 60%',
      scrub: 1,
      invalidateOnRefresh: true,
    },
    opacity: 0,
    duration: 0.5,
  })

  gsap.from(textDetail4.words, {
    scrollTrigger: {
      trigger: '.car-4 img',
      start: 'top 60%',
      end: 'bottom 60%',
      scrub: 1,
      invalidateOnRefresh: true,
    },
    opacity: 0,
    duration: 0.5,
  })
}

const imgsTransitionAnimation = () => {
  gsap.set(['.car-2', '.car-3', '.car-4'], { opacity: 0 })

  const flipConfig = {
    ease: 'none',
    duration: 1,
    absolute: true,
  }

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.car-1 img',
        start: 'center 40%',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    })
    .add(
      Flip.fit('.car-1 img', '.car-2 img', {
        ...flipConfig,
      }) as gsap.core.Tween,
    )
    .set('.car-1', { opacity: 0, immediateRender: false })
    .to('.car-2', { opacity: 1, duration: 0.05 })

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.car-2 img',
        start: 'center 40%',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    })
    .add(
      Flip.fit('.car-2 img', '.car-3 img', {
        ...flipConfig,
      }) as gsap.core.Tween,
    )
    .set('.car-2', { opacity: 0, immediateRender: false })
    .to('.car-3', { opacity: 1, duration: 0.05 })

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.car-3 img',
        start: 'center 40%',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    })
    .add(
      Flip.fit('.car-3 img', '.car-4 img', {
        ...flipConfig,
      }) as gsap.core.Tween,
    )
    .set('.car-3', { opacity: 0, immediateRender: false })
    .to('.car-4', { opacity: 1, duration: 0.05 })
}

onMounted(() => {
  textAnimation()
  imgsTransitionAnimation()
})
</script>

<template>
  <section class="pt-16 px-40 bg-black/80 text-white">
    <div
      v-for="(item, index) in carTimeline"
      :key="item.id"
      class="grid grid-cols-2 w-full h-[80vh]"
    >
      <div :class="twJoin('flex items-center justify-center', item.className)">
        <img
          :src="item.img"
          :alt="item.title"
          :class="
            twJoin(
              'w-75 h-45 object-cover rounded-sm shadow-[0_0_10px_#fff,0_0_20px_#fff] absolute will-change-transform',
              index % 2 === 0 ? 'rotate-3' : '-rotate-3',
            )
          "
        />
      </div>
      <div class="flex justify-center flex-col gap-y-10">
        <h3 class="text-lg font-bold">{{ item.title }}</h3>
        <p class="text-base text-justify">{{ item.description }}</p>
        <p :class="twJoin('text-sm italic', `text-detail-${index + 1}`)">
          This stage is all about ideation and direction. Designers sketch multiple exterior and
          interior concepts, experimenting with shapes, proportions, and brand identity. At the same
          time, engineers define key performance targets such as horsepower, weight, aerodynamics,
          and drivetrain layout. Advanced tools like CAD (Computer-Aided Design) and virtual
          simulations are used to evaluate feasibility. Clay models or digital renderings are often
          created to visualize the final look and feel before moving forward.
        </p>
      </div>
    </div>
  </section>
</template>
