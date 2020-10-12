---
to: test/unit/<%= h.changeCase.pascal(name) %>.spec.ts
---
import { Base } from '../utils/core'
import Component from '~/components/<%= h.changeCase.pascal(name) %>.vue'
const base = new Base(Component)

describe('components/<%= h.changeCase.pascal(name) %>.vue', () => {
  it('', async () => {
    const { getByText } = base.render()
  })
})
