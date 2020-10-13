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
  it('has default slot', () => base.testHasSlot())
  it('render "content" prop', () =>
    base.testPropInline(({ getByText }) => getByText(content)))
  it('Set href to "to" prop content', () => {
    base.render()
    const Root = base.selectRoot() as HTMLLinkElement
    expect(Root.href).toContain(to)
  })
})
