<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()
const screenSizes = defaultScreenConfig
const selectedTags = ref([])
const tagBtnClass =
  'cursor-pointer border transition-color duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6] flex items-center justify-center font-semibold text-gray-200 dark:text-gray-900 dark:border-sky-800 border-gray-900 py-1 px-4 text-base rounded !text-gray-200 !font-medium capitalize'

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.gallery.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.gallery.description'),
    },
  ],
}))

const searchExpression = computed(() => {
  const allTagsString = selectedTags.value.join(' ')
  return selectedTags.value.length ? `tags:${allTagsString}` : ''
})

const { getAllImages, getFolders, getAllTags, getPosts } = useGallery()

/* onMounted(async () => {
  const { resources: images } = await getAllImages({
    expression: '',
  })
  galleryImages.value = images
  allTags.value = await getAllTags()
}) */

const {
  data: galleryImages,
  pending: fetchingImages,
  error: fetchingImagesError,
  refresh,
} = useAsyncData(
  'get-all-images',
  async () => {
    let response: any
    try {
      response = await getAllImages({
        expression: searchExpression.value ? searchExpression.value : '',
      })
    } catch (error) {}
    return response
  },
  {
    watch: [selectedTags],
  }
)

const {
  data: allTags,
  pending: fetchingTags,
  error: fetchingTagsError,
} = useAsyncData('get-all-tags', async () => {
  let response: any
  try {
    response = await getAllTags()
  } catch (error) {}
  return response
})

const isTagSelected = (tag: any): boolean => {
  return selectedTags.value.join().includes(tag)
}
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.gallery.title')" class="capitalize mt-6" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div class="w-full">
          <ClientOnly>
            <div class="text-center">
              <fieldset class="space-y-5">
                <div v-if="fetchingTags" class="text-center w-full">
                  Fetching all tags from cloudinary please wait...
                  <div class="text-center">
                    <Spinner :width-class="'w-[3rem]'" />
                  </div>
                </div>
                <template v-if="allTags?.tags.length > 0">
                  <!-- <legend class="text-2xl">Tags</legend> -->
                  <div class="flex items-center justify-center">
                    Filter by Tags:
                  </div>
                  <div class="gallery-tags !my-4">
                    <div
                      v-for="(tag, index) in allTags?.tags"
                      :key="index"
                      class=""
                    >
                      <input
                        :id="`${tag}-${index + 1}`"
                        v-model="selectedTags"
                        :name="tag"
                        type="checkbox"
                        :value="tag"
                        class="sr-only"
                      />
                      <label
                        :for="`${tag}-${index + 1}`"
                        class="capitalize"
                        :class="[
                          tagBtnClass,
                          isTagSelected(tag)
                            ? 'dark:bg-sky-600 bg-gray-900'
                            : 'bg-gray-700 dark:bg-sky-800',
                        ]"
                        >{{ tag }}</label
                      >
                    </div>
                    <div v-if="selectedTags.length">
                      <Button
                        text="Clear all tags"
                        class="block ml-2 !bg-red-700 hover:!bg-red-800 !border-red-700 !text-white"
                        @click.prevent="selectedTags = []"
                      />
                    </div>
                  </div>
                </template>
                <div v-if="fetchingTagsError" class="text-center w-full">
                  There is some error while fetching all the tags available.
                </div>
              </fieldset>
            </div>
            <div v-if="fetchingImages" class="text-center w-full">
              Fetching images from cloudinary please wait...
              <div class="text-center">
                <Spinner :width-class="'w-[3rem]'" />
              </div>
            </div>
            <div v-else-if="fetchingImagesError" class="text-center w-full">
              There is some error while fetching the images.
            </div>
            <div v-else v-viewer class="v-gallery">
              <div
                v-for="item in galleryImages.resources"
                :key="item.asset_id"
                class="v-gallery-item"
              >
                <div class="bgbox">
                  <span class="dark-overlay hidden lg:block"></span>
                  <img
                    v-if="item.resource_type === 'image'"
                    alt=""
                    :src="item.url"
                  />
                  <video v-else controls>
                    <!-- <source src="myVideo.webm" type="video/webm" /> -->
                    <source :src="item.url" :type="`video/${item.format}`" />
                    <!-- <p>
                      Your browser doesn't support HTML video. Here is a
                      <a :href="item.url">link to the video</a> instead.
                    </p> -->
                  </video>
                </div>
              </div>
            </div>
          </ClientOnly>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style scoped lang="scss">
img,
video {
  width: 100%;
  height: auto;
  object-fit: cover;
}
// $primary: teal;
.gallery-tags {
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, max-content));
  // grid-template-rows: repeat(8, 8vw);
  grid-auto-flow: dense;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(3, minmax(min-content, max-content));
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(5, minmax(min-content, max-content));
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(8, minmax(min-content, max-content));
  }
}
.v-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // grid-template-rows: repeat(8, 8vw);
  grid-auto-flow: dense;
  gap: 1rem;
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(8, 1fr);
  }

  .v-gallery-item {
    cursor: pointer;
    &:is(:nth-child(2n), :nth-child(3n)) {
      grid-column: span 2;
      grid-row: span 2;
    }
    display: inline-block;
    // margin: 5px;
    border-radius: 5px;
    z-index: 1;
    position: relative;
    transition: all 0.3s ease-in-out;
    .bgbox {
      position: relative;
      height: 100%;
      width: 100%;
      img,
      video {
        border-radius: 3px;
        display: block;
        padding: 0;
        border: 2px solid teal;
        height: 100%;
      }
      .dark-overlay {
        background-color: rgba(0, 0, 0, 0.25);
        opacity: 1;
        position: absolute;
        border-radius: 5px;
        -webkit-transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        -ms-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
    &:hover {
      // box-shadow: 1px 2px 3px darkgrey;
      transform: scale3d(1.2, 1.2, 1);
      z-index: 2;
      // background: $primary;
      @media screen and (max-width: 900px) {
        transform: scale3d(1.1, 1.1, 1);
      }
      @media screen and (max-width: 600px) {
        transform: scale3d(1, 1, 1);
      }
      img {
        transition: all 0.3s ease-in-out;
        z-index: 2;
        border-radius: 5px;
        border: 4px solid darkcyan;
      }
      .dark-overlay {
        opacity: 0;
        z-index: 0;
        // display: none;
        transform: scale3d(0, 0, 0);
        // transform: translateY(100%);
      }
    }
  }
}
</style>
