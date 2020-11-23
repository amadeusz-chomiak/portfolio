<template>
  <div>
    <BaseContent id="solution" :content="content" class="site-content" />
    <div class="flex flex-wrap">
      <BaseCard
        v-for="(solution, index) in solutions"
        :key="solution._id"
        small
        class="m-2 sm:w-xs flex-grow"
      >
        <template #content>
          <BaseContent
            :level="3"
            class="text-primary-100"
            :link-as-button="index === 0"
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
