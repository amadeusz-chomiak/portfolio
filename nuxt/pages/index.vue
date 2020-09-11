<template>
  <div class="max-h-full">
    <portal to="background-image"
      ><img
        class="opacity-25 filter-blur h-full object-cover md:opacity-75 md:filter-none"
        :src="image.src.value"
        :alt="image.alt"
      />
    </portal>
    <template v-if="pagesComponent">
      <component
        :is="page.name"
        v-for="page in pagesComponent"
        :key="page.name"
        :observer="observer"
        :page="page.page"
      />
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
export default defineComponent({
  components: {
    SiteHero,
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
          console.log('intersect', entries)
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
      console.log('new observer', observer.value)
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
