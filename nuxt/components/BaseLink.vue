<template>
  <a :href="to" rel="noopener" target="_blank" class="underline"
    ><slot>{{ content }}</slot></a
  >
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    content: {
      type: String,
    },
    to: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>
