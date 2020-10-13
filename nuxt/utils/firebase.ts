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

export const app = process.client ? initializeApp(config) : undefined

export interface CooperationRequest {
  email: string
  request: string
}

export interface FirestoreCollections {
  cooperationRequest: 'cooperationRequest'
}

export const nameToDev = (name: string) => name + 'Dev'
