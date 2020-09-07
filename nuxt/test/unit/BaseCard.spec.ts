import { Base } from '../utils/core'
import Component from '~/components/BaseCard.vue'
const base = new Base(Component)

describe('components/BaseCard.vue', () => {
  test('show "content" slot', () => base.testHasSlot('content'))
  test('show "action" slot', () => base.testHasSlot('action'))
  test('Change background based on "background" prop', async () => {
    const { updateProps } = base.render()
    const Root = base.selectRoot()
    expect(Root).toHaveClass('bg-primary-600')

    //* dark
    await updateProps({ background: 'dark' })
    expect(Root).toHaveClass('bg-primary-600')

    //* darker
    await updateProps({ background: 'darker' })
    expect(Root).toHaveClass('bg-primary-800')

    //* circuit
    await updateProps({ background: 'circuit' })
    expect(Root).toHaveClass('bg-circuit')
  })
})
