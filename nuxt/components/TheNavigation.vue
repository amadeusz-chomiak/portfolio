<template>
  <div>
    <div v-if="expand" data-testid="nav-side">
      <TheNavigationContent />
    </div>
    <div v-else data-testid="nav-bottom"></div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  defineComponent,
  watchEffect,
} from '@nuxtjs/composition-api'
import { useSize } from '~/composable/useMediaQuery'
export default defineComponent({
  setup() {
    const { md: expand } = useSize()
    return { expand }
  },
})
</script>
