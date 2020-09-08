<template>
  <div class="w-full flex-grow-0 flex-shrink-0 h-24">
    <div v-if="links">
      <template v-for="(link, index) in links">
        <BaseCard v-if="link.card" :key="index" background="circuit">
          <template #content>
            <BaseContent :content="link.card.Content.pl" />
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
          :slim="index === links.length - 1"
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
    const pages = computed(() => result.value?.Pages)
    const links = computed(() =>
      pages.value?.map((page) => ({
        title: page?.Title?.pl,
        to: page?.Page?._id,
        card: page?.Card,
      }))
    )

    return { links }
  },
})
</script>
