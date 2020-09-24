import { Base } from '../utils/core'
import Component from '~/components/SiteSolution.vue'
import { useQuerySite } from '~/composable/useDatabase'
const base = new Base(Component)
const observer = {
  observe: jest.fn(),
}

const page = useQuerySite().result.value?.pages?.find(
  (page) => page?.page?._id === 'pageSolution'
)?.page
describe('components/SiteSolution.vue', () => {
  test('Register itself for observer from "observer" prop', () => {
    base.render({
      props: {
        observer,
        page,
      },
    })

    expect(observer.observe).toBeCalled()
  })

  test('Render content from "page" prop', () => {
    const { getByText } = base.render({
      props: {
        page,
      },
    })
    expect(
      getByText(page?.content?.pl?.[1]?.children?.[0]?.text ?? '')
    ).toBeVisible()
  })

  test('Render solution cards from "page" prop', () => {
    const { getByText } = base.render({
      props: {
        page,
      },
    })
    expect(
      getByText(
        page?.solutions?.[0]?.solution?.content?.pl?.[0]?.children?.[0]?.text ??
          ''
      )
    ).toBeVisible()
  })
})
