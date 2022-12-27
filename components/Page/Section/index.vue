<script lang="ts" setup>
const attrs = useAttrs()
const props = withDefaults(
  defineProps<{
    container?: boolean
    contentClass?: string
  }>(),
  {
    container: true,
    contentClass: '',
  }
)
</script>
<script lang="ts">
export default defineComponent({
  name: 'PageSection',
})
</script>
<template>
  <section
    class="text-gray-900 dark:text-light-300"
    :class="
      attrs['section-class'] ? attrs['section-class'] : 'lg:px-8 px-4 mb-6'
    "
  >
    <div
      class="mx-auto"
      :class="[
        contentClass
          ? contentClass
          : 'flex flex-col md:flex-row justify-between items-center',
        { 'max-w-8xl': container },
      ]"
    >
      <slot />
    </div>
  </section>
</template>
