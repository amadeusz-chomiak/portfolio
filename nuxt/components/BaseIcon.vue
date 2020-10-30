<template>
  <transition name="fade" :duration="100" mode="out-in">
    <template v-if="unicon">
      <client-only>
        <unicon :name="unicon" :style="iconStyle" :alt="alt" :class="classes" />
      </client-only>
    </template>
    <img
      v-else-if="show('github')"
      src="~/assets/icons/github.svg"
      :alt="alt"
      :style="iconStyle"
      :class="classes"
    />

    <div v-else class="flex justify-center" :style="iconStyle" :class="classes">
      <p class="text-lg font-semibold leading-none select-none">
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
  toRefs,
} from '@nuxtjs/composition-api'

import { useIcon, IconId } from '~/composable/useIcon'

interface Props {
  icon: IconId
  iconClasses: string[]
}

export default defineComponent<Props>({
  props: {
    icon: {
      required: true,
      type: String,
    },
    iconClasses: {
      default: () => [],
      type: Array,
    },
    iconStyle: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const icon = computed(() => props.icon)
    const classes = ['fill-current', 'select-none', props.iconClasses]
    const show = (id: IconId) => icon.value === id
    const { alt, unicon } = useIcon(icon)
    return { classes, show, alt, unicon }
  },
})
</script>
