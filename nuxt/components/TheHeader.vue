<template>
  <header class="flex items-center">
    <BaseButton
      ref="ButtonAvatar"
      secondary
      target="https://github.com/amadeusz-chomiak"
      inline
      round
      slim
      class="mr-2 group flex-shrink-0 lg:mr-4"
      data-testid="button-avatar"
      @click="trackEventGithub"
    >
      <div class="relative">
        <img
          class="rounded-full h-12 md:h-14 lg:h-16 w-12 md:w-14 lg:w-16 transition-opacity duration-100 group-hocus:opacity-0"
          :src="headerPicture"
          :alt="headerAlt"
        />
        <BaseIcon
          icon="github"
          class="rounded-full absolute inset-0 opacity-0 transition-opacity duration-100 group-hocus:opacity-100"
        />
        <div
          class="rounded-full absolute inset-0 bg-primary-600 transition-opacity duration-100 blend-soft-light group-hocus:opacity-0"
        />
      </div>
    </BaseButton>
    <div>
      <h1 class="inline-flex flex-wrap items-baseline">
        <span
          class="font-medium md:font-bold text-lg md:text-2xl md:tracking-wide lg:text-3xl lg:tracking-wider text-primary-50 block md:flex-shrink-0 mr-2"
          >{{ headerTitle }}</span
        >
        <span
          class="font-light md:font-normal italic text-md md:text-xl lg:text-2xl lg:tracking-wide md:text-opacity-95 text-primary-100 block md:flex-shrink-0"
          >{{ headerSubtitle }}</span
        >
      </h1>
    </div>
  </header>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  ref,
} from '@nuxtjs/composition-api'
import { useQuerySite, useImage } from '~/composable/useDatabase'
import { useAnalytics } from '~/composable/useAnalytics'

export default defineComponent({
  setup() {
    const ButtonAvatar = ref<{ $el: HTMLElement } | undefined>(undefined)
    onMounted(() => {
      ButtonAvatar.value?.$el.focus()
    })

    const { result } = useQuerySite()
    const header = computed(() => result.value?.header)
    const headerPicture = useImage(
      computed(() => header.value?.image),
      224
    )
    const headerAlt = computed(() => header.value?.image?.alt?.pl)

    const headerTitle = computed(() => header.value?.title?.pl)
    const headerSubtitle = computed(() => header.value?.subtitle?.pl)

    const { trackEvent } = useAnalytics()
    const trackEventGithub = () => trackEvent('link-github')
    return {
      headerAlt,
      headerPicture,
      headerTitle,
      headerSubtitle,
      ButtonAvatar,
      trackEventGithub,
    }
  },
})
</script>
