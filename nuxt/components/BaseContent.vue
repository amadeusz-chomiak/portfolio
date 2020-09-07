<template>
  <div></div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from '@nuxtjs/composition-api'
import { Props } from '~/types/BaseContent'

export default defineComponent<Props>({
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    return {}
  },
})
</script>
