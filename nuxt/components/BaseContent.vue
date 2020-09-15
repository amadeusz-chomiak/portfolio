<template>
  <div>
    <template v-for="block in content">
      <component
        :is="style(block.style).tag"
        :key="block._key"
        :class="style(block.style).classes"
      >
        <template v-for="span in block.children">
          <span
            :key="span._key"
            :class="markClasses(span.marks, block.markDefs)"
            >{{ span.text }}</span
          >
        </template>
      </component>
    </template>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from '@nuxtjs/composition-api'
import { Content, Mark, MarkDef, TextStyles } from '~/types/BaseContent'
// import { useClass } from '~/composable/useMediaQuery'

export default defineComponent({
  props: {
    content: {
      type: Array as () => Content,
      required: true,
    },
  },
  setup(props) {
    // const { classes } = useClass()

    const markClasses = (marks: Mark[], markDefs: MarkDef[]) =>
      marks
        .map((mark) => {
          switch (mark) {
            case 'strong':
              return ['font-semibold', 'tracking-wide']
            case 'em':
              return ['italic']
          }
        })
        .flat()

    const style = (style: TextStyles) => {
      let classes: string[]
      let tag
      switch (style) {
        case 'title':
          classes = ['text-2xl', 'font-semibold', 'tracking-wide']
          tag = 'h2'
          break
        case 'subtitle':
          classes = ['text-lg']
          tag = 'h3'
          break
        case 'normal':
          classes = ['pl-2']
          tag = 'p'
          break
        case 'unimportant':
          classes = ['text-opacity-75']
          tag = 'p'
          break
      }

      return {
        classes,
        tag,
      }
    }

    return {
      markClasses,
      style,
    }
  },
})
</script>
