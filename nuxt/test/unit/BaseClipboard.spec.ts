import { Base } from '../utils/core'
import Component from '~/components/BaseClipboard.vue'
const base = new Base(Component, { props: { content: 'content' } })

describe('components/BaseClipboard.vue', () => {
  it('render text from content prop', () =>
    base.testPropInline((renderer) => renderer.getByDisplayValue('content')))

  it('pass rows prop to textarea with 1 as default', async () => {
    const { getByDisplayValue, updateProps } = base.render()
    const Textarea = getByDisplayValue('content')
    expect(Textarea).toHaveAttribute('rows', '1')

    await updateProps({
      rows: 5,
    })

    expect(Textarea).toHaveAttribute('rows', '5')
  })
})
