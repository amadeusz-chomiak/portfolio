import { Base } from '../utils/core'
import Component from '~/components/BaseCard.vue'
const base = new Base(Component)

describe('components/BaseCard.vue', () => {
  it('show "content" slot', () => base.testHasSlot('content'))
  it('show "action" slot', () => base.testHasSlot('action'))
  it('show "icon" slot', () => base.testHasSlot('icon'))
  it('Set background class for "background" prop equal to "circuit"', () => {
    const renderer = base.render({ props: { background: 'circuit' } })
    const Root = base.selectRoot(renderer)

    expect(Root).toHaveClass('bg-circuit')
  })
  it('Set background class for "background" prop equal to "dark"', () => {
    const renderer = base.render({ props: { background: 'dark' } })
    const Root = base.selectRoot(renderer)

    expect(Root).toHaveClass('bg-primary-800')
  })
  it('Set background class for "background" prop equal to "darker"', () => {
    const renderer = base.render({ props: { background: 'darker' } })
    const Root = base.selectRoot(renderer)

    expect(Root).toHaveClass('bg-primary-900')
  })
  it('Set paddings class for "small" prop set to true', () => {
    const renderer = base.render({ props: { small: true } })
    const Root = base.selectRoot(renderer)

    expect(Root).toHaveClass('p-2')
    expect(Root).not.toHaveClass('pt-6')
  })
})
