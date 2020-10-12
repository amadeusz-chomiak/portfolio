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
  it('Render "title" from prop', () =>
    base.testPropInline((select) => select.getByText('title')))

  it('Render "content" from prop', () =>
    base.testPropInline((select) => select.getByText('content')))

  it('set title color to "color" prop', () => {
    const { getByText } = base.render()
    const MainText = getByText('title')
    expect(MainText).toHaveStyle('color: #fff')
  })
})
