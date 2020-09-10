<template>
  <div class="rounded-xl py-6 px-4" :class="rootClasses">
    <div class="mb-2"><slot name="content" /></div>
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

export default defineComponent({
  props: {
    background: {
      type: String,
      default: 'dark',
    },
  },
  setup(props) {
    const rootClasses = computed(() => {
      switch (props.background) {
        case 'darker':
          return ['bg-primary-800']

        case 'circuit':
          return ['bg-circuit']

        default:
          return ['bg-primary-600']
      }
    })

    return { rootClasses }
  },
})
</script>
