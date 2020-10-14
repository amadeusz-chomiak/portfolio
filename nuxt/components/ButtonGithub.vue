<template>
  <ButtonIcon
    target="https://github.com/amadeusz-chomiak"
    secondary
    outside
    :icon="github"
  ></ButtonIcon>
</template>

<script lang="ts">
import { ref, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const github = ref('github')
    return { github }
  },
})
</script>
