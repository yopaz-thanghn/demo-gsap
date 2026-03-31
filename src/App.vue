<script setup lang="ts">
import Homepage from './components/homepage/Homepage.vue'
import Header from './layouts/header/Header.vue'
import MainLayout from './layouts/main/MainLayout.vue'
</script>

<template>
  <Header />
  <MainLayout>
    <Homepage />
  </MainLayout>
</template>

<style scoped></style>
