<template>
  <div>
    <div class="hidden md:flex" data-testid="nav-side">
      <TheNavigationContent />
    </div>
    <FocusLock :disabled="!panelOpen">
      <transition name="panel" :duration="500">
        <div v-if="panelOpen" class="fixed flex justify-end inset-0 md:hidden">
          <div
            class="transition-bg bg-crosses cursor-pointer inset-0 absolute isolation-isolate"
            data-testid="nav-panel"
            @click.self="panelOpen = false"
          ></div>
          <div class="transition-panel isolation-isolate pointer-events-none">
            <div
              class="bg-primary-950 absolute right-0 pointer-events-auto inset-y-0 rounded-l-lg max-w-2xs sm:max-w-xs w-full shadow-2xl cursor-default"
            ></div>
            <TheNavigationContent
              class="transform translate-x-20 mt-4 cursor-default"
            />
          </div>
        </div>
      </transition>
      <div
        class="flex justify-end bg-primary-950 rounded-t-lg px-4 py-2 z-20 shadow-2xl md:hidden"
        data-testid="nav-bottom"
      >
        <ButtonIcon
          :icon="panelOpen ? 'close' : 'menu'"
          data-testid="nav-button"
          secondary
          @click="panelOpen = !panelOpen"
        ></ButtonIcon>
      </div>
    </FocusLock>
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  defineComponent,
  watchEffect,
} from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const panelOpen = ref(false)

    return {
      panelOpen,
    }
  },
})
</script>
