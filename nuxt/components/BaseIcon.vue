<template>
  <transition name="fade" :duration="100" mode="out-in">
    <img
      v-if="show('close')"
      src="~/assets/icons/close.svg"
      :alt="alt"
      :class="classes"
      :style="style"
    />

    <img
      v-else-if="show('menu')"
      src="~/assets/icons/settings.svg"
      :alt="alt"
      :style="style"
      :class="classes"
    />

    <img
      v-else-if="show('github')"
      src="~/assets/icons/github.svg"
      :alt="alt"
      :style="style"
      :class="classes"
    />

    <div v-else class="flex justify-center" :class="classes">
      <p :style="style" class="text-lg font-semibold leading-none select-none">
        {{ icon }}
      </p>
    </div>
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
import { useClass } from '~/composable/useMediaQuery'

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
      type: [Number, String],
    },
    height: {
      type: Number,
    },
  },
  setup(props) {
    const { classes: createClasses } = useClass()

    const classes = computed(() => [
      'fill-current',
      'select-none',
      ...createClasses(
        typeof props.color === 'number',
        `text-primary-${props.color}`
      ),
      ...(props.height ? [`h-${props.height}`, `w-${props.height}`] : []),
    ])
    const style = computed(() =>
      typeof props.color === 'string'
        ? {
            color: props.color,
          }
        : {}
    )

    const show = (id: IconId) => props.icon === id
    const { alt } = useIcon(props.icon)
    return { classes, show, alt, style }
  },
})
</script>
