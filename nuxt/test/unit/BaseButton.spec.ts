import { Base } from '../utils/core'
import Component from '~/components/BaseButton.vue'
const base = new Base(Component)

const content = '__test content__'
describe('components/BaseButton.vue', () => {
  test('Show content prop', () =>
    base.testPropInline((select) => select.getByText(content), { content }))
  test('Show content slot', () => base.testHasSlot('content'))
  describe('Root container', () => {
    test('Root container is a "button", by default', () => {
      base.render()
      const Root = base.selectRoot()
      expect(Root.tagName.toLowerCase()).toBe('button')
    })

    test('Root container emit click on click', () => base.testEmitter())

    test('Root container is an "a" tag, if target is set', () => {
      base.render({ props: { target: '#home' } })
      const Root = base.selectRoot()
      expect(Root.tagName.toLowerCase()).toBe('a')
      expect(Root).toHaveAttribute('href', '#home')
    })

    test('Root container is a "nuxt-link", if "target" is set and "route" is true', () => {
      base.render({ props: { target: 'pageAbout', route: true } })
      const Root = base.selectRoot()
      expect(Root.tagName.toLowerCase()).toBe('nuxt-link')
      expect(Root).toHaveAttribute('to', 'pageAbout')
    })
  })
})
