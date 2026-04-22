<script setup lang="ts"></script>

<template>
  <div class="text-container">
    <p class="text">hello world</p>
  </div>
</template>

<style scoped>
.text-container {
  display: inline-block;
}

.text-container .text {
  font-size: 5em;
  letter-spacing: 10px;
  font-family: monospace;
  border-right: 30px solid blue;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  animation:
    typing 2s linear infinite,
    cursor 0.4s step-end infinite alternate;
}

@keyframes cursor {
  50% {
    border-color: transparent;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
}
</style>
