import { ref, computed, reactive, watchEffect } from '@nuxtjs/composition-api'
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { querySite, QuerySite } from '~/dev/databaseQuery'

const isProduction = process.env.NODE_ENV === 'production'

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
let state = reactive<State>({})
type StateKeys = keyof State
type StateValues = State[StateKeys]

if (!isProduction) {
  state = reactive({
    [QueryIds.site]: querySite,
  })
}

const fetchingQueries = new Set<QueryIds>()

const useQuery = <Result extends StateValues, Params extends object = {}>(
  id: QueryIds,
  query: string,
  params: Params
) => {
  const result = ref<Result>()

  const fetchQuery = async (params: Params) => {
    try {
      const resultArray = await client.fetch(query, params)
      result.value = resultArray[0]
      console.log('query result for', id, 'is', JSON.stringify(resultArray[0]))
    } catch (err) {
      throw new Error(err)
    }
  }

  if (state[id]) {
    result.value = state[id] as Result
  } else if (!fetchingQueries.has(id)) {
    fetchingQueries.add(id)
    fetchQuery(params)
  } else {
    const stopWatch = watchEffect(() => {
      if (state[id]) {
        result.value = state[id] as Result
        stopWatch()
      }
    })
  }

  return {
    result,
  }
}

export const useQuerySite = () =>
  useQuery<QuerySite>(
    QueryIds.site,
    /* groq */ `*[_type=='site']{header, pages[]{page->,...}}`,
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

export const usePageIdTransformer = () => ({
  toComponent: (id?: string) => id?.replace('page', 'Site'),
  toPath: (id?: string) => id?.toLowerCase().replace('page', ''),
})
