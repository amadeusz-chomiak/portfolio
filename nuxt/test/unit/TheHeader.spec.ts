import { fireEvent } from '@testing-library/vue'
import { Base } from '../utils/core'
import Component from '~/components/TheHeader.vue'
const base = new Base(Component)

describe('components/TheHeader.vue', () => {
  test.todo('implement tests!')
  test('', async () => {
    const { getByText } = base.render()
  })
})
