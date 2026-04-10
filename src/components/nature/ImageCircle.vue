<script setup lang="ts">
import { imgsCircle } from '@/constants/imge-circle'
import { Draggable, MotionPathPlugin, InertiaPlugin } from 'gsap/all'
import { gsap } from 'gsap'
import { onMounted } from 'vue'

gsap.registerPlugin(MotionPathPlugin, Draggable, InertiaPlugin)

const selectImg = () => {
  const indicator = document.querySelector<HTMLDivElement>('.indicator')
  const bgImage = document.querySelector<HTMLImageElement>('.circle-bg-img')
  if (!indicator || !bgImage) return
  const {
    left: leftOfIndicator,
    right: rightOfIndicator,
    top: topOfIndicator,
  } = indicator.getBoundingClientRect()
  const centerOfIndicator = (leftOfIndicator + rightOfIndicator) / 2
  const images = gsap.utils.toArray<HTMLImageElement>('.image img')
  images.forEach((img) => {
    const { left, right, top } = img.getBoundingClientRect()
    if (left < centerOfIndicator && right > centerOfIndicator && topOfIndicator > top) {
      bgImage.src = img.src
      gsap.from(bgImage, {
        opacity: 0.5,
        duration: 0.75,
        ease: 'power1.inOut',
      })
    }
  })
}

onMounted(() => {
  const images = gsap.utils.toArray('.image')
  const container = document.querySelector('.container')
  gsap.set(images, {
    motionPath: {
      path: '#circle',
      align: '#circle',
      alignOrigin: [0.5, 0.5],
      end: (i) => i / images.length,
      autoRotate: true,
    },
  })
  Draggable.create(container, {
    type: 'rotation',
    inertia: true,
    onThrowComplete: () => {
      selectImg()
    },
  })

  const rotateTo = gsap.quickTo(container, 'rotation', {
    duration: 0.5,
    ease: 'power2.out',
  })

  document.addEventListener('wheel', (event) => {
    const sensitivity = 2
    const rotationDistance = Number(gsap.getProperty(container, 'rotation'))
    rotateTo(rotationDistance + event.deltaY * sensitivity)
  })
})
</script>

<template>
  <section class="h-screen pt-16 w-full flex items-center justify-center overflow-hidden relative">
    <div class="relative z-10">
      <div class="container relative">
        <svg viewBox="0 0 400 400">
          <path
            stroke-width="1"
            stroke="black"
            id="circle"
            fill="none"
            d="M396,200 C396,308.24781 308.24781,396 200,396 91.75219,396 4,308.24781 4,200 4,91.75219 91.75219,4 200,4 308.24781,4 396,91.75219 396,200 z"
          ></path>
        </svg>
        <div v-for="item in imgsCircle" :key="item.id" class="image">
          <img :src="item.src" alt="img" />
        </div>
      </div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 size-16 rounded-full"
      >
        <div class="bg-yellow-400 indicator absolute -top-[78%] size-full"></div>
      </div>
    </div>
    <div class="absolute z-0 top-0 size-full">
      <img
        class="circle-bg-img size-full object-cover brightness-75"
        :src="imgsCircle[0]?.src"
        alt="bg-img"
      />
    </div>
  </section>
</template>

<style scoped>
.container {
  width: 500px;
  height: 500px;
}

.image {
  height: 120px;
  width: 200px;
  overflow: hidden;
  transform-origin: bottom right;
}

.image img {
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

svg {
  opacity: 0;
}

.indicator {
  clip-path: polygon(50% 28%, 18% 100%, 80% 100%);
}
</style>
