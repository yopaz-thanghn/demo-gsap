<script setup lang="ts">
import { useCalculateDragDistance } from '@/utils/calculateDragDistance'
import { gsap } from 'gsap'
import { onMounted, ref, useTemplateRef, watch } from 'vue'
import img3 from '@/assets/nature/img3.jpg'
import img4 from '@/assets/nature/img4.jpg'
import img5 from '@/assets/nature/img5.jpg'
import img6 from '@/assets/nature/img6.jpg'
import img7 from '@/assets/nature/img7.jpg'
import img8 from '@/assets/nature/img8.jpg'

const { init: selectObject, xDistance, yDistance } = useCalculateDragDistance()
const boxRef = useTemplateRef<HTMLDivElement>('box')
const isMouseOut = ref<boolean>(false)
const isTouchSideFace = ref<boolean>(false)
// let tween: gsap.core.Tween

const init = () => {
  if (!boxRef.value) return
  selectObject(boxRef.value)
}

watch([xDistance, yDistance], ([x, y]) => {
  const box = boxRef.value
  if (!box || isMouseOut.value) return
  // const rotateY = Number(gsap.getProperty(box, 'rotateY')) % 360
  // const rotateZ = Number(gsap.getProperty(box, 'rotateZ'))
  // const rotateX = Number(gsap.getProperty(box, 'rotateX'))
  // let isBackFace = false
  // if ((rotateY <= -100 && rotateY >= -240) || (rotateY >= 100 && rotateY <= 250)) {
  //   isBackFace = true
  // }

  const tween = gsap.to(box, {
    rotateX: `+=${-y * 0.2}`,
    rotateY: `+=${x * 0.2}`,
    inertia: {
      rotateY: {
        velocity: 50,
      },
      rotateX: {
        velocity: 50,
      },
    },
    onComplete: () => {
      tween.kill()
    },
  })
  tween.invalidate()
  tween.restart()
})

const onMouseLeave = () => {
  isMouseOut.value = true
}

const onEnterSideFace = () => {
  isTouchSideFace.value = true
}

const onLeaveSideFace = () => {
  isTouchSideFace.value = false
}

onMounted(() => {
  init()
})
</script>

<template>
  <section class="h-[calc(100vh-64px)] w-full flex items-center justify-center bg-black">
    <div class="box-container">
      <div
        ref="box"
        class="box w-62.5 h-62.5"
        @mouseleave="onMouseLeave"
        @mouseenter="isMouseOut = false"
      >
        <div class="card front">
          <img :src="img3" alt="img3" class="object-cover" />
          <div class="overlap-img"></div>
        </div>
        <div class="card back">
          <img :src="img4" alt="img4" class="object-cover" />
          <div class="overlap-img"></div>
        </div>
        <div class="card left" @mouseenter="onEnterSideFace" @mouseleave="onLeaveSideFace">
          <img :src="img5" alt="img5" class="object-cover" />
          <div class="overlap-img"></div>
        </div>
        <div class="card right" @mouseenter="onEnterSideFace" @mouseleave="onLeaveSideFace">
          <img :src="img6" alt="img6" class="object-cover" />
          <div class="overlap-img"></div>
        </div>
        <div class="card top">
          <img :src="img7" alt="img7" class="object-cover" />
          <div class="overlap-img"></div>
        </div>
        <div class="card bottom">
          <img :src="img8" alt="img8" class="object-cover" />
          <div class="overlap-img"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.box-container {
  perspective: 1000px;
  height: 60vh;
  width: 30vw;
}

.box {
  /* transform: rotateZ(-90deg) rotateY(-90deg); */
  height: 250px;
  width: 250px;
  position: relative;
  transform-style: preserve-3d;
  left: 100px;
  /* animation: animate 5s linear infinite alternate-reverse; */
}

@keyframes animate {
  0% {
    transform: rotateX(45deg) rotateY(-45deg);
  }
  25% {
    transform: rotateX(-45deg) rotateY(-45deg);
  }
  50% {
    transform: rotateX(45deg) rotateY(-45deg);
  }
  75% {
    transform: rotateX(-45deg) rotateY(45deg);
  }
  100% {
    transform: rotateX(45deg) rotateY(-45deg);
  }
}

.card {
  width: 250px;
  height: 250px;
  color: white;
  /* background-color: #000; */
  border: 2px solid #fff;
  font-size: 32px;
  box-sizing: border-box;
  position: absolute;
  user-select: none;
}

.card img {
  width: 100%;
  height: 100%;
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
}

.card .overlap-img {
  position: absolute;
  inset: 0;
  background-color: transparent;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: grab;
}

.card .overlap-img:active {
  cursor: grabbing;
}

.front {
  transform: translateZ(125px);
}

.back {
  transform: translateZ(-125px) rotateY(180deg);
}

.left {
  right: 125px;
  transform: rotateY(-90deg);
}

.right {
  left: 125px;
  transform: rotateY(90deg);
}

.top {
  bottom: 125px;
  transform: rotateX(90deg);
}

.bottom {
  top: 125px;
  transform: rotateX(-90deg);
}
</style>
