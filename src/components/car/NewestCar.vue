<script setup lang="ts">
import car1 from '@/assets/car-page/car-1.jpg'
import car2 from '@/assets/car-page/car-2.jpg'
import car3 from '@/assets/car-page/car-3.jpg'
import { onMounted, useTemplateRef } from 'vue'
import background from '@/assets/car-page/background.jpg'
import { gsap } from 'gsap'
import { carFeatures } from '@/constants/car-features'
import greenCarPart1 from '@/assets/car-page/car-part/green-car-part-1.png'
import greenCarPart2 from '@/assets/car-page/car-part/green-car-part-2.png'
import greenCarPart3 from '@/assets/car-page/car-part/green-car-part-3.png'
import tealCarPart1 from '@/assets/car-page/car-part/image.png'
import tealCarPart2 from '@/assets/car-page/car-part/image (1).png'
import tealCarPart3 from '@/assets/car-page/car-part/image (2).png'
import whiteCar1 from '@/assets/car-page/car-part/white-car-1.png'
import whiteCar2 from '@/assets/car-page/car-part/white-car-2.png'
import whiteCar3 from '@/assets/car-page/car-part/white-car-3.png'
import blackCar1 from '@/assets/car-page/car-part/black-car-1.png'
import blackCar2 from '@/assets/car-page/car-part/black-car-2.png'
import blackCar3 from '@/assets/car-page/car-part/black-car-3.png'

const cardContainerRef = useTemplateRef<HTMLDivElement>('card-container')

const scrollPage = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.img-container',
      start: 'center center',
      pin: true,
      scrub: 1,
      anticipatePin: 1,
    },
  })
  tl.to('.main-img', {
    width: '100%',
    height: 'fit-content',
    ease: 'power1.inOut',
  })
}

const runAnimation = async () => {
  const cardContainer = cardContainerRef.value
  if (!cardContainer) return
  const gtl = gsap.timeline({
    scrollTrigger: {
      trigger: cardContainer,
      start: 'center 60%',
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      pinSpacing: false,
    },
  })

  gtl
    .to(cardContainer, { gap: 30, duration: 0.5, ease: 'power3.out' }, 0)
    .to('.card-1', { x: -30, duration: 0.5, ease: 'power3.out' }, 0)
    .to('.card-3', { x: 30, duration: 0.5, ease: 'power3.out' }, 0)
    .to(
      ['.card', '.card-img', '.card-font', '.card-back'],
      { borderRadius: 20, duration: 0.5, ease: 'power3.out' },
      0,
    )

  await gtl
    .to(
      '.card',
      {
        rotationY: 180,
        duration: 1,
        ease: 'power3.inOut',
        stagger: 0.1,
        transformOrigin: 'center center',
      },
      0,
    )
    .to(['.card-1', '.card-3'], { x: 0, duration: 1, ease: 'power1.inOut' }, 0)
}

onMounted(() => {
  scrollPage()
  runAnimation()
})
</script>

<template>
  <div class="min-h-[calc(100vh-64px)] w-full pt-16 relative overflow-hidden">
    <div class="absolute inset-0 size-full z-[-1]">
      <img :src="background" alt="background" class="size-full" />
    </div>
    <div class="flex items-center justify-evenly">
      <div class="overflow-hidden w-80 h-48" data-speed="1">
        <img :src="car1" alt="car-1" class="h-[150%] object-cover rounded-sm" data-speed="auto" />
      </div>
      <div class="w-80 h-48 overflow-hidden" data-speed="1">
        <img :src="car2" alt="car-2" class="h-[150%] object-cover rounded-sm" data-speed="auto" />
      </div>
    </div>
    <div class="h-screen w-full img-container pt-16">
      <div class="w-full flex justify-center" data-speed="1">
        <img
          :src="car3"
          alt="car3"
          class="w-[50%] h-[50vh] rounded-sm main-img"
          data-speed="auto"
        />
      </div>
      <div class="flex flex-col justify-center items-center px-20 mt-20 text-[#444]">
        <h3 class="text-2xl">Drive your dream - Experience the extraordinary.</h3>
        <p class="text-base mt-3">
          Step inside and immerse yourself in a space designed to reflect the spirit of these
          extraordinary vehicles. Our expert team is here to guide you through every detail,
          ensuring a personalized journey from admiration to ownership.
        </p>
      </div>
    </div>
  </div>

  <div class="w-full h-screen pt-16">
    <div class="flex flex-col h-full gap-y-20" ref="card-container">
      <div class="flex items-center gap-x-20 px-10">
        <div class="shrink flex">
          <div class="relative transform-3d card w-50 h-85 card-1">
            <div class="size-full cart-front absolute top-0 backface-hidden overflow-hidden">
              <img :src="greenCarPart1" alt="green car part 1" class="size-full object-cover" />
            </div>
            <div
              class="size-full cart-back absolute top-0 backface-hidden overflow-hidden rotate-y-180"
            >
              <img :src="whiteCar1" alt="white car part 1" class="size-full object-cover" />
            </div>
          </div>

          <div class="relative transform-3d card w-50 h-85 card-2">
            <div class="size-full cart-front absolute top-0 backface-hidden overflow-hidden">
              <img :src="greenCarPart2" alt="green car part 2" class="size-full object-cover" />
            </div>
            <div
              class="size-full cart-back absolute top-0 backface-hidden overflow-hidden rotate-y-180"
            >
              <img :src="whiteCar2" alt="white car part 2" class="size-full object-cover" />
            </div>
          </div>

          <div class="relative transform-3d card w-50 h-85 card-3">
            <div class="size-full cart-front absolute top-0 backface-hidden overflow-hidden">
              <img :src="greenCarPart3" alt="green car part 3" class="size-full object-cover" />
            </div>
            <div
              class="size-full cart-back absolute top-0 backface-hidden overflow-hidden rotate-y-180"
            >
              <img :src="whiteCar3" alt="white car part 3" class="size-full object-cover" />
            </div>
          </div>
        </div>

        <div class="gap-y-6 flex flex-col">
          <h3 class="font-bold text-2xl text-[#444]">Super car</h3>
          <div v-for="item in carFeatures" :key="item.id" class="flex gap-x-5 items-center">
            <img :src="item.icon" :alt="item.title" class="size-10" />
            <div class="flex flex-col">
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="items-center gap-x-20 px-10 flex">
        <div class="shrink flex">
          <div class="relative transform-3d card w-50 h-85 card-1">
            <div class="size-full cart-front absolute top-0 backface-hidden overflow-hidden">
              <img :src="tealCarPart1" alt="green car part 1" class="size-full object-cover" />
            </div>
            <div
              class="size-full cart-back absolute top-0 backface-hidden overflow-hidden rotate-y-180"
            >
              <img :src="blackCar1" alt="black car part 1" class="size-full object-cover" />
            </div>
          </div>

          <div class="relative transform-3d card w-50 h-85 card-2">
            <div class="size-full cart-front absolute top-0 backface-hidden overflow-hidden">
              <img :src="tealCarPart2" alt="teal car part 2" class="size-full object-cover" />
            </div>
            <div
              class="size-full cart-back absolute top-0 backface-hidden overflow-hidden rotate-y-180"
            >
              <img :src="blackCar2" alt="black car part 2" class="size-full object-cover" />
            </div>
          </div>

          <div class="relative transform-3d card w-50 h-85 card-3">
            <div class="size-full cart-front absolute top-0 backface-hidden overflow-hidden">
              <img :src="tealCarPart3" alt="teal car part 3" class="size-full object-cover" />
            </div>
            <div
              class="size-full cart-back absolute top-0 backface-hidden overflow-hidden rotate-y-180"
            >
              <img :src="blackCar3" alt="black car part 3" class="size-full object-cover" />
            </div>
          </div>
        </div>

        <div class="gap-y-6 flex flex-col">
          <h3 class="font-bold text-2xl text-[#444]">Super car</h3>
          <div v-for="item in carFeatures" :key="item.id" class="flex gap-x-5 items-center">
            <img :src="item.icon" :alt="item.title" class="size-10" />
            <div class="flex flex-col">
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-screen w-full"></div>
</template>
