import '@testing-library/cypress/add-commands'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import { attachCustomCommands } from 'cypress-firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBXIixYPVYJATHkJZVmj9RSGY2-a3jlYxo',
  authDomain: 'whats-for-dinner-cc0f4.firebaseapp.com',
  projectId: 'whats-for-dinner-cc0f4',
  storageBucket: 'whats-for-dinner-cc0f4.appspot.com',
  messagingSenderId: '675481257123',
  appId: '1:675481257123:web:a0819bf32d02deace42b16',
  measurementId: 'G-KHWFHE5CED',
}

firebase.initializeApp(firebaseConfig)

attachCustomCommands({ Cypress, cy, firebase })
