import { ref } from '@nuxtjs/composition-api'
import { initializeApp } from 'firebase/app'

const config = {
  apiKey: 'AIzaSyAocN-_Yrnul_fDZGWNMpKEOVAL56g8N5M',
  authDomain: 'amadeusz-chomiak.firebaseapp.com',
  databaseURL: 'https://amadeusz-chomiak.firebaseio.com',
  projectId: 'amadeusz-chomiak',
  storageBucket: 'amadeusz-chomiak.appspot.com',
  messagingSenderId: '543824562177',
  appId: '1:543824562177:web:50360beb75072bbaa79800',
  measurementId: 'G-6P2F73T523',
}

const app = process.client ? initializeApp(config) : undefined

export interface CooperationRequest {
  email: string
  request: string
}

interface FirestoreCollections {
  cooperationRequest: 'cooperationRequest'
}

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
        await db?.collection(collection).add(data)
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
