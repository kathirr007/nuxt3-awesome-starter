<script setup lang="ts">
// composable
const { t } = useLang()

const titlesText = computed<string[]>(() => t('pages.index.title').split('[]'))
const leadingsText = computed(() => [
  {
    text: titlesText.value[0],
    startColor: '#007CF0',
    endColor: '#00DFD8',
    delay: 0,
  },
  {
    text: titlesText.value[1],
    startColor: '#7928CA',
    endColor: '#FF0080',
    delay: 2,
  },
  {
    text: titlesText.value[2],
    startColor: '#FF4D4D',
    endColor: '#F9CB28',
    delay: 4,
  },
])
</script>

<template>
  <div class="flex-1 md:w-5/8 flex flex-col z-10">
    <h1 class="text-center md:text-left mt-4">
      <span
        v-for="(item, i) in leadingsText"
        :key="i"
        :style="`--content: '${item.text}'; --start-color: ${
          item.startColor
        }; --end-color: ${item.endColor}; --animation-name: anim-fg-${i + 1}`"
        class="animated-text-bg drop-shadow-xl text-5xl xl:text-8xl 2xl:text-9xl block font-black uppercase"
      >
        <span class="animated-text-fg">{{ item.text }}</span>
      </span>
    </h1>
    <div class="flex space-x-4 ml-4 mt-10 justify-center md:justify-start">
      <Button
        size="lg"
        text="Nuxt 3"
        class="font-extrabold"
        href="https://v3.nuxtjs.org"
      />
      <Button
        size="lg"
        text="Github"
        type="secondary"
        class="font-extrabold"
        href="https://github.com/viandwi24/nuxt3-awesome-starter"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/sass/variables';

@keyframes anim-fg-1 {
  0%,
  16.667%,
  100% {
    opacity: 1;
  }

  33.333%,
  83.333% {
    opacity: 0;
  }
}

@keyframes anim-fg-2 {
  0%,
  16.667%,
  66.667%,
  100% {
    opacity: 0;
  }

  33.333%,
  50% {
    opacity: 1;
  }
}

@keyframes anim-fg-3 {
  0%,
  50%,
  100% {
    opacity: 0;
  }

  66.667%,
  83.333% {
    opacity: 1;
  }
}

.animated-text-bg {
  position: relative;
  display: block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  content: var(--content);
  display: block;
  width: 100%;
  color: theme('colors.slate.800');
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  padding-left: $padding;
  padding-right: $padding;
  &:before {
    content: var(--content);
    position: absolute;
    display: block;
    width: 100%;
    color: theme('colors.slate.800');
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    padding-left: $padding;
    padding-right: $padding;
  }
}
.animated-text-fg {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: $padding;
  padding-right: $padding;
  background-image: linear-gradient(
    90deg,
    var(--start-color),
    var(--end-color)
  );
  position: relative;
  opacity: 0;
  z-index: 1;
  animation: var(--animation-name) 8s infinite;
}

html.dark {
  .animated-text-bg {
    color: theme('colors.gray.100');
    &:before {
      color: theme('colors.gray.100');
    }
  }
}
</style>
