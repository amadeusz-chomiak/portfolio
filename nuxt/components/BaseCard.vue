<template>
  <div class="rounded-xl py-6 px-4" :class="rootClasses">
    <div><slot name="content" /></div>
    <div><slot name="action" /></div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    background: {
      type: String,
      default: 'dark',
    },
  },
  setup(props) {
    let rootClasses: string[]

    switch (props.background) {
      case 'darker':
        rootClasses = ['bg-primary-800']
        break
      case 'circuit':
        rootClasses = ['bg-circuit']
        break
      default:
        rootClasses = ['bg-primary-600']
        break
    }
    return { rootClasses }
  },
})
</script>
