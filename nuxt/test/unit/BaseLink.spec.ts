import { Base } from '../utils/core'
import Component from '~/components/BaseLink.vue'
const content = 'content'
const to = 'to'
const base = new Base(Component, {
  props: {
    content,
    to,
  },
})

describe('components/BaseLink.vue', () => {
  test('has default slot', () => base.testHasSlot())
  test('render "content" prop', () =>
    base.testPropInline(({ getByText }) => getByText(content)))
  test('Set href to "to" prop content', () => {
    base.render()
    const Root = base.selectRoot() as HTMLLinkElement
    expect(Root.href).toContain(to)
  })
})
