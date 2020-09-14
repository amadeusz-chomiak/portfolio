import { Base } from '../utils/core'
import Component from '~/components/TransitionPortal.vue'
const base = new Base(Component)

describe('components/TransitionPortal.vue', () => {
  test('', async () => {
    const { getByText } = base.render()
  })
})
