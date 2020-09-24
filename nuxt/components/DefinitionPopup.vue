<template>
  <BaseCard background="darker">
    <template #content>
      <p class="text-lg font-semibold" :style="{ color: color }">
        {{ title }}
      </p>
      <p>{{ content }}</p>
    </template>
  </BaseCard>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>
