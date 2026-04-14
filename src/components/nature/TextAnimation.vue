<script setup lang="ts"></script>

<template>
  <section class="h-screen pt-16">
    <div class="size-full bg-white relative">
      <div class="relative">
        <h3 class="main-text">Water</h3>
        <h3 class="main-text">Water</h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main-text {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 200px;
  font-weight: 900;
}

.main-text:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px #03a9f4;
}

.main-text:nth-child(2) {
  color: #03a9f4;
  animation: wave 4s ease-in-out infinite;
}

@keyframes wave {
  0%,
  100% {
    clip-path: polygon(
      0 46%,
      14% 45%,
      31% 49%,
      55% 63%,
      70% 65%,
      84% 63%,
      100% 60%,
      100% 100%,
      0 100%
    );
  }
  50% {
    clip-path: polygon(
      0 63%,
      18% 66%,
      34% 67%,
      49% 63%,
      64% 55%,
      81% 50%,
      100% 48%,
      100% 100%,
      0 100%
    );
  }
}
</style>
