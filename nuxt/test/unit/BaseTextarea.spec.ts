import { Base } from '../utils/core'
import Component from '~/components/BaseTextarea.vue'
const base = new Base(Component)

describe('components/BaseTextarea.vue', () => {
  test('', async () => {
    const { getByText } = base.render()
  })
})
