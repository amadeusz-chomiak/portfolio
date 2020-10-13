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
      title="Otrzymałem Twoją wiadomość"
      data-testid="contact-form-modal"
      @close="cooperationSet('showModal', false)"
    >
      <p class="text-primary-100">
        W ciągu kilku dni poinformuję Cię o czasie w jakim, będę mógł wykonać
        Twój projekt
      </p>
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
