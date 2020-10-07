import { Base } from '../utils/core'
import Component from '~/components/ButtonGithub.vue'
const base = new Base(Component)

describe('components/ButtonGithub.vue', () => {
  test('', async () => {
    const { getByText } = base.render()
  })
})
