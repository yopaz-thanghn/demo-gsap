<script setup lang="ts">
import { gsap } from 'gsap'
import { SplitText } from 'gsap/all'
import { onMounted } from 'vue'

import scaredEyes from '@/assets/nature/two eyes glowing out of darkness.jpeg'

const decorateText = () => {
  const description = SplitText.create('.description', {
    type: 'chars, words',
  })
  gsap.set('.eyes-img', {
    translateX: 'random(-50, 200)',
    translateY: 'random(-150, 150)',
  })
  gsap.set('.eyes-img-2', {
    translateY: 'random(-300, 20)',
    translateX: 'random(0, 100)',
  })
  gsap.from(description.chars, {
    autoAlpha: 0,
    duration: 1,
    stagger: {
      amount: 0.5,
      from: 'start',
    },
    delay: 0.5,
  })

  gsap.from(['.eyes-img', '.eyes-img-2'], {
    autoAlpha: 0,
    duration: 1,
    delay: 0.5,
  })
}

onMounted(() => {
  decorateText()
})
</script>

<template>
  <section class="h-screen w-full">
    <div
      class="size-full bg-[url(/jungle-tree-dark.jpg)] bg-center bg-cover bg-no-repeat grid grid-cols-3 text-white px-20 py-10 text-justify"
    >
      <div class="flex flex-col justify-between text-base text-white/80">
        <p class="description w-fit">
          Mountains are majestic natural formations that rise high above the surrounding land, often
          characterized by steep slopes, rugged terrain, and breathtaking views. They are formed
          over millions of years through geological processes such as tectonic plate movements,
          volcanic activity, or erosion.
        </p>
        <div class="flex flex-col">
          <img :src="scaredEyes" alt="eyes" class="size-10 object-cover eyes-img" />
          <img :src="scaredEyes" alt="eyes" class="size-10 object-cover eyes-img" />
          <img :src="scaredEyes" alt="eyes" class="size-10 object-cover eyes-img" />
          <img :src="scaredEyes" alt="eyes" class="size-10 object-cover eyes-img" />
          <img :src="scaredEyes" alt="eyes" class="size-10 object-cover eyes-img" />
          <img :src="scaredEyes" alt="eyes" class="size-10 object-cover eyes-img" />
        </div>
        <p class="description">
          These towering landscapes are home to diverse ecosystems. As elevation increases, the
          climate changes—resulting in different layers of vegetation, from dense forests at the
          base to sparse alpine plants near the summit. Many rare and unique species of animals and
          plants thrive in these environments.
        </p>
      </div>
      <div></div>
      <div class="flex flex-col justify-between">
        <p class="description text-base text-white/80">
          Mountains also hold cultural and symbolic significance. For many people, they represent
          strength, challenge, and tranquility. They attract adventurers, hikers, and nature lovers
          who seek both physical challenges and peaceful escapes from urban life.
        </p>
        <div class="flex">
          <img :src="scaredEyes" alt="eyes" class="size-10 object-cover eyes-img-2" />
          <img :src="scaredEyes" alt="eyes" class="size-10 object-cover eyes-img-2" />
          <img :src="scaredEyes" alt="eyes" class="size-10 object-cover eyes-img-2" />
          <img :src="scaredEyes" alt="eyes" class="size-10 object-cover eyes-img-2" />
          <img :src="scaredEyes" alt="eyes" class="size-10 object-cover eyes-img-2" />
          <img :src="scaredEyes" alt="eyes" class="size-10 object-cover eyes-img-2" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
