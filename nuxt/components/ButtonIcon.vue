<template>
  <BaseButton v-bind="$attrs" round @click="$emit('click')"
    ><BaseIcon :icon="icon" :color="color" />
  </BaseButton>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
  },
  setup() {
    return {}
  },
})
</script>
