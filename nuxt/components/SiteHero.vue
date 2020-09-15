<template>
  <BaseContent id="hero" :content="content" class="site-content" />
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
  page: { content: { pl: unknown; en: unknown } }
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
    useObserverObserve(props, 'hero')

    const content = computed(() => props.page.content.pl)
    return { content }
  },
})
</script>
