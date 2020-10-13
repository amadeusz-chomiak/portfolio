import { Base } from '../utils/core'
import Component from '~/components/ModalScreen.vue'
const base = new Base(Component)

describe('components/ModalScreen.vue', () => {
  it('emit close on close button click', () =>
    base.testEmitter(
      ({ getByTestId }) => getByTestId('btn-close'),
      undefined,
      'close'
    ))

  it('emit close on container click', () =>
    base.testEmitter(undefined, undefined, 'close'))
})
