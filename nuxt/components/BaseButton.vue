<template>
  <component
    :is="rootTag"
    :href="target"
    :to="target"
    :class="rootClasses"
    class="p-1 flex outline-none group"
    @click="$emit('click')"
  >
    <div :class="innerClasses" class="flex-1 flex justify-center">
      <slot
        ><p class="text-lg" :class="textClasses">{{ props.content }}</p></slot
      >
    </div>
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
    secondary: {
      type: Boolean,
      default: false,
    },
    slim: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const rootTag = computed(() =>
      props.target ? (props.route ? 'nuxt-link' : 'a') : 'button'
    )
    const classes = (condition: boolean, ...classes: string[]) =>
      condition ? classes : []

    const rootClasses = computed(() =>
      [
        classes(
          props.secondary,
          'border-2',
          'border-transparent',
          'hocus:border-primary-500',
          'hocus:border-opacity-75',
          'transform',
          'transition-transform',
          'duration-75',
          'active:scale-95',
          'active:bg-primary-800',
          'bg-opacity-25',
          'active:translate-y-1'
        ),
        classes(props.route, 'border-opacity-50'),
        classes(props.round, 'rounded-full'),
        classes(!props.round && props.slim, 'rounded-button-7'),
        classes(!props.round && !props.slim, 'rounded-button-9'),
      ].flat()
    )

    const innerClasses = computed(() =>
      [
        classes(props.secondary, 'border-3', 'border-primary-600'),
        classes(
          !props.secondary,
          'bg-primary-600',
          'shadow-lg',
          'group-active:shadow-sm',
          'transform',
          'transition-transform',
          'duration-75',
          'group-active:scale-95',
          'group-active:translate-y-1'
        ),
        classes(props.round, 'rounded-full'),
        classes(!props.round, 'px-6'),
        classes(props.round && props.slim, 'p-1'),
        classes(props.round && !props.slim, 'p-3'),
        classes(!props.round && props.slim, 'rounded-button-6', 'py-1'),
        classes(!props.round && !props.slim, 'rounded-button-8', 'py-3'),
      ].flat()
    )

    const textClasses = computed(() =>
      props.secondary ? ['text-primary-200'] : ['text-primary-50']
    )
    return {
      props,
      rootTag,
      rootClasses,
      innerClasses,
      textClasses,
    }
  },
})
</script>

<style lang="postcss">
.nuxt-link-exact-active {
  @apply border-primary-500 border-opacity-50;
}
</style>
