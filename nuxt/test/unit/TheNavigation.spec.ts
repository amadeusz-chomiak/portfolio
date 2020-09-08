import { fireEvent } from '@testing-library/vue'
import { Base, useQuerySite } from '../utils/core'
import Component from '~/components/TheNavigation.vue'
const base = new Base(Component)
const { result } = useQuerySite()

describe('components/TheNavigation.vue', () => {
  test('Render site links', () => {
    const { getByText } = base.render()
    const pages = result.value?.pages
    pages?.forEach((page) => {
      const Link = getByText(page?.title?.pl ?? '')
      expect(Link).toBeVisible()
    })
  })

  test('Render main link card', () => {
    const { getByText } = base.render()
    const page = result.value?.pages?.find((page) => page?.card)
    const Button = getByText(page?.card?.action?.primary?.pl ?? '')
    expect(Button).toBeVisible()

    const Content = getByText(
      page?.card?.content?.pl?.[0]?.children?.[0]?.text ?? ''
    )
    expect(Content).toBeVisible()
  })
})
