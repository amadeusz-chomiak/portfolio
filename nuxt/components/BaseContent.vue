<template>
  <div class="flex flex-wrap">
    <div
      v-for="(column, index) in columnContent"
      :key="index"
      class="p-1"
      :class="columnClasses(column.set)"
    >
      <template v-for="block in column.content">
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
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  defineComponent,
  computed,
} from '@nuxtjs/composition-api'
import {
  Content,
  ContentText,
  ContentColumn,
  Mark,
  MarkDef,
  TextStyles,
} from '~/types/BaseContent'
// import { useClass } from '~/composable/useMediaQuery'
import { ColumnSettings } from '~/dev/databaseQuery'

export default defineComponent({
  props: {
    content: {
      type: Array as () => Content,
      required: true,
    },
  },
  setup(props) {
    // const { classes } = useClass()
    const columnContent = computed<ContentColumn[]>(() => {
      let columnSet: ColumnSettings['set'] = 'both'
      return (
        props.content.reduce((columns, content) => {
          if (content._type === 'column') columnSet = content.set
          else {
            const lastColumn: ContentColumn = columns[columns.length - 1]
            if (lastColumn?.set === columnSet) {
              lastColumn.content.push(content)
            } else {
              columns.push({
                set: columnSet,
                content: [content],
              })
            }
          }
          return columns
        }, [] as ContentColumn[]) ?? []
      )
    })

    const columnClasses = (set: ColumnSettings['set']) =>
      set === 'both' ? 'lg:w-full' : 'lg:w-1/2'

    const markClasses = (marks: Mark[], _markDefs: MarkDef[]) =>
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
          classes = ['opacity-75', 'pl-2']
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
      columnClasses,
      style,
      columnContent,
    }
  },
})
</script>
