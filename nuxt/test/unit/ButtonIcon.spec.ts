import { Base } from '../utils/core'
import Component from '~/components/ButtonIcon.vue'
import { useIcon, IconId } from '~/composable/useIcon'
const icon: IconId = 'close'
const { alt } = useIcon(icon)

const base = new Base(Component, { props: { icon } })
describe('components/ButtonIcon.vue', () => {
  describe('correctly extends BaseButton', () => {
    it('Root container emit click on click', () => base.testEmitter())
    it('Use border classes when prop "secondary" is true', () => {
      base.render({ props: { secondary: true, icon } })
      const Root = base.selectRoot()
      expect(
        Array.from(Root.classList).find((cl) => cl.includes('border'))?.length
      ).toBeGreaterThan(0)
    })
  })
  it('Create svg icon, based of icon prop', () => {
    const { getByAltText } = base.render()
    expect(getByAltText(alt.value)).toBeVisible()
  })

  it('set "height" prop for BaseIcon, based on "slim" prop', () => {
    const { getByAltText } = base.render({
      props: { slim: true },
    })
    expect(getByAltText(alt.value)).toHaveClass('h-4')
  })
})
