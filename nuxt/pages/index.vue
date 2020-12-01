<template>
  <div
    class="max-h-full shadow-inner flex flex-col items-center md:items-start z-10 scroll scroll-smooth scroll-rounded-b-full scroll-wide lg-h:snap lg-h:snap-y lg-h:snap-proximity xl-h:snap-mandatory overflow-auto px-4 md:px-5 lg:px-6 xl:px-8"
  >
    <template v-if="pagesComponent">
      <article
        v-for="page in pagesComponent"
        :key="page.name"
        class="min-h-nuxt flex-shrink-0 pb-64 z-10 snap-start max-w-md flex flex-col"
        :class="
          page.column.set === 'only-first'
            ? ['lg:max-w-sm']
            : ['lg:max-w-lg', 'xl:max-w-3xl']
        "
      >
        <component :is="page.name" :observer="observer" :page="page.page" />
        <BaseButton
          v-if="page.link.target"
          class="mt-2 self-end transform lg:translate-x-1/2"
          :target="page.link.target"
          :content="page.link.content"
        />
      </article>
    </template>
    <div
      class="fixed inset-0 -z-10 flex justify-end md:left-auto md:opacity-75 md:right-0 md:w-2/3 xl:w-3/4"
    >
      <transition name="fade" mode="out-in">
        <img
          v-if="width.md"
          :key="image.src.value"
          class="opacity-25 filter-blur h-full object-cover md:opacity-75 md:filter-none xl:opacity-100"
          :src="image.src.value"
          :alt="image.alt"
        />
      </transition>
      <div
        class="hidden md:block absolute inset-0 bg-gradient-to-l from-transparent to-black"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  onUnmounted,
  ref,
  useContext,
  watch,
  onBeforeMount,
} from '@nuxtjs/composition-api'
import {
  useQuerySite,
  useImage,
  usePageIdTransformer,
} from '~/composable/useDatabase'
import { useAnalytics } from '~/composable/useAnalytics'
import SiteHero from '~/components/SiteHero.vue'
import SiteSolution from '~/components/SiteSolution.vue'
import SitePromotion from '~/components/SitePromotion.vue'
import SiteContact from '~/components/SiteContact.vue'
import { ColumnSettings } from '~/dev/databaseQuery'
import { useSize } from '~/composable/useMediaQuery'

export default defineComponent({
  components: {
    SiteHero,
    SiteSolution,
    SitePromotion,
    SiteContact,
  },
  setup() {
    const { route } = useContext()
    watch(route, (to, from) => {
      if (to.hash && from && from.name !== to.name) {
        const Target = document.querySelector(to.hash)
        Target?.scrollIntoView()
      }
    })
    onBeforeMount(() => {
      const { initAnalytics } = useAnalytics()
      initAnalytics()
    })

    const { result } = useQuerySite()
    const pages = computed(() => result.value?.pages)
    // const pages = computed(() =>
    //   result.value?.pages?.filter((page) => !page?.outside)
    // )
    const { toComponent, toPath } = usePageIdTransformer()
    const pagesComponent = computed(() =>
      pages.value?.map((page, index) => ({
        name: toComponent(page?.page?._id),
        page: page?.page,
        link: {
          content: page?.link?.pl,
          target: toPath(pages.value?.[index + 1]?.page?._id, true),
        },
        column: page?.page?.layout?.column as ColumnSettings,
      }))
    )
    const observer = ref<IntersectionObserver>()
    const intersectionKey = ref<string>()
    const image = computed(() => {
      const intersetionPage = pages.value?.find(
        (page) => toPath(page?.page?._id) === intersectionKey.value
      )
      const imageObject = computed(() => intersetionPage?.page?.image)
      return {
        src: useImage(imageObject),
        alt: imageObject.value?.alt?.pl,
      }
    })
    const { trackEvent, untractEvent } = useAnalytics()
    watch(intersectionKey, async (key) => {
      untractEvent('engagement')
      try {
        await trackEvent('engagement', { site: `${key}` }, 5000)
      } catch (error) {
        console.error(error)
      }
    })

    onMounted(() => {
      observer.value = new IntersectionObserver(
        (entries) => {
          const intersection = entries.find((entry) => entry.isIntersecting)
          const id = intersection?.target.getAttribute('id')
          if (id) intersectionKey.value = id
        },
        {
          root: document.querySelector('main'),
          rootMargin: '0px',
          threshold: 0.6,
        }
      )
    })

    onUnmounted(() => {
      observer.value?.disconnect()
    })

    const { width } = useSize()

    return {
      pagesComponent,
      observer,
      image,
      width,
    }
  },
})
</script>
