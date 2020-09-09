<template>
  <transition name="fade" mode="out-in">
    <img
      v-if="show('close')"
      src="~/assets/icons/close.svg"
      :alt="alt"
      :class="classes"
    />

    <img
      v-else-if="show('menu')"
      src="~/assets/icons/settings.svg"
      :alt="alt"
      :class="classes"
    />
  </transition>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  defineComponent,
  computed,
  PropOptions,
} from '@nuxtjs/composition-api'

import { useIcon, IconId } from '~/composable/useIcon'

interface Props {
  icon: IconId
  color: number
  height: number
}

export default defineComponent<Props>({
  props: {
    icon: {
      required: true,
      type: String,
    },
    color: {
      default: 100,
      type: Number,
    },
    height: {
      default: 8,
      type: Number,
    },
  },
  setup(props) {
    const classes = computed(() => [
      'fill-current',
      `text-primary-${props.color}`,
      `h-${props.height}`,
    ])

    const show = (id: IconId) => props.icon === id
    const { alt } = useIcon(props.icon)
    return { classes, show, alt }
  },
})
</script>
