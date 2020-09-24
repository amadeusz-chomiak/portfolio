import { Base } from '../utils/core'
import Component from '~/components/DefinitionPopup.vue'
const base = new Base(Component, {
  props: {
    content: 'content',
    title: 'title',
    color: '#fff',
  },
})

describe('components/DefinitionPopup.vue', () => {
  test('Render "title" from prop', () =>
    base.testPropInline((select) => select.getByText('title')))

  test('Render "content" from prop', () =>
    base.testPropInline((select) => select.getByText('content')))

  test('set title color to "color" prop', () => {
    const { getByText } = base.render()
    const MainText = getByText('title')
    expect(MainText).toHaveStyle('color: #fff')
  })
})
