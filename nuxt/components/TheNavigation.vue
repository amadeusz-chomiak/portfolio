<template>
  <div>
    <div class="hidden md:flex" data-testid="nav-side">
      <TheNavigationContent />
    </div>
    <FocusLock :disabled="!panelOpen">
      <transition name="panel" :duration="500">
        <div
          v-if="panelOpen"
          class="fixed z-10 flex justify-end inset-0 md:hidden"
        >
          <div
            class="transition-bg bg-crosses cursor-pointer inset-0 absolute isolation-isolate"
            data-testid="nav-panel"
            @click.self="panelOpen = false"
          ></div>
          <div
            class="transition-panel overflow-x-hidden overflow-y-auto isolation-isolate pointer-events-auto"
          >
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
        class="flex justify-between bg-primary-950 rounded-t-lg px-1 sm:px-6 py-2 shadow-2xl md:hidden"
      >
        <BaseButton
          :content="contactButton.content"
          :target="contactButton.to"
          class="flex-shrink"
        />
        <div
          class="flex justify-end bg-primary-950 z-20 rounded-full"
          data-testid="nav-bottom"
          :class="panelOpen ? ['shadow-lg'] : []"
        >
          <ButtonGithub class="z-20" />
          <ButtonIcon
            :icon="panelOpen ? 'close' : 'menu'"
            data-testid="nav-button"
            secondary
            color="text-primary-50"
            class="z-20"
            @click="panelOpen = !panelOpen"
          ></ButtonIcon>
        </div>
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
  useContext,
  watch,
  computed,
} from '@nuxtjs/composition-api'
import { useQuerySite, usePageIdTransformer } from '~/composable/useDatabase'
export default defineComponent({
  setup() {
    const panelOpen = ref(false)
    const { route } = useContext()
    watch(route, () => {
      panelOpen.value = false
    })

    const { result } = useQuerySite()
    const { toPath } = usePageIdTransformer()

    const contactButton = computed(() => {
      const pages = result.value?.pages
      return {
        content: pages?.[pages?.length - 2]?.link?.pl,
        to: toPath(pages?.[pages?.length - 1]?.page?._id, true),
      }
    })
    return {
      panelOpen,
      contactButton,
    }
  },
})
</script>
