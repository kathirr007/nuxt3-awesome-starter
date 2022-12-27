<script setup lang="ts">
const props = defineProps<{
  parallaxImage?: string
  parallaxHeight?: number | string
}>()
</script>

<template>
  <div
    class="bg-parallax bg-fixed bg-no-repeat bg-center container flex items-center justify-center h-screen mx-auto"
    :style="{
      height: parallaxHeight || '100vh',
      'background-image': `url(${
        parallaxImage ? parallaxImage : 'https://vuejs.org/images/logo.png'
      })`,
    }"
  >
    <slot>
      <div class="text-4xl">Elite Solar Solutions</div>
    </slot>
  </div>
</template>

<style lang="scss" scoped></style>
