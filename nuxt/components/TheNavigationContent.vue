<template>
  <div
    class="w-full h-24 flex-shrink-0 max-w-xs sm:max-w-sm md:max-w-xs xl:max-w-sm"
  >
    <template v-if="links">
      <template v-for="(link, index) in links">
        <BaseCard
          v-if="link.card"
          :key="index"
          background="circuit"
          class="transform -translate-x-10 mb-2 lg-h:mb-4 mx-2 md:transform-none"
        >
          <template #content>
            <BaseContent
              v-if="link.card.content"
              class="mr-10 md:mr-0"
              :content="link.card.content.pl"
            />
          </template>
          <template #action>
            <BaseButton
              :target="link.to || ''"
              class="mr-10 md:mr-0"
              :content="link.title"
              fill
            />
          </template>
        </BaseCard>
        <BaseButton
          v-else
          :key="index"
          :target="link.to || ''"
          :content="link.title"
          secondary
          fill
          :route="link.outside"
          :decenter="true"
          :class-inner="['md:justify-center']"
          class="mb-2 lg-h:mb-4"
          :slim="link.outside || !height.md"
        />
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useQuerySite, usePageIdTransformer } from '~/composable/useDatabase'
import { useSize } from '~/composable/useMediaQuery'

export default defineComponent({
  setup() {
    const { result } = useQuerySite()
    const { toPath } = usePageIdTransformer()
    const pages = computed(() => result.value?.pages)
    const links = computed(() =>
      pages.value?.map((page) => ({
        title: page?.title?.pl,
        to: toPath(page?.page?._id, !page?.outside),
        card: page?.card,
        outside: page?.outside,
      }))
    )

    const { height } = useSize()

    return { links, height }
  },
})
</script>
