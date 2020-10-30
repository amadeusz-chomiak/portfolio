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
    <ModalScreen
      :show="cooperationState.showModal"
      title="Otrzymałem Twoją wiadomość."
      data-testid="contact-form-modal"
      @close="cooperationSet('showModal', false)"
    >
      <div class="flex flex-col w-md mb-4 sm:mb-0 sm:mr-4">
        <p class="text-primary-100 flex-1 2xl:text-lg">
          <span class="text-primary-50"
            >Jest mi niezmiernie miło, stać się częścią Twojego sukcesu!</span
          ><br />
          W ciągu kilku najbliższych dni otrzymasz odemnie emaila ze wszystkimi
          szczegółami.<br />
          <span class="text-primary-200"
            >Pozdrawiam<br />
            Amadeusz Chomiak</span
          >
        </p>
        <BaseButton
          content="Wspaniale"
          fill
          @click="cooperationSet('showModal', false)"
        />
      </div>
      <img
        class="md:flex-1 w-sm h-64 lg:h-sm 2xl:h-lg 2xl:w-lg bg-left-top"
        src="~/assets/images/undrawEnvelope.svg"
        alt="Otwieram kopertę z Twoją wiadomością. Obrazek ze strony undraw.co"
      />
    </ModalScreen>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useStore } from '@/composable/useStore'
export default defineComponent({
  setup() {
    const {
      state: cooperationState,
      set: cooperationSet,
    } = useStore.requestCooperation
    return {
      cooperationState,
      cooperationSet,
    }
  },
})
</script>
