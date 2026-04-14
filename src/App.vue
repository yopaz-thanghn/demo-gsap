<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './layouts/header/Header.vue'
import MainLayout from './layouts/main/MainLayout.vue'
import 'lenis/dist/lenis.css'
</script>

<template>
  <main>
    <Header />
    <MainLayout>
      <RouterView />
    </MainLayout>
  </main>
</template>

<style scoped></style>
