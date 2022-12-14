<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.services.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.services.description'),
    },
  ],
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.services.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection> Test </PageSection>
    </PageBody>
  </PageWrapper>
</template>
