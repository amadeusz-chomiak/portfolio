import { Base } from '../utils/core'
import Component from '~/components/DefinitionPopup.vue'
const base = new Base(Component)

describe('components/DefinitionPopup.vue', () => {
  test('', async () => {
    const { getByText } = base.render()
  })
})
