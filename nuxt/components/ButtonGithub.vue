<template>
  <ButtonIcon
    target="https://github.com/amadeusz-chomiak"
    secondary
    :icon="github"
    @click="trackGithubEvent"
  ></ButtonIcon>
</template>

<script lang="ts">
import { ref, defineComponent } from '@nuxtjs/composition-api'
import { useAnalytics } from '~/composable/useAnalytics'

export default defineComponent({
  setup() {
    const { trackEvent } = useAnalytics()
    const trackGithubEvent = () => trackEvent('link-github')
    const github = ref('github')
    return { github, trackGithubEvent }
  },
})
</script>
