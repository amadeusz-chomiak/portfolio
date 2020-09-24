import { fireEvent } from '@testing-library/vue'
import { Base } from '../utils/core'
import Component from '~/components/DefinitionBox.vue'
const definition = {
  _key: '5261c47e7278',
  _type: 'definition',
  color: {
    _type: 'color',
    alpha: 1,
    hex: '#f03e2f',
    hsl: {
      _type: 'hslaColor',
      a: 1,
      h: 4.663212435233159,
      l: 0.5627450980392157,
      s: 0.8654708520179372,
    },
    hsv: {
      _type: 'hsvaColor',
      a: 1,
      h: 4.663212435233159,
      s: 0.8041666666666667,
      v: 0.9411764705882353,
    },
    rgb: { _type: 'rgbaColor', a: 1, b: 47, g: 62, r: 240 },
  },
  content: 'content',
  text: 'text',
  textBefore: 'textBefore',
  textAfter: 'textAfter',
  title: 'title',
}

const base = new Base(Component, { props: { definition } })

describe('components/DefinitionBox.vue', () => {
  test('Root tag is a paragraph', () => base.testRootTag('p'))
  test('Render "textBefore" from "definition" prop', () =>
    base.testPropInline((select) => select.getByText('textBefore')))
  test('Render "text" from "definition" prop', () =>
    base.testPropInline((select) => select.getByText('text')))
  test('Render "textAfter" from "definition" prop', () =>
    base.testPropInline((select) => select.getByText('textAfter')))

  test('set main text color to definition color', () => {
    const { getByText } = base.render()
    const MainText = getByText('text')
    expect(MainText).toHaveStyle('color: #f03e2f')
  })
  test('Render ButtonIcon with "?" as an icon, with definition color', () => {
    const { getByText } = base.render()
    const Button = getByText('?')
    expect(Button).toHaveStyle('color: #f03e2f')
  })
  test('Change ButtonIcon based on showPopup ref', async () => {
    const { getByText, getByTestId } = base.render()
    const Button = getByTestId('toggle')
    expect(getByText('?')).toBeVisible()
    await fireEvent.click(Button)
    expect(() => getByText('?')).toThrowError()
    await fireEvent.click(Button)
    expect(getByText('?')).toBeVisible()
  })
  test('show popup content only after button click', async () => {
    const { getByText, getByTestId } = base.render()
    const Button = getByTestId('toggle')
    expect(() => getByText('content')).toThrowError()
    await fireEvent.click(Button)
    expect(getByText('content')).toBeVisible()
    await fireEvent.click(Button)
    expect(() => getByText('content')).toThrowError()
  })
})
