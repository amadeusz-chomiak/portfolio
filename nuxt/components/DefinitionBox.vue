<template>
  <p>
    <span>{{ definition.textBefore }}</span>
    <span class="font-semibold" :style="{ color: definition.color.hex }">{{
      definition.text
    }}</span>
    <span>{{ definition.textAfter }}</span>
    <ButtonIcon
      icon="?"
      secondary
      inline
      slim
      data-testid="button"
      :color="definition.color.hex"
    ></ButtonIcon>
  </p>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

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

export default defineComponent<Props>({
  props: {
    definition: {
      type: Object as () => Props['definition'],
    },
  },
  setup() {
    return {}
  },
})
</script>
