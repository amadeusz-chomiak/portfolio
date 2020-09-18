import { Base } from '../utils/core'
import Component from '~/components/BaseLink.vue'
const base = new Base(Component)

describe('components/BaseLink.vue', () => {
  test('', async () => {
    const { getByText } = base.render()
  })
})
