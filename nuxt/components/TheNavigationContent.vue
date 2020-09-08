<template>
  <div class="w-full flex-grow-0 flex-shrink-0 h-24">
    <div v-if="links">
      <template v-for="(link, index) in links">
        <BaseCard v-if="link.card" :key="index" background="circuit">
          <template #content>
            <BaseContent
              v-if="link.card.content"
              :content="link.card.content.pl"
            />
          </template>
          <template #action>
            <BaseButton :target="link.to || ''" :content="link.title" route />
          </template>
        </BaseCard>
        <BaseButton
          v-else
          :key="index"
          :target="link.to || ''"
          :content="link.title"
          route
          secondary
          class="mb-4"
          :slim="link.outside"
        />
      </template>
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
    const pages = computed(() => result.value?.pages)
    const links = computed(() =>
      pages.value?.map((page) => ({
        title: page?.title?.pl,
        to: page?.page?._id,
        card: page?.card,
        outside: page?.outside,
      }))
    )

    return { links }
  },
})
</script>
