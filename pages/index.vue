<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const features = [
  {
    name: 'Reliable',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
    icon: 'ph:gear',
  },
  {
    name: 'Cost Effective',
    description:
      'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
    icon: 'mdi:lightning-bolt-outline',
  },
  {
    name: 'Low Impact',
    description:
      'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
    icon: 'mdi:chart-areaspline',
  },
]
const blogPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '6 min',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '4 min',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '11 min',
  },
]
const Email = ref()
</script>

<template>
  <PageWrapper class="flex-1 flex">
    <PageBody class="flex-1 flex">
      <main class="w-full">
        <PageSection
          class="flex-1 flex justify-center"
          section-class="px-0 w-full bg-gray-900"
        >
          <!-- <HomeHeroText /> -->
          <div class="pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
            <div class="mx-auto max-w-7xl lg:px-8">
              <div class="lg:grid lg:grid-cols-2 lg:gap-8">
                <div
                  class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left"
                >
                  <div class="lg:py-24">
                    <h1
                      class="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
                    >
                      <span class="block">The best solution for</span>
                      <span
                        class="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5"
                        >all your power problems</span
                      >
                    </h1>
                    <p
                      class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl"
                    >
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui Lorem cupidatat commodo. Elit sunt amet fugiat
                      veniam occaecat fugiat.
                    </p>
                    <div class="mt-10 sm:mt-12">
                      <form action="#" class="sm:mx-auto sm:max-w-xl lg:mx-0">
                        <div class="sm:flex items-center">
                          <div class="min-w-0 flex-1">
                            <label for="email" class="sr-only"
                              >Email address</label
                            >
                            <ClientOnly>
                              <FormTextInput
                                id="email"
                                v-model="Email"
                                type="email"
                                placeholder="Enter your email"
                                :input-class="'!py-3 w-full rounded-md border-0 text-base text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900'"
                              />
                            </ClientOnly>
                          </div>
                          <div class="mt-3 sm:mt-0 sm:ml-3">
                            <button
                              type="submit"
                              class="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                            >
                              Start free trial
                            </button>
                          </div>
                        </div>
                        <p class="mt-3 text-sm text-gray-300 sm:mt-4">
                          Start your free 14-day trial, no credit card
                          necessary. By providing your email, you agree to our
                          <a href="#" class="font-medium text-white"
                            >terms of service</a
                          >.
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                  <div
                    class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
                  >
                    <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                    <img
                      class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageSection>
        <PageSection
          class="text-center text-gray-500 dark:text-gray-400 p-12 mb-0 border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <div class="mx-auto max-w-screen-lg">
            <h1
              class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-6"
            >
              Elite Power Controls
            </h1>
            <p class="text-xl">
              We provide worldwide best Solar and UPS system in direct-drive
              Methodology. We create and install many power system related in
              industrial, commercial and residential projects with our research
              and development team. We provide world-class Solar products with
              proper installation.
            </p>
          </div>
        </PageSection>
        <PageSection
          class="text-gray-500 border-b md:border-b-0 dark:text-gray-400 p-12 mb-0 bg-gray-50 dark:bg-gray-900 text-lg border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <div class="w-full md:w-6/12 mb-4 md:mb-0">
            <h2
              class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-6 text-center md:text-left"
            >
              Solar Power Solutions
            </h2>
            <div class="space-y-4">
              <p>
                If your area is troubled with frequent power cuts, it's time you
                invest in off-grid PWM and MPPT Based solar system. It is a cost
                effective solution that lets you save extra solar energy in
                batteries to use during power cuts.
              </p>
              <p>
                It's time we think about our mother earth and switch to the
                non-conventional sources of energy such as solar energy, the
                energy received from the Sun - Free of Cost! Solar power is
                renewable, non-polluting and leaves no Green house gas and
                emissions. The energy output of a 1 KW solar energy unit is
                roughly equivalent to the burning of 170 pounds of coal and 300
                pounds of carbon dioxide being released into the atmosphere.
                Therefore, Solar power is the future.<br /><br />So Let's Take
                your desicion Right Now...
              </p>
              <p
                class="flex space-y-4 md:space-y-0 md:space-x-4 !mb-6 md:my-4 flex-col md:flex-row"
              >
                <Button size="xl" class="!text-white" text="For Commercial" />
                <Button
                  size="xl"
                  type="button"
                  class="!text-white"
                  text="For Residential"
                />
              </p>
            </div>
          </div>
          <div class="w-full md:w-5/12 rounded-2xl">
            <img
              class="rounded-2xl"
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2058&q=80"
              alt=""
            />
          </div>
        </PageSection>
        <PageSection
          class="text-gray-500 border-b md:border-b-0 dark:text-gray-400 p-12 mb-0 dark:bg-gray-900 flex flex-col md:flex-row justify-between text-lg items-center"
        >
          <div class="w-full order-1 md:order-2 md:w-6/12 mb-10 md:mb-0">
            <h2
              class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-6 text-center md:text-left"
            >
              Industrial Power Solutions
            </h2>
            <div class="space-y-4">
              <p>
                An eminent innovative, and technology-driven company specialises
                in UPS battery backup systems that can be used for a wide
                variety of applications, be it computer rooms or even large data
                hubs while offering top-notch industrial plant protection. Each
                product is propelled by an uninterruptible power supply or
                voltage conditioning technology for every situation- from
                minimum KW to applications of multiple MW and a considerable
                range of supply voltages.
              </p>
            </div>
          </div>
          <div class="w-full order-2 md:order-1 md:w-5/12 rounded-2xl">
            <img
              class="rounded-2xl"
              src="https://images.unsplash.com/photo-1509390288171-ce2088f7d08e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
        </PageSection>
        <PageSection
          class="text-gray-900 dark:text-light-400 border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <!-- Feature section with grid -->
          <div class="relative py-16 sm:py-24 lg:py-32">
            <div class="mx-auto px-4 text-center sm:px-6 lg:px-8">
              <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need for your power solutions
              </h2>
              <p class="mx-auto mt-5 max-w-prose text-xl text-gray-400">
                Phasellus lorem quam molestie id quisque diam aenean nulla in.
                Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                condimentum id viverra nulla.
              </p>
              <div class="mt-12">
                <div
                  class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                  <div
                    v-for="feature in features"
                    :key="feature.name"
                    class="pt-6"
                  >
                    <div
                      class="flow-root rounded-lg bg-gray-50 shadow-lg dark:bg-gray-800 px-6 pb-8 dark:text-gray-400"
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
                          class="mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-gray-300"
                        >
                          {{ feature.name }}
                        </h3>
                        <p class="mt-5 text-base">
                          {{ feature.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageSection>
        <PageSection
          class="text-gray-500 border-y lg:border-gray-900/10 dark:border-gray-50/[0.2] dark:text-gray-400 p-12 mb-0 dark:bg-gray-900 flex flex-col md:flex-row justify-between text-lg items-center"
        >
          <div class="w-full order-1 md:order-2 md:w-6/12 mb-10 md:mb-0">
            <h2
              class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-6 text-center md:text-left"
            >
              Why Solar Energy?
            </h2>
            <div class="space-y-4">
              <p>
                Solar energy does not emit toxic substances or contaminants into
                the air, which can be very damaging to the environment and to
                human beings. Unlike fossil fuels and nuclear power plants, wind
                energy has one of the lowest water-consumption footprints, which
                makes it a key for conserving hydrological resources.
              </p>
            </div>
          </div>
          <div class="w-full order-2 md:order-1 md:w-5/12 rounded-2xl">
            <img
              class="rounded-2xl"
              src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
              alt=""
            />
          </div>
        </PageSection>
        <PageSection
          class="bg-gradient-to-t md:bg-gradient-to-r from-gray-900 to-cyan-600 !md:my-16"
        >
          <!-- Testimonial section -->
          <div class="py-16 md:pb-16 md:pt-0 md:relative md:z-10 md:pb-0">
            <div
              class="md:mx-auto md:grid md:max-w-7xl md:grid-cols-3 md:gap-8 md:px-8"
            >
              <div class="relative md:-my-8">
                <!-- <div
                  aria-hidden="true"
                  class="absolute inset-x-0 top-0 h-1/2 bg-white md:hidden"
                /> -->
                <div
                  class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 md:h-full md:p-0"
                >
                  <div
                    class="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 md:aspect-none md:h-full"
                  >
                    <img
                      class="object-cover md:h-full md:w-full"
                      src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="mt-12 md:col-span-2 md:m-0 md:pl-8">
                <div
                  class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 md:max-w-none md:px-0 md:py-20"
                >
                  <blockquote>
                    <div>
                      <svg
                        class="h-12 w-12 text-white opacity-25"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path
                          d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                        />
                      </svg>
                      <p class="mt-6 text-2xl font-medium text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed urna nulla vitae laoreet augue. Amet feugiat est
                        integer dolor auctor adipiscing nunc urna, sit.
                      </p>
                    </div>
                    <footer class="mt-6">
                      <p class="text-base font-medium text-white">
                        Judith Black
                      </p>
                      <p class="text-base font-medium text-cyan-100">
                        CEO at PureInsights
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </PageSection>
        <PageSection
          class="text-gray-500 py-6 mb-0 md:py-10 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <!-- CTA Section -->
          <div class="relative">
            <div
              class="relative h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
            >
              <img
                class="h-full w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
                alt=""
              />
              <!-- <div
                aria-hidden="true"
                class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
              /> -->
            </div>
            <div
              class="relative mx-auto max-w-md px-4 py-4 md:py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32"
            >
              <div class="md:ml-auto md:w-1/2 md:pl-10">
                <h2
                  class="text-lg font-semibold text-gray-900 dark:text-gray-300"
                >
                  Award winning support
                </h2>
                <p
                  class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl"
                >
                  We're here to help
                </p>
                <p class="mt-3 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  egestas tempus tellus etiam sed. Quam a scelerisque amet
                  ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                  quisque ut interdum tincidunt duis.
                </p>
                <div class="mt-8">
                  <div class="inline-flex rounded-md shadow">
                    <a
                      href="#"
                      class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Visit the help center
                      <Icon
                        :icon="'fa-solid:external-link-alt'"
                        class="-mr-1 ml-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageSection>
      </main>
    </PageBody>
  </PageWrapper>
</template>
