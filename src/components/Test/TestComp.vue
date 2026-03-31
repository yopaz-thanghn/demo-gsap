<script lang="ts" setup>
import { gsap } from "gsap";
import { onMounted, onUnmounted } from "vue";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


onMounted(() => {
    gsap.to('.box', {
        keyframes: {
            y: [0, 80, -10, 30, 0],
            ease: 'none',
            easeEach: 'power2.inOut'
        },
        rotate: 180,
        ease: 'elastic',
        duration: 5,
        stagger: 0.2,
        repeat: 1
    })
})

onUnmounted(() => {
})

</script>

<template>
    <div class="mt-20 min-h-[80vh] flex items-center justify-center  gap-5">
        <div class="box size-10 md:bg-green-200 bg-red-500"></div>
        <div class="box size-10 md:bg-green-200 bg-red-500"></div>
        <div class="box size-10 md:bg-green-200 bg-red-500"></div>
        <div class="box size-10 md:bg-green-200 bg-red-500"></div>
    </div>
</template>