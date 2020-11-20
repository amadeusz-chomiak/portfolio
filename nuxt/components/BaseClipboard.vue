<template>
  <div
    class="flex justify-between px-2 border-primary-400 border-2 rounded-full"
  >
    <textarea
      ref="contentRef"
      class="bg-transparent cursor-copy py-2 px-2 flex-1 overflow-hidden select-all resize-none"
      readonly
      rows="1"
      :value="content"
      @click="copy()"
    />
    <button class="flex-shrink-0 py-2 px-2 font-small-caps" @click="copy()">
      {{ copied ? 'skopiowano' : 'skopiuj' }}
    </button>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  setup() {
    const contentRef = ref<HTMLTextAreaElement>()
    const copied = ref(false)
    let copiedTimeoutId: NodeJS.Timeout
    const copy = () => {
      contentRef.value?.select()
      contentRef.value?.setSelectionRange(0, 99999)

      document.execCommand('copy')
      contentRef.value?.blur()
      copied.value = true
      clearTimeout(copiedTimeoutId)
      copiedTimeoutId = setTimeout(() => {
        copied.value = false
      }, 1500)
    }
    return { copy, copied, contentRef }
  },
})
</script>
