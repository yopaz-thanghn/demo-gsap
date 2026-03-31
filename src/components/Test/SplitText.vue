<script lang="ts" setup>
import { gsap } from 'gsap'
import { SplitText } from 'gsap/all'
import { onMounted } from 'vue';

gsap.registerPlugin(SplitText) 

onMounted(() => {
    SplitText.create('.text', {
        type: 'lines',
        // wordsClass: 'word',
        linesClass: 'line',
        // smartWrap: true,
        autoSplit: true,
        propIndex: true,
        mask: 'lines',
        onSplit: (self) => {
            return gsap.from(self.chars, {
                // yPercent: "random([-100, 100])",
                // rotation: "random(-30,30)",
                // autoAlpha: 0,
                stagger: {
                    amount: 0.1,
                    from: 'random',
                },
                duration: 1,
                repeat: -1
            })
        }
    })
})
</script>


<template>
    <div class="container p-10">
        <div class="text">SplitText is a small JavaScript library that splits an HTML element's text into individual characters, words, and/or lines</div>
    </div>
</template>
