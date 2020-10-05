<template>
  <div class="group relative">
    <p class="text-primary-50">{{ title }}</p>
    <input
      class="w-full rounded-xl border-4 py-2 px-4 text-primary-50 bg-black bg-opacity-75 placeholder-primary-200 placeholder-opacity-25 outline-none"
      :class="inputClasses"
      :placeholder="placeholder"
      :value="value"
      :type="type"
      @input="$emit('input', $event.target.value)"
      @blur="blured = true"
      @focus="blured = false"
    />
    <div
      v-if="validation"
      class="bg-primary-600 pt-1 pb-3 px-4 w-full absolute top-full left-0 rounded-b-xl hidden group-focus-within:flex flex-col"
    >
      <p class="text-primary-50">
        {{ validation }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  defineComponent,
  computed,
} from '@nuxtjs/composition-api'
import { useClass } from '~/composable/useMediaQuery'

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String as () => 'email',
      required: true,
    },
  },
  setup(props) {
    const validation = computed(() => {
      if (props.type === 'email') {
        const beforeAt = RegExp(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]*/
        ).test(props.value)
        if (!beforeAt) return 'Podaj poprawną nazwę zakończoną @'

        const afterAt = RegExp(/@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(
          props.value
        )
        if (!afterAt) return 'Podaj poprawną nazwę Twojego dostawcy emaila'
        return undefined
      }
      return undefined
    })

    const blured = ref(false)
    const { classes } = useClass()

    const inputClasses = computed(() => {
      const invalidBlured = blured.value && !!validation.value
      return [
        classes(!!validation.value, 'group-focus-within:rounded-b-none'),
        classes(!invalidBlured, 'border-primary-600'),
        classes(invalidBlured, 'border-warning'),
      ].flat()
    })
    return { validation, inputClasses, blured }
  },
})
</script>
