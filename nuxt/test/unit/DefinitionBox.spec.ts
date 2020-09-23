import { Base } from '../utils/core'
import Component from '~/components/DefinitionBox.vue'
const base = new Base(Component)

describe('components/DefinitionBox.vue', () => {
  test('', async () => {
    const { getByText } = base.render()
  })
})
