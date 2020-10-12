import { Base } from '../utils/core'
import { useQuerySite } from '~/composable/useDatabase'
import Component from '~/components/SitePromotion.vue'
const base = new Base(Component)
const observer = {
  observe: jest.fn(),
}
const page = useQuerySite().result.value?.pages?.find(
  (page) => page?.page?._id === 'pagePromotion'
)?.page

describe('components/SitePromotion.vue', () => {
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
    const { getByText } = base.render({
      props: {
        page,
      },
    })
    expect(
      getByText(page?.content?.pl?.[1]?.children?.[0]?.text ?? '')
    ).toBeVisible()
  })

  it('Render promotion cards from "page" prop', () => {
    const { getByText } = base.render({
      props: {
        page,
      },
    })
    expect(
      getByText(
        page?.promotions?.[0]?.promotion?.content?.pl?.[0]?.children?.[0]?.text?.trim() ??
          ''
      )
    ).toBeVisible()
  })
})
