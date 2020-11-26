<template>
  <div class="flex flex-wrap">
    <div
      v-for="(column, index) in columnContent"
      :key="index"
      class="p-1 xl:p-2"
      :class="columnClasses(column.set)"
    >
      <template v-for="block in column.content">
        <component
          :is="style(block.style).tag"
          v-if="block._type === 'block'"
          :key="block._key"
          :class="style(block.style).classes"
        >
          <template v-for="span in block.children">
            <span
              v-if="markTag(span.marks, block.markDefs) === 'span'"
              :key="span._key"
              :class="markClasses(span.marks)"
              >{{ span.text }}</span
            >
            <BaseLink
              v-else-if="markTag(span.marks, block.markDefs) === 'link'"
              :key="span._key"
              :to="markTo(span.marks, block.markDefs)"
              :class="markClasses(span.marks)"
              >{{ span.text }}</BaseLink
            >
          </template>
        </component>
        <DefinitionBox
          v-else-if="block._type === 'definition'"
          :key="block._key"
          :definition="block"
          class="ml-2"
        />
        <BaseButton
          v-else-if="block._type === 'link'"
          :key="block._key"
          :target="block.href"
          secondary
          slim
          inline
          :class-inner="['text-base']"
          @click="() => (block.goal ? trackEvent(block.goal) : undefined)"
          >{{ block.text }}</BaseButton
        >
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
import { useClass } from '~/composable/useMediaQuery'
import { ColumnSettings } from '~/dev/databaseQuery'
import { useAnalytics } from '~/composable/useAnalytics'

export default defineComponent({
  props: {
    content: {
      type: Array as () => Content,
      required: true,
    },
    level: {
      type: Number,
      default: 2,
    },
  },
  setup(props) {
    const { classes: createClasses } = useClass()
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
    const findMarkDef = (mark: string, markDefs: MarkDef[]) =>
      markDefs.find((def) => def._key === mark)

    const markTag = (marks: (Mark | string)[], markDefs: MarkDef[]) =>
      marks.reduce((tag, mark) => {
        const markDef = findMarkDef(mark, markDefs)
        if (markDef?._type === 'link') return 'link'
        if (markDef?._type === 'route') return 'route'
        return tag
      }, 'span')

    const markTo = (marks: (Mark | string)[], markDefs: MarkDef[]) =>
      marks.reduce((to, mark) => {
        const markDef = findMarkDef(mark, markDefs)
        if (markDef && 'to' in markDef) return markDef.to
        if (markDef && 'href' in markDef) return markDef.href
        return to
      }, '')

    const markClasses = (marks: (Mark | string)[]) =>
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
          classes = [
            ['font-semibold', 'tracking-wide'],
            createClasses(props.level === 2, 'text-2xl'),
            createClasses(props.level === 3, 'text-xl', 'pl-1'),
            createClasses(props.level === 4, 'text-lg', 'pl-2'),
          ].flat()
          tag = `h${props.level}`
          break
        case 'subtitle':
          classes = [
            createClasses(props.level === 2, 'text-lg', 'pl-1'),
            createClasses(props.level === 3, 'text-md', 'pl-2'),
            // createClasses(props.level === 4, ''),
          ].flat()
          tag = `h${props.level + 1}`
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

    const { trackEvent } = useAnalytics()

    return {
      markTag,
      markTo,
      markClasses,
      columnClasses,
      style,
      columnContent,
      trackEvent,
    }
  },
})
</script>
