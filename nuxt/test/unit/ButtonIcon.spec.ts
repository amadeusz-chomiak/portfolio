import { Base } from '../utils/core'
import Component from '~/components/ButtonIcon.vue'
import { useIcon, IconId } from '~/composable/useIcon'
const icon: IconId = 'close'
const { alt } = useIcon(icon)

const base = new Base(Component, { props: { icon } })
describe('components/ButtonIcon.vue', () => {
  describe('correctly extends BaseButton', () => {
    test('Root container emit click on click', () => base.testEmitter())
    test('Use border classes when prop "secondary" is true', () => {
      base.render({ props: { secondary: true, icon } })
      const Root = base.selectRoot()
      expect(
        Array.from(Root.classList).find((cl) => cl.includes('border'))?.length
      ).toBeGreaterThan(0)
    })
  })
  test('Create svg icon, based of icon prop', () => {
    const { getByAltText } = base.render()
    expect(getByAltText(alt.value)).toBeVisible()
  })
  test('pass "color" prop to BaseIcon', () => {
    const { getByAltText } = base.render({ props: { color: '#fff', icon } })
    expect(getByAltText(alt.value)).toHaveStyle('color: #fff')
  })
})
