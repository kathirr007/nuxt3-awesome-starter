<!-- eslint-disable vue/one-component-per-file -->
<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import { Icon } from '@iconify/vue'

const app = useAppConfig() as AppConfigInput

const { footerNavigation } = useAppData()
</script>

<template>
  <footer
    aria-labelledby="footer-heading"
    class="border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]"
  >
    <h2 id="footer-heading" class="sr-only">Elite Solar Solutions Footer</h2>
    <section class="mx-auto px-4 py-8 sm:max-w-8xl sm:px-6 lg:px-8 lg:pt-16">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <img
            class="h-10"
            src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=300"
            alt="Company name"
          />
          <p class="text-base dark:text-gray-400 text-gray-900">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
          <div class="flex space-x-6">
            <a
              v-for="item in footerNavigation.social"
              :key="item.name"
              v-tooltip="item.name"
              :href="item.href"
              class="text-gray-800 dark:text-gray-400 hover:text-gray-500 hover:dark:text-white"
            >
              <span class="sr-only">{{ item.name }}</span>
              <Icon :icon="item.icon" class="h-6 w-6" aria-hidden="true" />
              <!-- <component :is="item.icon" class="h-6 w-6" aria-hidden="true" /> -->
            </a>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-base font-medium text-gray-900 dark:text-white">
                Solutions
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in footerNavigation.solutions" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-base font-medium text-gray-900 dark:text-white">
                Support
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in footerNavigation.support" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-base font-medium text-gray-900 dark:text-white">
                Company
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in footerNavigation.company" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-base font-medium text-gray-900 dark:text-white">
                Legal
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in footerNavigation.legal" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="border-t lg:border-gray-900/10 dark:border-gray-50/[0.2] lg:px-8 flex-1 flex w-full space-x-20 py-2"
    >
      <div class="w-full py-4 text-center md:text-left">
        <!-- <div class="mb-1">
          {{ app.name }}
        </div> -->
        <div class="text-xs text-center text-gray-600 dark:text-gray-400">
          Copyright © 2022 <a :href="app.author.link">{{ app.name }}</a
          >. All rights reserved. Made with
          <span class="text-red-800 dark:text-red-400">❤</span>
        </div>
      </div>
    </section>
  </footer>
</template>
