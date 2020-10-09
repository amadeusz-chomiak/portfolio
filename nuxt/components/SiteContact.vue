<template>
  <div>
    <BaseContent id="contact" :content="content" class="site-content" />
    <form class="flex flex-col ml-3" @submit.prevent="submit">
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
        :content="request.adding.value ? 'wysyłam' : 'Rozpocznijmy współpracę'"
        :disabled="!valid || request.adding.value"
        class="mt-2 self-end transform lg:translate-x-1/2"
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

import { firestore } from '~/composable/useFirebase'
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

    const request = firestore().useAddCooperationRequest()
    const valid = ref(false)
    const setValid = (payload: undefined | string) =>
      (valid.value = payload === undefined)
    const submit = async () => {
      console.log('submit', valid.value)
      if (valid.value)
        await request.add({ email: email.value, request: description.value })
    }
    return { content, email, description, submit, setValid, valid, request }
  },
})
</script>
