import { ref } from '@nuxtjs/composition-api'
import {
  app,
  CooperationRequest,
  FirestoreCollections,
  nameToDev,
} from '~/utils/firebase'

export const firestore = () => {
  //* factory
  const addFactory = <Data extends {}>(
    collection: keyof FirestoreCollections
  ) => () => {
    const error = ref<Error | undefined>(undefined)
    const adding = ref(false)

    const add = async (data: Data) => {
      adding.value = true
      error.value = undefined
      try {
        //* client only
        if (process.server) return
        //* init
        await import('firebase/firestore')
        const db = app?.firestore()
        //* request
        await db
          ?.collection(
            process.env.NODE_ENV === 'production'
              ? collection
              : nameToDev(collection)
          )
          .add(data)
      } catch (error) {
        error.value = error
      } finally {
        adding.value = false
      }
    }

    return {
      add,
      adding,
      error,
    }
  }

  //* add to database
  const useAddCooperationRequest = addFactory<CooperationRequest>(
    'cooperationRequest'
  )

  return { useAddCooperationRequest }
}
