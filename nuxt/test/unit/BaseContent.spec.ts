import { Base } from '../utils/core'
import Component from '~/components/BaseContent.vue'
import { querySite } from '~/dev/databaseQuery'
const content = querySite.Pages[0].Page.Content.pl
const base = new Base(Component, { props: { content } })

describe('components/BaseContent.vue', () => {
  test('Render span text of "content" prop', () => {
    const { getByText } = base.render()
    const Span = getByText(content[0].children[0].text)
    expect(Span).toBeVisible()
    expect(Span.tagName.toLowerCase()).toBe('span')
  })
})
