<template>
  <div>
    <BaseContent id="solution" :content="content" class="site-content" />
    <div class="flex flex-wrap">
      <BaseCard
        v-for="solution in solutions"
        :key="solution._id"
        small
        class="m-2 w-xs flex-grow"
      >
        <template #content>
          <BaseContent
            :level="3"
            class="text-primary-100"
            :content="solution.solution.content.pl"
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
  onMounted,
  watchEffect,
} from '@nuxtjs/composition-api'

import {
  useObserverProp,
  useObserverObserve,
  ObserverPropType,
} from '~/composable/useObserver'
interface Props extends ObserverPropType {
  page: { content: { pl: unknown; en: unknown }; solutions: unknown }
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
    useObserverObserve(props, 'solution')

    const content = computed(() => props.page.content.pl)
    const solutions = computed(() => props.page.solutions)
    return { content, solutions }
  },
})
</script>
