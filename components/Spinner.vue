<script setup lang="ts">
withDefaults(
  defineProps<{
    widthClass?: string
    heightClass?: string
    type?: 'Rosary' | 'Typing'
  }>(),
  {
    widthClass: 'w-[3rem]',
    type: 'Rosary',
  }
)
</script>

<template>
  <svg
    v-if="type === 'Typing'"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    style="margin: auto"
    :class="[widthClass, heightClass]"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle cx="27.5" cy="57.5" r="5" fill="#fe718d">
      <animate
        attributeName="cy"
        calcMode="spline"
        keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
        repeatCount="indefinite"
        values="57.5;42.5;57.5;57.5"
        keyTimes="0;0.3;0.6;1"
        dur="1s"
        begin="-0.6s"
      ></animate>
    </circle>
    <circle cx="42.5" cy="57.5" r="5" fill="#f47e60">
      <animate
        attributeName="cy"
        calcMode="spline"
        keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
        repeatCount="indefinite"
        values="57.5;42.5;57.5;57.5"
        keyTimes="0;0.3;0.6;1"
        dur="1s"
        begin="-0.44999999999999996s"
      ></animate>
    </circle>
    <circle cx="57.5" cy="57.5" r="5" fill="#f8b26a">
      <animate
        attributeName="cy"
        calcMode="spline"
        keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
        repeatCount="indefinite"
        values="57.5;42.5;57.5;57.5"
        keyTimes="0;0.3;0.6;1"
        dur="1s"
        begin="-0.3s"
      ></animate>
    </circle>
    <circle cx="72.5" cy="57.5" r="5" fill="#abbd81">
      <animate
        attributeName="cy"
        calcMode="spline"
        keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
        repeatCount="indefinite"
        values="57.5;42.5;57.5;57.5"
        keyTimes="0;0.3;0.6;1"
        dur="1s"
        begin="-0.15s"
      ></animate>
    </circle>
  </svg>
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    class="lds-microsoft inline"
    viewBox="0 0 100 100"
    :class="widthClass"
    preserveAspectRatio="xMidYMid"
  >
    <g transform="rotate(0)">
      <circle
        cx="81.73413361164941"
        cy="74.35045716034882"
        fill="#e15b64"
        r="5"
        transform="rotate(340.001 49.9999 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="spline"
          values="0 50 50;360 50 50"
          times="0;1"
          keySplines="0.5 0 0.5 1"
          repeatCount="indefinite"
          dur="1.5s"
          begin="0s"
        />
      </circle>
      <circle
        cx="74.35045716034882"
        cy="81.73413361164941"
        fill="#f47e60"
        r="5"
        transform="rotate(348.352 50.0001 50.0001)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="spline"
          values="0 50 50;360 50 50"
          times="0;1"
          keySplines="0.5 0 0.5 1"
          repeatCount="indefinite"
          dur="1.5s"
          begin="-0.0625s"
        />
      </circle>
      <circle
        cx="65.3073372946036"
        cy="86.95518130045147"
        fill="#f8b26a"
        r="5"
        transform="rotate(354.236 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="spline"
          values="0 50 50;360 50 50"
          times="0;1"
          keySplines="0.5 0 0.5 1"
          repeatCount="indefinite"
          dur="1.5s"
          begin="-0.125s"
        />
      </circle>
      <circle
        cx="55.22104768880207"
        cy="89.65779445495241"
        fill="#abbd81"
        r="5"
        transform="rotate(357.958 50.0002 50.0002)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="spline"
          values="0 50 50;360 50 50"
          times="0;1"
          keySplines="0.5 0 0.5 1"
          repeatCount="indefinite"
          dur="1.5s"
          begin="-0.1875s"
        />
      </circle>
      <circle
        cx="44.77895231119793"
        cy="89.65779445495241"
        fill="#849b87"
        r="5"
        transform="rotate(359.76 50.0064 50.0064)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="spline"
          values="0 50 50;360 50 50"
          times="0;1"
          keySplines="0.5 0 0.5 1"
          repeatCount="indefinite"
          dur="1.5s"
          begin="-0.25s"
        />
      </circle>
      <circle
        cx="34.692662705396415"
        cy="86.95518130045147"
        fill="#e15b64"
        r="5"
        transform="rotate(0.183552 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="spline"
          values="0 50 50;360 50 50"
          times="0;1"
          keySplines="0.5 0 0.5 1"
          repeatCount="indefinite"
          dur="1.5s"
          begin="-0.3125s"
        />
      </circle>
      <circle
        cx="25.649542839651176"
        cy="81.73413361164941"
        fill="#f47e60"
        r="5"
        transform="rotate(1.86457 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="spline"
          values="0 50 50;360 50 50"
          times="0;1"
          keySplines="0.5 0 0.5 1"
          repeatCount="indefinite"
          dur="1.5s"
          begin="-0.375s"
        />
      </circle>
      <circle
        cx="18.2658663883506"
        cy="74.35045716034884"
        fill="#f8b26a"
        r="5"
        transform="rotate(5.45126 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="spline"
          values="0 50 50;360 50 50"
          times="0;1"
          keySplines="0.5 0 0.5 1"
          repeatCount="indefinite"
          dur="1.5s"
          begin="-0.4375s"
        />
      </circle>
      <animateTransform
        attributeName="transform"
        type="rotate"
        calcMode="spline"
        values="0 50 50;0 50 50"
        times="0;1"
        keySplines="0.5 0 0.5 1"
        repeatCount="indefinite"
        dur="1.5s"
      />
    </g>
  </svg>
  <!-- <div>
  </div> -->
</template>

<style lang="scss" scoped></style>
