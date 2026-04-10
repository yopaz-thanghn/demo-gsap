<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'

const spinBtnRef = useTemplateRef<HTMLButtonElement>('spint-btn')
const wheelRef = useTemplateRef<HTMLDivElement>('wheel')

const calculateDeg = () => {
  const randomNumber = Math.floor(Math.random() * 360) + 1
  return randomNumber + 360 * 5
}
const rotationValue = ref<number>(calculateDeg())

const handleSpin = () => {
  const spinBtn = spinBtnRef.value
  const wheel = wheelRef.value
  if (!spinBtn || !wheel) return
  wheel.style.transform = `rotate(${rotationValue.value}deg)`
  rotationValue.value += calculateDeg()
}
</script>

<template>
  <section>
    <div class="container">
      <button ref="spint-btn" class="spint-btn" @click="handleSpin">spin</button>
      <div ref="wheel" class="wheel">
        <div class="number" style="--i: 1; --clr: #ff6b6b">
          <span>100</span>
        </div>
        <div class="number" style="--i: 2; --clr: #2ec4b6">
          <span>200</span>
        </div>
        <div class="number" style="--i: 3; --clr: #ffd93d">
          <span>36</span>
        </div>
        <div class="number" style="--i: 4; --clr: #4caf50">
          <span>48</span>
        </div>
        <div class="number" style="--i: 5; --clr: #00c2ff">
          <span>123</span>
        </div>
        <div class="number" style="--i: 6; --clr: #5f27cd">
          <span>300</span>
        </div>
        <div class="number" style="--i: 7; --clr: #ff3cac">
          <span>20</span>
        </div>
        <div class="number" style="--i: 8; --clr: #00d2d3">
          <span>5</span>
        </div>
        <div class="number" style="--i: 9; --clr: #ff9f1c">
          <span>8</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #333;
}

.container {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .spint-btn {
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 600;
  color: #333;
  border: 4px solid rgba(0, 0, 0, 0.75);
  cursor: pointer;
  letter-spacing: 0.1em;
  user-select: none;
}

.container .spint-btn::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 30px;
  position: absolute;
  top: -28px;
  background: #fff;
  clip-path: polygon(51% 0, 20% 100%, 80% 100%);
}

.container .wheel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  border-radius: 50%;
  box-shadow:
    0 0 0 5px #333,
    0 0 0 15px #fff,
    0 0 0 18px #111;

  overflow: hidden;
  transition: transform 5s ease-in-out;
}

.container .wheel .number {
  position: absolute;
  width: 50%;
  height: 50%;
  background: var(--clr);
  transform-origin: bottom right;
  transform: rotate(calc(45deg * var(--i)));
  clip-path: polygon(0 0, 60% 0, 100% 100%, 0 60%);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.container .wheel .number span {
  position: relative;
  transform: rotate(45deg);
  font-size: 1.5em;
  font-weight: 700;
  color: white;
  text-shadow: 3px 5px 2px rgba(0, 0, 0, 0.15);
}

.container .wheel .number span::before {
  content: '$';
  right: -10px;
  top: 0;
  position: absolute;
  font-size: 0.75em;
  font-weight: 500;
}
</style>
