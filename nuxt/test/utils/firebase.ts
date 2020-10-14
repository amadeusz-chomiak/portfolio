import { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import { FirestoreCollections, nameToDev } from '@/utils/firebase'
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

const app = initializeApp(config)

const firestore = app.firestore()

const getCollection = (name: keyof FirestoreCollections) =>
  firestore.collection(nameToDev(name))
export const firestoreWaitForWrites = () => firestore.waitForPendingWrites()
export const firestoreTestCollection = getCollection('cooperationRequest')
