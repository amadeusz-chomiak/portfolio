<template>
  <div>
    <BaseContent id="promotion" :content="content" class="site-content" />
    <div>
      <BaseCard
        v-for="promotion in promotions"
        :key="promotion._id"
        class="m-2"
      >
        <template #content>
          <BaseContent
            class="text-primary-100"
            :content="promotion.promotion.content.pl"
          />
        </template>
      </BaseCard>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  computed,
  defineComponent,
} from '@nuxtjs/composition-api'

import {
  useObserverProp,
  useObserverObserve,
  ObserverPropType,
} from '~/composable/useObserver'
interface Props extends ObserverPropType {
  page: { content: { pl: unknown; en: unknown }; promotions: unknown }
}

export default defineComponent<Props>({
  props: {
    ...useObserverProp(),
    page: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    useObserverObserve(props, 'promotion')

    const content = computed(() => props.page.content.pl)
    const promotions = computed(() => props.page.promotions)

    return { content, promotions }
  },
})
</script>
