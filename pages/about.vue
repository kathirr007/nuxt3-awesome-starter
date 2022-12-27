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
  title: capitalize(t('pages.about.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.about.description'),
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
const promos = [
  {
    name: 'Our Core Value',
    description: `These are the fundamental truths that the organization believes in and people respect and work towards. Core values also set the tone of the organisation's culture. The core value of our organisation is Leadership, Integrity, people Development and involvement, Agility, Passion for innovation and technology, Customer orientation & Responsible for corporate citizenship`,
    icon: 'material-symbols:credit-score-outline-rounded',
  },
  {
    name: 'Our Mission',
    description: `To outperform at market exceeding expectations of customers and industrialists through the accelerated evolution of people, processes and technologies in its journey towards excellence.`,
    icon: 'mdi:professional-hexagon',
  },
  {
    name: 'Our Vision',
    description: `To become a Global Power Solution company and respected by clients, known for innovative projects and solutions.`,
    icon: 'mingcute:safety-certificate-line',
  },
]
</script>

<template>
  <main class="w-full">
    <Banner
      banner-image="https://images.unsplash.com/photo-1574360773950-133867861ae9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    />
    <PageWrapper>
      <PageHeader>
        <PageTitle
          :text="$t('pages.about.title')"
          class="capitalize text-center py-8"
        />
      </PageHeader>
      <PageBody class="">
        <PageSection
          class="text-gray-500 dark:text-gray-400 pb-8 dark:bg-gray-900 flex flex-col md:flex-row justify-between text-lg items-center"
        >
          <div class="w-full mb-10 md:mb-0">
            <div class="w-full p-6 md:w-7/12 lg:w-6/12 float-right">
              <img
                class="rounded-2xl"
                src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
                alt=""
              />
            </div>
            <div class="space-y-4">
              <blockquote class="clear-both md:clear-none">
                <div class="relative text-lg font-medium md:flex-grow p-6">
                  <svg
                    class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                    />
                  </svg>
                  <p class="relative font-bold">
                    Our Strategies Of Powerful And Trustworthy Brand With A Wide
                    Range Of Innovative Products In The Power Backup, Home
                    Electrical And Residential Solar Space That Covers,
                    Inverters Batteries, Solar Solutions To Home Electricals
                    Offerings Such As Fans, Circuit Breakers And LED Lighting.
                  </p>
                </div>
              </blockquote>
              <p>
                Established in the year 2009, Armour Power Controls is one of
                the leading UPS manufacturer in the market. Ownership type of
                our firm is the Private Limited. The head office of our company
                is located in Coimbatore, Tamil Nadu. Reckoned as one of the
                emergent companies of the industry, we are extremely immersed in
                the manufacturing of Static inverter, Online UPS, Offline UPS,
                Servo Stabilizers, voltage stabilizers, power transformers,
                Solar home UPS, Solar industrial projects, Industrial UPS and
                batteries,Solar Street Light, Solar Fence, Solar Water Heater,
                Solar Water Pump and many more. Further, We are also providing
                Solar Panel Installation Service. We ensure to provide these
                products in given time frame. Under the direction of our
                Director, Mr. A. Alagesan, we are able to create a huge patron.
                Also, owing to his organizational skills and ethical business
                policies, we are able to achieve success.
              </p>
              <p>
                Under the direction of our Director, Mr. A. Alagesan, we are
                able to create a huge patron. Also, owing to his organizational
                skills and ethical business policies, we are able to achieve
                success.
              </p>
            </div>
          </div>
          <!-- <div class="w-full md:w-5/12 rounded-2xl">
            <img
              class="rounded-2xl"
              src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
              alt=""
            />
          </div> -->
        </PageSection>
        <PageSection section-class="px-0 mb-6" :container="false">
          <!-- Feature section with grid -->
          <Banner
            banner-image="https://images.unsplash.com/photo-1574360773950-133867861ae9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            parallax
          >
            <div class="relative w-10/12 py-8 sm:py-16 lg:py-24">
              <div class="mx-auto px-4 text-center sm:px-6 lg:px-8">
                <div
                  class="p-6 rounded-lg bg-opacity-85 dark:bg-opacity-85 dark:bg-gray-900 bg-white"
                >
                  <h2
                    class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                  >
                    Why Choose Us?
                  </h2>
                  <p
                    class="mx-auto mt-5 max-w-prose text-xl dark:text-gray-300 text-gray-900"
                  >
                    Phasellus lorem quam molestie id quisque diam aenean nulla
                    in. Accumsan in quis quis nunc, ullamcorper malesuada.
                    Eleifend condimentum id viverra nulla.
                  </p>
                  <div class="mt-12">
                    <div
                      class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    >
                      <div
                        v-for="feature in features"
                        :key="feature.name"
                        class="pt-6"
                      >
                        <div
                          class="flow-root rounded-lg bg-gray-50 shadow-lg dark:bg-gray-800 px-6 pb-6 dark:text-gray-400"
                        >
                          <div class="-mt-6">
                            <div>
                              <span
                                class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg"
                              >
                                <Icon
                                  class="h-6 w-6 text-white"
                                  :icon="feature.icon"
                                />
                              </span>
                            </div>
                            <h3
                              class="mt-4 text-lg font-medium tracking-tight text-gray-900 dark:text-gray-300"
                            >
                              {{ feature.name }}
                            </h3>
                            <!-- <p class="mt-5 text-base">
                              {{ feature.description }}
                            </p> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Banner>
        </PageSection>
        <PageSection section-class="px-0 mb-6 py-8">
          <!-- Feature section with grid -->
          <div class="">
            <div class="mx-auto px-6 lg:px-8">
              <div class="sm:text-center">
                <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                  A better solution for all your power problems
                </h2>
                <!-- <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  A better way to send money
                </p>
                <p class="mx-auto mt-6 max-w-2xl text-lg leading-8">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p> -->
              </div>

              <div class="mt-16 max-w-lg sm:mx-auto md:max-w-none">
                <div
                  class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16"
                >
                  <div
                    v-for="(promo, i) in promos"
                    :key="i + 1"
                    class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                  >
                    <div
                      class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 sm:shrink-0"
                    >
                      <Icon class="h-6 w-6 text-white" :icon="promo.icon" />
                    </div>
                    <div class="sm:min-w-0 sm:flex-1">
                      <p class="text-2xl font-semibold leading-8">
                        {{ promo.name }}
                      </p>
                      <p class="mt-2 text-base leading-7">
                        {{ promo.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageSection>
      </PageBody>
    </PageWrapper>
  </main>
</template>
