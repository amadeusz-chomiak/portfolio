<template>
  <div class="bg-primary-975 md:bg-black flex flex-col h-screen relative">
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
      <LazyModalContact v-if="cooperationState" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useStore } from '@/composable/useStore'
export default defineComponent({
  setup() {
    const { state: cooperationState } = useStore.requestCooperation

    return {
      cooperationState,
    }
  },
})
</script>
