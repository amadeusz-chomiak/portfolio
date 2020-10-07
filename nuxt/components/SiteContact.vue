<template>
  <div>
    <BaseContent id="contact" :content="content" class="site-content" />
    <form @submit.prevent="submit">
      <BaseInput
        v-model="email"
        title="Podaj e-mail kontaktowy"
        placeholder="przykładowy.email@poczta.com"
        type="email"
        class="mb-4"
        required="jest wymagany"
        @validation="setValid"
      />
      <BaseTextarea
        v-model="description"
        title="Opisz czego potrzebujesz"
        placeholder="Potrzebuję strony dla transkrypcji mojego podcastu o gotowaniu i umieszczania przepisów premium"
      />
      <BaseButton
        type="submit"
        content="Rozpocznijmy współpracę"
        :disabled="valid"
        @click="submit"
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
    const description = ref('')
    // TODO submit to firebase
    const submit = () => console.log('submit', email.value, description.value)
    const valid = ref(false)
    const setValid = (payload: undefined | string) =>
      (valid.value = payload !== undefined)
    return { content, email, description, submit, setValid, valid }
  },
})
</script>
