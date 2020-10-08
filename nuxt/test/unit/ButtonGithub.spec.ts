import { Base } from '../utils/core'
import Component from '~/components/ButtonGithub.vue'
import { useIcon } from '~/composable/useIcon'
const base = new Base(Component)
const { alt } = useIcon('github')
describe('components/ButtonGithub.vue', () => {
  test('Render content', () => {
    const { getByAltText } = base.render()
    expect(getByAltText(alt.value)).toBeVisible()
  })
})
