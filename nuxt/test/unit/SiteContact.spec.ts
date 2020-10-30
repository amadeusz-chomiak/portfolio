import { Base } from '../utils/core'
import { useQuerySite } from '~/composable/useDatabase'
import Component from '~/components/SiteContact.vue'
const base = new Base(Component)
const observer = {
  observe: jest.fn(),
}
const page = useQuerySite().result.value?.pages?.find(
  (page) => page?.page?._id === 'pageContact'
)?.page

describe('components/SiteContact.vue', () => {
  it('Register itself for observer from "observer" prop', () => {
    base.render({
      props: {
        observer,
        page,
      },
    })

    expect(observer.observe).toBeCalled()
  })

  it('Render content from "page" prop', () => {
    const { getAllByText } = base.render({
      props: {
        page,
      },
    })
    expect(
      getAllByText(page?.content?.pl?.[2]?.children?.[0]?.text ?? '')[0]
    ).toBeVisible()
  })
})
