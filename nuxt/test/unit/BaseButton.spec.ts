import { fireEvent } from '@testing-library/vue'
import { Base } from '../utils/core'
import Component from "~/components/BaseButton.vue";
const base = new Base(Component)

describe("components/BaseButton.vue", () => {
  test.todo("implement tests!")
  test("", async () => {
    const { getByText } = base.render()
  });
});
