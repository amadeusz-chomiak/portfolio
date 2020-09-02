<template>
  <header class="flex items-center">
    <div class="mr-4 flex-shrink-0">
      <img class="rounded-full h-20" :src="headerPicture" :alt="headerAlt" />
    </div>
    <div>
      <h1 class="inline-flex flex-wrap items-baseline">
        <span
          class="font-bold text-3xl text-primary-500 block flex-shrink-0 mr-2"
          >{{ headerTitle }}</span
        >
        <span
          class="italic text-2xl text-opacity-75 text-primary-100 block flex-shrink-0"
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
    const header = computed(() => result.value?.Header)
    const headerPicture = useImage(header.value?.Image, 224)
    const headerAlt = computed(() => header.value?.Image?.Alt?.pl)

    const headerTitle = computed(() => header.value?.Title?.pl)
    const headerSubtitle = computed(() => header.value?.Subtitle?.pl)
    return { headerAlt, headerPicture, headerTitle, headerSubtitle }
  },
})
</script>
