<template>
  <component
    :is="rootTag"
    :role="ariaRole"
    :href="target"
    :to="target"
    :class="rootClasses"
    :tabindex="tabindex"
    :target="outside ? '_blank' : '_self'"
    rel="noopener"
    class="p-1 pointer-events-auto outline-none group border-transparent transform transition-all duration-75 border-2"
    @click="emitClick()"
    @keydown.space.enter="activete()"
    @keyup.space.enter="emitClick()"
  >
    <div :class="innerClasses" class="flex">
      <slot
        ><p class="text-lg" :class="textClasses">{{ content }}</p></slot
      >
    </div>
  </component>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  computed,
  useContext,
} from '@nuxtjs/composition-api'
import { useClass } from '~/composable/useMediaQuery'

export default defineComponent({
  props: {
    content: {
      type: String,
    },
    target: {
      type: [String, Object],
    },
    outside: {
      type: Boolean,
      default: false,
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
    fill: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    decenter: {
      type: Boolean,
      default: false,
    },
    classInner: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const rootTag = computed(() =>
      props.target ? (props.route ? 'nuxt-link' : 'a') : 'div'
    )

    const ariaRole = computed(() => (props.target ? 'link' : 'button'))
    const { classes } = useClass()
    const { route } = useContext()
    const linkActive = computed(() => {
      if (!props.target) return false
      return route.value.fullPath.includes(props.target)
    })
    const active = ref(false)
    const rootClasses = computed(() =>
      [
        classes(linkActive.value, 'nuxt-link-exact-active'),
        classes(props.inline, 'inline-flex'),
        classes(!props.inline, 'flex'),
        classes(props.secondary, 'bg-opacity-25', 'active:bg-primary-800'),
        classes(!props.secondary, 'active:border-opacity-50'),
        classes(props.secondary && active.value, 'bg-primary-800'),
        classes(!props.secondary && active.value, 'border-opacity-50'),
        classes(active.value, 'scale-95', 'translate-y-1'),
        classes(props.route, 'border-opacity-50'),
        classes(props.round, 'rounded-full'),
        classes(!props.round && props.slim, 'rounded-button-7'),
        classes(!props.round && !props.slim, 'rounded-button-9'),
        classes(props.disabled, 'cursor-not-allowed', 'opacity-50'),
        classes(
          !props.disabled,
          'hocus:border-primary-500',
          'hocus:border-opacity-75',
          'active:scale-95',
          'active:translate-y-1'
        ),
      ].flat()
    )

    const innerClasses = computed(() =>
      [
        classes(props.secondary, 'border-3', 'border-primary-600'),
        classes(!props.secondary, 'bg-primary-600'),
        classes(
          !props.secondary && !props.disabled,
          'shadow-lg',
          'group-active:shadow-sm'
        ),
        classes(props.decenter, 'justify-start'),
        classes(!props.decenter, 'justify-center'),
        classes(props.round, 'rounded-full'),
        classes(!props.round, 'px-6'),
        classes(props.round && props.slim, 'p-1'),
        classes(props.round && !props.slim, 'p-3'),
        classes(!props.round && props.slim, 'rounded-button-6', 'py-1'),
        classes(!props.round && !props.slim, 'rounded-button-8', 'py-3'),
        classes(props.fill, 'flex-1'),
        props.classInner,
      ].flat()
    )

    const textClasses = computed(() =>
      props.secondary ? ['text-primary-200'] : ['text-primary-50']
    )
    const deactivete = () => {
      active.value = false
    }
    const emitClick = () => {
      if (props.disabled) return
      emit('click')
      deactivete()
    }

    const activete = () => {
      if (props.disabled) return
      active.value = true
    }

    const tabindex = computed(() => (props.disabled ? -1 : 0))

    return {
      props,
      rootTag,
      rootClasses,
      innerClasses,
      textClasses,
      ariaRole,
      emitClick,
      activete,
      deactivete,
      tabindex,
    }
  },
})
</script>

<style lang="postcss">
.nuxt-link-exact-active {
  @apply border-primary-500 border-opacity-50;
}
</style>
