import { waitFor, fireEvent } from '@testing-library/vue'
import { Base } from '../utils/core'
import Component from '~/components/TheNavigation.vue'
// import { useIcon, IconId } from '~/composable/useIcon'
// const icon: IconId = 'menu'
// const { alt } = useIcon(icon)
const base = new Base(Component)

describe('components/TheNavigation.vue', () => {
  it('Side navigation is hidden before medium viewport size', () => {
    const { getByTestId } = base.render()

    const NavSideClasses = getByTestId('nav-side').classList
    expect(NavSideClasses.toString()).toContain('hidden')
    expect(NavSideClasses.toString()).toContain('md:flex')
  })

  it('Bottom navigation is hidden after medium viewport size', () => {
    const { getByTestId } = base.render()

    const NavSideClasses = getByTestId('nav-bottom').classList
    expect(NavSideClasses.toString()).toContain('md:hidden')
  })

  it('Toggle side navigation panel on click on menu button', async () => {
    const { getByTestId } = base.render()

    const Button = getByTestId('nav-button')
    await fireEvent.click(Button)
    const Panel = getByTestId('nav-panel')
    expect(Panel).toBeVisible()
    await fireEvent.click(Button)
    await waitFor(() => {
      expect(() => getByTestId('nav-panel')).toThrowError()
    })
  })

  it('Toggle side navigation panel on panel click', async () => {
    const { getByTestId } = base.render()

    const Button = getByTestId('nav-button')
    await fireEvent.click(Button)
    const Panel = getByTestId('nav-panel')
    expect(Panel).toBeVisible()
    jest.runAllTimers()
    await fireEvent.click(Panel)
    await waitFor(() => {
      expect(() => getByTestId('nav-panel')).toThrowError()
    })
  })
})
