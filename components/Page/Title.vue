<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="">
    <slot>
      <h1 class="text-4xl md:text-5xl font-bold">
        {{ text }}
      </h1>
    </slot>
  </div>
</template>
