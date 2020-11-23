<template>
  <div>
    <BaseContent id="contact" :content="content" class="site-content" />
    <div class="flex flex-col ml-3">
      <BaseButton
        type="submit"
        content="Napisz do mnie e-mail"
        class="mt-2 self-end transform lg:translate-x-1/2"
        data-testid="contact-form-submit"
        @click="submit"
      />
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

import { firestore } from '~/composable/useFirebase'
import { useStore } from '~/composable/useStore'
import { useMail } from '~/composable/useMail'
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

    const { send } = useMail('cooperationRequestPL')

    const submit = () => {
      send()
    }
    return { content, email, description, submit, setValid, valid, request }
  },
})
</script>
