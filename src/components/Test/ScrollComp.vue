<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  //   const tl = gsap.timeline({
  //       scrollTrigger: {
  //           trigger: '.boxC',
  //           start: 'top center',
  //           end: 'top 100px',
  //           pin: true,
  //           markers: true,
  //           scrub: 3,
  //           toggleActions: 'restart pause reverse pause',
  //           toggleClass: 'active',
  //         //   horizontal: true,
  //       }
  //   });
  //   tl.to('.boxC', {
  //       x: 300,
  //       rotation: 360,
  //       duration: 4,
  //   }).to('.boxC', {
  //       backgroundColor: 'purple',
  //       duration: 1,
  //       ease: 'power2.inOut'
  //   })

  // pinning
  //   gsap.utils.toArray('.panel').forEach((panel: unknown, i) => {
  //     ScrollTrigger.create({
  //       trigger: panel,
  //       start: 'top top',
  //       pin: true,
  //       pinSpacing: false,
  //     })
  //   })

  // snapping
  //   const sections = gsap.utils.toArray('.panel')
  //   gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1),
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.container',
  //       pin: true,
  //       scrub: 1,
  //       // snap: 1 / (sections.length - 1), // choose a section value between 2 panels
  //       end: () => {
  //         return '+=' + document.querySelector('.container')?.clientWidth
  //         },
  //     },
  //   })

  // stagger
  gsap.to('.box', {
    stagger: {
      each: 0.1,
      from: 'center',
      grid: 'auto',
      repeat: -1,
      yoyo: true,
    },
    duration: 1,
    scale: 0.1,
  })
})
</script>

<template>
  <!-- <div class="flex flex-col gap-y-80 p-3 min-h-[2100px]">
        <div class="boxA size-10 bg-amber-400 flex items-center justify-center">A</div>
    <div class="boxB size-10 bg-green-400 flex items-center justify-center">B</div>
    <div class="boxC size-10 bg-red-400 flex items-center justify-center">C</div>
    </div> -->

  <!-- pinning -->
  <!-- <div class="flex flex-col p-3 min-h-[2100px]">
    <div class="panel h-screen w-full bg-blue-400 flex items-center justify-center">blue panel</div>
    <div class="panel h-screen w-full bg-orange-400 flex items-center justify-center">
      orange panel
    </div>
    <div class="panel h-screen w-full bg-red-400 flex items-center justify-center">red panel</div>
    <div class="panel h-screen w-full bg-green-400 flex items-center justify-center">
      green panel
    </div>
  </div> -->

  <!-- snapping -->
  <!-- <div class="container flex overflow-hidden h-screen">
    <div class="panel h-screen w-screen shrink-0 bg-blue-400 flex items-center justify-center">
      blue panel
    </div>
    <div class="panel h-screen w-screen shrink-0 bg-orange-400 flex items-center justify-center">
      orange panel
    </div>
    <div class="panel h-screen w-screen shrink-0 bg-red-400 flex items-center justify-center">
      red panel
    </div>
    <div class="panel h-screen w-screen shrink-0 bg-green-400 flex items-center justify-center">
      green panel
    </div>
  </div> -->

  <div class="flex p-10 items-center justify-center gap-5 flex-wrap">
    <div class="box size-10 bg-red-300"></div>
    <div class="box size-10 bg-blue-300"></div>
    <div class="box size-10 bg-yellow-300"></div>
    <div class="box size-10 bg-purple-300"></div>
    <div class="box size-10 bg-green-300"></div>
    <div class="box size-10 bg-gray-300"></div>
    <div class="box size-10 bg-black"></div>
    <div class="box size-10 bg-red-300"></div>
    <div class="box size-10 bg-blue-300"></div>
    <div class="box size-10 bg-yellow-300"></div>
    <div class="box size-10 bg-purple-300"></div>
    <div class="box size-10 bg-green-300"></div>
    <div class="box size-10 bg-gray-300"></div>
    <div class="box size-10 bg-black"></div>
    <div class="box size-10 bg-red-300"></div>
    <div class="box size-10 bg-blue-300"></div>
    <div class="box size-10 bg-yellow-300"></div>
    <div class="box size-10 bg-purple-300"></div>
    <div class="box size-10 bg-green-300"></div>
    <div class="box size-10 bg-gray-300"></div>
    <div class="box size-10 bg-black"></div>
    <div class="box size-10 bg-red-300"></div>
    <div class="box size-10 bg-blue-300"></div>
    <div class="box size-10 bg-yellow-300"></div>
    <div class="box size-10 bg-purple-300"></div>
    <div class="box size-10 bg-green-300"></div>
    <div class="box size-10 bg-gray-300"></div>
    <div class="box size-10 bg-black"></div>
  </div>
</template>

<style scoped>
.active {
  background-color: aquamarine;
}
</style>
