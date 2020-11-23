<template>
  <div class="bg-black flex flex-col h-screen relative">
    <div
      class="m-4 md-h:mt-8 md-h:mb-5 md:mx-8 lg-h:mt-10 lg-h:mb-6 lg:mx-10 xl-h:mt-12 xl-h:mb-8 xl:mx-12 z-40"
    >
      <TheHeader />
    </div>
    <div class="flex flex-col-reverse md:flex-row overflow-auto h-full">
      <div
        class="md:ml-5 z-40 lg:ml-6 xl:ml-8 overflow-auto scroll-thin scroll-rounded-full scroll-hide hover:scroll"
      >
        <TheNavigation />
      </div>
      <main
        class="max-h-full relative z-0 flex-1 overflow-auto md:mt-8 lg:mt-10 xl:mt-12"
      >
        <Nuxt />
      </main>
    </div>
    <LazyModalScreen
      :show="cooperationState.showModal"
      title="Mam nadzieję, że udało Ci się wysłać wiadomość"
      data-testid="contact-form-modal"
      @close="cooperationSet('showModal', false)"
    >
      <div class="flex flex-col w-md mb-4 sm:mb-0 sm:mr-4">
        <p class="text-primary-100 flex-1 2xl:text-lg">
          <span>Jeśli wystąpił jakikolwiek problem spróbuj ponownie</span>
          <BaseButton
            content="Spróbuj wysłać jeszcze raz"
            fill
            slim
            secondary
            class="mb-4"
            @click="mail.send()"
          />
          <span>lub wyślij maila na</span>
          <BaseClipboard :content="mail.to" class="mb-2 mt-1" />
          <span>Skopiuj wzór treści maila dla maksymalnej wygody</span>
          <BaseClipboard :content="mail.body" :rows="3" class="mt-1" />
        </p>
      </div>
    </LazyModalScreen>
  </div>
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
