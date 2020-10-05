<template>
  <div>
    <label :for="id" class="text-primary-50 mb-1">{{ title }}</label>
    <textarea
      :id="id"
      class="w-full h-32 rounded-xl border-4 py-2 px-4 border-primary-600 text-primary-50 bg-black bg-opacity-75 placeholder-primary-200 placeholder-opacity-50 outline-none"
      :placeholder="'Np. ' + placeholder"
      @input="$emit('input', $event.target.value)"
      >{{ value }}</textarea
    >
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from '@nuxtjs/composition-api'
import { useId } from '~/composable/useId'
export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  setup() {
    const id = useId()
    return { id }
  },
})
</script>
