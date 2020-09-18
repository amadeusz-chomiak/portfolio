<template>
  <div :class="rootClasses">
    <div class="mb-2"><slot name="icon" /><slot name="content" /></div>
    <div><slot name="action" /></div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  defineComponent,
  computed,
} from '@nuxtjs/composition-api'
import { useClass } from '~/composable/useMediaQuery'

export default defineComponent({
  props: {
    background: {
      type: String,
      default: 'dark',
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { classes } = useClass()
    const rootClasses = computed(() =>
      [
        classes(props.background === 'darker', 'bg-primary-900'),
        classes(props.background === 'circuit', 'bg-circuit'),
        classes(props.background === 'dark', 'bg-primary-800'),
        classes(props.small, 'p-2', 'rounded-lg'),
        classes(!props.small, 'pt-6', ' pb-4', 'px-4', 'rounded-xl'),
      ].flat()
    )

    return { rootClasses }
  },
})
</script>
