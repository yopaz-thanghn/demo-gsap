<script setup lang="ts">
import { headerList } from '@/constants/header'
import logo from '@/assets/images/yopaz-logo.svg'
import mailIcon from '@/assets/icons/mail.png'

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <header
    class="min-h-16 h-16 w-full opacity-100 fixed z-100 top-0 left-0 right-0 flex justify-between items-center py-1 px-2 bg-white/10 backdrop-blur-xs"
  >
    <div>
      <RouterLink to="/" class="block">
        <img :src="logo" alt="logo-yopaz" class="h-12 w-52 object-contain" />
      </RouterLink>
    </div>
    <ul class="flex items-center gap-x-10">
      <li
        v-for="item in headerList"
        :key="item.id"
        class="hover:text-[#e74c39] font-bold cursor-pointer"
      >
        {{ item.title }}
      </li>
    </ul>
    <div>
      <img :src="mailIcon" alt="mail-icon" class="size-8 cursor-pointer" />
    </div>
  </header>
</template>
