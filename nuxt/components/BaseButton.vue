<template>
  <component
    :is="rootTag"
    :href="target"
    :to="target"
    :class="rootClasses"
    class="rounded-button-9 p-1 flex outline-none group"
    @click="$emit('click')"
  >
    <div
      :class="innerClasses"
      class="rounded-button-8 px-6 flex-1 flex justify-center"
    >
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
  },
  setup(props) {
    const rootTag = computed(() =>
      props.target ? (props.route ? 'nuxt-link' : 'a') : 'button'
    )

    const rootClasses = computed(() => [
      ...(props.secondary
        ? [
            'border-2',
            'border-transparent',
            'hocus:border-primary-500',
            // 'active:border-opacity-25',
            'hocus:border-opacity-75',
            'transform',
            'transition-transform',
            'duration-75',
            'active:scale-95',
            'active:bg-primary-900',

            'transition-transform',
            'duration-75',
            'active:scale-95',
            'active:bg-primary-900',
            'bg-opacity-25',
            'active:translate-y-1',
          ]
        : []),
      ...(props.route ? ['border-opacity-50'] : []),
      ...(props.slim ? ['rounded-button-7'] : ['rounded-button-9']),
    ])

    const innerClasses = computed(() => [
      ...(props.secondary
        ? ['border-3', 'border-primary-600']
        : [
            'bg-primary-600',
            'shadow-lg',
            'group-active:shadow-sm',
            'transform',
            'transition-transform',
            'duration-75',
            'group-active:scale-95',
            'group-active:translate-y-1',
          ]),
      ...(props.route ? [''] : []),
      ...(props.slim
        ? ['py-1', 'rounded-button-6']
        : ['py-3', 'rounded-button-8']),
    ])

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
