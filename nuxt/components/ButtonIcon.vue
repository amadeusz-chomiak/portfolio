<template>
  <BaseButton v-bind="$attrs" :slim="slim" round @click="$emit('click')"
    ><BaseIcon :icon="icon" :color="color" :height="slim ? 4 : 5" />
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
    slim: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {}
  },
})
</script>
