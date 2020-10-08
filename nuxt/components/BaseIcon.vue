<template>
  <transition name="fade" :duration="100" mode="out-in">
    <div v-if="unicon">
      <client-only>
        <unicon :name="unicon" :alt="alt" :class="classes" />
      </client-only>
    </div>
    <img
      v-else-if="show('github')"
      src="~/assets/icons/github.svg"
      :alt="alt"
      :class="classes"
    />

    <div v-else class="flex justify-center" :class="classes">
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
  color: number
  height: number
}

export default defineComponent<Props>({
  props: {
    icon: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const icon = computed(() => props.icon)
    const classes = ['fill-current', 'select-none']
    const show = (id: IconId) => icon.value === id
    const { alt, unicon } = useIcon(icon)
    return { classes, show, alt, unicon }
  },
})
</script>
