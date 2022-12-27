<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { useField, useForm } from 'vee-validate'
import { useToast } from 'vue-toastification/dist/index.mjs'
import { useCounter } from '~/stores/counter'
import { useIdentity } from '~/stores/identity'
import { capitalize } from '~/utils/str'
import { ContactFormSchema } from '~~/types/contact.type'
import ToastMessage from '@/components/ToastMessage.vue'

// composable
const { t } = useLang()
const screen = useScreen()
const { social, app } = useAppData()
const { sendContactForm, getForm } = useContact()
const toast = useToast()
const {
  handleSubmit,
  resetForm,
  meta,
  errors,
  values,
  validate,
  validateField,
} = useForm({
  validationSchema: ContactFormSchema,
})

const { value: name } = useField<string>('name')
const { value: email } = useField<string>('email')
const { value: phone } = useField<string>('phone')
const { value: message } = useField<string>('message')

const form = reactive({
  name,
  email,
  phone,
  message,
})

userContactForm().value = { ...form }

useHead(() => ({
  title: capitalize(t('pages.services.pageTitle')),
  meta: [
    {
      name: 'description',
      content: t('pages.services.description'),
    },
  ],
}))

const userContactRef = ref()
const toastMessage = {
  component: ToastMessage,
  props: { name: `${name.value}` },
}

const onSubmit = handleSubmit(async (values) => {
  const renderedEmail = userContactRef.value.$el.innerHTML
  await sendContactForm({ ...values, appName: app.name }, renderedEmail)
  toast(toastMessage)
  resetForm()
})
</script>

<template>
  <main class="w-full">
    <!-- <Banner
      banner-image="https://res.cloudinary.com/nuxt-kathir-bnb/image/upload/v1671458859/elite/servicess111_utqvfx.jpg"
    /> -->
    <PageWrapper>
      <PageHeader>
        <PageTitle
          :text="$t('pages.contact.title')"
          class="capitalize text-center mt-2 py-4 sm:py-8"
        />
      </PageHeader>
      <PageBody class="">
        <PageSection
          class="pb-8 dark:bg-gray-900 flex flex-col md:flex-row justify-between text-lg items-center"
        >
          <main class="overflow-hidden">
            <!-- Header -->
            <div class="relative z-10 mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
                Get in touch
              </h1>
              <p class="mt-6 max-w-3xl text-xl">
                Vel nunc non ut montes, viverra tempor. Proin lectus nibh
                phasellus morbi non morbi. In elementum urna ut volutpat.
                Sagittis et vel et fermentum amet consequat.
              </p>
            </div>

            <!-- Contact section -->
            <section class="relative mt-10" aria-labelledby="contact-heading">
              <div class="absolute h-1/2 w-full" aria-hidden="true" />
              <!-- Decorative dot pattern -->
              <div class="relative mx-auto px-4 sm:px-6 lg:px-8">
                <svg
                  class="absolute top-0 right-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
                  width="404"
                  height="384"
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        class="text-warm-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="404"
                    height="384"
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div class="mx-auto p-4 sm:p-8">
                <div class="relative bg-gray-50 filter drop-shadow-lg">
                  <h2 id="contact-heading" class="sr-only">Contact us</h2>

                  <div class="grid grid-cols-1 lg:grid-cols-3">
                    <!-- Contact information -->
                    <div
                      class="relative overflow-hidden bg-gradient-to-b from-sky-700 to-sky-900 py-10 px-6 sm:px-10 xl:p-12"
                    >
                      <!-- Decorative angle backgrounds -->
                      <div
                        class="pointer-events-none absolute inset-0 sm:hidden"
                        aria-hidden="true"
                      >
                        <svg
                          class="absolute inset-0 h-full w-full"
                          width="343"
                          height="388"
                          viewBox="0 0 343 388"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                            fill="url(#linear1)"
                            fill-opacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear1"
                              x1="254.553"
                              y1="107.554"
                              x2="961.66"
                              y2="814.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#fff" />
                              <stop
                                offset="1"
                                stop-color="#fff"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div
                        class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                        aria-hidden="true"
                      >
                        <svg
                          class="absolute inset-0 h-full w-full"
                          width="359"
                          height="339"
                          viewBox="0 0 359 339"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                            fill="url(#linear2)"
                            fill-opacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear2"
                              x1="192.553"
                              y1="28.553"
                              x2="899.66"
                              y2="735.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#fff" />
                              <stop
                                offset="1"
                                stop-color="#fff"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div
                        class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                        aria-hidden="true"
                      >
                        <svg
                          class="absolute inset-0 h-full w-full"
                          width="160"
                          height="678"
                          viewBox="0 0 160 678"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                            fill="url(#linear3)"
                            fill-opacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear3"
                              x1="192.553"
                              y1="325.553"
                              x2="899.66"
                              y2="1032.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#fff" />
                              <stop
                                offset="1"
                                stop-color="#fff"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <h3 class="text-lg font-medium text-white">
                        Contact information
                      </h3>
                      <p class="mt-6 max-w-3xl text-base text-sky-50">
                        Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                        volutpat massa dictumst amet. Sapien tortor lacus arcu.
                      </p>
                      <dl class="mt-8 space-y-6">
                        <dt><span class="sr-only">Phone number</span></dt>
                        <dd class="flex text-base text-sky-50">
                          <IconFaSolid:phone-alt
                            class="h-6 w-6 flex-shrink-0 text-sky-200"
                          />
                          <span class="ml-3">+1 (555) 123-4567</span>
                        </dd>
                        <dt><span class="sr-only">Email</span></dt>
                        <dd class="flex text-base text-sky-50">
                          <IconFaSolid:envelope
                            class="h-6 w-6 flex-shrink-0 text-sky-200"
                          />
                          <span class="ml-3">support@workcation.com</span>
                        </dd>
                      </dl>
                      <div class="flex space-x-6 mt-6">
                        <a
                          v-for="item in social"
                          :key="item.name"
                          v-tooltip="item.name"
                          :href="item.href"
                          class="text-sky-200 hover:text-sky-100"
                        >
                          <span class="sr-only">{{ item.name }}</span>
                          <Icon
                            :icon="item.icon"
                            class="h-6 w-6"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>

                    <!-- Contact form -->
                    <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                      <h3 class="text-lg font-medium text-warm-gray-900">
                        Send us a message
                      </h3>
                      <ClientOnly>
                        <form
                          class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                          @submit.prevent="onSubmit"
                        >
                          <div>
                            <label
                              for="name"
                              class="block text-sm font-medium text-warm-gray-900"
                              >Name
                              <span id="phone-optional" class="text-red-600">
                                *
                              </span>
                            </label>

                            <div class="mt-1">
                              <input
                                id="name"
                                v-model="name"
                                type="text"
                                name="name"
                                autocomplete="given-name"
                                class="block w-full rounded-md border border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-500 focus:ring-sky-500 focus:outline-none focus:ring-2 transition duration-500"
                                @blur="validateField('name')"
                              />
                              <transition mode="out-in" name="field-slide-down">
                                <FormFeedbackMessage
                                  :success-class="'font-medium'"
                                  :errors="errors"
                                  :values="values"
                                  :feedback="false"
                                  :error-key="'name'"
                                />
                              </transition>
                            </div>
                          </div>
                          <div>
                            <div class="flex justify-between">
                              <label
                                for="phone"
                                class="block text-sm font-medium text-warm-gray-900"
                                >Phone
                                <span id="phone-optional" class="text-red-600">
                                  *
                                </span>
                              </label>
                            </div>
                            <div class="mt-1">
                              <input
                                id="phone"
                                v-model="phone"
                                type="text"
                                name="phone"
                                autocomplete="tel"
                                class="block w-full rounded-md border border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-500 focus:ring-sky-500 focus:outline-none focus:ring-2 transition duration-500"
                                aria-describedby="phone-optional"
                                @blur="validateField('phone')"
                              />
                              <transition mode="out-in" name="field-slide-down">
                                <FormFeedbackMessage
                                  :success-class="'font-medium'"
                                  :errors="errors"
                                  :values="values"
                                  :feedback="false"
                                  :error-key="'phone'"
                                />
                              </transition>
                            </div>
                          </div>
                          <div class="sm:col-span-2">
                            <label
                              for="email"
                              class="block text-sm font-medium text-warm-gray-900"
                              >Email
                              <span id="phone-optional" class="text-red-600">
                                *
                              </span>
                            </label>
                            <div class="mt-1">
                              <input
                                id="email"
                                v-model="email"
                                name="email"
                                type="email"
                                autocomplete="email"
                                class="block w-full rounded-md border border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-500 focus:ring-sky-500 focus:outline-none focus:ring-2 transition duration-500"
                                @blur="validateField('email')"
                              />
                              <transition mode="out-in" name="field-slide-down">
                                <FormFeedbackMessage
                                  :success-class="'font-medium'"
                                  :errors="errors"
                                  :values="values"
                                  :feedback="false"
                                  :error-key="'email'"
                                />
                              </transition>
                            </div>
                          </div>
                          <div class="sm:col-span-2">
                            <div class="flex justify-between">
                              <label
                                for="message"
                                class="block text-sm font-medium text-warm-gray-900"
                                >Message
                                <span id="subject" class="text-red-600">
                                  *
                                </span>
                              </label>
                              <span
                                id="message-max"
                                class="text-sm text-warm-gray-500"
                                >Max. 500 characters</span
                              >
                            </div>
                            <div class="mt-1">
                              <textarea
                                id="message"
                                v-model="message"
                                name="message"
                                rows="4"
                                class="block w-full rounded-md border border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-500 focus:ring-sky-500 focus:outline-none focus:ring-2 transition duration-500 text-base"
                                aria-describedby="message-max"
                                placeholder="Services You Interested / Which Kind of Product are you looking for... / Tell about your Power Problems*"
                                @blur="validateField('message')"
                              />
                              <transition mode="out-in" name="field-slide-down">
                                <FormFeedbackMessage
                                  :success-class="'font-medium'"
                                  :errors="errors"
                                  :values="values"
                                  :feedback="false"
                                  :error-key="'message'"
                                />
                              </transition>
                            </div>
                          </div>
                          <div class="sm:col-span-2 sm:flex sm:justify-end">
                            <button
                              type="submit"
                              class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-sky-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 transition duration-500 focus:ring-sky-500 focus:ring-offset-2 sm:w-auto"
                              :disabled="!meta.valid"
                              :class="{
                                'pointer-events-none opacity-30 select-none':
                                  !meta.valid,
                              }"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </ClientOnly>
                      <div id="user-contact" class="user-contact">
                        <EmailsUserContact
                          ref="userContactRef"
                          :form="values"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </PageSection>
      </PageBody>
    </PageWrapper>
  </main>
</template>
