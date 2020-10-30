<template>
  <div class="relative mb-3 mr-4 lg:mr-5 xl:mr-10">
    <p>
      <span>{{ definition.textBefore }}</span>
      <span class="font-semibold" :style="{ color: definition.color.hex }">{{
        definition.text
      }}</span>
      <span>{{ definition.textAfter }}</span>
    </p>
    <div class="absolute left-full top-1/2 min-w-12 transform -translate-y-1/2">
      <ButtonIcon
        :id="buttonId"
        :icon="show ? 'close' : '?'"
        secondary
        inline
        slim
        data-testid="toggle"
        :icon-style="{ color: definition.color.hex }"
        @click="show = !show"
      ></ButtonIcon>
    </div>
    <transition name="fade" :duration="100">
      <DefinitionPopup
        v-if="show"
        class="absolute z-50 inset-x-0 top-0"
        :title="definition.title"
        :content="definition.content"
        :color="definition.color.hex"
      ></DefinitionPopup>
    </transition>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  onUnmounted,
} from '@nuxtjs/composition-api'
import { useId } from '~/composable/useId'

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
    const show = ref(false)
    const { id: buttonId } = useId()
    const hidePopup = (event: Event) => {
      console.log(event)
      // @ts-expect-error
      const path = event.path as HTMLElement[]
      const Element = path.find((element, index) => {
        console.log('getAttribute', element.getAttribute, element)
        if (index > 5) return false
        return element?.id === buttonId.value
      })
      if (!Element) show.value = false
    }

    watch(show, (show) => {
      if (show) window.addEventListener('mousedown', hidePopup)
      else window.removeEventListener('mousedown', hidePopup)
    })
    onUnmounted(() => {
      window.removeEventListener('mousedown', hidePopup)
    })

    return { show, buttonId }
  },
})
</script>
