import { Base } from '../utils/core'
import Component from '~/components/SiteSolution.vue'
const base = new Base(Component)

describe('components/SiteSolution.vue', () => {
  test('', async () => {
    const { getByText } = base.render()
  })
})
