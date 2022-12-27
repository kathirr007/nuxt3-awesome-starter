<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    errorKey: string
    values: Record<string, any>
    errors: Record<string, any>
    feedback?: boolean
  }>(),
  {
    feedback: true,
  }
)
const attrs = useAttrs()
</script>

<template>
  <div
    v-if="props.values[errorKey] && !!!props.errors[errorKey]"
    class="text-green-600 font-medium"
    :class="attrs['success-class']"
  >
    <slot v-if="props.feedback">Looking good!</slot>
  </div>
  <div
    v-else
    class="text-red-500 text-sm"
    :class="attrs['error-class']"
    v-html="props.errors[errorKey]"
  />
</template>
