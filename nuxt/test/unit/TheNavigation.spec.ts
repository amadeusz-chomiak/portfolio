import { wait } from '@testing-library/vue'
import { Base } from '../utils/core'
import Component from '~/components/TheNavigation.vue'
const base = new Base(Component)

describe('components/TheNavigation.vue', () => {
  test('Change to bottom navigation on resize to small viewport', async () => {
    const { getByTestId } = base.render()
    global.innerWidth = 420
    global.dispatchEvent(new Event('resize'))
    wait(() => {
      expect(getByTestId('nav-bottom')).toBeVisible()
      expect(getByTestId('nav-side')).not.toBeVisible()
    })
  })
})
