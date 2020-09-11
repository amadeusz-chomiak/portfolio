import { Base } from '../utils/core'
import Component from '~/components/SiteHero.vue'
const base = new Base(Component)

describe('components/SiteHero.vue', () => {
  test('', async () => {
    const { getByText } = base.render()
  })
})
