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
        class="flex fixed inset-x-0 bottom-0 z-20 transform sm-h:transform-none xs:transform-none transition-transform duration-150 ease-in justify-between rounded-t-lg px-1 sm:px-6 py-2 md:hidden"
        :class="
          panelOpen ? [] : ['bg-primary-950', 'shadow-2xl', 'translate-y-full']
        "
        data-testid="nav-bottom"
      >
        <BaseButton
          :content="contactButton.content"
          secondary
          class="flex-shrink"
          :class="panelOpen ? ['invisible'] : []"
          @click="send"
        />
        <div
          class="flex justify-end bg-primary-950 z-20 rounded-full"
          :class="panelOpen ? ['shadow-lg'] : []"
        >
          <ButtonGithub class="z-20" />
          <ButtonIcon
            :icon="panelOpen ? 'close' : 'menu'"
            data-testid="nav-button"
            secondary
            color="text-primary-50"
            class="z-20"
            :title="panelOpen ? 'Zamknij menu' : 'Otwórz menu'"
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
import { useMail } from '~/composable/useMail'
export default defineComponent({
  setup() {
    const panelOpen = ref(false)
    const { route } = useContext()
    watch(route, () => {
      panelOpen.value = false
    })

    const { result } = useQuerySite()
    const { toPath } = usePageIdTransformer()
    const { send } = useMail('cooperationRequestPL')
    const contactButton = computed(() => {
      const pages = result.value?.pages
      return {
        content: 'Napisz maila',
        to: toPath(pages?.[pages?.length - 1]?.page?._id, true),
      }
    })
    return {
      panelOpen,
      contactButton,
      send,
    }
  },
})
</script>
