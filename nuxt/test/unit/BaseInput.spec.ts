import { Base } from '../utils/core'
import Component from '~/components/BaseInput.vue'
const base = new Base(Component)

describe('components/BaseInput.vue', () => {
  test('', async () => {
    const { getByText } = base.render()
  })
})
