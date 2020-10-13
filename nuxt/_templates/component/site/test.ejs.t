---
to: test/unit/<%= h.changeCase.pascal(name) %>.spec.ts
---
import { Base } from '../utils/core'
import { useQuerySite } from '~/composable/useDatabase'
import Component from '~/components/<%= h.changeCase.pascal(name) %>.vue'
const base = new Base(Component)
const observer = {
  observe: jest.fn(),
}
const page = useQuerySite().result.value?.pages?.find(
  (page) => page?.page?._id === 'page[page name]'
)?.page

describe('components/<%= h.changeCase.pascal(name) %>.vue', () => {
  it('Register itself for observer from "observer" prop', async () => {
    base.render({
      props: {
        observer,
        page,
      },
    })

    expect(observer.observe).toBeCalled()
  })

  it('Render content from "page" prop', () => {
    const { getByText } = base.render({
      props: {
        page,
      },
    })
    expect(
      getByText(page?.content?.pl?.[0]?.children?.[0]?.text ?? '')
    ).toBeVisible()
  })
})
