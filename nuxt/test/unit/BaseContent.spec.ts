import { Base } from '../utils/core'
import Component from '~/components/BaseContent.vue'
import { Content } from '~/types/BaseContent'

const enum Paragraph {
  normal,
  title,
  marks,
}

const content: Content = [
  {
    //* style normal
    _key: 'a7c3c1455c07',
    _type: 'block',
    children: [
      {
        _key: '7c0a9e6ce4cd',
        _type: 'span',
        marks: [],
        text: 'normal',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
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
    ],
    markDefs: [],
    style: 'normal',
  },
]
const base = new Base(Component, { props: { content } })

describe('components/BaseContent.vue', () => {
  describe('paragraph style tests', () => {
    const normal = content[Paragraph.normal].children[0].text
    const title = content[Paragraph.title].children[0].text
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
  })

  describe('span marks tests', () => {
    const marksParagraph = content[Paragraph.marks]
    const em = marksParagraph.children[0].text
    const strong = marksParagraph.children[1].text

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
  })
})
