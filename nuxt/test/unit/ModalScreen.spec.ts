import { Base } from '../utils/core'
import Component from '~/components/ModalScreen.vue'
const base = new Base(Component)

describe('components/ModalScreen.vue', () => {
  it('', async () => {
    const { getByText } = base.render()
  })
})
