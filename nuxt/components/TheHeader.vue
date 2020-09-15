<template>
  <header class="flex items-center">
    <div class="mr-4 flex-shrink-0 rounded-full relative self-start">
      <img
        class="rounded-full h-12 md:h-14 lg:h-16"
        :src="headerPicture"
        :alt="headerAlt"
      />
      <div
        class="rounded-full absolute inset-0 bg-primary-600 blend-soft-light"
      />
    </div>
    <div>
      <h1 class="inline-flex flex-wrap items-baseline">
        <span
          class="font-medium md:font-bold text-lg md:text-2xl md:tracking-wide lg:text-3xl lg:tracking-wider text-primary-50 block md:flex-shrink-0 mr-2"
          >{{ headerTitle }}</span
        >
        <span
          class="font-light md:font-normal italic text-md md:text-xl lg:text-2xl lg:tracking-wide md:text-opacity-95 text-primary-100 block md:flex-shrink-0"
          >{{ headerSubtitle }}</span
        >
      </h1>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useQuerySite, useImage } from '~/composable/useDatabase'

export default defineComponent({
  setup() {
    const { result } = useQuerySite()
    const header = computed(() => result.value?.header)
    const headerPicture = useImage(header.value?.image, 224)
    const headerAlt = computed(() => header.value?.image?.alt?.pl)

    const headerTitle = computed(() => header.value?.title?.pl)
    const headerSubtitle = computed(() => header.value?.subtitle?.pl)
    return { headerAlt, headerPicture, headerTitle, headerSubtitle }
  },
})
</script>
