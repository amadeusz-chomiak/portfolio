<template>
  <div class="w-full flex-grow-0 flex-shrink-0 h-24">
    <div v-if="links">
      <BaseButton
        v-for="(link, index) in links"
        :key="index"
        :target="link.to || ''"
        :content="link.title"
        route
        secondary
        class="mb-4"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  defineComponent,
  computed,
} from '@nuxtjs/composition-api'
import { useQuerySite } from '~/composable/useDatabase'

export default defineComponent({
  setup() {
    const { result } = useQuerySite()
    const pages = computed(() => result.value?.Pages)
    const links = computed(() =>
      pages.value?.map((page) => ({
        title: page?.Title?.pl,
        to: page?.Page?._id,
      }))
    )

    return { links }
  },
})
</script>
