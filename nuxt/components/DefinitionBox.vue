<template>
  <p class="relative mb-3 mr-4 lg:mr-5 xl:mr-10">
    <span>{{ definition.textBefore }}</span>
    <span class="font-semibold" :style="{ color: definition.color.hex }">{{
      definition.text
    }}</span>
    <span>{{ definition.textAfter }}</span>
    <span
      class="absolute block left-full top-1/2 min-w-12 transform -translate-y-1/2"
    >
      <ButtonIcon
        :icon="showPopup ? 'close' : '?'"
        secondary
        inline
        slim
        data-testid="toggle"
        :color="definition.color.hex"
        @click="showPopup = !showPopup"
      ></ButtonIcon>
    </span>
    <transition name="fade" :duration="100">
      <DefinitionPopup
        v-if="showPopup"
        class="absolute z-50 inset-x-0 top-0"
        :title="definition.title"
        :content="definition.content"
        :color="definition.color.hex"
      ></DefinitionPopup>
    </transition>
  </p>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

interface Props {
  definition: {
    _key: string
    _type: 'definition'
    color: {
      _type: 'color'
      alpha: number
      hex: string
    }
    content: string
    text: string
    textBefore: string
    textAfter: string
    title: string
  }
}

export default defineComponent({
  props: {
    definition: {
      type: Object as () => Props['definition'],
      required: true,
    },
  },
  setup() {
    const showPopup = ref(false)
    return { showPopup }
  },
})
</script>
