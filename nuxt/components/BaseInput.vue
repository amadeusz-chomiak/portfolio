<template>
  <div class="group relative">
    <label :for="id" class="text-primary-50 mb-1"
      >{{ title
      }}<span v-if="required && !!validation" class="text-primary-100">
        —
        <span
          :class="invalidBlured ? ['text-warning', 'text-opacity-100'] : []"
          >{{ required }}</span
        ></span
      ></label
    >
    <input
      :id="id"
      class="w-full rounded-xl border-4 py-2 px-4 text-primary-50 bg-black bg-opacity-75 placeholder-primary-200 placeholder-opacity-50 outline-none"
      :class="inputClasses"
      :placeholder="'Np. ' + placeholder"
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
  watch,
} from '@nuxtjs/composition-api'
import { useClass } from '~/composable/useMediaQuery'
import { useId } from '~/composable/useId'

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
    required: {
      type: String,
    },
  },
  setup(props, { emit }) {
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
      if (props.required && props.value === '') return 'Musisz wypełnić to pole'
      return undefined
    })
    watch(validation, (to) => emit('validation', to), { immediate: true })
    const blured = ref(false)
    const { classes } = useClass()
    const invalidBlured = computed(() => blured.value && !!validation.value)

    const inputClasses = computed(() => {
      return [
        classes(!!validation.value, 'group-focus-within:rounded-b-none'),
        classes(!invalidBlured.value, 'border-primary-600'),
        classes(invalidBlured.value, 'border-warning'),
      ].flat()
    })

    const id = useId()
    return { validation, inputClasses, blured, id, invalidBlured }
  },
})
</script>
