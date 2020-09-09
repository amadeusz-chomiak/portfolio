<template>
  <div>
    <div class="hidden md:flex" data-testid="nav-side">
      <TheNavigationContent />
    </div>
    <div class="flex md:hidden" data-testid="nav-bottom">
      <ButtonIcon icon="menu"></ButtonIcon>
    </div>
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
  setup() {},
})
</script>
