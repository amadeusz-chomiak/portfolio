import { Base } from '../utils/core'
import Component from '~/components/BaseButton.vue'
const base = new Base(Component)

const content = '__test content__'
describe('components/BaseButton.vue', () => {
  test('Show content slot', () => base.testHasSlot('content'))

  describe('Props', () => {
    test('Show "content" prop', () =>
      base.testPropInline((select) => select.getByText(content), { content }))

    test('Use primary style classes, by default', () => {
      const { getByText } = base.render({ props: { content } })
      const Button = getByText(content).parentElement
      expect(
        Array.from(Button?.classList ?? '').find((cl) =>
          cl.includes('bg-primary')
        )?.length
      ).toBeGreaterThan(0)
      //* check to not have secondary style borders
      expect(
        Array.from(Button?.classList ?? '').find((cl) => cl.includes('border'))
          ?.length
      ).toBe(undefined)
    })

    test('Use border classes when prop "secondary" is true', () => {
      base.render({ props: { secondary: true } })
      const Root = base.selectRoot()
      expect(
        Array.from(Root.classList).find((cl) => cl.includes('border'))?.length
      ).toBeGreaterThan(0)
    })

    test('Use small padding class when prop "slim" is true', () => {
      base.render({ props: { slim: true } })
      const Root = base.selectRoot()
      expect(
        Array.from(Root.children[0].classList).find((cl) => cl.includes('py-1'))
          ?.length
      ).toBeGreaterThan(0)
    })
  })

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
      expect(Root.tagName.toLowerCase()).toBe('nuxt-link-stub')
      expect(Root).toHaveAttribute('to', 'pageAbout')
    })
  })
})
