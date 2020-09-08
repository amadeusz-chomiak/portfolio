import { Base } from '../utils/core'
import Component from '~/components/TheNavigation.vue'
const base = new Base(Component)

describe('components/TheNavigation.vue', () => {
  test('', async () => {
    const { getByText } = base.render()
  })
})
