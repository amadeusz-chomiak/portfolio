import { Base } from '../utils/core'
import Component from '~/components/BaseIcon.vue'
import { useIcon, IconId } from '~/composable/useIcon'
const base = new Base(Component)
const icon: IconId = 'close'
const { alt } = useIcon(icon)
describe('components/BaseIcon.vue', () => {
  it('show icon based on "icon" prop', () => {
    const { getByAltText } = base.render({ props: { icon } })
    expect(getByAltText(alt.value)).toBeVisible()
  })

  it('fallback to icon text when no id found', () => {
    const { getByText } = base.render({ props: { icon: '?' } })
    expect(getByText('?')).toBeVisible()
  })
  describe('icon-classes prop', () => {
    it('pass "iconClasses" prop to unicon', () => {
      const { getByAltText } = base.render({
        props: { icon, iconClasses: ['icon-class'] },
      })
      expect(getByAltText(alt.value)).toHaveClass('icon-class')
    })

    it('pass "iconClasses" prop to github icon', () => {
      const { alt: githubAlt } = useIcon('github')

      const { getByAltText } = base.render({
        props: { icon: 'github', iconClasses: ['icon-class'] },
      })
      expect(getByAltText(githubAlt.value)).toHaveClass('icon-class')
    })

    it('pass "iconClasses" prop to text icon', () => {
      const { getByText } = base.render({
        props: { icon: '?', iconClasses: ['icon-class'] },
      })
      expect(getByText('?').parentElement).toHaveClass('icon-class')
    })
  })
  describe('icon-style prop', () => {
    it('pass "iconStyle" prop to unicon', () => {
      const { getByAltText } = base.render({
        props: { icon, iconStyle: { color: '#fff' } },
      })
      expect(getByAltText(alt.value)).toHaveStyle('color: #fff')
    })

    it('pass "iconStyle" prop to github icon', () => {
      const { alt: githubAlt } = useIcon('github')

      const { getByAltText } = base.render({
        props: { icon: 'github', iconStyle: { color: '#fff' } },
      })
      expect(getByAltText(githubAlt.value)).toHaveStyle('color: #fff')
    })

    it('pass "iconStyle" prop to text icon', () => {
      const { getByText } = base.render({
        props: { icon: '?', iconStyle: { color: '#fff' } },
      })
      expect(getByText('?').parentElement).toHaveStyle('color: #fff')
    })
  })
})
