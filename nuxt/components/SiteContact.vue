<template>
  <div>
    <BaseContent id="contact" :content="content" class="site-content" />
    <form>
      <BaseInput
        v-model="email"
        title="Podaj e-mail kontaktowy"
        placeholder="przykładowy@poczta.com"
        type="email"
      />
    </form>
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
    useObserverObserve(props, 'contact')

    const content = computed(() => props.page.content.pl)
    const email = ref('')
    return { content, email }
  },
})
</script>
