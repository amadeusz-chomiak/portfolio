import { fireEvent } from '@testing-library/vue'
import { Base } from '../utils/core'
import Component from '~/components/BaseButton.vue'
const base = new Base(Component)

const content = '__test content__'
describe('components/BaseButton.vue', () => {
  test('Show default slot', () => base.testHasSlot())

  describe('Props', () => {
    test('Show "content" prop', () =>
      base.testPropInline((select) => select.getByText(content), { content }))

    test('Use primary style classes, by default', () => {
      const { getByText } = base.render({ props: { content } })
      const Button = getByText(content).parentElement
      expect(Button).toHaveClass('bg-primary-600')

      //* check to not have secondary style borders
      expect(Button).not.toHaveClass('border-3')
    })

    test('Use border classes when prop "secondary" is true', () => {
      base.render({ props: { secondary: true } })
      const Root = base.selectRoot()
      expect(Root.children[0]).toHaveClass('border-3')
    })

    test('Use flex-inline class when prop "inline" is true', () => {
      base.render({ props: { inline: true } })
      const Root = base.selectRoot()
      expect(Root).toHaveClass('inline-flex')
    })

    test('Use flex grow classes when prop "fill" is true', () => {
      const { getByText } = base.render({ props: { fill: true, content } })
      const Button = getByText(content).parentElement
      expect(Button).toHaveClass('flex-1')
    })

    test('Use small padding class when prop "slim" is true', () => {
      base.render({ props: { slim: true } })
      const Root = base.selectRoot()
      expect(Root.children[0]).toHaveClass('py-1')
    })
    test('Set target _blank when "outside" prop is true', () => {
      base.render({ props: { outside: true } })
      const Root = base.selectRoot()
      expect(Root).toHaveAttribute('target', '_blank')
    })
    test('Prevent click when prop "disabled" is true', async () => {
      const { emitted } = base.render({ props: { disabled: true } })
      const Root = base.selectRoot()
      await fireEvent.click(Root)
      expect(emitted().click).not.toBeTruthy()
      expect(Root).toHaveAttribute('tabindex', '-1')
    })

    test('Use justify start class when prop "decenter" is true', () => {
      const { getByText } = base.render({ props: { decenter: true, content } })
      const ContentContainer = getByText(content).parentElement
      expect(ContentContainer).toHaveClass('justify-start')

      expect(ContentContainer).not.toHaveClass('justify-center')
    })

    test('Content container get classes from "class-inner" prop', () => {
      const { getByText } = base.render({
        props: { classInner: ['h-18'], content },
      })
      const ContentContainer = getByText(content).parentElement

      expect(ContentContainer).toHaveClass('h-18')
    })

    test('Use rounded full class when prop "round" is true', () => {
      base.render({ props: { round: true } })
      const Root = base.selectRoot()
      expect(Root.children[0]).toHaveClass('rounded-full')
    })
  })

  describe('Root container', () => {
    test('Root container is a "div" with aria role of "button", by default', () => {
      base.render()
      const Root = base.selectRoot()
      expect(Root.tagName.toLowerCase()).toBe('div')
      expect(Root).toHaveAttribute('role', 'button')
    })

    test('Root container emit click on click', async () => {
      const { emitted } = base.render()
      const Root = base.selectRoot()
      await fireEvent.click(Root)
      expect(emitted().click).toBeTruthy()
    })
    test('Root container emit click on enter', async () => {
      const { emitted } = base.render()
      const Root = base.selectRoot()
      await fireEvent.keyUp(Root, { key: 'Enter', code: 'Enter' })
      expect(emitted().click).toBeTruthy()
    })

    test('Root container emit click on space', async () => {
      const { emitted } = base.render()
      const Root = base.selectRoot()
      await fireEvent.keyUp(Root, { key: 'Space', code: 'Space' })
      expect(emitted().click).not.toBeTruthy()
    })

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
