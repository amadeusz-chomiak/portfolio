// eslint-disable-next-line import/named
import { reactive, UnwrapRef, shallowReadonly } from '@nuxtjs/composition-api'

interface State {
  [key: string]: string | boolean | number
}

const storeFactory = <S extends State>(initState: S) => {
  const state = reactive(initState)
  const set = (
    key: keyof UnwrapRef<S>,
    value: UnwrapRef<S>[keyof UnwrapRef<S>]
  ) => (state[key] = value)

  return {
    set,
    state: shallowReadonly(state),
  }
}

export const useStore = {
  requestCooperation: storeFactory({
    showModal: false as boolean,
    manual: false as boolean,
  }),
}
