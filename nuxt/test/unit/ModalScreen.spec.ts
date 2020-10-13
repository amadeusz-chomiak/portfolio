import { Base } from '../utils/core'
import Component from '~/components/ModalScreen.vue'
const base = new Base(Component, { props: { title: 'title', show: true } })

describe('components/ModalScreen.vue', () => {
  it('emit close on close button click', () =>
    base.testEmitter(
      ({ getByTestId }) => getByTestId('btn-close'),
      undefined,
      'close'
    ))

  it('emit close on container click', () =>
    base.testEmitter(
      ({ getByTestId }) => getByTestId('bg'),
      undefined,
      'close'
    ))

  it('show "title" prop', () =>
    base.testPropInline(({ getByText }) => getByText('title')))

  it('show default slot', () => base.testHasSlot())

  it('hide if prop "show" is false', () => {
    const { getByText } = base.render({ props: { show: false } })
    expect(() => getByText('title')).toThrow()
  })
})
