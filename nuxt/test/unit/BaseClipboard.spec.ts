import { Base } from '../utils/core'
import Component from '~/components/BaseClipboard.vue'
const base = new Base(Component, { props: { content: 'content' } })

describe('components/BaseClipboard.vue', () => {
  it('render text from content prop', async () =>
    base.testPropInline((renderer) => renderer.getByDisplayValue('content')))
})
