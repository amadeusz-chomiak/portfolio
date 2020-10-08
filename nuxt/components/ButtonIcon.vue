<template>
  <BaseButton v-bind="$attrs" :slim="slim" round @click="$emit('click')"
    ><BaseIcon
      :icon="icon"
      :style="iconStyle"
      :class="[...(slim ? ['h-4', 'w-4'] : ['h-5', 'w-5']), ...iconClasses]"
    />
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
    iconClasses: {
      type: Array,
      default: () => ['text-primary-50'],
    },
    iconStyle: {
      type: Object,
      default: () => {},
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
