import { fireEvent } from '@testing-library/vue'
import { Base } from '../utils/core'
import Component from '~/components/BaseTextarea.vue'
const base = new Base(Component, {
  props: { value: 'value', placeholder: 'placeholder', title: 'title' },
})

describe('components/BaseTextarea.vue', () => {
  it('works with v-model', async () => {
    const { getByText, emitted } = base.render()
    const Textarea = getByText('value')
    await fireEvent.input(Textarea)
    expect(emitted().input[0]).toStrictEqual(['value'])
  })
  it('has placeholder prefixed with "Np. "', () => {
    const { getByText } = base.render()
    const Textarea = getByText('value')
    expect(Textarea).toHaveProperty('placeholder', 'Np. placeholder')
  })
  it('has title', () => {
    const { getByText } = base.render()
    const Title = getByText('title') as HTMLLabelElement
    expect(Title).toBeVisible()
    expect(Title.tagName.toLowerCase()).toBe('label')
    const Textarea = getByText('value')
    expect(Title.htmlFor.length).toBeGreaterThan(0)
    expect(Title.htmlFor).toBe(Textarea.id)
  })
})
