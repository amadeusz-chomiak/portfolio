import { Base } from '../utils/core'
import Component from '~/components/BaseContent.vue'
const base = new Base(Component)

describe('components/BaseContent.vue', () => {
  test('', async () => {
    const { getByText } = base.render()
  })
})
