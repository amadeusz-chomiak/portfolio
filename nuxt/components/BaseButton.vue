<template>
  <component :is="rootTag" :href="target" :to="target" @click="$emit('click')">
    <slot name="content">{{ props.content }}</slot>
  </component>
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
    content: {
      type: String,
    },
    target: {
      type: [String, Object],
    },
    route: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const rootTag = computed(() =>
      props.target ? (props.route ? 'nuxt-link' : 'a') : 'button'
    )
    return {
      props,
      rootTag,
    }
  },
})
</script>
