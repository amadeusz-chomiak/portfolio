<template>
  <div
    class="max-h-full scroll scroll-rounded-b-full scroll-wide snap snap-y snap-mandatory overflow-auto px-4 md:px-5 lg:px-6 xl:px-8"
  >
    <portal to="background-image"
      ><img
        class="opacity-25 filter-blur h-full object-cover md:opacity-75 md:filter-none"
        :src="image.src.value"
        :alt="image.alt"
      />
    </portal>
    <template v-if="pagesComponent">
      <article
        v-for="page in pagesComponent"
        :key="page.name"
        class="min-h-screen snap-start md:max-w-md lg:max-w-lg xl:max-w-4xl"
      >
        <component :is="page.name" :observer="observer" :page="page.page" />
      </article>
    </template>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  onUnmounted,
  ref,
} from '@nuxtjs/composition-api'
import { useQuerySite, useImage } from '~/composable/useDatabase'
import SiteHero from '~/components/SiteHero.vue'
import SiteSolution from '~/components/SiteSolution.vue'
export default defineComponent({
  components: {
    SiteHero,
    SiteSolution,
  },
  setup() {
    const { result } = useQuerySite()
    const pages = computed(() =>
      result.value?.pages?.filter((page) => !page?.outside)
    )
    const transformId = (id?: string) => id?.replace('page', 'Site')
    const pagesComponent = computed(() =>
      pages.value?.map((page) => ({
        name: transformId(page?.page?._id),
        page: page?.page,
      }))
    )
    const observer = ref<IntersectionObserver>()
    const intersectionKey = ref<string>()
    const image = computed(() => {
      const intersetionPage = pages.value?.find(
        (page) => transformId(page?.page?._id) === intersectionKey.value
      )
      const image = intersetionPage?.page?.image
      return {
        src: useImage(image),
        alt: image?.alt?.pl,
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
          threshold: 0.9,
        }
      )
    })

    onUnmounted(() => {
      observer.value?.disconnect()
    })

    return {
      pagesComponent,
      observer,
      image,
    }
  },
})
</script>
