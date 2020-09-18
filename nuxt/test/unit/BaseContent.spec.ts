import { fireEvent } from '@testing-library/vue'
import { Base } from '../utils/core'
import Component from '~/components/BaseContent.vue'
import { ContentText } from '~/types/BaseContent'

const enum Paragraph {
  normal,
  columnOnlySecond,
  title,
  subtitle,
  marks,
}

const content = [
  {
    //* style normal
    _key: 'a7c3c1455c07dsas',
    _type: 'block',
    children: [
      {
        _key: '7c0a9e6cedsa4cd',
        _type: 'span',
        marks: [],
        text: 'normal',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  //* column settings
  { _key: '3700aebb6bba', _type: 'column', set: 'only-second' },
  {
    //* style title
    _key: 'a7c3c1455c07',
    _type: 'block',
    children: [
      {
        _key: '7c0a9e6ce4cd',
        _type: 'span',
        marks: [],
        text: 'title',
      },
    ],
    markDefs: [],
    style: 'title',
  },
  {
    //* style subtitle
    _key: 'a7sc3c1455c07',
    _type: 'block',
    children: [
      {
        _key: '7c0ad9e6ce4cd',
        _type: 'span',
        marks: [],
        text: 'subtitle',
      },
    ],
    markDefs: [],
    style: 'subtitle',
  },
  {
    //* marks
    _key: '0c0f32b912b6',
    _type: 'block',
    children: [
      {
        _key: '1c94cf3d247e',
        _type: 'span',
        marks: ['em'],
        text: 'italic',
      },
      {
        _key: 'd7eb55be733a',
        _type: 'span',
        marks: ['strong'],
        text: 'strong',
      },
      {
        _key: 'd7eb55be733a',
        _type: 'span',
        marks: ['f53d91b36f56'],
        text: 'link',
      },
    ],
    markDefs: [
      {
        _key: 'f53d91b36f56',
        _type: 'link',
        href: 'href',
      },
    ],
    style: 'normal',
  },
] as ContentText
const base = new Base(Component, { props: { content } })

describe('components/BaseContent.vue', () => {
  const normal = content[Paragraph.normal].children[0].text
  const title = content[Paragraph.title].children[0].text
  const subtitle = content[Paragraph.subtitle].children[0].text
  describe('paragraph style', () => {
    test('Render content with style "normal" with normal styles', () => {
      const { getByText } = base.render()
      const Span = getByText(normal)
      const Paragraph = Span.parentElement

      expect(Span).toBeVisible()
      expect(Span.tagName.toLowerCase()).toBe('span')
      expect(Paragraph?.tagName.toLowerCase()).toBe('p')
    })

    test('Render content with style "title" with title styles', () => {
      const { getByText } = base.render()
      const Span = getByText(title)
      const Paragraph = Span.parentElement
      expect(Span).toBeVisible()
      expect(Paragraph?.tagName.toLowerCase()).toBe('h2')
      expect(Paragraph?.classList).toContain('text-2xl')
    })

    test('Render content with style "title" with proper level from "level" prop', async () => {
      const { getByText, updateProps } = base.render({
        props: { level: 3, content },
      })
      const Span = getByText(title)
      const Paragraph = Span.parentElement
      expect(Span).toBeVisible()
      // expect(Paragraph?.tagName.toLowerCase()).toBe('h2')
      // expect(Paragraph?.classList).toContain('text-2xl')
      // await updateProps({ level: 3, content: { ...content } })
      expect(Paragraph?.tagName.toLowerCase()).toBe('h3')
      expect(Paragraph?.classList).toContain('text-xl')
      // await updateProps({ level: 4, content: { ...content } })
      // expect(Paragraph?.tagName.toLowerCase()).toBe('h4')
      // expect(Paragraph?.classList).toContain('text-lg')
    })

    test('Render content with style "subtitle" with proper level from "level" prop', async () => {
      const { getByText, updateProps } = base.render({
        props: { level: 3, content },
      })
      const Span = getByText(subtitle)
      const Paragraph = Span.parentElement
      expect(Span).toBeVisible()
      // expect(Paragraph?.tagName.toLowerCase()).toBe('h3')
      // expect(Paragraph?.classList).toContain('text-lg')
      // await updateProps({ level: 3, content: { ...content } })
      expect(Paragraph?.tagName.toLowerCase()).toBe('h4')
      expect(Paragraph?.classList).toContain('text-md')
      // await updateProps({ level: 4, content: { ...content } })
      // expect(Paragraph?.tagName.toLowerCase()).toBe('h5')
    })
  })

  describe('span marks', () => {
    const marksParagraph = content[Paragraph.marks]
    const em = marksParagraph.children[0].text
    const strong = marksParagraph.children[1].text
    const link = marksParagraph.children[2].text

    test('Render span with "em" mark', () => {
      const { getByText } = base.render()
      const Span = getByText(em)
      expect(Span).toBeVisible()
      expect(Span.classList).toContain('italic')
    })

    test('Render span with "strong" mark', () => {
      const { getByText } = base.render()
      const Span = getByText(strong)
      expect(Span).toBeVisible()
      expect(Span.classList).toContain('font-semibold')
    })

    test('Render link with "link" mark', () => {
      const { getByText } = base.render()
      const Span = getByText(link) as HTMLLinkElement
      expect(Span).toBeVisible()
      expect(Span.tagName.toLowerCase()).toBe('a')
      expect(Span.href).toContain('href')
    })
  })

  describe('column settings', () => {
    test('Render content inside both column div, by default', () => {
      const { getByText } = base.render()
      const Column = getByText(normal).parentElement?.parentElement
      expect(Column?.classList).toContain('lg:w-full')
    })

    test('Render content inside only second column div, after marker', () => {
      const { getByText } = base.render()
      const Column = getByText(title).parentElement?.parentElement
      expect(Column?.classList).toContain('lg:w-1/2')
    })
  })
})
