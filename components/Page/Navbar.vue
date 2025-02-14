<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import type { Ref } from 'vue'

export interface IMenuItem {
  type: 'link' | 'button' | 'submenu'
  text: string
  href?: any
  route?: any
  items?: IMenuItem[]
  isActive?: boolean | (() => boolean)
}

const { t } = useLang()
const route = useRoute()
const currentInstance = getCurrentInstance()
const app = useAppConfig() as AppConfigInput
const isMenuActive = (items: IMenuItem[]) => {
  return items.some((item) => {
    return item.route?.name === route.name
  })
}
const removeActiveClass = () => {
  document
    .querySelector('nav.top-nav')
    ?.querySelectorAll('button, a')
    .forEach((el) => el.classList.remove('router-link-exact-active'))
}
const handleMenuDropdownItemClick = ({
  topMenu,
  close,
  closeTop,
}: {
  topMenu: string
  close?: any
  closeTop?: any
}) => {
  if (close) close()
  if (closeTop) {
    closeTop()
  }

  const currentInstanceRefs = currentInstance?.refs
  removeActiveClass()
  ;(currentInstance?.refs as unknown as Record<string, any>)[
    topMenu
  ][0].el.classList.add('router-link-exact-active')
}
const menus = computed((): IMenuItem[] => [
  {
    type: 'link',
    text: t('pages.home.nav'),
    route: { name: 'index' },
  },
  {
    type: 'submenu',
    text: 'Company',
    items: [
      { type: 'link', text: t('pages.about.nav'), route: { name: 'about' } },
      {
        type: 'link',
        text: t('pages.services.nav'),
        route: { name: 'services' },
      },
    ],
  },
  { type: 'link', text: t('pages.blank.nav'), route: { name: 'blank' } },
  { type: 'link', text: t('pages.gallery.nav'), route: { name: 'gallery' } },
  {
    type: 'submenu',
    text: t('pages.post.nav'),
    items: [
      { type: 'link', text: t('pages.blank.nav'), route: { name: 'blank' } },
      { type: 'link', text: 'Test 2', route: { name: 'setting' } },
      {
        type: 'submenu',
        text: 'Test 3',
        items: [
          {
            type: 'link',
            text: t('pages.blank.nav'),
            route: { name: 'blank' },
          },
          { type: 'link', text: 'Test 4', route: { name: 'setting' } },
          { type: 'link', text: 'Test 5', route: { name: 'test' } },
        ],
      },
    ],
  },
  { type: 'link', text: t('pages.setting.nav'), route: { name: 'setting' } },
  {
    type: 'button',
    text: t('pages.contact.btnText'),
    route: { name: 'contact' },
  },
])
</script>

<template>
  <BuilderNavbar>
    <template #banner>
      <!-- <div
        class="text-white text-xs text-center py-1 px-4 lg:px-8 bg-primary-500 capitalize"
      >
        <span class="mr-1">
          {{ $t('banners.welcome', { app_name: app.name }) }}
          <Anchor
            class="underline font-bold"
            :text="$t('others.learn_more')"
            href="https://github.com/Elitesolarcctv/elitesolar"
          />
        </span>
      </div> -->
      <div
        class="max-w-8xl w-full mx-auto flex items-center justify-center text-white sm:justify-between items-center py-2 px-4"
      >
        <div class="hidden sm:block">
          <ul class="top-nav">
            <li>
              <NuxtLink to="/services" class="!text-white font-medium"
                >Services</NuxtLink
              >
              <!-- <a href="solution-solar.php">Services</a> -->
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 sm:ml-auto"
        >
          <ul
            class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 space-x-2 sm:border-r sm:pr-4 lg:border-gray-200"
          >
            <li class="flex space-x-2 items-center">
              <a href="mailto:sales@elitesolar.com">
                <IconFaRegular:envelope />
              </a>
              <a href="mailto:sales@elitesolar.com">
                <span>sales@elitesolar.com</span>
              </a>
            </li>
            <li class="flex space-x-2 items-center">
              <a href="tel:+91-87609-48837">
                <IconFaSolid:phone-alt />
              </a>
              <a href="tel:+91-87609-48837">+91-87609-48837</a>
            </li>
          </ul>
          <ul class="social flex items-center space-x-2">
            <li>
              <a href="fb.me/#">
                <IconFaBrands:facebook-f />
              </a>
            </li>
            <li>
              <a href="twitter.com/#">
                <IconFaBrands:twitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCSoTHknj5KBWNrc0ZiZMpZA"
              >
                <IconFaBrands:youtube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <template #menu>
      <div class="relative hidden lg:flex items-center ml-auto">
        <nav
          class="top-nav text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300"
          role="navigation"
        >
          <ul class="flex items-center space-x-8">
            <li v-for="(item, i) in menus" :key="i">
              <Menu
                v-if="item.type === 'submenu'"
                as="div"
                class="relative inline-block text-left"
              >
                <div>
                  <MenuButton
                    v-slot="{ open }"
                    :ref="item.text"
                    class="inline-flex w-full justify-center rounded-md bg-opacity-20 py-2 text-sm font-semibold hover:no-underline hover:text-slate-900 hover:dark:text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 capitalize"
                    :class="{
                      'router-link-exact-active': isMenuActive(item.items as IMenuItem[]),
                    }"
                  >
                    {{ item.text }}
                    <IconMdi:chevron-up v-if="open" />
                    <IconMdi:chevron-down v-else />
                  </MenuButton>
                </div>

                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <MenuItems
                    class="absolute p-1 right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg w-52 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
                  >
                    <div class="px-1 py-1">
                      <MenuItem
                        v-for="(submenu, index) in item.items"
                        :key="index"
                        v-slot="{ close: closeTop }"
                      >
                        <Menu
                          v-if="submenu.type === 'submenu'"
                          as="div"
                          class="relative inline-block text-left w-full"
                        >
                          <div>
                            <MenuButton
                              v-slot="{ open }"
                              class="inline-flex w-full justify-between rounded-md bg-opacity-20 p-2 text-sm font-semibold hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 capitalize hover:bg-gray-50 dark:hover:bg-gray-700/30"
                              @click.prevent="(open) => !open"
                            >
                              {{ submenu.text }}
                              <IconMdi:chevron-up v-if="open" />
                              <IconMdi:chevron-down v-else />
                            </MenuButton>
                          </div>

                          <transition
                            enter-active-class="transition duration-100 ease-out"
                            enter-from-class="transform scale-95 opacity-0"
                            enter-to-class="transform scale-100 opacity-100"
                            leave-active-class="transition duration-75 ease-in"
                            leave-from-class="transform scale-100 opacity-100"
                            leave-to-class="transform scale-95 opacity-0"
                          >
                            <MenuItems
                              class="absolute p-1 right-1/2 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg w-52 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
                            >
                              <div class="px-1 py-1">
                                <MenuItem
                                  v-for="(nestedMenu, idx) in submenu.items"
                                  :key="idx"
                                  v-slot="{ close }"
                                >
                                  <Anchor
                                    :to="
                                      nestedMenu.route
                                        ? nestedMenu.route
                                        : undefined
                                    "
                                    :href="
                                      nestedMenu.href
                                        ? nestedMenu.href
                                        : undefined
                                    "
                                    :class="{
                                      ' capitalize py-2 px-2 flex items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30 hover:no-underline': true,
                                      '!text-sky-500 bg-gray-100 dark:bg-gray-600/30':
                                        $route.name === nestedMenu.route.name,
                                    }"
                                    @click.prevent="
                                      handleMenuDropdownItemClick({
                                        close,
                                        closeTop,
                                        topMenu: item.text,
                                      })
                                    "
                                  >
                                    {{ nestedMenu.text }}
                                  </Anchor>
                                </MenuItem>
                              </div>
                            </MenuItems>
                          </transition>
                        </Menu>

                        <Anchor
                          v-else
                          :to="submenu.route ? submenu.route : undefined"
                          :href="submenu.href ? submenu.href : undefined"
                          :class="{
                            'py-2 px-2 flex items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30 hover:no-underline capitalize': true,
                            '!text-sky-500 bg-gray-100 dark:bg-gray-600/30':
                              $route.name === submenu.route.name,
                          }"
                          @click.prevent="
                            handleMenuDropdownItemClick({
                              topMenu: item.text,
                              closeTop,
                            })
                          "
                        >
                          {{ submenu.text }}
                        </Anchor>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                class="hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"
                @click.prevent="removeActiveClass"
                >{{ item.text }}</Anchor
              >
              <Button
                v-else-if="item.type === 'button'"
                :text="item.text"
                size="xs"
                class="font-extrabold capitalize !text-white font-medium"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
              />
            </li>
          </ul>
        </nav>
        <div
          class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <!-- <LanguageSwitcher /> -->
          <ThemeSwitcher />
          <Anchor
            class="hover:no-underline hover:text-slate-900 hover:dark:text-white text-lg flex self-center items-center"
            href="https://github.com/Elitesolarcctv/elitesolar"
            title="Github"
          >
            <IconMdi:github-face />
          </Anchor>
        </div>
      </div>
    </template>
    <template #options="{ toggleOptions }">
      <ActionSheet @on-close="toggleOptions(false)">
        <ActionSheetBody>
          <!-- <ActionSheetHeader text="Menu" class="text-lg" /> -->
          <nav class="leading-6 font-semibold text-gray-600 dark:text-gray-300">
            <ul class="flex flex-col">
              <li
                v-for="(item, i) in menus"
                :key="i"
                class="flex w-full"
                :class="{
                  'pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]':
                    item.type === 'link',
                }"
              >
                <Menu
                  v-if="item.type === 'submenu'"
                  as="div"
                  class="relative inline-block text-left w-full mb-2"
                >
                  <div>
                    <MenuButton
                      v-slot="{ open }"
                      class="inline-flex w-full justify-between rounded-md bg-opacity-20 py-2 font-semibold hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 capitalize"
                      :class="{
                        'router-link-exact-active': isMenuActive(item.items as IMenuItem[]),
                      }"
                    >
                      {{ item.text }}
                      <IconMdi:chevron-up v-if="open" />
                      <IconMdi:chevron-down v-else />
                    </MenuButton>
                  </div>

                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <MenuItems
                      class="absolute p-1 left-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg w-52 py-1 text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
                    >
                      <div class="px-1 py-1">
                        <MenuItem
                          v-for="(submenu, index) in item.items"
                          :key="index"
                          v-slot="{ close: closeTop }"
                        >
                          <Menu
                            v-if="submenu.type === 'submenu'"
                            as="div"
                            class="relative inline-block text-left w-full"
                          >
                            <div>
                              <MenuButton
                                v-slot="{ open }"
                                class="inline-flex w-full justify-between rounded-md bg-opacity-20 p-2 font-semibold hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 capitalize hover:bg-gray-50 dark:hover:bg-gray-700/30"
                                @click.prevent="(open) => !open"
                              >
                                {{ submenu.text }}
                                <IconMdi:chevron-up v-if="open" />
                                <IconMdi:chevron-down v-else />
                              </MenuButton>
                            </div>

                            <transition
                              enter-active-class="transition duration-100 ease-out"
                              enter-from-class="transform scale-95 opacity-0"
                              enter-to-class="transform scale-100 opacity-100"
                              leave-active-class="transition duration-75 ease-in"
                              leave-from-class="transform scale-100 opacity-100"
                              leave-to-class="transform scale-95 opacity-0"
                            >
                              <MenuItems
                                class="absolute p-1 left-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg w-52 py-1 text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
                              >
                                <div class="px-1 py-1">
                                  <MenuItem
                                    v-for="(nestedMenu, idx) in submenu.items"
                                    :key="idx"
                                    v-slot="{ close }"
                                  >
                                    <Anchor
                                      :to="
                                        nestedMenu.route
                                          ? nestedMenu.route
                                          : undefined
                                      "
                                      :href="
                                        nestedMenu.href
                                          ? nestedMenu.href
                                          : undefined
                                      "
                                      :class="{
                                        ' capitalize py-2 px-2 flex items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30 hover:no-underline': true,
                                        '!text-sky-500 bg-gray-100 dark:bg-gray-600/30':
                                          $route.name === nestedMenu.route.name,
                                      }"
                                      @click.prevent="
                                        () => {
                                          handleMenuDropdownItemClick({
                                            close,
                                            closeTop,
                                            topMenu: item.text,
                                          })
                                          toggleOptions(false)
                                        }
                                      "
                                    >
                                      {{ nestedMenu.text }}
                                    </Anchor>
                                  </MenuItem>
                                </div>
                              </MenuItems>
                            </transition>
                          </Menu>

                          <Anchor
                            v-else
                            :to="submenu.route ? submenu.route : undefined"
                            :href="submenu.href ? submenu.href : undefined"
                            :class="{
                              'py-2 px-2 flex items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30 hover:no-underline capitalize': true,
                              '!text-sky-500 bg-gray-100 dark:bg-gray-600/30':
                                $route.name === submenu.route.name,
                            }"
                            @click.prevent="
                              () => {
                                handleMenuDropdownItemClick({
                                  topMenu: item.text,
                                  closeTop,
                                })
                                toggleOptions(false)
                              }
                            "
                          >
                            {{ submenu.text }}
                          </Anchor>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>
                <Anchor
                  v-if="item.type === 'link'"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                  class="hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"
                  @click.prevent="
                    () => {
                      removeActiveClass()
                      toggleOptions(false)
                    }
                  "
                  >{{ item.text }}</Anchor
                >
                <Button
                  v-else-if="item.type === 'button'"
                  :text="item.text"
                  size="xs"
                  class="font-extrabold capitalize !text-white font-medium"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                  @click="
                    () => {
                      removeActiveClass()
                      toggleOptions(false)
                    }
                  "
                />
              </li>
            </ul>
          </nav>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ $t('components.theme_switcher.change_theme') }}
          </div>
          <div class="mt-2">
            <ThemeSwitcher type="select-box" />
          </div>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ $t('components.language_switcher.change_language') }}
          </div>
          <!-- <div class="mt-2">
            <LanguageSwitcher type="select-box" />
          </div> -->
        </ActionSheetBody>
        <Button
          type="secondary"
          title="Github"
          href="https://github.com/Elitesolarcctv/elitesolar"
        >
          <IconMdi:github-face />
          <span class="ml-1">Github</span>
        </Button>
        <Button
          text="Close"
          type="secondary"
          @click.prevent="toggleOptions(false)"
        />
      </ActionSheet>
    </template>
  </BuilderNavbar>
</template>
