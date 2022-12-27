<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { useCounter } from '~/stores/counter'
import { useIdentity } from '~/stores/identity'
import { capitalize } from '~/utils/str'
import { Size } from '~/composables/useScreen'

// composable
const { t } = useLang()
const screen = useScreen()

// compiler macro
// definePageMeta({
//   layout: 'page',
// })
useHead(() => ({
  title: capitalize(t('pages.services.pageTitle')),
  meta: [
    {
      name: 'description',
      content: t('pages.services.description'),
    },
  ],
}))

const counter = useCounter()
const identity = useIdentity()

const features = [
  {
    name: 'Experience',
    description: '',
    icon: 'grommet-icons:user-expert',
  },
  {
    name: 'Professional',
    description: '',
    icon: 'mdi:professional-hexagon',
  },
  {
    name: 'Safety',
    description: '',
    icon: 'mingcute:safety-certificate-line',
  },
  {
    name: 'Sustainability',
    description: '',
    icon: 'fa6-solid:hand-holding-droplet',
  },
  {
    name: 'Integrity',
    description: '',
    icon: 'mdi:diamond-stone',
  },
  {
    name: 'Reliable',
    description: '',
    icon: 'material-symbols:check-box-outline',
  },
  {
    name: 'Great Managment',
    description: '',
    icon: 'mdi:lightning-bolt-outline',
  },
  {
    name: 'Innovation',
    description: '',
    icon: 'teenyicons:bulb-on-outline',
  },
]
const services = [
  {
    id: 1,
    name: 'Organize Basic Set (Walnut)',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Organize Pen Holder',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Organize Sticky Note Holder',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'Organize Phone Holder',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 5,
    name: 'Machined Pen',
    color: 'Black',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  // More products...
]
</script>

<template>
  <main class="w-full">
    <Banner
      banner-image="https://res.cloudinary.com/nuxt-kathir-bnb/image/upload/v1671458859/elite/servicess111_utqvfx.jpg"
    />
    <PageWrapper>
      <PageHeader>
        <PageTitle
          :text="$t('pages.services.title')"
          class="capitalize text-center mt-2 py-4 sm:py-8"
        />
      </PageHeader>
      <PageBody class="">
        <PageSection
          class="pb-8 dark:bg-gray-900 flex flex-col md:flex-row justify-between text-lg items-center"
        >
          <div class="w-full mb-10 md:mb-0">
            <h2
              class="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left"
            >
              All Kinds of Branded UPS Service Solutions

              <div class="w-full p-6 md:w-7/12 lg:w-6/12 float-right">
                <img
                  class="rounded-2xl"
                  src="https://res.cloudinary.com/nuxt-kathir-bnb/image/upload/v1671459499/elite/photo-sm-a_uos0at.jpg"
                  alt=""
                />
              </div>
            </h2>
            <div class="space-y-4 text-justify">
              <p>
                Doorstep Inverter and UPS Repair in Theni and sorroundings.
                well-known for providing the effective inverter installation,
                repair and maintenance services in Coimbatore and the
                surrounding areas. Our proficient team workers will analyse all
                the issues related to your inverter and gives you an
                understanding about damage parts as well as fix it
              </p>
              <p>
                Having Problem With Your Inverter - Battery - Ups If you are
                looking service or Repair at your home or business, we work with
                you to schedule a service call that's as quick and convenient as
                possible. Once your service call is scheduled, we'll be at your
                front door on time and ready to work.So you can get your product
                fixed in any part of the Coimbatore Our Engineer Would reach
                your place with on Time.
              </p>
              <p>
                Call us for 24*7 Ups Service in Coimbatore. We provide sensibly
                priced ups services for All Type inverter and multiple other
                types of ups battery systems.<br />
                We are accessible to book practised ups service in Coimbatore.
              </p>
            </div>
          </div>
          <!-- <div class="w-full md:w-5/12 rounded-2xl">
            <img
              class="rounded-2xl"
              src="https://res.cloudinary.com/nuxt-kathir-bnb/image/upload/v1671459499/elite/photo-sm-a_uos0at.jpg"
              alt=""
            />
          </div> -->
        </PageSection>
        <PageSection
          section-class="px-0 mb-6 border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <div class="w-full py-8 px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl md:text-4xl text-center md:text-left font-bold">
              Other services we provide
            </h2>
            <div
              class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              <div v-for="service in services" :key="service.id">
                <div class="relative">
                  <div class="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      :src="service.imageSrc"
                      :alt="service.imageAlt"
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div class="relative mt-4">
                    <h3 class="text-lg font-medium">
                      {{ service.name }}
                    </h3>
                    <!-- <p class="mt-1 text-sm">
                      {{ service.color }}
                    </p> -->
                  </div>
                  <div
                    class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4 hover:bg-black hover:bg-opacity-50 transition duration-500 ease-in-out cursor-pointer"
                  >
                    <!-- <div
                      aria-hidden="true"
                      class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    /> -->
                    <!-- <p class="relative text-lg font-semibold text-white">
                      {{ service.price }}
                    </p> -->
                  </div>
                </div>
                <div class="mt-4">
                  <Button
                    :to="service.href"
                    class="!text-gray-200 !font-medium capitalize"
                    >Get a free quote<span class="sr-only"
                      >, {{ service.name }}</span
                    ></Button
                  >
                </div>
              </div>
            </div>
          </div>
        </PageSection>
      </PageBody>
    </PageWrapper>
  </main>
</template>
