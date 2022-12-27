<script setup lang="ts">
const props = defineProps<{
  bannerImage?: string
  bannerHeight?: string
  parallax?: boolean
  fullScreen?: boolean
}>()
const slots = useSlots()
</script>

<template>
  <div
    class="w-full bg-no-repeat bg-center bg-cover flex items-center justify-center mx-auto min-h-[15rem] md:min-h-[25rem]"
    :class="[{ 'bg-fixed': parallax }, { 'h-screen': fullScreen }]"
    :style="{
      height: bannerHeight,
      'background-image': `url(${
        bannerImage ? bannerImage : 'https://vuejs.org/images/logo.png'
      })`,
    }"
  >
    <slot v-if="parallax">
      <div class="text-4xl">Elite Solar Solutions</div>
    </slot>
  </div>
</template>

<style lang="scss" scoped></style>
