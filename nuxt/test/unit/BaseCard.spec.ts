import { Base } from '../utils/core'
import Component from '~/components/BaseCard.vue'
const base = new Base(Component)

describe('components/BaseCard.vue', () => {
  test('show "content" slot', () => base.testHasSlot('content'))
  test('show "action" slot', () => base.testHasSlot('action'))
  test('Set background class for "background" prop equal to "circuit"', () => {
    const renderer = base.render({ props: { background: 'circuit' } })
    const Root = base.selectRoot(renderer)

    expect(Root).toHaveClass('bg-circuit')
  })
  test('Set background class for "background" prop equal to "dark"', () => {
    const renderer = base.render({ props: { background: 'dark' } })
    const Root = base.selectRoot(renderer)

    expect(Root).toHaveClass('bg-primary-600')
  })
  test('Set background class for "background" prop equal to "darker"', () => {
    const renderer = base.render({ props: { background: 'darker' } })
    const Root = base.selectRoot(renderer)

    expect(Root).toHaveClass('bg-primary-800')
  })
})
