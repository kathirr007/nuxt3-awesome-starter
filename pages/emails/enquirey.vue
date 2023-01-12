<script setup lang="ts">
const contactForm = userContactForm().value
</script>

<template>
  <EmailsUserContact :form="contactForm" />
</template>
