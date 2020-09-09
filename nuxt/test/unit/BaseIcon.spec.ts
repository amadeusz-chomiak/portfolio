import { Base } from '../utils/core'
import Component from '~/components/BaseIcon.vue'
const base = new Base(Component)

describe('components/BaseIcon.vue', () => {
  test('', async () => {
    const { getByText } = base.render()
  })
})
