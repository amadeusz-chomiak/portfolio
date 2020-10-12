import { fireEvent } from '@testing-library/vue'
import { Base } from '../utils/core'
import Component from '~/components/BaseInput.vue'
const base = new Base(Component, {
  props: { value: 'value', placeholder: 'placeholder', title: 'title' },
})

describe('components/BaseInput.vue', () => {
  it('works with v-model', async () => {
    const { getByDisplayValue, emitted } = base.render()
    const Input = getByDisplayValue('value')
    await fireEvent.input(Input)
    expect(emitted().input[0]).toStrictEqual(['value'])
  })

  it('has placeholder prefixed with "Np. "', () => {
    const { getByDisplayValue } = base.render()
    const Input = getByDisplayValue('value')
    expect(Input).toHaveProperty('placeholder', 'Np. placeholder')
  })

  it('has type', () => {
    const { getByDisplayValue } = base.render({ props: { type: 'email' } })
    const Input = getByDisplayValue('value')
    expect(Input).toHaveProperty('type', 'email')
  })

  it('has required text', () => {
    const { getByText } = base.render({
      props: { required: 'required', value: '' },
    })
    const Required = getByText('required')
    expect(Required).toBeVisible()
  })

  it('has title', () => {
    const { getByText, getByDisplayValue } = base.render()
    const Title = getByText('title') as HTMLLabelElement
    expect(Title).toBeVisible()
    expect(Title.tagName.toLowerCase()).toBe('label')
    const Input = getByDisplayValue('value')
    expect(Title.htmlFor.length).toBeGreaterThan(0)
    expect(Title.htmlFor).toBe(Input.id)
  })

  it('use validation based on "type" prop', () => {
    const { getByText } = base.render({ props: { type: 'email' } })
    const Helper = getByText('Podaj poprawną nazwę zakończoną @')
    expect(Helper).toBeVisible()
  })

  it('emit validation event with validation data', () => {
    const { emitted } = base.render({
      props: { type: 'email' },
    })
    expect(emitted().validation).toStrictEqual([
      ['Podaj poprawną nazwę zakończoną @'],
    ])
    //! doesn't seem to works in vue 2
    // const Input = getByDisplayValue('value')
    // await fireEvent.input(Input)
    // await updateProps({
    //   value: 'change',
    // })

    // await waitFor(() => {
    //   expect(emitted().validation.length).toBe(2)
    // })
  })

  it('set invalided styles on blur if data is invalid', async () => {
    const { getByDisplayValue } = base.render({ props: { type: 'email' } })
    const Input = getByDisplayValue('value')
    await fireEvent.blur(Input)
    expect(Input).toHaveClass('border-warning')
  })
})
