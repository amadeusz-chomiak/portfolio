import { ref, computed } from '@nuxtjs/composition-api'
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { useIndexDB } from './useIndexDB'
import { querySite, QuerySite } from '~/dev/databaseQuery'

const isProduction = process.env.NODE_ENV === 'production'

const { cacheGet, cacheSet } = useIndexDB('database')

const client = sanityClient({
  projectId: '29z9xfxx',
  dataset: 'production',
  useCdn: true,
})
const imageBuilder = imageUrlBuilder(client)
type QueryFunction = (params: {
  [key: string]: Promise<any>
}) => object | number | string
type UseDatabase = () => { [key: string]: QueryFunction }

const enum QueryIds {
  site,
}

type anyObject = { [key: string]: anyObject }
type State = { [QueryIds.site]?: QuerySite }
let state: State = {}
type StateKeys = keyof State
type StateValues = State[StateKeys]
if (!isProduction) {
  state = {
    [QueryIds.site]: querySite,
  }
}

const useQuery = <Result extends StateValues, Params extends object = {}>(
  id: QueryIds,
  query: string,
  params: Params,
  onlyFirst = true
) => {
  const fetching = ref(true)
  const error = ref<Error>()
  const result = ref<Result>()

  const resultState = state[id]
  if (resultState) {
    fetching.value = false
    result.value = resultState as Result

    return {
      fetching,
      result,
      error,
    }
  }

  // todo fetch while geting data from indexDB
  const fetchQuery = async (params: Params) => {
    try {
      const resultArray = await client.fetch(query, params)
      if (onlyFirst) {
        result.value = resultArray[0]
      } else {
        throw new Error('Todo implement arrays')
        // result.value = { list: resultArray }
      }
      await cacheSet(id, result)
    } catch (err) {
      error.value = err
      console.error(err)
      // todo add retry module
    } finally {
      fetching.value = false
    }
  }

  cacheGet(id)
    .then((response) => {
      if (response && typeof response === 'object') {
        result.value = response as Result
      }
    })
    .catch((err) => console.error(err))
    .finally(() => fetchQuery(params))

  return {
    fetching,
    result,
    error,
  }
}

export const useQuerySite = () =>
  useQuery<QuerySite>(
    QueryIds.site,
    /* groq */ `*[_type=='Site']{Header, Pages[]{Page->,...}}`,
    {}
  )

export const useImage = (
  image:
    | DeepPartial<{
        _type: string
        asset: {
          _ref: string
          _type: string
        }
      }>
    | undefined,
  height: number = 1200
) =>
  computed(() =>
    image
      ? imageBuilder.image(image).auto('format').height(height).fit('max').url()
      : ''
  )
