import { Store, get, set } from 'idb-keyval'

// type UseIndexDBReturn = {
//   cacheGet: (key: string) => typeof get
//   cacheSet: (key: string, value: any) =>typeof set
// }

// type UseIndexDB = {
//   (store: 'database'): UseIndexDBReturn
// }

type StoreId = 'database'

export const useIndexDB = (storeId: StoreId) => {
  const store = new Store(storeId, 'store')
  return {
    cacheGet: (key: string | number) => get(key, store),
    cacheSet: (key: string | number, value: any) => set(key, value, store),
  }
}
