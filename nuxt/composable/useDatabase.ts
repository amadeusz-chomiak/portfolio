import { reactive, useStatic, ref, toRefs } from '@nuxtjs/composition-api'

import sanityClient from '@sanity/client'
import { useIndexDB } from './useIndexDB'

const isProduction = process.env.NODE_ENV === 'production'

const { cacheGet, cacheSet } = useIndexDB('database')

const client = sanityClient({
  projectId: '29z9xfxx',
  dataset: 'production',
  useCdn: true,
})

type QueryFunction = (params: {
  [key: string]: Promise<any>
}) => object | number | string
type UseDatabase = () => { [key: string]: QueryFunction }

const enum QueryIds {
  site,
}

type State = { [key: number]: object }
let state: State = {}

if (!isProduction) {
  state = {
    // [QueryIds.site]: {},
  }
}

const fetch = () => {}

const useQuery = <Params extends object>(
  id: QueryIds,
  query: string,
  params: Params
) => {
  const fetching = ref(true)
  const error = ref<Error | undefined>(undefined)
  let result = reactive<object>({})

  const resultState = state[id]
  if (resultState) {
    fetching.value = false
    result = reactive(resultState)

    return {
      fetching,
      result,
      error,
    }
  }

  // todo fetch while geting data from indexDB
  const fetchQuery = async (params: Params) => {
    try {
      result = reactive(await client.fetch(query, params))
      await cacheSet(id, result)
    } catch (err) {
      error.value = err
      // todo add retry module
    } finally {
      fetching.value = false
    }
  }

  cacheGet(id)
    .then((response) => {
      if (response && typeof response === 'object') {
        result = reactive(response)
      }
    })
    .finally(() => fetchQuery(params))

  return {
    fetching,
    result,
    error,
  }
}

export const useDatabase: UseDatabase = () => ({
  querySite: () =>
    useQuery(
      QueryIds.site,
      /* groq */ `*[_type=='site']{Header, Pages[]{Page->,...}}`,
      {}
    ),
})
