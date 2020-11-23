import { useStore } from '@/composable/useStore'
import { Base } from '../utils/core'
import Component from '~/components/ModalContact.vue'

const base = new Base(Component)

describe('components/ModalContact.vue', () => {
  it('render try again button on automatic default mode', () => {
    const { getByText } = base.render()
    expect(getByText('Spróbuj wysłać jeszcze raz')).toBeVisible()
  })

  it('hide try again button on manual mode', () => {
    useStore.requestCooperation.set('manual', true)
    const { getByText } = base.render()

    expect(() => getByText('Spróbuj wysłać jeszcze raz')).toThrow()
  })
})
