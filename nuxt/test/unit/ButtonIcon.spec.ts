import { Base } from '../utils/core'
import Component from '~/components/ButtonIcon.vue'
const base = new Base(Component)

describe('components/ButtonIcon.vue', () => {
  test('', async () => {
    const { getByText } = base.render()
  })
})
