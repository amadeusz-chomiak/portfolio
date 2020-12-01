<template>
  <ModalScreen
    :show="cooperationState.showModal"
    :title="
      cooperationState.manual
        ? 'Kontakt'
        : 'Mam nadzieję, że udało Ci się wysłać wiadomość'
    "
    @close="cooperationSet('showModal', false)"
  >
    <div
      class="flex flex-col sm:w-md mb-4 sm:mb-0 sm:mr-4"
      data-testid="contact-form-modal"
    >
      <p class="text-primary-100 flex-1 2xl:text-lg">
        <span v-if="!cooperationState.manual"
          >Jeśli wystąpił jakikolwiek problem spróbuj ponownie</span
        >
        <BaseButton
          v-if="!cooperationState.manual"
          content="Spróbuj wysłać jeszcze raz"
          fill
          slim
          secondary
          class="mb-4"
          @click="mail.send()"
        />
        <span
          >{{
            cooperationState.manual
              ? 'Wyślij e-mail na'
              : 'lub wyślij e-mail na'
          }}
        </span>
        <BaseClipboard :content="mail.to" class="mb-2 mt-1" />
        <span>Skopiuj wzór treści e-maila dla maksymalnej wygody</span>
        <BaseClipboard :content="mail.body" :rows="3" class="mt-1" />
      </p>
    </div>
  </ModalScreen>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useStore } from '@/composable/useStore'
import { useMail } from '~/composable/useMail'
export default defineComponent({
  setup() {
    const {
      state: cooperationState,
      set: cooperationSet,
    } = useStore.requestCooperation

    const mail = useMail('cooperationRequestPL')
    return {
      cooperationState,
      cooperationSet,
      mail,
    }
  },
})
</script>
